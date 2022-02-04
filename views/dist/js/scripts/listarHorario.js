$(() => {

    _init();

    function _init(){
       getPeridos();
       getHorarios();
       btnConsultar();
       selectHorario();
       imprimir();
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

    function btnConsultar(){
        const btn = document.getElementById('btn-consultar');
        btn.addEventListener('click', () => {
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            const periodo_id = document.getElementById('select-periodo').value;
            const horario_id = document.getElementById('select-horario').value;

            if(periodo_id == 0 || periodo_id == '0'){
                toastr["error"]("Seleccione un periodo", "Información");
            }else
            if(horario_id == 0 || horario_id == '0'){
                toastr["error"]("Seleccione un horario", "Información");
            }else{
                const url = urlServidor + 'detalle_base/horario_get/' + horario_id;
                const body = document.getElementById('tbody-horario');
                body.innerHTML = '';

                fetch(url)
                .then(res => res.json())
                .then(res => {
                    // console.log(res.length);
                    if(res.length > 0){
      
                        let tbody = '';
                        res.forEach((element, index) => {
                            let tr =  `<tr><th scope="row">${element.hora.inicio} - ${element.hora.fin}</th>`;
                            // console.log(element);

                            let td = '';
                            element.dias.forEach(object => {
                                let docente = object.asignaciones.docente.persona.nombres + ' ' + object.asignaciones.docente.persona.apellidos;
                                // console.log(object);

                                td += `<td>
                                <div class="d-flex flex-column">
                                    <span class="fw-bold">${object.asignaciones.materia.materia}</span>
                                    <span class="text-primary" style="font-size:0.70rem;">${docente}</span>
                                </div>

                                </td>`;
                            });

                            // console.log("Linea ", index);
                            td += '</tr>';
                            tr += td;
                            tbody += tr;
                        });

                        body.innerHTML = tbody;
                    }
                })            
            }
        })
    }

    function selectHorario(){
        const select = document.getElementById('select-horario');
        select.addEventListener('change', (event) => {
            const id = event.target.value;

            if(id != 0 || id !='0'){
                const url = urlServidor + 'base/get/' + id;
    
                fetch(url)
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    const extra = document.getElementById('datos-horario');
                    extra.innerHTML = ' - Grado ' + res.grado.nombre_grado + ' - Paralelo: ' + res.paralelo.detalle;
                })

            }
        });
    }

    function imprimir(){
        const btn = document.getElementById('btn-printf');
        btn.addEventListener('click', () => {
            const tr = $('#tbody-horario tr');
    
            if(tr.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["info"]('No hay datos para imprimir', "Horario");
            }else{
                let element = document.getElementById('content-horario');

                let opt = {
                    margin:       1,
                    filename:     'Productos Por Caducarse.pdf',
                    image:        { type: 'jpeg', quality: 2 },
                    html2canvas:  { scale: 2 },
                    jsPDF:        { unit: 'mm', format: 'ledger', orientation: 'portrait' }
                    };
        
                    // New Promise-based usage:
                    html2pdf().set(opt).from(element).save();
            }
        });
    }
});