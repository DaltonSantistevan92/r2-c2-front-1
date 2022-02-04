<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Generar Tickets</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Tickets</a></li>
                    <li class="breadcrumb-item active">Generar Tickets</li>
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
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Nuevo Ticket</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>

                    <!-- /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-nuevo-ticket">
                            <div class="row">
                                <div class="col-6">
                                    <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="fa fa-tags"></i></span>

                                        <div class="info-box-content">
                                            <span class="info-box-text"> <b>N° Turno:</b>
                                                <h4 class="text-right" id="orden-ticket">----</h4>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Fecha de entrega</label>
                                        <input type="date" class="form-control" id="form-fech-entrega">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title"> <b>Datos del Representante</b> </h3>

                                            <div class="card-tools">
                                                <button class="btn btn-primary btn-sm" data-toggle="modal"
                                                    data-target="#modal-representantes" data-backdrop="static"
                                                    data-keyboard="false"><i class="fa fa-search"></i></button>
                                            </div>
                                            <!-- /.card-tools -->
                                        </div>
                                        <!--form-nuevo-descripcion /.card-header -->
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Cédula</label>
                                                        <input type="text" class="form-control solo-numeros" readOnly
                                                            placeholder="Cédula" id="form-cedula-repre">
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Nombres</label>
                                                        <input type="text" class="form-control solo-numeros" readOnly
                                                            placeholder="Nombres" id="form-nombres-repre">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                    <!-- --- -->
                                </div>
                                <div class="col-4">
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title"> <b>Datos del Estudiante</b> </h3>

                                            <div class="card-tools">
                                                <button class="btn btn-primary btn-sm" data-toggle="modal"
                                                    data-target="#modal-estudiantes" data-backdrop="static"
                                                    data-keyboard="false"><i class="fa fa-search"></i></button>
                                            </div>
                                            <!-- /.card-tools -->
                                        </div>
                                        <!--form-nuevo-descripcion /.card-header -->
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Cédula</label>
                                                        <input type="text" class="form-control solo-numeros" readOnly
                                                            placeholder="Cédula" id="form-cedula-est">
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Nombres</label>
                                                        <input type="text" class="form-control" readOnly
                                                            placeholder="Nombres" id="form-nombres-est">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title"> <b>Horario de Atención</b> </h3>

                                            <div class="card-tools">
                                                <button type="button" class="btn btn-tool"
                                                    data-card-widget="collapse"><i class="fas fa-minus"></i>
                                                </button>
                                            </div>
                                            <!-- /.card-tools -->
                                        </div>
                                        <!--form-nuevo-descripcion /.card-header -->
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="">Horario de Atención</label>
                                                <select id="form-horario" class="form-control">
                                                    <!-- <option value="0">Seleccione un Horario</option> -->
                                                </select>
                                            </div>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                </div>
                            </div>

                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-ticket-alt mr-2"></i>
                                    Generar Ticket
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- Modales -->
<div class="modal fade" id="modal-estudiantes">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <input type="hidden" id="form-est-id">
                <h4 class="modal-title">Estudiantes</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Estudiante</label>
                            <input id="buscar-est" type="text" class="form-control"
                                placeholder="Ingrese cedula o apellido del Estudiante">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-est">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Cédula</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="estudiante-body">

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
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Representante</label>
                            <input id="buscar-repre" type="text" class="form-control"
                                placeholder="Ingrese cedula o apellido del Representante">
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 200px !important; overflow: auto;">
                    <div class="col-12">
                        <div class="tabla-buscar-repre">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Cédula</th>
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

<script src="<?=BASE?>views/plugins/moment/moment.min.js"></script>
<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/generarTicket.js?ver=1.1.1.4"></script>