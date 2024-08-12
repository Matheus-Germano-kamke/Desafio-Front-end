const camposObrigatorios = document.querySelectorAll('#formulario [required]');

camposObrigatorios.forEach(campo => {
    
    campo.addEventListener('blur', function() {

        if (campo.value.trim() === '') {
            campo.classList.add('error');
        } else {
            campo.classList.remove('error');
        }
    });
});
