function filterCards(color) {
    // pego os cards
    const cards = document.querySelectorAll('.content');

    cards.forEach(card => {
        // Mostra todos os cardes apertando em all
        if (color === 'all') {
            card.style.display = 'block';
        } else {
            //  Verifica se o card esta de acordo com a cor da classe
            if (card.classList.contains(color)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
