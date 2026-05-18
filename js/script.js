


// navbarin scrollaus
const navbar =document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY >50) {
        navbar.classList.add('site-header-scrolled');
    } else {
        navbar.classList.remove('site-header-scrolled');
    }
});
