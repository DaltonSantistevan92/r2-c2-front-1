<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Productos Por Caducarse</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Reportes</a></li>
                    <li class="breadcrumb-item active">Productos Por Caducarse</li>
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
                <div class="row mb-3 d-flex justify-content-center">
                    <div class="col-6 col-md-4 col-lg-3 form-group ">
                        <label for="">Categoría</label>
                        <select id="select-categoria" class="form-control">
                            <option value="0">Seleccione un Categoría</option>
                        </select>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 form-group ">
                        <label for="">Año</label>
                        <select id="select-anio" class="form-control">
                            <option value="0">Seleccione un Año</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 form-group ">
                        <label for="">Mes</label>
                        <select id="select-mes" class="form-control">
                            <!-- <option value="">Seleccione un Mes</option> -->
                        </select>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 form-group ">
                        <button class="btn btn-dark" id="btn-consulta-cadu" style="margin-top: 35px;">
                            <i class=" fa fa-search"></i> Consultar</button>
                        <button class="btn btn-primary" id="btn-imprimir" style="margin-top: 35px;">
                            <i class="far fa-file-pdf"></i> Imprimir</button>
                    </div>
                </div>

                <div id="tabla-reporte-p-caducarse" class="row d-none">
                    <div class="col-12 mt-2">
                        <div class="row">
                            <div class="col-6 col-md-8 col-lg-9" style="padding-left: 125px; margin-top: 40px;">
                                <h3><b>NUEVOS HORIZONTES</b></h3>
                                <h6>Reporte de Productos Por Caducarse</h6>
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img src="<?=BASE?>views/dist/img2/logo-128x128.png" alt="IMG" width="150px"
                                    style="margin-left: -100px;margin-top: -30px;">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-12 text-center">
                                <div class="mt-3">
                                    <div class="card">
                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-hover text-nowrap table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nombre de Producto</th>
                                                        <th>Categoría</th>
                                                        <th>Fecha Caducidad</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="body-reporte-caducarse">

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
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

<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?= BASE ?>views/dist/js/scripts/productoCaducarse.js"></script>