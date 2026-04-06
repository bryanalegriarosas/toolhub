export default {
    'httpStatusCodes.title': 'Búsqueda de Códigos de Estado HTTP',
    'httpStatusCodes.copy': 'Copiar',
    'httpStatusCodes.download_code': 'Descargar Código',
    'httpStatusCodes.clear': 'Limpiar',
    'httpStatusCodes.save': 'Guardar',
    'httpStatusCodes.enter_status_code_placeholder': 'Ingresa código de estado (ej. 404)',
    'httpStatusCodes.history': 'Historial',
    'httpStatusCodes.restore': 'Restaurar',
    'httpStatusCodes.download_history': 'Descargar Historial',
    'httpStatusCodes.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to HTTP Status Codes
    'httpStatusCodes.mainDescription': 'Herramienta gratuita de búsqueda de códigos de estado HTTP con base de datos comprehensiva, seguimiento de historial y significados instantáneos. Perfecta para desarrolladores depurando respuestas HTTP.',
    'httpStatusCodes.extendedDescription': 'Nuestra herramienta comprehensiva de búsqueda de códigos de estado HTTP te ayuda a encontrar instantáneamente significados de códigos de estado HTTP con descripciones detalladas. Incluye base de datos completa de todos los códigos de estado HTTP estándar, seguimiento de historial para búsquedas frecuentes y explicaciones detalladas para depurar aplicaciones web. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'httpStatusCodes.features': [
        {
            title: 'Base de Datos de Estado Completa',
            description: 'Base de datos completa de todos los códigos de estado HTTP estándar desde 1xx hasta 5xx'
        },
        {
            title: 'Búsqueda Instantánea de Códigos',
            description: 'Obtén instantáneamente significados y descripciones para cualquier código de estado HTTP'
        },
        {
            title: 'Explicaciones Detalladas',
            description: 'Explicaciones comprehensivas de lo que significa cada código de estado y cuándo ocurre'
        },
        {
            title: 'Seguimiento de Historial',
            description: 'Guarda y gestiona códigos de estado buscados frecuentemente con timestamps'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia con un clic códigos de estado y descarga resultados para documentación'
        },
        {
            title: 'Organización por Categorías',
            description: 'Códigos de estado organizados por categorías: informativos, éxito, redirección, error de cliente, error de servidor'
        },
        {
            title: 'Resaltado de Códigos Comunes',
            description: 'Acceso rápido a los códigos de estado HTTP más comúnmente encontrados'
        },
        {
            title: 'Enfoque en Códigos de Error',
            description: 'Enfoque especial en códigos de error con información de solución de problemas'
        },
        {
            title: 'Referencia de Códigos de Éxito',
            description: 'Referencia completa para códigos de respuesta HTTP exitosos'
        },
        {
            title: 'Guía de Redirección',
            description: 'Guía detallada para entender códigos de redirección HTTP'
        },
        {
            title: 'Compatible con Móvil',
            description: 'Diseño responsivo optimizado para uso móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Todas las búsquedas ocurren localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'httpStatusCodes.steps': [
        'Ingresa el número del código de estado HTTP en el campo de entrada',
        'Ve la descripción instantánea y el significado del código de estado',
        'Entiende el contexto e implicaciones de la respuesta',
        'Usa botones de copiar o descargar para propósitos de documentación',
        'Guarda códigos usados frecuentemente en el historial para acceso rápido',
        'Restaura búsquedas anteriores del historial cuando sea necesario'
    ],
    'httpStatusCodes.examples': [
        {
            title: 'Códigos de Error Comunes',
            description: 'Busca códigos de error HTTP encontrados frecuentemente',
            code: 'Entrada: 404',
            result: '404 - No Encontrado: El recurso solicitado no pudo ser encontrado en este servidor. Verifica la URL e intenta de nuevo.'
        },
        {
            title: 'Códigos de Respuesta Exitosa',
            description: 'Verifica códigos de respuesta HTTP exitosos',
            code: 'Entrada: 200',
            result: '200 - OK: La solicitud ha tenido éxito. Este es el código de respuesta HTTP más común indicando procesamiento exitoso de la solicitud.',
            steps: [
                'Ingresa el número del código de estado HTTP',
                'Ve la descripción detallada y el significado',
                'Entiende el estado de respuesta del servidor',
                'Usa para depurar aplicaciones web'
            ]
        },
        {
            title: 'Códigos de Redirección',
            description: 'Busca códigos de estado de redirección HTTP',
            code: 'Entrada: 301',
            result: '301 - Movido Permanentemente: El recurso solicitado ha sido movido permanentemente a una nueva URL. Actualiza tus marcadores y enlaces.'
        }
    ],
    'httpStatusCodes.useCases': [
        {
            title: 'Depuración de Desarrollo Web',
            description: 'Desarrolladores depurando respuestas HTTP y entendiendo el comportamiento del servidor',
            example: 'Desarrollador frontend verificando por qué las llamadas API están fallando con errores 403'
        },
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores backend implementando códigos de estado HTTP apropiados en APIs',
            example: 'Desarrollador API eligiendo códigos de estado apropiados para diferentes escenarios'
        },
        {
            title: 'Administración de Sistemas',
            description: 'Administradores de sistemas solucionando problemas de servidores web',
            example: 'Sysadmin investigando errores 502 Bad Gateway en servidores de producción'
        },
        {
            title: 'Análisis SEO',
            description: 'Especialistas SEO analizando códigos de estado HTTP para optimización de sitios web',
            example: 'Analista SEO verificando errores 404 que podrían afectar rankings de búsqueda'
        },
        {
            title: 'Aseguramiento de Calidad',
            description: 'Probadores QA verificando respuestas de códigos de estado HTTP apropiadas',
            example: 'Ingeniero QA validando que escenarios de error devuelvan códigos de estado apropiados'
        },
        {
            title: 'Aprendizaje HTTP',
            description: 'Estudiantes y principiantes aprendiendo sobre protocolo HTTP y códigos de estado',
            example: 'Estudiante de ciencias de la computación entendiendo la diferencia entre redirecciones 301 y 302'
        },
        {
            title: 'Solución de Problemas de Red',
            description: 'Ingenieros de red diagnosticando problemas de comunicación HTTP',
            example: 'Administrador de red analizando errores 503 Service Unavailable durante interrupciones'
        },
        {
            title: 'Escritura de Documentación',
            description: 'Escritores técnicos documentando comportamiento de API y manejo de errores',
            example: 'Escritor técnico creando documentación para respuestas de error de API'
        }
    ],
    'httpStatusCodes.technicalDetails': 'Nuestra herramienta de búsqueda de códigos de estado HTTP usa un objeto JavaScript comprehensivo que contiene todos los códigos de estado HTTP estándar con descripciones detalladas. La herramienta proporciona búsquedas instantáneas, gestión de historial usando localStorage y soporta todas las categorías principales de códigos de estado HTTP (1xx-5xx). Todo el procesamiento ocurre localmente usando JavaScript moderno.',
    'httpStatusCodes.bestPractices': [
        {
            title: 'Usa Códigos Apropiados',
            tip: 'Siempre usa el código de estado HTTP más específico y apropiado para tu escenario de respuesta.'
        },
        {
            title: 'Documenta Códigos Personalizados',
            tip: 'Si usas códigos de estado personalizados, documéntalos exhaustivamente para consumidores de API.'
        },
        {
            title: 'Maneja Errores Gracefully',
            tip: 'Implementa manejo de errores apropiado para errores de cliente (4xx) y errores de servidor (5xx).'
        },
        {
            title: 'Usa Redirecciones Correctamente',
            tip: 'Usa 301 para redirecciones permanentes y 302 para redirecciones temporales para optimizar SEO.'
        }
    ],
    'httpStatusCodes.commonErrors': [
        {
            error: 'Código de Estado Inválido',
            cause: 'Ingresar valores no numéricos o códigos de estado fuera de rango',
            solution: 'Ingresa códigos de estado HTTP válidos entre 100 y 599.',
            prevention: 'Usa la herramienta de búsqueda para verificar códigos de estado antes de la implementación.'
        },
        {
            error: 'Uso Incorrecto de Código',
            cause: 'Usar códigos de estado incorrectos para escenarios específicos',
            solution: 'Investiga el uso apropiado de códigos de estado HTTP y sigue los estándares HTTP.',
            prevention: 'Refiere a especificaciones HTTP y mejores prácticas para la selección de códigos.'
        },
        {
            error: 'Manejo de Errores Faltante',
            cause: 'No implementar manejo apropiado para diferentes códigos de estado',
            solution: 'Agrega manejo de errores comprehensivo para todos los escenarios posibles de códigos de estado.',
            prevention: 'Planifica estrategias de manejo de errores durante la fase de diseño de la aplicación.'
        },
        {
            error: 'Uso Inconsistente de Códigos',
            cause: 'Usar diferentes códigos de estado para escenarios similares en toda la aplicación',
            solution: 'Establece patrones de uso de códigos de estado consistentes y documéntalos.',
            prevention: 'Crea guías de códigos de estado y asegúrate de que el equipo las siga consistentemente.'
        },
        {
            error: 'Ignorar Errores de Cliente',
            cause: 'No abordar apropiadamente los códigos de error 4xx en aplicaciones',
            solution: 'Implementa manejo de errores de cliente apropiado y mecanismos de retroalimentación al usuario.',
            prevention: 'Prueba todos los escenarios de error de cliente y proporciona mensajes de error útiles.'
        },
        {
            error: 'Gestión Incorrecta de Errores de Servidor',
            cause: 'Manejo pobre de códigos de error 5xx llevando a mala experiencia de usuario',
            solution: 'Implementa degradación graceful y mecanismos de recuperación de errores.',
            prevention: 'Monitoriza errores de servidor e implementa alertado y recuperación automatizados.'
        }
    ],
    'httpStatusCodes.alternatives': [
        {
            name: 'MDN Web Docs',
            useCase: 'Documentación HTTP comprehensiva de Mozilla',
            pros: 'Documentación oficial, Explicaciones detalladas, Actualizaciones regulares',
            cons: 'Lenguaje técnico, Sin herramienta de búsqueda, Internet requerido',
            comparison: 'Nuestra herramienta proporciona búsqueda instantánea con interfaz amigable e historial.'
        },
        {
            name: 'Sitios Web de Códigos de Estado HTTP',
            useCase: 'Sitios web de referencia online para códigos de estado HTTP',
            pros: 'Acceso multiplataforma, Funcionalidad de búsqueda, Recursos adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Anuncios y distracciones',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y sin distracciones.'
        },
        {
            name: 'DevTools del Navegador',
            useCase: 'Herramientas de desarrollador incorporadas del navegador para monitoreo HTTP',
            pros: 'Monitoreo en tiempo real, Integrado con navegador, Características avanzadas',
            cons: 'Específico del navegador, Interfaz compleja, Conocimiento técnico requerido',
            comparison: 'Nuestra herramienta ofrece búsqueda simple enfocada en significados de códigos de estado.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas CLI para referencia de códigos de estado HTTP',
            pros: 'Programable, Acceso rápido, No se necesita GUI',
            cons: 'Configuración requerida, Características limitadas, Instalación manual',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con historial y características adicionales.'
        }
    ],
    'httpStatusCodes.relatedTools': [
        {
            name: 'Verificador de Cabeceras HTTP',
            description: 'Verifica y analiza cabeceras HTTP de cualquier URL',
            url: '/http-header-checker'
        },
        {
            name: 'Codificador/Decodificador URL',
            description: 'Codifica y decodifica URLs para aplicaciones web',
            url: '/url-encoder-decoder'
        },
        {
            name: 'Probador API',
            description: 'Prueba endpoints y respuestas de API',
            url: '/api-tester'
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
            name: 'Prueba Ping',
            description: 'Prueba conectividad de red y latencia',
            url: '/ping-test'
        },
        {
            name: 'Prueba de Velocidad de Sitio Web',
            description: 'Prueba rendimiento y velocidad de sitio web',
            url: '/website-speed-test'
        },
        {
            name: 'Generador cURL',
            description: 'Genera comandos cURL para solicitudes HTTP',
            url: '/curl-generator'
        }
    ],
    'httpStatusCodes.faqs': [
        {
            question: '¿Qué son los códigos de estado HTTP?',
            answer: 'Los códigos de estado HTTP son números de tres dígitos devueltos por servidores web para indicar el resultado de una solicitud HTTP. Van desde 100-599 y se categorizan en informativos (1xx), exitosos (2xx), redirección (3xx), errores de cliente (4xx) y errores de servidor (5xx).'
        },
        {
            question: '¿Cuántos códigos de estado HTTP existen?',
            answer: 'Hay códigos de estado HTTP oficialmente definidos desde 100 hasta 599, aunque no todos los números en este rango están asignados. Las categorías principales son: 1xx (informativos), 2xx (éxito), 3xx (redirección), 4xx (errores de cliente) y 5xx (errores de servidor).'
        },
        {
            question: '¿Cuál es el código de estado HTTP más común?',
            answer: '200 OK es el código de estado HTTP más común, indicando que la solicitud HTTP fue exitosa. Otros códigos comunes incluyen 404 (No Encontrado), 301 (Movido Permanentemente), 500 (Error Interno del Servidor) y 403 (Prohibido).'
        },
        {
            question: '¿Qué significa 404 No Encontrado?',
            answer: '404 No Encontrado significa que el servidor no pudo encontrar el recurso solicitado. Esto ocurre cuando la URL es incorrecta, el recurso ha sido movido o eliminado, o hay problemas de permisos que previenen el acceso al recurso.'
        },
        {
            question: '¿Cuál es la diferencia entre redirecciones 301 y 302?',
            answer: '301 indica una redirección permanente, diciendo a los motores de búsqueda que actualicen sus índices, mientras que 302 indica una redirección temporal. Usa 301 cuando un recurso se ha movido permanentemente, y 302 para redirecciones temporales o durante mantenimiento.'
        },
        {
            question: '¿Qué son los códigos de error de servidor (5xx)?',
            answer: 'Los códigos 5xx indican errores del lado del servidor donde el servidor falló en cumplir una solicitud válida. Ejemplos comunes incluyen 500 (Error Interno del Servidor), 502 (Bad Gateway), 503 (Servicio No Disponible) y 504 (Gateway Timeout).'
        },
        {
            question: '¿Qué son los códigos de error de cliente (4xx)?',
            answer: 'Los códigos 4xx indican errores del lado del cliente donde la solicitud contiene sintaxis incorrecta o no puede ser cumplida. Ejemplos comunes incluyen 400 (Bad Request), 401 (No Autorizado), 403 (Prohibido), 404 (No Encontrado) y 429 (Demasiadas Solicitudes).'
        },
        {
            question: '¿Puedo crear códigos de estado HTTP personalizados?',
            answer: 'Aunque técnicamente puedes usar códigos de estado no asignados, no se recomienda. Mantente a los códigos de estado HTTP estándar para compatibilidad. Si necesitas respuestas personalizadas, usa códigos estándar e incluye información personalizada en el cuerpo de la respuesta.'
        },
        {
            question: '¿Cómo debería manejar diferentes códigos de estado en mi aplicación?',
            answer: 'Implementa manejo de errores apropiado para errores de cliente 4xx (muestra mensajes amigables al usuario), lógica de reintento para errores de servidor 5xx, y acciones apropiadas para redirecciones 3xx. Siempre proporciona retroalimentación significativa a los usuarios independientemente del código de estado.'
        },
        {
            question: '¿Son privadas mis búsquedas?',
            answer: 'Todas las búsquedas de códigos de estado HTTP ocurren directamente en tu navegador. Tu historial de búsqueda se almacena localmente y nunca se envía a nuestros servidores, asegurando completa privacidad.'
        }
    ],
    'httpStatusCodes.securityNote': 'Todas las búsquedas de códigos de estado HTTP ocurren localmente en tu navegador usando JavaScript. No se almacenan códigos de estado o historial de búsqueda en nuestros servidores, asegurando completa privacidad y seguridad.',
    'httpStatusCodes.additionalContent': 'El entendimiento de códigos de estado HTTP es esencial para desarrollo web, diseño de API, depuración y administración de sistemas. Combina nuestra búsqueda de códigos de estado con otras herramientas como verificadores de cabeceras HTTP, probadores API y verificadores de redirecciones para flujos de trabajo comprehensivos de desarrollo web y solución de problemas.'
};
