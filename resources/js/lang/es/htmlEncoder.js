export default {
    'htmlEncoder.title': 'Codificador HTML - Herramienta Online Gratuita',
    'htmlEncoder.load_file': 'Cargar archivo:',
    'htmlEncoder.copy': 'Copiar',
    'htmlEncoder.download_input': 'Descargar Entrada',
    'htmlEncoder.clear': 'Limpiar',
    'htmlEncoder.save': 'Guardar',
    'htmlEncoder.paste_html_here': 'Pega HTML aquí...',
    'htmlEncoder.encoded_html': 'HTML Codificado',
    'htmlEncoder.history': 'Historial',
    'htmlEncoder.restore': 'Restaurar',
    'htmlEncoder.download_history': 'Descargar Historial',
    'htmlEncoder.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to HTML Encoder
    'htmlEncoder.mainDescription': 'Herramienta de codificación HTML online gratuita con codificación de caracteres, soporte de archivos y conversión instantánea. Perfecta para seguridad web y prevención de XSS.',
    'htmlEncoder.extendedDescription': 'Nuestra herramienta comprehensiva de codificación HTML te ayuda a convertir caracteres HTML a entidades seguras instantáneamente. Incluye codificación en tiempo real, soporte de carga de archivos, seguimiento de historial y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'htmlEncoder.features': [
        {
            title: 'Codificación HTML en Tiempo Real',
            description: 'Convierte caracteres HTML a entidades seguras instantáneamente mientras escribes'
        },
        {
            title: 'Prevención XSS',
            description: 'Codifica entrada de usuario para prevenir ataques de Cross-Site Scripting'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos HTML y texto directamente para rápida codificación'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para fácil compartir y pegar'
        },
        {
            title: 'Descargar Resultados',
            description: 'Descarga HTML codificado como archivos de texto para documentación'
        },
        {
            title: 'Historial de Codificación',
            description: 'Rastrea tu historial de codificación con funcionalidad de restauración y descarga'
        },
        {
            title: 'Soporte de Múltiples Caracteres',
            description: 'Codifica caracteres &, <, >, " y \' a entidades HTML'
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
    'htmlEncoder.steps': [
        'Pega o carga tu HTML/texto en el campo de entrada',
        'Ve la salida HTML codificada en tiempo real abajo',
        'Copia el resultado codificado o descarga el archivo de entrada',
        'Guarda en historial para referencia futura y restauración'
    ],
    'htmlEncoder.examples': [
        {
            title: 'Codificación de Caracteres Especiales',
            description: 'Convierte caracteres HTML especiales a entidades seguras',
            code: '<div class=\'container\'>Hola & ¡Bienvenido!</div>',
            result: '&lt;div class=&#39;container&#39;&gt;Hola &amp; ¡Bienvenido!&lt;/div&gt;'
        },
        {
            title: 'Codificación de Entrada de Usuario',
            description: 'Codifica entrada de usuario para prevenir ataques XSS',
            code: '<script>alert(\'ataque XSS\')</script>',
            result: '&lt;script&gt;alert(&#39;ataque XSS&#39;)&lt;/script&gt;',
            steps: [
                'Obtener entrada de usuario del formulario',
                'Codificar usando entidades HTML',
                'Mostrar de forma segura en HTML',
                'Prevenir ejecución de scripts'
            ]
        },
        {
            title: 'Codificación de Ejemplos de Código',
            description: 'Muestra fragmentos de código de forma segura en HTML',
            code: '<p>Usa &lt;strong&gt; para texto en negrita</p>',
            result: '&lt;p&gt;Usa &amp;lt;strong&amp;gt; para texto en negrita&lt;/p&gt;'
        }
    ],
    'htmlEncoder.useCases': [
        {
            title: 'Seguridad Web',
            description: 'Desarrolladores codificando entrada de usuario para prevenir ataques XSS y asegurar aplicaciones web',
            example: 'Desarrollador frontend codificando comentarios de usuario antes de mostrarlos'
        },
        {
            title: 'Gestión de Contenido',
            description: 'Sistemas CMS codificando contenido generado por usuario para visualización segura',
            example: 'Gestor de contenido codificando comentarios de publicaciones de blog para seguridad'
        },
        {
            title: 'Documentación de Código',
            description: 'Escritores técnicos codificando ejemplos de código HTML para documentación',
            example: 'Escritor técnico codificando fragmentos HTML para contenido de tutoriales'
        },
        {
            title: 'Procesamiento de Formularios',
            description: 'Procesando y codificando datos de formulario para visualización HTML segura',
            example: 'Desarrollador web codificando envíos de formulario para visualización'
        },
        {
            title: 'Plantillas de Email',
            description: 'Codificando contenido HTML para plantillas de email y boletines',
            example: 'Especialista en marketing codificando contenido de email HTML'
        },
        {
            title: 'Integración de API',
            description: 'Codificando contenido HTML para respuestas API y transmisión de datos',
            example: 'Desarrollador backend codificando contenido HTML para respuestas API JSON'
        }
    ],
    'htmlEncoder.technicalDetails': 'Nuestro codificador HTML usa reemplazo de cadenas JavaScript para convertir caracteres especiales a entidades HTML. La herramienta procesa caracteres &, <, >, " y \' reemplazándolos con &amp;, &lt;, &gt;, &quot;, y &#039; respectivamente. Todo el procesamiento ocurre localmente usando manipulación de cadenas eficiente para rendimiento óptimo.',
    'htmlEncoder.bestPractices': [
        {
            title: 'Siempre Codificar Entrada de Usuario',
            tip: 'Nunca confíes en la entrada de usuario - siempre codifícala antes de mostrar en HTML para prevenir ataques XSS.'
        },
        {
            title: 'Usar Codificación Contextual',
            tip: 'Usa codificación apropiada basada en contexto (HTML, atributos, JavaScript, CSS).'
        },
        {
            title: 'Validar Entrada Primero',
            tip: 'Valida entrada de usuario por longitud y formato antes de codificar para mejor seguridad.'
        },
        {
            title: 'Probar con Entrada Maliciosa',
            tip: 'Prueba tu codificación con varios vectores de ataque XSS para asegurar protección apropiada.'
        }
    ],
    'htmlEncoder.commonErrors': [
        {
            error: 'Codificación Incompleta',
            cause: 'Faltan algunos caracteres especiales o usando nombres de entidad incorrectos',
            solution: 'Asegura que todos los caracteres especiales (&, <, >, ", \') estén correctamente codificados.',
            prevention: 'Usa funciones de codificación comprehensivas que manejen todos los caracteres especiales HTML.'
        },
        {
            error: 'Doble Codificación',
            cause: 'Aplicando codificación HTML a contenido ya codificado',
            solution: 'Verifica si el contenido ya está codificado antes de aplicar codificación.',
            prevention: 'Implementa lógica para detectar y evitar escenarios de doble codificación.'
        },
        {
            error: 'Codificación de Contexto Incorrecto',
            cause: 'Usando codificación HTML en contextos JavaScript o CSS',
            solution: 'Usa codificación apropiada para cada contexto (HTML, JS, CSS).',
            prevention: 'Entiende diferentes requisitos de codificación para varios contextos.'
        },
        {
            error: 'Problemas de Rendimiento',
            cause: 'Codificando documentos HTML muy grandes causando lentitud del navegador',
            solution: 'Procesa documentos grandes en fragmentos o implementa codificación de streaming.',
            prevention: 'Prueba rendimiento con tamaños de documento realistas y optimiza en consecuencia.'
        }
    ],
    'htmlEncoder.alternatives': [
        {
            name: 'Codificación del Lado del Servidor',
            useCase: 'Bibliotecas de codificación backend en PHP, Python, Java, Node.js',
            pros: 'Más segura, Control del servidor, Integración con bases de datos',
            cons: 'Carga del servidor, Dependencia de red, Complejidad',
            comparison: 'Nuestra herramienta proporciona codificación instantánea del lado del cliente sin requisitos del servidor.'
        },
        {
            name: 'Funciones Incorporadas de Framework',
            useCase: 'Funciones de codificación incorporadas en React, Vue, Angular',
            pros: 'Integración con framework, Protección automática, Rendimiento optimizado',
            cons: 'Específico del framework, Control limitado, Curva de aprendizaje',
            comparison: 'Nuestra herramienta ofrece codificación independiente sin dependencias de framework.'
        },
        {
            name: 'Política de Seguridad de Contenido',
            useCase: 'Encabezados CSP para prevenir ataques XSS',
            pros: 'Protección a nivel de navegador, Sin codificación necesaria, Seguridad comprehensiva',
            cons: 'Configuración compleja, Cambios rupturantes, Soporte limitado de navegador',
            comparison: 'Nuestra herramienta complementa CSP con codificación de entrada apropiada para seguridad en capas.'
        },
        {
            name: 'Firewalls de Aplicaciones Web',
            useCase: 'Soluciones WAF para protección XSS',
            pros: 'Protección avanzada, Actualizaciones automáticas, Seguridad comprehensiva',
            cons: 'Costo, Complejidad de configuración, Falsos positivos',
            comparison: 'Nuestra herramienta proporciona codificación básica como primera línea de defensa.'
        }
    ],
    'htmlEncoder.relatedTools': [
        {
            name: 'Decodificador HTML',
            description: 'Decodifica entidades HTML al texto original',
            url: '/html-decoder'
        },
        {
            name: 'Verificador de Protección XSS',
            description: 'Prueba y valida medidas de protección XSS',
            url: '/xss-protection-checker'
        },
        {
            name: 'Codificador URL',
            description: 'Codifica URLs para transmisión segura',
            url: '/url-encoder'
        },
        {
            name: 'Codificador Base64',
            description: 'Convierte texto a codificación Base64',
            url: '/base64-encoder'
        },
        {
            name: 'Codificador JSON',
            description: 'Codifica datos JSON para transmisión segura',
            url: '/json-encoder'
        },
        {
            name: 'Codificador CSS',
            description: 'Codifica CSS para seguridad y protección',
            url: '/css-encoder'
        },
        {
            name: 'Codificador JavaScript',
            description: 'Codifica JavaScript para prevención XSS',
            url: '/javascript-encoder'
        },
        {
            name: 'Codificador XML',
            description: 'Codifica XML para transmisión segura de datos',
            url: '/xml-encoder'
        }
    ],
    'htmlEncoder.faqs': [
        {
            question: '¿Qué caracteres se codifican?',
            answer: 'Nuestra herramienta codifica caracteres &, <, >, " y \' a sus equivalentes de entidad HTML: &amp;, &lt;, &gt;, &quot;, y &#039; respectivamente.'
        },
        {
            question: '¿Por qué es importante la codificación HTML?',
            answer: 'La codificación HTML previene ataques XSS convirtiendo caracteres especiales a entidades seguras, asegurando que la entrada de usuario se muestre como texto en lugar de ejecutarse como HTML o JavaScript.'
        },
        {
            question: '¿Puedo codificar un archivo?',
            answer: 'Sí, puedes cargar archivos .html y .txt directamente. El contenido del archivo se codificará automáticamente y se mostrará en el área de salida.'
        },
        {
            question: '¿El historial persiste entre sesiones?',
            answer: 'No, el historial de codificación se almacena en la memoria del navegador y se borra cuando recargas la página o cierras la pestaña del navegador.'
        },
        {
            question: '¿Es esta codificación suficiente para protección XSS?',
            answer: 'La codificación HTML es un primer paso crucial, pero la protección XSS comprehensiva requiere múltiples capas incluyendo CSP, validación de entrada y codificación de salida.'
        },
        {
            question: '¿Puedo codificar documentos HTML grandes?',
            answer: 'Sí, nuestra herramienta puede manejar documentos HTML grandes, aunque archivos muy grandes pueden causar problemas de rendimiento en algunos navegadores.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la codificación ocurre directamente en tu navegador. Tu contenido HTML y resultados codificados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué pasa con los caracteres Unicode?',
            answer: 'Los caracteres Unicode que no son caracteres HTML especiales se dejan sin cambios. Solo &, <, >, " y \' se codifican a entidades HTML.'
        }
    ],
    'htmlEncoder.securityNote': 'Toda la codificación HTML ocurre localmente en tu navegador usando JavaScript. Ningún contenido HTML o resultados codificados se almacenan en nuestros servidores, asegurando completa privacidad y seguridad. Esta herramienta ayuda a prevenir ataques XSS pero debe usarse como parte de una estrategia de seguridad comprehensiva.',
    'htmlEncoder.additionalContent': 'La codificación HTML es esencial para seguridad web, prevención XSS, gestión de contenido y manejo seguro de entrada de usuario. Combina nuestro codificador con otras herramientas de seguridad como verificadores de protección XSS, codificadores URL e implementaciones de política de seguridad de contenido para seguridad comprehensiva de aplicaciones web.'
};
