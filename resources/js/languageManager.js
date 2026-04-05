import { ref, computed } from 'vue';
import { translations } from './lang/index.js';

// Estado global del idioma
const currentLanguage = ref('en');

// Función para cambiar el idioma
export const setLanguage = (language) => {
    if (translations[language]) {
        currentLanguage.value = language;
        // Guardar preferencia en localStorage
        localStorage.setItem('preferred-language', language);
    }
};

// Función para obtener el idioma actual
export const getCurrentLanguage = () => currentLanguage.value;

// Función para inicializar el idioma desde localStorage o navigator
export const initializeLanguage = () => {
    const saved = localStorage.getItem('preferred-language');
    if (saved && translations[saved]) {
        currentLanguage.value = saved;
    } else {
        // Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            currentLanguage.value = browserLang;
        }
    }
};

// Función de traducción reactiva
export const t = (key, replacements = {}) => {
    const lang = translations[currentLanguage.value] || translations.en;
    let text = lang[key] || translations.en[key] || key;
    
    // Reemplazar placeholders
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    });
    
    return text;
};

// Computed property reactiva para componentes
export const useTranslations = () => {
    return {
        currentLanguage: computed(() => currentLanguage.value),
        t,
        setLanguage,
        getCurrentLanguage
    };
};

// Lista de idiomas disponibles
export const availableLanguages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' }
];

// Inicializar al importar
initializeLanguage();
