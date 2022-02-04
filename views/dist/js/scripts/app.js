/* $(function(){ */
    
  init();

  function init(){
      datos();
      cargarMenu();
      logout();
      cargarTablaPeriodo();
      form_periodo();
  }   

  function getSesion(){

      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      if(sesion){
        return sesion;
      }else{
        return null;
      }
  }

  function cargarMenu(){
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));

      if(sesion){
          let rol_id = sesion.rol.id;
  
          $.ajax({
              url : urlServidor + 'permiso/rol/' + rol_id,
              type : 'GET',
              dataType : 'json',
              success : function(response) {
                  if(response){
                      let padre = ''; let i = 1;
  
                      response.forEach(element => {
                          let li = '';
                          element.menus_hijos.forEach(hijo => {
                              li += `<li class="nav-item">
                              <a href="${urlCliente}${hijo.url}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>${hijo.nombre}</p>
                              </a>
                            </li>`;
                          });
  
                          if(i == 1){
                              padre += `<li class="nav-item menu-open">
                              <a href="#" class="nav-link">
                                <i class="${element.icono} mr-2"></i>
                                <p>
                                  ${element.nombre}
                                  <i class="right fas fa-angle-left"></i>
                                </p>
                              </a>
                              <ul class="nav nav-treeview">
                                  ${li}
                              </ul>
                            </li>`;
                          }else{
                              padre += `<li class="nav-item">
                              <a href="#" class="nav-link">
                                <i class="${element.icono} mr-2"></i>
                                <p>
                                  ${element.nombre}
                                  <i class="right fas fa-angle-left"></i>
                                </p>
                              </a>
                              <ul class="nav nav-treeview">
                                  ${li}
                              </ul>
                            </li>`;
                          }
                        i++;
                      });
  
                      $('#menu_rol').html(padre);
                  };
              },
              error : function(xhr, status) {
                  console.log('Disculpe, existió un problema');
              },
              complete : function(xhr, status) {
                  // console.log('Petición realizada');
              }
          });
      }
  }

  function datos(){
      let sesion = getSesion();
      
      if(sesion){
          let nombres = sesion.persona.nombres + ' ' + sesion.persona.apellidos;
          let foto = sesion.foto;
          let img = `<img src="${urlServidor}resources/${foto}" class="img-circle elevation-2" alt="User Image">`;
          let rol = sesion.rol.rol;

          $('#sesion-usuario').html(nombres);
          $('#sesion-img').html(img);
          $('#sesion-rol').html(rol);
      }
  }

  function logout(){
      $('#sesion-logout').click(function(){
          sessionStorage.clear();
          window.location = urlCliente + 'login';
      });
  }

  function cargarTablaPeriodo(){
    $.ajax({
        url : urlServidor + 'periodo/listar',
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let tr = "";    let i = 1;
                response.data.forEach(element => {
                    tr += `<tr>
                    <td>${i}</td>
                    <td>${element.detalle}</td>
                    <td>${element.desde}</td>
                    <td>${element.hasta}</td>
                    <td>
                      <div class="btn-group"><button class="btn btn-primary btn-sm" onclick="editar_periodo(${element.id})">
                          <i class="fa fa-play"></i>
                        </button>
                        <button class="btn btn-dark btn-sm" onclick="eliminar_per(${element.id})">
                          <i class="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>

                   
                  </tr>`;
                    i++;
                });

                $('#table-periodo').html(tr);
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
  $('#form-nuevo-periodo').submit((e) => {
      e.preventDefault();

      let detalle = $('#form-periodo').val();
      let desde = $('#form-desde').val();
      let hasta = $('#form-hasta').val();

      if(detalle.length == 0){
          toastr.options = {
              "closeButton": true,
              "preventDuplicates": true,
              "positionClass": "toast-top-center",
          };

          toastr["error"]("Ingrese un período", "Campo vacío")
          // alert("campo rol vacio");
      }else
      if(desde.length == 0){
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        toastr["error"]("Ingrese una fecha desde", "Campo vacío")
        // alert("campo rol vacio");
      }else
      if(hasta.length == 0){
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        toastr["error"]("Ingrese una fecha hasta", "Campo vacío")
        // alert("campo rol vacio");
      }else{
        let data = {
            periodo: {
                detalle: detalle, 
                desde: desde,
                hasta: hasta
            },
        };

        guardar(data);
      }
  });
} 

function guardar(json){
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

                toastr["success"]("El período se ha guardado correctamente", "Rol")
                $('#form-nuevo-periodo')[0].reset();
                cargarTablaPeriodo();
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

/* }); */

function editar_periodo(id){
  //alert(id);
  play_periodo(id);

}

function play_periodo(id){
  let data = {
      periodo: {
          id: id,
      }
  }

  $.ajax({
      // la URL para la petición
      url : urlServidor + 'periodo/definir/',
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
  
              toastr["success"](response.mensaje)
              cargarTablaPeriodo();
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


function eliminar_per(id){
  //alert(id);
  eliminar_periodo(id);
}

function eliminar_periodo(id){
  let data = {
      periodo: {
          id: id,
      }
  }

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
  
              toastr["success"](response.mensaje)
              cargarTablaPeriodo();
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