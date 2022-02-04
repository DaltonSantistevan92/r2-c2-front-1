// $(function(){

    _init();

    function _init(){
        cargarCategorias();
        cargarTablaInsumos();
        cargarTablaLibros();
        form_producto();
        actualizar_producto();
        recuperarCategorias();
        cargarDatosFecha();
        //validarCajas();
        //actualizarCajas();
        previewImg();
    }

    function cargarCategorias(){
        $.ajax({
            url : urlServidor + 'categoria/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione una Categoría</option>';
                    
                    response.data.forEach(element =>{
                        option += `<option value=${element.id}>${element.detalle}</option>`;
                    });
                    $('#form-producto-categoria').html(option);
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

    function cargarTablaInsumos(){
        tabla = $('#tabla-insumos').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'producto/dataTableInsumo',
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

    function cargarTablaLibros(){
        tabla = $('#tabla-libros').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'producto/dataTableLibro',
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

    function form_producto(){
        $('#form-nuevo-producto').submit((e) => {
            e.preventDefault();

            let nombre = $('#form-producto-nombre').val();
            let categoria_id = $('#form-producto-categoria option:selected').val();
            let peso = $('#form-producto-peso').val();
            let descripcion = $('#form-producto-descripcion').val();
            let imagen = $('#form-img-producto')[0].files[0];
            let fecha_caducidad = $('#form-producto-fecha-caduca').val();

            if(nombre.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un nombre", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(categoria_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una categoría", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(peso.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un peso", "Campo vacío")
                // alert("campo rol vacio");
            }
            else{
              let json = {
                      categoria_id: categoria_id,
                      nombre: nombre, 
                      peso: peso,
                      descripcion: descripcion,
                      img: imagen,
                      fecha_caducidad: fecha_caducidad
                }
                let formdata = new FormData();
              if(imagen == undefined){
                json.img = 'default_product.jpg';
              //  formdata.append('producto',json);
                }else{
                    //subir archivo
                    if(imagen.type == 'image/jpeg'  || imagen.type == 'image/jpg' || imagen.type == 'image/png'){
                        json.img = imagen.name;
                        
                        guardar_producto(json,imagen);
                    }else{         
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
        
                        toastr["error"]('Tipo de archivo no admitido!', "Productos")
                    }
                }  
              
            }
        });
    }

    function guardar_producto(data,imagen){
        let json = {
            producto: data
        }
        let formdata = new FormData();
        formdata.append('fichero',imagen);
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'producto/guardar',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["success"]("El producto se ha guardado correctamente", "Productos")
                    $('#form-nuevo-producto')[0].reset();
                    cargarTablaInsumos();
                    cargarTablaLibros();

                    $.ajax({
                        // la URL para la petición
                        url : urlServidor + 'producto/subir',
                        data : formdata,
                        contentType: false,
                        processData: false, 
                        // especifica si será una petición POST o GET
                        type : 'POST',
                        // el tipo de información que se espera de respuesta
                        dataType : 'json',
                        success : function(responseImg) {
                            //console.log(responseImg);
                        },
                        error : function(jqXHR, status, error) {
                            console.log('Disculpe, existió un problema');
                        },
                        complete : function(jqXHR, status) {
                            // console.log('Petición realizada');
                        }
                    }); 
              
                    $('#img-preview-producto').attr('src',urlServidor + 'resources/productos/default_product.jpg');
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Productos")
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

    function actualizar_producto(){
        $('#btn-update').click(function(){
            let id = $('#prod-id').val();
            let nombre = $('#upd-nombre').val();
            let categoria_id = $('#upd-categoria option:selected').val();
            let peso = $('#upd-peso').val();
            let descripcion = $('#upd-descripcion').val();
            let fecha_caducidad = $('#upd-fecha-caduca').val();

            if(nombre.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un nombre", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(categoria_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una categoría", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(peso.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un peso", "Campo vacío")
                // alert("campo rol vacio");
            }
            else{
                let data = {
                    producto: {
                        id: id,
                        categoria_id: categoria_id,
                        nombre: nombre, 
                        peso: peso,
                        descripcion: descripcion,
                        fecha_caducidad: fecha_caducidad
                    },
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'producto/editar',
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
            
                            toastr["success"]("El producto se ha actualizado correctamente", "Productos")

                            $('#actualizar_insumo').modal('hide');
                            cargarTablaInsumos();
                            cargarTablaLibros();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
            
                            toastr["error"](response.mensaje, "Productos")
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

    function cargarDatosFecha(){
        $('#form-producto-categoria').change(function(){
            let categoria_id = $('#form-producto-categoria option:selected').val();

            if(categoria_id == '1'){
                $('#data-fecha-cad').removeClass('d-none');
                $('#producto-data-peso').removeClass('d-none'); 
                $('#form-producto-peso').val(''); 
            }else
            if(categoria_id == '2'){
                $('#data-fecha-cad').addClass('d-none');  
                $('#form-producto-peso').val(0); 
                $('#producto-data-peso').addClass('d-none');           
            } 
            
        });
    }

    function validarCajas(){
        $('#form-producto-caja').keyup(function(){
            let cajas = $('#form-producto-caja').val();
            
            let cajaxuni = 24;
            let cajatotal = cajas * cajaxuni;
            $('#form-producto-stock').val(cajatotal)
        });
    }

    function actualizarCajas(){
        $('#upd-caja').keyup(function(){
            let cajas = $('#upd-caja').val();
            
            let cajaxuni = 24;
            let cajatotal = cajas * cajaxuni;
            $('#upd-stock').val(cajatotal)
        });
    }

    function previewImg(){
        $('#form-img-producto').change(function(){
            readImage(this);
            $('#img-preview-producto').removeClass('d-none');
        });
    }

    function readImage(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#img-preview-producto').attr('src', e.target.result); // Renderizamos la imagen
          }
          reader.readAsDataURL(input.files[0]);
        }
    }
// });

function editar_producto(id){
    $('#actualizar_insumo').modal('show');
    cargar_insumo(id);
}

function cargar_insumo(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'producto/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            let id = '';
            if(response.status){
                $('#prod-id').val(response.producto.id);
                $('#upd-nombre').val(response.producto.nombre);
                $('#upd-peso').val(response.producto.peso);
                $('#upd-caja').val(response.producto.caja);
                $('#upd-stock').val(response.producto.stock);
                $('#upd-descripcion').val(response.producto.descripcion);
                $('#upd-fecha-caduca').val(response.producto.fecha_caducidad);
                $('#upd-categoria').val(response.producto.categoria.id);

                id =response.producto.categoria.id;
                if(id == 1){
                    $('#upd-data-fecha').removeClass('d-none');
                    $('#upd-data-peso').removeClass('d-none');
                }else{
                    $('#upd-data-fecha').addClass('d-none');
                    $('#upd-data-peso').addClass('d-none');
                }
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

function recuperarCategorias(){
    $.ajax({
        url : urlServidor + 'categoria/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione una Categoría</option>';
                
                response.data.forEach(element =>{
                    option += `<option value=${element.id}>${element.detalle}</option>`;
                });
                $('#upd-categoria').html(option);
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

function eliminar_producto(id){
    let data = {
        producto: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'producto/eliminar/',
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
    
                toastr["success"]("Se Ha eliminado el producto del sistema", "Productos")
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