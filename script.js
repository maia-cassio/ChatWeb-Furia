// Inicialização do vídeo e música
const video = document.getElementById("furia-video");
const music = document.getElementById("csgo-music");

// Controlar a navegação entre as seções (Tabs)
const tabs = document.querySelectorAll('.tablink');
const sections = document.querySelectorAll('.tabcontent');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remover a classe ativa de todas as seções
        sections.forEach(section => section.classList.remove('active'));

        // Adicionar a classe ativa à seção correspondente
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Para abrir a primeira seção por padrão
document.querySelector('.tablink').click();

