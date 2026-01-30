// ⏳ CONTADOR (11 de abril – ejemplo 2026)
const fechaEvento = new Date(2026, 3, 11, 16, 0).getTime();
const contador = document.getElementById("contador");

setInterval(() => {
    const ahora = new Date().getTime();
    const diff = fechaEvento - ahora;

    if (diff <= 0) {
        contador.innerHTML = "🎉 ¡Hoy es el gran día! 🎉";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    contador.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// 📍 MAPS (ejemplo)
function irUbicacion() {
    location.href = "https://maps.app.goo.gl/QsnjudJhASBX1g1p8";
}


// 📲 CONFIRMAR
function confirmar() {
    window.open(
        "https://wa.me/5613820343?text=Hola,%20confirmo%20mi%20asistencia%20al%20cumple%20de%20Derek%20Jacob%20🎉",
        "_blank"
    );
}

// 🎵 MÚSICA
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
let activa = false;

document.addEventListener("click", () => {
    if (!activa) {
        musica.play();
        activa = true;
        btnMusica.innerHTML = "🔈";
    }
}, { once: true });

btnMusica.addEventListener("click", (e) => {
    e.stopPropagation();
    if (musica.paused) {
        musica.play();
        btnMusica.innerHTML = "🔈";
    } else {
        musica.pause();
        btnMusica.innerHTML = "🔇";
    }
});



