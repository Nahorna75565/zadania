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


async function wczytajDane() {
    try {
        const otrzymane = await fetch('./data.json');

        if (!otrzymane.ok) {
            throw new Error("75565: Nie znaleziono pliku data.json");
        }

        const dane = await otrzymane.json();


        const listaUmiejetnosci = document.getElementById('lista-umiejetnosci');
        listaUmiejetnosci.innerHTML = ""; 
        dane.umiejetnosci.forEach(umiejetnosc => {
            const item = document.createElement('li');
            item.textContent = umiejetnosc;
            listaUmiejetnosci.appendChild(item);
        });

        const listaJezykow = document.getElementById('lista-jezykow');
        listaJezykow.innerHTML = ""; 
        dane.jezyki.forEach(jezyk => {
            const item = document.createElement('li');
            item.textContent = jezyk;
            listaJezykow.appendChild(item);
        });

        console.log("75565: Dane z JSON zostały wczytane poprawnie");
    } catch (error) {
        console.error("75565: Błąd:", error);
    }
}


const UPDATE_KEY = 'Notatki_75565'; 

const poleNotatki = document.getElementById('pole-notatki');
const przyciskDodaj = document.getElementById('przycisk-dodaj');
const listaNotatek = document.getElementById('lista-dla-notatek');

function odswiezNotatki() {
    const otrzymanedane = JSON.parse(localStorage.getItem(UPDATE_KEY)) || [];
    
    listaNotatek.innerHTML = ''; 
    
    otrzymanedane.forEach((tresc, id) => {
        const item = document.createElement('li');
        item.className = 'note-item';
        item.innerHTML = `
            <span>${tresc}</span>
            <button class="delete-note-btn" onclick="usunNotatke(${id})">Usuń</button>
        `;
        listaNotatek.appendChild(item);
    });
}

przyciskDodaj.addEventListener('click', () => {
    const tekst = poleNotatki.value.trim();
    
    if (tekst !== '') {
        const otrzymanedane = JSON.parse(localStorage.getItem(UPDATE_KEY)) || [];
        otrzymanedane.push(tekst);
        
        localStorage.setItem(UPDATE_KEY, JSON.stringify(otrzymanedane));
        
        poleNotatki.value = ''; 
        odswiezNotatki();        
        console.log("75565: Dodano notatkę do LocalStorage");
    }
});

window.usunNotatke = function(id) {
    const otrzymanedane = JSON.parse(localStorage.getItem(UPDATE_KEY)) || [];
    otrzymanedane.splice(id, 1);
    
    localStorage.setItem(UPDATE_KEY, JSON.stringify(otrzymanedane));
    odswiezNotatki();
    console.log("75565: Usunięto notatkę z LocalStorage");
};

window.addEventListener('DOMContentLoaded', () => {
    console.log("75565: DOM załadowany, uruchamianie funkcji...");
    wczytajDane();
    odswiezNotatki();
});