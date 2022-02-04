<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Nueva Base</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Horario</a></li>
                    <li class="breadcrumb-item active">Nueva Base</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<div class="content">
    <div class="container-fluid">
        <div class="row d-flex align-items-center">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-group">
                    <label class="col-form-label">Periodo</label>
                    <select id="select-periodo" class="form-control">
                        <option value="0">Seleccione una opción</option>
                    </select>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-group">
                    <label class="col-form-label">Horario</label>
                    <select id="select-horario" class="form-control">
                        <option value="0">Seleccione una opción</option>
                    </select>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
                <div class="form-group">
                    <label class="col-form-label">Nombre</label>
                    <input type="text" class="form-control" id="form-nombre-base" placeholder="Nombre">
                </div>
            </div>

            
            <div class="col-12 col-md-6 col-lg-3 mt-3">
                <button class="btn btn-dark" id="btn-crear-nombre-base">
                    <i class="fas fa-plus mr-2"></i>Crear
                </button>
            </div>

        </div>

        <div class="row mt-3">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Nueva Hora</h5>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="">Hora Inicio</label>
                                <input type="time" id="form-hora-inicio" class="form-control">
                            </div>

                            <div class="col-12 form-group">
                                <label for="">Hora Fin</label>
                                <input type="time" id="form-hora-fin" class="form-control">
                            </div>

                            <div class="col-12">
                                <button class="btn btn-primary w-100" id="btn-guardar-hora">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-8">
                <div class="card card-dark">
                    <div class="card-header">
                        <h5 class="m-0">Asignar horas</h5>
                    </div>

                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-12 col-md-5 col-lg-3">
                                <label for="">Bases disponibles</label>
                                <select id="select-base" class="form-control form-control-sm">
                                    <!-- <option value="0">Seleccione una hora</option> -->
                                </select>
                            </div>

                            <div class="col-12 col-md-5 col-lg-3">
                                <label for="">Horas</label>
                                <select id="select-horas-base" class="form-control form-control-sm">
                                    <!-- <option value="0">Seleccione una hora</option> -->
                                </select>
                            </div>

                            <div class="col-12 col-md-2 col-lg-3">
                                <button id="btn-establecer" class="btn btn-sm btn-primary" style="margin-top: 33px;">
                                    <i class="far fa-calendar-check mr-2"></i>Establecer
                                </button>
                            </div>
                        </div>

                        <div class="row" id="tb-asig">
                            <div class="col-12">
                                <table class="table t-hover table-bordered" id="tabla-asignacion">
                                    <thead class="bg-primary">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th>Base</th>
                                            <th scope="col">Días </th>
                                            <th scope="col">H. Inicio</th>
                                            <th scope="col">H. Fin</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody-base-hora">
                                        <!-- <tr>
                                            <td>1</td>
                                            <td>Primero</td>
                                            <td>Lunes a Viernes</td>
                                            <td>8:30</td>
                                            <td>9:30</td>
                                            <td>
                                                <div class="text-center">
                                                    <button class="btn-sm btn btn-outline-dark" id="btn-delete-tr-detalle">
                                                    <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
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
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<script src="<?= BASE ?>views/dist/js/scripts/nuevaBase.js?ver=1.1.1"></script>