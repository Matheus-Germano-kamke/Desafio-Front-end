function validarCampo(a,b) {
    var campo = document.getElementById(b);
    console.log(campo)
    var div = document.getElementById(a);
  
    if (!campo.checkValidity()) {
      div.classList.add('has-error');
    } else {
      div.classList.remove('has-error');
    }
  }