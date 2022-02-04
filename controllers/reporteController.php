<?php

class ReporteController{

    public function productoCaducarse(){
        include_once 'views/contents/productoCaducarse.php';
    }

    public function tickets(){
        include_once 'views/contents/estadoTickets.php';
    }

    public function viaticos(){
        include_once 'views/contents/viaticosEntrega.php';
    }

}