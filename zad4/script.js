const redgreenButton = document.getElementById('przyciskMotywu');
const stylesheetLink = document.querySelector('link[rel="stylesheet"]');

redgreenButton.addEventListener('click', () => {
    if (stylesheetLink.getAttribute('href') === 'green.css') {
        stylesheetLink.setAttribute('href', 'red.css');
    } else {
        stylesheetLink.setAttribute('href', 'green.css');
    }
    console.log("75565: Zmiana motywu");
});

const przyciskSekcji = document.getElementById('przyciskSekcji');
const sekcjaProjektow = document.getElementById('sekcjaProjektow');

przyciskSekcji.addEventListener('click', () => {
    const czyUkryta = getComputedStyle(sekcjaProjektow).display === 'none';
    sekcjaProjektow.style.display = czyUkryta ? 'block' : 'none';
    console.log("75565: Przełączenie sekcji");
});