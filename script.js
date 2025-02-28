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
            item.style.display = "none"; // Esconde os itens que não corresponde
        }
    });
}
