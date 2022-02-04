$(function(){

    init();

    function init(){

        let session = JSON.parse(sessionStorage.getItem('sesion'));

        if(session){

        }else{
            window.location = urlCliente + 'login';
        }
    }
});