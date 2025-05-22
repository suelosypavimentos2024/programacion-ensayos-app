/**
 * Script para corregir problemas con selectores duplicados
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Ejecutando script de corrección de selectores...");
    
    // Valores predeterminados para los diferentes tipos de selectores
    const tiposMaterial = [
        "Concreto", 
        "Asfalto", 
        "Arena", 
        "Grava", 
        "Suelo"
    ];
    
    // Eliminar la lista estática de códigos de ensayo
    // const codigosEnsayo = [
    //     "FLEX-001", 
    //     "COMP-002", 
    //     "TRAC-003", 
    //     "DENS-004", 
    //     "HUM-005"
    // ];
    
    // Función para eliminar selectores que están fuera de lugar
    function eliminarSelectoresErroneos() {
        console.log("Buscando selectores fuera de lugar...");
        
        // Buscar si hay selectores en lugares donde no deberían estar
        document.querySelectorAll('select').forEach(select => {
            // Si el selector no está dentro de una celda de tabla y no tiene las clases correctas
            const estaEnCeldaTabla = select.closest('td') !== null;
            const esSelectValido = select.classList.contains('tipo_material') || 
                                select.classList.contains('codigo_ensayo') ||
                                select.id === 'codigo_ensayo_principal';
            
            // Si está fuera de una celda y no es un select válido
            if (!estaEnCeldaTabla && !esSelectValido) {
                console.log("Eliminando selector fuera de lugar:", select);
                select.remove();
            }
        });
        
        // Asegurar que los campos que deben ser inputs sean del tipo correcto
        const anexoInput = document.getElementById('anexo');
        if (anexoInput) {
            anexoInput.type = 'number';
        }
        
        const cotizacionInput = document.getElementById('cotizacion');
        if (cotizacionInput) {
            cotizacionInput.type = 'number';
        }
    }
    
    // Función para reconstruir un selector con las opciones correctas
    function reconstruirSelector(select, opciones) {
        // Guardar el valor actual si existe
        const valorActual = select.value;
        
        // Limpiar el selector por completo
        select.innerHTML = '';
        
        // Agregar la opción predeterminada
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = 'Seleccionar';
        select.appendChild(optionDefault);
        
        // Agregar cada opción de la lista sin duplicados
        opciones.forEach(opcion => {
            const option = document.createElement('option');
            option.value = opcion;
            option.textContent = opcion;
            select.appendChild(option);
        });
        
        // Restaurar el valor seleccionado si es válido
        if (valorActual && opciones.includes(valorActual)) {
            select.value = valorActual;
        }
        
        // Asegurar que el selector tenga un ancho mínimo adecuado
        select.style.minWidth = '120px';
    }
    
    // Función para corregir todos los selectores de la página
    function corregirTodosLosSelectores() {
        // Primero eliminar selectores erróneos
        eliminarSelectoresErroneos();
        
        // Luego reconstruir los que son válidos
        document.querySelectorAll('.tipo_material').forEach(select => {
            reconstruirSelector(select, tiposMaterial);
        });
        
        document.querySelectorAll('.codigo_ensayo').forEach(select => {
            // Obtener los códigos de ensayo dinámicamente desde window.ensayosDB
            let codigosEnsayoDinamicos = [];
            if (window.ensayosDB) {
                for (const grupo in window.ensayosDB) {
                    if (window.ensayosDB.hasOwnProperty(grupo) && typeof window.ensayosDB[grupo] === 'object') {
                        codigosEnsayoDinamicos = codigosEnsayoDinamicos.concat(Object.keys(window.ensayosDB[grupo]));
                    }
                }
                codigosEnsayoDinamicos.sort(); // Opcional: ordenar los códigos alfabéticamente
            } 
            // No hay un fallback a codigosEnsayoPredeterminados aquí, 
            // ya que este script asume que window.ensayosDB es la fuente principal.
            // Si window.ensayosDB está vacío o no existe, codigosEnsayoDinamicos será un array vacío.
            reconstruirSelector(select, codigosEnsayoDinamicos);
        });
    }
    
    // Ejecutar la corrección inmediatamente
    corregirTodosLosSelectores();
    
    // También ejecutar cuando se agregue una nueva fila
    const btnAgregarMuestra = document.getElementById('btn-agregar-muestra');
    if (btnAgregarMuestra) {
        const originalClick = btnAgregarMuestra.onclick;
        
        btnAgregarMuestra.onclick = function(e) {
            // Si hay un manejador original, ejecutarlo primero
            if (originalClick) {
                originalClick.call(this, e);
            }
            
            // Esperar un momento y luego corregir los selectores
            setTimeout(corregirTodosLosSelectores, 50);
        };
    }
    
    // Ejecutar periódicamente para asegurar que no aparezcan selectores duplicados
    setInterval(corregirTodosLosSelectores, 1000);
});