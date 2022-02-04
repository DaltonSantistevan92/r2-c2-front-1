<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nuevo</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Horarios</a></li>
                    <li class="breadcrumb-item active">Nuevo</li>
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
                <button class="btn btn-dark" data-toggle="modal" data-target="#modal-nuevo-horario"
                    data-backdrop="static" data-keyboard="false">Nuevo Horario
                </button>

                <a class="btn btn-dark" href="<?=BASE?>gestion/base_nueva"
                    data-backdrop="static" data-keyboard="false">Nuevo Base
                </a>

                <a class="btn btn-dark" href="<?=BASE?>gestion/docente_materia" data-backdrop="static"
                    data-keyboard="false">Asignar docente-materia
                </a>
                <a class="btn btn-dark" href="<?=BASE?>gestion/periodos" data-backdrop="static"
                    data-keyboard="false">Periodos y otros
                </a>
            </div>

            <div class="col-5 form-group mt-2">
                <label for="">Periodo</label>
                <select id="select-periodo" class="form-control">
                    <option value="0">Seleccione una opcíon</option>
                </select>
            </div>

            <div class="col-12 mt-2">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Listas Horario</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <div class="div" style="overflow: auto;">
                            <table id="tabla-horario" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Descripcion</th>
                                        <th>Grado</th>
                                        <th>Periodo Lectivo</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
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

<!-- Modal de nuevo Horario -->

<div class="modal fade" id="modal-nuevo-horario">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Nuevo Horario</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <form method="POST" id="nuevo-horario">
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label for="">Nombre del horario</label>
                                    <input type="text" class="form-control solo-letras" placeholder="Nombre del Horario"
                                        id="horario-nombre" name="nombre_horario" maxlength="50">
                                </div>

                                <div class="col-12 form-group">
                                    <label for="">Grado</label>
                                    <select id="horario-select-grado" class="form-control">
                                        <option value="0">Seleccione una opcíon</option>
                                    </select>
                                </div>

                                <div class="col-12 form-group">
                                    <label for="">Periodo</label>
                                    <select id="horario-select-periodo" class="form-control">
                                        <option value="0">Seleccione una opcíon</option>
                                    </select>
                                </div>

                                <div class="col-12 form-group">
                                    <label for="">Paralelo</label>
                                    <select id="horario-select-paralelo" class="form-control">
                                        <option value="0">Seleccione una opcíon</option>
                                    </select>
                                </div>

                                <div class="col-12 col-md-4 col-lg-3">
                                    <button class="btn btn-primary" type="submit">
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </form>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>


<script src="<?= BASE ?>views/dist/js/scripts/nuevoHorario.js"></script>