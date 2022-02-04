<style>
.box-img-producto {
    width: 90px;
    height: 75px;
    overflow: hidden;
}

.box-img-producto>img {
    width: 100% !important;
    height: 100% !important;
}

.pt-25 {
    padding-top: 30px !important;
}
</style>
<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Insumos Alimenticios / Libros</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Administración</a></li>
                    <li class="breadcrumb-item active">Insumos Alimenticios - Libros</li>
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
            <div class="col-12 col-md-8 col-lg-7">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Nuevo Producto</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!--form-nuevo-descripcion /.card-header -->
                    <div class="card-body">
                        <form method="POST" id="form-nuevo-producto">
                            <div class="form-group">
                                <label for="">Categoría</label>
                                <select id="form-producto-categoria" class="form-control">
                                    <!-- <option value="0">Seleccione una Categoría</option> -->
                                </select>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Nombre</label>
                                        <input type="text" class="form-control solo-letras" placeholder="Nombre"
                                            id="form-producto-nombre">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group" id="producto-data-peso">
                                        <label for="">Peso</label>
                                        <input type="text" class="form-control" placeholder="100g"
                                            id="form-producto-peso">
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Cajas</label>
                                        <input type="text" class="form-control solo-numeros" placeholder="Cajas"
                                            id="form-producto-caja">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Stock</label>
                                        <input type="text" class="form-control solo-numeros" readOnly
                                            placeholder="Stock" id="form-producto-stock">
                                    </div>
                                </div>
                            </div> -->

                            <div class="form-group">
                                <label for="">Descripción</label>
                                <textarea name="" id="form-producto-descripcion" class="form-control"></textarea>
                            </div>

                            <div class="form-group">
                                <label for="form-img-usuario">Imagen</label>
                                <input class="form-control" type="file" name="img" id="form-img-producto"
                                    accept="image/*">
                            </div>

                            <div class="form-group d-none" id="data-fecha-cad">
                                <label for="">Fecha de Caducidad</label>
                                <input type="date" class="form-control" placeholder="Fecha de Caducidad"
                                    id="form-producto-fecha-caduca">
                            </div>

                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-primary" id="btn-form-rol">
                                    <i class="fa fa-plus mr-2"></i>
                                    Agregar Producto
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-5">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Vista Imagen Producto</h3>
                                <!-- /.card-tools -->
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12" style="width: 218px; height: 425px">
                                        <img id="img-preview-producto"
                                            src="<?=SERVIDOR?>resources/productos/default_product.jpg"
                                            style="width: 100%;height: 100%;">
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header" style="background-color: #343a40; color: #fff;">
                        <h3 class="card-title">Lista de Productos</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>

                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Insumos Alimenticios</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                        <!-- /.card-tools -->
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        <div class="div" style="overflow: auto;">
                                            <table id="tabla-insumos" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10px">#</th>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Categoría</th>
                                                        <th>Peso</th>
                                                        <th>Cajas</th>
                                                        <th>Stock</th>
                                                        <th>Fecha de Caducidad</th>
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
                                <!-- /.card -->
                            </div>
                            <div class="col-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Libros</h3>

                                        <div class="card-tools">
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                        <!-- /.card-tools -->
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        <div class="div" style="overflow: auto;">
                                            <table id="tabla-libros" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 10px">#</th>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Categoría</th>
                                                        <th>Cajas</th>
                                                        <th>Stock</th>
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
                                <!-- /.card -->
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
<div class="modal fade" id="actualizar_insumo">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title">Actualizar Producto</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="contanier-fluid">
                    <form method="POST" id="update-producto">
                        <input type="hidden" id="prod-id">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="">Nombre</label>
                                    <input type="text" class="form-control solo-letras" placeholder="Nombre"
                                        id="upd-nombre">
                                </div>
                            </div>
                            <div class="col-6" id="upd-data-peso">
                                <div class="form-group">
                                    <label for="">Peso</label>
                                    <input type="text" class="form-control" placeholder="Peso" id="upd-peso">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Categoría</label>
                            <select id="upd-categoria" class="form-control">
                                <!-- <option value="0">Seleccione una Categoría</option> -->
                            </select>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="">Cajas</label>
                                    <input type="text" class="form-control" readOnly placeholder="Cajas" id="upd-caja">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="">Stock</label>
                                    <input type="text" class="form-control solo-numeros" readOnly placeholder="Stock"
                                        id="upd-stock">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="">Descripción</label>
                            <textarea name="" id="upd-descripcion" class="form-control"></textarea>
                        </div>

                        <div class="form-group d-none" id="upd-data-fecha">
                            <label for="">Fecha de Caducidad</label>
                            <input type="date" class="form-control" placeholder="Fecha de Caducidad"
                                id="upd-fecha-caduca">
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
<script src="<?=BASE?>views/dist/js/scripts/insumosLibros.js"></script>