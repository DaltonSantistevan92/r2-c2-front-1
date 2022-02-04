<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Entregas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Productos</a></li>
                    <li class="breadcrumb-item active">Entregas</li>
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
            <div class="col-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Datos del Ticket</h3>

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
                            <div class="col-4">
                                <input type="hidden" id="ticket-id">
                                <div class="form-group">
                                    <label for="">Código</label>
                                    <input type="text" class="form-control" readOnly placeholder="Código"
                                        id="form-entrega-ticket-codigo">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="">Representante</label>
                                    <input type="text" class="form-control" readOnly placeholder="Representante"
                                        id="form-entrega-ticket-repre">
                                </div>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-ticket"
                                    data-backdrop="static" data-keyboard="false" style="margin-top: 36px;"><i
                                        class="fa fa-search mr-2"></i>Buscar
                                    Ticket</button>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Datos del Usuario</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-nuevo-usuario">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Código de Entrega</label>
                                        <input type="text" class="form-control" readOnly placeholder="Código"
                                            id="form-entrega-codigo">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Usuario</label>
                                        <input type="text" class="form-control" readOnly placeholder="Usuario"
                                            id="form-entrega-user">
                                    </div>
                                </div>
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
                        <h3 class="card-title">Proceso de Entrega</h3>

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
                            <div class="col-5">
                                <div class="card card-primary card-outline">
                                    <div class="card-header">
                                        <h3 class="card-title"> <b>Información del Ticket</b> </h3>

                                        <!-- /.card-tools -->
                                    </div>
                                    <!--form-nuevo-descripcion /.card-header -->
                                    <div class="card-body">
                                        <div class="row d-flex justify-content-center" id="ticket-entrega">
                                            <div class="col-12">
                                                <div class="bs-component">
                                                    <div class="alert alert-dismissible alert-danger">
                                                        <strong>No ha seleccionado ningún ticket</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- --- -->
                            </div>
                            <div class="col-7">
                                <div class="card card-primary card-outline">
                                    <div class="card-header">
                                        <h3 class="card-title"> <b>Asignación de Productos</b> </h3>

                                        <div class="card-tools">
                                            <button class="btn btn-primary btn-sm" data-toggle="modal"
                                                data-target="#modal-producto" data-backdrop="static"
                                                data-keyboard="false"><i class="fa fa-search"></i></button>
                                        </div>
                                        <!-- /.card-tools -->
                                    </div>
                                    <!--form-nuevo-descripcion /.card-header -->
                                    <div class="card-body">
                                        <form method="POST" id="form-nuevo-producto">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="">Nombre</label>
                                                        <input type="text" class="form-control solo-letras" readOnly
                                                            placeholder="Nombre" id="form-producto-nombre">
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <input type="hidden" id="categoria_id">
                                                        <label for="">Categoría</label>
                                                        <input id="form-producto-categoria" type="text" readOnly
                                                            class="form-control" placeholder="Categoría">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="">Cantidad</label>
                                                        <input type="text" class="form-control solo-numeros"
                                                            placeholder="Cantidad" id="form-producto-cant">
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="">Stock</label>
                                                        <input type="text" class="form-control solo-numeros" readOnly
                                                            placeholder="Stock" id="form-producto-stock">
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <button id="item-agregar" class="btn btn-primary"
                                                        style="margin-top: 30px;"><i
                                                            class="fas fa-plus mr-2"></i>Agregar</button>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12" style="max-height: 335px; overflow: auto;">
                                                    <div class="tabla-item-productos">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width: 10px">#</th>
                                                                    <th>Categoría</th>
                                                                    <th>Descripción</th>
                                                                    <th>Cantidad</th>
                                                                    <th>Borrar</th>
                                                                    <th style="display:none;">Id</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="items-productos">
                                                                <!-- <tr>
                                                          <td><i class="fas fa-star-of-life"></i></td>
                                                          <td>Aceite</td>
                                                          <td>5</td>
                                                          <td>$1.50</td>
                                                          <td>10000</td>
                                                          <th>
                                                            <div>
                                                                <button class="btn btn-outline-danger" onclick="borrar_item(1)">
                                                                    <i class="fas fa-minus"></i>
                                                              </button>
                                                            </div>
                                                          </th>
                                                      </tr> -->
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group text-right">
                                                <button type="submit" class="btn btn-primary" id="btn-form-rol">
                                                    <i class="fas fa-box-open mr-2"></i>
                                                    Registrar Entrega
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- --- -->
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
<div class="modal fade" id="modal-ticket">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <input type="hidden" id="form-est-id">
                <h4 class="modal-title">Tickets Disponibles</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Ticket por Código</label>
                            <input id="buscar-ticket" type="text" class="form-control"
                                placeholder="Ingrese el código del Ticket">
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
                                        <th>Código</th>
                                        <th>Turno</th>
                                        <th>Representante</th>
                                        <th>Estudiante</th>
                                        <th>Fecha Entrega</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="ticket-body">

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

<div class="modal fade" id="modal-producto">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <input type="hidden" id="form-prod-id">
                <h4 class="modal-title">Productos Disponibles</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Buscar Producto</label>
                            <input id="buscar-prod" type="text" class="form-control"
                                placeholder="Ingrese nombre del Producto">
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
                                        <th>Nombre</th>
                                        <th>Categoría</th>
                                        <th>Stock</th>
                                        <th style="display: none">Imagen</th>
                                        <th style="display: none">ID_CATEGORIA</th>
                                        <th>OK</th>
                                    </tr>
                                </thead>
                                <tbody id="producto-body">

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

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/entrega.js?ver=1.1.3"></script>