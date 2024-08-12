let produtoCount = 0;
let proximoId = 2;

function criarProduto(produtoId, produtoData = {}) {
    return `
    <div id="produto-${produtoId}" class="section-wrapper mt-3">
        <img src="images/Captura de tela de 2024-08-11 00-04-36.png" width="50" height="50" class="delete-icon image" onclick="removerProduto(${produtoId})">
        <div class="form-section form-subsection" data-title="Produto - ${produtoId}">
            <div class="section-wrapper">
                <img src="images/Captura de tela de 2024-08-10 22-23-54.png" class="image">
                <div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="produto-${produtoId}">Produto</label>
                                <input type="text" class="form-control" id="produto-${produtoId}" value="${produtoData.nome || ''}" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div class="form-group">
                                <label for="medida-${produtoId}">UND. Medida</label>
                                <select class="form-select bc-gray" id="medida-${produtoId}" required>
                                    <option selected></option>
                                    <option value="cm" ${produtoData.medida === 'cm' ? 'selected' : ''}>cm</option>
                                    <option value="metro" ${produtoData.medida === 'metro' ? 'selected' : ''}>metro</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div class="form-group">
                                <label for="estoque-${produtoId}">QDTDE. em Estoque</label>
                                <input type="text" class="form-control" id="estoque-${produtoId}" onkeyup="valorTotal(${produtoId})" value="${produtoData.estoque || ''}" required>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div class="form-group">
                                <label for="valorU-${produtoId}">Valor Unitário</label>
                                <input type="text" class="form-control" id="valorU-${produtoId}" onkeyup="valorTotal(${produtoId})" value="${produtoData.valorUnitario || ''}" required>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3">
                            <div class="form-group">
                                <label for="valorT-${produtoId}">Valor Total</label>
                                <fieldset disabled>
                                <input type="text" class="form-control" id="valorT-${produtoId}" value="${(produtoData.valorUnitario*produtoData.estoque)|| ''}" required>
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
    produtoCount++;
    proximoId++;
}

function removerProduto(produtoId) {
    console.log(produtoCount)
    if(produtoCount != 1){
        const produtoElement = document.getElementById(`produto-${produtoId}`);
        produtoElement.remove();
        produtoCount--;
    }
}

function valorTotal(produtoId){
    let valorUnitario = document.getElementById(`valorU-${produtoId}`).value ;
    let quantidadeEstoque = document.getElementById(`estoque-${produtoId}`).value ;
    valorEstoque = valorUnitario * quantidadeEstoque;
    document.getElementById(`valorT-${produtoId}`).value = valorEstoque;
}

document.getElementById('adicionarProduto').addEventListener('click', adicionarProduto);

adicionarProduto();