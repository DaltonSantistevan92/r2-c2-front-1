$(function(){

    _init();

    function _init(){
      
        guardarHora();
        guardarNuevaBase();
        reset_horas();
        cargarHoras();
        cargarDias();
        getBases();
        btnEstablecer();
        changeDetalleBaSe();
        getPeridos();
        getBases_v2();
    }


    function getBases_v2(){
        const url = urlServidor + 'base/listar';

        fetch(url)
        .then(res => res.json())
        .then(response => {
                let option = '<option value="0">Seleccione una opción</option>';
                const select = document.getElementById('select-base');
                select.innerHTML = '';

                if(response.status){
                    response.base.forEach((element) => {
                        option +=  `<option value="${element.id}">${element.nombre}</option>`;
                    });
                }

                select.innerHTML = option;
        });
    }

    function getBases(){
        console.log("llama a esta funcion y no ejecuta");

        $.ajax({
            url : urlServidor + 'base/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                console.log(response);

                let option = '<option value="0">Seleccione una opción</option>';
                const select = document.getElementById('select-base');
                select.innerHTML = '';

                if(response.status){
                    response.base.forEach((element) => {
                        option +=  `<option value="${element.id}">${element.nombre}</option>`;
                    });
                }

                select.innerHTML = option;
            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(xhr, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function getPeridos() {
        const url = urlServidor + 'periodo/listar';
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                const select = document.getElementById('select-periodo');
                let option = `<option value="0">Seleccione una opción</option>`;
    
                data.data.forEach(element => {
                    option += `<option value="${element.id}">${element.desde} - ${element.hasta}</option>`;
                });
    
                select.innerHTML = option;
            }
        });
    }

    function changeDetalleBaSe(){
        const select = document.getElementById('select-base');

        select.addEventListener('change', (event) => {
            const base_id = event.target.value;

            if(base_id != '0' || base_id != 0){
                // /detalle_base/hora
                ajaxDetalle(base_id);
            }
        });
    }

    function getBases(){
        const select = document.getElementById('select-periodo');
        select.addEventListener('change', (event) => {
            let periodo_id = event.target.value;

            const url = urlServidor + 'horario/info/' + periodo_id;
    
            fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const select = document.getElementById('select-horario');
                    let option = `<option value="0">Seleccione una opción</option>`;
        
                    data.forEach(element => {
                        option += `<option value="${element.id}">${element.nombre_horario}</option>`;
                    });
        
                    select.innerHTML = option;
                }
            });
        });
    }

    function ajaxDetalle(base_id){
        $.ajax({
            // la URL para la petición
            url : urlServidor + '/detalle_base/hora/' + base_id,
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                const table = document.getElementById('tbody-base-hora');
                let tr = '';

                if(response.length > 0){
                    response.forEach((element, i) => {
                        tr += `<tr>
                            <td>${i + 1}</td>
                            <td>${element.base.nombre}</td>
                            <td>Lunes a Viernes</td>
                            <td>${element.horas.inicio}</td>
                            <td>${element.horas.fin}</td>
                            <td>
                                <div class="text-center">
                                    <button class="btn-sm btn btn-outline-dark" id="btn-delete-tr-detalle" onclick="deleteHoraBase(${element.id})">
                                    <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                    });
                }
                table.innerHTML = tr;
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function guardarNuevaBase(){
        $('#btn-crear-nombre-base').click(function() {
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            let nombre = $('#form-nombre-base').val();
            let horario_id = document.getElementById('select-horario').value;

            if(nombre.length == 0 || nombre.length <= 3){
                toastr["error"]("Ingrese el nombre de la base", "Información")
            }else{
                let json = { nombre: nombre, horario_id, estado: 'A'};
               
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'base/guardar',
                    data : "data=" + JSON.stringify({ base: json }),
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
                            toastr["success"]("El período se ha guardado correctamente", "Períodos y Otros")
                            $('#form-nombre-base').val('');
                        }else{
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
        });
    }

    function btnEstablecer(){
        const btn = document.getElementById('btn-establecer');

        btn.addEventListener('click', () => {
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            const base_id = document.getElementById('select-base').value;
            const horas_id = document.getElementById('select-horas-base').value;

            let json = { base_id, horas_id, estado: 'A' };

            if(base_id == '0' || base_id == 0){
                toastr["warning"]("Seleccione una base", "Base");
            }else
            if(horas_id == '0' || base_id == 0){
                toastr["warning"]("Seleccione una hora", "Base");
            }else{
            
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'detalle_base/guardar',
                    data : "data=" + JSON.stringify({ detalle_base: json }),
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
                            toastr["success"]("Se asignó la hora a la base", "Base")
                            ajaxDetalle(base_id);
                        }else{
                            toastr["error"](response.mensaje, "Base")
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

    function guardarHora(){
        $('#btn-guardar-hora').click(function(){
            let inicio = $('#form-hora-inicio').val();
            let fin = $('#form-hora-fin').val();

            if(inicio.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Ingrese una hora de inicio", "Campo vacío")
            }else
            if(fin.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["error"]("Seleccione una hora fin", "Campo vacío")
            }
            else{
              let data = {
                  horas: {
                      inicio: inicio,
                      fin: fin
                  },
              };

              guardandoHora(data);
            }

        });
    }

    function guardandoHora(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'horas/guardarHora',
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
    
                    toastr["success"]("Las horas se han guardado correctamente", "Nueva Base");
                    reset_horas();
                    cargarHoras();
                    //cargarTablaPeriodo();
                }else{
                    toastr.options = {
                        "closeButton": true,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-center",
                    };
    
                    toastr["error"](response.mensaje, "Nueva Base")
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

    function reset_horas(){
        $('#form-hora-inicio').val('');
        $('#form-hora-fin').val('');
    }

    function cargarHoras(){
        $.ajax({
            url : urlServidor + 'horas/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione una Hora</option>';
                    
                    response.hora.forEach(element =>{
                        option += `<option value=${element.id}>${element.inicio} - ${element.fin}</option>`;
                    });
                    $('#select-horas-base').html(option);
   
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

    function cargarDias(){
        $.ajax({
            url: urlServidor + 'dia/listar',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if (response.status) {
                    $('#form-dias')
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

});


function deleteHoraBase(baseHora_id){
    alert("Eliminarlo de " + baseHora_id);
}
