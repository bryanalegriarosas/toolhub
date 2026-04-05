import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import Swal from 'sweetalert2';
import { translate } from './translations.js';

// Initialize dark mode before app mounts
const initializeDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    const html = document.documentElement;
    
    if (savedMode === 'true') {
        html.classList.add('dark');
    } else if (savedMode === 'false') {
        html.classList.remove('dark');
    } else {
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.classList.add('dark');
        }
    }
};

// Initialize dark mode immediately
initializeDarkMode();

// Configure SweetAlert2 defaults
Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .provide('Swal', Swal)
            .provide('translate', translate);
        
        // Initialize language
        const initializeLanguage = () => {
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage) {
                app.config.globalProperties.$language = savedLanguage;
            } else {
                const browserLang = navigator.language.split('-')[0];
                app.config.globalProperties.$language = ['en', 'es'].includes(browserLang) ? browserLang : 'en';
            }
        };
        
        initializeLanguage();
        
        return app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
