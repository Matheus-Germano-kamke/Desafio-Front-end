
document.addEventListener("DOMContentLoaded", function() {
    // Pega os elementos
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    var loader = document.getElementById("loading");
    var successMessage = document.getElementById("successMessage");

    // Inicialmente, o modal deve estar escondido
    modal.style.display = "none";

    // Função para abrir o modal
    function openModal(data) {
        modal.style.display = "flex";
        loader.style.display = "block";
        successMessage.style.display = "none";

        // Após 5 segundos, esconde o loader e mostra a mensagem de sucesso
        setTimeout(function() {
            loader.style.display = "none";
            successMessage.style.display = "block";
            console.log(data)
        }, 2000);
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Adiciona um listener para o evento personalizado
    document.addEventListener("openModalEvent", function(event) {
        openModal(event.detail); // Chama a função para abrir o modal
    });

    // Quando o "X" é clicado, fecha o modal
    span.addEventListener("click", closeModal);

    // Quando o usuário clicar fora do modal, fecha o modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});