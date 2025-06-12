from flask import Flask, render_template, request, jsonify, flash, redirect, url_for, session
import os
import json
from datetime import datetime
from werkzeug.middleware.proxy_fix import ProxyFix # Import ProxyFix
from .excel_reader import ExcelReader
from .utils import enviar_correo
from .config import DEBUG, SECRET_KEY, MAIL_RECIPIENTS
from .google_auth_config import get_flow, get_auth_url, get_credentials, credentials_to_dict
import google.auth.transport.requests
import googleapiclient.discovery
from google.oauth2.credentials import Credentials

if DEBUG:
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1) # Add ProxyFix
app.config['SECRET_KEY'] = SECRET_KEY
app.config['DEBUG'] = DEBUG
app.config['GOOGLE_OAUTH2_CLIENT_ID'] = os.getenv('GOOGLE_OAUTH2_CLIENT_ID')
app.config['GOOGLE_OAUTH2_CLIENT_SECRET'] = os.getenv('GOOGLE_OAUTH2_CLIENT_SECRET')

# Ruta del archivo Excel de base
EXCEL_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 
                          'SYP-PA-DT-F005 1-24-Programación-anexo-órden-trabajo FF.xlsm')

# Crear una instancia de ExcelReader
excel_reader = ExcelReader(EXCEL_PATH)

@app.route('/')
def index():
    """Página principal para cargar el archivo Excel o ir al formulario"""
    # Verificar si el usuario está autenticado
    credentials = get_credentials()
    if not credentials:
        auth_url = get_auth_url()
        return render_template('index.html', auth_url=auth_url)
    
    # Ya no necesitamos verificar el Excel, simplemente renderizamos la página principal
    return render_template('index.html')

@app.route('/form')
def form():
    """Formulario de programación de ensayos"""
    # Definir valores predeterminados y cargar datos base ANTES de la verificación de credenciales
    tipos_material_default = ["Concreto", "Asfalto", "Arena", "Grava", "Suelo", "Material Granular"]
    codigos_ensayo_default = ["FLEX-001", "COMP-002", "TRAC-003", "DENS-004", "HUM-005"]
    unidades_default = ["kg", "g", "m³", "cm³"]
    normas_default = ["ASTM D698", "ASTM D1557", "ASTM C39", "ASTM C78"]
    
    datos_base = {
        'tipos_material': list(tipos_material_default),  # Start with a copy of the default
        'codigos_ensayo': list(codigos_ensayo_default),
        'unidades': list(unidades_default),
        'normas': list(normas_default)
    }
    
    if excel_reader.exists():
        try:
            excel_datos = excel_reader.get_base_data()
            if 'tipos_material' in excel_datos and excel_datos['tipos_material'] is not None:
                datos_base['tipos_material'] = excel_datos['tipos_material']
            
            # Ensure "Material Granular" is always present in the final list for datos_base
            if "Material Granular" not in datos_base['tipos_material']:
                datos_base['tipos_material'].append("Material Granular")

            if 'codigos_ensayo' in excel_datos and excel_datos['codigos_ensayo'] is not None:
                datos_base['codigos_ensayo'] = excel_datos['codigos_ensayo']
            if 'unidades' in excel_datos and excel_datos['unidades'] is not None:
                datos_base['unidades'] = excel_datos['unidades']
            if 'normas' in excel_datos and excel_datos['normas'] is not None:
                datos_base['normas'] = excel_datos['normas']
        except Exception as e:
            app.logger.warning(f"No se pudieron cargar datos del Excel: {str(e)}. Se usarán valores predeterminados.")
            # If an exception occurs, datos_base should still hold defaults.
            # Ensure "Material Granular" is in the default list being used.
            if "Material Granular" not in datos_base['tipos_material']:
                datos_base['tipos_material'].append("Material Granular")

    # Verificar si el usuario está autenticado
    credentials = get_credentials()
    if not credentials:
        auth_url = get_auth_url()
        # Pasar todas las variables necesarias a la plantilla, incluso si solo se muestra el enlace de autenticación
        return render_template('form.html', 
                               auth_url=auth_url,
                               tipos_material=datos_base['tipos_material'],
                               codigos_ensayo=datos_base['codigos_ensayo'],
                               unidades=datos_base['unidades'],
                               normas=datos_base['normas'])
    
    # Si el usuario está autenticado, auth_url no es necesario, pero las otras variables sí
    return render_template('form.html', 
                           tipos_material=datos_base['tipos_material'],
                           codigos_ensayo=datos_base['codigos_ensayo'],
                           unidades=datos_base['unidades'],
                           normas=datos_base['normas'])

@app.route('/submit', methods=['POST'])
def submit_form():
    """Procesar el envío del formulario"""
    try:
        # Verificar si el usuario está autenticado
        credentials = get_credentials()
        if not credentials:
            return jsonify({'success': False, 'message': 'Debe iniciar sesión con Google para enviar el formulario'})
        
        data = request.get_json()
        
        # Validar datos
        if not data:
            return jsonify({'success': False, 'message': 'No se recibieron datos'})
        
        # Validar campos requeridos
        required_fields = ['fecha', 'muestras']
        for field in required_fields:
            if field not in data:
                return jsonify({'success': False, 'message': f'Campo requerido faltante: {field}'})
        
        # Validar fecha (no en el futuro)
        fecha_str = data.get('fecha', '')
        if fecha_str:
            fecha = datetime.strptime(fecha_str, '%Y-%m-%d')
            if fecha > datetime.now():
                return jsonify({'success': False, 'message': 'La fecha no puede ser en el futuro'})
        
        # Validar cantidad como número (Comentado temporalmente ya que cantidad ahora está en cada muestra)
        # try:
        #     cantidad = float(data.get('cantidad', 0))
        # except ValueError:
        #     return jsonify({'success': False, 'message': 'La cantidad debe ser un número válido'})
        
        # Obtener el email del usuario si está autenticado con Google
        user_email_from = None
        if credentials and credentials.valid and 'https://www.googleapis.com/auth/userinfo.email' in credentials.scopes:
            try:
                # Construir el servicio para la API de userinfo
                service = googleapiclient.discovery.build('oauth2', 'v2', credentials=credentials)
                user_info = service.userinfo().get().execute()
                user_email_from = user_info.get('email')
                app.logger.info(f"Email del usuario obtenido: {user_email_from}")
            except Exception as e:
                app.logger.error(f"Error al obtener email del usuario: {str(e)}")
                # Continuar sin el email del usuario, se usará SMTP o el remitente por defecto de la app

        # Enviar correo con los datos del formulario
        # El asunto y el cuerpo del correo se generan dentro de enviar_correo en utils.py
        success, message_from_send_mail = enviar_correo(data, user_credentials=credentials, user_email_from=user_email_from)
        
        if success:
            response_message = message_from_send_mail # Usar el mensaje devuelto por enviar_correo
            return jsonify({
                'success': True,
                'message': response_message
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Error al enviar el formulario'
            })
    
    except Exception as e:
        app.logger.error(f"Error al procesar el formulario: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Error interno al procesar el formulario'
        })

@app.route('/get_excel_data')
def get_excel_data():
    """Endpoint para obtener datos del archivo Excel"""
    try:
        if not excel_reader.exists():
            return jsonify({'success': False, 'message': 'No se encontró el archivo Excel'})
        
        datos_base = excel_reader.get_base_data()
        return jsonify({'success': True, 'data': datos_base})
    
    except Exception as e:
        app.logger.error(f"Error al leer el archivo Excel: {str(e)}")
        return jsonify({'success': False, 'message': f'Error al leer el archivo Excel: {str(e)}'})

# Manejador de errores para 404 (Página no encontrada)
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# Manejador de errores para 500 (Error interno del servidor)
@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@app.route('/callback')
def callback():
    """Manejar la respuesta de la autenticación de Google"""
    flow = get_flow()
    try:
        flow.fetch_token(authorization_response=request.url)
        
        # Almacenar las credenciales en la sesión
        credentials = flow.credentials
        session['credentials'] = credentials_to_dict(credentials)
        
        # Opcional: Verificar si el correo es de Gmail si es un requisito estricto
        # user_info_service = googleapiclient.discovery.build('oauth2', 'v2', credentials=credentials)
        # user_info = user_info_service.userinfo().get().execute()
        # email = user_info.get('email')
        # if not email.endswith('@gmail.com'):
        #     flash('Acceso denegado: solo se permiten cuentas de Gmail.', 'error')
        #     return redirect(url_for('index')) # O a una página de error específica
            
        return redirect(url_for('form'))
    except Exception as e:
        app.logger.error(f"Error en el callback de OAuth2: {str(e)}")
        flash(f"Error al iniciar sesión con Google: {str(e)}. Asegúrate de que tu cuenta de Google esté configurada correctamente y que la aplicación tenga los permisos necesarios. Verifica también la configuración de URI de redirección en Google Cloud Console.", 'error')
        return redirect(url_for('index')) # Redirigir a la página principal o a una de error

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=DEBUG)