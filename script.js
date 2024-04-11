
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeButton = document.getElementById('closeButton');

    hamburgerButton.addEventListener('click', function() {
        menuOverlay.style.display = 'block';
        document.querySelector('.menu').classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        menuOverlay.style.display = 'none';
        document.querySelector('.menu').classList.remove('active');
    });
});