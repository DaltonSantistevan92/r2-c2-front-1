$(function(){
    let sesion = sessionStorage.getItem('sesion');
    // console.log(sesion);
    
    if(sesion == null){
        $(location).attr('href', urlCliente + 'login');
    }
});