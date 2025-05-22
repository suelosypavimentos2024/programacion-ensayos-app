# Sistema de Programación de Ensayos - Suelos y Pavimentos

Aplicación web basada en Flask para la gestión y programación de ensayos de laboratorio, desarrollada para Suelos y Pavimentos según el formato `SYP-PA-DT-F005 1-24-Programación-anexo-órden-trabajo`.

## Características

- Formulario web para captura de datos basado en Excel
- Validación de datos en tiempo real
- Envío de notificaciones por correo electrónico
- Carga dinámica de tipos de material y códigos de ensayo desde Excel
- Interfaz moderna y responsiva
- Manejo de errores y excepciones
- Configuración multi-entorno (desarrollo, producción, pruebas)
- Verificación de dependencias automática

## Nuevas Características

### Formulario de Flexión de Concreto

Se ha añadido un nuevo formulario especializado para ensayos de flexión de concreto siguiendo el formato SYP-PT-DT-F011:

- Captura completa de datos de ensayo de flexión del concreto
- Soporte para múltiples especímenes de ensayo
- Cálculo automático de edad de las muestras
- Listas desplegables con valores predefinidos para tipos de defectos y patrones de fractura
- Validación de datos en tiempo real

### Mejoras en las listas desplegables

Para garantizar que las listas desplegables siempre muestren datos incluso cuando el archivo Excel no está disponible:

1. Se ha implementado un sistema de valores predeterminados para todos los selectores
2. Si no se encuentran datos en el Excel, se usan valores predefinidos en el código
3. Se añadió verificación de opciones en carga para depuración
4. Carga dinámica de opciones mediante JavaScript si es necesario

## Requisitos

- Python 3.10 o superior
- Flask
- pandas
- openpyxl
- Navegador web moderno

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd <nombre-del-directorio>
```

2. Crear un entorno virtual (opcional pero recomendado):
```bash
python -m venv venv
```

3. Activar el entorno virtual:
   - En Windows:
   ```bash
   venv\Scripts\activate
   ```
   - En MacOS/Linux:
   ```bash
   source venv/bin/activate
   ```

4. Instalar dependencias:
```bash
pip install -r requirements.txt
```

5. Configurar variables de entorno (opcional):
```
# Para Windows
set FLASK_ENV=development
set SMTP_USER=tu_correo@gmail.com
set SMTP_PASS=tu_contraseña_de_aplicacion

# Para Linux/Mac
export FLASK_ENV=development
export SMTP_USER=tu_correo@gmail.com
export SMTP_PASS=tu_contraseña_de_aplicacion
```

## Configuración de correo electrónico con Gmail

Para enviar correos con Gmail, debes seguir estos pasos:

1. **Crear una contraseña de aplicación** (recomendado):
   - Ve a tu cuenta de Google: https://myaccount.google.com
   - Selecciona "Seguridad" en el menú lateral
   - En "Iniciar sesión en Google", selecciona "Contraseñas de aplicaciones" (debes tener la verificación en dos pasos activada)
   - Selecciona "Otra" como aplicación, ponle un nombre como "Sistema Ensayos"
   - Copia la contraseña generada

2. **Configurar la aplicación**:
   - Edita el archivo `app/config.py`
   - Reemplaza `SMTP_USER` con tu dirección de correo de Gmail
   - Reemplaza `SMTP_PASS` con la contraseña de aplicación generada
   - Actualiza `MAIL_RECIPIENTS` con las direcciones de correo a las que enviar las notificaciones

3. **Alternativa: Habilitar acceso de aplicaciones menos seguras** (no recomendado):
   - Ve a https://myaccount.google.com/lesssecureapps
   - Activa la opción "Permitir el acceso de aplicaciones menos seguras"
   - **Nota**: Google está eliminando gradualmente esta opción, es mejor usar contraseñas de aplicación.

## Uso

1. Colocar el archivo Excel `