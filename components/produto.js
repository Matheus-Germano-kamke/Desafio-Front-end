let quantidadeProduto = 0;
let proximoId = 1;

function criarProduto(produtoId, produtoData = {}) {
    return `
    <div id="produto-${produtoId}" class="produto section-wrapper fs-xl-margin-top container-fluid">
        <img src="images/Captura de tela de 2024-08-11 00-04-36.png" width="50" height="50" class="delete-icon image" onclick="removerProduto(${produtoId})">
        <div class="form-section form-subsection " data-title="Produto - ${produtoId}">
            <div class="section-wrapper container-fluid">
                <img src="images/Captura de tela de 2024-08-10 22-23-54.png" class="image">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="campoProduto-${produtoId}" class="form-group">
                                <label for="produto-${produtoId}">Produto</label>
                                <input type="text" class="form-control" id="produtoDescricao-${produtoId}" value="${produtoData.nome || ''}" required onblur="validarCampo('campoProduto-${produtoId}', 'produtoDescricao-${produtoId}')">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div id="campoMedida-${produtoId}" class="form-group">
                                <label for="medida-${produtoId}">UND. Medida</label>
                                <select class="form-control " id="medida-${produtoId}" required onblur="validarCampo('campoMedida-${produtoId}', 'medida-${produtoId}')">
                                    <option selected></option>
                                    <option value="cm" ${produtoData.medida === 'cm' ? 'selected' : ''}>cm</option>
                                    <option value="metro" ${produtoData.medida === 'metro' ? 'selected' : ''}>metro</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3 fs-no-spin">
                            <div id="campoEstoque-${produtoId}" class="form-group fs-no-spin">
                                <label for="estoque-${produtoId}">QDTDE. em Estoque</label>
                                <input type="number" class="form-control " id="estoque-${produtoId}" onkeyup="valorTotal(${produtoId})" value="${produtoData.estoque || ''}" required onblur="validarCampo('campoEstoque-${produtoId}', 'estoque-${produtoId}')">
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div id="campoValorU-${produtoId}" class="form-group">
                                <label for="valorU-${produtoId}">Valor Unitário</label>
                                <input type="number" class="form-control" id="valorU-${produtoId}" onkeyup="valorTotal(${produtoId})" value="${produtoData.valorUnitario || ''}" required onblur="validarCampo('campoValorU-${produtoId}', 'valorU-${produtoId}')">
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div class="form-group">
                                <label for="valorT-${produtoId}">Valor Total</label>
                                <fieldset disabled>
                                <input type="number" class="form-control" id="valorT-${produtoId}" value="${(produtoData.valorUnitario * produtoData.estoque) || ''}" required>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function adicionarProduto() {
    const produtosContainer = document.getElementById('produtosContainer');
    const novoProdutoId = proximoId;
    const novoProdutoHTML = criarProduto(novoProdutoId);
    produtosContainer.insertAdjacentHTML('beforeend', novoProdutoHTML);
    quantidadeProduto++;
    proximoId++;
}

function removerProduto(produtoId) {
    if (quantidadeProduto != 1) {
        const produtoElement = document.getElementById(`produto-${produtoId}`);
        produtoElement.remove();
        quantidadeProduto--;
    }
}

function valorTotal(produtoId) {
    let valorUnitario = document.getElementById(`valorU-${produtoId}`).value;
    let quantidadeEstoque = document.getElementById(`estoque-${produtoId}`).value;
    valorEstoque = valorUnitario * quantidadeEstoque;
    document.getElementById(`valorT-${produtoId}`).value = valorEstoque;
}

document.getElementById('adicionarProduto').addEventListener('click', adicionarProduto);

adicionarProduto();