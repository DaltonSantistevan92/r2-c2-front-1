_init();

function _init() {
    clearForm();
    getGrados();
    getPeridos();
    getParalelos();
    form_horario();
    // cargarTabla();
    changeSelectPeriodo();
}

function clearForm() {
    document.getElementById('horario-nombre').value = '';
    document.getElementById('horario-select-grado').value = '0';
    document.getElementById('horario-select-periodo').value = '0';
    document.getElementById('horario-select-paralelo').value = '0';
}

function getGrados() {
    const url = urlServidor + 'grados/listar';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.grados.length > 0) {
                const select = document.getElementById('horario-select-grado');
                let option = `<option value="0">Seleccione una opción</option>`;

                data.grados.forEach(element => {
                    option += `<option value="${element.id}">${element.nombre_grado}</option>`;
                });

                select.innerHTML = option;
            }
        });
}

function getPeridos() {
    const url = urlServidor + 'periodo/listar';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                const select = document.getElementById('horario-select-periodo');
                const selectPeriodo = document.getElementById('select-periodo');
                
                let option = `<option value="0">Seleccione una opción</option>`;

                data.data.forEach(element => {
                    option += `<option value="${element.id}">${element.desde} - ${element.hasta}</option>`;
                });

                select.innerHTML = option;
                selectPeriodo.innerHTML = option;
            }
        });
}

function getParalelos() {
    const url = urlServidor + 'paralelo/listar';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                const select = document.getElementById('horario-select-paralelo');
                let option = `<option value="0">Seleccione una opción</option>`;

                data.data.forEach(element => {
                    option += `<option value="${element.id}">${element.detalle}</option>`;
                });

                select.innerHTML = option;
            }
        });
}

function form_horario() {
    const form = document.getElementById('nuevo-horario');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const json = {
            horario: {
                nombre_horario: document.getElementById('horario-nombre').value.trim(),
                grado_id: document.getElementById('horario-select-grado').value,
                periodo_id: document.getElementById('horario-select-periodo').value,
                paralelo_id: document.getElementById('horario-select-paralelo').value,
                
            }
        };
        //console.log(json);

        if (validarForm(json.horario)) {
            const url = urlServidor + 'horario/guardar';

            const myInit = {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Origin': '*'
                },
                body: "data=" + JSON.stringify(json), // data can be `string` or {object}!
            };

            fetch(url, myInit)
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        clearForm();

                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };

                        toastr["info"](data.mensaje, "Listo")
                    } else {
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };

                        toastr["error"](data.mensaje, "Error")
                    }
                });
        }
    });


    function validarForm(horario) {
        if (horario.nombre_horario.length == 0 || horario.nombre_horario.length < 3) {
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]("Ingrese el nombre del horario", "Campo vacío")
            return false;
        } else
            if (horario.grado_id == '0') {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una grado", "Información")
                return false;
            } else
            if (horario.periodo_id == '0') {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una periodo", "Información")
                return false;
            } else
            if (horario.paralelo_id == '0') {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un paralelo", "Información")
                return false;
            }  else return true;
    }

}

function cargarTabla(periodo_id){
    tabla = $('#tabla-horario').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'horario/datatable/'+periodo_id,
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 10,//Paginación
        "language": {

            "sProcessing":     "Procesando...",
         
            "sLengthMenu":     "Mostrar _MENU_ registros",
         
            "sZeroRecords":    "No se encontraron resultados",
         
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
         
            "sInfo":           "Mostrando un total de _TOTAL_ registros",
         
            "sInfoEmpty":      "Mostrando un total de 0 registros",
         
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
         
            "sInfoPostFix":    "",
         
            "sSearch":         "Buscar:",
         
            "sUrl":            "",
         
            "sInfoThousands":  ",",
         
            "sLoadingRecords": "Cargando...",
         
            "oPaginate": {
         
                "sFirst":    "Primero",
         
                "sLast":     "Último",
         
                "sNext":     "Siguiente",
         
                "sPrevious": "Anterior"
         
            },
         
            "oAria": {
         
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
         
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
         
            }

           }//cerrando language
    });
}

function changeSelectPeriodo(){
    const select = document.getElementById('select-periodo');

    select.addEventListener('change', (event) => {
        if(event.target.value != '0' || event.target.value !== 0)
            cargarTabla(event.target.value);
    });
}

function configuraciones(id){
    localStorage.setItem('_id_horario', id);
    window.location.href = urlCliente + 'gestion/base';
}

function eliminar_horario(id){
    alert(id);
}



