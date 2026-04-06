export default {
    'robots.title': 'Generador de Robots.txt - Herramienta SEO Online Gratuita',
    'robots.generate_button': 'Generar Robots.txt',
    'robots.copy_result': 'Copiar Resultado',
    'robots.copied': '¡Copiado!',
    'robots.download': 'Descargar',
    'robots.clear': 'Limpiar',
    'robots.generated_robots': 'Robots.txt Generado',
    'robots.copy_all': 'Copiar Todo',
    'robots.download_file': 'Descargar Archivo',
    'robots.live_preview': 'Vista Previa',
    'robots.validation_errors': 'Por favor corrige los siguientes problemas:',
    
    // SEO Content specific to robots.txt generator
    'robots.mainDescription': 'Generador de robots.txt gratuito online con directivas avanzadas, configuración de user-agent y validación en tiempo real. Crea archivos robots.txt profesionales para mejor control de rastreo de motores de búsqueda.',
    'robots.extendedDescription': 'Nuestro generador comprehensivo de robots.txt te ayuda a crear instrucciones de rastreo optimizadas para motores de búsqueda. Soporte para directivas User-agent, reglas Allow/Disallow, Crawl-delay, directivas Host y declaraciones Sitemap con validación de sintaxis y guía de mejores prácticas.',
    'robots.features': [
        {
            title: 'Configuración de User-Agent',
            description: 'Soporte para todos los bots principales de motores de búsqueda incluyendo Googlebot, Bingbot y user agents personalizados con reglas de rastreo específicas'
        },
        {
            title: 'Directivas Avanzadas',
            description: 'Soporte completo para Allow, Disallow, Crawl-delay, Host y directivas Sitemap con validación de sintaxis'
        },
        {
            title: 'Validación en Tiempo Real',
            description: 'Verificación instantánea de sintaxis y detección de errores para asegurar que tu robots.txt siga estándares web y mejores prácticas'
        },
        {
            title: 'Gestión Múltiple de Reglas',
            description: 'Agrega, edita y elimina múltiples reglas Allow/Disallow con interfaz intuitiva y estructura organizada'
        },
        {
            title: 'Integración de Sitemap',
            description: 'Declaración fácil de sitemap con validación de URL y soporte para múltiples archivos sitemap'
        },
        {
            title: 'Control de Rastreo',
            description: 'Configuración precisa de crawl-delay para gestionar carga del servidor y controlar frecuencia de acceso de bots'
        },
        {
            title: 'Opciones de Exportación',
            description: 'Descarga como archivo robots.txt o copia al portapapeles para implementación inmediata'
        },
        {
            title: 'Vista Previa en Vivo',
            description: 'Ve exactamente cómo se verá tu archivo robots.txt antes de descargar con salida formateada'
        }
    ],
    'robots.steps': [
        'Configura tus ajustes de User-agent (Todos los bots, Googlebot, o personalizado)',
        'Establece crawl delay para controlar frecuencia de acceso de bots (0-3600 segundos)',
        'Agrega reglas Allow para rutas que quieres que los bots accedan',
        'Agrega reglas Disallow para directorios y archivos restringidos',
        'Configura directivas Host para optimización SEO regional',
        'Agrega URLs de Sitemap para ayudar a motores de búsqueda a descubrir tu contenido',
        'Genera y previsualiza tu archivo robots.txt',
        'Descarga o copia el archivo al directorio raíz de tu sitio web'
    ],
    'robots.examples': [
        {
            title: 'Robots.txt Básico para Blog',
            description: 'Configuración simple para sitios web de blog',
            code: 'User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /wp-admin/\nSitemap: https://blog.ejemplo.com/sitemap.xml',
            result: 'Permite que todos los bots accedan al contenido mientras restringen áreas de administración'
        },
        {
            title: 'Configuración de Tienda E-commerce',
            description: 'Robots.txt para tiendas online con páginas de productos',
            code: 'User-agent: *\nAllow: /\nDisallow: /cart/\nDisallow: /checkout/\nDisallow: /admin/\nCrawl-delay: 1\nSitemap: https://tienda.ejemplo.com/sitemap.xml',
            result: 'Optimizado para e-commerce con restricciones de carrito y crawl delay'
        },
        {
            title: 'Configuración de Sitio Corporativo',
            description: 'Configuración profesional para sitios web de negocios',
            code: 'User-agent: *\nAllow: /\nDisallow: /private/\nDisallow: /internal/\nDisallow: /temp/\nUser-agent: Googlebot\nCrawl-delay: 2\nSitemap: https://empresa.ejemplo.com/sitemap.xml',
            result: 'Configuración corporativa con ajustes específicos de Googlebot y restricciones de áreas privadas'
        }
    ],
    'robots.useCases': [
        {
            title: 'Optimización de Blog',
            description: 'Bloggers controlando acceso a contenido y áreas de administración mientras aseguran indexación apropiada',
            example: 'Blog de viajes permitiendo posts públicos pero restringiendo secciones de borradores y administración'
        },
        {
            title: 'Gestión E-commerce',
            description: 'Tiendas online gestionando acceso de bots a páginas de productos mientras protegen procesos de checkout',
            example: 'Sitio retail permitiendo rastreo de productos pero bloqueando áreas de carrito y checkout'
        },
        {
            title: 'Sitios Web Corporativos',
            description: 'Sitios web de negocios protegiendo contenido interno sensible mientras mantienen visibilidad pública',
            example: 'Sitio de empresa permitiendo páginas públicas pero restringiendo documentación interna'
        },
        {
            title: 'Pruebas de Desarrollo',
            description: 'Desarrolladores creando robots.txt para ambientes de staging y pruebas',
            example: 'Sitio de prueba bloqueando todos los motores de búsqueda durante fase de desarrollo'
        },
        {
            title: 'Auditorías SEO',
            description: 'Profesionales SEO analizando y optimizando archivos robots.txt para mejor rastreo',
            example: 'Agencia revisando robots.txt de clientes para problemas de eficiencia de rastreo'
        },
        {
            title: 'Sitios Multi-idioma',
            description: 'Sitios web con múltiples versiones de idioma gestionando preferencias de rastreo regionales',
            example: 'Sitio internacional usando directivas Host para targeting regional'
        }
    ],
    'robots.technicalDetails': 'Robots.txt es un archivo de texto que dice a los crawlers de motores de búsqueda qué páginas o archivos el crawler puede o no puede solicitar de tu sitio. Usa el Protocolo de Exclusión de Robots con directivas como User-agent para especificar crawlers, Allow/Disallow para controlar acceso, Crawl-delay para gestionar tiempo, Sitemap para declarar ubicaciones de sitemap, y Host para preferencias regionales. El archivo debe colocarse en el directorio raíz del sitio web y sigue reglas de sintaxis específicas que los motores de búsqueda interpretan para optimizar comportamiento de rastreo.',
    'robots.bestPractices': [
        {
            title: 'Ubicación del Archivo',
            tip: 'Siempre coloca robots.txt en el directorio raíz (https://ejemplo.com/robots.txt). Los motores de búsqueda no lo encontrarán en subdirectorios. Asegura que el archivo sea accesible y devuelva headers HTTP apropiados.'
        },
        {
            title: 'Orden de User-Agent',
            tip: 'Comienza con user agents específicos (Googlebot, Bingbot) antes del comodín (*). Cada grupo de user-agent debe ser seguido por sus directivas específicas. Usa grupos separados para diferentes bots cuando sea necesario.'
        },
        {
            title: 'Estructura de Directivas',
            tip: 'Usa Allow antes de Disallow para los mismos patrones de ruta. Sé específico con patrones de ruta usando comodines (*) y marcadores de fin de ruta ($). Prueba patrones con Google Robots Testing Tool.'
        },
        {
            title: 'Declaración de Sitemap',
            tip: 'Incluye URLs de sitemap al final del archivo. Usa URLs absolutas con protocolo apropiado (https://). Lista múltiples sitemaps si es necesario, uno por línea.'
        }
    ],
    'robots.commonErrors': [
        {
            error: 'Ubicación Incorrecta del Archivo',
            cause: 'Colocar robots.txt en subdirectorios en lugar del directorio raíz',
            solution: 'Mueve el archivo al directorio raíz del sitio web (https://ejemplo.com/robots.txt)',
            prevention: 'Siempre verifica accesibilidad del archivo navegando a la URL directa'
        },
        {
            error: 'Errores de Sintaxis',
            cause: 'Errores tipográficos en nombres de directivas, dos puntos faltantes, o formato incorrecto',
            solution: 'Usa herramientas de validación y prueba con Google Robots Testing Tool',
            prevention: 'Genera con nuestra herramienta y valida sintaxis antes de implementación'
        },
        {
            error: 'Bloqueo de Contenido Importante',
            cause: 'Reglas Disallow demasiado amplias previniendo acceso a páginas importantes',
            solution: 'Revisa directivas Disallow y usa patrones de ruta específicos',
            prevention: 'Prueba con Google Search Console para asegurar indexación apropiada'
        },
        {
            error: 'Declaración de Sitemap Faltante',
            cause: 'Olvidar incluir URLs de sitemap en robots.txt',
            solution: 'Agrega directivas Sitemap al final del archivo',
            prevention: 'Incluye siempre declaraciones de sitemap para mejor descubrimiento de contenido'
        },
        {
            error: 'Problemas de Sensibilidad a Mayúsculas',
            cause: 'Usar mayúsculas incorrectas en directivas o patrones de ruta',
            solution: 'Usa capitalización apropiada: User-agent, Allow, Disallow, Sitemap',
            prevention: 'Sigue convenciones de sintaxis estándar de robots.txt'
        },
        {
            error: 'Tamaño de Archivo Grande',
            cause: 'Crear robots.txt demasiado complejo con demasiadas reglas',
            solution: 'Mantén archivo bajo 500KB y simplifica reglas donde sea posible',
            prevention: 'Usa patrones eficientes y elimina directivas innecesarias'
        }
    ],
    'robots.alternatives': [
        {
            name: 'Editor de Texto Manual',
            useCase: 'Desarrolladores cómodos con sintaxis de robots.txt',
            pros: 'Control completo, Sin dependencias, Experiencia de aprendizaje',
            cons: 'Propenso a errores, Sin validación, Consume tiempo',
            comparison: 'Nuestra herramienta proporciona validación y guía mientras mantiene flexibilidad'
        },
        {
            name: 'Plugins CMS',
            useCase: 'Usuarios de WordPress, Drupal u otros CMS',
            pros: 'Gestión integrada, Actualizaciones automáticas, Interfaz fácil',
            cons: 'Específico de CMS, Personalización limitada, Dependencias de plugins',
            comparison: 'Nuestra herramienta funciona con cualquier plataforma y ofrece características avanzadas'
        },
        {
            name: 'Herramientas de Plataforma SEO',
            useCase: 'Plataformas de gestión SEO empresarial',
            pros: 'Análisis avanzados, Colaboración en equipo, Optimización automatizada',
            cons: 'Caras, Configuración compleja, Excesivo para sitios simples',
            comparison: 'Nuestra herramienta proporciona características esenciales sin complejidad o costo'
        },
        {
            name: 'Generadores Online',
            useCase: 'Creación rápida básica de robots.txt',
            pros: 'Rápido, Interfaz simple, Sin instalación',
            cons: 'Características limitadas, Validación básica, Sin opciones avanzadas',
            comparison: 'Nuestra herramienta ofrece características comprehensivas con validación de nivel profesional'
        }
    ],
    'robots.relatedTools': [
        {
            name: 'Generador de Meta Tags',
            description: 'Crea meta tags SEO para mejor ranking en buscadores y compartir en redes sociales',
            url: '/meta-tag-generator'
        },
        {
            name: 'Generador de Sitemap',
            description: 'Genera sitemaps XML para ayudar a motores de búsqueda a descubrir e indexar tu contenido',
            url: '/sitemap-generator'
        },
        {
            name: 'Generador de Schema Markup',
            description: 'Crea markup de datos estructurados para fragmentos ricos en resultados de búsqueda',
            url: '/schema-generator'
        },
        {
            name: 'Analizador SEO',
            description: 'Analiza rendimiento SEO de tu sitio web y obtiene recomendaciones de optimización',
            url: '/seo-analyzer'
        },
        {
            name: 'Herramienta de Investigación de Palabras Clave',
            description: 'Encuentra palabras clave relevantes con datos de volumen de búsqueda y competencia',
            url: '/keyword-research'
        },
        {
            name: 'Analizador de Velocidad de Página',
            description: 'Verifica velocidad de carga del sitio web y obtiene sugerencias de optimización',
            url: '/page-speed'
        },
        {
            name: 'Generador de Certificado SSL',
            description: 'Genera certificados SSL para conexiones HTTPS seguras',
            url: '/ssl-generator'
        }
    ],
    'robots.faqs': [
        {
            question: '¿Qué es robots.txt?',
            answer: 'Robots.txt es un archivo de texto que dice a los crawlers de motores de búsqueda qué páginas o archivos el crawler puede o no puede solicitar de tu sitio. Es parte del Protocolo de Exclusión de Robots y ayuda a controlar comportamiento de rastreo.'
        },
        {
            question: '¿Dónde debería colocar robots.txt?',
            answer: 'Robots.txt debe colocarse en el directorio raíz de tu sitio web (https://ejemplo.com/robots.txt). Los motores de búsqueda solo lo buscarán en esta ubicación específica.'
        },
        {
            question: '¿Es robots.txt obligatorio para SEO?',
            answer: 'No, robots.txt no es obligatorio, pero es altamente recomendado para SEO. Ayuda a controlar presupuesto de rastreo, previene indexación de contenido sensible, y puede mejorar eficiencia de motores de búsqueda.'
        },
        {
            question: '¿Puede robots.txt bloquear todos los motores de búsqueda?',
            answer: 'Sí, puedes bloquear todos los motores de búsqueda usando "User-agent: *" seguido de "Disallow: /". Sin embargo, esto prevendrá que tu sitio sea indexado y aparezca en resultados de búsqueda.'
        },
        {
            question: '¿Cuál es la diferencia entre Allow y Disallow?',
            answer: 'Allow permite explícitamente acceso a rutas específicas, mientras Disallow previene acceso. Si ambos aplican a la misma ruta, la regla más específica tiene precedencia. Por defecto, todas las rutas están permitidas.'
        },
        {
            question: '¿Qué es Crawl-delay?',
            answer: 'Crawl-delay dice a los motores de búsqueda cuántos segundos esperar entre solicitudes. Ayuda a gestionar carga del servidor y previene abrumar tu sitio web con demasiadas solicitudes rápidas.'
        },
        {
            question: '¿Cómo incluyo múltiples sitemaps?',
            answer: 'Agrega múltiples directivas Sitemap, una por línea: "Sitemap: https://ejemplo.com/sitemap1.xml" y "Sitemap: https://ejemplo.com/sitemap2.xml"'
        },
        {
            question: '¿Puedo usar comodines en robots.txt?',
            answer: 'Sí, puedes usar asterisco (*) como comodín para coincidir con cualquier carácter en rutas, y signo de dólar ($) para marcar fin de cadena. Por ejemplo: "Disallow: /*.pdf$" bloquea todos los archivos PDF.'
        },
        {
            question: '¿Con qué frecuencia debería actualizar robots.txt?',
            answer: 'Actualiza robots.txt cuando agregues nuevas secciones a tu sitio, cambies estructura de URL, o necesites modificar reglas de rastreo. Se recomiendan revisiones regulares para sitios web grandes.'
        },
        {
            question: '¿Es gratis este generador de robots.txt?',
            answer: '¡Sí! Nuestro generador de robots.txt es completamente gratuito sin registro requerido. Genera archivos robots.txt ilimitados para todos tus sitios web.'
        }
    ],
    'robots.securityNote': 'Toda la generación de robots.txt ocurre localmente en tu navegador. No se envían datos a nuestros servidores, asegurando que la estructura de tu sitio web y preferencias de rastreo permanezcan privadas y seguras.',
    'robots.additionalContent': 'Robots.txt es solo una parte de estrategia SEO comprehensiva. Combina nuestro generador de robots.txt con meta tags apropiados, sitemaps de calidad y SEO técnico para rendimiento óptimo de motores de búsqueda y eficiencia de rastreo.'
};
