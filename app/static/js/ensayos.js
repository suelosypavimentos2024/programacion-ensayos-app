/**
 * Define la función global window.actualizarCamposEnsayo
 * Esta función se utiliza para actualizar los campos de nombre y documento normativo
 * en el formulario cuando se selecciona un código de ensayo.
 * La base de datos de ensayos (window.ensayosDB) debe estar definida y cargada
 * (desde Database.js) antes de que se llame a esta función.
 */

function defineActualizadorEnsayoGlobal() {
    window.actualizarCamposEnsayo = function(selectElement) {
        console.log('ensayos.js: actualizarCamposEnsayo llamado con selectElement:', selectElement);
        if (!window.ensayosDB) {
            console.warn('ensayos.js: Base de datos de ensayos (window.ensayosDB) no disponible.');
            const rowError = selectElement.closest('tr');
            if (rowError) {
                const nombreInputError = rowError.querySelector('.nombre_ensayo');
                const normativoInputError = rowError.querySelector('.documento_normativo');
                if (nombreInputError) nombreInputError.value = 'Error: DB no carga';
                if (normativoInputError) normativoInputError.value = '';
            }
            return;
        }

        const codigo = selectElement.value;
        console.log('ensayos.js: Código seleccionado:', codigo);
        let ensayoInfo = null;

        // Buscar el código en todos los grupos de la base de datos
        for (const grupo in window.ensayosDB) {
            if (window.ensayosDB[grupo] && typeof window.ensayosDB[grupo] === 'object' && window.ensayosDB[grupo][codigo]) {
                ensayoInfo = window.ensayosDB[grupo][codigo];
                break;
            }
        }

        const filaContenedora = selectElement.closest('tr');
        console.log('ensayos.js: Fila contenedora encontrada:', filaContenedora);
        if (!filaContenedora) {
            console.error('ensayos.js: No se pudo encontrar la fila contenedora (tr) para el selector de ensayo.');
            return;
        }

        const nombreEnsayoInput = filaContenedora.querySelector('.nombre_ensayo');
        const documentoNormativoInput = filaContenedora.querySelector('.documento_normativo');
        console.log('ensayos.js: Input Nombre Ensayo:', nombreEnsayoInput);
        console.log('ensayos.js: Input Documento Normativo:', documentoNormativoInput);

        if (ensayoInfo) {
            if (nombreEnsayoInput) {
                nombreEnsayoInput.value = ensayoInfo.nombre || 'Nombre no encontrado';
            }
            if (documentoNormativoInput) {
                let normativosConcatenados = ensayoInfo.normativo1 || '';
                if (ensayoInfo.normativo2) {
                    normativosConcatenados += (normativosConcatenados ? ' / ' : '') + ensayoInfo.normativo2;
                }
                documentoNormativoInput.value = normativosConcatenados || 'Normativa no encontrada';
            }
        } else {
            if (nombreEnsayoInput) {
                nombreEnsayoInput.value = ''; // Limpiar si el código no se encuentra o no tiene valor
            }
            if (documentoNormativoInput) {
                documentoNormativoInput.value = '';
            }
            if (codigo) { // Solo mostrar advertencia si se seleccionó un código y no se encontró
                 console.warn(`ensayos.js: No se encontró información para el código de ensayo: ${codigo}`);
            }
        }
    };
}

// Llamar a la función para definir window.actualizarCamposEnsayo en el ámbito global.
// Esto debe ocurrir después de que el script Database.js haya cargado y definido window.ensayosDB.
// El navegador ejecuta los scripts en el orden en que aparecen en el HTML.
if (document.readyState === 'loading') {
    // Esperar a que el DOM básico esté listo si este script se ejecuta muy temprano.
    document.addEventListener('DOMContentLoaded', defineActualizadorEnsayoGlobal);
} else {
    // El DOM ya está listo o este script se ejecuta después (defer/async), definir inmediatamente.
    defineActualizadorEnsayoGlobal();
}
