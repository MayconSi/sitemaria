document.getElementById('revealButton').addEventListener('click', () => {
    const curiosityText = document.getElementById('curiosityText');
    curiosityText.style.display = curiosityText.style.display === 'none' ? 'block' : 'none';
});