"""
Configuración de la aplicación para distintos entornos
"""
import os

# Configuraciones base
class Config:
    # Configuración de la aplicación
    DEBUG = False
    SECRET_KEY = os.environ.get('SECRET_KEY', 'clave_secreta_para_desarrollo')
    
    # Configuración de correo electrónico
    SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
    SMTP_USER = os.environ.get('SMTP_USER', 'metrologiasuelosyp@gmail.com')
    
    # IMPORTANTE: Para Gmail, necesitarás una contraseña de aplicación
    # Obtén una en: https://myaccount.google.com/apppasswords
    # 1. Habilita la verificación en dos pasos primero en https://myaccount.google.com/security
    # 2. Ve a "Contraseñas de aplicaciones" en la configuración de seguridad
    # 3. Selecciona "Otra" y dale un nombre como "Sistema Ensayos"
    # 4. Copia la contraseña de 16 caracteres generada
    # 5. Reemplaza el texto a continuación con esa contraseña (sin espacios)
    # Contraseña de aplicación generada en Google
    # IMPORTANTE: Sin espacios, exactamente como se generó
    SMTP_PASS = os.environ.get('SMTP_PASS', 'pfcjwitthpmdcjsv')
    
    MAIL_RECIPIENTS = os.environ.get('MAIL_RECIPIENTS', 'metrologiasuelosyp@gmail.com,calidadsuelosyp@gmail.com,direcciontecsyp@gmail.com').split(',')

# Configuración para desarrollo
class DevelopmentConfig(Config):
    DEBUG = True
    
# Configuración para producción
class ProductionConfig(Config):
    DEBUG = False
    
    # En producción, estas variables deberían venir de variables de entorno
    # y no estar definidas en el código

# Configuración para pruebas
class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    # Para pruebas, usamos una configuración que no envía correos reales
    SMTP_HOST = 'localhost'
    SMTP_PORT = 1025  # Puerto común para mailhog/maildev

# Configuración activa según el entorno
config_env = os.environ.get('FLASK_ENV', 'development')

if config_env == 'production':
    active_config = ProductionConfig()
elif config_env == 'testing':
    active_config = TestingConfig()
else:
    active_config = DevelopmentConfig()

# Exportamos las variables de configuración para ser importadas desde otros módulos
DEBUG = active_config.DEBUG
SECRET_KEY = active_config.SECRET_KEY
SMTP_HOST = active_config.SMTP_HOST
SMTP_PORT = active_config.SMTP_PORT
SMTP_USER = active_config.SMTP_USER
SMTP_PASS = active_config.SMTP_PASS
MAIL_RECIPIENTS = active_config.MAIL_RECIPIENTS

# Mensajes informativos sobre la configuración activa
print(f"Configuración activa: {config_env}")
print(f"Modo DEBUG: {'Activado' if DEBUG else 'Desactivado'}")
print(f"Servidor SMTP: {SMTP_HOST}:{SMTP_PORT}")
print(f"Destinatarios de correo: {', '.join(MAIL_RECIPIENTS)}")