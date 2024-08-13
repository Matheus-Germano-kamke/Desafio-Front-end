let quantiadeAnexo = 0;
let proximoIdAnexo = 1;

function criarAnexo(anexoId, anexoData = {}) {
    return `
    <div class="container-fluid">
        <div id="anexo-${anexoId}" class="row">
            <div class="upload-container anexo col-12 ">
                <img src="images/Captura de tela de 2024-08-11 00-04-36.png" width="50" height="50"  class="fs-cursor-pointer" onclick="removerAnexo(${anexoId})" >
                <a id="download-${anexoId}" class="download-link">
                    <img src="images/Captura de tela de 2024-08-11 00-30-46.png" width="50" height="50" class="fs-cursor-pointer" alt="Download">
                </a> 
                <input type="file" id="fileInput-${anexoId}" style="display:none" class="file-input form-control" accept=".pdf, .doc, .docx, .txt" required onblur="validarCampo('anexo', 'fileInput-${anexoId}')">
                <label id="uploadBtn-${anexoId}" for="comments" class="ml-4 align-items-start upload-btn fs-cursor-pointer" onclick="anexarAnexo(${anexoId})">Documento anexo ${anexoId}</label>
            </div>
        </div>
    </div>
`;
}

function adicionarAnexo() {
    const anexosContainer = document.getElementById('anexosContainer');
    const novoAnexoId = proximoIdAnexo;
    const novoAnexoHTML = criarAnexo(novoAnexoId);
    anexosContainer.insertAdjacentHTML('beforeend', novoAnexoHTML);
    quantiadeAnexo++;
    proximoIdAnexo++;
}

function removerAnexo(anexoId) {
    sessionStorage.removeItem(`fileBlob-${anexoId}`);
    document.getElementById(`uploadBtn-${anexoId}`).textContent = `Documento anexo ${anexoId}`;
    if (quantiadeAnexo > 1) {
        const anexoElement = document.getElementById(`anexo-${anexoId}`);
        anexoElement.remove();
        quantiadeAnexo--;
    }
}

function anexarAnexo(anexoId) {
    const fileInput = document.getElementById(`fileInput-${anexoId}`);
    const downloadLink = document.getElementById(`download-${anexoId}`);

    document.getElementById(`uploadBtn-${anexoId}`).addEventListener('click', function () {
        document.getElementById(`fileInput-${anexoId}`).click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            document.getElementById(`uploadBtn-${anexoId}`).textContent = `${file.name}`;
        } else {
            document.getElementById(`uploadBtn-${anexoId}`).textContent = `Documento anexo ${anexoId}`;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const blob = new Blob([e.target.result], { type: file.type });
            sessionStorage.setItem(`fileBlob-${anexoId}`, btoa(e.target.result));
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = file.name;
        };
        reader.readAsArrayBuffer(file);
    });
}


adicionarAnexo();

document.getElementById('adicionarAnexo').addEventListener('click', adicionarAnexo);

