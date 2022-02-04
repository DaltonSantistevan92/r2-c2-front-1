var tabla;
const AREA_ID = 0;

_init();

function _init(){
    getPeridos();
    getGrados();
    getParalelos();
    asignar();
    openModalMateria();
    getAreas();
    loadTableMaterias(AREA_ID);
    changeSelectArea();
    openModalDocente();
    getDocentes();
    reset();
    getAsignacion();
}

function reset(){
    document.getElementById('dm-materia-id').value = '';
    document.getElementById('dm-materia-texto').value = '';

    document.getElementById('dm-docente-id').value = '';
    document.getElementById('dm-docente-texto').value = '';

}

function getPeridos() {
    const url = urlServidor + 'periodo/listar';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.data.length > 0) {
            const select = document.getElementById('select-periodo');
            const select2 = document.getElementById('select-periodo-visualizar');
            
            let option = `<option value="0">Seleccione una opción</option>`;

            data.data.forEach(element => {
                option += `<option value="${element.id}">${element.desde} - ${element.hasta}</option>`;
            });

            select.innerHTML = option;
            select2.innerHTML = option;
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
                const select2 = document.getElementById('select-grado-lista');

                let option = `<option value="0">Seleccione una opción</option>`;

                data.grados.forEach(element => {
                    option += `<option value="${element.id}">${element.nombre_grado}</option>`;
                });

                select.innerHTML = option;
                select2.innerHTML = option
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
                const select2 = document.getElementById('select-paralelo-lista');

                let option = `<option value="0">Seleccione una opción</option>`;

                data.data.forEach(element => {
                    option += `<option value="${element.id}">${element.detalle}</option>`;
                });

                select.innerHTML = option;
                select2.innerHTML = option;
            }
        });
}

function asignar(){
    const btn_asingar = document.getElementById('btn-asingar');

    btn_asingar.addEventListener('click', () => {

        // reset();

        const json = {
            asignacion:{
                periodo_id: document.getElementById('select-periodo').value,
                docente_id: document.getElementById('dm-docente-id').value,
                materia_id: document.getElementById('dm-materia-id').value,
                grado_id: document.getElementById('select-grado').value,
                paralelo_id: document.getElementById('select-paralelo').value
            }
        }

        if(validar(json)){
    
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'asignaciones/guardar',
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
        
                        toastr["success"](response.mensaje, "Asignación docente-materia");
                        reset();
                    }else{
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
        
                        toastr["error"](response.mensaje, "Asignación docente-materia")
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

    function validar(data){
        toastr.options = {
            "closeButton": true,
            "preventDuplicates": true,
            "positionClass": "toast-top-center",
        };

        if(data.asignacion.periodo_id == '0' || data.asignacion.periodo_id == 0){

            toastr["error"]("Seleciones un periodo", "Información");
            return false;
        }else if(data.asignacion.materia_id == "" ){
            toastr["error"]("Selecione una materia", "Información");
            return false;
        }else if(data.asignacion.docente_id == ""){
            toastr["error"]("Selecione un docente", "Información");
            return false;
        }else if(data.asignacion.grado_id == '0' || data.asignacion.grado_id == 0){
            toastr["error"]("Selecione un grado", "Información");
            return false;
        }else if(data.asignacion.paralelo_id == '0' || data.asignacion.paralelo_id == 0){
            toastr["error"]("Selecione un paralelo", "Información");
            return false;
        }
        else return true;
    }
}

function getAreas(){
    const url = urlServidor + 'area/listar';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.status) {
            const select = document.getElementById('modal-select-area');
            
            let option = '<option value="0">Todos</option>';
            
            data.area.forEach(element => {
                option += `<option value="${element.id}">${element.detalle}</option>`;
            });

            select.innerHTML = option;
        }
    });
}

function getDocentes(){
    const url = urlServidor + 'docente/listar';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.status) {
            let tr = '';
            const tbody = document.getElementById('table-modal-docente');

            data.docente.forEach((element, index) => {
                tr += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element.persona.cedula}</td>
                    <td>${element.persona.nombres}</td>
                    <td>${element.persona.apellidos}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-dark" onclick="selectDocente(${element.id}, '${element.persona.nombres}', '${element.persona.apellidos}' )">
                            <i class="fas fa-check"></i>
                        </button>
                    </td>
                </tr>`;
            });

            tbody.innerHTML = tr;
        }
    });
}

 function openModalMateria(){
     const btn = document.getElementById('btn-modal-materia');

     btn.addEventListener('click', () => {
         $('#modalMateria').modal('show');
     })
 }

function openModalDocente(){
    const btn = document.getElementById('btn-modal-docente');

     btn.addEventListener('click', () => {
         $('#modalDocente').modal('show');
         
         $('#txt-buscar-docente').keyup(function(){
            let texto = $('#txt-buscar-docente').val();
            console.log(texto);
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'docente/buscarDocente/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                    let tr = '';
                    let i = 1;
                        response.docente.forEach(element => {
                            tr += `<tr>
                            <th scope="row">${i}</th>
                            <td>${element.cedula}</td>
                            <td>${element.nombres}</td>
                            <td>${element.apellidos}</td>
                            <td>
                                <button class="btn btn-sm btn-outline-dark" onclick="selectDocente(${element.id}, '${element.nombres}', '${element.apellidos}' )">
                                    <i class="fas fa-check"></i>
                                </button>
                            </td>
                        </tr>`;
                        i++;
                        });
                        $('#table-modal-docente').html(tr);
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
     })
}

function changeSelectArea(){
    const select = document.getElementById('modal-select-area');

    select.addEventListener('change', (event) => {
        const id = event.target.value;
        loadTableMaterias(id);
    });
}

function loadTableMaterias(area_id){
    const url = urlServidor + 'materias/listar/' + area_id;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('table-modal-materia');
        tbody.innerHTML = '';

        if (data.status) {
            let tr = '';

            if(data.materia.length > 0){
                data.materia.forEach((element, index) => {
                    tr += `
                    <tr>
                        <th scope="row">${index+ 1}</th>
                        <td>${element.area.detalle}</td>
                        <td>${element.materia}</td>
                        <td>${element.duracion}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-dark" onclick="selectMateria(${element.id})">
                                <i class="fas fa-check"></i>
                            </button>
                        </td>
                    </tr>`;
                });
            }else{
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };
    
                toastr["error"]("No hay datos", "Información")
            }

            tbody.innerHTML = tr;
        }
    });
}

function selectMateria(materia_id){
    const url =  urlServidor + 'materias/listarId/' + materia_id;

    fetch(url)
    .then(response => response.json())
    .then(data => {
       
        if (data.status) {
            input_materia_id = document.getElementById('dm-materia-id');
            input_materia_texto = document.getElementById('dm-materia-texto'); 

            input_materia_id.value = materia_id;
            input_materia_texto.value = data.materia.materia;
        }
    });

    $('#modalMateria').modal('hide');
}

function selectDocente(docente_id, nombres, apellidos){

    const input_id =  document.getElementById('dm-docente-id');
    const input_text =  document.getElementById('dm-docente-texto');

    input_id.value = docente_id;
    input_text.value = nombres + ' ' + apellidos;

    $('#modalDocente').modal('hide');
}

function getAsignacion(){   
    $('#btn-consultar').click(function(){
        let periodo_id = $('#select-periodo-visualizar option:selected').val();
        let grado_id = $('#select-grado-lista option:selected').val();
        let paralelo_id = $('#select-paralelo-lista option:selected').val();
        $('#tb-asig').removeClass('d-none');

        tabla = $('#tabla-asignacion').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'asignaciones/datatable/' + periodo_id + '/' + grado_id + '/' + paralelo_id,
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 5,//Paginación
            "language": {
    
                "sProcessing":     "Procesando...",
             
                "sLengthMenu":     "Mostrar _MENU_ registros",
             
                "sZeroRecords":    "No se encontraron resultados",
             
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
             
                "sInfo":           "Mostrando un total de _TOTAL_ registros",
             
                "sInfoEmpty":      "Mostrando un total de 0 registros",
             
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
             
                "sInfoPostFix":    "",
             
                "sSearch":         "Buscar:",
             
                "sUrl":            "",
             
                "sInfoThousands":  ",",
             
                "sLoadingRecords": "Cargando...",
             
                "oPaginate": {
             
                    "sFirst":    "Primero",
             
                    "sLast":     "Último",
             
                    "sNext":     "Siguiente",
             
                    "sPrevious": "Anterior"
             
                },
             
                "oAria": {
             
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
             
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
             
                }
    
               }//cerrando language
        });
    });

}

function eliminar_horario(id){
    let data = {
        asignacion: {
            id: id,
        }
    };

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'asignaciones/eliminar',
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
    
                toastr["success"]("Se Ha eliminado la asignación", "Asignación");
                tabla.ajax.reload();
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

function reset(){
    $('#dm-materia-id').val('');
    $('#dm-materia-texto').val('');
    $('#dm-docente-id').val('');
    $('#dm-docente-texto').val('');
    $('#select-periodo').val('');
    $('#select-grado').val('');
    $('#select-paralelo').val('');
}