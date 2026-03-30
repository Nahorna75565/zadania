const btnMotyw = document.getElementById('przyciskMotywu');
const linkTag = document.querySelector('link[rel="stylesheet"]');

btnMotyw.addEventListener('click', () => {
    if (linkTag.getAttribute('href') === 'green.css') {
        linkTag.setAttribute('href', 'red.css');
    } else {
        linkTag.setAttribute('href', 'green.css');
    }
    console.log("75565: Zmiana motywu");
});

const btnUkryj = document.getElementById('przyciskSekcji');
const sekcjaProjektow = document.getElementById('projectsSection');

btnUkryj.addEventListener('click', () => {
    if (sekcjaProjektow.style.display === 'none') {
        sekcjaProjektow.style.display = 'block';
    } else {
        sekcjaProjektow.style.display = 'none';
    }
    console.log("75565: Przełączenie sekcji");
});