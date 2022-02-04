$(() => {

    _init();

    function _init(){
        getLista();
        btnDocumento();
        btnConsulta();
        btnImprimir();
    }

    function getLista() {
        const usuario = JSON.parse(sessionStorage.getItem('sesion'));
        // console.log(usuario);
    }

    function btnDocumento(){
        const btn = document.getElementById('btn-documento');
        btn.addEventListener('click', () => {
            const input = document.getElementById('input-documento');
            console.log(input.files);

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if(input.files.length == 0){
                toastr["warning"]("Suba la evidencia", "Entregas");
            }else{
                const file = input.files[0];
                const formdata = new FormData();
                formdata.append('fichero', file);

                const url = urlServidor + 'usuario/fichero';

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'usuario/fichero',
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    data : formdata,
                    contentType: false,
                    processData: false,
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(responseImg){
                        //console.log(responseImg);
                        toastr.options = {
                            "closeButton": true,
                            "preventDuplicates": true,
                            "positionClass": "toast-top-center",
                        };
    
                        if(responseImg.status){
                            toastr["success"](responseImg.mensaje, "Usuario");
                            document.getElementById('input-documento').value = '';
                        }else{
                            toastr["error"](responseImg.mensaje, "Usuario")
                        }
                    },
                    error : function(jqXHR, status, error) {
                        console.log('Existió un problema, reviselo..!');
                    },
                    complete : function(jqXHR, status) {
                        // console.log('Petición realizada');
                    }
                });
            }
        });
    }

    function btnConsulta(){
        const btn = document.getElementById('btn-consulta');
        btn.addEventListener('click', () => {
            const fechaInicio = document.getElementById('fecha-inicio').value;
            const fechaFin = document.getElementById('fecha-fin').value;
            const usuario = JSON.parse(sessionStorage.getItem('sesion'));

            toastr.options = {
                "closeButton": true,
                "preventDuplicates": true,
                "positionClass": "toast-top-center",
            };

            if(fechaInicio.length == 0 ){
                toastr["warning"]("Seleccione una fehca de inicio", "Entregas");
            }else
            if(fechaFin.length == 0){
                toastr["warning"]("Seleccione una fehca de fin", "Entregas");
            }else{
                const url = urlServidor + 'entrega/getEntrega/' + fechaInicio + '/' + fechaFin + '/' + usuario.id;

                fetch(url)
                .then(res => res.json())
                .then(res => {
                    let body = document.getElementById('btn-body');
                    let tr = '';

                    if(res.length > 0){
                        res.forEach((element, i) => {
                            let prod = '';
                            element.productos.forEach(item => {
                                prod += `${item.producto.nombre}, `;
                            });

                            tr +=  `
                            <tr>
                                <th scope="row">${i + 1}</th>
                                <td>${element.codigo}</td>
                                <td>${element.representante}</td>
                                <td>${element.estudiante}</td>
                                <td>${element.cantidad}</td>
                                <td>${prod}</td>
                            </tr>`;
                            prod = '';
                        });
                    }

                    body.innerHTML = tr;
                })
            }
        });
    }
      
    function btnImprimir(){
        const btn = document.getElementById('btn-imprimir');
        btn.addEventListener('click', () => {
            const trArray = document.querySelectorAll('#btn-body tr');

            if(trArray.length == 0){
                toastr.options = {
                    "closeButton": true,
                    "preventDuplicates": true,
                    "positionClass": "toast-top-center",
                };

                toastr["warning"]("No se puede imprimir", "Entregas");
            }else{
                let element = document.getElementById('document-print');
                let opt = {
                    margin:       0.5,
                    filename:     'Productos Por Caducarse.pdf',
                    image:        { type: 'jpeg', quality: 3 },
                    html2canvas:  { scale: 2 },
                    jsPDF:           { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
    
                // New Promise-based usage:
                html2pdf().set(opt).from(element).save();   
            }
        });
    }
});