<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Materias</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Administración</a></li>
                    <li class="breadcrumb-item active">Materia</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">

        <div class="col-md-3">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#area-modal-2">
                Registrar Areas
            </button>
        </div>

        <div class="row">
            <div class="col-lg-6 mt-2">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Nueva Materia</h5>
                    </div>
                    <div class="card-body">
                        <form method="POST" id="nueva-materia">
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label for="">Nombre de materia</label>
                                    <input type="text" class="form-control solo-letras" placeholder="Nombre de materia"
                                        id="materia-nombre" name="materia" maxlength="50">
                                </div>

                                <div class="col-12 form-group">
                                    <label for="">Area</label>
                                    <select id="materia-select-area" class="form-control">
                                        <option value="0">Seleccione una opcíon</option>
                                    </select>
                                </div>

                                <div class="col-12 form-group">
                                    <label for="">Color de la materia</label>
                                    <input type="color" class="form-control" id="materia-color" name="color">
                                </div>

                                <div class="col-12 form-group">
                                    <label for="">Duración de la materia</label>
                                    <input type="text" class="form-control" id="materia-duracion" name="duracion"
                                        placeholder="40 min">
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

            <!-- /.col-md-6 -->
            <div class="col-lg-6">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Lista de Materias</h5>
                    </div>
                    <div class="card-body">
                        <table id="tabla-materias" class="table t-hover">
                            <thead class="bg-primary">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Materia</th>
                                    <th scope="col">Duracion</th>
                                    <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button class="btn btn-danger btn-small">X</button>
                                    </td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>


<!-- modal de area -->
<div class="modal fade" id="area-modal-2" style="display: block; padding-right: 17px;" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Datos</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="card card-dark">
                            <div class="card-header">
                                <h3 class="card-title">Nuevo Area</h3>

                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                            class="fas fa-minus"></i>
                                    </button>
                                </div>
                                <!-- /.card-tools -->
                            </div>
                            
                            <div class="card-body">
                                <form method="POST" id="form-nuevo-area">
                                    <div class="form-group">
                                        <label for="">Detalle</label>
                                        <input type="text" class="form-control solo-letras"
                                            placeholder="Ejemplo: lenguaje" id="form-detalle-area">
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">
                                            <i class="fa fa-plus mr-2"></i>
                                            Agregar Area
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="card card-dark" style="height: 295px; overflow: auto;">
                            <div class="card-header">
                                <h5 class="m-0">Lista de las Areas</h5>
                            </div>
                            <div class="card-body">
                                <table id="tabla-areas" class="table t-hover">
                                    <thead class="bg-primary">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Detalle</th>
                                            <th scope="col">Accion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button class="btn btn-danger btn-small">X</button>
                                    </td>
                                </tr> -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
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

<script src="<?= BASE ?>views/dist/js/scripts/listarMateria.js?ver=1.1.4"></script>