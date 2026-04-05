import translations from './lang/en/index.js';

export const translate = (key, language = 'en', replacements = {}) => {
    const lang = translations[language] || translations.en
    let text = lang[key] || translations.en[key] || key
    
    // Replace placeholders
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(`{${placeholder}}`, replacements[placeholder])
    })
    
    return text;
};
