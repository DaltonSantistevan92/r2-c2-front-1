$(function(){

    _init();

    function _init(){
        cargar_meses();
        cargar_categorias();
        cargarData();
        imprimir_reporte();
    }

    function cargar_categorias(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'categoria/listarViatico',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                //console.log(response);
                let inicio = '<option value=0>Seleccione una Categoría</option>';
                let aux = 0;

                if(response.status){
                    response.data.forEach(element => {
                        aux += `<option value='${element.id}'>${element.detalle}</option>`;
                    });
                    inicio += aux;
                }

                $('#select-categoria').html(inicio);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function cargar_meses(){
        let option = '<option value=0>Seleccione un Mes</option>';
        month.forEach(element => {
            option += `<option value=${element.value}>${element.month}</option>`;
        });
        $('#select-mes').html(option);
    }

    function cargarData(){
        $('#btn-consulta-cadu').click(function () {
            let categoria_id = $('#select-categoria option:selected').val();
            let year = $('#select-anio option:selected').val();
            let month = $('#select-mes option:selected').val();

            if (categoria_id == 0) {
                toastr["info"]('Seleccione una categoría', "Reportes");
            } else if (year == 0) {
                toastr["info"]('Seleccione un año', "Reportes");
            } else if(month == 0 ){
                toastr["info"]('Seleccione un mes', "Reportes");
            } else {

                $('#tabla-reporte-p-caducarse').removeClass('d-none');
                
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'producto/caducarse/'+ categoria_id + '/' + year + '/' + month,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        // console.log(response);
                        let tr = '';
                        if(response.status){
                            let i = 1;
                            response.producto.forEach(element => {   
                                tr += `
                                <tr>
                                    <td>${i}</td>
                                    <td>${element.nombre}</td>
                                    <td>${element.categoria.detalle}</td>
                                    <td>${element.fecha_caducidad}</td>
                                </tr>
                            `;
                            i++;                             
                            });
                            $('#body-reporte-caducarse').html(tr);
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

    function imprimir_reporte(){
        $('#btn-imprimir').click(function(){
            let element = document.getElementById('tabla-reporte-p-caducarse');
            let opt = {
            margin:       1,
            filename:     'Productos Por Caducarse.pdf',
            image:        { type: 'jpeg', quality: 2 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'mm', format: 'ledger', orientation: 'portrait' }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save();
        });
    }


});
