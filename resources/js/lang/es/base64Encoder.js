export default {
    'base64Encoder.title': 'Codificador Base64 - Herramienta Online Gratuita',
    'base64Encoder.auto': 'Auto',
    'base64Encoder.load_file': 'Cargar archivo:',
    'base64Encoder.encode': 'Codificar',
    'base64Encoder.copy': 'Copiar',
    'base64Encoder.download': 'Descargar',
    'base64Encoder.clear': 'Limpiar',
    'base64Encoder.history': 'Historial',
    'base64Encoder.download_all': 'Descargar Todo',
    'base64Encoder.clear_history': 'Limpiar Historial',
    'base64Encoder.paste_text_here': 'Pega texto aquí...',
    
    // SEO Content specific to Base64 Encoder
    'base64Encoder.mainDescription': 'Herramienta de codificación Base64 online gratuita con codificación de texto, soporte de archivos y conversión instantánea. Perfecta para transmisión de datos y desarrollo de API.',
    'base64Encoder.extendedDescription': 'Nuestra herramienta comprehensiva de codificación Base64 te ayuda a convertir texto y archivos a codificación Base64 instantáneamente. Incluye procesamiento automático, soporte de carga de archivos, seguimiento de historial y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'base64Encoder.features': [
        {
            title: 'Codificación Instantánea',
            description: 'Convierte texto a Base64 instantáneamente con procesamiento y resultados en tiempo real'
        },
        {
            title: 'Modo de Procesamiento Automático',
            description: 'Habilita el procesamiento automático para codificación Base64 automática mientras escribes'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto directamente para rápida codificación y conversión Base64'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para fácil compartir y pegar'
        },
        {
            title: 'Descargar Resultados',
            description: 'Descarga resultados codificados Base64 como archivos de texto para documentación'
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
    'base64Encoder.steps': [
        'Ingresa o pega tu texto en el campo de entrada',
        'Haz clic en el botón "Codificar" o habilita el procesamiento automático para codificación automática',
        'Ve el resultado codificado Base64 instantáneamente',
        'Copia al portapapeles o descarga el resultado codificado',
        'Usa el historial para rastrear y gestionar codificaciones anteriores'
    ],
    'base64Encoder.examples': [
        {
            title: 'Codificación de Texto a Base64',
            description: 'Convierte texto plano a Base64 para transmisión segura',
            code: 'Hello World!',
            result: 'SGVsbG8gV29ybGQh'
        },
        {
            title: 'Codificación de JSON para API',
            description: 'Codifica datos JSON para solicitudes API y transmisión de datos',
            code: '{"user":"john","status":"active"}',
            result: 'eyJ1c2VyIjoiSm9obiIsInN0YXR1cyI6ImFjdGl2ZSJ9'
        },
        {
            title: 'Codificación de Caracteres Especiales',
            description: 'Maneja caracteres especiales y texto internacional correctamente',
            code: 'Café © & Crème brûlée',
            result: 'Q2Fmw6kg4pCUICYgQ3LDqG1lIGJyw7Juw6ls',
            steps: [
                'Pega texto con caracteres especiales',
                'Haz clic en el botón "Codificar"',
                'Copia el resultado Base64',
                'Usa en URLs o transmisión de datos'
            ]
        }
    ],
    'base64Encoder.useCases': [
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores codificando datos para solicitudes API y autenticación',
            example: 'Desarrollador backend codificando credenciales para autenticación API'
        },
        {
            title: 'Transmisión de Datos',
            description: 'Transmitiendo datos binarios de forma segura sobre protocolos basados en texto',
            example: 'Ingeniero de red codificando archivos de configuración para transmisión'
        },
        {
            title: 'Desarrollo Web',
            description: 'Incrustando imágenes y recursos directamente en HTML/CSS',
            example: 'Desarrollador frontend incrustando imágenes pequeñas directamente en CSS'
        },
        {
            title: 'Sistemas de Email',
            description: 'Codificando adjuntos y contenido para transmisión de email',
            example: 'Sistema de email codificando adjuntos para transmisión segura'
        },
        {
            title: 'Almacenamiento de Base de Datos',
            description: 'Almacenando datos binarios en campos de base de datos solo texto',
            example: 'Desarrollador de base de datos codificando imágenes para almacenamiento solo texto'
        },
        {
            title: 'Aplicaciones de Seguridad',
            description: 'Ofuscación básica de datos sensibles para transmisión',
            example: 'Equipo de seguridad codificando datos de configuración sensibles'
        }
    ],
    'base64Encoder.technicalDetails': 'Nuestro codificador Base64 usa la función incorporada btoa() de JavaScript con manejo Unicode apropiado. La herramienta procesa codificación de texto, maneja caracteres especiales correctamente y proporciona conversión en tiempo real. Todo el procesamiento ocurre localmente usando algoritmos de codificación eficientes para rendimiento óptimo.',
    'base64Encoder.bestPractices': [
        {
            title: 'Codificación de Caracteres',
            tip: 'Asegura codificación UTF-8 apropiada para caracteres internacionales y símbolos especiales.'
        },
        {
            title: 'Límites de Tamaño de Datos',
            tip: 'Ten en cuenta que la codificación Base64 aumenta el tamaño de datos en aproximadamente 33%.'
        },
        {
            title: 'Consideraciones de Seguridad',
            tip: 'Recuerda que Base64 es codificación, no encriptación. Usa encriptación apropiada para datos sensibles.'
        },
        {
            title: 'Optimización de Rendimiento',
            tip: 'Usa procesamiento automático para textos pequeños y procesamiento manual para archivos grandes.'
        }
    ],
    'base64Encoder.commonErrors': [
        {
            error: 'Codificación de Caracteres Inválida',
            cause: 'El texto contiene caracteres inválidos o codificación impropia',
            solution: 'Asegura que el texto use codificación UTF-8 apropiada y caracteres válidos.',
            prevention: 'Valida el texto de entrada antes de la codificación y maneja caracteres especiales correctamente.'
        },
        {
            error: 'Procesamiento de Archivos Grandes',
            cause: 'Intentando codificar archivos muy grandes causando problemas de rendimiento',
            solution: 'Divide archivos grandes en fragmentos más pequeños para procesamiento.',
            prevention: 'Prueba con tamaños de archivo más pequeños y optimiza para archivos grandes.'
        },
        {
            error: 'Problemas de Manejo Unicode',
            cause: 'Manejo impropio de caracteres Unicode y texto internacional',
            solution: 'Usa codificación Unicode apropiada con unescape y encodeURIComponent.',
            prevention: 'Prueba con varios conjuntos de caracteres y texto internacional.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'Usando métodos incompatibles para codificación Base64',
            solution: 'Usa la función estándar btoa() con manejo Unicode apropiado.',
            prevention: 'Prueba la codificación en diferentes navegadores y entornos.'
        }
    ],
    'base64Encoder.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Comando Base64 en sistemas Unix/Linux y PowerShell',
            pros: 'Disponibilidad incorporada, Programable, Procesamiento por lotes',
            cons: 'Conocimiento técnico requerido, Sin GUI, Sintaxis compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'Bibliotecas Base64 en Python, Java, JavaScript y otros lenguajes',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece codificación instantánea sin requisitos de programación.'
        },
        {
            name: 'Servicios de Codificación Online',
            useCase: 'Servicios de codificación Base64 basados en web',
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
    'base64Encoder.relatedTools': [
        {
            name: 'Decodificador Base64',
            description: 'Decodifica cadenas Base64 al texto original',
            url: '/base64-decoder'
        },
        {
            name: 'Base64 a Imagen',
            description: 'Convierte cadenas Base64 a imágenes',
            url: '/base64-to-image'
        },
        {
            name: 'Imagen a Base64',
            description: 'Convierte imágenes a cadenas Base64',
            url: '/image-to-base64'
        },
        {
            name: 'Codificador URL',
            description: 'Codifica URLs para transmisión segura',
            url: '/url-encoder'
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
            name: 'Codificador de Texto',
            description: 'Codifica texto en varios formatos',
            url: '/text-encoder'
        },
        {
            name: 'Convertidor Binario',
            description: 'Convierte entre formatos binarios y de texto',
            url: '/binary-converter'
        }
    ],
    'base64Encoder.faqs': [
        {
            question: '¿Qué es la codificación Base64?',
            answer: 'Base64 es un esquema de codificación que convierte datos binarios en formato de texto ASCII, comúnmente usado para transmisión y almacenamiento seguro de datos.'
        },
        {
            question: '¿Cómo funciona la codificación Base64?',
            answer: 'Base64 convierte datos binarios en 64 caracteres ASCII diferentes representando 6 bits de datos con cada carácter, haciéndolo seguro para transmisión basada en texto.'
        },
        {
            question: '¿Es Base64 encriptación?',
            answer: 'No, Base64 es codificación, no encriptación. Es fácilmente reversible y no debe usarse para propósitos de seguridad. Usa encriptación apropiada para datos sensibles.'
        },
        {
            question: '¿La codificación Base64 aumenta el tamaño del archivo?',
            answer: 'Sí, la codificación Base64 aumenta el tamaño de datos en aproximadamente 33% debido a la conversión de 8-bit a 6-bit.'
        },
        {
            question: '¿Puedo codificar archivos grandes?',
            answer: 'Sí, nuestra herramienta puede manejar archivos de texto grandes, pero archivos muy grandes pueden tardar más en procesarse debido a limitaciones del navegador.'
        },
        {
            question: '¿Cómo funciona el procesamiento automático?',
            answer: 'El procesamiento automático codifica tu texto automáticamente mientras escribes, proporcionando conversión Base64 instantánea sin clics manuales de botón.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la codificación ocurre directamente en tu navegador. Tu texto y resultados codificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué caracteres se pueden codificar?',
            answer: 'Base64 puede codificar cualquier dato binario, incluyendo caracteres especiales, texto Unicode y caracteres internacionales con codificación UTF-8 apropiada.'
        }
    ],
    'base64Encoder.securityNote': 'Toda la codificación Base64 ocurre localmente en tu navegador usando JavaScript. Ningún contenido de texto o resultados codificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'base64Encoder.additionalContent': 'La codificación Base64 es esencial para transmisión de datos, desarrollo de API, desarrollo web y manejo seguro de datos. Combina nuestro codificador con otras herramientas como decodificador Base64, codificador URL y codificadores de texto para flujos de trabajo comprehensivos de procesamiento de datos.'
};
