


// navbarin scrollaus
const navbar =document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY >50) {
        navbar.classList.add('site-header-scrolled');
    } else {
        navbar.classList.remove('site-header-scrolled');
    }
});

// dark mode toggle
window.onload = function () {
    // Haetaan tarvittavat elementit
    const toggle = document.getElementById('toggle');
    const body = document.body;
    const kortit = document.querySelectorAll('.member-card');
    const hero = document.querySelector('.hero');
    const profiili = document.querySelector('.profile');
    const tekstit = document.querySelectorAll('h1, h2, h3, p, a');

// Kuunnellaan toggle-kytkimen tilaa ja muutetaan tyylejä sen mukaan
    toggle.addEventListener('change', function () {
        // Jos toggle on päällä, lisätään dark-mode-luokka bodyyn ja muihin elementteihin
        if (this.checked) {

            body.classList.add('dark-mode');

            kortit.forEach(kortit => {
                kortit.classList.add('dark-mode');
            });

            hero?.classList.add('dark-mode');
            profiili?.classList.add('dark-mode');
            tekstit.forEach(teksti => {
                teksti.classList.add('dark-mode');
            });
        } else {
            // Jos toggle on pois päältä, poistetaan dark-mode-luokka bodyltä ja muilta elementeiltä
            body.classList.remove('dark-mode');

            kortit.forEach(kortit => {
                kortit.classList.remove('dark-mode');
            });

            hero?.classList.remove('dark-mode');
            profiili?.classList.remove('dark-mode');
            tekstit.forEach(teksti => {
                teksti.classList.remove('dark-mode');
            });
        }
    });

};
