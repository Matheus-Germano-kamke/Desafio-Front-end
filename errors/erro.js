function validarCampo(a, b) {
  var campo = document.getElementById(b);
  var div = document.getElementById(a);

  if (!campo.checkValidity()) {
    div.classList.add('has-error');
    <div class="alert alert-danger" role="alert">...</div>
  } else {
    div.classList.remove('has-error');
  }
}