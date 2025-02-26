anime({
    targets: '#perfil img',
    translateX: 250,
    easing: 'easeInOutQuad',
    duration: 1000
});

function searchFunction() {
    let input = document.getElementById('search').value.toLowerCase();

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block"; // Mostra o item que corresponde à pesquisa
        } else {
            item.style.display = "none"; // Esconde os itens que não correspondem
        }
    });
}
function loadPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo suavemente
        content.innerHTML = "<h1>Home Page</h1><p>Bem-vindo!</p>";
    } else if (page === 'about') {
        content.innerHTML = "<h1>About Page</h1><p>Essa é a página Sobre.</p>";
    } else if (page === 'resume') {
        content.innerHTML = "<h1>Resume Page</h1><p>Entre em contato conosco.</p>";
    } else if (page === 'contact') {
        content.innerHTML = "<h1>Contact Page</h1><p>Resume</p>";
    }
}