<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Horario/Configurar</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Gestión de Horarios</a></li>
                    <li class="breadcrumb-item active">Horario/Configurar</li>
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
            <div class="col-3">
                <a class="btn btn-dark form-control" href="<?= BASE ?>gestion/base_nueva" data-backdrop="static" data-keyboard="false">Nueva Base
                </a>
            </div>
            <div class="col-4">
                <select id="select-base" class="form-control">
                    <option value="0">Seleccione una base</option>
                </select>
            </div>
        </div>

        <input type="hidden" id="base-id-input">

        <div class="row mt-5">
            <div class="col-12">
                <div class="card w-100">
                    <div class="card-body">
                        <h5 class="card-title">Asignar Materias</h5>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Horario</th>
                                    <th scope="col">Lunes</th>
                                    <th scope="col">Martes</th>
                                    <th scope="col">Miercolés</th>
                                    <th scope="col">Jueves</th>
                                    <th scope="col">Viernes</th>
                                </tr>
                            </thead>
                            <tbody id="tr-body">
                                <!-- <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <button class="btn btn-primary btn-sm" onclick="asignar(1, 1)">
                                            <i class="fas fa-plus"></i>
                                            Asignar
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" onclick="asignar(1, 2)">
                                            <i class="fas fa-plus"></i>
                                            Asignar
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" onclick="asignar(1, 3)">
                                            <i class="fas fa-plus"></i>
                                            Asignar
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" onclick="asignar(1, 4)">
                                            <i class="fas fa-plus"></i>
                                            Asignar
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" onclick="asignar(1, 5)">
                                            <i class="fas fa-plus"></i>
                                            Asignar
                                        </button>
                                    </td>
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

<!-- Modal -->
<div class="modal fade" id="modalAux" tabindex="-1" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Asignaciones</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card text-white bg-dark">
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="" class="text-white">Periodo</label>
                                                <select class="form-control" id="select-periodo">
                                                    <option value="0">Seleccione un periodo</option>
                                                </select>
                                            </div>
        
                                            <div class="form-group">
                                                <label for="" class="text-white">Curso</label>
                                                <select name="" id="select-grado" class="form-control">
                                                    <option value="0">Seleccione un curso</option>
                                                </select>
                                            </div>
        
                                            <div class="form-group">
                                                <label for="" class="text-white">Paralelo</label>
                                                <select name="" id="select-paralelo" class="form-control">
                                                    <option value="0">Seleccione un paralelo</option>
                                                </select>
                                            </div>

                                            <button class="btn btn-success w-100" id="btn-filtrar">
                                                Filtrar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-9">
                            <div class="card bg-light" style="height: 220px; overflow: auto;">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Docente</th>
                                            <th scope="col">Materia</th>
                                            <th scope="col">Seleccionar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody-asignaciones">
                                        <!-- <tr>
                                            <th scope="row">1</th>
                                            <td>Sergio Marquiz</td>
                                            <td>Matemáticas</td>
                                            <td>
                                                <div class="w-100 text-center">
                                                    <button class="btn btn-sm btn-outline-dark">
                                                        <i class="fas fa-check"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>

                            <div class="card bg-ligth p-2">
                                <div class="row">
                                    <div class="col-12 col-md-6" style="display: none;">
                                        <input type="hidden" readonly class="form-control" id="detalleBase-id" 
                                        placeholder="detalleBase-id">
                                    </div>

                                    <div class="col-12 col-md-6" style="display: none;">
                                        <input type="hidden" readonly class="form-control" id="dia-id" 
                                        placeholder="dia-id">
                                    </div>

                                    <div class="col-12 col-md-6" style="display: none;">
                                        <input type="hidden" readonly class="form-control" id="hora-id" 
                                        placeholder="hora-id">
                                    </div>

                                    <div class="col-12 col-md-6" style="display: none;">
                                        <input type="hidden" readonly class="form-control" id="asignacion-id" 
                                        placeholder="asingacion-id">
                                    </div>

                                    <div class="col-12 col-md-6">
                                        <input type="text" readonly class="form-control" id="asignacion-docente" 
                                        placeholder="docente">
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <input type="text" readonly class="form-control" id="asignacion-materia" 
                                        placeholder="materia">
                                    </div>

                                    <div class="col-12 text-center mt-2">
                                        <button class="btn btn-primary btn-sm" id="btn-asingar-ya">
                                            Asignar 
                                        </button>

                                        <button class="btn btn-danger btn-sm" id="btn-asignar-delete">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="btn-modal-asig">Close</button>
            </div>
        </div>
    </div>
</div>

<script src="<?= BASE ?>views/dist/js/scripts/gestionBase.js?ver=1.1.1"></script>