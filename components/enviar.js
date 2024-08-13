document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const produtos = [];
    const anexos = [];

    const produtoDivs = document.querySelectorAll('.produto');
    produtoDivs.forEach((produtoDiv, index) => {
        const produto = {
            indice: index + 1,
            descricaoProduto: produtoDiv.querySelector('.descricaoProduto').value,
            unidadeMedida: produtoDiv.querySelector('.unidadeMedida').value,
            qtdeEstoque: produtoDiv.querySelector('.qtdeEstoque').value,
            valorUnitario: produtoDiv.querySelector('.valorUnitario').value,
            valorTotal: produtoDiv.querySelector('.valorTotal').value
        };
        produtos.push(produto);
    });

    const anexoDivs = document.querySelectorAll('.anexo');
    anexoDivs.forEach((anexoDiv, index) => {
        const anexo = {
            indice: index + 1,
            nomeArquivo: anexoDiv.querySelector('.nomeArquivo').value,
            blobArquivo: anexoDiv.querySelector('.blobArquivo').value
        };
        anexos.push(anexo);
    });

    const jsonData = {
        razaoSocial: document.getElementById('razaoSocial').value,
        nomeFantasia: document.getElementById('nomeFantasia').value,
        cnpj: document.getElementById('cnpj').value,
        inscricaoEstadual: document.getElementById('inscricaoEstadual').value,
        inscricaoMunicipal: document.getElementById('inscricaoMunicipal').value,
        nomeContato: document.getElementById('nomeContato').value,
        telefoneContato: document.getElementById('telefone').value,
        emailContato: document.getElementById('email').value,
        produtos: produtos,
        anexos: anexos
    };

    console.log(JSON.stringify(jsonData, null, 2)); // Exibe o JSON no console
});

// Função para adicionar um novo produto
document.getElementById('addProduto').addEventListener('click', function() {
    const produtosDiv = document.getElementById('produtos');
    const novoProdutoDiv = document.createElement('div');
    novoProdutoDiv.className = 'produto';
    novoProdutoDiv.innerHTML = `
        <label for="descricaoProduto">Descrição do Produto:</label>
        <input type="text" class="descricaoProduto" required>

        <label for="unidadeMedida">Unidade de Medida:</label>
        <input type="text" class="unidadeMedida" required>

        <label for="qtdeEstoque">Quantidade em Estoque:</label>
        <input type="number" class="qtdeEstoque" required>

        <label for="valorUnitario">Valor Unitário:</label>
        <input type="number" class="valorUnitario" step="0.01" required>

        <label for="valorTotal">Valor Total:</label>
        <input type="number" class="valorTotal" step="0.01" required>
    `;
    produtosDiv.appendChild(novoProdutoDiv);
});

// Função para adicionar um novo anexo
document.getElementById('addAnexo').addEventListener('click', function() {
    const anexosDiv = document.getElementById('anexos');
    const novoAnexoDiv = document.createElement('div');
    novoAnexoDiv.className = 'anexo';
    novoAnexoDiv.innerHTML = `
        <label for="nomeArquivo">Nome do Arquivo:</label>
        <input type="text" class="nomeArquivo" required>

        <label for="blobArquivo">Blob do Arquivo:</label>
        <input type="text" class="blobArquivo" required>
    `;
    anexosDiv.appendChild(novoAnexoDiv);
});
