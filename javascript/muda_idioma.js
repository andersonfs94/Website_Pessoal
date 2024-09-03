document.addEventListener('DOMContentLoaded', function() {
    const languageToggleButton = document.getElementById('language-toggle');

    if (!languageToggleButton) {
        console.error('Language toggle button not found.');
        return;
    }

    let currentLanguage = localStorage.getItem('language') || 'pt';

    function updateText(language) {
        document.querySelectorAll('[data-pt], [data-en]').forEach(el => {
            const text = el.getAttribute(`data-${language}`);
            if (text) {
                el.textContent = text;
            } else {
                console.error(`Text for language "${language}" not found for element`, el);
            }
        });
    }

    updateText(currentLanguage);

    languageToggleButton.addEventListener('click', function() {
        currentLanguage = (currentLanguage === 'pt') ? 'en' : 'pt';
        localStorage.setItem('language', currentLanguage);
        languageToggleButton.setAttribute('data-language', currentLanguage);
        languageToggleButton.textContent = (currentLanguage === 'pt') ? 'Change to English' : 'Mudar para o Português';
        updateText(currentLanguage);
    });

    languageToggleButton.textContent = (currentLanguage === 'pt') ? 'Change to English' : 'Mudar para o Português';
});