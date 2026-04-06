export default {
    'urlParser.title': 'Analizador de URL',
    'urlParser.copy': 'Copiar',
    'urlParser.download_url': 'Descargar URL',
    'urlParser.clear': 'Limpiar',
    'urlParser.save': 'Guardar',
    'urlParser.url_placeholder': 'https://example.com:8080/path?name=john&id=1#top',
    'urlParser.protocol': 'Protocolo:',
    'urlParser.host': 'Host:',
    'urlParser.hostname': 'Nombre de Host:',
    'urlParser.port': 'Puerto:',
    'urlParser.path': 'Ruta:',
    'urlParser.hash': 'Hash:',
    'urlParser.query_parameters': 'Parámetros de Consulta:',
    'urlParser.none': 'Ninguno',
    'urlParser.invalid_url': 'URL Inválida',
    'urlParser.history': 'Historial',
    'urlParser.restore': 'Restaurar',
    'urlParser.download_history': 'Descargar Historial',
    'urlParser.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to URL Parser
    'urlParser.mainDescription': 'Herramienta gratuita de analizador de URL con desglose de componentes, extracción de parámetros y seguimiento de historial. Perfecta para desarrolladores analizando estructuras de URL.',
    'urlParser.extendedDescription': 'Nuestra herramienta comprehensiva de analizador de URL te ayuda a desglosar URLs en componentes individuales con análisis detallado. Incluye detección de protocolo, extracción de hostname, identificación de puerto, análisis de ruta, extracción de parámetros de consulta, análisis de hash y gestión de historial. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'urlParser.features': [
        {
            title: 'Desglose Completo de URL',
            description: 'Analiza URLs en todos los componentes: protocolo, host, puerto, ruta, consulta y hash'
        },
        {
            title: 'Extracción de Parámetros de Consulta',
            description: 'Extrae y muestra todos los parámetros de consulta con sus valores en formato organizado'
        },
        {
            title: 'Detección de Protocolo',
            description: 'Detecta automáticamente y muestra protocolos de URL (http, https, ftp, etc.)'
        },
        {
            title: 'Identificación de Puerto',
            description: 'Extrae y muestra números de puerto de URLs con manejo de puertos predeterminados'
        },
        {
            title: 'Análisis de Hostname',
            description: 'Separa el hostname del host completo para análisis detallado de dominio'
        },
        {
            title: 'Análisis de Componente de Ruta',
            description: 'Extrae y muestra el componente de ruta de URLs para análisis de enrutamiento'
        },
        {
            title: 'Análisis de Fragmento Hash',
            description: 'Extrae y muestra identificadores de hash/fragmento de URLs'
        },
        {
            title: 'Seguimiento de Historial',
            description: 'Guarda y gestiona URLs analizadas con timestamps para acceso rápido'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia con un clic componentes analizados y descarga resultados para documentación'
        },
        {
            title: 'Manejo de Errores',
            description: 'Manejo robusto de errores con mensajes claros de URL inválida'
        },
        {
            title: 'Análisis en Tiempo Real',
            description: 'Análisis instantáneo de URL mientras escribes con extracción automática de componentes'
        },
        {
            title: 'Compatible con Móvil',
            description: 'Diseño responsivo optimizado para análisis de URL móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Todo el análisis de URL ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'urlParser.steps': [
        'Ingresa o pega una URL completa en el campo de entrada',
        'Ve el desglose instantáneo de todos los componentes de URL',
        'Analiza parámetros de consulta y sus valores',
        'Usa botones de copiar o descargar para propósitos de documentación',
        'Guarda URLs analizadas frecuentemente en el historial para acceso rápido',
        'Restaura URLs anteriores del historial cuando sea necesario'
    ],
    'urlParser.examples': [
        {
            title: 'URL de Producto de E-commerce',
            description: 'Analiza URL de producto compleja con múltiples parámetros',
            code: 'Entrada: https://example.com/products/laptop?category=electronics&brand=dell&price=999&sort=rating',
            result: 'Protocolo: https | Host: example.com | Ruta: /products/laptop | Consulta: category=electronics&brand=dell&price=999&sort=rating'
        },
        {
            title: 'URL de Endpoint de API',
            description: 'Analiza URL de endpoint de API con parámetros de ruta y consulta',
            code: 'Entrada: https://api.example.com/v1/users/123/posts?limit=10&sort=created_at&order=desc',
            result: 'Protocolo: https | Host: api.example.com | Ruta: /v1/users/123/posts | Consulta: limit=10&sort=created_at&order=desc',
            steps: [
                'Ingresa URL de endpoint de API',
                'Extrae parámetros de ruta (ID de usuario: 123)',
                'Analiza parámetros de consulta para filtrado',
                'Usa componentes para solicitudes de API'
            ]
        },
        {
            title: 'URL de Compartir en Redes Sociales',
            description: 'Analiza URL de compartir en redes sociales con parámetros codificados',
            code: 'Entrada: https://twitter.com/intent/tweet?text=Hello%20World&url=https://example.com&hashtags=web,development',
            result: 'Protocolo: https | Host: twitter.com | Ruta: /intent/tweet | Consulta: text=Hello World&url=https://example.com&hashtags=web,development'
        }
    ],
    'urlParser.useCases': [
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores analizando estructuras de URL para enrutamiento y manejo de parámetros',
            example: 'Desarrollador frontend analizando parámetros de URL para configuración de React Router'
        },
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores backend extrayendo información de endpoint y parámetros',
            example: 'Desarrollador API analizando URLs de solicitud para enrutamiento de endpoint'
        },
        {
            title: 'Análisis de Seguridad',
            description: 'Profesionales de seguridad analizando URLs para vulnerabilidades potenciales',
            example: 'Analista de seguridad verificando parámetros de URL para riesgos de inyección'
        },
        {
            title: 'Optimización SEO',
            description: 'Especialistas SEO analizando estructuras de URL para optimización de motores de búsqueda',
            example: 'Experto SEO analizando rutas de URL y parámetros para factores de ranking'
        },
        {
            title: 'Extracción de Datos',
            description: 'Científicos de datos extrayendo información estructurada de colecciones de URLs',
            example: 'Analista de datos extrayendo parámetros de consulta de URLs de archivos de log'
        },
        {
            title: 'Validación de URL',
            description: 'Ingenieros de aseguramiento de calidad probando formato y estructura de URL',
            example: 'Ingeniero QA validando formatos de URL en aplicaciones web'
        },
        {
            title: 'Propósitos Educativos',
            description: 'Estudiantes aprendiendo sobre estructura y componentes de URL',
            example: 'Estudiante de ciencias de la computación entendiendo anatomía y análisis de URL'
        },
        {
            title: 'Depuración de Aplicaciones',
            description: 'Desarrolladores depurando problemas relacionados con URL en aplicaciones web',
            example: 'Desarrollador full-stack solucionando problemas de enrutamiento de URL'
        }
    ],
    'urlParser.technicalDetails': 'Nuestro analizador de URL usa el constructor URL incorporado de JavaScript para análisis preciso. La herramienta maneja detección de protocolo, extracción de hostname, identificación de puerto, análisis de ruta, extracción de parámetros de consulta usando URLSearchParams y análisis de fragmento hash. Todo el procesamiento ocurre localmente usando JavaScript moderno con manejo comprehensivo de errores.',
    'urlParser.bestPractices': [
        {
            title: 'Codificación URL',
            tip: 'Siempre codifica apropiadamente caracteres especiales en URLs usando encodeURIComponent() para parámetros de consulta.'
        },
        {
            title: 'Validación de Parámetros',
            tip: 'Valida parámetros extraídos antes de usarlos en aplicaciones para prevenir problemas de seguridad.'
        },
        {
            title: 'Seguridad de Protocolo',
            tip: 'Usa protocolo HTTPS siempre que sea posible para asegurar comunicación segura.'
        },
        {
            title: 'Límites de Longitud de URL',
            tip: 'Ten en cuenta los límites de longitud de URL (típicamente 2048 caracteres) para compatibilidad con navegadores.'
        }
    ],
    'urlParser.commonErrors': [
        {
            error: 'Formato de URL Inválido',
            cause: 'Ingresar URLs malformadas o faltando componentes requeridos',
            solution: 'Asegura que la URL incluya protocolo y formato de dominio válido.',
            prevention: 'Usa librerías de validación de URL y prueba URLs antes de la implementación.'
        },
        {
            error: 'Protocolo Faltante',
            cause: 'URLs sin especificación de protocolo (http:// o https://)',
            solution: 'Siempre incluye protocolo en URLs o usa URLs relativas a protocolo.',
            prevention: 'Implementa detección automática de protocolo y adición en aplicaciones.'
        },
        {
            error: 'Problemas de Codificación',
            cause: 'Codificación URL inapropiada de caracteres especiales y parámetros',
            solution: 'Usa funciones de codificación URL apropiadas para caracteres especiales.',
            prevention: 'Siempre codifica parámetros de consulta y segmentos de ruta con caracteres especiales.'
        },
        {
            error: 'Errores de Especificación de Puerto',
            cause: 'Números de puerto incorrectos o especificación de puerto en formato incorrecto',
            solution: 'Usa números de puerto válidos (1-65535) y sintaxis de puerto apropiada.',
            prevention: 'Valida números de puerto y maneja puertos predeterminados apropiadamente.'
        },
        {
            error: 'Problemas de Análisis de Parámetros',
            cause: 'Parámetros de consulta complejos no analizados correctamente debido al formato',
            solution: 'Usa formato de parámetro de consulta estándar con codificación apropiada.',
            prevention: 'Sigue estándares URL para formateo de parámetros y codificación.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'Diferencias en análisis de URL entre navegadores causando resultados inconsistentes',
            solution: 'Usa APIs URL modernas y prueba en diferentes navegadores.',
            prevention: 'Usa métodos de análisis URL estandarizados y polyfills para navegadores más antiguos.'
        }
    ],
    'urlParser.alternatives': [
        {
            name: 'Barra de URL del Navegador',
            useCase: 'Usar barra de direcciones del navegador para inspección básica de URL',
            pros: 'Incorporado al navegador, Acceso instantáneo, No necesita instalación',
            cons: 'Análisis limitado, Sin desglose de componentes, Sin seguimiento de historial',
            comparison: 'Nuestra herramienta proporciona desglose detallado de componentes y extracción de parámetros.'
        },
        {
            name: 'Decodificadores URL Online',
            useCase: 'Servicios web de decodificación y análisis de URL',
            pros: 'Acceso multiplataforma, Características adicionales, Sin instalación',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Posibles anuncios',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y sin distracciones.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas CLI para análisis y análisis de URL',
            pros: 'Programable, Procesamiento rápido, Amigable con automatización',
            cons: 'Configuración requerida, Conocimiento técnico, Sin GUI',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con desglose visual de componentes.'
        },
        {
            name: 'Librerías de Programación',
            useCase: 'Librerías de análisis de URL en varios lenguajes de programación',
            pros: 'Integración con código, Características avanzadas, Análisis personalizado',
            cons: 'Programación requerida, Complejidad de implementación, Gestión de dependencias',
            comparison: 'Nuestra herramienta ofrece análisis instantáneo sin requisitos de programación.'
        }
    ],
    'urlParser.relatedTools': [
        {
            name: 'Codificador/Decodificador URL',
            description: 'Codifica y decodifica URLs para aplicaciones web',
            url: '/url-encoder-decoder'
        },
        {
            name: 'Analizador de Cadena de Consulta',
            description: 'Analiza y manipula cadenas de consulta',
            url: '/query-string-parser'
        },
        {
            name: 'Codificador Base64',
            description: 'Codifica y decodifica cadenas Base64',
            url: '/base64-encoder'
        },
        {
            name: 'Acortador de URL',
            description: 'Crea y analiza URLs acortadas',
            url: '/url-shortener'
        },
        {
            name: 'Verificador de Cabeceras HTTP',
            description: 'Verifica y analiza cabeceras HTTP de cualquier URL',
            url: '/http-header-checker'
        },
        {
            name: 'Verificador de Redirecciones',
            description: 'Verifica redirecciones URL y cadenas',
            url: '/redirect-checker'
        },
        {
            name: 'Verificador SSL',
            description: 'Verifica estado y detalles del certificado SSL',
            url: '/ssl-checker'
        },
        {
            name: 'Búsqueda DNS',
            description: 'Realiza consultas y búsquedas DNS',
            url: '/dns-lookup'
        },
        {
            name: 'Prueba de Velocidad de Sitio Web',
            description: 'Prueba rendimiento y velocidad de sitio web',
            url: '/website-speed-test'
        }
    ],
    'urlParser.faqs': [
        {
            question: '¿Qué componentes se pueden analizar de una URL?',
            answer: 'Nuestra herramienta analiza protocolo, host, hostname, puerto, pathname, parámetros de consulta y fragmentos hash. Cada componente se extrae y muestra por separado para análisis detallado.'
        },
        {
            question: '¿Cómo se extraen los parámetros de consulta?',
            answer: 'Los parámetros de consulta se extraen usando la API URLSearchParams, que automáticamente decodifica parámetros codificados en URL y los separa en pares clave-valor para fácil acceso.'
        },
        {
            question: '¿Qué pasa con URLs inválidas?',
            answer: 'Las URLs inválidas activan un mensaje de error y no se muestran resultados de análisis. La herramienta usa bloques try-catch para manejar URLs malformadas gracefulmente.'
        },
        {
            question: '¿Puedo analizar URLs con caracteres especiales?',
            answer: 'Sí, la herramienta maneja caracteres codificados en URL automáticamente. Los caracteres especiales en URLs deberían estar codificados apropiadamente usando métodos estándar de codificación URL.'
        },
        {
            question: '¿Cómo se maneja el número de puerto?',
            answer: 'Los números de puerto se extraen por separado del host. Si no se especifica puerto, la herramienta muestra el puerto predeterminado para el protocolo (80 para HTTP, 443 para HTTPS).'
        },
        {
            question: '¿Qué pasa con las URLs relativas?',
            answer: 'El constructor URL de JavaScript requiere URLs absolutas con protocolos. Las URLs relativas mostrarán como inválidas. Usa URLs completas con protocolos para mejores resultados.'
        },
        {
            question: '¿Puedo analizar múltiples URLs a la vez?',
            answer: 'Actualmente, la herramienta analiza una URL a la vez. Puedes usar la característica de historial para guardar múltiples URLs analizadas para acceso rápido.'
        },
        {
            question: '¿Cómo se procesa el fragmento hash?',
            answer: 'Los fragmentos hash (todo después de #) se extraen por separado y se muestran sin decodificar. Esto es útil para aplicaciones de una sola página y enlaces de ancla.'
        },
        {
            question: '¿Son privadas mis URLs analizadas?',
            answer: 'Todo el análisis de URL ocurre directamente en tu navegador. Tus URLs e historial de análisis se almacenan localmente y nunca se envían a nuestros servidores, asegurando completa privacidad.'
        }
    ],
    'urlParser.securityNote': 'Todo el análisis de URL ocurre localmente en tu navegador usando JavaScript. No se almacenan URLs o datos de análisis en nuestros servidores, asegurando completa privacidad y seguridad.',
    'urlParser.additionalContent': 'El análisis de URL es esencial para desarrollo web, integración de API, análisis de seguridad y extracción de datos. Combina nuestro analizador de URL con otras herramientas como codificadores URL, verificadores de cabeceras HTTP y verificadores de redirección para flujos de trabajo comprehensivos de desarrollo web y seguridad.'
};
