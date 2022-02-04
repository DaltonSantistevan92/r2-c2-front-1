<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Lista de Horarios</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión</a></li>
                    <li class="breadcrumb-item active">Lista de horario</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row d-flex align-items-center">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-group">
                    <label for="">Periodo</label>
                    <select name="" id="select-periodo" class="form-control">
                        <option value="0">Seleccione un periodo</option>
                    </select>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-group">
                    <label for="">Horario</label>
                    <select name="" id="select-horario" class="form-control">
                        <option value="0">Seleccione una opción</option>
                    </select>
                </div>
            </div>

            <div class="col-6 col-md-6 col-lg-6">
                <button class="btn btn-dark btn-sm mt-3" id="btn-consultar">
                    <i class="fas fa-search"></i>
                    Consultar
                </button>
                <button class="btn btn-dark btn-sm mt-3" id="btn-printf">
                    <i class="fas fa-print"></i>
                    Imprimir
                </button>
            </div>

            <div class="col-6 col-md-6 col-lg-3">
            </div>

        </div>

        <div class="row">
            <div class="col-12">
                <div class="card card-primary card-outline" id="content-horario">
                    <div class="card-body">
                        <h5 class="card-title">Lista de horario 
                            <span id="datos-horario" class="fw-bold text-primary"></span>
                        </h5>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Lunes</th>
                                    <th scope="col">Martes</th>
                                    <th scope="col">Miercoles</th>
                                    <th scope="col">Jueves</th>
                                    <th scope="col">Viernes</th>
                                </tr>
                            </thead>
                            <tbody id="tbody-horario">
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
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>
<script src="<?= BASE ?>views/dist/js/scripts/listarHorario.js?ver=1.1.1"></script>
