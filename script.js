window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    // Altri elementi nascosti (es. scritte)
    const scritte = document.querySelectorAll('.scritta-nascosta');

    scritte.forEach(function(el) {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visibile');
        }
    });
    
    // Gestione link "Prenota"
    const link = document.getElementById("prenotaLink");
    if (link) {
        const isMobile = /iPhone|Android|iPad|Mobile/i.test(navigator.userAgent);
        if (isMobile) {
            link.href = "https://wa.me/393520026039?text=Ciao!%20Vorrei%20sapere%20se%20è%20possibile%20prenotare%20un%20tavolo%20presso%20la%20vostra%20pizzeria.%20Grazie!";
            link.target = "_blank";
        } else {
            link.href = "prenota.html"; // ← Cambia questo se hai un URL specifico
            link.target = "_self";
        }
    }
});
    
// In caso siano già visibili al caricamento
window.addEventListener('load', function () {
    window.dispatchEvent(new Event('scroll'));

    // Gestione link "Prenota"
    const link = document.getElementById("prenotaLink");
    if (link) {
        const isMobile = /iPhone|Android|iPad|Mobile/i.test(navigator.userAgent);
        if (isMobile) {
            link.href = "https://wa.me/393520026039?text=Ciao!%20Vorrei%20sapere%20se%20è%20possibile%20prenotare%20un%20tavolo%20presso%20la%20vostra%20pizzeria.%20Grazie!";
            link.target = "_blank";
        } else {
            link.href = "prenota.html"; // ← Cambia questo se hai un URL specifico
            link.target = "_self";
        }
    }
});

window.addEventListener('resize', () => {
  // Rilancia tutto se necessario
  window.dispatchEvent(new Event('scroll'));
});