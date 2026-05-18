// Hakee kaikki kortit

const kortit = document.querySelectorAll(".kortti");

// Pysäyttää edellisen kortin äänen jos uusi lähtee soimaan
function pysaytaAani(kortti) {
    if (kortti.aani) {
        kortti.aani.pause();
        kortti.aani.currentTime = 0;
    }
}

// Pysäyttää videon kun kortti suljetaan
function pysaytaVideo(kortti) {
    const video = kortti.querySelector("video");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Alustus
kortit.forEach(kortti => {

    // luo äänen
    if (kortti.dataset.audio) {
        kortti.aani = new Audio(kortti.dataset.audio);
    }

    kortti.addEventListener("click", (e) => {

    // Jos klikataan Spotify-kortin sisällä, ei käännä korttia uudestaan
    if (kortti.classList.contains("spotify")) {
        
        // Sallitaan vain etupuolen klikkaus avatessa
        if (kortti.classList.contains("kaannetty")) {
            return;
        }
    }

const avattu = kortti.classList.toggle("kaannetty");

        // Jos kortti suljetaan:
        if (!avattu) {
            pysaytaAani(kortti);
            pysaytaVideo(kortti);
            return;
        }
        
        //Pysäyttää vain äänen
        kortit.forEach(k => {
            if (k !== kortti) {
                pysaytaAani(k);
            }
        });


        // Käynnistää äänen
        if (kortti.aani) {
            kortti.aani.currentTime = 0;
            kortti.aani.play().catch(() => {});
        }

        //Käynnistää videon
        const video = kortti.querySelector("video");
        
        if (video && kortti.classList.contains("hero")) {
            setTimeout(() => {
                video.currentTime = 0;
                video.play();
            }, 400);
        }
    });
});


//Kolmannen kortin valintanapit
document.querySelectorAll(".valinta-nappi").forEach(nappi => {
    nappi.addEventListener("click", (e) => {
        e.stopPropagation();

        const targetId = nappi.dataset.target;
        const kohde = document.getElementById(targetId);

        if (!kohde) return;

       //Tässä myös pitää pysäyttää muut äänet ettei tule päällekkäisyyksiä
       kortit.forEach(k => {
        if (k !== kohde) {
        pysaytaAani(k);
    }
});

// Avaa valitun
kohde.classList.add("kaannetty");

// Tarkistaa onko kortille liitetty ääni
if (kohde.aani) {
    kohde.aani.currentTime = 0;
    kohde.aani.play().catch(() => {});
}

    // Näkymä vierittyy valittuun korttiin
    kohde.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});

// Valitsee Spotify-kortin
document.querySelectorAll(".kortti.spotify").forEach(kortti => {
    
    const tausta = kortti.querySelector(".tausta");

    tausta.addEventListener("click", (e) => {
        e.stopPropagation(); //Kortti ei käänny uudestaan kun sitä klikkaa

        // Avataan vain jos kortti on jo käännetty
        if (kortti.classList.contains("kaannetty")) {
            window.open(
                "https://open.spotify.com/playlist/7DN5Cm52j12aDQowm1uZ4e",
                "_blank"
            );
        }
    });

});