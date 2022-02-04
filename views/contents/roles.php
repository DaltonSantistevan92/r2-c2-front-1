<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Gestión Roles</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
                    <li class="breadcrumb-item active">Gestión Usarios / roles</li>
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
            <div class="col-12 col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Nuevo Rol</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-nuevo-rol">
                            <div class="form-group">
                                <label for="">Rol</label>
                                <input type="text" class="form-control" placeholder="Ejemplo" id="form-rol-rol">
                            </div>

                            <div class="form-group">
                                <label for="">Descripción</label>
                                <textarea name="" id="form-rol-descripcion" class="form-control"></textarea>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" id="btn-form-rol">
                                    <i class="fa fa-plus mr-2"></i>
                                    Agregar Rol
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header" style="background-color: #343a40; color: #fff;">
                        <h3 class="card-title">Lista de Roles</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>

                    <!-- /.card-header -->
                    <div class="card-body alto-table-roles">
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Rol</th>
                                        <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody id="table-roles">
                                    <!-- <tr>
                          <td>1</td>
                          <td>Administrador</td>
                          <td>
                            <div><button class="btn btn-purple">
                                <i class="fa fa-edit"></i>
                              </button>
                            </div>
                          </td>

                          <td>
                            <div><button class="btn btn-dark">
                                <i class="fa fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr> -->
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


<!-- Modales -->
<div class="modal fade" id="actualizar_rol">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Actualizar Rol</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form id="update-rol" method="post">
                        <input type="hidden" id="rol-id">
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Rol</label>
                                <input id="upd-rol" type="text" class="form-control letras-vd">
                            </div>
                            <div class="col-12 form-group">
                                <label for="">Descripción</label>
                                <input id="upd-descripcion" type="text" class="form-control letras-vd">
                            </div>
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
            <div class="modal-footer justify-content-between">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/roles.js?ver=1.1.1.2"></script>