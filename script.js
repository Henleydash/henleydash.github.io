// Exemple : Animation simple au défilement
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

console.log("Bienvenue sur la plateforme Tech !");
