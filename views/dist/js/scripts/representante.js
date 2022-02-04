/* $(function(){  */

    _init();

    function _init(){
        cargarTabla();
        recuperarParentesco();
        recuperarEspecial();
        actualizar_representante();
    }

    function cargarTabla(){
        tabla = $('#tabla-representante').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'representante/datatable',
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

    function actualizar_representante(){
        $('#btn-update').click(function(){
            let id = $('#upd-repre-id').val();
            let persona_id = $('#upd-persona-id').val();
            let parentesco_id = $('#upd-select-parentesco option:selected').val();
            let especial_id = $('#upd-select-especial option:selected').val();
            let nombres = $('#upd-nombres').val();
            let apellidos = $('#upd-apellidos').val();
            let telefono = $('#upd-telefono').val();
            let correo = $('#upd-correo').val();
            let fecha_nac = $('#upd-fecha-nac').val();
            let sexo = $('#upd-sexo option:selected').val();
            
            if(persona_id.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una persona", "Campo vacío")
                // alert("campo rol vacio");
            }else 
            if(parentesco_id.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un parentesco", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(especial_id.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un especial", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(fecha_nac.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese una fecha de nacimiento", "Campo vacío")
                // alert("campo rol vacio");
            }
            else{
                let data = {
                    representante: {
                        id: id,
                        persona_id: persona_id, 
                        parentesco_id: parentesco_id,
                        especial_id: especial_id,
                        fecha_nac: fecha_nac,
                        nombres: nombres,
                        apellidos: apellidos,
                        telefono: telefono,
                        correo: correo,
                        sexo: sexo
                    },
                };
                console.log(data);

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'representante/editar',
                    type : 'POST',
                    data: {data: JSON.stringify(data)},
                    dataType : 'json',
                    success : function(response){
                        console.log(response);
                        if(response.status){
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
                
                            toastr["success"](response.mensaje, "Listo !")

                            $('#actualizar_representante').modal('hide');
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
/* });  */

function editar_representante(id){
    $('#actualizar_representante').modal('show');
    cargar_representante(id);
}

function cargar_representante(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'representante/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
       
            if(response.status){
                console.log(response);
                $('#upd-repre-id').val(response.representante.id);
                $('#upd-persona-id').val(response.persona.id);
                $('#upd-cedula').val(response.persona.cedula);
                $('#upd-nombres').val(response.persona.nombres);
                $('#upd-apellidos').val(response.persona.apellidos);
                $('#upd-telefono').val(response.persona.telefono);
                $('#upd-correo').val(response.persona.correo);
                $('#upd-fecha-nac').val(response.representante.fecha_nac);
                $('#upd-sexo').val(response.persona.sexo);
                $('#upd-select-parentesco').val(response.representante.parentesco_id);
                $('#upd-select-especial').val(response.representante.especial_id);
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

function recuperarParentesco(){
    $.ajax({
        url : urlServidor + 'parentesco/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione un Rol</option>';
                
                response.parentesco.forEach(element =>{
                    option += `<option value=${element.id}>${element.detalle}</option>`;
                });
                $('#upd-select-parentesco').html(option);

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

function recuperarEspecial(){
    $.ajax({
        url : urlServidor + 'especial/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione una Opción</option>';
                
                response.especial.forEach(element =>{
                    option += `<option value=${element.id}>${element.descripcion}</option>`;
                });
                $('#upd-select-especial').html(option);

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

function seleccionar_representante(id){
    let fila = '#fila-representante-'+id;
    let f = $(fila)[0].children;
    console.log(f);
    
    let cedula = f[2].innerText;
    let telefono = f[5].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;
    let correo = f[6].innerText;
    let sexo = f[7].innerText;
    let per_id = f[8].innerText;

    $('#form-repre-id').val(id);
    $('#form-cedula').val(cedula);
    $('#form-telefono').val(telefono);
    $('#form-nombres').val(nombres);
    $('#form-apellidos').val(apellidos);
    $('#form-correo').val(correo);
    $('#form-sexo').val(sexo);
    $('#form-persona-id').val(per_id);
}

function eliminar(id){
    let data = {
        representante: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'representante/eliminar/',
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
    
                toastr["success"]("Se Ha eliminado el representante del sistema", "Representante")
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