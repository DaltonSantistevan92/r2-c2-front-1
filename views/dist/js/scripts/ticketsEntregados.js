/* $(function(){ */

    _init();

    function _init(){
        ticket_lista();
        imprimir();
    }

    function ticket_lista(){
        const user = JSON.parse(sessionStorage.getItem('sesion'));
        console.log(user);

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'ticket/listaEntregado/' + user.id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                let div = '';  
                if(response.length > 0){
                    response.forEach(element => {
                        div += ` <div class="col-md-3 col-sm-6 col-12">
                        <div class="info-box bg-gradient-success">
                            <span class="info-box-icon"><i class="far fa-bookmark"></i></span>
        
                            <div class="info-box-content">
                                <span class="info-box-text">Turno</span>
                                <span class="info-box-number">${element.ticket.orden}</span>
        
                                <div class="progress">
                                    <div class="progress-bar" style="width: 100%"></div>
                                </div>
                                <span class="progress-description">
                                    Fecha de Entrega: 
                                </span>
                                <span> ${element.ticket.fecha_entrega}</span>
                                <div class="text-right">
                                    <button class="btn btn-light" onclick=ver_ticket(${element.ticket.id})><i class="fas fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    });
                }else{
                    div = `<div class="col-12">
                    <div class="bs-component">
                      <div class="alert alert-dismissible alert-danger">
                        <strong>No se encuentran Tickets Disponibloes</strong> 
                      </div>
                    </div>
                  </div>`;
                }     
                $('#ticket-lista').html(div);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function imprimir(){
        $('#btn-imprimir').click(function(){
                let element = document.getElementById('ticket-detalle-entre');
                let opt = {
                margin:       0.5,
                filename:     'Ticket de Turno.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'portrait' }
                };
  
                html2pdf().set(opt).from(element).save();
        });
    }
/* }); */

function ver_ticket(id){
    $('#modal-ticket-detalle').modal('show');
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
                let src = urlCliente + 'views/dist/img2/logo-128x128.png';
                    div += `<div class="col-7" style="margin-left: 100px;">               
                    <div class="card shadow" style="border: black 1px solid;">
                        <div class="card-body">
                                <div class="ticket">
                                    <div class="text-center">
                                        <img src=${src}>
                                    </div>
                                    <p class="text-center">Escuela de Educación Básica
                                        <br>Nuevos Horizontes
                                        <br>Jose Luis Tamayo
                                        <br>nuevoshorizontes@edu.gob.ec
                                    </p>
                                    <div class="text-center">
                                        <span>Representante: ${response.ticket.representante.persona.nombres} ${response.ticket.representante.persona.apellidos}</span><br>
                                        <span>Estudiante: ${response.ticket.estudiante.persona.nombres} ${response.ticket.estudiante.persona.apellidos}</span><br>
                                        <span>Fecha de Entrega: ${response.ticket.fecha_entrega}</span><br>
                                        <small><b>Horario de Atencion: ${response.ticket.horario_atencion.hora_inicio}-${response.ticket.horario_atencion.hora_fin}</b> </small><br>
                                    </div>
                                    <div class="text-center">
                                        <h3>${response.ticket.orden}</h3>
                                    </div>
                                    <p class="text-center">¡GRACIAS POR PREFERIRNOS!
                                    </p>
                                    <p class="text-center"> <b style="font-size: 12px;">Código: ${response.ticket.codigo}</b> </p>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }else{
                div = `<div class="col-12">
                <div class="bs-component">
                  <div class="alert alert-dismissible alert-danger">
                    <strong>No se encuentran Tickets Disponibloes</strong> 
                  </div>
                </div>
              </div>`;
            }     
            $('#ticket-detalle-entre').html(div);
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}