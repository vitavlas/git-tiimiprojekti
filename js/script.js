


// navbarin scrollaus
const navbar =document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY >50) {
        navbar.classList.add('site-header-scrolled');
    } else {
        navbar.classList.remove('site-header-scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // haetaan toggle-elementti ja body
    const toggle = document.getElementById("toggle");
    const body = document.body;

    // Lataa tallennettu teema ensin
    const savedTheme = localStorage.getItem("theme");

    const isDark = savedTheme === "dark";

    // Käytä teemaa latauksen aikana
    setTheme(isDark);

    // kun toggle vaihtuu, päivitetään teema
    toggle.addEventListener("change", () => {
        setTheme(toggle.checked);
    });

    function setTheme(isDark) {
        body.classList.toggle("dark-mode", isDark);

        // talennetaan teema localStorageen
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // säilytetään toggle-tilan synkronointi
        if (toggle) toggle.checked = isDark;
    }
});