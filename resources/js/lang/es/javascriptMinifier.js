export default {
    'javascriptMinifier.title': 'Minificador JavaScript',
    'javascriptMinifier.input_javascript': 'Entrada JavaScript',
    'javascriptMinifier.input_javascript_placeholder': 'Pega tu código JavaScript aquí...',
    'javascriptMinifier.minify': 'Minificar',
    'javascriptMinifier.copy_output': 'Copiar Salida',
    'javascriptMinifier.clear_all': 'Limpiar Todo',
    'javascriptMinifier.remove_comments': 'Eliminar comentarios',
    'javascriptMinifier.remove_extra_whitespace': 'Eliminar espacio en blanco extra',
    'javascriptMinifier.preserve_line_breaks': 'Preservar saltos de línea',
    'javascriptMinifier.minified_output': 'Salida Minificada',
    'javascriptMinifier.statistics': 'Estadísticas',
    'javascriptMinifier.original_size': 'Tamaño original:',
    'javascriptMinifier.minified_size': 'Tamaño minificado:',
    'javascriptMinifier.savings': 'Ahorros:',
    'javascriptMinifier.compression_ratio': 'Relación de compresión:',
    'javascriptMinifier.paste_your_javascript_code_here': 'Pega tu código JavaScript aquí...',
    'javascriptMinifier.minified_javascript_will_appear_here': 'El JavaScript minificado aparecerá aquí...',
    
    // SEO Content specific to JavaScript Minifier
    'javascriptMinifier.mainDescription': 'Minificador JavaScript online gratuito con opciones personalizables, compresión en tiempo real y estadísticas detalladas. Perfecto para desarrolladores optimizando rendimiento web.',
    'javascriptMinifier.extendedDescription': 'Nuestra herramienta comprehensiva de minificador JavaScript te ayuda a comprimir código JavaScript con opciones avanzadas. Incluye eliminación de comentarios, optimización de espacio en blanco, preservación de saltos de línea, configuración de minificación personalizable y estadísticas de compresión detalladas. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'javascriptMinifier.features': [
        {
            title: 'Minificación JavaScript en Tiempo Real',
            description: 'Compresión JavaScript instantánea mientras escribes con optimización automática'
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
            description: 'Opcionalmente elimina comentarios JavaScript mientras preserva funcionalidad'
        },
        {
            title: 'Optimización de Espacio en Blanco',
            description: 'Eliminación inteligente de espacio en blanco con opciones para preservar saltos de línea y espacios esenciales'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia con un clic de JavaScript minificado y descarga resultados para producción'
        },
        {
            title: 'Auto-minificación',
            description: 'Minificación automática mientras escribes con opciones configurables'
        },
        {
            title: 'Minificación Segura',
            description: 'Preserva funcionalidad JavaScript mientras elimina caracteres innecesarios'
        },
        {
            title: 'Soporte de Archivos Grandes',
            description: 'Maneja archivos JavaScript grandes eficientemente con retroalimentación de progreso'
        },
        {
            title: 'Preservación de Sintaxis',
            description: 'Mantiene sintaxis JavaScript válida durante todo el proceso de minificación'
        },
        {
            title: 'Compatible con Móvil',
            description: 'Diseño responsivo optimizado para minificación móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la minificación JavaScript ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'javascriptMinifier.steps': [
        'Pega o escribe tu código JavaScript en el área de entrada',
        'Configura opciones de minificación (comentarios, espacio en blanco, saltos de línea)',
        'Haz clic en "Minificar" para comprimir tu código JavaScript',
        'Ve estadísticas de compresión y ahorros logrados',
        'Copia o descarga JavaScript minificado para uso en producción',
        'Usa "Limpiar Todo" para resetear y comenzar nueva minificación'
    ],
    'javascriptMinifier.examples': [
        {
            title: 'Función JavaScript Básica',
            description: 'Minifica una función JavaScript simple con comentarios y espacio en blanco',
            code: 'Entrada: function calculateTotal(items) {\\n    let total = 0;\\n    for (let item of items) {\\n        total += item.price * item.quantity;\\n    }\\n    return total;\\n}',
            result: 'Salida: function calculateTotal(items){let total=0;for(let item of items){total+=item.price*item.quantity;}return total;}'
        },
        {
            title: 'Optimización JavaScript de Producción',
            description: 'Optimiza JavaScript de producción con eliminación agresiva de espacio en blanco',
            code: 'Entrada: const API_URL = "https://api.example.com";\\nconst API_KEY = "your-secret-key";\\n\\n// Obtener datos de API\\nasync function fetchData() {\\n    const response = await fetch(API_URL, {\\n        headers: {\\n            "Authorization": `Bearer ${API_KEY}`\\n        }\\n    });\\n    return response.json();\\n}',
            result: 'Salida: const API_URL="https://api.example.com";const API_KEY="your-secret-key";async function fetchData(){const response=await fetch(API_URL,{headers:{"Authorization":`Bearer ${API_KEY}`}});return response.json();}',
            steps: [
                'Pega código JavaScript de producción',
                'Activa todas las opciones de optimización',
                'Revisa salida minificada para funcionalidad',
                'Descarga JavaScript optimizado para despliegue'
            ]
        },
        {
            title: 'JavaScript con Características ES6',
            description: 'Minifica JavaScript conteniendo sintaxis ES6 moderna y funciones de flecha',
            code: 'Entrada: const users = ["Alice", "Bob", "Charlie"];\\nconst activeUsers = users.filter(user => user.isActive);\\nconst totalUsers = activeUsers.length;\\n\\nconsole.log(`Usuarios activos: ${totalUsers}`);\\n',
            result: 'Salida: const users=["Alice","Bob","Charlie"];const activeUsers=users.filter(user=>user.isActive);const totalUsers=activeUsers.length;console.log(`Usuarios activos: ${totalUsers}`);'
        }
    ],
    'javascriptMinifier.useCases': [
        {
            title: 'Optimización de Rendimiento Web',
            description: 'Desarrolladores optimizando JavaScript para tiempos de carga más rápidos y mejor experiencia de usuario',
            example: 'Desarrollador frontend minificando archivos JavaScript para despliegue de producción'
        },
        {
            title: 'Despliegue de Producción',
            description: 'Ingenieros DevOps preparando archivos JavaScript para entornos de producción',
            example: 'Ingeniero DevOps optimizando activos JavaScript antes del despliegue CDN'
        },
        {
            title: 'Generación de Sitios Estáticos',
            description: 'Desarrolladores optimizando archivos JavaScript estáticos para mejor rendimiento',
            example: 'Desarrollador JAMstack minificando archivos JavaScript generados para sitio estático'
        },
        {
            title: 'Desarrollo de Aplicaciones Móviles',
            description: 'Desarrolladores móviles optimizando JavaScript para aplicaciones híbridas',
            example: 'Desarrollador React Native minificando paquetes JavaScript para rendimiento de aplicación móvil'
        },
        {
            title: 'Mejora SEO',
            description: 'Especialistas SEO optimizando JavaScript para mejores rankings en motores de búsqueda',
            example: 'Experto SEO minificando JavaScript para mejorar velocidad de carga de página y rankings'
        },
        {
            title: 'Revisión de Código',
            description: 'Revisores de código analizando JavaScript para oportunidades de optimización',
            example: 'Desarrollador senior revisando código JavaScript para potencial de minificación'
        }
    ],
    'javascriptMinifier.technicalDetails': 'Nuestro minificador JavaScript usa patrones regex avanzados y manipulación de cadenas para eliminar caracteres innecesarios mientras preserva funcionalidad JavaScript. La herramienta maneja comentarios JavaScript, espacio en blanco, saltos de línea y proporciona estadísticas en tiempo real. Todo el procesamiento ocurre localmente usando JavaScript moderno con algoritmos seguros de minificación.',
    'javascriptMinifier.bestPractices': [
        {
            title: 'Probar Salida Minificada',
            tip: 'Siempre prueba el JavaScript minificado para asegurar que la funcionalidad se preserve después de la minificación.'
        },
        {
            title: 'Respaldar Código Original',
            tip: 'Mantén una copia de seguridad de los archivos JavaScript originales antes de aplicar minificación.'
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
    'javascriptMinifier.commonErrors': [
        {
            error: 'JavaScript Roto Después de Minificación',
            cause: 'Minificación agresiva rompiendo estructura JavaScript o funcionalidad',
            solution: 'Usa configuraciones de minificación conservadoras y prueba la salida exhaustivamente.',
            prevention: 'Prueba JavaScript minificado en diferentes navegadores y valida estructura JavaScript.'
        },
        {
            error: 'Funcionalidad Perdida',
            cause: 'Eliminación de espacio en blanco esencial o comentarios que afectan ejecución JavaScript',
            solution: 'Revisa opciones de minificación y preserva espacio en blanco necesario.',
            prevention: 'Usa preservación de saltos de línea y prueba funcionalidad JavaScript después de minificación.'
        },
        {
            error: 'Problemas de Codificación',
            cause: 'Problemas de codificación de caracteres durante proceso de minificación',
            solution: 'Asegura codificación UTF-8 apropiada y maneja caracteres especiales correctamente.',
            prevention: 'Usa codificación de caracteres apropiada y prueba con caracteres internacionales.'
        },
        {
            error: 'Regresión de Rendimiento',
            cause: 'JavaScript minificado causando rendimiento más lento debido a compresión subóptima',
            solution: 'Revisa configuraciones de minificación y prueba impacto de rendimiento real.',
            prevention: 'Mide rendimiento antes y después de minificación para asegurar mejoras.'
        },
        {
            error: 'Problemas de Especificidad JavaScript',
            cause: 'Minificación afectando variables JavaScript y declaraciones de funciones',
            solution: 'Prueba ejecución JavaScript después de minificación y ajusta si es necesario.',
            prevention: 'Usa minificación conservadora que preserve declaraciones de variables.'
        },
        {
            error: 'Limitaciones de Tamaño de Archivo',
            cause: 'Limitaciones del navegador con archivos JavaScript muy grandes',
            solution: 'Divide archivos grandes en componentes más pequeños y minifícalos por separado.',
            prevention: 'Mantén archivos JavaScript individuales de tamaño razonable para mejor rendimiento.'
        }
    ],
    'javascriptMinifier.alternatives': [
        {
            name: 'Minificadores de Herramientas de Construcción',
            useCase: 'Plugins de minificación JavaScript de Webpack, Vite y otras herramientas de construcción',
            pros: 'Flujo de trabajo integrado, Proceso automatizado, Optimización avanzada',
            cons: 'Configuración requerida, Complejidad de construcción, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona minificación instantánea sin configuración de herramienta de construcción.'
        },
        {
            name: 'Minificadores Online',
            useCase: 'Servicios de minificación JavaScript basados en web',
            pros: 'Acceso multiplataforma, Características adicionales, Sin instalación',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Límites de tamaño de archivo',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y sin límites de tamaño de archivo.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas CLI para minificación y optimización JavaScript',
            pros: 'Programable, Procesamiento rápido, Integración CI/CD',
            cons: 'Configuración requerida, Conocimiento técnico, Sin GUI',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual.'
        },
        {
            name: 'Extensiones de IDE',
            useCase: 'Extensiones de minificación JavaScript para editores de código',
            pros: 'Integración con editor, Minificación en tiempo real, Integración de flujo de trabajo',
            cons: 'Específico de IDE, Características limitadas, Instalación de extensión',
            comparison: 'Nuestra herramienta ofrece características comprehensivas sin dependencias de IDE.'
        }
    ],
    'javascriptMinifier.relatedTools': [
        {
            name: 'Minificador HTML',
            description: 'Minifica código HTML para mejor rendimiento',
            url: '/html-minifier'
        },
        {
            name: 'Minificador CSS',
            description: 'Minifica código CSS para optimización',
            url: '/css-minifier'
        },
        {
            name: 'Validador JavaScript',
            description: 'Valida código JavaScript para errores de sintaxis',
            url: '/javascript-validator'
        },
        {
            name: 'Formateador de Código',
            description: 'Formatea y embellece código JavaScript',
            url: '/javascript-formatter'
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
    'javascriptMinifier.faqs': [
        {
            question: '¿Qué hace la minificación JavaScript?',
            answer: 'La minificación JavaScript elimina caracteres innecesarios como espacio en blanco, comentarios y formato de tu código JavaScript sin cambiar su funcionalidad. Esto reduce el tamaño del archivo y mejora los tiempos de carga de página.'
        },
        {
            question: '¿Sigue siendo válido el JavaScript minificado?',
            answer: 'Sí, nuestro minificador preserva la validez y funcionalidad JavaScript. El JavaScript minificado permanece sintácticamente correcto y completamente funcional.'
        },
        {
            question: '¿Cuánta compresión puedo esperar?',
            answer: 'La compresión varía por estructura JavaScript, pero típicamente puedes lograr una reducción de tamaño del 20-40%. El JavaScript bien formateado con mucho espacio en blanco y comentarios comprime más.'
        },
        {
            question: '¿Debería preservar los saltos de línea?',
            answer: 'Preserva los saltos de línea si necesitas mantener legibilidad para depuración o si tu proceso de construcción requiere saltos de línea específicos. Esto puede reducir ligeramente la compresión pero ayuda con el mantenimiento.'
        },
        {
            question: '¿Qué pasa con la sintaxis JavaScript moderna?',
            answer: 'Nuestro minificador maneja sintaxis JavaScript moderna incluyendo características ES6, funciones de flecha y literales de plantilla correctamente mientras mantiene la funcionalidad.'
        },
        {
            question: '¿Puedo personalizar el proceso de minificación?',
            answer: 'Sí, puedes elegir eliminar comentarios, manejar el espacio en blanco diferentemente y preservar saltos de línea basado en tus necesidades específicas.'
        },
        {
            question: '¿Es privado mi código JavaScript?',
            answer: 'Toda la minificación JavaScript ocurre directamente en tu navegador. Tu código JavaScript y resultados minificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué límites de tamaño de archivo existen?',
            answer: 'Nuestra herramienta maneja archivos JavaScript grandes eficientemente dentro de las limitaciones del navegador. Para archivos muy grandes, considera dividirlos en componentes más pequeños.'
        },
        {
            question: '¿Cómo sé si la minificación funcionó?',
            answer: 'Revisa las estadísticas de compresión mostrando tamaño original, tamaño minificado y porcentaje de ahorros. Prueba el JavaScript minificado para asegurar que funciona correctamente.'
        }
    ],
    'javascriptMinifier.securityNote': 'Toda la minificación JavaScript ocurre localmente en tu navegador usando JavaScript. Ningún código JavaScript o resultados minificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'javascriptMinifier.additionalContent': 'La minificación JavaScript es esencial para optimización de rendimiento web, despliegue de producción y mejora de experiencia de usuario. Combina nuestro minificador JavaScript con otras herramientas como minificadores CSS, minificadores HTML y herramientas de prueba de rendimiento para flujos de trabajo comprehensivos de optimización web.'
};
