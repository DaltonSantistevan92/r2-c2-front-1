<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Lista de entrega</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión</a></li>
                    <li class="breadcrumb-item active">Lista de entrega</li>
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
            <!-- /.col-md-6 -->
            <div class="col-12">
                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h5 class="m-0">Entregas</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">Insumos entregados</h5>

                        <p class="card-text">Lista de los insumos entregados a los representantes de los estudiantes.</p>
                        <div>
                            <form enctype="multipart/form-data">
                                <input type="file" placeholder="Evidencia" class="mt-2" id="input-documento">
                            </form>

                            <btn class="btn btn-primary mb-2" id="btn-documento">Adjuntar documento</btn>
                            <btn class="btn btn-primary mb-2" id="btn-consulta">Realizar consulta</btn>
                            <btn class="btn btn-primary mb-2" id="btn-imprimir">Imprimir</btn>
                        </div>

                        <div class="mt-2">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="">Fecha de Inicio</label>
                                        <input type="date" class="form-control" id="fecha-inicio">
                                    </div>
                                </div>

                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="">Fecha de Fin</label>
                                        <input type="date" class="form-control" id="fecha-fin">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 mt-2 border p-3" id="document-print">

                                    <div>
                                        <!-- <b class="fw-bold"></b> -->
                                    </div>

                                    <div class="col-12 mt-3">
                                        <div class="row">
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <img src="<?= BASE ?>views/dist/img/logo.jpg" width="100px">
                                            </div>
                                            <div class="col-6 col-md-8 col-lg-9 " style="padding-left: 125px">
                                                <h3 style="margin-left: 40px;"><b>Escuela Nuevo horizontes</b></h3>
                                                <h6 style="margin-left: 60px;">Listado de insumos entregados</h6>
                                                <!-- <h6 class="text-danger" style="margin-left: 30px;">DESDE: <span class="text-dark" id="inicio-reporte-orden"></span> - HASTA: <span id="fin-reporte-orden" class="text-dark"></span> -->
                                                </h6>
                                            </div>
                                        </div>

                                        <table class="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Ticket</th>
                                                    <th scope="col">Representantes</th>
                                                    <th scope="col">Estudiantes</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Insumos</th>
                                                </tr>
                                            </thead>

                                            <tbody id="btn-body">
                                                <!-- <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                </tr> -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
<!-- /.content-wrapper -->

<script src="<?= BASE ?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?= BASE ?>views/plugins/Toast/js/Toast.min.js"></script>
<script src="<?= BASE ?>views/dist/js/scripts/listaEntrega.js?ver=1.1.3"></script>