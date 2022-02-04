<?php

class AdministracionController{

    public function representante(){
        include_once 'views/contents/representante.php';
    }

    public function docentes(){
        include_once 'views/contents/listarDocente.php';
    }

    public function insumos(){
        include_once 'views/contents/insumosLibros.php';
    }

    public function estudiante(){
        include_once 'views/contents/estudiante.php';
    }

    public function materia(){
        include_once 'views/contents/listarMateria.php';
    }

}