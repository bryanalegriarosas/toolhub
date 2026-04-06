export default {
    'htmlMinifier.title': 'Minificador HTML',
    'htmlMinifier.input_html': 'Entrada HTML',
    'htmlMinifier.input_html_placeholder': 'Pega tu código HTML aquí...',
    'htmlMinifier.minify': 'Minificar',
    'htmlMinifier.copy_output': 'Copiar Salida',
    'htmlMinifier.clear_all': 'Limpiar Todo',
    'htmlMinifier.remove_comments': 'Eliminar comentarios',
    'htmlMinifier.remove_extra_whitespace': 'Eliminar espacio en blanco extra',
    'htmlMinifier.preserve_line_breaks': 'Preservar saltos de línea',
    'htmlMinifier.minified_output': 'Salida Minificada',
    'htmlMinifier.statistics': 'Estadísticas',
    'htmlMinifier.original_size': 'Tamaño original:',
    'htmlMinifier.minified_size': 'Tamaño minificado:',
    'htmlMinifier.savings': 'Ahorros:',
    'htmlMinifier.compression_ratio': 'Relación de compresión:',
    'htmlMinifier.paste_your_html_code_here': 'Pega tu código HTML aquí...',
    'htmlMinifier.minified_html_will_appear_here': 'El HTML minificado aparecerá aquí...',
    
    // SEO Content specific to HTML Minifier
    'htmlMinifier.mainDescription': 'Minificador HTML online gratuito con opciones personalizables, compresión en tiempo real y estadísticas detalladas. Perfecto para desarrolladores optimizando rendimiento web.',
    'htmlMinifier.extendedDescription': 'Nuestra herramienta comprehensiva de minificador HTML te ayuda a comprimir código HTML con opciones avanzadas. Incluye eliminación de comentarios, optimización de espacio en blanco, preservación de saltos de línea, configuración de minificación personalizable y estadísticas de compresión detalladas. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'htmlMinifier.features': [
        {
            title: 'Minificación en Tiempo Real',
            description: 'Compresión HTML instantánea mientras escribes con optimización automática'
        },
        {
            title: 'Opciones Personalizables',
            description: 'Configuración de minificación flexible incluyendo eliminación de comentarios, manejo de espacio en blanco y preservación de saltos de línea'
        },
        {
            title: 'Estadísticas de Compresión',
            description: 'Estadísticas detalladas mostrando tamaño original, tamaño minificado, ahorros y relación de compresión'
        },
        {
            title: 'Eliminación de Comentarios',
            description: 'Opcionalmente elimina comentarios HTML mientras preserva funcionalidad'
        },
        {
            title: 'Optimización de Espacio en Blanco',
            description: 'Eliminación inteligente de espacio en blanco con opciones para preservar saltos de línea'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia con un clic de HTML minificado y descarga resultados para producción'
        },
        {
            title: 'Auto-minificación',
            description: 'Minificación automática mientras escribes con opciones configurables'
        },
        {
            title: 'Minificación Segura',
            description: 'Preserva funcionalidad HTML mientras elimina caracteres innecesarios'
        },
        {
            title: 'Soporte de Archivos Grandes',
            description: 'Maneja archivos HTML grandes eficientemente con retroalimentación de progreso'
        },
        {
            title: 'Preservación de Sintaxis',
            description: 'Mantiene sintaxis HTML válida durante todo el proceso de minificación'
        },
        {
            title: 'Compatible con Móvil',
            description: 'Diseño responsivo optimizado para minificación móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la minificación HTML ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'htmlMinifier.steps': [
        'Pega o escribe tu código HTML en el área de entrada',
        'Configura opciones de minificación (comentarios, espacio en blanco, saltos de línea)',
        'Haz clic en "Minificar" para comprimir tu código HTML',
        'Ve estadísticas de compresión y ahorros logrados',
        'Copia o descarga HTML minificado para uso en producción',
        'Usa "Limpiar Todo" para resetear y comenzar nueva minificación'
    ],
    'htmlMinifier.examples': [
        {
            title: 'Documento HTML Básico',
            description: 'Minifica un documento HTML simple con comentarios y espacio en blanco',
            code: 'Entrada: <!DOCTYPE html><html><head><title>Mi Página</title></head><body><h1>Hola Mundo</h1><!-- Este es un comentario --><p>Bienvenido a mi sitio web</p></body></html>',
            result: 'Salida: <!DOCTYPE html><html><head><title>Mi Página</title></head><body><h1>Hola Mundo</h1><p>Bienvenido a mi sitio web</p></body></html>'
        },
        {
            title: 'Optimización HTML de Producción',
            description: 'Optimiza HTML de producción con eliminación agresiva de espacio en blanco',
            code: 'Entrada: <html lang="en"><head><meta charset="UTF-8"><title>Página Optimizada</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="styles.css"></head><body><header><nav><ul><li><a href="#home">Inicio</a></li><li><a href="#about">Acerca de</a></li></ul></nav></body></html>',
            result: 'Salida: <html lang="en"><head><meta charset="UTF-8"><title>Página Optimizada</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="styles.css"></head><body><header><nav><ul><li><a href="#home">Inicio</a></li><li><a href="#about">Acerca de</a></li></ul></nav></body></html>',
            steps: [
                'Pega código HTML de producción',
                'Activa todas las opciones de optimización',
                'Revisa salida minificada para funcionalidad',
                'Descarga HTML optimizado para despliegue'
            ]
        },
        {
            title: 'HTML con Scripts en Línea',
            description: 'Minifica HTML conteniendo JavaScript y CSS',
            code: 'Entrada: <!DOCTYPE html><html><head><script>console.log("Hola");</script><style>body { margin: 0; }</style></head><body><div class="container">Contenido</div></body></html>',
            result: 'Salida: <!DOCTYPE html><html><head><script>console.log("Hola");</script><style>body{margin:0}</style></head><body><div class="container">Contenido</div></body></html>'
        }
    ],
    'htmlMinifier.useCases': [
        {
            title: 'Optimización de Rendimiento Web',
            description: 'Desarrolladores optimizando HTML para tiempos de carga más rápidos y mejor experiencia de usuario',
            example: 'Desarrollador frontend minificando plantillas HTML para despliegue de producción'
        },
        {
            title: 'Despliegue de Producción',
            description: 'Ingenieros DevOps preparando archivos HTML para entornos de producción',
            example: 'Ingeniero DevOps optimizando activos HTML antes del despliegue CDN'
        },
        {
            title: 'Generación de Sitios Estáticos',
            description: 'Desarrolladores optimizando sitios HTML estáticos para mejor rendimiento',
            example: 'Desarrollador JAMstack minificando archivos HTML generados para sitio estático'
        },
        {
            title: 'Optimización de Plantillas Email',
            description: 'Mercadólogos de email optimizando plantillas HTML para tamaños de archivo más pequeños',
            example: 'Desarrollador email minificando plantillas HTML email para mejor entregabilidad'
        },
        {
            title: 'Optimización de Contenido CMS',
            description: 'Administradores de contenido optimizando contenido HTML para mejor rendimiento',
            example: 'Desarrollador WordPress minificando contenido HTML para cargas de página más rápidas'
        },
        {
            title: 'Desarrollo de Aplicaciones Móviles',
            description: 'Desarrolladores móviles optimizando HTML para aplicaciones híbridas',
            example: 'Desarrollador Ionic minificando plantillas HTML para rendimiento de aplicación móvil'
        },
        {
            title: 'Mejora SEO',
            description: 'Especialistas SEO optimizando HTML para mejores rankings en motores de búsqueda',
            example: 'Experto SEO minificando HTML para mejorar velocidad de carga de página y rankings'
        },
        {
            title: 'Revisión de Código',
            description: 'Revisores de código analizando HTML para oportunidades de optimización',
            example: 'Desarrollador senior revisando código HTML para potencial de minificación'
        }
    ],
    'htmlMinifier.technicalDetails': 'Nuestro minificador HTML usa patrones regex avanzados y manipulación de cadenas para eliminar caracteres innecesarios mientras preserva funcionalidad HTML. La herramienta maneja comentarios HTML, espacio en blanco, saltos de línea y proporciona estadísticas en tiempo real. Todo el procesamiento ocurre localmente usando JavaScript moderno con algoritmos seguros de minificación.',
    'htmlMinifier.bestPractices': [
        {
            title: 'Probar Salida Minificada',
            tip: 'Siempre prueba el HTML minificado para asegurar que la funcionalidad se preserve después de la minificación.'
        },
        {
            title: 'Respaldar Código Original',
            tip: 'Mantén una copia de seguridad de los archivos HTML originales antes de aplicar minificación.'
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
    'htmlMinifier.commonErrors': [
        {
            error: 'HTML Roto Después de Minificación',
            cause: 'Minificación agresiva rompiendo estructura HTML o funcionalidad',
            solution: 'Usa configuraciones de minificación conservadoras y prueba la salida exhaustivamente.',
            prevention: 'Prueba HTML minificado en diferentes navegadores y valida estructura HTML.'
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
            cause: 'HTML minificado causando rendimiento más lento debido a compresión subóptima',
            solution: 'Revisa configuraciones de minificación y prueba impacto de rendimiento real.',
            prevention: 'Mide rendimiento antes y después de minificación para asegurar mejoras.'
        },
        {
            error: 'Problemas con CSS y JavaScript',
            cause: 'Minificación afectando estilos y scripts en línea',
            solution: 'Usa configuraciones de minificación apropiadas para contenido con código en línea.',
            prevention: 'Prueba scripts y estilos en línea por separado después de minificación.'
        },
        {
            error: 'Limitaciones de Tamaño de Archivo',
            cause: 'Limitaciones del navegador con archivos HTML muy grandes',
            solution: 'Divide archivos grandes en componentes más pequeños y minifícalos por separado.',
            prevention: 'Mantén archivos HTML individuales de tamaño razonable para mejor rendimiento.'
        }
    ],
    'htmlMinifier.alternatives': [
        {
            name: 'Minificadores de Herramientas de Construcción',
            useCase: 'Plugins de minificación de Webpack, Vite y otras herramientas de construcción',
            pros: 'Flujo de trabajo integrado, Proceso automatizado, Optimización avanzada',
            cons: 'Configuración requerida, Complejidad de construcción, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona minificación instantánea sin configuración de herramienta de construcción.'
        },
        {
            name: 'Minificadores Online',
            useCase: 'Servicios de minificación HTML basados en web',
            pros: 'Acceso multiplataforma, Características adicionales, Sin instalación',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Límites de tamaño de archivo',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y sin límites de tamaño de archivo.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas CLI para minificación y optimización HTML',
            pros: 'Programable, Procesamiento rápido, Integración CI/CD',
            cons: 'Configuración requerida, Conocimiento técnico, Sin GUI',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual.'
        },
        {
            name: 'Extensiones de IDE',
            useCase: 'Extensiones de minificación HTML para editores de código',
            pros: 'Integración con editor, Minificación en tiempo real, Integración de flujo de trabajo',
            cons: 'Específico de IDE, Características limitadas, Instalación de extensión',
            comparison: 'Nuestra herramienta ofrece características comprehensivas sin dependencias de IDE.'
        }
    ],
    'htmlMinifier.relatedTools': [
        {
            name: 'Minificador CSS',
            description: 'Minifica código CSS para mejor rendimiento',
            url: '/css-minifier'
        },
        {
            name: 'Minificador JavaScript',
            description: 'Minifica código JavaScript para optimización',
            url: '/js-minifier'
        },
        {
            name: 'Validador HTML',
            description: 'Valida código HTML para errores de sintaxis',
            url: '/html-validator'
        },
        {
            name: 'Formateador de Código',
            description: 'Formatea y embellece código HTML',
            url: '/html-formatter'
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
    'htmlMinifier.faqs': [
        {
            question: '¿Qué hace la minificación HTML?',
            answer: 'La minificación HTML elimina caracteres innecesarios como espacio en blanco, comentarios y formato de tu código HTML sin cambiar su funcionalidad. Esto reduce el tamaño del archivo y mejora los tiempos de carga de página.'
        },
        {
            question: '¿Sigue siendo válido el HTML minificado?',
            answer: 'Sí, nuestro minificador preserva la validez y funcionalidad HTML. El HTML minificado permanece sintácticamente correcto y completamente funcional.'
        },
        {
            question: '¿Cuánta compresión puedo esperar?',
            answer: 'La compresión varía por estructura HTML, pero típicamente puedes lograr una reducción de tamaño del 10-30%. El HTML bien formateado con mucho espacio en blanco y comentarios comprime más.'
        },
        {
            question: '¿Debería preservar los saltos de línea?',
            answer: 'Preserva los saltos de línea si necesitas mantener legibilidad para depuración o si tu proceso de construcción requiere saltos de línea específicos. Esto puede reducir ligeramente la compresión pero ayuda con el mantenimiento.'
        },
        {
            question: '¿Qué pasa con JavaScript y CSS en línea?',
            answer: 'Nuestro minificador maneja código en línea dentro de HTML, pero sé cauteloso con configuraciones agresivas que podrían afectar la ejecución de scripts o el estilo.'
        },
        {
            question: '¿Puedo personalizar el proceso de minificación?',
            answer: 'Sí, puedes elegir eliminar comentarios, manejar el espacio en blanco diferentemente y preservar saltos de línea basado en tus necesidades específicas.'
        },
        {
            question: '¿Es privado mi código HTML?',
            answer: 'Toda la minificación HTML ocurre directamente en tu navegador. Tu código HTML y resultados minificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué límites de tamaño de archivo existen?',
            answer: 'Nuestra herramienta maneja archivos HTML grandes eficientemente dentro de las limitaciones del navegador. Para archivos muy grandes, considera dividirlos en componentes más pequeños.'
        },
        {
            question: '¿Cómo sé si la minificación funcionó?',
            answer: 'Revisa las estadísticas de compresión mostrando tamaño original, tamaño minificado y porcentaje de ahorros. Prueba el HTML minificado para asegurar que funciona correctamente.'
        }
    ],
    'htmlMinifier.securityNote': 'Toda la minificación HTML ocurre localmente en tu navegador usando JavaScript. Ningún código HTML o resultados minificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'htmlMinifier.additionalContent': 'La minificación HTML es esencial para optimización de rendimiento web, despliegue de producción y mejora de experiencia de usuario. Combina nuestro minificador HTML con otras herramientas como minificadores CSS, minificadores JavaScript y herramientas de prueba de rendimiento para flujos de trabajo comprehensivos de optimización web.'
};
