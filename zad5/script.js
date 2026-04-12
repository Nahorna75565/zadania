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

const formularz = document.getElementById('contactForm');
const komunikatBledu = document.getElementById('errormsg');

formularz.addEventListener('submit', (e) => {
    e.preventDefault();

    const imie = document.getElementById('firstName').value.trim();
    const nazwisko = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const wiadomosc = document.getElementById('message').value.trim();

    let bledy = [];

    const wzorzecKontaktowy = /^[a-zA-ZĄ-ż\s]+$/;
    const wzorzecEmaila = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!imie || !nazwisko || !email || !wiadomosc) {
        bledy.push("Wszystkie pola są obowiązkowe.");
    } else {
        if (!wzorzecKontaktowy.test(imie) || !wzorzecKontaktowy.test(nazwisko)) {
            bledy.push("Imię i nazwisko nie mogą zawierać cyfr.");
        }

        if (!wzorzecEmaila.test(email)) {
            bledy.push("Podaj poprawny adres e-mail.");
        }
    }

    if (bledy.length > 0) {
        komunikatBledu.style.color = "#ffcccc";
        komunikatBledu.innerHTML = bledy.join("<br>");
    } else {
        komunikatBledu.style.color = "#90ee90";
        komunikatBledu.innerText = "Wysłano pomyślnie!";
        console.log("75565: Formularz wysłany poprawnie");
        formularz.reset();
    }
});
