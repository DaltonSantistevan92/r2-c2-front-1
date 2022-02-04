/* $(function(){ */

    _init();

    function _init(){
        cargarTabla();
        recuperarPeriodo();
        recuperarCurso();
        recuperarParalelo();
        actualizar_docente();
    }

    function cargarTabla(){
        tabla = $('#tabla-docente').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'docente/datatable',
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

    function actualizar_docente(){
        $('#btn-update').click(function(){
            let id = $('#docente-id').val();
            let nombres = $('#upd-nombres').val();
            let apellidos = $('#upd-apellidos').val();
           
            if(nombres.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un nombre", "Campo vacío")
                // alert("campo rol vacio");
            }
            else
            if(apellidos.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un apellido", "Campo vacío")
                // alert("campo rol vacio");
            }else
            {
                let data = {
                    docente: {
                        id: id,
                        nombres: nombres,
                        apellidos: apellidos,
                    },
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'docente/editar',
                    type : 'POST',
                    data: {data: JSON.stringify(data)},
                    dataType : 'json',
                    success : function(response){
                        if(response.status){
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
                
                            toastr["success"](response.mensaje, "Listo !")

                            $('#actualizar_docente').modal('hide');
                            cargarTabla();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
                
                            toastr["error"](response.mensaje, "Error")
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
        })
    }

/* }); */

function editar_docenteCurso(id){
    $('#actualizar_docente').modal('show');
    cargar_docente(id);
}

function cargar_docente(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'docente/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {   
             if(response.status){     
                let nombres = response.data.persona.nombres;
                let apellidos = response.data.persona.apellidos;
                let cedula = response.data.persona.cedula;
                let docente = response.data.id;
                let persona_id = response.data.persona.id;

                $('#per-id').val(persona_id);
                $('#docente-id').val(docente);
                $('#upd-nombres').val(nombres);
                $('#upd-apellidos').val(apellidos);
                $('#upd-cedula').val(cedula);
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

function recuperarPeriodo(){
    $.ajax({
        url : urlServidor + 'periodo/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione una Opción</option>';
                
                response.data.forEach(element =>{
                    option += `<option value=${element.id}>${element.detalle}</option>`;
                });
                $('#upd-periodo').html(option);

            }   
        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // console.log('Petición realizada');
        }
    });
}

function recuperarCurso(){
    $.ajax({
        url : urlServidor + 'curso/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione un Curso</option>';
                
                response.data.forEach(element =>{
                    option += `<option value=${element.id}>${element.curso}</option>`;
                });
                $('#upd-curso').html(option);

            }   
        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // console.log('Petición realizada');
        }
    });
}

function recuperarParalelo(){
    $.ajax({
        url : urlServidor + 'paralelo/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione un Paralelo</option>';
                
                response.data.forEach(element =>{
                    option += `<option value=${element.id}>${element.detalle}</option>`;
                });
                $('#upd-paralelo').html(option);

            }   
        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // console.log('Petición realizada');
        }
    });
}

function eliminar_docenteCurso(id){
    let data = {
        docente: {
            id: id,
        }
    };
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'docente/eliminar',
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
    
                toastr["success"]("Se Ha eliminado el docente del sistema", "Docente")
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



