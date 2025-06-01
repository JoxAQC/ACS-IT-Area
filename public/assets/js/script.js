function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang); // Guarda el idioma en localStorage
    applyLanguage(lang);
    setLanguage(lang);
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });

    // Asegurar que el select refleje el idioma seleccionado
    const languageSelect = document.querySelector(".form-select");
    if (languageSelect) {
        languageSelect.value = lang;
    }
}

// Aplicar el idioma guardado cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    applyLanguage(savedLang);
});


function setLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('name').placeholder = 'Your Name';
        document.getElementById('email').placeholder = 'Your Email';
        document.getElementById('subject').placeholder = 'Subject';
        document.getElementById('message').placeholder = 'Message';
        document.getElementById('submit-btn').textContent = 'Submit';
    } else {
        document.getElementById('name').placeholder = 'Tu Nombre';
        document.getElementById('email').placeholder = 'Tu Email';
        document.getElementById('subject').placeholder = 'Asunto';
        document.getElementById('message').placeholder = 'Mensaje';
        document.getElementById('submit-btn').textContent = 'Enviar';
    }
}




