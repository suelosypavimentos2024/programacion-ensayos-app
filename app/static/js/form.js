/**
 * Funciones JavaScript para el manejo del formulario de programación
 */
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const form = document.getElementById('programacion-form');
    const muestrasTable = document.getElementById('muestras-table');
    const muestrasTbody = document.getElementById('muestras-tbody');
    const muestraTemplate = document.getElementById('template-muestra');     
    const btnAgregarMuestra = document.getElementById('btn-agregar-muestra');
    const btnEnviar = document.getElementById('btn-enviar');
    const alertMessage = document.getElementById('alert-message');
    
    // Log data passed from form.html
    console.log('form.js: window.tiposMaterialDisponibles:', window.tiposMaterialDisponibles);
    console.log('form.js: window.codigosEnsayoDisponibles:', window.codigosEnsayoDisponibles);
    
    // Valores predeterminados para los selectores (usados como fallback)
    const tiposMaterialPredeterminados = [
        "Concreto", 
        "Asfalto", 
        "Arena", 
        "Grava", 
        "Suelo"
    ];
    
    const codigosEnsayoPredeterminados = [
        "FLEX-001", 
        "COMP-002", 
        "TRAC-003", 
        "DENS-004", 
        "HUM-005"
    ];
    
    // Determine a usar para Tipo de Material
    const tiposMaterialParaUsar = (window.tiposMaterialDisponibles && window.tiposMaterialDisponibles.length > 0) 
        ? window.tiposMaterialDisponibles 
        : tiposMaterialPredeterminados;
    
    // Función para corregir todos los elementos de la página
    function corregirElementosPagina() {
        console.log("Corrigiendo elementos de la página...");
        
        // 1. Asegurar que el campo anexo sea de tipo number
        const anexoInput = document.getElementById('anexo');
        if (anexoInput) {
            anexoInput.type = 'number';
        }
        
        // 2. Eliminar cualquier menú desplegable que esté fuera de lugar
        document.querySelectorAll('select').forEach(select => {
            // Solo mantener selectores que estén dentro de una celda de tabla
            const estaEnCeldaTabla = select.closest('td') !== null;
            
            if (!estaEnCeldaTabla) {
                // Este select no debería estar aquí, eliminarlo
                select.remove();
            }
        });
        
        // 3. Reconstruir todos los selectores de tipo_material
        document.querySelectorAll('.tipo_material').forEach(select => {
            reconstruirSelector(select, tiposMaterialParaUsar); // Usar la lista determinada
        });
        
        // 4. Reconstruir todos los selectores de codigo_ensayo con TODOS los códigos de la base de datos
        let codigosEnsayoTodos = [];
        if (window.ensayosDB) {
            for (const grupo in window.ensayosDB) {
                codigosEnsayoTodos = codigosEnsayoTodos.concat(Object.keys(window.ensayosDB[grupo]));
            }
            codigosEnsayoTodos.sort();
        } else {
            codigosEnsayoTodos = codigosEnsayoPredeterminados;
        }
        document.querySelectorAll('.codigo_ensayo').forEach(select => {
            reconstruirSelector(select, codigosEnsayoTodos);
        });

        // Logs de verificación (inspirados en la antigua verificarOpciones)
        const selectTipoMaterialLog = document.querySelector('.tipo_material');
        if (selectTipoMaterialLog) {
            console.log("form.js: Opciones en primer 'Tipo de material' después de corregirElementosPagina:", selectTipoMaterialLog.options.length);
        }
        const selectCodigoEnsayoLog = document.querySelector('.codigo_ensayo');
        if (selectCodigoEnsayoLog) {
            console.log("form.js: Opciones en primer 'Código de ensayo' después de corregirElementosPagina:", selectCodigoEnsayoLog.options.length);
        }
    }
    
    // Función para reconstruir un selector desde cero
    function reconstruirSelector(select, opcionesPredeterminadas) {
        // Guardar el valor seleccionado actualmente (si hay alguno)
        const valorSeleccionado = select.value;
        
        // Limpiar completamente el selector
        select.innerHTML = '';
        
        // Agregar la opción predeterminada
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = 'Seleccione...';
        select.appendChild(optionDefault);
        
        // Agregar todas las opciones predeterminadas
        opcionesPredeterminadas.forEach(opcion => {
            const option = document.createElement('option');
            option.value = opcion;
            option.textContent = opcion;
            select.appendChild(option);
        });
        
        // Restaurar el valor seleccionado si existía y es válido
        if (valorSeleccionado && opcionesPredeterminadas.includes(valorSeleccionado)) {
            select.value = valorSeleccionado;
        }
    }
    
    // Ejecutar la corrección al cargar la página
    setTimeout(corregirElementosPagina, 100);
    
    // Función para agregar una nueva muestra
    function agregarMuestra() {
        // Clonar la plantilla (contiene dos filas: muestra-row y ensayo-info-row)
        const clone = document.importNode(muestraTemplate.content, true);
        
        // Obtener las filas del clon antes de agregarlo al DOM
        const filas = Array.from(clone.querySelectorAll('tr'));
        const filaMuestra = filas[0];  // Primera fila (datos de la muestra)
        const filaEnsayo = filas[1];   // Segunda fila (información del ensayo)
        
        // Agregar las filas al tbody
        muestrasTbody.appendChild(clone);
        
        // Referencias a las filas agregadas (ahora en el DOM)
        // Obtener las dos últimas filas agregadas al tbody
        const todasLasFilas = muestrasTbody.querySelectorAll('tr');
        const nuevaFilaMuestra = todasLasFilas[todasLasFilas.length - 2]; // Penúltima fila (muestra)
        const nuevaFilaEnsayo = todasLasFilas[todasLasFilas.length - 1]; // Última fila (ensayo)
        
        // Agregar evento de eliminación a la nueva fila
        const btnEliminar = nuevaFilaMuestra.querySelector('.btn-eliminar');
        if (btnEliminar) {
            console.log('Agregando evento click al botón eliminar');
            btnEliminar.addEventListener('click', function() {
                // Eliminar tanto la fila de muestra como la fila de información de ensayo
                const filaMuestra = this.closest('tr');
                const filaEnsayo = filaMuestra.nextElementSibling;
                
                console.log('Eliminando muestra:', filaMuestra);
                console.log('Eliminando fila de ensayo:', filaEnsayo);
                
                // Primero eliminar la fila de ensayo (si existe)
                if (filaEnsayo && filaEnsayo.classList.contains('ensayo-info-row')) {
                    filaEnsayo.remove();
                }
                
                // Luego eliminar la fila de muestra
                filaMuestra.remove();
                
                // Verificar si quedan muestras, si no, agregar una nueva
                if (muestrasTbody.children.length === 0) {
                    setTimeout(() => {
                        agregarMuestra();
                    }, 100);
                }
            });
        } else {
            console.error('No se encontró el botón eliminar en la nueva fila de muestra');
        }
        
        // Reconstruir los selectores en la nueva fila
        const selectTipoMaterial = nuevaFilaMuestra.querySelector('.tipo_material');
        if (selectTipoMaterial) {
            reconstruirSelector(selectTipoMaterial, tiposMaterialParaUsar); // Usar la lista determinada
        }
        
        // Manejar el selector de código de ensayo
        const selectCodigoEnsayo = nuevaFilaEnsayo.querySelector('.codigo_ensayo');
        const nombreEnsayoInput = nuevaFilaEnsayo.querySelector('.nombre_ensayo');
        const documentoNormativoInput = nuevaFilaEnsayo.querySelector('.documento_normativo');
        
        if (selectCodigoEnsayo) {
            // Determinar la lista de todos los códigos de ensayo individuales
            let todosLosCodigosDeEnsayo = [];
            if (window.ensayosDB) {
                for (const grupo in window.ensayosDB) {
                    if (window.ensayosDB.hasOwnProperty(grupo) && typeof window.ensayosDB[grupo] === 'object') {
                        todosLosCodigosDeEnsayo = todosLosCodigosDeEnsayo.concat(Object.keys(window.ensayosDB[grupo]));
                    }
                }
                todosLosCodigosDeEnsayo.sort();
            } else {
                todosLosCodigosDeEnsayo = codigosEnsayoPredeterminados;
            }

            // Reconstruir el selector usando la lista consolidada de códigos
            reconstruirSelector(selectCodigoEnsayo, todosLosCodigosDeEnsayo);
            
            // Usar la función global para actualizar los campos según el código seleccionado
            // Esta función está definida en ensayos.js
            
            // Agregar evento para mostrar información del ensayo seleccionado
            selectCodigoEnsayo.addEventListener('change', function() {
                console.log('form.js: Evento change en Código de Ensayo disparado. Código seleccionado:', this.value);
                if (window.actualizarCamposEnsayo) {
                    window.actualizarCamposEnsayo(this); // 'this' es el select que cambió
                } else {
                    console.error('form.js: window.actualizarCamposEnsayo NO está disponible al intentar llamar desde el evento change.');
                }
            });
            
            // Ejecutar una vez para mostrar la información si hay un código preseleccionado
            setTimeout(() => {
                if (window.actualizarCamposEnsayo) {
                    window.actualizarCamposEnsayo(selectCodigoEnsayo);
                } else {
                    console.error('La función global actualizarCamposEnsayo no está disponible');
                }
            }, 100);
        }
    }
    
    // Asegurar que haya al menos una fila de muestra al cargar la página
    const muestrasBody = document.getElementById('muestras-tbody');
    if (muestrasBody && muestrasBody.children.length === 0) {
        console.log('form.js: No hay muestras iniciales en el HTML, agregando una por defecto.');
        agregarMuestra(); 
    } else if (muestrasBody) {
        console.log('form.js: Muestras iniciales detectadas en el HTML (o agregadas por otra lógica):', muestrasBody.children.length / 2); // Dividido por 2 porque cada muestra son 2 TRs
    }

    // Evento para agregar una nueva muestra
    if (btnAgregarMuestra) { 
        btnAgregarMuestra.addEventListener('click', function() {
            agregarMuestra();
            // Volver a corregir los elementos después de agregar una nueva muestra para asegurar 
            // que los selectores y listeners estén bien configurados en la nueva fila.
            setTimeout(corregirElementosPagina, 50); // Un pequeño delay puede ayudar
        });
    }

    // Inicializar la funcionalidad de actualización de campos de ensayo para la primera fila si existe
    const primerSelectorEnsayo = document.querySelector('#muestras-tbody .codigo_ensayo');

    // Validar un campo
    function validarCampo(campo, mensaje) {
    if (!campo) {
        console.warn('Campo nulo o indefinido pasado a validarCampo');
        return false;
    }
        const errorElement = document.getElementById(`error-${campo.id}`) || 
                            campo.parentElement.querySelector('.error-text');
        if (!campo.value) {
            errorElement.textContent = mensaje || 'Este campo es requerido para completar el registro';
            campo.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            campo.classList.remove('error');
            return true;
        }
    }
    
    // Validar fecha (no futura)
    function validarFecha(campo) {
        const errorElement = document.getElementById(`error-${campo.id}`);
        const fechaIngresada = new Date(campo.value);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Establecer a medianoche para comparar solo fechas
        
        if (fechaIngresada > hoy) {
            errorElement.textContent = 'La fecha seleccionada no puede ser posterior a la fecha actual';
            campo.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            campo.classList.remove('error');
            return true;
        }
    }
    
    // Validar cantidad positiva
    function validarCantidadPositiva(campo) {
        const errorElement = campo.parentElement.querySelector('.error-text');
        const valor = parseFloat(campo.value);
        
        if (isNaN(valor) || valor <= 0) {
            errorElement.textContent = 'El valor debe ser numérico y mayor que cero';
            campo.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            campo.classList.remove('error');
            return true;
        }
    }
    
    // Función para mostrar mensajes al usuario
    function mostrarMensaje(tipo, mensaje) {
        // Formatear mensajes de error de correo
        if (mensaje && mensaje.includes('Error de autenticación SMTP') || mensaje.includes('Error SMTP')) {
            // Si es un error de SMTP, mostrar un mensaje más amigable
            const mensajeFormateado = `
                <strong>Error al enviar correo electrónico</strong>
                <div>${mensaje.replace(/\n/g, '<br>')}</div>
            `;
            alertMessage.innerHTML = mensajeFormateado;
        } else {
            alertMessage.textContent = mensaje;
        }
        
        alertMessage.className = `alert alert-${tipo}`;
        alertMessage.classList.remove('hidden');
        
        // Desplazarse hacia el mensaje
        alertMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Para errores de correo, no ocultar automáticamente
        if (mensaje && (mensaje.includes('Error SMTP') || mensaje.includes('Error de autenticación SMTP'))) {
            // No ocultar mensajes de error de correo
        } else {
            // Ocultar después de 5 segundos para otros mensajes
            setTimeout(function() {
                alertMessage.classList.add('hidden');
            }, 5000);
        }
    }
    
    // Función para validar el formulario completo
    function validarFormulario() {
        let esValido = true;
        
        if (!proyecto || !cotizacion || !fecha) {
            alert('Por favor, complete todos los campos generales requeridos.');
            return false;
        }
        
        // Validar fecha (no futura)
        if (!validarFecha(document.getElementById('fecha'))) {
            esValido = false;
        }
        
        // Validar que haya al menos una muestra
        const filasMuestras = muestrasTbody.querySelectorAll('.muestra-row');
        if (filasMuestras.length === 0) {
            mostrarMensaje('danger', 'Debe agregar al menos una muestra');
            esValido = false;
        }
        
        // Validar campos de cada muestra
        filasMuestras.forEach(function(filaMuestra) {
            const camposMuestra = [
                { campo: filaMuestra.querySelector('.sondeo'), mensaje: 'Ingrese el número de sondeo/apique' },
                { campo: filaMuestra.querySelector('.numero_muestra'), mensaje: 'Ingrese el número de muestra' },
                { campo: filaMuestra.querySelector('.tipo_material'), mensaje: 'Seleccione el tipo de material' },
                { campo: filaMuestra.querySelector('.profundidad'), mensaje: 'Ingrese la profundidad o ubicación' },
                { campo: filaMuestra.querySelector('.cantidad'), mensaje: 'Ingrese la cantidad' }
            ];
            
            camposMuestra.forEach(function(item) {
                if (!validarCampo(item.campo, item.mensaje)) {
                    esValido = false;
                }
            });
            
            // Validar campos de ensayo en la fila correspondiente
            const filaEnsayo = filaMuestra.nextElementSibling;
            if (filaEnsayo && filaEnsayo.classList.contains('ensayo-info-row')) {
                const camposEnsayo = [
                    { campo: filaEnsayo.querySelector('.codigo_ensayo'), mensaje: 'Seleccione el código de ensayo' }
                ];
                
                camposEnsayo.forEach(function(item) {
                    if (!validarCampo(item.campo, item.mensaje)) {
                        esValido = false;
                    }
                });
            }
            
            // Validar cantidad positiva
            if (!validarCantidadPositiva(filaMuestra.querySelector('.cantidad'))) {
                esValido = false;
            }
        });
        
        return esValido;
    }
    
    // Función para recopilar datos del formulario
    function recopilarDatos() {
        // Obtener otros campos del formulario
        const proyecto = document.getElementById('proyecto').value.trim();
        const cotizacion = document.getElementById('cotizacion').value.trim();
        const fecha = document.getElementById('fecha').value;

        // Crear objeto con los datos del formulario
        const formData = {
            proyecto,
            cotizacion,
            fecha,
            muestras: []
        };
        
        // Obtener todas las filas de muestras
        const filasMuestras = muestrasTbody.querySelectorAll('.muestra-row');
        
        filasMuestras.forEach((filaMuestra, index) => {
            // Obtener la fila de información de ensayo correspondiente
            const filaEnsayo = filaMuestra.nextElementSibling;
            if (!filaEnsayo || !filaEnsayo.classList.contains('ensayo-info-row')) return;
            
            // Obtener los valores de los campos de la muestra
            const muestra = {
                sondeo: filaMuestra.querySelector('.sondeo').value,
                numero_muestra: filaMuestra.querySelector('.numero_muestra').value,
                tipo_material: filaMuestra.querySelector('.tipo_material').value,
                profundidad: filaMuestra.querySelector('.profundidad').value,
                cantidad: filaMuestra.querySelector('.cantidad').value,
                codigo_ensayo: filaEnsayo.querySelector('.codigo_ensayo').value,
                nombre_ensayo: filaEnsayo.querySelector('.nombre_ensayo').value,
                documento_normativo: filaEnsayo.querySelector('.documento_normativo').value
            };
            
            formData.muestras.push(muestra);
        });
        
        return formData;
    }
    
    // Evento para enviar el formulario
    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Validar el formulario antes de enviar
        if (!validarFormulario()) {
            return false;
        }
        
        // Deshabilitar el botón de envío para evitar múltiples envíos
        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando...';
        
        // Recopilar datos del formulario
        const datos = recopilarDatos();
        
        // Enviar datos al servidor
        console.log('Enviando datos:', datos);
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de servidor: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                mostrarMensaje('success', data.message || 'Formulario enviado correctamente');
                
                // Redireccionar después de 3 segundos
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000);
            } else {
                mostrarMensaje('danger', data.message || 'Error al enviar el formulario');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarMensaje('danger', `Error al enviar el formulario: ${error.message}`);
        })
        .finally(() => {
            btnEnviar.disabled = false;
            btnEnviar.textContent = 'Enviar Formulario';
        });
    });
});