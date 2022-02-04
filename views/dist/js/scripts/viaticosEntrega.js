$(function(){

    _init();

    function _init(){
        cargarRepresentantes();
        cargarData();
    }

    function cargarRepresentantes(){
        $('#buscar-datos-repre').click(function(){
            $('#modal-representantes').modal('show');
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'representante/listar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        let tr = '';
                        let i = 1;
                        response.representante.forEach(element => {
                            tr += `<tr id="fila-representante-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
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
        });
    }

    function cargarData(){
        $('#btn-consulta-viatico').click(function () {
            let inicio = $('#fecha-inicio-viatico').val();
            let fin = $('#fecha-fin-viatico').val();
            let representante_id = $('#form-repre-id').val();

            if (inicio.length  == 0) {
                toastr["info"]('Seleccione una fecha inicio', "Reportes");
            } else if (fin.length == 0) {
                toastr["info"]('Seleccione una fecha fin', "Reportes");
            } else if(representante_id == 0 ){
                toastr["info"]('Seleccione un representante', "Reportes");
            } else {

                $('#tabla-reporte-vatico-e').removeClass('d-none');
                
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'ticket/ticketMasAtendidas/'+ inicio + '/' + fin + '/' + representante_id,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        console.log(response);
                        let tr = '';
                        let tr2 = '';
                        if(response.length > 0){
                            let i = 1;
                            $('#nombre-repre').text(response.representante);                     
                            response.forEach(e => {   
                                tr += `
                                <tr>
                                    <td>${i}</td>
                                    <td>${e.data.estudiante}</td>
                                </tr>
                            `;
                            i++;                             
                            });
                            $('#body-reporte-viatico-est').html(tr);
                        }else{
                            $('#tabla-reporte-p-caducarse').addClass('d-none');
                            toastr["info"]('No hay informacion disponible', "Reportes");
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


        });
    }
});

function seleccionar_representante(id){
    let fila = '#fila-representante-'+id;
    let f = $(fila)[0].children;

    let nombres = f[2].innerText;
    let apellidos = f[3].innerText;

    $('#form-repre-id').val(id);
    $('#repre-texto').val(nombres + ' ' + apellidos);

}