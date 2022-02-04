// $(function(){

    _init();

    function _init(){
        cargarTabla();
        form_rol();
        actualizar_rol();
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

    function form_rol(){
        $('#form-nuevo-rol').submit((e) => {
            e.preventDefault();

            let rol = $('#form-rol-rol').val();
            let descripcion = $('#form-rol-descripcion').val();

            if(rol.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un rol", "Campo vacío")
                // alert("campo rol vacio");
            }else{
              let data = {
                  rol: {
                      rol: rol, 
                      descripcion: descripcion
                  },
              };

              guardar2(data);
              console.log(data);
            }
        });
    }

    function guardar2(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'rol/guardar',
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
    
                    toastr["success"]("El rol se ha guardado correctamente", "Rol")
                    $('#form-nuevo-rol')[0].reset();
                    cargarTabla();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Rol")
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

    function actualizar_rol(){
        $('#btn-update').click(function(){
            let id = $('#rol-id').val();
            let rol = $('#upd-rol').val();
            let descripcion = $('#upd-descripcion').val();
            
            if(rol.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese un rol", "Campo vacío")
                // alert("campo rol vacio");
            }else{
                let data = {
                    rol: {
                        id: id,
                        rol: rol, 
                        descripcion: descripcion
                    },
                };
                console.log(data);

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'rol/editar',
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
            
                            toastr["success"]("El rol se ha actualizado correctamente", "Rol")

                            $('#actualizar_rol').modal('hide');
                            cargarTabla();
                        }else{
                            toastr.options = {
                                "closeButton": true,
                                "preventDuplicates": true,
                                "positionClass": "toast-top-center",
                            };
            
                            toastr["error"](response.mensaje, "Rol")
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
// });

function editar(id){
    $('#actualizar_rol').modal('show');
    cargar_rol(id);
}

function cargar_rol(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'rol/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
       
            if(response.status){
                $('#rol-id').val(response.rol.id);
                $('#upd-rol').val(response.rol.rol);
                $('#upd-descripcion').val(response.rol.descripcion);
                // document.getElementById('upd-cargo').value = response.usuario.rol_id
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

function eliminar(id){
    let data = {
        rol: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'rol/eliminar/',
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
    
                toastr["success"]("Se Ha eliminado el rol del sistema", "Rol")
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