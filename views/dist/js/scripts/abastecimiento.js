// $(function(){

    _init();

    function _init(){
        datos();
        cargarCategorias();
        cargarProveedores();
        cargarProductos();
        agregarItem();
        form_abastecimiento();
        //validarCajas();
        generarCodigo();
        buscarProductos();
    }

    function datos(){
        let user = JSON.parse(sessionStorage.getItem('sesion'));
        let nombres = user.persona.nombres + ' ' + user.persona.apellidos;

        $('#form-abast-user').val(nombres);
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

    function cargarProveedores(){
        $.ajax({
            url : urlServidor + 'proveedor/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione un Proveedor</option>';
                    
                    response.data.forEach(element =>{
                        option += `<option value=${element.id}>${element.razon_social}</option>`;
                    });
                    $('#form-abast-prov').html(option);
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

    function cargarProductos(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'producto/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.producto.forEach(element => {
                        tr += `<tr id="fila-producto-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>${element.categoria.detalle}</td>
                            <td>${element.peso}</td>
                            <td style="display: none">${element.img}</td>
                            <td style="display: none">${element.categoria.id}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_producto(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#producto-body').html(tr);
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

    function buscarProductos(){
        $('#buscar-prod').keyup(function(){
            let texto = $('#buscar-prod').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/buscarProducto/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                    let tr = '';
                    let i = 1;
                        response.productos.forEach(element => {
                            tr += `<tr id="fila-producto-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.nombre}</td>
                                <td>${element.categoria.detalle}</td>
                                <td>${element.peso}</td>
                                <td style="display: none">${element.img}</td>
                                <td style="display: none">${element.categoria.id}</td>
                                <td>
                                    <div class="div text-center">
                                        <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_producto(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                        i++;
                        });
                        $('#producto-body').html(tr);
                    }else{
                        $('#producto-body').html('No hay información disponible');
                   }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        });
    }

    function form_abastecimiento(){
        $('#form-nuevo-producto').submit((e) => {
            e.preventDefault();

            let proveedor_id = $('#form-abast-prov option:selected').val();
            let usuario_id = JSON.parse(sessionStorage.getItem('sesion')).id;
            let codigo = $('#form-abast-codigo').val();
            //detalle 
            let productos = $('.fila-productos');
            if(proveedor_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un proveedor", "Campo vacío")
                // alert("campo rol vacio");
            }else
            {
                let detalles = [];
               for(let i = 0; i < productos.length; i++){

                   let producto_id = productos[i].children[5].innerText;
                   let num_caja = productos[i].children[2].innerText;
                   let cantidad = productos[i].children[3].innerText;

                   let aux = {
                        producto_id, num_caja, cantidad
                   };
                   detalles.push(aux);
               }

                let data = {
                    abastecer: {
                        proveedor_id: proveedor_id,
                        usuario_id: usuario_id, 
                        codigo: codigo,
                    },
                    detalle_abastecer: detalles
                };
                
            guardar_abastecimiento(data);
            }
        });
    }

    function guardar_abastecimiento(json){
        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'abastecer/guardar',
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
    
                    toastr["success"]("El abastecimiento se ha realizado correctamente", "Abastecimiento")
                    guardarCodigo();
                    reset();
                    $('#form-nuevo-producto')[0].reset();
                    $('#form-nuevo-proveedor')[0].reset();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Abastecimiento")
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

    function reset(){
        $('#items-productos').html('');
        $('#form-producto-img').attr('src',urlServidor + 'resources/productos/default_product.jpg');
    }

    function validarCajas(){
            $('#form-producto-caja').keyup(function(){
                let cajas = $('#form-producto-caja').val();
              
                let cajaxuni = 24;
                let cajatotal = cajas * cajaxuni;
                $('#form-producto-stock').val(cajatotal)
            });   
    }

    function noValidarCajas(){
        $('#form-producto-caja').keyup(function(){
            $('#form-producto-caja').val();
            $('#form-producto-stock').val(0)
        });   
    }

    function agregarItem(){
        $('#item-agregar').click(function(e){
            e.preventDefault();
            let id = $('#prod-id').val();
            let nombre = $('#form-producto-nombre').val();
            let cajas = $('#form-producto-caja').val();
            let cantidad = $('#form-producto-stock').val();

            if(id.length == 0){
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            toastr["error"]("Seleccione un producto", "Campo vacío")
            }else
            if(cantidad.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un número de cajas", "Campo vacío")
            }else
            if(cajas <= 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("La candidad puede ser menor o igual a 0", "Abastecer")
            }else
            {
                let tr = `<tr id="fila-prod-${id}" class="fila-productos">
                    <td><i class="fas fa-star-of-life"></i></td>
                    <td>${nombre}</td>
                    <td>${cajas}</td>
                    <td>${cantidad}</td>
                    <th>
                        <div>
                            <button class="btn btn-danger" onclick="borrar_item(${id})">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </th>
                    <th style="display:none;">${id}</th>
                </tr>`;

                $('#items-productos').append(tr);
                $('#form-producto-caja').val(0);
                $('#form-producto-stock').val(0);
            }
        });
    }

    function generarCodigo(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'abastecer/getOrden/abastecer',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
               if(response.status){
                   $('#form-abast-codigo').val(response.orden);
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

    function guardarCodigo(){
        let num_orden = $('#form-abast-codigo').val();
        console.log(num_orden);

        let json = {
            orden: {
                num_orden: num_orden,
                tipo: 'abastecer'
            }
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'abastecer/aumentarOrden',
            // especifica si será una petición POST o GET
            type : 'POST',
            data : "data=" + JSON.stringify(json),
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response); 
                generarCodigo();
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
// });

function seleccionar_producto(id){
    let fila = '#fila-producto-'+id;
    let f = $(fila)[0].children;
    
    let nombre = f[2].innerText;
    let categoria = f[3].innerText;
    let peso = f[4].innerText;
    let imagen = f[5].innerText;
    let categoria_id = f[6].innerText;
    let img = (imagen != 'default_product.jpg') ? urlServidor + 'resources/productos/' + imagen : urlServidor + 'resources/productos/default_product.jpg' ;

    $('#prod-id').val(id);
    $('#form-producto-nombre').val(nombre);
    $('#form-producto-peso').val(peso);
    $('#form-producto-categoria').val(categoria);
    $('#form-producto-img').attr('src',img);
    $('#categoria_id').val(categoria_id);
    
    if(categoria_id == 1){ //insumo
        $('#ocultar-peso').removeClass('d-none');
        $('#form-producto-stock').attr("readOnly", true);
        validarCajas();
    }else
    if( categoria_id == 2){//libro
        $('#ocultar-peso').addClass('d-none');
        $('#form-producto-stock').attr("readOnly", false);
        $('#form-producto-caja').val(0);
        $('#form-producto-stock').val(0);
        noValidarCajas(); 
    } 
}

function borrar_item(id){
    let tr = '#fila-prod-'+id;
    $(tr).remove();
}