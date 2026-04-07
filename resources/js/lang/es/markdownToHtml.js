export default {
    'markdownToHtml.title': 'Convertidor Markdown a HTML - Herramienta Online Gratuita',
    'markdownToHtml.description': 'Convierte texto Markdown a HTML con vista previa en vivo y resaltado de sintaxis.',
    'markdownToHtml.live_preview': 'Vista Previa en Vivo',
    'markdownToHtml.load_file': 'Cargar archivo:',
    'markdownToHtml.markdown_input': 'Entrada Markdown',
    'markdownToHtml.markdown_button_h1': 'Encabezado',
    'markdownToHtml.markdown_button_bold': 'Negrita',
    'markdownToHtml.markdown_button_italic': 'Cursiva',
    'markdownToHtml.markdown_button_code': 'Código',
    'markdownToHtml.markdown_button_link': 'Enlace',
    'markdownToHtml.markdown_button_list': 'Lista',
    'markdownToHtml.markdown_button_quote': 'Cita',
    'markdownToHtml.markdown_button_codeblock': 'Bloque de Código',
    'markdownToHtml.html_output': 'Salida HTML',
    'markdownToHtml.raw_html_code': 'Código HTML Crudo',
    'markdownToHtml.copy_html': 'Copiar HTML',
    'markdownToHtml.convert_to_html': 'Convertir a HTML',
    'markdownToHtml.download_html': 'Descargar HTML',
    'markdownToHtml.download_markdown': 'Descargar Markdown',
    'markdownToHtml.clear_all': 'Limpiar Todo',
    'markdownToHtml.sample_markdown': 'Markdown de Ejemplo',
    'markdownToHtml.basic_example': 'Ejemplo Básico',
    'markdownToHtml.advanced_example': 'Ejemplo Avanzado',
    'markdownToHtml.documentation_style': 'Estilo de Documentación',
    'markdownToHtml.readme_style': 'Estilo README',
    'markdownToHtml.headings_lists_links': 'Encabezados, listas, enlaces',
    'markdownToHtml.code_blocks_tables_images': 'Bloques de código, tablas, imágenes',
    'markdownToHtml.api_documentation_format': 'Formato de documentación API',
    'markdownToHtml.project_readme_format': 'Formato README de proyecto',
    'markdownToHtml.enter_your_markdown_here': 'Ingresa tu Markdown aquí...',
    'markdownToHtml.html_output_will_appear_here': 'La salida HTML aparecerá aquí...',
    'markdownToHtml.characters': 'Caracteres',
    'markdownToHtml.lines': 'Líneas',
    'markdownToHtml.html_characters': 'Caracteres HTML',
    
    // SEO Content specific to Markdown to HTML
    'markdownToHtml.mainDescription': 'Herramienta de conversión Markdown a HTML online gratuita con vista previa en vivo, resaltado de sintaxis y herramientas de formato. Perfecta para documentación y creación de contenido.',
    'markdownToHtml.extendedDescription': 'Nuestra herramienta comprehensiva de conversión Markdown a HTML te ayuda a convertir texto Markdown a HTML limpio instantáneamente. Incluye vista previa en vivo, barra de herramientas de formato, resaltado de sintaxis, soporte de carga de archivos y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'markdownToHtml.features': [
        {
            title: 'Vista Previa en Vivo',
            description: 'Ve la salida HTML en tiempo real mientras escribes texto Markdown'
        },
        {
            title: 'Barra de Herramientas de Formato',
            description: 'Botones de formato rápido para encabezados, negrita, cursiva, enlaces, listas y bloques de código'
        },
        {
            title: 'Resaltado de Sintaxis',
            description: 'Hermoso resaltado de sintaxis para bloques de código con detección de lenguaje'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos Markdown directamente para conversión rápida'
        },
        {
            title: 'Múltiples Opciones de Exportación',
            description: 'Descarga tanto archivos Markdown originales como archivos HTML convertidos'
        },
        {
            title: 'Plantillas de Ejemplo',
            description: 'Plantillas preconstruidas para estilos básico, avanzado, documentación y README'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Diseño responsivo optimizado para edición móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la conversión ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'markdownToHtml.steps': [
        'Ingresa o pega tu texto Markdown en el área de entrada',
        'Habilita vista previa en vivo para ver la salida HTML mientras escribes',
        'Usa botones de la barra de herramientas para formato rápido de Markdown',
        'Convierte a HTML instantáneamente o descarga los archivos de salida'
    ],
    'markdownToHtml.examples': [
        {
            title: 'Blog Post Markdown',
            description: 'Convierte post de blog de Markdown a HTML',
            code: '# Mi Blog Post\n\n## Introducción\nEste es un **blog post** con texto *cursiva* y `código`.\n\n- Elemento 1\n- Elemento 2\n- Elemento 3\n\n> Esta es una cita de alguien importante.',
            result: '<h1>Mi Blog Post</h1>\n<h2>Introducción</h2>\n<p>Este es un <strong>blog post</strong> con texto <em>cursiva</em> y <code>código</code>.</p>\n<ul>\n<li>Elemento 1</li>\n<li>Elemento 2</li>\n<li>Elemento 3</li>\n</ul>\n<blockquote>\n<p>Esta es una cita de alguien importante.</p>\n</blockquote>'
        },
        {
            title: 'Documentación Técnica',
            description: 'Convierte documentación técnica con bloques de código',
            code: '# Documentación API\n\n## Instalación\n```bash\nnpm install mi-paquete\n```\n\n## Uso\n```javascript\nconst paquete = require(\'mi-paquete\');\npaquete.init();\n```',
            result: '<h1>Documentación API</h1>\n<h2>Instalación</h2>\n<pre><code class="language-bash">npm install mi-paquete</code></pre>\n<h2>Uso</h2>\n<pre><code class="language-javascript">const paquete = require(\'mi-paquete\');\npaquete.init();</code></pre>',
            steps: [
                'Escribe documentación técnica en Markdown',
                'Usa bloques de código con especificación de lenguaje',
                'Convierte a HTML limpio para visualización web',
                'Copia HTML para sitios de documentación'
            ]
        }
    ],
    'markdownToHtml.useCases': [
        {
            title: 'Escritura de Documentación',
            description: 'Escritores técnicos creando documentación API y guías de usuario',
            example: 'Escritor técnico convirtiendo documentación API para visualización web'
        },
        {
            title: 'Creación de Contenido de Blog',
            description: 'Bloggers y creadores de contenido escribiendo posts en formato Markdown',
            example: 'Blogger convirtiendo posts Markdown a HTML para publicación'
        },
        {
            title: 'Archivos README',
            description: 'Desarrolladores creando archivos README para repositorios GitHub',
            example: 'Desarrollador convirtiendo README.md a HTML para documentación de proyecto'
        },
        {
            title: 'Contenido Educativo',
            description: 'Educadores creando materiales de curso y tutoriales',
            example: 'Profesor convirtiendo planes de lección de Markdown a HTML'
        },
        {
            title: 'Artículos Técnicos',
            description: 'Escritores creando artículos técnicos y tutoriales',
            example: 'Escritor técnico convirtiendo tutoriales a formato HTML'
        },
        {
            title: 'Generación de Sitios Estáticos',
            description: 'Desarrolladores generando sitios estáticos desde contenido Markdown',
            example: 'Desarrollador web convirtiendo posts Markdown a HTML para sitios estáticos'
        }
    ],
    'markdownToHtml.technicalDetails': 'Nuestro convertidor Markdown a HTML usa un motor de análisis comprehensivo que maneja sintaxis Markdown común incluyendo encabezados, negrita, cursiva, enlaces, listas, bloques de código, tablas, imágenes y blockquotes. El convertidor procesa texto secuencialmente, aplicando patrones regex y reemplazo de cadenas para generar salida HTML5 limpia. Todo el procesamiento ocurre localmente usando algoritmos JavaScript eficientes para rendimiento óptimo.',
    'markdownToHtml.bestPractices': [
        {
            title: 'Formato Consistente',
            tip: 'Usa formato Markdown consistente a lo largo de tus documentos para mejor legibilidad.'
        },
        {
            title: 'Sintaxis de Bloque de Código',
            tip: 'Especifica siempre el lenguaje en bloques de código para resaltado de sintaxis apropiado.'
        },
        {
            title: 'Validación de Enlaces',
            tip: 'Valida todos los enlaces y referencias de imagen en tu Markdown antes de la conversión.'
        },
        {
            title: 'Pruebas de Vista Previa',
            tip: 'Usa vista previa en vivo para probar formato y asegurar salida HTML apropiada.'
        }
    ],
    'markdownToHtml.commonErrors': [
        {
            error: 'Sintaxis Markdown Inválida',
            cause: 'Formato Markdown incorrecto o sintaxis no soportada',
            solution: 'Verifica guías de sintaxis Markdown y usa opciones de formato soportadas.',
            prevention: 'Usa vista previa en vivo para validar formato antes de conversión final.'
        },
        {
            error: 'Enlaces Rotos',
            cause: 'Referencias de enlace inválidas o rotas en Markdown',
            solution: 'Valida todos los enlaces y asegura formato de URL apropiado.',
            prevention: 'Prueba todos los enlaces después de la conversión y usa sintaxis de enlace apropiada.'
        },
        {
            error: 'Problemas de Bloque de Código',
            cause: 'Formato de bloque de código impropio o especificación de lenguaje faltante',
            solution: 'Usa sintaxis de triple backtick apropiada con especificación de lenguaje.',
            prevention: 'Incluye siempre etiquetas de lenguaje para bloques de código y prueba resaltado de sintaxis.'
        },
        {
            error: 'Formato de Tabla',
            cause: 'Formato de tabla incorrecto o separadores faltantes',
            solution: 'Usa sintaxis de tabla apropiada con separadores de encabezado y alineación de columnas consistente.',
            prevention: 'Valida estructura de tabla y asegura separadores de pipe apropiados.'
        }
    ],
    'markdownToHtml.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'pandoc, herramientas de línea de comandos markdown',
            pros: 'Características poderosas, Programable, Opciones avanzadas',
            cons: 'Conocimiento técnico requerido, Sin GUI, Configuración compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Editores Online',
            useCase: 'StackEdit, Dillinger, Typora editores online',
            pros: 'Características avanzadas, Sincronización en la nube, Colaboración',
            cons: 'Dependencia de internet, Preocupaciones de privacidad, Uso limitado sin conexión',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Extensiones de IDE',
            useCase: 'Extensiones Markdown de VS Code, Atom, Sublime Text',
            pros: 'Integración IDE, Edición avanzada, Integración de flujo de trabajo',
            cons: 'Específico de IDE, Curva de aprendizaje, Uso independiente limitado',
            comparison: 'Nuestra herramienta proporciona conversión enfocada sin dependencias de entorno de desarrollo.'
        },
        {
            name: 'Generadores de Sitios Estáticos',
            useCase: 'Jekyll, Hugo, Hexo generadores de sitios estáticos',
            pros: 'Sitios completos, Características avanzadas, Sistemas de plantillas',
            cons: 'Configuración compleja, Excesivo para conversión simple, Curva de aprendizaje',
            comparison: 'Nuestra herramienta ofrece conversión simple sin complejidad de generación de sitios completa.'
        }
    ],
    'markdownToHtml.relatedTools': [
        {
            name: 'HTML a Markdown',
            description: 'Convierte HTML de vuelta a formato Markdown',
            url: '/html-to-markdown'
        },
        {
            name: 'Editor Markdown',
            description: 'Editor Markdown avanzado con vista previa en vivo',
            url: '/markdown-editor'
        },
        {
            name: 'Formateador HTML',
            description: 'Formatea y embellece código HTML',
            url: '/html-formatter'
        },
        {
            name: 'Generador CSS',
            description: 'Genera CSS para estilización HTML',
            url: '/css-generator'
        },
        {
            name: 'Formateador de Código',
            description: 'Formatea código en varios lenguajes de programación',
            url: '/code-formatter'
        },
        {
            name: 'Editor de Texto',
            description: 'Editor de texto online con resaltado de sintaxis',
            url: '/text-editor'
        },
        {
            name: 'Convertidor de Documentos',
            description: 'Convierte entre varios formatos de documento',
            url: '/document-converter'
        },
        {
            name: 'Resaltador de Sintaxis',
            description: 'Agrega resaltado de sintaxis a bloques de código',
            url: '/syntax-highlighter'
        }
    ],
    'markdownToHtml.faqs': [
        {
            question: '¿Qué sintaxis Markdown es compatible?',
            answer: 'Soportamos sintaxis Markdown común incluyendo encabezados, negrita, cursiva, enlaces, listas, bloques de código, tablas, imágenes, blockquotes y reglas horizontales.'
        },
        {
            question: '¿Puedo usar vista previa en vivo?',
            answer: 'Sí, habilita vista previa en vivo para ver la salida HTML en tiempo real mientras escribes texto Markdown.'
        },
        {
            question: '¿Puedo descargar el HTML convertido?',
            answer: 'Sí, puedes descargar tanto el archivo Markdown original como el archivo HTML convertido por separado.'
        },
        {
            question: '¿Los bloques de código tienen resaltado de sintaxis?',
            answer: 'Sí, los bloques de código con especificación de lenguaje reciben resaltado de sintaxis apropiado en la salida HTML.'
        },
        {
            question: '¿Puedo cargar archivos Markdown existentes?',
            answer: 'Sí, puedes cargar archivos .md y .txt directamente usando la característica de carga de archivos.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la conversión ocurre directamente en tu navegador. Tu texto Markdown y salida HTML nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Puedo usar tablas en Markdown?',
            answer: 'Sí, las tablas son soportadas usando sintaxis de pipe con separadores de encabezado para formato apropiado.'
        },
        {
            question: '¿Qué pasa con las imágenes en Markdown?',
            answer: 'Las imágenes son soportadas usando sintaxis de imagen Markdown estándar con texto alt y URL.'
        }
    ],
    'markdownToHtml.securityNote': 'Toda la conversión Markdown a HTML ocurre localmente en tu navegador usando JavaScript. Ningún contenido Markdown o salida HTML se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'markdownToHtml.additionalContent': 'La conversión Markdown a HTML es esencial para escritura de documentación, creación de contenido de blog, archivos README, contenido educativo y generación de sitios estáticos. Combina nuestro convertidor con otras herramientas como formateadores HTML, generadores CSS y resaltadores de sintaxis para flujos de trabajo comprehensivos de creación de contenido.'
};
