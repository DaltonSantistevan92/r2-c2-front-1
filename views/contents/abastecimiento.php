<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Abastecimiento</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Productos</a></li>
                    <li class="breadcrumb-item active">Abastecimiento</li>
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
                        <h3 class="card-title">Datos de Abastecimento</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-nuevo-abastecimiento">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Código</label>
                                        <input type="text" class="form-control" readOnly placeholder="Código"
                                            id="form-abast-codigo">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Usuario</label>
                                        <input type="text" class="form-control" readOnly placeholder="Usuario"
                                            id="form-abast-user">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Proveedor</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-nuevo-proveedor">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Razón Social</label>
                                        <select id="form-abast-prov" class="form-control">
                                            <!-- <option value="0">Seleccione una Categoría</option> -->
                                        </select>
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
                        <h3 class="card-title">Producto</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <div class="text-right">
                            <button class="btn btn-primary btn-sm" id="buscar-marca" data-toggle="modal"
                                data-target="#modal-producto" data-backdrop="static" data-keyboard="false"><i
                                    class="fa fa-search mr-2"></i>Buscar Producto</button>
                        </div>
                        <form method="POST" id="form-nuevo-producto">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="hidden" id="prod-id">
                                        <label for="">Nombre</label>
                                        <input type="text" class="form-control solo-letras" readOnly
                                            placeholder="Nombre" id="form-producto-nombre">
                                    </div>
                                </div>
                                <div class="col-6" id="ocultar-peso">
                                    <div class="form-group">
                                        <label for="">Peso</label>
                                        <input type="text" class="form-control" readOnly placeholder="Peso"
                                            id="form-producto-peso">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="hidden" id="categoria_id">
                                        <label for="">Categoría</label>
                                        <input id="form-producto-categoria" type="text" readOnly class="form-control"
                                            placeholder="Categoría">
                                    </div>
                                </div>
                                <div class="col-6 border">
                                    <div class="form-group">
                                        <label for="form-img-usuario">Imagen</label>
                                        <div class="row">
                                            <img id="form-producto-img" class="mx-auto d-block"
                                                src="<?=SERVIDOR?>resources/productos/default_product.jpg">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="">Cajas</label>
                                        <input type="text" class="form-control solo-numeros" placeholder="Cajas"
                                            id="form-producto-caja">
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
                                    <button id="item-agregar" class="btn btn-primary" style="margin-top: 30px;"><i
                                            class="fas fa-plus mr-2"></i>Agregar</button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="tabla-item-productos" style="overflow: auto;">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style="width: 10px">#</th>
                                                    <th>Descripción</th>
                                                    <th>N° Cajas</th>
                                                    <th>Unidades</th>
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
                                    Guardar Proceso
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
<div class="modal fade" id="modal-producto">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <input type="hidden" id="form-est-id">
                <h4 class="modal-title">Productos</h4>
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
                                        <th>Peso</th>
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
<script src="<?=BASE?>views/dist/js/scripts/abastecimiento.js"></script>