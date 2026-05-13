


// navbarin scrollaus
const navbar =document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY >50) {
        navbar.classList.add('site-header-scrolled');
    } else {
        navbar.classList.remove('site-header-scrolled');
    }
});


const HamBurg = document.getElementById("HamIcon");
const x = document.getElementById("myLinks");

HamBurg.addEventListener("click", () => {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
    x.style.display = "block";
  }
});