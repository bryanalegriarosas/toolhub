export default {
    'slugGenerator.title': 'Generador de Slugs - Crea URLs SEO-Friendly Online',
    'slugGenerator.description': 'Crea slugs amigables para URLs desde cualquier texto con separadores personalizables y eliminación de palabras comunes. Perfecto para optimización SEO.',
    'slugGenerator.load_file': 'Cargar archivo:',
    'slugGenerator.copy': 'Copiar Slug',
    'slugGenerator.download_result': 'Descargar Slug',
    'slugGenerator.clear': 'Limpiar',
    'slugGenerator.save': 'Guardar',
    'slugGenerator.enter_text': 'Ingresar texto',
    'slugGenerator.slug': 'Slug',
    'slugGenerator.history': 'Historial',
    'slugGenerator.restore': 'Restaurar',
    'slugGenerator.download_history': 'Descargar Historial',
    'slugGenerator.clear_history': 'Limpiar Historial',
    'slugGenerator.hyphen': 'Guión (-)',
    'slugGenerator.underscore': 'Guion bajo (_)',
    'slugGenerator.remove_common_words': 'Eliminar palabras comunes',
    'slugGenerator.length': 'Longitud:',
    
    // SEO Content specific to Slug Generator
    'slugGenerator.mainDescription': 'Generador de slugs gratuito online para crear URLs amigables para SEO desde cualquier texto con separadores personalizables y eliminación de palabras comunes.',
    'slugGenerator.extendedDescription': 'Nuestro generador de slugs comprensivo transforma cualquier texto en URLs limpias y amigables para SEO. Ya sea creando URLs para posts de blog, páginas de productos o cualquier contenido web, esta herramienta asegura que tus slugs estén optimizados para motores de búsqueda y legibilidad humana. Con soporte para múltiples separadores y eliminación inteligente de palabras comunes, puedes crear URLs profesionales que mejoran el rendimiento SEO de tu sitio.',
    'slugGenerator.features': [
        {
            title: 'Generación Instantánea de Slugs',
            description: 'Genera slugs amigables para URLs desde cualquier entrada de texto en tiempo real'
        },
        {
            title: 'Separadores Personalizables',
            description: 'Elige entre guiones (-) y guiones bajos (_) para formateo de URLs'
        },
        {
            title: 'Eliminación de Palabras Comunes',
            description: 'Elimina inteligentemente palabras comunes para URLs más limpias y cortas'
        },
        {
            title: 'Vista Previa en Tiempo Real',
            description: 'Ve tu slug actualizarse instantáneamente mientras escribes'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic los slugs generados al portapapeles'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga slugs como archivos de texto para uso offline'
        },
        {
            title: 'Historial de Slugs',
            description: 'Rastrea y gestiona tus slugs generados localmente'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto para generar slugs desde el contenido'
        },
        {
            title: 'Manejo de Caracteres Especiales',
            description: 'Maneja y normaliza automáticamente caracteres especiales'
        },
        {
            title: 'Contador de Longitud',
            description: 'Conteo de caracteres en tiempo real para optimización de URLs'
        }
    ],
    'slugGenerator.steps': [
        'Ingresa o pega tu texto en el campo de entrada',
        'Elige tu separador preferido (guión o guion bajo)',
        'Opcionalmente habilita la eliminación de palabras comunes para slugs más limpios',
        'Copia el slug generado al portapapeles',
        'Descarga como archivo o guarda en historial para uso posterior'
    ],
    'slugGenerator.examples': [
        {
            title: 'URL de Post de Blog',
            description: 'Crea URL amigable para SEO para posts de blog',
            code: 'Entrada: Cómo Aprender Programación JavaScript en 2024',
            result: 'Slug: como-aprender-programacion-javascript-en-2024'
        },
        {
            title: 'URL de Página de Producto',
            description: 'Genera URLs limpias de productos para e-commerce',
            code: 'Entrada: Apple iPhone 15 Pro Max - 256GB - Titanio Azul',
            result: 'Slug: apple-iphone-15-pro-max-256gb-titanio-azul',
            steps: [
                'Ingresa título del producto con detalles',
                'Usa separador de guión para legibilidad',
                'Habilita opción \'Eliminar palabras comunes\'',
                'Copia el slug amigable para SEO'
            ]
        },
        {
            title: 'Título de Artículo con Caracteres Especiales',
            description: 'Maneja caracteres especiales y símbolos',
            code: 'Entrada: Programación C++: La Guía Completa (Edición 2024)',
            result: 'Slug: programacion-c-guia-completa-edicion-2024'
        }
    ],
    'slugGenerator.useCases': [
        {
            title: 'Posts de Blog y Artículos',
            description: 'Creadores de contenido creando URLs limpias y legibles para contenido de blog que mejoran SEO y experiencia de usuario',
            example: 'Blogger generando slugs para URLs de posts de blog optimizadas para SEO'
        },
        {
            title: 'Páginas de Productos E-commerce',
            description: 'Dueños de tiendas online generando URLs de productos que son legibles para humanos y amigables para motores de búsqueda',
            example: 'Gerente de e-commerce creando URLs limpias de páginas de productos'
        },
        {
            title: 'Documentación y Guías',
            description: 'Escritores técnicos creando estructuras de URL consistentes para documentación y guías de ayuda',
            example: 'Escritor técnico generando slugs para páginas de documentación'
        },
        {
            title: 'Sitios de Noticias y Medios',
            description: 'Periodistas y editores optimizando URLs de artículos para mejor ranking en motores de búsqueda y compartición',
            example: 'Editor de noticias creando URLs de artículos amigables para SEO'
        },
        {
            title: 'Sitios de Portafolio y Galería',
            description: 'Diseñadores y artistas creando URLs limpias para muestras de proyectos y portafolios creativos',
            example: 'Diseñador generando slugs para URLs de proyectos de portafolio'
        }
    ],
    'slugGenerator.technicalDetails': 'Nuestro generador de slugs procesa texto convirtiendo a minúsculas, eliminando caracteres no alfanuméricos (excepto separadores seleccionados) y opcionalmente filtrando palabras comunes. La herramienta maneja caracteres Unicode y los convierte a equivalentes ASCII para máxima compatibilidad de URLs.',
    'slugGenerator.bestPractices': [
        {
            title: 'Mantener URLs Cortas',
            tip: 'Apunta a slugs bajo 60 caracteres para visualización óptima en resultados de búsqueda y mejor experiencia de usuario.'
        },
        {
            title: 'Usar Palabras Clave Descriptivas',
            tip: 'Incluye palabras clave relevantes que describan tu contenido con precisión para mejor rendimiento SEO.'
        },
        {
            title: 'Evitar Palabras Comunes',
            tip: 'Elimina palabras comunes que no añaden valor SEO para hacer URLs más concisas y enfocadas.'
        },
        {
            title: 'Usar Guiones Sobre Guiones Bajos',
            tip: 'Los motores de búsqueda tratan los guiones como separadores de palabras, haciéndolos mejores para SEO que los guiones bajos.'
        },
        {
            title: 'Ser Consistente',
            tip: 'Mantén el mismo formato de slug en todo tu sitio web para mejor experiencia de usuario y SEO.'
        }
    ],
    'slugGenerator.commonErrors': [
        {
            error: 'Usar Caracteres Especiales',
            cause: 'Incluir caracteres como @, #, $, % en URLs que pueden causar problemas de codificación',
            solution: 'Usa solo caracteres alfanuméricos con guiones o guiones bajos como separadores.',
            prevention: 'Deja que el generador de slugs maneje automáticamente la eliminación de caracteres especiales.'
        },
        {
            error: 'Hacer URLs Demasiado Largas',
            cause: 'Crear slugs demasiado largos que se truncarán en resultados de búsqueda',
            solution: 'Mantén slugs concisos y bajo 60 caracteres cuando sea posible.',
            prevention: 'Usa eliminación de palabras comunes y enfócate en palabras clave esenciales.'
        },
        {
            error: 'Incluir Extensiones de Archivo',
            cause: 'Agregar .html, .php u otras extensiones de archivo a slugs innecesariamente',
            solution: 'Elimina extensiones de archivo de slugs ya que son manejadas por configuración del servidor web.',
            prevention: 'Enfócate solo en palabras clave relacionadas con contenido en tus slugs.'
        },
        {
            error: 'Usar Números en Vez de Palabras',
            cause: 'Reemplazar palabras descriptivas con identificadores numéricos',
            solution: 'Usa palabras descriptivas que representen tu contenido con precisión.',
            prevention: 'Prioriza legibilidad y valor SEO sobre brevedad.'
        },
        {
            error: 'Cambiar URLs Frecuentemente',
            cause: 'Modificar URLs publicadas lo que rompe enlaces existentes y valor SEO',
            solution: 'Planifica tu estructura de URLs cuidadosamente y mantén consistencia.',
            prevention: 'Usa el generador de slugs para crear URLs óptimas desde el inicio.'
        }
    ],
    'slugGenerator.alternatives': [
        {
            name: 'Herramientas de Codificación URL',
            useCase: 'Codificación simple de URL para caracteres especiales',
            pros: 'Maneja caracteres especiales, Codificación rápida, Ampliamente disponible',
            cons: 'No optimizado para SEO, Sin enfoque en legibilidad, Funcionalidad limitada',
            comparison: 'Nuestra herramienta crea slugs legibles y optimizados para SEO en lugar de solo codificar caracteres.'
        },
        {
            name: 'Funciones Integradas CMS',
            useCase: 'Generación de slugs WordPress, Drupal y otros CMS',
            pros: 'Integrado, Automático, Sin configuración extra',
            cons: 'Personalización limitada, Específico de plataforma, Menos control',
            comparison: 'Nuestra herramienta ofrece más personalización y funciona en cualquier plataforma.'
        },
        {
            name: 'Librerías de Programación',
            useCase: 'librerías slugify, speakingurl y otras',
            pros: 'Integración de código, Características avanzadas, Personalizable',
            cons: 'Requiere programación, Complejidad de configuración, Uso limitado independiente',
            comparison: 'Nuestra herramienta proporciona generación instantánea de slugs sin requisitos de programación.'
        },
        {
            name: 'Acortadores de URL Online',
            useCase: 'Bitly, TinyURL y otros servicios de acortamiento de URL',
            pros: 'URLs muy cortas, Seguimiento analítico, Fácil compartición',
            cons: 'No amigables para SEO, Dependencia de terceros, Pérdida de control',
            comparison: 'Nuestra herramienta crea URLs descriptivas y optimizadas para SEO en lugar de solo cortas.'
        }
    ],
    'slugGenerator.relatedTools': [
        {
            name: 'Codificador/Decodificador URL',
            description: 'Codifica y decodifica URLs con caracteres especiales de forma segura',
            url: '/url-encoder'
        },
        {
            name: 'Generador de Cadenas Aleatorias',
            description: 'Genera cadenas aleatorias para contraseñas e identificadores únicos',
            url: '/random-string-generator'
        },
        {
            name: 'Convertidor de Caso de Texto',
            description: 'Convierte texto entre diferentes formatos de caso como camelCase y snake_case',
            url: '/text-case-converter'
        },
        {
            name: 'Codificador de Entidades HTML',
            description: 'Codifica caracteres especiales para visualización segura en HTML',
            url: '/html-entity-encoder'
        },
        {
            name: 'Generador de Meta Tags',
            description: 'Genera meta tags SEO para páginas web',
            url: '/meta-tags-generator'
        },
        {
            name: 'Verificador de Densidad de Palabras Clave',
            description: 'Analiza la densidad de palabras clave en tu texto para optimización SEO',
            url: '/keyword-density-checker'
        }
    ],
    'slugGenerator.faqs': [
        {
            question: '¿Qué es un slug en las URLs?',
            answer: 'Un slug es la parte de una URL que identifica una página específica en forma legible para humanos, típicamente derivada del título de la página. Por ejemplo, en "ejemplo.com/blog/como-programar", el slug es "como-programar".'
        },
        {
            question: '¿Por qué debería eliminar palabras comunes de los slugs?',
            answer: 'Eliminar palabras comunes como "el", "y", "o" crea URLs más cortas y enfocadas que son mejores para SEO y legibilidad. Estas palabras típicamente no añaden valor a la optimización de motores de búsqueda.'
        },
        {
            question: '¿Cuál es la diferencia entre usar guiones y guiones bajos?',
            answer: 'Los guiones (-) son preferidos para SEO ya que los motores de búsqueda los tratan como separadores de palabras. Los guiones bajos (_) a veces se usan en contextos técnicos pero no separan palabras tan efectivamente para motores de búsqueda.'
        },
        {
            question: '¿Puedo usar esta herramienta para texto no inglés?',
            answer: 'Sí, la herramienta maneja caracteres Unicode y los convierte a equivalentes ASCII para compatibilidad de URLs. Sin embargo, algunos caracteres especiales pueden ser normalizados a sus equivalentes ASCII más cercanos.'
        },
        {
            question: '¿Qué tan largo debería ser un slug?',
            answer: 'Idealmente mantén slugs bajo 60 caracteres para visualización óptima en resultados de búsqueda y mejor experiencia de usuario. Los slugs más cortos también son más compartibles y memorables.'
        },
        {
            question: '¿Puedo personalizar la lista de palabras comunes?',
            answer: 'Actualmente la herramienta usa una lista predefinida de palabras comunes en inglés. Palabras comunes personalizadas pueden ser agregadas en futuras actualizaciones basadas en feedback de usuarios.'
        },
        {
            question: '¿Los slugs generados son amigables para SEO?',
            answer: 'Sí, la herramienta sigue mejores prácticas de SEO creando URLs legibles, ricas en palabras clave con separadores apropiados. Esto ayuda a mejorar el ranking en motores de búsqueda y la experiencia de usuario.'
        },
        {
            question: '¿Puedo usar slugs para nombres de archivo?',
            answer: 'Sí, los slugs generados también son adecuados para crear nombres de archivo limpios y legibles que siguen mejores prácticas web y son compatibles con la mayoría de sistemas.'
        }
    ],
    'slugGenerator.securityNote': 'Esta herramienta procesa todos los datos localmente en tu navegador. Ningún texto o slug es enviado a servidores externos, asegurando que tu contenido permanezca privado y seguro.',
    'slugGenerator.additionalContent': 'Para desarrolladores: Este generador de slugs puede ser integrado en aplicaciones web usando la API proporcionada. El algoritmo sigue mejores prácticas de SEO y es compatible con estándares web modernos. Considera implementar validación del lado del servidor para aplicaciones críticas y mantener estructuras de URL consistentes en tu sitio web.'
};
