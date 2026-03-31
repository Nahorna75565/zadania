
const themeButton = document.getElementById('przyciskMotywu');
const stylesheetLink = document.querySelector('link[rel="stylesheet"]');

themeButton.addEventListener('click', () => {
    if (stylesheetLink.getAttribute('href') === 'green.css') {
        stylesheetLink.setAttribute('href', 'red.css');
    } else {
        stylesheetLink.setAttribute('href', 'green.css');
    }
    console.log("75565: Zmiana motywu");
});


const toggleSectionButton = document.getElementById('przyciskSekcji');
const projectsSection = document.getElementById('projectsSection');

toggleSectionButton.addEventListener('click', () => {
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
    } else {
        projectsSection.style.display = 'none';
    }
    console.log("75565: Przełączenie sekcji");
});


const formElement = document.getElementById('contactForm');
const errorMessage = document.getElementById('error-message');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let errors = [];
    
    const namePattern = /^[a-zA-ZĄ-ż\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email || !message) {
        errors.push("Wszystkie pola są obowiązkowe.");
    } else {
        if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
            errors.push("Imię i nazwisko nie mogą zawierać cyfr.");
        }
        
        if (!emailPattern.test(email)) {
            errors.push("Podaj poprawny adres e-mail.");
        }
    }

    if (errors.length > 0) {
        errorMessage.style.color = "#ffcccc";
        errorMessage.innerHTML = errors.join("<br>");
    } else {
        errorMessage.style.color = "#90ee90";
        errorMessage.innerText = "Wysłano pomyślnie!";
        console.log("75565: Formularz wysłany poprawnie");
        formElement.reset();
    }
});
async function wczytajDane() {
    try {
        const odpowiedz = await fetch('data.json'); 
        const dane = await odpowiedz.json();        

        const ulUmiejetności = document.getElementById('lista-umiejętności');
        dane.umiejętności.forEach(umiejętność => {
            const li = document.createElement('li');
            li.textContent = umiejętność;
            ulUmiejetności.appendChild(li);
        });


        const ulJęzyki = document.getElementById('lista-języków');
        dane.jezyki.forEach(język => {
            const li = document.createElement('li');
            li.textContent = język;
            ulJęzyki.appendChild(li);
        });

        console.log("Dane zostały pomyślnie wczytane z JSON");
    } catch (error) {
        console.error("Błąd podczas wczytywania danych:", error);
    }
}


window.addEventListener('DOMContentLoaded', wczytajDane);
