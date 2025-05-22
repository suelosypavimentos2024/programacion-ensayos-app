import os
import sys

# Mensaje inicial
print("Iniciando el Sistema de Programación de Ensayos...")

# Agregamos la carpeta raíz del proyecto al path para que encuentre los módulos
project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, project_root)

try:
    # Importamos la aplicación
    print("Cargando el módulo Flask...")
    from app.app import app
    
    # Verificar que las dependencias estén instaladas
    print("Verificando dependencias...")
    required_packages = ["flask", "pandas", "openpyxl"]
    missing_packages = []
    
    for package in required_packages:
        try:
            __import__(package)
            print(f"  ✓ {package} instalado")
        except ImportError:
            missing_packages.append(package)
            print(f"  ✗ {package} no encontrado")
    
    if missing_packages:
        print("\n¡ATENCIÓN! Faltan las siguientes dependencias:")
        for package in missing_packages:
            print(f"  - {package}")
        print("\nPor favor, instale estas dependencias usando el comando:")
        print(f"pip install {' '.join(missing_packages)}")
        sys.exit(1)
    
    # Ejecutar la aplicación
    print("\nIniciando servidor web...")
    print("Puede acceder a la aplicación en: http://localhost:5000")
    print("Presione Ctrl+C para detener el servidor.")
    app.run(host='0.0.0.0', port=5000, debug=True)
    
except ImportError as e:
    print(f"Error al importar los módulos: {e}")
    print("Por favor, asegúrese de que la estructura del proyecto sea correcta.")
    sys.exit(1)
except Exception as e:
    print(f"Error inesperado: {e}")
    sys.exit(1) 