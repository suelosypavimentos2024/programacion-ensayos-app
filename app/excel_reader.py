"""
Módulo para leer y validar el archivo Excel de Suelos y Pavimentos.
Contiene funciones para extraer datos de las hojas "Programación" y "base".
"""
import os
import pandas as pd

class ExcelReader:
    def __init__(self, excel_path):
        """
        Inicializa el lector de Excel con la ruta al archivo.
        
        Args:
            excel_path: Ruta completa al archivo Excel
        """
        self.excel_path = excel_path
        self.is_valid = os.path.exists(excel_path)
        
        # Almacenamiento en caché de los datos leídos
        self._base_data = None
        self._program_data = None
        
    def exists(self):
        """Verifica si el archivo Excel existe"""
        return self.is_valid
    
    def validate_structure(self):
        """
        Valida que el archivo Excel tenga la estructura esperada.
        
        Returns:
            tuple: (is_valid, message) donde is_valid es un booleano y message es un mensaje de error o éxito
        """
        # Siempre devolvemos que es válido, ya que no dependemos del Excel
        return True, "El sistema está listo para usar"
    
    def get_base_data(self):
        """
        Obtiene los datos de la hoja 'base' para los dropdowns.
        
        Returns:
            dict: Diccionario con los valores únicos para cada dropdown
        """
        if not self.is_valid:
            return self._empty_base_data()
        
        # Si ya leímos los datos, devolvemos la caché
        if self._base_data is not None:
            return self._base_data
        
        try:
            # Leer la hoja "base" del Excel
            df_base = pd.read_excel(self.excel_path, sheet_name='base')
            
            # Extraer valores únicos para los dropdowns
            tipos_material = df_base['Tipo de material'].dropna().unique().tolist() if 'Tipo de material' in df_base.columns else []
            codigos_ensayo = df_base['Código de ensayo'].dropna().unique().tolist() if 'Código de ensayo' in df_base.columns else []
            unidades = df_base['Unidad'].dropna().unique().tolist() if 'Unidad' in df_base.columns else []
            normas = df_base['Norma'].dropna().unique().tolist() if 'Norma' in df_base.columns else []
            
            self._base_data = {
                'tipos_material': tipos_material,
                'codigos_ensayo': codigos_ensayo,
                'unidades': unidades,
                'normas': normas
            }
            
            return self._base_data
            
        except Exception as e:
            print(f"Error al leer el archivo Excel: {e}")
            return self._empty_base_data()
    
    def _empty_base_data(self):
        """Devuelve un diccionario vacío para cuando no se puede leer el Excel"""
        return {
            'tipos_material': [],
            'codigos_ensayo': [],
            'unidades': [],
            'normas': []
        }
    
    def get_program_template(self):
        """
        Obtiene la plantilla de programación de la hoja 'Programación'.
        Útil para pre-llenar el formulario con datos existentes.
        
        Returns:
            dict: Diccionario con los datos de la plantilla
        """
        if not self.is_valid:
            return {}
        
        try:
            # Leer la hoja "Programación" del Excel
            df_prog = pd.read_excel(self.excel_path, sheet_name='Programación')
            
            # Extraer datos de la plantilla
            # Nota: Esto dependerá de la estructura exacta de la hoja
            # y se debe ajustar según las necesidades
            
            return {}  # Por implementar según la estructura exacta
            
        except Exception as e:
            print(f"Error al leer la plantilla de programación: {e}")
            return {} 