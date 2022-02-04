_init();

function _init() {
    areaModal();
    nuevaArea();
    clearForm();
    getAreas();
    form_materia();
    cargarTabla();
    // cargarTablaArea(); 
    getAreas();
    getAreasTable();
}

function clearForm() {
    document.getElementById('materia-nombre').value = ''
    document.getElementById('materia-select-area').value = '0',
    document.getElementById('materia-color').value = '',
    document.getElementById('materia-duracion').value = '';
}

function getAreas() {
    const url = urlServidor + 'area/listar';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.area.length > 0) {
                const select = document.getElementById('materia-select-area');
                let option = `<option value="0">Seleccione una opción</option>`;

                data.area.forEach(element => {
                    option += `<option value="${element.id}">${element.detalle}</option>`;
                });

                select.innerHTML = option;
            }
        });
}

function form_materia() {
    const form = document.getElementById('nueva-materia');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const json = {
            materia: {
                materia: document.getElementById('materia-nombre').value.trim(),
                area_id: document.getElementById('materia-select-area').value,
                color: document.getElementById('materia-color').value,
                duracion: document.getElementById('materia-duracion').value.trim()
            }
        };

        if (validarForm(json.materia)) {
            const url = urlServidor + 'materias/guardar';

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
                        cargarTabla();
                        
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

    function validarForm(materia) {
        if (materia.materia.length == 0 || materia.materia.length < 3) {
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]("Ingrese un nombre", "Campo vacío")
            return false;
        } else
            if (materia.area_id == '0') {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una materia", "Información")
                return false;
            } else
                if (materia.color.length == 0) {
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };

                    toastr["error"]("Establezca un color", "Error")
                    return false;
                } else
                    if (materia.duracion.length == 0 || materia.duracion.length < 3) {
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };

                        toastr["error"]("Ingrese una duración", "Campo vacío")

                        return false;
                    } else return true;
    }
}

function getAreasTable(){

    const url = urlServidor + 'area/listar';
    fetch(url)
    .then((res) => res.json())
    .then(res => {
        // console.log(res);
        const table = document.getElementById('tabla-areas');
        let tr = '';    table.innerHTML = '';

        if(res.status && res.area.length > 0){
            res.area.forEach((element, i) => {
                tr += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${element.detalle}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteArea(${element.id})">X</button>
                    </td>
                </tr>`;
            });
        }
        table.innerHTML = tr;
    });
}

function cargarTabla(){
    tabla = $('#tabla-materias').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'materias/datatable',
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 4,//Paginación
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

function eliminar_materia(id){
    let data = {
        materia: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'materias/eliminar',
        // especifica si será una petición POST o GET
        type : 'POST',
        // el tipo de información que se espera de respuesta
        data: {data: JSON.stringify(data)},
        dataType : 'json',
        success : function(response) {
            if(response.status){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["success"]("Se Ha eliminado la materia", "Materia")
                cargarTabla();
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function areaModal(){
    $('#area-modal-2').click(function(){
        $('#area-modal-2').modal('show');
    });
}

function nuevaArea(){
    $('#form-nuevo-area').submit((e) => {
        e.preventDefault();

        let detalle = $('#form-detalle-area').val();
        
        if(detalle.length == 0){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            toastr["error"]("Ingrese un area", "Campo vacío")
        }
        else{
          let data = {
              area: {
                  detalle: detalle,      
              },
          };

          //console.log(data);
          guardar_area(data);
        }
    });

    
}

function reloadAreas(){
    $('#area-modal-2').click(() => {
        getAreasTable();
    });
}

function guardar_area(json){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'area/guardar',
        data : "data=" + JSON.stringify(json),
        // especifica si será una petición POST o GET
        type : 'POST',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };
            if(response.status){
                toastr["success"]("El area se guardo correctamente", "Areas")
                form_materia();
                // cargarTablaArea();
                getAreas();
                getAreasTable();
                $('#form-nuevo-area')[0].reset();
                // $('#area-modal-2').modal('hide');
            }else{
                toastr["error"](response.mensaje, "Areas")
            }
            //console.log(response);
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function cargarTablaArea(){
    tabla = $('#tabla-areas').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'area/datatable',
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 4,//Paginación
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

function eliminar_area(id){
    let data = {
        area: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'area/eliminar/',
        // especifica si será una petición POST o GET
        type : 'POST',
        // el tipo de información que se espera de respuesta
        data: {data: JSON.stringify(data)},
        dataType : 'json',
        success : function(response) {
           // console.log(response);
            if(response.status){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["success"]("Se ah eliminado el Area", "Areas");
                //cargarTablaArea();
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });

}

function editar_area(id){
    alert(id);
}

function deleteArea(id){
    
    const url = urlServidor + 'area/delete';
    const json = {
        area: {
            id: id
        }
    }
    
    fetch(url,{
        method: 'POST',
        body: 'data=' + JSON.stringify(json),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Origin': '*'
        },
    })
    .then(res => res.json())
    .then(res => {
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        if(res.status){
            toastr["info"](res.message, "Listo");
            getAreas();
        }else{
            toastr["error"](res.message, "Error");
        }
    })
}