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

