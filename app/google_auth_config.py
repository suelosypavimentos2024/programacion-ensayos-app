import os
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import json
import pickle

from flask import session, redirect, request
import os
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
import json
import pickle

def get_flow():
    # Ruta al archivo de credenciales de Google
    credentials_path = os.path.join(os.path.dirname(__file__), 'credentials.json')
    
    if not os.path.exists(credentials_path):
        raise FileNotFoundError("No se encontró el archivo credentials.json. Por favor, crea uno en la carpeta de la aplicación.")
    
    # Crear el flujo de autenticación
    redirect_uri = os.getenv('GOOGLE_REDIRECT_URI', 'http://localhost:5000/callback')
    flow = Flow.from_client_secrets_file(
        credentials_path,
        scopes=['openid', 'https://www.googleapis.com/auth/gmail.send', 'https://www.googleapis.com/auth/userinfo.email'],
        redirect_uri=redirect_uri
    )
    return flow

def get_auth_url():
    """Obtener la URL de autorización"""
    flow = get_flow()
    auth_url, _ = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true'
    )
    return auth_url

def get_credentials():
    """Obtener las credenciales del usuario desde la sesión o crear nuevas"""
    credentials = None
    
    # Intentar obtener las credenciales de la sesión
    if 'credentials' in session:
        credentials = Credentials(**session['credentials'])
    
    # Si las credenciales no existen o no son válidas, redirigir a la página de autorización
    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
            session['credentials'] = credentials_to_dict(credentials)
        else:
            return None
    
    return credentials

def credentials_to_dict(credentials):
    """Convertir las credenciales a diccionario para almacenar en sesión"""
    return {'token': credentials.token,
            'refresh_token': credentials.refresh_token,
            'token_uri': credentials.token_uri,
            'client_id': credentials.client_id,
            'client_secret': credentials.client_secret,
            'scopes': credentials.scopes}
