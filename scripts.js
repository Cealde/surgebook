document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.crafting-button');
    const expandedImage = document.getElementById('expanded-image');
    const buttonSound = document.getElementById('button-sound');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const imageSrc = button.getAttribute('data-image');
            const soundSrc = button.getAttribute('data-sound');
            expandedImage.src = `images/${imageSrc}`; // Adjust the path as necessary
            buttonSound.src = `sounds/${soundSrc}`; // Adjust the path as necessary
            buttonSound.play();
        });
    });
});
