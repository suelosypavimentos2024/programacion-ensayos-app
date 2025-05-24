import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.header import Header
from datetime import datetime
# Importación del módulo de configuración
from app.config import SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_RECIPIENTS
import base64
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def generar_html_resumen(datos_formulario):
    """
    Genera un resumen HTML con los datos del formulario.
    """
    muestras_html = ""
    for muestra in datos_formulario['muestras']:
        muestras_html += f"""
        <tr>
            <td>{muestra.get('sondeo','')}</td>
            <td>{muestra.get('numero_muestra','')}</td>
            <td>{muestra.get('tipo_material','')}</td>
            <td>{muestra.get('profundidad','')}</td>
            <td>{muestra.get('cantidad','')}</td>
            <td>{muestra.get('codigo_ensayo','')}</td>
            <td>{muestra.get('nombre_ensayo','')}</td>
            <td>{muestra.get('documento_normativo','')}</td>
        </tr>
        """
    
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
            body {{ font-family: Arial, sans-serif; }}
            table {{ border-collapse: collapse; width: 100%; }}
            th, td {{ border: 1px solid #ddd; padding: 8px; }}
            th {{ background-color: #f2f2f2; }}
            .header {{ background-color: #4CAF50; color: white; padding: 10px; }}
        </style>
    </head>
    <body>
        <div class="header">
            <h2>Programacion Ensayos - Orden de Trabajo {datos_formulario.get('orden_trabajo', '')}</h2>
        </div>
        
        <h3>Informacion General</h3>
        <table>
            <tr><td><strong>Proyecto:</strong></td><td>{datos_formulario.get('proyecto', '')}</td></tr>
            <tr><td><strong>Cotizacion:</strong></td><td>{datos_formulario.get('cotizacion', '')}</td></tr>
            <tr><td><strong>Fecha:</strong></td><td>{datos_formulario.get('fecha', '')}</td></tr>
        </table>
        
        <h3>Muestras</h3>
        <table>
            <tr>
                <th>N de sondeo/apique</th>
                <th>N de muestra</th>
                <th>Tipo de material</th>
                <th>Profundidad o ubicacion</th>
                <th>Cantidad</th>
                <th>Codigo de ensayo</th>
                <th>Nombre del ensayo</th>
                <th>Documento normativo</th>
            </tr>
            {muestras_html}
        </table>
        
        <p>Este formulario fue generado el {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}</p>
    </body>
    </html>
    """
    return html

def enviar_correo(datos_formulario, user_credentials=None, user_email_from=None):
    """
    Envía un correo con el resumen de la programación de ensayos.
    Si se proporcionan user_credentials y user_email_from, intenta enviar usando la API de Gmail.
    De lo contrario, utiliza el método SMTP configurado.
    """
    subject = f"Programacion Ensayos - Orden de Trabajo {datos_formulario.get('orden_trabajo', '')}"
    html_body = generar_html_resumen(datos_formulario)

    if user_credentials and user_email_from:
        try:
            print(f"Intentando enviar correo con Gmail API desde: {user_email_from} hacia: {', '.join(MAIL_RECIPIENTS)}")
            service = build('gmail', 'v1', credentials=user_credentials)
            
            message = MIMEMultipart('alternative')
            message['to'] = ", ".join(MAIL_RECIPIENTS)
            message['from'] = user_email_from
            message['subject'] = subject
            
            # Establecer el Reply-To con el correo del solicitante si está disponible en datos_formulario
            correo_solicitante_form = datos_formulario.get('correo_solicitante')
            if correo_solicitante_form:
                message['Reply-To'] = str(Header(correo_solicitante_form, 'utf-8'))
            else: # Si no hay correo_solicitante en el form, el Reply-To será el mismo que el From (user_email_from)
                message['Reply-To'] = user_email_from

            part = MIMEText(html_body, 'html', 'utf-8')
            message.attach(part)
            
            raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
            body_gmail = {'raw': raw_message}
            
            sent_message = service.users().messages().send(userId='me', body=body_gmail).execute()
            print(f"Mensaje enviado con Gmail API, ID: {sent_message['id']}")
            return True, f"Correo enviado correctamente desde {user_email_from} a {', '.join(MAIL_RECIPIENTS)}."
        except HttpError as error:
            error_msg = f'Ocurrió un error con la API de Gmail: {error}'
            print(error_msg)
            return False, error_msg
        except Exception as e:
            error_msg = f"Error inesperado al enviar con Gmail API: {str(e)}"
            print(error_msg)
            return False, error_msg
    else:
        print("Usando método SMTP para enviar correo.")
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = str(Header(SMTP_USER, 'utf-8')) # Remitente configurado en la app
            msg['To'] = str(Header(", ".join(MAIL_RECIPIENTS), 'utf-8')) # Destinatarios configurados
            msg['Subject'] = str(Header(subject, 'utf-8'))

            correo_solicitante_form = datos_formulario.get('correo_solicitante')
            if correo_solicitante_form:
                msg['Reply-To'] = str(Header(correo_solicitante_form, 'utf-8'))
            
            part = MIMEText(html_body, 'html', 'utf-8')
            msg.attach(part)
            
            print(f"Conectando al servidor SMTP: {SMTP_HOST}:{SMTP_PORT}")
            try:
                print(f"Intentando conectar a {SMTP_HOST}:{SMTP_PORT} con usuario {SMTP_USER}")
                server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
                server.set_debuglevel(1)
                server.ehlo()
                print("Iniciando TLS...")
                server.starttls()
                server.ehlo()
                print(f"Intentando login con {SMTP_USER} (contraseña de longitud: {len(SMTP_PASS)})")
                server.login(SMTP_USER, SMTP_PASS)
                print(f"Enviando correo (SMTP) a: {', '.join(MAIL_RECIPIENTS)}")
                server.sendmail(SMTP_USER, MAIL_RECIPIENTS, msg.as_string())
                server.quit()
                return True, "Correo enviado correctamente (vía SMTP)."
            except smtplib.SMTPAuthenticationError as auth_error:
                error_msg = f"Error de autenticacion SMTP: {str(auth_error)}"
                print(error_msg)
                sugerencias = """
                Para Gmail (SMTP):
                1. Asegurate de que la contrasena sea correcta.
                2. Usa una contrasena de aplicacion especifica: https://myaccount.google.com/apppasswords
                """
                return False, f"{error_msg}. {sugerencias}"
            except smtplib.SMTPException as smtp_error:
                error_msg = f"Error SMTP: {str(smtp_error)}"
                print(error_msg)
                return False, error_msg
        except Exception as e:
            error_msg = f"Error general al preparar correo SMTP: {str(e)}"
            print(error_msg)
            return False, error_msg