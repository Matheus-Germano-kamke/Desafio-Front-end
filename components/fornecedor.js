function criarFornecedor(fornecedorId, fornecedorData = {}) {
   return `
    <div class="container-fluid">
       <div class="row">
          <div id="campo1" class="col-xs-12 col-sm-6 col-md-8">
             <label for="razaoSocial-${fornecedorId}">Razão Social</label>
             <input id="razaoSocial" type="text" class="form-control" value="${fornecedorData.razaoSocial || ''}" required onblur="validarCampo('campo1', 'razaoSocial')">
          </div>
          <div id="campo2" class="col-xs-6 col-sm-6 col-md-4">
             <label for="cnpj-${fornecedorId}">CNPJ</label>
             <input id="cnpj" type="number" class="form-control" value="${fornecedorData.cnpj || ''}" required onblur="validarCampo('campo2', 'cnpj')">
          </div>
       </div>
       <div class="row">
          <div id="campo3" class="col-xs-12 col-sm-6 col-md-8">
             <label for="nomeFantasia-${fornecedorId}">Nome Fantasia</label>
             <input id="nomeFantasia"  type="text" class="form-control" value="${fornecedorData.nomeFantasia || ''}" required onblur="validarCampo('campo3', 'nomeFantasia')">
          </div>
          <div id="campo4" class="col-xs-6 col-sm-6 col-md-4">
             <label for="inscricaoEstadual-${fornecedorId}">Inscrição Estadual</label>
             <input id="inscricaoEstadual" type="number" class="form-control" value="${fornecedorData.inscricaoEstadual || ''}">
          </div>
       </div>
       <div class="row">
          <div id="campo5" class="col-xs-6 col-sm-6 col-md-5">
             <label for="cep-${fornecedorId}">CEP</label>
             <input id="cep" type="number" class="form-control" value="${fornecedorData.cep || ''}" onblur="pesquisacep(this.value)" required onblur="validarCampo('campo5', 'cep')">
          </div>
          <div id="campo6" class="col-xs-6 col-sm-6 col-md-4 col-md-offset-3">
             <label for="inscricaoMunicipal-${fornecedorId}">Inscrição Municipal</label>
             <input id="inscricaoMunicipal" type="number" class="form-control" value="${fornecedorData.inscricaoMunicipal || ''}">
          </div>
       </div>
       <div class="row">
          <div id="campo7" class="col-xs-12 col-sm-6 col-md-8">
             <label for="endereco-${fornecedorId}">Endereço</label>
             <input id="endereco" type="text" class="form-control" value="${fornecedorData.endereco || ''}" required onblur="validarCampo('campo7', 'endereco')">
          </div>
          <div id="campo8" class="col-xs-6 col-sm-6 col-md-4">
             <label for="numero-${fornecedorId}">Número</label>
             <input id="numero" type="number" class="form-control" value="${fornecedorData.numero || ''}" required onblur="validarCampo('campo8', 'numero')">
          </div>
       </div>
       <div class="row">
          <div id="campo9" class="form-group col-md-12">
             <label for="complemento-${fornecedorId}">Complemento</label>
             <input id="complemento" type="text" class="form-control" value="${fornecedorData.complemento || ''}" required onblur="validarCampo('campo9', 'complemento')">
          </div>
       </div>
       <div class="row">
          <div id="campo10" class="col-xs-6 col-sm-6 col-md-5">
             <label for="bairro-${fornecedorId}">Bairro</label>
             <input id="bairro" type="text" class="form-control" value="${fornecedorData.bairro || ''}" required onblur="validarCampo('campo10', 'bairro')">
          </div>
          <div id="campo11" class="col-xs-6 col-sm-6 col-md-4">
             <label for="municipio-${fornecedorId}">Município</label>
             <input id="municipio" type="text" class="form-control" value="${fornecedorData.municipio || ''}" required onblur="validarCampo('campo11', 'municipio')">
          </div>
          <div id="campo12" class="col-xs-6 col-sm-6 col-md-3">
             <label for="estado-${fornecedorId}">Estado</label>
             <input id="estado" type="text" class="form-control" value="${fornecedorData.estado || ''}" required onblur="validarCampo('campo12', 'estado')">
             </div>
       </div>
       <div class="row">
          <div id="campo13" class="col-xs-6 col-sm-6 col-md-6">
             <label for="nomeContato-${fornecedorId}">Nome da Pessoa de Contato</label>
             <input id="nomeContato" type="text" class="form-control" value="${fornecedorData.nomeContato || ''}" required onblur="validarCampo('campo13', 'nomeContato')">
          </div>
          <div id="campo14" class="col-xs-6 col-sm-6 col-md-3">
             <label for="telefone-${fornecedorId}">Telefone</label>
             <input id="telefone" type="number" class="form-control" value="${fornecedorData.telefone || ''}" required onblur="validarCampo('campo14', 'telefone')">
          </div>
          <div id="campo15" class="col-xs-6 col-sm-6 col-md-3">
             <label for="email-${fornecedorId}">E-mail</label>
             <input id="email" type="email" class="form-control" value="${fornecedorData.email || ''}" required onblur="validarCampo('campo15', 'email')">
          </div>
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





