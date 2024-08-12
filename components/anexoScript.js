let anexoCount = 0;
let proximoIdAnexo = 2;

function criarAnexo(anexoId, anexoData = {}) {
    return `
                     <div id="anexo-${anexoId}" class="row">
                        <div class="col-12">
                           <img src="images/Captura de tela de 2024-08-11 00-04-36.png" width="50" height="50" onclick="removerAnexo(${anexoId})">
                           <img src="images/Captura de tela de 2024-08-11 00-30-46.png" width="50" height="50">
                           <label for="comments" class="ml-4">Documento anexo ${anexoId}</label>
                        </div>
                     </div>
`;
}

function adicionarAnexo() {
    const anexosContainer = document.getElementById('anexosContainer');
    const novoAnexoId = anexosContainer.children.length + 1;
    const novoAnexoHTML = criarAnexo(novoAnexoId);
    anexosContainer.insertAdjacentHTML('beforeend', novoAnexoHTML);
    anexoCount++;
    proximoIdAnexo++;
}

function removerAnexo(anexoId) {
    if(anexoCount > 1){
        const anexoElement = document.getElementById(`anexo-${anexoId}`);
        anexoElement.remove();
        anexoCount--;
    }
}

document.getElementById('adicionarAnexo').addEventListener('click', adicionarAnexo);

adicionarAnexo();