export default {
    'htmlDecoder.title': 'Decodificador HTML - Herramienta Online Gratuita',
    'htmlDecoder.load_file': 'Cargar archivo:',
    'htmlDecoder.copy': 'Copiar',
    'htmlDecoder.download_input': 'Descargar Entrada',
    'htmlDecoder.clear': 'Limpiar',
    'htmlDecoder.save': 'Guardar',
    'htmlDecoder.paste_encoded_html_here': 'Pega HTML codificado aquí...',
    'htmlDecoder.decoded_html': 'HTML Decodificado',
    'htmlDecoder.history': 'Historial',
    'htmlDecoder.restore': 'Restaurar',
    'htmlDecoder.download_history': 'Descargar Historial',
    'htmlDecoder.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to HTML Decoder
    'htmlDecoder.mainDescription': 'Herramienta de decodificación HTML online gratuita con decodificación de entidades, soporte de archivos y conversión instantánea. Perfecta para desarrollo web y procesamiento de contenido.',
    'htmlDecoder.extendedDescription': 'Nuestra herramienta comprehensiva de decodificación HTML te ayuda a convertir entidades HTML de vuelta a caracteres legibles instantáneamente. Incluye decodificación en tiempo real, soporte de carga de archivos, seguimiento de historial y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'htmlDecoder.features': [
        {
            title: 'Decodificación HTML en Tiempo Real',
            description: 'Convierte entidades HTML de vuelta a caracteres legibles instantáneamente mientras escribes'
        },
        {
            title: 'Reconocimiento de Entidades',
            description: 'Reconoce y decodifica todas las entidades HTML estándar incluyendo entidades numéricas y nombradas'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos HTML y texto directamente para rápida decodificación'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para fácil compartir y pegar'
        },
        {
            title: 'Descargar Resultados',
            description: 'Descarga HTML decodificado como archivos de texto para documentación'
        },
        {
            title: 'Historial de Decodificación',
            description: 'Rastrea tu historial de decodificación con funcionalidad de restauración y descarga'
        },
        {
            title: 'Múltiples Tipos de Entidades',
            description: 'Maneja entidades nombradas (&amp;), entidades numéricas (&#39;) y entidades hexadecimales (&#x27;)'
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
    'htmlDecoder.steps': [
        'Pega o carga tu HTML codificado en el campo de entrada',
        'Ve la salida HTML decodificada en tiempo real abajo',
        'Copia el resultado decodificado o descarga el archivo de entrada',
        'Guarda en historial para referencia futura y restauración'
    ],
    'htmlDecoder.examples': [
        {
            title: 'Decodificación de Entidades HTML',
            description: 'Convierte entidades HTML de vuelta a caracteres legibles',
            code: '&lt;div class=&#39;container&#39;&gt;Hola &amp; ¡Bienvenido!&lt;/div&gt;',
            result: '<div class=\'container\'>Hola & ¡Bienvenido!</div>'
        },
        {
            title: 'Decodificación de Contenido de Usuario',
            description: 'Decodifica entrada de usuario almacenada de forma segura para visualización',
            code: '&lt;script&gt;alert(&#39;ahora seguro&#39;)&lt;/script&gt;',
            result: '<script>alert(\'ahora seguro\')</script>',
            steps: [
                'Recuperar contenido codificado de la base de datos',
                'Decodificar entidades HTML',
                'Mostrar en entorno controlado',
                'Asegurar sanitización apropiada'
            ]
        },
        {
            title: 'Decodificación de Ejemplos de Código',
            description: 'Convierte ejemplos de código codificados de vuelta a formato legible',
            code: '&lt;p&gt;Usa &amp;lt;strong&amp;gt; para texto en negrita&lt;/p&gt;',
            result: '<p>Usa <strong> para texto en negrita</p>'
        }
    ],
    'htmlDecoder.useCases': [
        {
            title: 'Gestión de Contenido',
            description: 'Sistemas CMS decodificando entidades HTML almacenadas para visualización segura',
            example: 'Gestor de contenido decodificando contenido de publicaciones de blog almacenado con entidades HTML'
        },
        {
            title: 'Procesamiento de Datos',
            description: 'Procesando y decodificando datos HTML de APIs y bases de datos',
            example: 'Procesador de datos decodificando entidades HTML de respuestas API'
        },
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores depurando y probando codificación de entidades HTML',
            example: 'Desarrollador frontend probando decodificación de entidades HTML en aplicaciones web'
        },
        {
            title: 'Procesamiento de Email',
            description: 'Decodificando contenido HTML de plantillas de email y boletines',
            example: 'Comercializador de email decodificando contenido HTML de campañas de email'
        },
        {
            title: 'Documentación',
            description: 'Escritores técnicos convirtiendo ejemplos HTML codificados a formato legible',
            example: 'Escritor técnico decodificando ejemplos de código HTML para documentación'
        },
        {
            title: 'Migración de Base de Datos',
            description: 'Convirtiendo datos codificados en HTML durante migraciones de base de datos',
            example: 'Administrador de base de datos migrando contenido codificado en HTML a nuevo sistema'
        }
    ],
    'htmlDecoder.technicalDetails': 'Nuestro decodificador HTML usa capacidades de análisis HTML incorporadas de JavaScript para convertir entidades de vuelta a caracteres. La herramienta crea un elemento textarea temporal, establece su innerHTML y recupera el valor de texto decodificado. Este enfoque maneja todas las entidades HTML estándar incluyendo entidades nombradas, numéricas y hexadecimales. Todo el procesamiento ocurre localmente usando manipulación DOM eficiente para rendimiento óptimo.',
    'htmlDecoder.bestPractices': [
        {
            title: 'Validar Fuente de Entrada',
            tip: 'Siempre valida la fuente del contenido HTML codificado antes de decodificar por seguridad.'
        },
        {
            title: 'Sanitizar Después de Decodificar',
            tip: 'Sanitiza el contenido decodificado antes de mostrar para prevenir ataques XSS de contenido malicioso.'
        },
        {
            title: 'Usar Decodificación Contextual',
            tip: 'Entiende el contexto donde se usará el contenido decodificado y aplica medidas de seguridad apropiadas.'
        },
        {
            title: 'Probar con Varias Entidades',
            tip: 'Prueba la decodificación con varios tipos de entidades para asegurar soporte comprehensivo.'
        }
    ],
    'htmlDecoder.commonErrors': [
        {
            error: 'Entidades HTML Malformadas',
            cause: 'La entrada contiene entidades HTML incompletas o formateadas incorrectamente',
            solution: 'Asegura que todas las entidades HTML estén formateadas correctamente con delimitadores & y ;.',
            prevention: 'Valida el formato de entrada y maneja entidades malformadas elegantemente.'
        },
        {
            error: 'Nombres de Entidad Inválidos',
            cause: 'Usando nombres de entidad HTML no estándar o mal escritos',
            solution: 'Usa solo nombres de entidad HTML estándar soportados por navegadores.',
            prevention: 'Referencia especificaciones de entidades HTML y valida nombres de entidad.'
        },
        {
            error: 'Riesgos de Seguridad',
            cause: 'Decodificando contenido HTML malicioso sin sanitización apropiada',
            solution: 'Siempre sanitiza el contenido decodificado antes de mostrar en páginas web.',
            prevention: 'Implementa sanitización de contenido apropiada y medidas de seguridad.'
        },
        {
            error: 'Problemas de Rendimiento',
            cause: 'Procesando documentos HTML muy grandes causando lentitud del navegador',
            solution: 'Procesa documentos grandes en fragmentos o implementa decodificación de streaming.',
            prevention: 'Prueba rendimiento con tamaños de documento realistas y optimiza en consecuencia.'
        }
    ],
    'htmlDecoder.alternatives': [
        {
            name: 'Decodificación del Lado del Servidor',
            useCase: 'Bibliotecas de decodificación backend en PHP, Python, Java, Node.js',
            pros: 'Más segura, Control del servidor, Integración con bases de datos',
            cons: 'Carga del servidor, Dependencia de red, Complejidad',
            comparison: 'Nuestra herramienta proporciona decodificación instantánea del lado del cliente sin requisitos del servidor.'
        },
        {
            name: 'Herramientas de Desarrollo del Navegador',
            useCase: 'Chrome DevTools, Firefox Developer Tools decodificación en consola',
            pros: 'Disponibilidad incorporada, Depuración avanzada, Pruebas en tiempo real',
            cons: 'Conocimiento técnico requerido, Procesamiento por lotes limitado, Proceso manual',
            comparison: 'Nuestra herramienta ofrece interfaz amigable con capacidades de procesamiento por lotes.'
        },
        {
            name: 'Editores de Texto con Plugins',
            useCase: 'VS Code, Sublime Text con plugins de decodificación HTML',
            pros: 'Integración con editor, Integración de flujo de trabajo, Características avanzadas',
            cons: 'Configuración requerida, Específico del editor, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona decodificación independiente sin dependencias de editor.'
        },
        {
            name: 'Servicios de Decodificación Online',
            useCase: 'Servicios de decodificación HTML basados en web',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        }
    ],
    'htmlDecoder.relatedTools': [
        {
            name: 'Codificador HTML',
            description: 'Codifica caracteres HTML a entidades seguras',
            url: '/html-encoder'
        },
        {
            name: 'Decodificador URL',
            description: 'Decodifica cadenas codificadas URL al texto original',
            url: '/url-decoder'
        },
        {
            name: 'Decodificador Base64',
            description: 'Decodifica cadenas Base64 al contenido original',
            url: '/base64-decoder'
        },
        {
            name: 'Analizador JSON',
            description: 'Analiza y formatea datos JSON de forma segura',
            url: '/json-parser'
        },
        {
            name: 'Decodificador XML',
            description: 'Decodifica entidades XML al texto legible',
            url: '/xml-decoder'
        },
        {
            name: 'Decodificador de Texto',
            description: 'Decodifica texto en varios formatos',
            url: '/text-decoder'
        },
        {
            name: 'Validador HTML',
            description: 'Valida y verifica sintaxis HTML',
            url: '/html-validator'
        },
        {
            name: 'Convertidor de Entidades',
            description: 'Convierte entre diferentes formatos de entidad',
            url: '/entity-converter'
        }
    ],
    'htmlDecoder.faqs': [
        {
            question: '¿Qué hace esta herramienta?',
            answer: 'Nuestro decodificador HTML convierte entidades HTML (como &amp;, &lt;, &gt;) de vuelta a sus caracteres originales (&, <, >) para visualización legible.'
        },
        {
            question: '¿Qué entidades son compatibles?',
            answer: 'Soportamos todas las entidades HTML estándar incluyendo entidades nombradas (&amp;), entidades numéricas (&#39;) y entidades hexadecimales (&#x27;).'
        },
        {
            question: '¿Puedo cargar un archivo?',
            answer: 'Sí, puedes cargar archivos .html y .txt directamente. El contenido del archivo se decodificará automáticamente y se mostrará en el área de salida.'
        },
        {
            question: '¿Dónde se almacena el historial?',
            answer: 'El historial se almacena solo en tu sesión actual del navegador y no persiste entre sesiones o dispositivos.'
        },
        {
            question: '¿Es segura la decodificación?',
            answer: 'La decodificación en sí es segura, pero siempre sanitiza el contenido decodificado antes de mostrar en páginas web para prevenir ataques XSS.'
        },
        {
            question: '¿Puedo decodificar documentos HTML grandes?',
            answer: 'Sí, nuestra herramienta puede manejar documentos HTML grandes, aunque archivos muy grandes pueden causar problemas de rendimiento en algunos navegadores.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la decodificación ocurre directamente en tu navegador. Tu contenido HTML y resultados decodificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué pasa con las entidades malformadas?',
            answer: 'Nuestra herramienta maneja la mayoría de las entidades malformadas elegantemente, pero entidades muy mal formateadas pueden no decodificarse correctamente.'
        }
    ],
    'htmlDecoder.securityNote': 'Toda la decodificación HTML ocurre localmente en tu navegador usando JavaScript. Ningún contenido HTML o resultados decodificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad. Siempre sanitiza el contenido decodificado antes de mostrar en páginas web para prevenir ataques XSS.',
    'htmlDecoder.additionalContent': 'La decodificación HTML es esencial para gestión de contenido, procesamiento de datos, desarrollo web y visualización segura de contenido. Combina nuestro decodificador con otras herramientas como codificador HTML, decodificador URL y sanitizadores de contenido para flujos de trabajo comprehensivos de procesamiento de contenido web.'
};
