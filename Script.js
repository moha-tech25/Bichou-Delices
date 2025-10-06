
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fermer le menu après sélection d'un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});