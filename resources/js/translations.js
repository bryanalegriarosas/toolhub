export const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.tools': 'Tools',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.search_placeholder': 'Search tools...',
        
        // General
        'app.name': 'WebToolStack',
        'loading': 'Loading...',
        'error': 'Error',
        'success': 'Success',
        'cancel': 'Cancel',
        'save': 'Save',
        'delete': 'Delete',
        'edit': 'Edit',
        'close': 'Close',
        
        // Tools
        'tools.title': 'Tools',
        'tools.all_tools': 'All Tools',
        'tools.view_all': 'View all tools',
        'tools.no_tools_found': 'No tools found',
        
        // Search
        'search.placeholder': 'Search tools...',
        'search.no_results': 'No results found',
        'search.results_found': '{count} results found',
        
        // Footer
        'footer.rights': 'All rights reserved',
        
        // Language
        'language.switch_to': 'Switch to {language}',
        'language.current': 'Current language: {language}',
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.tools': 'Herramientas',
        'nav.about': 'Acerca de',
        'nav.contact': 'Contacto',
        'nav.search_placeholder': 'Buscar herramientas...',
        
        // General
        'app.name': 'WebToolStack',
        'loading': 'Cargando...',
        'error': 'Error',
        'success': 'Éxito',
        'cancel': 'Cancelar',
        'save': 'Guardar',
        'delete': 'Eliminar',
        'edit': 'Editar',
        'close': 'Cerrar',
        
        // Tools
        'tools.title': 'Herramientas',
        'tools.all_tools': 'Todas las Herramientas',
        'tools.view_all': 'Ver todas las herramientas',
        'tools.no_tools_found': 'No se encontraron herramientas',
        
        // Search
        'search.placeholder': 'Buscar herramientas...',
        'search.no_results': 'No se encontraron resultados',
        'search.results_found': '{count} resultados encontrados',
        
        // Footer
        'footer.rights': 'Todos los derechos reservados',
        
        // Language
        'language.switch_to': 'Cambiar a {language}',
        'language.current': 'Idioma actual: {language}',
    }
}

export const translate = (key, language = 'en', replacements = {}) => {
    const lang = translations[language] || translations.en
    let text = lang[key] || translations.en[key] || key
    
    // Replace placeholders
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(`{${placeholder}}`, replacements[placeholder])
    })
    
    return text
}
