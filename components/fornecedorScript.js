function criarFornecedor(fornecedorId, fornecedorData = {}) {
    return `
       <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-8">
             <label for="razaoSocial-${fornecedorId}">Razão Social</label>
             <input id="razaoSocial" type="text" class="form-control" value="${fornecedorData.razaoSocial || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4">
             <label for="cnpj-${fornecedorId}">CNPJ</label>
             <input id="cnpj" type="text" class="form-control" value="${fornecedorData.cnpj || ''}" required>
          </div>
       </div>
       <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-8">
             <label for="nomeFantasia-${fornecedorId}">Nome Fantasia</label>
             <input id="nomeFantasia"  type="text" class="form-control" value="${fornecedorData.nomeFantasia || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4">
             <label for="inscricaoEstadual-${fornecedorId}">Inscrição Estadual</label>
             <input id="inscricaoEstadual" type="text" class="form-control" value="${fornecedorData.inscricaoEstadual || ''}">
          </div>
       </div>
       <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-5">
             <label for="cep-${fornecedorId}">CEP</label>
             <input id="cep" type="text" class="form-control" value="${fornecedorData.cep || ''}" onblur="pesquisacep(this.value)" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 offset-md-3">
             <label for="inscricaoMunicipal-${fornecedorId}">Inscrição Municipal</label>
             <input id="inscricaoMunicipal" type="text" class="form-control" value="${fornecedorData.inscricaoMunicipal || ''}">
          </div>
       </div>
       <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-8">
             <label for="endereco-${fornecedorId}">Endereço</label>
             <input id="endereco" type="text" class="form-control" value="${fornecedorData.endereco || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4">
             <label for="numero-${fornecedorId}">Número</label>
             <input id="numero" type="text" class="form-control" value="${fornecedorData.numero || ''}" required>
          </div>
       </div>
       <div class="row">
          <div class="form-group col-md-12">
             <label for="complemento-${fornecedorId}">Complemento</label>
             <input id="complemento" type="text" class="form-control" value="${fornecedorData.complemento || ''}" required>
          </div>
       </div>
       <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-5">
             <label for="bairro-${fornecedorId}">Bairro</label>
             <input id="bairro" type="text" class="form-control" value="${fornecedorData.bairro || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4">
             <label for="municipio-${fornecedorId}">Município</label>
             <input id="municipio" type="text" class="form-control" value="${fornecedorData.municipio || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3">
             <label for="estado-${fornecedorId}">Estado</label>
             <input id="estado" type="text" class="form-control" value="${fornecedorData.estado || ''}" required>
             </div>
       </div>
       <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
             <label for="nomeContato-${fornecedorId}">Nome da Pessoa de Contato</label>
             <input id="nomeContato" type="text" class="form-control" value="${fornecedorData.nomeContato || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3">
             <label for="telefone-${fornecedorId}">Telefone</label>
             <input id="telefone" type="text" class="form-control" value="${fornecedorData.telefone || ''}" required>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3">
             <label for="email-${fornecedorId}">E-mail</label>
             <input id="email" type="email" class="form-control" value="${fornecedorData.email || ''}" required>
          </div>
       </div>`;

 }

function adicionarFornecedor() {
   const fornecedoresContainer = document.getElementById('fornecedoresContainer');
   const novoFornecedorId = 1;
   const novoFornecedorHTML = criarFornecedor(novoFornecedorId);
   fornecedoresContainer.insertAdjacentHTML('beforeend', novoFornecedorHTML);
}

 adicionarFornecedor();