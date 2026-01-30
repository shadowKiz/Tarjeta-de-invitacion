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
    window.open(
        "https://https://www.google.com/maps/@19.3881779,-99.2777557,3a,75y,20.78h,72.62t/data=!3m5!1e1!3m3!1sCgjuswgot_EN0mQt5-CPww!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DCgjuswgot_EN0mQt5-CPww%26w%3D900%26h%3D600%26ll%3D0.0,0.0%26yaw%3D20.0%26pitch%3D18.0%26thumbfov%3D98%26cb_client%3Dgmm.iv.android?utm_source=mstt_0&g_ep=CAESBjI2LjQuMRgAIIGBASqTASw5NDI2NzcyNyw5NDI3NTQwNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsOTQyODQ0NzIsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzkxNDc5LDEwMDc5NjE5M0ICTVg%3D&skid=09d4bfbb-c75b-49d1-9d1c-9c590f25868a",
        "_blank"
    );
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

