<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Entrega de Insumos Alimenticios / Libros</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Reportes</a></li>
                    <li class="breadcrumb-item active">Entrega de Insumos Alimenticios / Libros</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="row mb-3">
                    <div class="col-6 col-md-4 col-lg-3 form-group ">
                        <label for="">Fecha Inicio</label>
                        <input id="fecha-inicio-viatico" type="date" class="form-control">
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 form-group ">
                        <label for="">Fecha Fin</label>
                        <input id="fecha-fin-viatico" type="date" class="form-control">
                    </div>
                    <div class="col-6 col-md-3 col-lg-2 form-group ">
                        <label for="">Representante</label>
                        <input id="repre-texto" readonly type="text" class="form-control">
                    </div>
                    <div class="col-6 col-md-3 col-lg-2 form-group">
                        <button class="btn btn-primary btn-sm " id="buscar-datos-repre" style="margin-top: 35px;">
                            <i class="fa fa-search"></i></button>
                    </div>
                    <div class="col-6 col-md-3 col-lg-2 form-group ">
                        <button class="btn btn-dark" id="btn-consulta-viatico" style="margin-top: 35px;">
                            <i class=" fa fa-search mr-2"></i></button>
                        <button class="btn btn-primary" id="btn-imprimir" style="margin-top: 35px;">
                            <i class="far fa-file-pdf mr-2"></i></button>
                    </div>
                </div>

                <div id="tabla-reporte-vatico-e" class="row d-none">
                    <div class="col-12 mt-2">
                        <div class="row">
                            <div class="col-6 col-md-8 col-lg-9" style="padding-left: 125px; margin-top: 40px;">
                                <h3><b>NUEVOS HORIZONTES</b></h3>
                                <h6>Reporte de Entrega de Insumos Alimenticios / Libros</h6>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img src="<?=BASE?>views/dist/img2/logo-128x128.png" alt="IMG" width="150px"
                                    style="margin-left: -100px;margin-top: -30px;">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-12 col-md-6 text-center">
                                <span>Representante: <b id="nombre-repre"></b></span>
                                <div class="mt-3">
                                    <div class="card">
                                        <div class="card-header">
                                            Estudiantes 
                                        </div>
                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-hover text-nowrap table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Estudiante</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="body-reporte-viatico-est">

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 text-center">
                                <div class="mt-3">
                                    <div class="card" style="margin-top: 40px;">
                                        <div class="card-header">
                                            Productos Entregados
                                        </div>
                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-hover text-nowrap table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Producto</th>
                                                        <th>Ticket Entregados</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="body-reporte-viatico-pro">

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- MODALES -->
<div class="modal fade" id="modal-representantes">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <input type="hidden" id="form-repre-id">
                <h4 class="modal-title">Representantes</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-repre">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="representante-body">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script src="<?=BASE?>views/dist/js/scripts/viaticosEntrega.js?ver=1.1.1.2"></script>