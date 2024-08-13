document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const produtos = [];
    const anexos = [];

    const produtoDivs = document.querySelectorAll('div[id^="produto-"]');
    produtoDivs.forEach((produtoDiv, index) => {
        const [, numeroProduto] = produtoDiv.id.split("-")
        const produto = {
            indice: index + 1,
            descricaoProduto: document.getElementById(`produtoDescricao-${numeroProduto}`).value,
            unidadeMedida: document.getElementById(`medida-${numeroProduto}`).value,
            qtdeEstoque: document.getElementById(`estoque-${numeroProduto}`).value,
            valorUnitario: document.getElementById(`valorU-${numeroProduto}`).value,
            valorTotal: document.getElementById(`valorT-${numeroProduto}`).value
        };
        produtos.push(produto);
    });

    const anexoDivs = document.querySelectorAll('.anexo');
    anexoDivs.forEach((anexoDiv, index) => {
        const [, numero] = anexoDiv.querySelector('.upload-btn').id.split("-")
        const anexo = {
            indice: index + 1,
            nomeArquivo: anexoDiv.querySelector('.upload-btn').textContent,
            fileBlob: sessionStorage.getItem('fileBlob-' + numero)
        };
        anexos.push(anexo);
    });

    const jsonData = {
        razaoSocial: document.getElementById('razaoSocial').value,
        nomeFantasia: document.getElementById('nomeFantasia').value,
        cnpj: document.getElementById('cnpj').value,
        inscricaoEstadual: document.getElementById('inscricaoEstadual').value,
        inscricaoMunicipal: document.getElementById('inscricaoMunicipal').value,

        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value,
        municipio: document.getElementById('municipio').value,
        estado: document.getElementById('estado').value,

        nomeContato: document.getElementById('nomeContato').value,
        telefoneContato: document.getElementById('telefone').value,
        emailContato: document.getElementById('email').value,
        produtos: produtos,
        anexos: anexos
    };

    var event = new CustomEvent("openModalEvent", {
        detail: JSON.stringify(jsonData, null, 2)
    });

    document.dispatchEvent(event);
});