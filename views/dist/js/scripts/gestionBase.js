$(() => {

    _init();

    function _init(){
        getBases();
        getOneBase();
        getPeridos();
        getGrados();
        getParalelos();
        filtrar();
        deleteAsignacion();
        btnAsignarYa();
        clear();
        btnCloseAsgi();
    }

    function getBases(){
        $.ajax({
            url : urlServidor + 'base/listar',
            type : 'GET',
            dataType : 'json',
            success : function(response) {
       
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

    function getGrados() {
        const url = urlServidor + 'grados/listar';
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.grados.length > 0) {
                const select = document.getElementById('select-grado');
                let option = `<option value="0">Seleccione una opción</option>`;

                data.grados.forEach(element => {
                    option += `<option value="${element.id}">${element.nombre_grado}</option>`;
                });

                select.innerHTML = option;
            }
        });
    }

    function getParalelos() {
        const url = urlServidor + 'paralelo/listar';
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.data.length > 0) {
                    const select = document.getElementById('select-paralelo');
                    let option = `<option value="0">Seleccione una opción</option>`;
    
                    data.data.forEach(element => {
                        option += `<option value="${element.id}">${element.detalle}</option>`;
                    });
    
                    select.innerHTML = option;
                }
            });
    }

    function filtrar(){
        const btn = document.getElementById('btn-filtrar');
        btn.addEventListener('click',  () => {
            const periodo_id = document.getElementById('select-periodo').value;
            const grado_id = document.getElementById('select-grado').value;
            const paralelo_id = document.getElementById('select-paralelo').value;

            const json = {periodo_id, grado_id, paralelo_id};
            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if(periodo_id == 0 || periodo_id == '0'){
                toastr["warning"]("Seleccione un periodo", "Periodo");
            }else
            if(grado_id == 0 ||  grado_id == '0'){
                toastr["warning"]("Seleccione un grado", "Grado");
            }else
            if(paralelo_id == 0 || paralelo_id == '0'){
                toastr["warning"]("Seleccione un paralelo", "Paralelo");
            }else{
                //Hacer la consulta
                const url = urlServidor + 'detalle_base/horario/' +periodo_id +'/' + grado_id + '/' + paralelo_id;
    
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        // console.log(data);
                      const tbody = document.getElementById('tbody-asignaciones');
                      let tr = '';

                      data.forEach((element, i) => {
                        const docente = element.docente.persona.nombres + ' ' + element.docente.persona.apellidos;
                        tr += `<tr>
                            <th scope="row">${i + 1}</th>
                            <td>${element.docente.persona.nombres} ${element.docente.persona.apellidos}</td>
                            <td>${element.materia.materia}</td>
                            <td>
                                <div class="w-100 text-center">
                                    <button class="btn btn-sm btn-outline-dark" onclick="asingarText(${element.id}, '${element.materia.materia}', '${docente}')">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      });

                      tbody.innerHTML = tr;
                    }
                });
            }
        });
    }

    function getOneBase(){
        const select = document.getElementById('select-base');
        select.addEventListener('change', (event) => {
            const id = event.target.value;
            const input = document.getElementById('base-id-input');
            input.value = id;
            
            if(id != 0 || id != '0'){
                auxDetail(id);
            }
        });
    }
    
    function auxDetail(id){
        const url = urlServidor + 'detalle_base/hora/' + id;

        fetch(url)
        .then(res => res.json())
        .then(res => {
            const tbody = document.getElementById('tr-body');
            tbody.innerHTML = '';
            let array = [];
    
            if(res.length > 0){
                res.forEach((element, index) => {
                    const newUrl = urlServidor + 'detalle_base/filter_hora/' + id + '/' + element.horas_id;

                    let tr = `<tr>
                        <th scope="row">
                            <small>${element.horas.inicio} - ${element.horas.fin}</small>
                        </th>`;
                
                        fetch(newUrl)
                        .then(resDay => resDay.json())
                        .then(resDay => {
                            let td = '';
        
                            if(resDay.length > 0){
                                resDay.forEach((object) => {
                                    // console.log(object);
                                    if(object.asignaciones_id != null){
                                        // console.log(object.asignaciones);
                                        td += `<td>
                                             <p style="margin-bottom:0px; font-wigth: bold;"><b>${object.asignaciones.materia.materia}</b></p>
                                            <small class="text-primary">${object.asignaciones.docente.persona.nombres} ${object.asignaciones.docente.persona.apellidos}
                                                <i class="fas fa-pencil-alt" onclick="asignar(${object.id}, ${index + 1}, ${element.horas_id})" 
                                                style="cursor:pointer;"></i>
                                            </small>
                                        </td>`;
                                    }else{
                                        td += `<td>
                                            <button class="btn btn-primary btn-sm" onclick="asignar(${object.id}, ${index + 1}, ${element.horas_id})">
                                                <i class="fas fa-plus"></i>
                                                Asignar
                                            </button>
                                        </td>`;
                                    }
                                });
        
                                tr = tr + td + '</tr>';
                                tbody.innerHTML += tr;
                             
                                array.push(element.horas_id);
                                tr = '';    td = '';
                            }
                        });
                });
            }

        });
    }

    function burbuja(lista){
        var n, i, k, aux;
        n = lista.length;
       
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (lista[i] > lista[i + 1]) {
                    aux = lista[i];
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                }
            }
        }
        return lista;
    }

    function deleteAsignacion(){
        const btn = document.getElementById('btn-asignar-delete');
        btn.addEventListener('click', () => {
            const idTxt = document.getElementById('asignacion-id');
            const materiaTxt = document.getElementById('asignacion-materia');
            const docenteTxt = document.getElementById('asignacion-docente');

            idTxt.value = '';
            materiaTxt.value = '';
            docenteTxt.value = '';
        });
    }

    function btnAsignarYa(){
        const btn = document.getElementById('btn-asingar-ya');
        btn.addEventListener('click', () => {
            const base = document.getElementById('detalleBase-id');
            const asignacion = document.getElementById('asignacion-id');

            const url = urlServidor + 'detalle_base/update_asignacion';
            const json = {
                id: base.value,
                asignaciones_id: asignacion.value
            };

            fetch(url,{
                method: 'POST',
                body: "data=" + JSON.stringify({detalle_base: json}),
                dataType : 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
            })
            .then(res => res.json())
            .then(res => {
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                if(res.estado){
                    const input = document.getElementById('base-id-input');
                    toastr["success"](res.mensaje, "Asignación realizada");
                    auxDetail(input.value);

                    $('#modalAux').modal('hide');
                    clear();

                }else{
                    toastr["error"](response.mensaje, "Error");
                }
            });
        });
    }

    function clear(){
        const idTxt = document.getElementById('asignacion-id');
        const materiaTxt = document.getElementById('asignacion-materia');
        const docenteTxt = document.getElementById('asignacion-docente');

        idTxt.value = '';
        materiaTxt.value = '';
        docenteTxt.value = '';
    }

    function btnCloseAsgi(){
        const btn = document.getElementById('btn-modal-asig');
        btn.addEventListener('click', () => {
            $('#modalAux').modal('hide');
            clear();
        });
    }
});

function asignar(base_asignacion_id, dia_id, hora_id){
    $('#modalAux').modal('show');

    const base = document.getElementById('detalleBase-id');
    const dia = document.getElementById('dia-id');
    const hora = document.getElementById('hora-id');

    base.value = base_asignacion_id;
    dia.value = dia_id;
    hora.value = hora_id;
}

function asingarText(id, materia, docente){

    const idTxt = document.getElementById('asignacion-id');
    const materiaTxt = document.getElementById('asignacion-materia');
    const docenteTxt = document.getElementById('asignacion-docente');

    idTxt.value = id;
    materiaTxt.value = materia;
    docenteTxt.value = docente;
}
