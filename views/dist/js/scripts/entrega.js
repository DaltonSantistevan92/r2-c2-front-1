// $(function(){

    _init();

    function _init(){
        datos();
        cargarTickets();
        buscarTickets();
        cargarProductos();
        agregarItem();
        form_entrega();
        generarCodigo();
    }

    function datos(){
        let user = JSON.parse(sessionStorage.getItem('sesion'));
        let nombres = user.persona.nombres + ' ' + user.persona.apellidos;

        $('#form-entrega-user').val(nombres);
    }

    function cargarTickets(){
        const user = JSON.parse(sessionStorage.getItem('sesion'));

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'ticket/listaEntregado/' + user.id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                let tr = '';
                if(response.length > 0){
                    let i = 1;
                    response.forEach(element => {
                        tr += ` <tr id="fila-ticket-${element.ticket.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.ticket.id}</td>
                        <td>${element.ticket.codigo}</td>
                        <td>${element.ticket.orden}</td>
                        <td>${element.ticket.representante.persona.nombres} ${element.ticket.representante.persona.apellidos}</td>
                        <td>${element.ticket.estudiante.persona.nombres} ${element.ticket.estudiante.persona.apellidos}</td>
                        <td>${element.ticket.fecha_entrega}</td>
                        <td>
                            <div class="div text-center">
                                <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_ticket(${element.ticket.id})">
                                    <i class="fa fa-check"></i>
                                </button>
                            </div>
                        </td>
                    </tr>`;
                    i++;
                    });
                }   
                $('#ticket-body').html(tr);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function buscarTickets(){
        $('#buscar-ticket').keyup(function(){
            let texto = $('#buscar-ticket').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'entrega/buscarxCodigo/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                    let tr = '';
                    let i = 1;
                        response.ticket.forEach(element => {
                            tr += ` <tr id="fila-ticket-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.codigo}</td>
                            <td>${element.orden}</td>
                            <td>${element.NomRepresentante} ${element.ApeRepresentante}</td>
                            <td>${element.NomEstudiante} ${element.ApeEstudiante}</td>
                            <td>${element.fecha_entrega}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_ticket(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                        i++;
                        });
                        $('#ticket-body').html(tr);
                    }else{
                        $('#ticket-body').html('No hay información disponible');
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
                            <td>${element.stock}</td>
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

    function form_entrega(){
        $('#form-nuevo-producto').submit((e) => {
            e.preventDefault();

            let ticket_id = $('#ticket-id').val();
            let usuario_id = JSON.parse(sessionStorage.getItem('sesion')).id;
            let producto_id = $('#form-prod-id').val();
            let codigo = $('#form-entrega-codigo').val();
            let cantidad = $('#form-producto-cant').val();
            //detalle 
            let productos = $('.fila-productos');
            if(ticket_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un ticket", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(producto_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un producto", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(cantidad.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese una cantidad", "Campo vacío")
                // alert("campo rol vacio");
            }else
            {
                let detalles = [];
               for(let i = 0; i < productos.length; i++){

                   let producto_id = productos[i].children[5].innerText;
                   let cantidad = productos[i].children[3].innerText;

                   let aux = {
                        producto_id, cantidad
                   };
                   detalles.push(aux);
               }

                let data = {
                    entrega: {
                        ticket_id: ticket_id,
                        usuario_id: usuario_id, 
                        codigo: codigo,
                    },
                    detalle_entrega: detalles
                };
                
                guardar_entrega(data);
            }
        });
    }

    function guardar_entrega(json){
        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'entrega/guardar',
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
    
                    toastr["success"]("La entrega se ha realizado correctamente", "Entregas")
                    guardarCodigo();
                    reset();
                    $('#form-nuevo-producto')[0].reset();
                    $('#detalle-ticket').addClass('d-none');
                    cargarTickets();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Entregas")
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
        $('#form-entrega-ticket-codigo').val('');
        $('#form-entrega-ticket-repre').val('');
    }

    function agregarItem(){
        $('#item-agregar').click(function(e){
            e.preventDefault();
            let id = $('#form-prod-id').val();
            let nombre = $('#form-producto-nombre').val();
            let categoria = $('#form-producto-categoria').val();
            let cantidad = $('#form-producto-cant').val();
            let stock = parseInt($('#form-producto-stock').val());

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

                toastr["error"]("Ingrese una cantidad", "Campo vacío")
            }else
            if(parseInt(cantidad) > stock){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("La cantidad ingresada excede el stock actual", "Entregas")
            }else
            {
                let tr = `<tr id="fila-prod-${id}" class="fila-productos">
                    <td><i class="fas fa-star-of-life"></i></td>
                    <td>${categoria}</td>
                    <td>${nombre}</td>
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
                $('#form-prod-id').val('');
                $('#form-producto-nombre').val('');
                $('#form-producto-categoria').val('');
                $('#form-producto-cant').val('');
                $('#form-producto-stock').val('');
            }
        });
    }

    function generarCodigo(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'entrega/getOrden/entrega',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
               if(response.status){
                   $('#form-entrega-codigo').val(response.orden);
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
        let num_orden = $('#form-entrega-codigo').val();

        let json = {
            orden: {
                num_orden: num_orden,
                tipo: 'entrega'
            }
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'entrega/aumentarOrden',
            // especifica si será una petición POST o GET
            type : 'POST',
            data : "data=" + JSON.stringify(json),
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                //console.log(response); 
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

function seleccionar_ticket(id){
    let fila = '#fila-ticket-'+id;
    let f = $(fila)[0].children;
    
    let codigo = f[2].innerText;
    let representante = f[4].innerText;

    $('#ticket-id').val(id);
    $('#form-entrega-ticket-codigo').val(codigo);
    $('#form-entrega-ticket-repre').val(representante);

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'ticket/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) { 
            console.log(response);
            let div = '';
            if(response.status){
                    div = `<div class="col-md-9 col-sm-6 col-12" id="detalle-ticket">
                    <div class="info-box mb-3 bg-primary">

                        <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Turno: ${response.ticket.orden}</span>
                            <span class="info-box-number">Estudiante: ${response.ticket.estudiante.persona.nombres} ${response.ticket.estudiante.persona.apellidos}</span>
                            <span class="info-box-number">F. Entrega: ${response.ticket.fecha_entrega}</span>
                        </div>
                    </div>
                </div>`;
            }
            $('#ticket-entrega').html(div);
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function seleccionar_producto(id){
    let fila = '#fila-producto-'+id;
    let f = $(fila)[0].children;
    
    let nombre = f[2].innerText;
    let categoria = f[3].innerText;
    let stock = f[4].innerText;

    if(parseInt(stock) > 0){
        $('#form-prod-id').val(id);
        $('#form-producto-nombre').val(nombre);  
        $('#form-producto-categoria').val(categoria);
        $('#form-producto-stock').val(stock);
        $('#modal-producto').modal('hide');
    }else{
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        toastr["error"]("No hay productos en Stock", "Entregas")
    }

}

function borrar_item(id){
    let tr = '#fila-prod-'+id;
    $(tr).remove();
}