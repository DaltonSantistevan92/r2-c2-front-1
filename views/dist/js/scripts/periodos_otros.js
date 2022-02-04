/* $(function(){ */

    _init();

    function _init(){
        cargarTabla();
        form_periodo();
        nuevo_periodo();
        listarPeriodos();
        actualizar_periodos();
        form_grado();
        nuevo_grado();
        listarGrados();
        actualizar_grados();
        form_paralelo();
        nuevo_paralelo();
        listarParalelos();
        actualizar_paralelos();
    }

    function cargarTabla(){
        $.ajax({
            url : urlServidor + 'rol/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = "";    let i = 1;

                    response.roles.forEach(element => {
                        tr += `<tr>
                        <td>${i}</td>
                        <td>${element.rol}</td>
                        <td>
                          <div><button class="btn btn-primary btn-sm" onclick="editar(${element.id})">
                              <i class="fa fa-edit"></i>
                            </button>
                          </div>
                        </td>

                        <td>
                          <div><button class="btn btn-dark btn-sm" onclick="eliminar(${element.id})">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>`;
                        i++;
                    });

                    $('#table-roles').html(tr);
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

    function form_periodo(){
        $('#btn-periodo').click(function(){
            $('#modalPeriodo').modal('show');
        });

    }

    function nuevo_periodo(){
        $('#form-periodo-val').submit((e) => {
            e.preventDefault();

            let detalle = $('#form-periodo-texto').val();
            let desde = $('#form-desde-p').val();
            let hasta = $('#form-hasta-p').val();

            if(detalle.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un período", "Campo vacío")
            }else
            if(desde.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una fecha desde", "Campo vacío")
            }else
            if(hasta.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una fecha hasta", "Campo vacío")
            }
            else{
              let data = {
                  periodo: {
                      detalle: detalle, 
                      desde: desde,
                      hasta: hasta
                  },
              };

              //console.log(data);
              guardar_periodo(data);
            }
        });
    }

    function guardar_periodo(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'periodo/guardar',
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
    
                    toastr["success"]("El período se ha guardado correctamente", "Períodos y Otros")
                    $('#form-periodo-val')[0].reset();
                    $('#modalPeriodo').modal('hide');
                    //cargarTablaPeriodo();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Períodos y Otros")
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

    function listarPeriodos(){
        $.ajax({
            url: urlServidor + 'periodo/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.status) {
                    let tr = ""; let i = 1;

                    response.data.forEach(element => {
                        tr += `<tr>
                        <td>${i}</td>
                        <td>${element.desde} - ${element.hasta}</td>
                        <td>
                          <div class="btn-group"><button class="btn btn-primary btn-sm" onclick="editar_periodo_lista(${element.id})">
                              <i class="fa fa-edit"></i>
                            </button>
                            <button class="btn btn-dark btn-sm" onclick="eliminar_periodo_lista(${element.id})">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
    
                       
                      </tr>`;
                        i++;
                    });

                    $('#periodos-body').html(tr);
                }
            },
            error: function (xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function actualizar_periodos(){
        $('#btn-update').click(function(){
            let id = $('#periodo-id').val();
            let detalle = $('#upd-periodo-texto').val();
            let desde = $('#upd-desde-p').val();
            let hasta = $('#upd-hasta-p').val();
            
            if(detalle.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un período", "Campo vacío")
            }else
            if(desde.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una fecha desde", "Campo vacío")
            }else
            if(hasta.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una fecha hasta", "Campo vacío")
            }else{
                let data = {
                    periodo: {
                        id: id,
                        detalle: detalle, 
                        desde: desde,
                        hasta: hasta
                    },
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'periodo/editar',
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
            
                            toastr["success"]("El período se ha actualizado correctamente", "Períodos y Otros")

                            $('#actualizarPeriodo').modal('hide');
                            listarPeriodos();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
            
                            toastr["error"](response.mensaje, "Períodos y Otros")
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

    function form_grado(){
        $('#btn-grado').click(function(){
            $('#modalGrado').modal('show');
        });
    }

    function nuevo_grado(){
        $('#form-nuevo-grado').submit((e) => {
            e.preventDefault();

            let nombre_grado = $('#form-grado').val();

            if(nombre_grado.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un grado", "Campo vacío")
            }
            else{
              let data = {
                  grado: {
                    nombre_grado: nombre_grado
                  },
              };

              //console.log(data);
              guardar_grado(data);
            }
        });
    }

    function guardar_grado(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'grados/guardar',
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
    
                    toastr["success"]("El grado se ha guardado correctamente", "Períodos y Otros")
                    $('#form-nuevo-grado')[0].reset();
                    $('#modalGrado').modal('hide');
                    //cargarTablaPeriodo();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Períodos y Otros")
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

    function listarGrados(){
        $.ajax({
            url: urlServidor + 'grados/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.status) {
                    let tr = ""; let i = 1;

                    response.grados.forEach(element => {
                        tr += `<tr>
                        <td>${i}</td>
                        <td>${element.nombre_grado}</td>
                        <td>
                          <div class="btn-group"><button class="btn btn-primary btn-sm" onclick="editar_grado(${element.id})">
                              <i class="fa fa-edit"></i>
                            </button>
                            <button class="btn btn-dark btn-sm" onclick="eliminar_grado(${element.id})">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
    
                       
                      </tr>`;
                        i++;
                    });

                    $('#grados-body').html(tr);
                }
            },
            error: function (xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function actualizar_grados(){
        $('#btn-update-grados').click(function(){
            let id = $('#grado-id').val();
            let nombre_grado = $('#upd-nombre-grados').val();
  
            if(nombre_grado.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un grado", "Campo vacío")
            }else{
                let data = {
                    grado: {
                        id: id,
                        nombre_grado: nombre_grado, 
                    },
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'grados/editar',
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
            
                            toastr["success"]("El grado se ha actualizado correctamente", "Períodos y Otros")

                            $('#actualizarGrado').modal('hide');
                            listarGrados();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
            
                            toastr["error"](response.mensaje, "Períodos y Otros")
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

    function form_paralelo(){
        $('#btn-paralelo').click(function(){
            $('#modalParalelo').modal('show');
        });
    }

    function nuevo_paralelo(){
        $('#form-nuevo-paralelo').submit((e) => {
            e.preventDefault();

            let detalle = $('#form-paralelo').val();

            if(detalle.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un paralelo", "Campo vacío")
            }
            else{
              let data = {
                  paralelo: {
                    detalle: detalle
                  },
              };

              guardar_paralelo(data);
            }
        });
    }

    function guardar_paralelo(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'paralelo/guardar',
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
    
                    toastr["success"]("El paralelo se ha guardado correctamente", "Períodos y Otros")
                    $('#form-nuevo-paralelo')[0].reset();
                    $('#modalParalelo').modal('hide');
                    //cargarTablaPeriodo();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Períodos y Otros")
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

    function listarParalelos(){
        $.ajax({
            url: urlServidor + 'paralelo/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.status) {
                    let tr = ""; let i = 1;

                    response.data.forEach(element => {
                        tr += `<tr>
                        <td>${i}</td>
                        <td>${element.detalle}</td>
                        <td>
                          <div class="btn-group"><button class="btn btn-primary btn-sm" onclick="editar_paralelo(${element.id})">
                              <i class="fa fa-edit"></i>
                            </button>
                            <button class="btn btn-dark btn-sm" onclick="eliminar_paralelo(${element.id})">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
    
                       
                      </tr>`;
                        i++;
                    });

                    $('#paralelo-body').html(tr);
                }
            },
            error: function (xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function actualizar_paralelos(){
        $('#btn-update-paralelos').click(function(){
            let id = $('#paralelo-id').val();
            let detalle = $('#upd-paralelo').val();
  
            if(detalle.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un paralelo", "Campo vacío")
            }else{
                let data = {
                    paralelo: {
                        id: id,
                        detalle: detalle, 
                    },
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'paralelo/editar',
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
            
                            toastr["success"]("El paralelo se ha actualizado correctamente", "Períodos y Otros")

                            $('#actualizarParalelo').modal('hide');
                            listarParalelos();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
            
                            toastr["error"](response.mensaje, "Períodos y Otros")
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

function editar_periodo_lista(id){
    $('#actualizarPeriodo').modal('show');
    cargar_periodos(id);
}

function cargar_periodos(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'periodo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {

            if(response.status){
                $('#periodo-id').val(response.periodo.id);
                $('#upd-periodo-texto').val(response.periodo.detalle);
                $('#upd-desde-p').val(response.periodo.desde);
                $('#upd-hasta-p').val(response.periodo.hasta);
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

function eliminar_periodo_lista(id){
    let data = {
        periodo: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'periodo/eliminar/',
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
    
                toastr["success"]("Se Ha eliminado el periodo del sistema", "Períodos y Otros")
                listarPeriodos();
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

function editar_grado(id){
    $('#actualizarGrado').modal('show');
    cargar_grado(id);
}

function cargar_grado(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'grados/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {

            if(response.status){
                $('#grado-id').val(response.grados.id);
                $('#upd-nombre-grados').val(response.grados.nombre_grado);
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

function eliminar_grado(id){
    let data = {
        grado: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'grados/eliminar/',
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
    
                toastr["success"]("Se Ha eliminado el grado del sistema", "Períodos y Otros")
                listarGrados();
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

function editar_paralelo(id){
    $('#actualizarParalelo').modal('show');
    cargar_paralelo(id);
}

function cargar_paralelo(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'paralelo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {

            if(response.status){
                $('#paralelo-id').val(response.paralelo.id);
                $('#upd-paralelo').val(response.paralelo.detalle);
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

function eliminar_paralelo(id){
    let data = {
        paralelo: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'paralelo/eliminar/',
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
    
                toastr["success"]("Se Ha eliminado el paralelo del sistema", "Períodos y Otros")
                listarParalelos();
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