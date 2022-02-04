<body class="hold-transition login-page fon">
<div class="login-box">
  <!-- /.login-logo -->
  <div class="card" style="width: 20rem; height:23rem">
    <div class="img-logo">
        <img src="<?=BASE?>views/dist/img/logo.jpg" class="card-img-top" alt="...">
    </div>
    
    <div class="card-body">
    <form id="form-login" method="post">
        <div class="input-group mb-3">
          <input type="text" class="form-control solo-numeros" placeholder="Cédula" id="dato-cedula" minlength ="10" maxlength ="10">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Contraseña" id="dato-clave">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Recordar datos
              </label>
            </div>
          </div>
        </div>

        <div class="row p-1">
    
            <div class="col-12 mb-3">
                  <button type="submit" class="btn btn-primary btn-block colorApp" id="btn-ingresar">
                      Iniciar sesion</button>
             </div>
             
            <!-- <div class="col-12 col-sm-6">
                <button type="submit" class="btn btn-primary btn-block c-f">
                <i class="fab fa-facebook-f mr-2"></i>
                    Facebook
                </button>
            </div>
    
            <div class="col-12 col-sm-6">
                <button type="submit" class="btn btn-primary btn-block c-t">
                <i class="fab fa-twitter mr-2"></i>
                    Twitter
                </button>
            </div> -->
        </div>
      </form>
    </div>
    
 </div>
</div>
<!-- /.login-box -->

<script src="<?=BASE?>views/dist/js/scripts/login.js?ver=1.1.2"> </script>
<script src="<?=BASE?>views/plugins/Toast/js/Toast.min.js"></script>

