export default {
    'cssMinifier.title': 'Minificador CSS',
    'cssMinifier.input_css': 'Entrada CSS',
    'cssMinifier.input_css_placeholder': 'Pega tu código CSS aquí...',
    'cssMinifier.minify': 'Minificar',
    'cssMinifier.copy_output': 'Copiar Salida',
    'cssMinifier.clear_all': 'Limpiar Todo',
    'cssMinifier.remove_comments': 'Eliminar comentarios',
    'cssMinifier.remove_extra_whitespace': 'Eliminar espacio en blanco extra',
    'cssMinifier.preserve_line_breaks': 'Preservar saltos de línea',
    'cssMinifier.minified_output': 'Salida Minificada',
    'cssMinifier.statistics': 'Estadísticas',
    'cssMinifier.original_size': 'Tamaño original:',
    'cssMinifier.minified_size': 'Tamaño minificado:',
    'cssMinifier.savings': 'Ahorros:',
    'cssMinifier.compression_ratio': 'Relación de compresión:',
    'cssMinifier.paste_your_css_code_here': 'Pega tu código CSS aquí...',
    'cssMinifier.minified_css_will_appear_here': 'El CSS minificado aparecerá aquí...',
    
    // SEO Content specific to CSS Minifier
    'cssMinifier.mainDescription': 'Minificador CSS online gratuito con opciones personalizables, compresión en tiempo real y estadísticas detalladas. Perfecto para desarrolladores optimizando rendimiento web.',
    'cssMinifier.extendedDescription': 'Nuestra herramienta comprehensiva de minificador CSS te ayuda a comprimir código CSS con opciones avanzadas. Incluye eliminación de comentarios, optimización de espacio en blanco, preservación de saltos de línea, configuración de minificación personalizable y estadísticas de compresión detalladas. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'cssMinifier.features': [
        {
            title: 'Minificación CSS en Tiempo Real',
            description: 'Compresión CSS instantánea mientras escribes con optimización automática'
        },
        {
            title: 'Opciones de Minificación Personalizables',
            description: 'Configuración de minificación flexible incluyendo eliminación de comentarios, manejo de espacio en blanco y preservación de saltos de línea'
        },
        {
            title: 'Estadísticas de Compresión',
            description: 'Estadísticas detalladas mostrando tamaño original, tamaño minificado, ahorros y relación de compresión'
        },
        {
            title: 'Eliminación de Comentarios',
            description: 'Opcionalmente elimina comentarios CSS mientras preserva funcionalidad'
        },
        {
            title: 'Optimización de Espacio en Blanco',
            description: 'Eliminación inteligente de espacio en blanco con opciones para preservar saltos de línea y espacios esenciales'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia con un clic de CSS minificado y descarga resultados para producción'
        },
        {
            title: 'Auto-minificación',
            description: 'Minificación automática mientras escribes con opciones configurables'
        },
        {
            title: 'Minificación Segura',
            description: 'Preserva funcionalidad CSS mientras elimina caracteres innecesarios'
        },
        {
            title: 'Soporte de Archivos Grandes',
            description: 'Maneja archivos CSS grandes eficientemente con retroalimentación de progreso'
        },
        {
            title: 'Preservación de Sintaxis',
            description: 'Mantiene sintaxis CSS válida durante todo el proceso de minificación'
        },
        {
            title: 'Compatible con Móvil',
            description: 'Diseño responsivo optimizado para minificación móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la minificación CSS ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'cssMinifier.steps': [
        'Pega o escribe tu código CSS en el área de entrada',
        'Configura opciones de minificación (comentarios, espacio en blanco, saltos de línea)',
        'Haz clic en "Minificar" para comprimir tu código CSS',
        'Ve estadísticas de compresión y ahorros logrados',
        'Copia o descarga CSS minificado para uso en producción',
        'Usa "Limpiar Todo" para resetear y comenzar nueva minificación'
    ],
    'cssMinifier.examples': [
        {
            title: 'Hoja de Estilos CSS Básica',
            description: 'Minifica una hoja de estilos CSS simple con comentarios y espacio en blanco',
            code: 'Entrada: /* Estilos principales */\\n.container {\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    padding: 20px;\\n}\\n\\n.header {\\n    background-color: #ffffff;\\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n}',
            result: 'Salida: .container{max-width:1200px;margin:0 auto;padding:20px}.header{background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.1)}'
        },
        {
            title: 'Optimización CSS de Producción',
            description: 'Optimiza CSS de producción con eliminación agresiva de espacio en blanco',
            code: 'Entrada: :root {\\n    --primary-color: #3498db;\\n    --secondary-color: #2ecc71;\\n    --font-size-base: 16px;\\n}\\n\\n.btn {\\n    padding: 12px 24px;\\n    font-size: var(--font-size-base);\\n    background-color: var(--primary-color);\\n    color: white;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}',
            result: 'Salida: :root{--primary-color:#3498db;--secondary-color:#2ecc71;--font-size-base:16px}.btn{padding:12px 24px;font-size:var(--font-size-base);background-color:var(--primary-color);color:#fff;border:none;border-radius:4px;cursor:pointer}',
            steps: [
                'Pega código CSS de producción',
                'Activa todas las opciones de optimización',
                'Revisa salida minificada para funcionalidad',
                'Descarga CSS optimizado para despliegue'
            ]
        },
        {
            title: 'CSS con Media Queries',
            description: 'Minifica CSS conteniendo consultas de medios responsivos',
            code: 'Entrada: @media (max-width: 768px) {\\n    .container {\\n        padding: 10px;\\n    }\\n}\\n\\n@media (min-width: 769px) {\\n    .container {\\n        padding: 20px;\\n    }\\n}',
            result: 'Salida: @media (max-width:768px){.container{padding:10px}}@media (min-width:769px){.container{padding:20px}}'
        }
    ],
    'cssMinifier.useCases': [
        {
            title: 'Optimización de Rendimiento Web',
            description: 'Desarrolladores optimizando CSS para tiempos de carga más rápidos y mejor experiencia de usuario',
            example: 'Desarrollador frontend minificando hojas de estilos CSS para despliegue de producción'
        },
        {
            title: 'Despliegue de Producción',
            description: 'Ingenieros DevOps preparando archivos CSS para entornos de producción',
            example: 'Ingeniero DevOps optimizando activos CSS antes del despliegue CDN'
        },
        {
            title: 'Generación de Sitios Estáticos',
            description: 'Desarrolladores optimizando archivos CSS estáticos para mejor rendimiento',
            example: 'Desarrollador JAMstack minificando archivos CSS generados para sitio estático'
        },
        {
            title: 'Optimización de Plantillas Email',
            description: 'Mercadólogos de email optimizando CSS para plantillas de email y mejor entregabilidad',
            example: 'Desarrollador email minificando CSS para estilos email en línea'
        },
        {
            title: 'Optimización de Contenido CMS',
            description: 'Administradores de contenido optimizando contenido CSS para mejor rendimiento',
            example: 'Desarrollador WordPress minificando contenido CSS para cargas de página más rápidas'
        },
        {
            title: 'Desarrollo de Aplicaciones Móviles',
            description: 'Desarrolladores móviles optimizando CSS para aplicaciones híbridas',
            example: 'Desarrollador Ionic minificando CSS para rendimiento de aplicación móvil'
        },
        {
            title: 'Mejora SEO',
            description: 'Especialistas SEO optimizando CSS para mejores rankings en motores de búsqueda',
            example: 'Experto SEO minificando CSS para mejorar velocidad de carga de página y rankings'
        },
        {
            title: 'Revisión de Código',
            description: 'Revisores de código analizando CSS para oportunidades de optimización',
            example: 'Desarrollador senior revisando código CSS para potencial de minificación'
        }
    ],
    'cssMinifier.technicalDetails': 'Nuestro minificador CSS usa patrones regex avanzados y manipulación de cadenas para eliminar caracteres innecesarios mientras preserva funcionalidad CSS. La herramienta maneja comentarios CSS, espacio en blanco, saltos de línea y proporciona estadísticas en tiempo real. Todo el procesamiento ocurre localmente usando JavaScript moderno con algoritmos seguros de minificación.',
    'cssMinifier.bestPractices': [
        {
            title: 'Probar Salida Minificada',
            tip: 'Siempre prueba el CSS minificado para asegurar que la funcionalidad se preserve después de la minificación.'
        },
        {
            title: 'Respaldar Código Original',
            tip: 'Mantén una copia de seguridad de los archivos CSS originales antes de aplicar minificación.'
        },
        {
            title: 'Usar Herramientas de Construcción',
            tip: 'Integra la minificación en tu proceso de construcción para optimización automatizada.'
        },
        {
            title: 'Monitorear Rendimiento',
            tip: 'Mide el impacto real de rendimiento de la minificación usando herramientas de rendimiento web.'
        }
    ],
    'cssMinifier.commonErrors': [
        {
            error: 'CSS Roto Después de Minificación',
            cause: 'Minificación agresiva rompiendo estructura CSS o funcionalidad',
            solution: 'Usa configuraciones de minificación conservadoras y prueba la salida exhaustivamente.',
            prevention: 'Prueba CSS minificado en diferentes navegadores y valida sintaxis CSS.'
        },
        {
            error: 'Funcionalidad Perdida',
            cause: 'Eliminación de espacio en blanco esencial o comentarios que afectan renderizado CSS',
            solution: 'Revisa opciones de minificación y preserva espacio en blanco necesario.',
            prevention: 'Usa preservación de saltos de línea y prueba renderizado CSS después de minificación.'
        },
        {
            error: 'Problemas de Codificación',
            cause: 'Problemas de codificación de caracteres durante proceso de minificación',
            solution: 'Asegura codificación UTF-8 apropiada y maneja caracteres especiales correctamente.',
            prevention: 'Usa codificación de caracteres apropiada y prueba con caracteres internacionales.'
        },
        {
            error: 'Regresión de Rendimiento',
            cause: 'CSS minificado causando rendimiento más lento debido a compresión subóptima',
            solution: 'Revisa configuraciones de minificación y prueba impacto de rendimiento real.',
            prevention: 'Mide rendimiento antes y después de minificación para asegurar mejoras.'
        },
        {
            error: 'Problemas de Especificidad CSS',
            cause: 'Minificación afectando especificidad de selector CSS y cascada',
            solution: 'Prueba especificidad CSS después de minificación y ajusta si es necesario.',
            prevention: 'Usa minificación conservadora que preserve estructura de selectores.'
        },
        {
            error: 'Limitaciones de Tamaño de Archivo',
            cause: 'Limitaciones del navegador con archivos CSS muy grandes',
            solution: 'Divide archivos grandes en componentes más pequeños y minifícalos por separado.',
            prevention: 'Mantén archivos CSS individuales de tamaño razonable para mejor rendimiento.'
        }
    ],
    'cssMinifier.alternatives': [
        {
            name: 'Minificadores de Herramientas de Construcción',
            useCase: 'Plugins de minificación CSS de Webpack, Vite y otras herramientas de construcción',
            pros: 'Flujo de trabajo integrado, Proceso automatizado, Optimización avanzada',
            cons: 'Configuración requerida, Complejidad de construcción, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona minificación instantánea sin configuración de herramienta de construcción.'
        },
        {
            name: 'Minificadores Online',
            useCase: 'Servicios de minificación CSS basados en web',
            pros: 'Acceso multiplataforma, Características adicionales, Sin instalación',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Límites de tamaño de archivo',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y sin límites de tamaño de archivo.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas CLI para minificación y optimización CSS',
            pros: 'Programable, Procesamiento rápido, Integración CI/CD',
            cons: 'Configuración requerida, Conocimiento técnico, Sin GUI',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual.'
        },
        {
            name: 'Extensiones de IDE',
            useCase: 'Extensiones de minificación CSS para editores de código',
            pros: 'Integración con editor, Minificación en tiempo real, Integración de flujo de trabajo',
            cons: 'Específico de IDE, Características limitadas, Instalación de extensión',
            comparison: 'Nuestra herramienta ofrece características comprehensivas sin dependencias de IDE.'
        }
    ],
    'cssMinifier.relatedTools': [
        {
            name: 'Minificador HTML',
            description: 'Minifica código HTML para mejor rendimiento',
            url: '/html-minifier'
        },
        {
            name: 'Minificador JavaScript',
            description: 'Minifica código JavaScript para optimización',
            url: '/js-minifier'
        },
        {
            name: 'Validador CSS',
            description: 'Valida código CSS para errores de sintaxis',
            url: '/css-validator'
        },
        {
            name: 'Formateador CSS',
            description: 'Formatea y embellece código CSS',
            url: '/css-formatter'
        },
        {
            name: 'Optimizador de Imágenes',
            description: 'Optimiza imágenes para rendimiento web',
            url: '/image-optimizer'
        },
        {
            name: 'Analizador de Paquetes',
            description: 'Analiza tamaños de paquetes y dependencias',
            url: '/bundle-analyzer'
        },
        {
            name: 'Prueba de Rendimiento',
            description: 'Prueba rendimiento web y optimización',
            url: '/website-speed-test'
        },
        {
            name: 'Auditoría Lighthouse',
            description: 'Ejecuta auditorías comprehensivas de rendimiento web',
            url: '/lighthouse-audit'
        },
        {
            name: 'Verificador de Caché',
            description: 'Verifica caché del navegador y optimización',
            url: '/cache-checker'
        }
    ],
    'cssMinifier.faqs': [
        {
            question: '¿Qué hace la minificación CSS?',
            answer: 'La minificación CSS elimina caracteres innecesarios como espacio en blanco, comentarios y formato de tu código CSS sin cambiar su funcionalidad. Esto reduce el tamaño del archivo y mejora los tiempos de carga de página.'
        },
        {
            question: '¿Sigue siendo válido el CSS minificado?',
            answer: 'Sí, nuestro minificador preserva la validez y funcionalidad CSS. El CSS minificado permanece sintácticamente correcto y completamente funcional.'
        },
        {
            question: '¿Cuánta compresión puedo esperar?',
            answer: 'La compresión varía por estructura CSS, pero típicamente puedes lograr una reducción de tamaño del 15-40%. El CSS bien formateado con mucho espacio en blanco y comentarios comprime más.'
        },
        {
            question: '¿Debería preservar los saltos de línea?',
            answer: 'Preserva los saltos de línea si necesitas mantener legibilidad para depuración o si tu proceso de construcción requiere saltos de línea específicos. Esto puede reducir ligeramente la compresión pero ayuda con el mantenimiento.'
        },
        {
            question: '¿Qué pasa con las variables y funciones CSS?',
            answer: 'Nuestro minificador maneja propiedades personalizadas CSS (variables) y funciones correctamente, preservando su funcionalidad mientras elimina caracteres innecesarios alrededor de ellas.'
        },
        {
            question: '¿Puedo personalizar el proceso de minificación?',
            answer: 'Sí, puedes elegir eliminar comentarios, manejar el espacio en blanco diferentemente y preservar saltos de línea basado en tus necesidades específicas.'
        },
        {
            question: '¿Es privado mi código CSS?',
            answer: 'Toda la minificación CSS ocurre directamente en tu navegador. Tu código CSS y resultados minificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué límites de tamaño de archivo existen?',
            answer: 'Nuestra herramienta maneja archivos CSS grandes eficientemente dentro de las limitaciones del navegador. Para archivos muy grandes, considera dividirlos en componentes más pequeños.'
        },
        {
            question: '¿Cómo sé si la minificación funcionó?',
            answer: 'Revisa las estadísticas de compresión mostrando tamaño original, tamaño minificado y porcentaje de ahorros. Prueba el CSS minificado para asegurar que funciona correctamente.'
        }
    ],
    'cssMinifier.securityNote': 'Toda la minificación CSS ocurre localmente en tu navegador usando JavaScript. Ningún código CSS o resultados minificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'cssMinifier.additionalContent': 'La minificación CSS es esencial para optimización de rendimiento web, despliegue de producción y mejora de experiencia de usuario. Combina nuestro minificador CSS con otras herramientas como minificadores HTML, minificadores JavaScript y herramientas de prueba de rendimiento para flujos de trabajo comprehensivos de optimización web.'
};
