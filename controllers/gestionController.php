<?php

class GestionController{

    public function roles(){
        include_once 'views/contents/roles.php';
    }

    public function usuarios(){
        include_once 'views/contents/usuarios.php';
    }

    public function abastecimiento(){
        include_once 'views/contents/abastecimiento.php';
    }

    public function entrega(){
        include_once 'views/contents/entrega.php';
    }

    public function horario(){
        include_once 'views/contents/nuevoHorario.php';
    }

    public function docente_materia(){
        include_once 'views/contents/docente_materia.php';
    }

    public function periodos(){
        include_once 'views/contents/periodos_otros.php';
    }

    public function base(){
        include_once 'views/contents/gestion_base.php';
    }

    public function base_nueva(){
        include_once 'views/contents/nuevaBase.php';
    }

    public function listar_horario(){
        include_once 'views/contents/listarHorario.php';
    }

    public function lista(){
        include_once 'views/contents/listaEntrega.php';
    }
}