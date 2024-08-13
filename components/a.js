import {adicionarAnexo, removerAnexo} from "./anexoScript"

document.getElementById('adicionarAnexo').addEventListener('click', adicionarAnexo);

adicionarAnexo();

document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('statusMessage').textContent = `Arquivo selecionado: ${file.name}`;
    } else {
        document.getElementById('statusMessage').textContent = 'Nenhum arquivo selecionado.';
    }
});