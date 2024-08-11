let produtoCount = 1;
let anexoCount = 1;


function clonarElemento(elementoID, tipo) {
    if (tipo === 'produto') {
        produtoCount++;
    } else if (tipo === 'anexo') {
        anexoCount++;
    }

    const elementoNovo = document.getElementById(elementoID);

    const clone = elementoNovo.cloneNode(true);

    const inputs = clone.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    if (tipo === 'produto') {
        const formSection = clone.querySelector('.form-section');
        formSection.setAttribute('data-title', `Produto - ${produtoCount}`);
        document.getElementById("duplicaProduto").appendChild(clone);
    } else if (tipo === 'anexo') {
        clone.querySelector('label').textContent = `Documento anexo ${anexoCount}`;
        document.getElementById("duplicaAnexos").appendChild(clone);
    }
}

document.getElementById("incluirProdutoBtn").addEventListener("click", function() {
    clonarElemento("produtoNovo", "produto");
});

document.getElementById("incluirAnexoBtn").addEventListener("click", function() {
    clonarElemento("anexoNovo", "anexo");
});
