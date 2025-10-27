
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});


document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            

            if (entry.target.classList.contains('menu')) {
                const menuItems = entry.target.querySelectorAll('li');
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 150);
                });
            }
            
            if (entry.target.id === 'produits') {
                const productItems = entry.target.querySelectorAll('li');
                productItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 150);
                });
            }
            
            if (entry.target.id === 'mets-sur-commande') {
                const commandeItems = entry.target.querySelectorAll('li');
                commandeItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 150);
                });
            }
            
            if (entry.target.classList.contains('galerie')) {
                const galleryItems = entry.target.querySelectorAll('.galerie-grid div');
                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
            }
            
            if (entry.target.classList.contains('contact')) {
                const contactItems = entry.target.querySelectorAll('.display');
                contactItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

const sectionsToObserve = document.querySelectorAll('.a_propos, .menu, #produits, #mets-sur-commande, .galerie, .contact');
sectionsToObserve.forEach(section => {
    observer.observe(section);
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});