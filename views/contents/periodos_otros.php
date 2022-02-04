<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Períodos y Otros</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Horarios</a></li>
                    <li class="breadcrumb-item active">Períodos y Otros</li>
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
            <div class="col-12 col-md-4">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Períodos</h5>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <span>
                                <h4>Nuevo Período</h4>
                            </span>
                            <div class="col-12 mb-3">
                                <button class="btn btn-primary w-100" id="btn-periodo">
                                    <i class="fas fa-plus mr-2"></i>Nuevo Período
                                </button>
                            </div>

                            <span>
                                <h4>Listar Períodos</h4>
                            </span>
                            <table class="table table-hover text-nowrap table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style="display: none">ID</th>
                                        <th>Período</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="periodos-body">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Grados</h5>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <span>
                                <h4>Nuevo Grado</h4>
                            </span>
                            <div class="col-12 mb-3">
                                <button class="btn btn-primary w-100" id="btn-grado">
                                    <i class="fas fa-plus mr-2"></i>Nuevo Grado
                                </button>
                            </div>

                            <span>
                                <h4>Listar Grados</h4>
                            </span>

                            <div class="col-12">
                                <div style="height: 222px !important; overflow: auto;">
                                    <table class="table table-hover text-nowrap table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th style="display: none">ID</th>
                                                <th>Grado</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody id="grados-body">

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Paralelos</h5>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <span>
                                <h4>Nuevo Paralelo</h4>
                            </span>
                            <div class="col-12 mb-3">
                                <button class="btn btn-primary w-100" id="btn-paralelo">
                                    <i class="fas fa-plus mr-2"></i>Nuevo Paralelo
                                </button>
                            </div>

                            <span>
                                <h4>Listar Paralelos</h4>
                            </span>
                            <div class="col-12">
                                <div style="height: 222px !important; overflow: auto;">
                                    <table class="table table-hover text-nowrap table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th style="display: none">ID</th>
                                                <th>Paralelo</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody id="paralelo-body">

                                        </tbody>
                                    </table>
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

<!-- Modal Periodo -->
<div class="modal fade" id="modalPeriodo" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="modalMateriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Nuevo Período</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <form method="POST" id="form-periodo-val">
                                <div class="form-group">
                                    <label for="">Periodo</label>
                                    <input type="text" class="form-control solo-numeros" placeholder="Ejemplo: 2021"
                                        id="form-periodo-texto" minlength="4" maxlength="4">
                                </div>

                                <div class="form-group">
                                    <label for="">Desde</label>
                                    <input type="date" id="form-desde-p" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="">Hasta</label>
                                    <input type="date" id="form-hasta-p" class="form-control">
                                </div>

                                <div class="d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-plus mr-2"></i>
                                        Agregar Período
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="actualizarPeriodo" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="modalMateriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Actualizar Período</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <input type="hidden" id="periodo-id">
                            <form method="POST" id="update-periodo-val">
                                <div class="form-group">
                                    <label for="">Periodo</label>
                                    <input type="text" class="form-control solo-numeros" placeholder="Ejemplo: 2021"
                                        id="upd-periodo-texto" minlength="4" maxlength="4">
                                </div>

                                <div class="form-group">
                                    <label for="">Desde</label>
                                    <input type="text" id="upd-desde-p" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="">Hasta</label>
                                    <input type="text" id="upd-hasta-p" class="form-control">
                                </div>

                            </form>
                            <div class="row">
                                <div class="col-12">
                                    <button id="btn-update" class="btn btn-primary"><i
                                            class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal Grado -->
<div class="modal fade" id="modalGrado" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="modalMateriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Nuevo Grado</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <form method="POST" id="form-nuevo-grado">
                                <div class="form-group">
                                    <label for="">Grado</label>
                                    <input type="text" class="form-control" placeholder="Ejemplo: Primero"
                                        id="form-grado">
                                </div>

                                <div class="d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-plus mr-2"></i>
                                        Agregar Grado
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="actualizarGrado" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="modalMateriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Actualizar Grado</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <input type="hidden" id="grado-id">
                            <form method="POST" id="update-grado">
                                <div class="form-group">
                                    <label for="">Grado</label>
                                    <input type="text" class="form-control" placeholder="Ejemplo: Primero"
                                        id="upd-nombre-grados">
                                </div>

                            </form>
                            <div class="row">
                                <div class="col-12">
                                    <button id="btn-update-grados" class="btn btn-primary"><i
                                            class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal Paralelo -->
<div class="modal fade" id="modalParalelo" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="modalMateriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Nuevo Grado</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <form method="POST" id="form-nuevo-paralelo">
                                <div class="form-group">
                                    <label for="">Paralelo</label>
                                    <input type="text" class="form-control" placeholder="Ejemplo: C" id="form-paralelo">
                                </div>

                                <div class="d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-plus mr-2"></i>
                                        Agregar Paralelo
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="actualizarParalelo" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="modalMateriaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Actualizar Paralelo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <input type="hidden" id="paralelo-id">
                            <form method="POST" id="update-grado">
                                <div class="form-group">
                                    <label for="">Paralelo</label>
                                    <input type="text" class="form-control" placeholder="Ejemplo: C" id="upd-paralelo">
                                </div>

                            </form>
                            <div class="row">
                                <div class="col-12">
                                    <button id="btn-update-paralelos" class="btn btn-primary"><i
                                            class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="<?= BASE ?>views/dist/js/scripts/periodos_otros.js?ver=1.1.1"></script>