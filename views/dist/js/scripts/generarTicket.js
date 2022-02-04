/* $(function(){ */

    _init();

    function _init(){
        cargarRepresentantes();
        buscarRepresentantes();
        cargarEstudiantes();
        buscarEstudiantes();
        cargarHorarios();
        form_ticket();
        generarCodigo();
    }

    function cargarRepresentantes(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'representante/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);

                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.representante.forEach(element => {
                        tr += `<tr id="fila-representante-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.persona.cedula}</td>
                            <td>${element.persona.nombres}</td>
                            <td>${element.persona.apellidos}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_representante(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#representante-body').html(tr);
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

    function buscarRepresentantes(){
        $('#buscar-repre').keyup(function(){
            let texto = $('#buscar-repre').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'representante/buscarRepresentante/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                    let tr = '';
                    let i = 1;
                    response.representante.forEach(element => {
                            tr += `<tr id="fila-representante-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td>
                                    <div class="div text-center">
                                        <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_representante(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                        i++;
                        });
                        $('#representante-body').html(tr);
                    }else{
                    $('#representante-body').html('No hay información disponible');
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

    function cargarEstudiantes(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'estudiante/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.estudiante.forEach(element => {
                        tr += `<tr id="fila-estudiante-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.persona.cedula}</td>
                            <td>${element.persona.nombres}</td>
                            <td>${element.persona.apellidos}</td>
                            <td>
                                <div class="div text-center">
                                    <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_estudiante(${element.id})">
                                        <i class="fa fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#estudiante-body').html(tr);
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

    function buscarEstudiantes(){
        $('#buscar-est').keyup(function(){
            let texto = $('#buscar-est').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'estudiante/buscarEstudiante/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                    let tr = '';
                    let i = 1;
                    response.estudiantes.forEach(element => {
                            tr += `<tr id="fila-estudiante-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td>
                                    <div class="div text-center">
                                        <button data-dismiss="modal" class="btn btn-primary btn-sm" onclick="seleccionar_estudiante(${element.id})">
                                            <i class="fa fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                        i++;
                        });
                        $('#estudiante-body').html(tr);
                    }else{
                    $('#estudiante-body').html('No hay información disponible');
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

    function cargarHorarios(){
        $.ajax({
            url : urlServidor + 'horarioAtencion/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione un Horario</option>';
                    
                    response.horario_atencion.forEach(element =>{
                        option += `<option value=${element.id}>${element.hora_inicio} - ${element.hora_fin}</option>`;
                    });
                    $('#form-horario').html(option);
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

    function form_ticket(){
        $('#form-nuevo-ticket').submit((e) => {
            e.preventDefault();

            let estudiante_id = $('#form-est-id').val();
            let representante_id = $('#form-repre-id').val();
            let horario_atencion_id = $('#form-horario option:selected').val();
            let fecha_entrega = $('#form-fech-entrega').val();
            let orden = $('#orden-ticket').text();
            const usuario = JSON.parse(sessionStorage.getItem('sesion'));

            let fecha = new Date();
            let fecha_ac = fecha.getFullYear() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getDate();

            if(estudiante_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un estudiante", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(representante_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione un representante", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(horario_atencion_id == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione la hora de atención", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(fecha_entrega.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione la fecha de entrega", "Campo vacío")
                // alert("campo rol vacio");
            }else
            if(moment(fecha_ac).isAfter(fecha_entrega)){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["error"]("La fecha de entrega no puede ser menor a la fecha actual", "Ticket")
            }
            else{
              let data = {
                  ticket: {
                      estudiante_id: estudiante_id,
                      representante_id: representante_id, 
                      horario_atencion_id: horario_atencion_id,
                      fecha_entrega: fecha_entrega,
                      orden: orden,
                      usuario_id: usuario.id
                  },
              };
              guardar_ticket(data);
            }
        });
    }

    function guardar_ticket(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'ticket/guardar',
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
    
                    toastr["success"]("El ticket se ha generado correctamente", "Ticket")
                    $('#form-nuevo-ticket')[0].reset();
                    guardarCodigo();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Ticket")
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

    function generarCodigo(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'ticket/getOrden/ticket',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
               if(response.status){
                   $('#orden-ticket').text(response.orden);
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
        let num_orden = $('#orden-ticket').text();

        let json = {
            orden: {
                num_orden: num_orden,
                tipo: 'ticket'
            }
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'ticket/aumentarOrden',
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
/* }); */

function seleccionar_representante(id){
    let fila = '#fila-representante-'+id;
    let f = $(fila)[0].children;
    
    let cedula = f[2].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;

    $('#form-repre-id').val(id);
    $('#form-cedula-repre').val(cedula);
    $('#form-nombres-repre').val(nombres + ' ' + apellidos);

}

function seleccionar_estudiante(id){
    let fila = '#fila-estudiante-'+id;
    let f = $(fila)[0].children;
    
    let cedula = f[2].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;

    $('#form-est-id').val(id);
    $('#form-cedula-est').val(cedula);
    $('#form-nombres-est').val(nombres + ' ' + apellidos);

}
