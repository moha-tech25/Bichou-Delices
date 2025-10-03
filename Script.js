
const hamburger = document.querySelector('.hamburger'); // sélectionne le bouton hamburger
const nav = document.querySelector('.nav');             // sélectionne la nav principale

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');                     // ajoute ou enlève la classe "active"
});
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // ferme le menu après sélection
    });
});
