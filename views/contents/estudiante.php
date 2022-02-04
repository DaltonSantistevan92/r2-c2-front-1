<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nuevo Estudiante</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Administración</a></li>
                    <li class="breadcrumb-item active">Nuevo Estudiante</li>
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
                        <h3 class="card-title">Formulario de Registro</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <div class="card card-dark">
                                    <div class="card-header">
                                        <h3 class="card-title">Datos de Estudiante</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                                    class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                        <!-- /.card-tools -->
                                    </div>
                                    <!--form-nuevo-descripcion /.card-header -->
                                    <div class="card-body">
                                        <form method="POST" id="form-datos-estudiante">

                                            <div class="row">
                                                <div class="col-6 form-group">
                                                    <label for="">Cédula</label>
                                                    <input type="text" class="form-control solo-numeros"
                                                        placeholder="Cédula" id="form-cedula-repre" name="cedula"
                                                        maxlength="10" minlength="10">
                                                </div>

                                                <div class="col-6 form-group">
                                                    <label for="">Teléfono</label>
                                                    <input type="text" class="form-control solo-numeros"
                                                        placeholder="Teléfono" id="form-telefono-repre" name="telefono"
                                                        maxlength="10" minlength="10">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 form-group">
                                                    <label for="">Nombres</label>
                                                    <input type="text" class="form-control solo-letras"
                                                        placeholder="Nombres" id="form-nombres-repre" maxlength="150"
                                                        minlength="3" name="nombres">
                                                </div>

                                                <div class="col-6 form-group">
                                                    <label for="">Apellidos</label>
                                                    <input type="text" class="form-control solo-letras"
                                                        placeholder="Apellidos" id="form-apellidos-repre"
                                                        maxlength="150" minlength="3" name="apellido">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 form-group">
                                                    <label for="">Correo</label>
                                                    <input type="text" class="form-control" placeholder="Correo"
                                                        id="form-correo-repre" name="correo">
                                                </div>
                                                <div class="col-6 form-group">
                                                    <label for="">Sexo</label>
                                                    <select name="" id="form-sexo-repre" class="form-control">
                                                        <option value="0">Seleccione una opcion</option>
                                                        <option value="M">Masculino</option>
                                                        <option value="F">Femenino</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group text-right">
                                                <button type="submit" class="btn btn-primary">
                                                    <i class="fa fa-plus mr-2"></i>
                                                    Agregar Estudiante
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Lista de Estudiantes</h3>

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
                                            <table id="tabla-estudiante" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10px">#</th>
                                                        <th>Cédula</th>
                                                        <th>Nombres</th>
                                                        <th>Apellidos</th>
                                                        <th>Teléfono</th>
                                                        <th>Correo</th>
                                                        <th>Sexo</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                            </div>
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

<!-- Modales -->
<div class="modal fade" id="actualizar_estudiante">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Actualizar Estudiante</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form method="POST" id="update-estudiante">

                        <div class="row">
                            <div class="col-6 form-group">
                                <input type="hidden" id="upd-est-id">
                                <input type="hidden" id="upd-persona-id">
                                <label for="">Cédula</label>
                                <input type="text" class="form-control solo-numeros" readOnly placeholder="Cédula"
                                    id="upd-cedula" name="cedula" readonly maxlength="10" minlength="10" required>
                            </div>
                            <div class="col-6 form-group">
                                <label for="">Sexo</label>
                                <select name="" id="upd-sexo" class="form-control">
                                    <option value="0">Seleccione una opcion</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 form-group">
                                <label for="">Nombres</label>
                                <input type="text" class="form-control solo-letras" placeholder="Nombres"
                                    id="upd-nombres" maxlength="150" minlength="3" name="nombres" required>
                            </div>

                            <div class="col-6 form-group">
                                <label for="">Apellidos</label>
                                <input type="text" class="form-control solo-letras" placeholder="Apellidos"
                                    id="upd-apellidos" maxlength="150" minlength="3" name="apellido">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 form-group">
                                <label for="">Teléfono</label>
                                <input type="text" class="form-control solo-numeros" placeholder="Teléfono"
                                    id="upd-telefono" name="telefono" maxlength="10" minlength="10">
                            </div>

                            <div class="col-6 form-group">
                                <label for="">Correo</label>
                                <input type="email" class="form-control" placeholder="Correo" id="upd-correo"
                                    name="correo">
                            </div>
                        </div>
                    </form>
                    <div class="row text-right">
                        <div class="col-12">
                            <button id="btn-update" class="btn btn-primary"><i
                                    class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/estudiante.js"></script>