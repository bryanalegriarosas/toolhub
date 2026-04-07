export default {
    'urlDecoder.title': 'Decodificador URL - Herramienta Online Gratuita',
    'urlDecoder.auto': 'Auto',
    'urlDecoder.load_file': 'Cargar archivo:',
    'urlDecoder.decode': 'Decodificar',
    'urlDecoder.copy': 'Copiar',
    'urlDecoder.download': 'Descargar',
    'urlDecoder.clear': 'Limpiar',
    'urlDecoder.history': 'Historial',
    'urlDecoder.download_all': 'Descargar Todo',
    'urlDecoder.clear_history': 'Limpiar Historial',
    'urlDecoder.paste_url_encoded_text_here': 'Pega texto codificado URL aquí...',
    
    // SEO Content specific to URL Decoder
    'urlDecoder.mainDescription': 'Herramienta de decodificación URL online gratuita con decodificación de texto, soporte de archivos y conversión instantánea. Perfecta para desarrollo web e integración de API.',
    'urlDecoder.extendedDescription': 'Nuestra herramienta comprehensiva de decodificación URL te ayuda a convertir texto codificado URL de vuelta a texto legible original instantáneamente. Incluye procesamiento automático, soporte de carga de archivos, seguimiento de historial y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'urlDecoder.features': [
        {
            title: 'Decodificación URL Instantánea',
            description: 'Convierte texto codificado URL de vuelta a texto legible instantáneamente con procesamiento y resultados en tiempo real'
        },
        {
            title: 'Modo de Procesamiento Automático',
            description: 'Habilita el procesamiento automático para decodificación URL automática mientras escribes'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto directamente para rápida decodificación y conversión URL'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para fácil compartir y pegar'
        },
        {
            title: 'Descargar Resultados',
            description: 'Descarga resultados decodificados URL como archivos de texto para documentación'
        },
        {
            title: 'Historial de Decodificación',
            description: 'Rastrea tu historial de decodificación con funcionalidad de copia y descarga'
        },
        {
            title: 'Soporte Unicode',
            description: 'Maneja caracteres especiales, texto internacional y UTF-8 correctamente'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Diseño responsivo optimizado para decodificación móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la decodificación ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'urlDecoder.steps': [
        'Ingresa o pega tu texto codificado URL en el campo de entrada',
        'Haz clic en el botón "Decodificar" o habilita el procesamiento automático para decodificación automática',
        'Ve el resultado de texto legible decodificado instantáneamente',
        'Copia al portapapeles o descarga el resultado decodificado',
        'Usa el historial para rastrear y gestionar decodificaciones anteriores'
    ],
    'urlDecoder.examples': [
        {
            title: 'Decodificación de Parámetros URL',
            description: 'Decodifica parámetros de consulta URL de vuelta a texto legible',
            code: 'search%3Fq%3Dhello%20world%20%26%20page%3D1%26category%3Dweb%20development',
            result: 'search?q=hello world & page=1&category=web development'
        },
        {
            title: 'Decodificación de Rutas de Archivo',
            description: 'Convierte rutas de archivo codificadas URL de vuelta a rutas normales',
            code: 'C%3A%2FUsers%2FJohn%20Doe%2FDocuments%2Ffile%20name.txt',
            result: 'C:/Users/John Doe/Documents/file name.txt'
        },
        {
            title: 'Decodificación de Caracteres Internacionales',
            description: 'Maneja caracteres codificados UTF-8 de URLs',
            code: 'Caf%C3%A9%20%26%20Restaurant%20%28Main%20St%29',
            result: 'Café & Restaurant (Main St)',
            steps: [
                'Pega texto codificado URL',
                'Haz clic en el botón "Decodificar"',
                'Copia el resultado legible',
                'Usa en tu aplicación o muestra a usuarios'
            ]
        }
    ],
    'urlDecoder.useCases': [
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores decodificando parámetros URL de aplicaciones web y APIs',
            example: 'Desarrollador frontend decodificando parámetros de consulta de respuestas API'
        },
        {
            title: 'Integración de API',
            description: 'Decodificando datos codificados URL de respuestas API y servicios web',
            example: 'Desarrollador backend decodificando entrada de usuario codificada URL de llamadas API'
        },
        {
            title: 'Análisis de Enlaces',
            description: 'Analizando y decodificando URLs para propósitos de seguridad y depuración',
            example: 'Analista de seguridad decodificando URLs sospechosas para análisis de amenazas'
        },
        {
            title: 'Procesamiento de Datos',
            description: 'Procesando datos codificados URL de formularios web y envíos',
            example: 'Procesador de datos decodificando envíos de formulario para almacenamiento de base de datos'
        },
        {
            title: 'Depuración',
            description: 'Depurando problemas de codificación URL en aplicaciones web',
            example: 'Desarrollador depurando problemas de codificación de parámetros URL'
        },
        {
            title: 'Gestión de Contenido',
            description: 'Decodificando nombres de archivo y rutas de sistemas de almacenamiento web',
            example: 'Desarrollador CMS decodificando rutas de archivo codificadas URL para gestión de contenido'
        }
    ],
    'urlDecoder.technicalDetails': 'Nuestro decodificador URL usa la función incorporada decodeURIComponent() de JavaScript con manejo UTF-8 apropiado. La herramienta procesa decodificación URL, maneja caracteres codificados con porcentaje correctamente y proporciona conversión en tiempo real. Todo el procesamiento ocurre localmente usando algoritmos de decodificación eficientes para rendimiento óptimo.',
    'urlDecoder.bestPractices': [
        {
            title: 'Validación de Entrada',
            tip: 'Siempre valida la entrada codificada URL antes de procesar para prevenir errores.'
        },
        {
            title: 'Manejo de Errores',
            tip: 'Maneja errores de decodificación elegantemente y proporciona mensajes de error amigables para el usuario.'
        },
        {
            title: 'Codificación de Caracteres',
            tip: 'Asegura codificación UTF-8 apropiada para caracteres internacionales y símbolos especiales.'
        },
        {
            title: 'Consideraciones de Seguridad',
            tip: 'Sé cauteloso al decodificar URLs de fuentes no confiables por razones de seguridad.'
        }
    ],
    'urlDecoder.commonErrors': [
        {
            error: 'Codificación URL Inválida',
            cause: 'La entrada contiene codificación de porcentaje inválida o cadenas URL malformadas',
            solution: 'Valida el formato de entrada y asegura estructura de codificación URL apropiada.',
            prevention: 'Verifica el formato de entrada antes de decodificar y maneja errores de codificación.'
        },
        {
            error: 'Codificación de Porcentaje Malformada',
            cause: 'Secuencias codificadas con porcentaje incompletas o inválidas en la entrada',
            solution: 'Asegura que todas las secuencias de porcentaje estén completas y válidas.',
            prevention: 'Valida el formato de codificación de porcentaje antes de procesar.'
        },
        {
            error: 'Problemas de Codificación de Caracteres',
            cause: 'Codificación UTF-8 impropia causando problemas de decodificación de caracteres',
            solution: 'Usa codificación UTF-8 apropiada y maneja conversión de caracteres correctamente.',
            prevention: 'Prueba con varios conjuntos de caracteres y texto internacional.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'Usando métodos incompatibles para decodificación URL',
            solution: 'Usa la función estándar decodeURIComponent() para compatibilidad multi-navegador.',
            prevention: 'Prueba la decodificación en diferentes navegadores y entornos.'
        }
    ],
    'urlDecoder.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Comandos de decodificación URL en sistemas Unix/Linux y PowerShell',
            pros: 'Disponibilidad incorporada, Programable, Procesamiento por lotes',
            cons: 'Conocimiento técnico requerido, Sin GUI, Sintaxis compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'Bibliotecas de decodificación URL en Python, Java, JavaScript y otros lenguajes',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece decodificación instantánea sin requisitos de programación.'
        },
        {
            name: 'Servicios de Decodificación Online',
            useCase: 'Servicios de decodificación URL basados en web',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Herramientas de Desarrollo',
            useCase: 'Plugins de IDE y herramientas de decodificación de entorno de desarrollo',
            pros: 'Integración IDE, Integración de flujo de trabajo, Características avanzadas',
            cons: 'Específico de IDE, Curva de aprendizaje, Uso independiente limitado',
            comparison: 'Nuestra herramienta proporciona decodificación enfocada sin dependencias de entorno de desarrollo.'
        }
    ],
    'urlDecoder.relatedTools': [
        {
            name: 'Codificador URL',
            description: 'Convierte texto a codificación segura para URL',
            url: '/url-encoder'
        },
        {
            name: 'Decodificador Base64',
            description: 'Decodifica cadenas Base64 al texto original',
            url: '/base64-decoder'
        },
        {
            name: 'Decodificador HTML',
            description: 'Decodifica entidades HTML al texto',
            url: '/html-decoder'
        },
        {
            name: 'Analizador JSON',
            description: 'Analiza y formatea datos JSON',
            url: '/json-parser'
        },
        {
            name: 'Analizador URL',
            description: 'Analiza y descompone componentes URL',
            url: '/url-parser'
        },
        {
            name: 'Decodificador de Texto',
            description: 'Decodifica texto en varios formatos',
            url: '/text-decoder'
        },
        {
            name: 'Analizador de Cadena de Consulta',
            description: 'Analiza cadenas de consulta URL en objetos',
            url: '/query-string-parser'
        },
        {
            name: 'Validador de Enlaces',
            description: 'Valida y verifica formatos URL',
            url: '/link-validator'
        }
    ],
    'urlDecoder.faqs': [
        {
            question: '¿Qué es la decodificación URL?',
            answer: 'La decodificación URL convierte caracteres codificados con porcentaje de vuelta a su forma original, haciendo que el texto codificado URL sea legible nuevamente.'
        },
        {
            question: '¿Por qué necesito decodificación URL?',
            answer: 'La decodificación URL es necesaria para convertir datos codificados URL de vuelta a texto legible para procesamiento, visualización o almacenamiento en aplicaciones.'
        },
        {
            question: '¿Qué caracteres se decodifican?',
            answer: 'Caracteres codificados con porcentaje como %20 (espacio), %26 (&), %3F (?) y caracteres internacionales codificados UTF-8 se decodifican de vuelta a su forma original.'
        },
        {
            question: '¿Es segura la decodificación URL?',
            answer: 'La decodificación URL es generalmente segura, pero sé cauteloso al decodificar URLs de fuentes no confiables ya que pueden contener contenido malicioso.'
        },
        {
            question: '¿Puedo decodificar texto grande?',
            answer: 'Sí, nuestra herramienta puede manejar archivos de texto grandes para decodificación URL, aunque archivos muy grandes pueden tardar más en procesarse.'
        },
        {
            question: '¿Cómo funciona el procesamiento automático?',
            answer: 'El procesamiento automático decodifica automáticamente tu texto codificado URL mientras escribes, proporcionando conversión instantánea a texto legible sin clics manuales de botón.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la decodificación ocurre directamente en tu navegador. Tu texto codificado URL y resultados decodificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Cuál es la diferencia entre decodeURI y decodeURIComponent?',
            answer: 'decodeURIComponent decodifica todos los caracteres especiales mientras decodeURI deja algunos caracteres como :, / y # codificados. Nuestra herramienta usa decodeURIComponent para decodificación completa.'
        }
    ],
    'urlDecoder.securityNote': 'Toda la decodificación URL ocurre localmente en tu navegador usando JavaScript. Ningún texto codificado URL o resultados decodificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'urlDecoder.additionalContent': 'La decodificación URL es esencial para desarrollo web, integración de API, procesamiento de datos y depuración de aplicaciones web. Combina nuestro decodificador con otras herramientas como codificador URL, decodificador Base64 y analizadores de cadena de consulta para flujos de trabajo comprehensivos de desarrollo web.'
};
