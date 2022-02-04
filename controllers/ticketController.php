<?php

class TicketController{

    public function generar(){
        include_once 'views/contents/generarTicket.php';
    }

    public function mios(){
        include_once 'views/contents/misTickets.php';
    }

    public function atendidos(){
        include_once 'views/contents/ticketsEntregados.php';
    }
}