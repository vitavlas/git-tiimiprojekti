


// navbarin scrollaus
const navbar = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('site-header-scrolled');
    } else {
        navbar.classList.remove('site-header-scrolled');
    }
});


// Select all animated elements
const animatedElements = document.querySelectorAll(
    ".animate-text, .animate-image, .animate-card"
);

// Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
        }

    });
}, {
    threshold: 0.2
});

// Observe every element
animatedElements.forEach((element) => {
    observer.observe(element);
});