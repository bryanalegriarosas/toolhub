export default {
    'textToBase64.title': 'Codificador/Decodificador de Texto a Base64 - Herramienta Online Gratuita',
    'textToBase64.description': 'Codifica o decodifica Base64 desde texto plano instantáneamente con historial y características de descarga.',
    'textToBase64.load_file': 'Cargar archivo',
    'textToBase64.download': 'Descargar',
    'textToBase64.save': 'Guardar',
    'textToBase64.input': 'Entrada',
    'textToBase64.output': 'Salida',
    'textToBase64.encode': 'Codificar',
    'textToBase64.decode': 'Decodificar',
    'textToBase64.copy': 'Copiar',
    'textToBase64.clear': 'Limpiar',
    'textToBase64.history': 'Historial',
    'textToBase64.restore': 'Restaurar',
    'textToBase64.download_all': 'Descargar Todo',
    'textToBase64.clear_history': 'Limpiar Historial',
    'textToBase64.placeholder_text': 'Ingresa texto o Base64...',
    
    // SEO Content specific to Text to Base64
    'textToBase64.mainDescription': 'Codificador/decodificador de texto a Base64 online gratuito con detección automática, seguimiento de historial y capacidades de procesamiento por lotes.',
    'textToBase64.extendedDescription': 'Nuestra herramienta comprehensiva de texto a Base64 te ayuda a codificar y decodificar texto Base64 instantáneamente. Incluye detección automática de formato, manejo de caracteres especiales, seguimiento de historial y procesamiento por lotes. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'textToBase64.features': [
        {
            title: 'Detección Automática de Formato',
            description: 'Detecta automáticamente formato Base64 y convierte a texto apropiado'
        },
        {
            title: 'Soporte Unicode',
            description: 'Maneja apropiadamente caracteres Unicode y símbolos especiales en la codificación'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto directamente para codificación/decodificación rápida'
        },
        {
            title: 'Historial de Conversión',
            description: 'Rastrea y gestiona tu historial de conversiones localmente'
        },
        {
            title: 'Procesamiento por Lotes',
            description: 'Procesa múltiples conversiones de texto en una sola operación'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para todos los resultados'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga resultados individuales o historial completo como archivos de texto'
        },
        {
            title: 'Manejo de Errores',
            description: 'Mensajes de error claros y validación para entrada Base64 inválida'
        },
        {
            title: 'Diseño Responsivo',
            description: 'Diseño responsivo optimizado para uso móvil y de escritorio'
        }
    ],
    'textToBase64.steps': [
        'Ingresa texto o Base64 en el campo de entrada',
        'Haz clic en Codificar o Decodificar para convertir entre formatos',
        'Copia o descarga el resultado',
        'Guarda en historial para referencia posterior'
    ],
    'textToBase64.examples': [
        {
            title: 'Codificación de Texto',
            description: 'Convierte texto plano a formato Base64',
            code: '¡Hola, Mundo!',
            result: 'SGVsbG8sIFdvcmxkIQ==',
            steps: [
                'Ingresa "¡Hola, Mundo!" en el campo de entrada',
                'Haz clic en "Codificar" para convertir a Base64',
                'Copia el resultado Base64: SGVsbG8sIFdvcmxkIQ=='
            ]
        },
        {
            title: 'Decodificación de Base64',
            description: 'Convierte Base64 de vuelta a texto legible',
            code: 'SGVsbG8sIFdvcmxkIQ==',
            result: '¡Hola, Mundo!',
            steps: [
                'Ingresa Base64 en el campo de entrada',
                'Haz clic en "Decodificar" para convertir a texto',
                'Obtén el texto decodificado: ¡Hola, Mundo!'
            ]
        },
        {
            title: 'Codificación de Caracteres Especiales',
            description: 'Maneja caracteres Unicode y símbolos especiales en la codificación',
            code: '¡Hola! ¿Cómo estás?',
            result: 'wqFIb2xhISDCsUNvbW8gZXN0w6FzPw==',
            steps: [
                'Ingresa texto con caracteres especiales',
                'Haz clic en "Codificar" para manejar Unicode apropiadamente',
                'Usa el resultado Base64 para transmisión segura'
            ]
        }
    ],
    'textToBase64.useCases': [
        {
            title: 'Transmisión de Datos',
            description: 'Desarrolladores codificando datos para transmisión sobre protocolos de texto',
            example: 'Desarrollador backend codificando datos de API para protocolos de texto'
        },
        {
            title: 'Integración de Email',
            description: 'Sistemas de correo electrónico codificando archivos adjuntos y contenido para transmisión',
            example: 'Desarrollador de correo codificando archivos adjuntos en formato Base64'
        },
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores web codificando datos para URLs y parámetros de API',
            example: 'Desarrollador frontend codificando datos de usuario para parámetros de URL'
        },
        {
            title: 'Almacenamiento de Base de Datos',
            description: 'Administradores de base de datos almacenando datos binarios en sistemas basados en texto',
            example: 'Administrador de base de datos codificando datos binarios para almacenamiento de texto'
        },
        {
            title: 'Gestión de Configuración',
            description: 'Administradores de sistemas codificando datos de configuración para archivos de texto',
            example: 'Administrador de sistemas codificando archivos de configuración en Base64 para almacenamiento'
        },
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores de API codificando datos de solicitud/respuesta para servicios web',
            example: 'Desarrollador de API codificando tokens de autenticación para servicios web'
        }
    ],
    'textToBase64.technicalDetails': 'Nuestro codificador/decodificador de texto a Base64 usa las funciones incorporadas de JavaScript btoa() y atob() para codificación y decodificación precisa. La herramienta detecta automáticamente formato Base64 y maneja caracteres Unicode apropiadamente usando codificación UTF-8 antes de la conversión. Todo el procesamiento ocurre localmente usando manipulación de cadenas eficiente para rendimiento óptimo.',
    'textToBase64.bestPractices': [
        {
            title: 'Validación de Formato',
            tip: 'Siempre valida formato Base64 antes de decodificar para evitar errores.'
        },
        {
            title: 'Codificación de Caracteres',
            tip: 'Ten cuidado con los problemas de codificación de caracteres al trabajar con diferentes idiomas.'
        },
        {
            title: 'Límites de Tamaño de Datos',
            tip: 'Considera límites de tamaño de datos al codificar archivos grandes para transmisión web.'
        },
        {
            title: 'Consideraciones de Seguridad',
            tip: 'Usa Base64 para ofuscación de datos, no para verdadero cifrado de datos sensibles.'
        }
    ],
    'textToBase64.commonErrors': [
        {
            error: 'Formato Base64 Inválido',
            cause: 'La entrada contiene caracteres Base64 inválidos o relleno incorrecto',
            solution: 'Asegura que el Base64 esté formateado apropiadamente con caracteres válidos y relleno apropiado.',
            prevention: 'Usa validadores Base64 y prueba con muestras pequeñas antes del procesamiento por lotes.'
        },
        {
            error: 'Problemas de Codificación de Caracteres',
            cause: 'Caracteres Unicode no manejados apropiadamente durante la codificación/decodificación',
            solution: 'Asegura codificación UTF-8 apropiada antes de la conversión Base64.',
            prevention: 'Prueba con caracteres especiales y diferentes idiomas antes del uso en producción.'
        },
        {
            error: 'Corrupción de Datos',
            cause: 'Datos Base64 incompletos o errores de transmisión',
            solution: 'Verifica cadena Base64 completa y recodifica si es necesario.',
            prevention: 'Usa checksums y validación para transmisión de datos críticos.'
        },
        {
            error: 'Limitaciones de Memoria',
            cause: 'Cadenas Base64 grandes causando problemas de memoria en el navegador',
            solution: 'Procesa datos en fragmentos más pequeños o usa procesamiento por streaming para archivos grandes.',
            prevention: 'Implementa límites de tamaño de datos y procesamiento por fragmentos para conjuntos de datos grandes.'
        }
    ],
    'textToBase64.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'base64, openssl utilidades de línea de comandos',
            pros: 'Procesamiento potente, Programable, Características avanzadas',
            cons: 'Conocimiento técnico requerido, Sin GUI, Configuración compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'Bibliotecas de codificación Base64 en varios lenguajes de programación',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece conversión instantánea sin requisitos de programación.'
        },
        {
            name: 'Convertidores Online',
            useCase: 'Varios servicios web de conversión Base64',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Extensiones de IDE',
            useCase: 'Extensiones de codificador/decodificador Base64 para entornos de desarrollo',
            pros: 'Integración IDE, Integración de flujo de trabajo, Acceso rápido',
            cons: 'Específico de IDE, Características limitadas, Complejidad de configuración',
            comparison: 'Nuestra herramienta proporciona conversión enfocada sin dependencias de entorno de desarrollo.'
        }
    ],
    'textToBase64.relatedTools': [
        {
            name: 'Codificador URL',
            description: 'Codifica URLs para transmisión segura sobre protocolos de texto',
            url: '/url-encoder'
        },
        {
            name: 'Generador de Hash',
            description: 'Genera varios valores de hash desde datos de texto',
            url: '/hash-generator'
        },
        {
            name: 'Codificador de Texto',
            description: 'Convierte texto a varios formatos de codificación',
            url: '/text-encoder'
        },
        {
            name: 'Convertidor Binario',
            description: 'Convierte entre texto y formatos binarios',
            url: '/binary-converter'
        },
        {
            name: 'Codificador Hexadecimal',
            description: 'Convierte texto a formato hexadecimal',
            url: '/hex-encoder'
        },
        {
            name: 'Generador de Código QR',
            description: 'Genera códigos QR desde datos de texto',
            url: '/qr-code-generator'
        },
        {
            name: 'Validador de Datos',
            description: 'Valida y formatea varios tipos de datos',
            url: '/data-validator'
        },
        {
            name: 'Analizador de Texto',
            description: 'Analiza contenido y estadísticas de texto',
            url: '/text-analyzer'
        }
    ],
    'textToBase64.faqs': [
        {
            question: '¿Qué es la codificación Base64?',
            answer: 'Base64 es un esquema de codificación que convierte datos binarios en formato de texto ASCII, comúnmente usado para transmisión segura de datos sobre protocolos de texto.'
        },
        {
            question: '¿Puedo codificar caracteres Unicode?',
            answer: 'Sí, la herramienta maneja caracteres Unicode y símbolos especiales apropiadamente usando codificación UTF-8 antes de la conversión Base64.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la codificación y decodificación ocurre directamente en tu navegador. Tus datos de texto y salida Base64 nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Puedo procesar archivos grandes?',
            answer: 'Sí, puedes cargar archivos de texto. La herramienta maneja archivos de tamaño razonable para procesamiento en navegador.'
        },
        {
            question: '¿Cuál es la diferencia entre codificar y decodificar?',
            answer: 'La codificación convierte texto a Base64, mientras que la decodificación convierte Base64 de vuelta al texto original. Ambos procesos son reversibles con datos apropiados.'
        },
        {
            question: '¿Puedo guardar historial de conversión?',
            answer: 'Sí, la herramienta mantiene un historial local de tus conversiones para fácil acceso y referencia.'
        },
        {
            question: '¿Es Base64 un cifrado?',
            answer: 'No, Base64 es codificación, no cifrado. Ofusca datos pero no proporciona seguridad criptográfica verdadera. Usa cifrado apropiado para datos sensibles.'
        },
        {
            question: '¿Qué caracteres son compatibles?',
            answer: 'La herramienta soporta todos los caracteres Unicode incluyendo símbolos especiales, emojis y texto de varios idiomas y conjuntos de caracteres.'
        }
    ],
    'textToBase64.securityNote': 'Toda la codificación y decodificación de texto a Base64 ocurre localmente en tu navegador usando JavaScript. Ningún dato de texto o salida Base64 se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'textToBase64.additionalContent': 'La conversión de texto a Base64 es esencial para transmisión de datos, integración de correo electrónico, desarrollo web, almacenamiento de base de datos, gestión de configuración y desarrollo de API. Combina nuestro codificador/decodificador con otras herramientas como codificadores URL, generadores de hash y validadores de datos para gestión comprehensiva de flujos de trabajo de datos.'
};
