<?php

class InicioController{

    public function administrador(){
        include_once 'views/contents/administrador.php';
        // echo "Hola soy el inicioController :x";
    }

    public function docente(){
        include_once 'views/contents/docente_guia.php';
    }
}