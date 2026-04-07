export default {
    'urlEncoder.title': 'Codificador URL - Herramienta Online Gratuita',
    'urlEncoder.auto': 'Auto',
    'urlEncoder.load_file': 'Cargar archivo:',
    'urlEncoder.encode': 'Codificar',
    'urlEncoder.copy': 'Copiar',
    'urlEncoder.download': 'Descargar',
    'urlEncoder.clear': 'Limpiar',
    'urlEncoder.history': 'Historial',
    'urlEncoder.download_all': 'Descargar Todo',
    'urlEncoder.clear_history': 'Limpiar Historial',
    'urlEncoder.paste_text_here': 'Pega texto aquí...',
    
    // SEO Content specific to URL Encoder
    'urlEncoder.mainDescription': 'Herramienta de codificación URL online gratuita con codificación de texto, soporte de archivos y conversión instantánea. Perfecta para desarrollo web e integración de API.',
    'urlEncoder.extendedDescription': 'Nuestra herramienta comprehensiva de codificación URL te ayuda a convertir texto a codificación segura para URL instantáneamente. Incluye procesamiento automático, soporte de carga de archivos, seguimiento de historial y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'urlEncoder.features': [
        {
            title: 'Codificación URL Instantánea',
            description: 'Convierte texto a codificación segura para URL instantáneamente con procesamiento y resultados en tiempo real'
        },
        {
            title: 'Modo de Procesamiento Automático',
            description: 'Habilita el procesamiento automático para codificación URL automática mientras escribes'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto directamente para rápida codificación y conversión URL'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para fácil compartir y pegar'
        },
        {
            title: 'Descargar Resultados',
            description: 'Descarga resultados codificados URL como archivos de texto para documentación'
        },
        {
            title: 'Historial de Codificación',
            description: 'Rastrea tu historial de codificación con funcionalidad de copia y descarga'
        },
        {
            title: 'Soporte Unicode',
            description: 'Maneja caracteres especiales, texto internacional y Unicode correctamente'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Diseño responsivo optimizado para codificación móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la codificación ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'urlEncoder.steps': [
        'Ingresa o pega tu texto en el campo de entrada',
        'Haz clic en el botón "Codificar" o habilita el procesamiento automático para codificación automática',
        'Ve el resultado codificado URL instantáneamente',
        'Copia al portapapeles o descarga el resultado codificado',
        'Usa el historial para rastrear y gestionar codificaciones anteriores'
    ],
    'urlEncoder.examples': [
        {
            title: 'Codificación de Parámetros URL',
            description: 'Codifica caracteres especiales en parámetros de consulta URL',
            code: 'search?q=hello world & page=1&category=web development',
            result: 'search%3Fq%3Dhello%20world%20%26%20page%3D1%26category%3Dweb%20development'
        },
        {
            title: 'Codificación de Rutas de Archivo',
            description: 'Codifica rutas de archivo con caracteres especiales para URLs',
            code: 'C:/Users/John Doe/Documents/file name.txt',
            result: 'C%3A%2FUsers%2FJohn%20Doe%2FDocuments%2Ffile%20name.txt'
        },
        {
            title: 'Codificación de Caracteres Especiales',
            description: 'Maneja espacios, símbolos y caracteres internacionales',
            code: 'Café & Restaurant (Main St)',
            result: 'Caf%C3%A9%20%26%20Restaurant%20%28Main%20St%29',
            steps: [
                'Pega texto con caracteres especiales',
                'Haz clic en el botón "Codificar"',
                'Copia el resultado seguro para URL',
                'Usa en enlaces o solicitudes API'
            ]
        }
    ],
    'urlEncoder.useCases': [
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores codificando parámetros URL para aplicaciones web y APIs',
            example: 'Desarrollador frontend codificando parámetros de consulta para solicitudes API'
        },
        {
            title: 'Integración de API',
            description: 'Codificando datos para transmisión segura en endpoints API y servicios web',
            example: 'Desarrollador backend codificando entrada de usuario para transmisión de parámetros API'
        },
        {
            title: 'Generación de Enlaces',
            description: 'Creando URLs seguras con caracteres especiales para compartir e incrustar',
            example: 'Equipo de marketing creando enlaces compartibles con caracteres especiales'
        },
        {
            title: 'Transmisión de Datos',
            description: 'Transmitiendo datos de texto de forma segura sobre protocolos HTTP',
            example: 'Administrador de sistema codificando datos de configuración para transmisión URL'
        },
        {
            title: 'Procesamiento de Formularios',
            description: 'Codificando datos de formulario para envío a servidores web',
            example: 'Desarrollador web codificando entradas de formulario para envío seguro'
        },
        {
            title: 'Gestión de Contenido',
            description: 'Codificando nombres de archivo y rutas para almacenamiento y recuperación web',
            example: 'Desarrollador CMS codificando rutas de archivo para sistemas de almacenamiento web'
        }
    ],
    'urlEncoder.technicalDetails': 'Nuestro codificador URL usa la función incorporada encodeURIComponent() de JavaScript con manejo Unicode apropiado. La herramienta procesa codificación URL, maneja caracteres especiales correctamente y proporciona conversión en tiempo real. Todo el procesamiento ocurre localmente usando algoritmos de codificación eficientes para rendimiento óptimo.',
    'urlEncoder.bestPractices': [
        {
            title: 'Codificación de Caracteres',
            tip: 'Asegura codificación UTF-8 apropiada para caracteres internacionales y símbolos especiales.'
        },
        {
            title: 'Límites de Longitud URL',
            tip: 'Ten en cuenta los límites de longitud URL en diferentes navegadores y servidores (típicamente 2048 caracteres).'
        },
        {
            title: 'Codificación Selectiva',
            tip: 'Solo codifica caracteres que necesiten codificación para mantener legibilidad cuando sea posible.'
        },
        {
            title: 'Pruebas de URLs',
            tip: 'Siempre prueba URLs codificadas en tu entorno objetivo para asegurar funcionalidad apropiada.'
        }
    ],
    'urlEncoder.commonErrors': [
        {
            error: 'Codificación de Caracteres Inválida',
            cause: 'El texto contiene caracteres inválidos o codificación impropia',
            solution: 'Asegura que el texto use codificación UTF-8 apropiada y caracteres válidos.',
            prevention: 'Valida el texto de entrada antes de la codificación y maneja caracteres especiales correctamente.'
        },
        {
            error: 'Longitud URL Excedida',
            cause: 'La URL codificada excede los límites de longitud máxima para navegadores o servidores',
            solution: 'Acorta URLs o usa métodos alternativos para transmisión de datos grandes.',
            prevention: 'Monitorea la longitud URL e implementa acortamiento de URLs para URLs largas.'
        },
        {
            error: 'Doble Codificación',
            cause: 'Aplicando codificación URL a texto ya codificado',
            solution: 'Decodifica primero si es necesario, luego aplica codificación única.',
            prevention: 'Verifica si el texto ya está codificado antes de aplicar codificación.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'Usando métodos incompatibles para codificación URL',
            solution: 'Usa la función estándar encodeURIComponent() para compatibilidad multi-navegador.',
            prevention: 'Prueba la codificación en diferentes navegadores y entornos.'
        }
    ],
    'urlEncoder.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Comandos de codificación URL en sistemas Unix/Linux y PowerShell',
            pros: 'Disponibilidad incorporada, Programable, Procesamiento por lotes',
            cons: 'Conocimiento técnico requerido, Sin GUI, Sintaxis compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'Bibliotecas de codificación URL en Python, Java, JavaScript y otros lenguajes',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece codificación instantánea sin requisitos de programación.'
        },
        {
            name: 'Servicios de Codificación Online',
            useCase: 'Servicios de codificación URL basados en web',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Herramientas de Desarrollo',
            useCase: 'Plugins de IDE y herramientas de codificación de entorno de desarrollo',
            pros: 'Integración IDE, Integración de flujo de trabajo, Características avanzadas',
            cons: 'Específico de IDE, Curva de aprendizaje, Uso independiente limitado',
            comparison: 'Nuestra herramienta proporciona codificación enfocada sin dependencias de entorno de desarrollo.'
        }
    ],
    'urlEncoder.relatedTools': [
        {
            name: 'Decodificador URL',
            description: 'Decodifica cadenas URL al texto original',
            url: '/url-decoder'
        },
        {
            name: 'Codificador Base64',
            description: 'Convierte texto a codificación Base64',
            url: '/base64-encoder'
        },
        {
            name: 'Codificador HTML',
            description: 'Codifica entidades HTML para seguridad web',
            url: '/html-encoder'
        },
        {
            name: 'Codificador JSON',
            description: 'Codifica datos JSON para transmisión',
            url: '/json-encoder'
        },
        {
            name: 'Analizador URL',
            description: 'Analiza y descompone componentes URL',
            url: '/url-parser'
        },
        {
            name: 'Codificador de Texto',
            description: 'Codifica texto en varios formatos',
            url: '/text-encoder'
        },
        {
            name: 'Constructor de Cadena de Consulta',
            description: 'Construye cadenas de consulta URL de forma segura',
            url: '/query-string-builder'
        },
        {
            name: 'Acortador de Enlaces',
            description: 'Acorta URLs largas para compartir',
            url: '/link-shortener'
        }
    ],
    'urlEncoder.faqs': [
        {
            question: '¿Qué es la codificación URL?',
            answer: 'La codificación URL convierte caracteres en un formato seguro para transmisión URL reemplazando caracteres ASCII inseguros con un "%" seguido de dos dígitos hexadecimales.'
        },
        {
            question: '¿Por qué necesito codificación URL?',
            answer: 'La codificación URL asegura que caracteres especiales, espacios y caracteres internacionales puedan transmitirse de forma segura en URLs sin causar errores de análisis.'
        },
        {
            question: '¿Qué caracteres se codifican?',
            answer: 'Caracteres que no son seguros en URLs como espacios, ampersands, signos de interrogación y caracteres no-ASCII se codifican a sus equivalentes codificados con porcentaje.'
        },
        {
            question: '¿Es la codificación URL lo mismo que Base64?',
            answer: 'No, la codificación URL es específicamente para hacer texto seguro para URL, mientras Base64 es para codificación binaria-a-texto con propósitos diferentes.'
        },
        {
            question: '¿Puedo codificar texto grande?',
            answer: 'Sí, nuestra herramienta puede manejar archivos de texto grandes, pero ten en cuenta los límites de longitud URL (típicamente 2048 caracteres) en aplicaciones web.'
        },
        {
            question: '¿Cómo funciona el procesamiento automático?',
            answer: 'El procesamiento automático codifica tu texto automáticamente mientras escribes, proporcionando conversión segura para URL instantánea sin clics manuales de botón.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la codificación ocurre directamente en tu navegador. Tu texto y resultados codificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Cuál es la diferencia entre encodeURI y encodeURIComponent?',
            answer: 'encodeURIComponent codifica todos los caracteres especiales mientras encodeURI deja algunos caracteres como :, / y ? sin codificar. Nuestra herramienta usa encodeURIComponent para máxima seguridad.'
        }
    ],
    'urlEncoder.securityNote': 'Toda la codificación URL ocurre localmente en tu navegador usando JavaScript. Ningún contenido de texto o resultados codificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'urlEncoder.additionalContent': 'La codificación URL es esencial para desarrollo web, integración de API, transmisión de datos y comunicación web segura. Combina nuestro codificador con otras herramientas como decodificador URL, codificador Base64 y constructores de cadena de consulta para flujos de trabajo comprehensivos de desarrollo web.'
};
