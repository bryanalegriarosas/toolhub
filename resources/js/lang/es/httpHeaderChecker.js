export default {
    'httpHeaderChecker.title': 'Verificador de Cabeceras HTTP',
    'httpHeaderChecker.url': 'URL',
    'httpHeaderChecker.enter_url_placeholder': 'Ingresa URL (ej., https://example.com)',
    'httpHeaderChecker.check_headers': 'Verificar Cabeceras',
    'httpHeaderChecker.loading': 'Cargando...',
    'httpHeaderChecker.clear': 'Limpiar',
    'httpHeaderChecker.quick_urls': 'URLs Rápidas:',
    'httpHeaderChecker.response_information': 'Información de Respuesta',
    'httpHeaderChecker.status': 'Estado:',
    'httpHeaderChecker.method': 'Método:',
    'httpHeaderChecker.protocol': 'Protocolo:',
    'httpHeaderChecker.response_time': 'Tiempo de Respuesta:',
    'httpHeaderChecker.content_type': 'Tipo de Contenido:',
    'httpHeaderChecker.http_headers': 'Cabeceras HTTP',
    'httpHeaderChecker.headers_analysis': 'Análisis de Cabeceras',
    'httpHeaderChecker.caching': 'Caché:',
    'httpHeaderChecker.security': 'Seguridad:',
    'httpHeaderChecker.compression': 'Compresión:',
    'httpHeaderChecker.cors': 'CORS:',
    'httpHeaderChecker.content_size': 'Tamaño de Contenido:',
    'httpHeaderChecker.server': 'Servidor:',
    'httpHeaderChecker.copy_headers': 'Copiar Cabeceras',
    'httpHeaderChecker.download_headers': 'Descargar Cabeceras',
    'httpHeaderChecker.refresh': 'Actualizar',
    'httpHeaderChecker.recent_checks': 'Verificaciones Recientes',
    
    // SEO Content specific to HTTP Header checker
    'httpHeaderChecker.mainDescription': 'Verificador de cabeceras HTTP online gratuito con análisis en tiempo real, inspección de seguridad, análisis de caché y detección CORS. Perfecto para desarrolladores web depurando respuestas HTTP.',
    'httpHeaderChecker.extendedDescription': 'Nuestra herramienta comprehensiva de verificador de cabeceras HTTP te ayuda a analizar e inspeccionar cabeceras HTTP con características avanzadas. Incluye análisis de cabeceras en tiempo real, detección de cabeceras de seguridad, inspección de políticas de caché, análisis de configuración CORS y monitoreo de tiempo de respuesta. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'httpHeaderChecker.features': [
        {
            title: 'Análisis de Cabeceras en Tiempo Real',
            description: 'Analiza cabeceras HTTP instantáneamente mientras ingresas URLs con análisis automático'
        },
        {
            title: 'Detección de Cabeceras de Seguridad',
            description: 'Detecta y analiza cabeceras de seguridad como CSP, HSTS y X-Frame-Options'
        },
        {
            title: 'Análisis de Políticas de Caché',
            description: 'Inspecciona cabeceras de caché incluyendo Cache-Control, ETag y Expires'
        },
        {
            title: 'Verificación de Configuración CORS',
            description: 'Analiza cabeceras y políticas de Recursos de Origen Cruzado (CORS)'
        },
        {
            title: 'Monitoreo de Tiempo de Respuesta',
            description: 'Monitoriza tiempos de respuesta HTTP para análisis de rendimiento'
        },
        {
            title: 'Detección de Tipo de Contenido',
            description: 'Identifica tipos de contenido y codificación desde cabeceras HTTP'
        },
        {
            title: 'Información del Servidor',
            description: 'Extrae detalles del servidor e información de tecnología'
        },
        {
            title: 'Análisis de Compresión',
            description: 'Detecta compresión de contenido como gzip, brotli y deflate'
        },
        {
            title: 'Pruebas Rápidas de URL',
            description: 'URLs rápidas incorporadas para pruebas instantáneas de servicios comunes'
        },
        {
            title: 'Historial de Verificaciones Recientes',
            description: 'Guarda y gestiona verificaciones de cabeceras recientes con timestamps'
        },
        {
            title: 'Funcionalidad de Exportación',
            description: 'Copia o descarga resultados de análisis de cabeceras para documentación'
        },
        {
            title: 'Análisis de Códigos de Estado',
            description: 'Códigos de estado codificados por colores para identificación rápida de errores'
        }
    ],
    'httpHeaderChecker.steps': [
        'Ingresa la URL para la cual quieres verificar las cabeceras HTTP',
        'Haz clic en "Verificar Cabeceras" para analizar la respuesta HTTP',
        'Ve información detallada de cabeceras incluyendo seguridad y caché',
        'Analiza estado de respuesta, tiempos e información del servidor',
        'Usa URLs rápidas para probar servicios web comunes',
        'Copia o descarga resultados de análisis de cabeceras para documentación'
    ],
    'httpHeaderChecker.examples': [
        {
            title: 'Cabeceras de Seguridad de Sitio Web',
            description: 'Verifica cabeceras de seguridad de un sitio web',
            code: 'Entrada: https://example.com',
            result: 'Cabeceras: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Strict-Transport-Security: max-age=31536000, Content-Security-Policy: default-src \'self\''
        },
        {
            title: 'Cabeceras de Respuesta API',
            description: 'Analiza cabeceras de endpoint de API',
            code: 'Entrada: https://api.example.com/users',
            result: 'Cabeceras: Content-Type: application/json, Access-Control-Allow-Origin: *, Rate-Limit-Limit: 100, Rate-Limit-Remaining: 99',
            steps: [
                'Ingresa URL de endpoint de API',
                'Revisa cabeceras de respuesta para autenticación',
                'Verifica información de límite de velocidad',
                'Verifica configuración CORS para acceso frontend'
            ]
        },
        {
            title: 'Cabeceras de Caché CDN',
            description: 'Verifica cabeceras de caché para rendimiento de CDN',
            code: 'Entrada: https://cdn.example.com/assets/style.css',
            result: 'Cabeceras: Cache-Control: max-age=31536000, ETag: "abc123", Last-Modified: Wed, 01 Jan 2023 00:00:00 GMT, Content-Encoding: gzip'
        }
    ],
    'httpHeaderChecker.useCases': [
        {
            title: 'Depuración de Desarrollo Web',
            description: 'Desarrolladores depurando respuestas HTTP y configuraciones de cabeceras',
            example: 'Desarrollador frontend verificando cabeceras CORS para integración de API'
        },
        {
            title: 'Auditoría de Seguridad',
            description: 'Profesionales de seguridad auditando cabeceras de seguridad de sitios web',
            example: 'Analista de seguridad verificando implementación de CSP y HSTS'
        },
        {
            title: 'Optimización de Rendimiento',
            description: 'Ingenieros de rendimiento analizando cabeceras de caché y compresión',
            example: 'Ingeniero DevOps optimizando estrategias de caché CDN'
        },
        {
            title: 'Integración de API',
            description: 'Desarrolladores backend verificando cabeceras de respuesta de API',
            example: 'Desarrollador API verificando cabeceras de tipo de contenido y autenticación'
        },
        {
            title: 'Análisis SEO',
            description: 'Especialistas SEO analizando cabeceras de respuesta del servidor',
            example: 'Especialista SEO verificando cabeceras de servidor y tipo de contenido para optimización de búsqueda'
        },
        {
            title: 'Solución de Problemas de Red',
            description: 'Administradores de red solucionando problemas de comunicación HTTP',
            example: 'Administrador de red analizando tiempos de respuesta y códigos de estado'
        },
        {
            title: 'Pruebas de Cumplimiento',
            description: 'Oficiales de cumplimiento probando implementaciones de cabeceras de seguridad',
            example: 'Oficial de cumplimiento verificando cabeceras de seguridad para requisitos regulatorios'
        },
        {
            title: 'Aprendizaje HTTP',
            description: 'Estudiantes y desarrolladores aprendiendo protocolo HTTP y cabeceras',
            example: 'Estudiante de ciencias de la computación aprendiendo sobre cabeceras HTTP y protocolos web'
        }
    ],
    'httpHeaderChecker.technicalDetails': 'Nuestro verificador de cabeceras HTTP usa la API Fetch para hacer solicitudes HTTP y analizar cabeceras de respuesta. La herramienta soporta solicitudes HEAD y GET, maneja restricciones CORS y proporciona análisis detallado de cabeceras de seguridad, caché y rendimiento. Todo el procesamiento ocurre localmente usando JavaScript moderno.',
    'httpHeaderChecker.bestPractices': [
        {
            title: 'Cabeceras de Seguridad',
            tip: 'Siempre implementa cabeceras de seguridad como CSP, HSTS y X-Frame-Options para seguridad de aplicaciones web.'
        },
        {
            title: 'Estrategia de Caché',
            tip: 'Configura cabeceras de caché apropiadas basadas en tipo de contenido y frecuencia de actualización para rendimiento óptimo.'
        },
        {
            title: 'Configuración CORS',
            tip: 'Establece cabeceras CORS apropiadas para permitir solicitudes de origen cruzado legítimas manteniendo la seguridad.'
        },
        {
            title: 'Cabeceras de Tipo de Contenido',
            tip: 'Siempre especifica cabeceras Content-Type correctas para asegurar renderizado apropiado del navegador y compatibilidad de API.'
        }
    ],
    'httpHeaderChecker.commonErrors': [
        {
            error: 'Restriciones CORS',
            cause: 'Navegador previniendo solicitudes de origen cruzado debido a políticas CORS',
            solution: 'Usa proxy del lado del servidor o configura cabeceras CORS apropiadas en el servidor objetivo.',
            prevention: 'Configura cabeceras CORS apropiadamente y usa solicitudes del mismo origen cuando sea posible.'
        },
        {
            error: 'Formato de URL Inválido',
            cause: 'URL malformada o protocolo no soportado',
            solution: 'Asegura que la URL incluya protocolo (http:// o https://) y formato de dominio válido.',
            prevention: 'Valida formato de URL antes de hacer solicitudes y usa codificación de URL apropiada.'
        },
        {
            error: 'Tiempos de Espera de Red',
            cause: 'Respuesta lenta del servidor o problemas de conectividad de red',
            solution: 'Verifica conectividad de red e intenta de nuevo. Considera usar diferentes ubicaciones de prueba.',
            prevention: 'Monitoriza rendimiento del servidor e implementa manejo de tiempo de espera en aplicaciones.'
        },
        {
            error: 'Acceso Denegado del Servidor',
            cause: 'Servidor bloqueando solicitudes debido a límites de velocidad o políticas de seguridad',
            solution: 'Verifica límites de velocidad y requisitos de autenticación. Intenta de nuevo después de un retraso.',
            prevention: 'Implementa límites de velocidad apropiados y autenticación en clientes API.'
        },
        {
            error: 'Problemas de Certificado SSL',
            cause: 'Certificados SSL expirados o inválidos previniendo solicitudes HTTPS',
            solution: 'Actualiza certificados SSL o usa HTTP para entornos de prueba.',
            prevention: 'Monitoriza expiración de certificados SSL e implementa renovación automática.'
        },
        {
            error: 'Errores de Análisis de Cabeceras',
            cause: 'Cabeceras HTTP malformadas o problemas de codificación',
            solution: 'Verifica configuración del servidor y asegura formateo apropiado de cabeceras.',
            prevention: 'Valida cumplimiento de cabeceras HTTP y usa formatos de cabeceras estándar.'
        }
    ],
    'httpHeaderChecker.alternatives': [
        {
            name: 'DevTools del Navegador',
            useCase: 'Herramientas de desarrollador incorporadas del navegador para inspección HTTP',
            pros: 'Integrado con navegador, Monitoreo en tiempo real, Características avanzadas',
            cons: 'Específico del navegador, Limitado a pestaña actual, Conocimiento técnico requerido',
            comparison: 'Nuestra herramienta ofrece análisis HTTP dedicado con características educativas e historial.'
        },
        {
            name: 'Comandos cURL',
            useCase: 'Herramienta de línea de comandos para hacer solicitudes HTTP',
            pros: 'Programable, Control detallado, Sin restricciones del navegador',
            cons: 'Configuración técnica requerida, Sin GUI, Análisis manual',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con análisis automático.'
        },
        {
            name: 'Postman',
            useCase: 'Plataforma de desarrollo y prueba de API',
            pros: 'Características avanzadas, Colaboración en equipo, Documentación API',
            cons: 'Costos de suscripción, Interfaz compleja, Dependencia de internet',
            comparison: 'Nuestra herramienta ofrece análisis de cabeceras HTTP enfocado sin complejidad.'
        },
        {
            name: 'Verificadores de Cabeceras Online',
            useCase: 'Servicios de análisis de cabeceras HTTP basados en web',
            pros: 'Acceso multiplataforma, Sin instalación, Pruebas rápidas',
            cons: 'Preocupaciones de privacidad, Características limitadas, Internet requerido',
            comparison: 'Nuestra herramienta procesa localmente con completa privacidad y análisis comprehensivo.'
        }
    ],
    'httpHeaderChecker.relatedTools': [
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
            name: 'Verificador de Redirecciones',
            description: 'Verifica redirecciones URL y cadenas',
            url: '/redirect-checker'
        },
        {
            name: 'Analizador de Meta Tags',
            description: 'Analiza meta tags HTML y SEO',
            url: '/meta-tags-analyzer'
        },
        {
            name: 'Prueba de Velocidad de Sitio Web',
            description: 'Prueba rendimiento y velocidad de sitio web',
            url: '/website-speed-test'
        },
        {
            name: 'Probador API',
            description: 'Prueba endpoints y respuestas de API',
            url: '/api-tester'
        },
        {
            name: 'Verificador de Códigos de Estado',
            description: 'Verifica códigos de estado HTTP y significados',
            url: '/status-code-checker'
        },
        {
            name: 'Prueba de Cabeceras de Seguridad',
            description: 'Prueba implementación de cabeceras de seguridad',
            url: '/security-headers-test'
        }
    ],
    'httpHeaderChecker.faqs': [
        {
            question: '¿Qué son las cabeceras HTTP?',
            answer: 'Las cabeceras HTTP son información adicional enviada entre clientes y servidores, conteniendo metadatos sobre la solicitud o respuesta, incluyendo tipo de contenido, políticas de caché, configuraciones de seguridad y más.'
        },
        {
            question: '¿Puedo verificar cualquier sitio web?',
            answer: '¡Sí! Puedes verificar cualquier sitio web accesible públicamente. Algunos sitios pueden bloquear solicitudes automatizadas o requerir autenticación.'
        },
        {
            question: '¿Qué cabeceras de seguridad debería buscar?',
            answer: 'Las cabeceras de seguridad clave incluyen Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options y Access-Control-Allow-Origin para CORS.'
        },
        {
            question: '¿Cómo se analizan las cabeceras de caché?',
            answer: 'Analizamos Cache-Control, ETag, Expires y Last-Modified para determinar estrategias de caché y optimización de rendimiento.'
        },
        {
            question: '¿Qué muestra el análisis CORS?',
            answer: 'El análisis CORS muestra Access-Control-Allow-Origin, Access-Control-Allow-Methods y otras cabeceras que controlan permisos de solicitudes de origen cruzado.'
        },
        {
            question: '¿Por qué podrían faltar algunas cabeceras?',
            answer: 'Algunas cabeceras pueden faltar debido a restricciones CORS, configuración del servidor o configuraciones de privacidad. Intenta usar herramientas del lado del servidor para análisis completo.'
        },
        {
            question: '¿Cómo se calcula el tiempo de respuesta?',
            answer: 'El tiempo de respuesta se mide desde el momento en que se envía la solicitud hasta que se reciben las cabeceras de respuesta, mostrando latencia de red y tiempo de procesamiento del servidor.'
        },
        {
            question: '¿Puedo verificar endpoints de API?',
            answer: '¡Sí! Puedes verificar cualquier URL incluyendo endpoints de API. Busca Content-Type: application/json y cabeceras de autenticación.'
        },
        {
            question: '¿Son privadas mis solicitudes?',
            answer: 'Toda verificación de cabeceras HTTP ocurre directamente en tu navegador. Tus solicitudes y las URLs que verificas nunca se almacenan en nuestros servidores.'
        }
    ],
    'httpHeaderChecker.securityNote': 'Toda verificación de cabeceras HTTP ocurre localmente en tu navegador usando la API Fetch. No se registran solicitudes o se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'httpHeaderChecker.additionalContent': 'El análisis de cabeceras HTTP es esencial para desarrollo web, auditoría de seguridad, optimización de rendimiento e integración de API. Combina nuestro verificador de cabeceras con otras herramientas como verificadores SSL, búsqueda DNS y pruebas de rendimiento para flujos de trabajo comprehensivos de desarrollo web y depuración.'
};
