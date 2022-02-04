<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Inventario de Productos</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Inventario de Productos</a></li>
                    <li class="breadcrumb-item active">Ver Inventario</li>
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
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Categoría</label>
                <select class="form-control" id="select-categoria">
                    <!-- <option>Seleccione una Categoría</option> -->
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3 form group">
                <label>Producto</label>
                <select class="form-control" id="select-productos">
                    <!-- <option>Seleccione un Producto</option> -->
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3 form group">
                <button class="btn btn-primary" id="btn-consultar" style="margin-top: 31px;"><i class="fas fa-play mr-2"></i>Consultar</button>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12">
                <div class="card">
                    <div class="div" style="overflow: auto;">
                        <table id="tabla-inventario" class="table table-bordered table-hover table-sm text-center d-none">
                            <thead> 
                                <tr class="table-primary">
                                    <th rowspan="2" class="text-center">N°</th>
                                    <th rowspan="2" class="text-center">Fecha</th>
                                    <th rowspan="2" class="text-center">Movimiento</th>
                                    <th colspan="1" class="text-center">Entradas</th>
                                    <th colspan="1" class="text-center">Salidas</th>
                                    <th colspan="1" class="text-center">Disponibles</th>
                                </tr>
                                <tr class="table-primary">
                                    <th class="text-center">Cantidad de Entrada</th>
                                    <th class="text-center">Cantidad de Salida</th>
                                    <th class="text-center">Cantidad Disponibles</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                </tfoot>
                        </table>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/verInventario.js"></script>