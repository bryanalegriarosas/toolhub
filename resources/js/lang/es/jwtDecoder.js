export default {
    'jwtDecoder.title': 'Decodificador JWT',
    'jwtDecoder.load_file': 'Cargar archivo:',
    'jwtDecoder.copy': 'Copiar',
    'jwtDecoder.download_token': 'Descargar Token',
    'jwtDecoder.clear': 'Limpiar',
    'jwtDecoder.save': 'Guardar',
    'jwtDecoder.paste_jwt_token_here': 'Pega el token JWT aquí...',
    'jwtDecoder.header': 'Encabezado',
    'jwtDecoder.payload': 'Carga Útil',
    'jwtDecoder.signature': 'Firma',
    'jwtDecoder.history': 'Historial',
    'jwtDecoder.restore': 'Restaurar',
    'jwtDecoder.download_history': 'Descargar Historial',
    'jwtDecoder.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to JWT decoder
    'jwtDecoder.mainDescription': 'Decodificador JWT online gratuito con análisis de tokens en tiempo real, inspección de encabezado/carga útil, análisis de firma y gestión de historial. Perfecto para desarrolladores depurando tokens JWT.',
    'jwtDecoder.extendedDescription': 'Nuestra herramienta comprehensiva de decodificador JWT te ayuda a decodificar y analizar JSON Web Tokens con características avanzadas. Incluye análisis de tokens en tiempo real, inspección de encabezado y carga útil, verificación de firma, análisis de claims y gestión de historial de tokens. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'jwtDecoder.features': [
        {
            title: 'Decodificación JWT en Tiempo Real',
            description: 'Decodifica tokens JWT instantáneamente mientras los pegas con análisis automático'
        },
        {
            title: 'Inspección de Encabezado',
            description: 'Ve el encabezado JWT con algoritmo, tipo de token y metadatos'
        },
        {
            title: 'Análisis de Carga Útil',
            description: 'Inspecciona la carga útil JWT con claims, tiempo de expiración e información de usuario'
        },
        {
            title: 'Visualización de Firma',
            description: 'Ve la firma JWT para verificación y propósitos de depuración'
        },
        {
            title: 'Historial de Tokens',
            description: 'Guarda y gestiona tokens JWT con timestamp y funcionalidad de restauración'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga tokens JWT directamente desde archivos para procesamiento por lotes'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia partes decodificadas con un clic o descarga tokens como archivos'
        },
        {
            title: 'Detección de Errores',
            description: 'Detección automática y visualización de tokens JWT inválidos o malformados'
        },
        {
            title: 'Validación de Claims',
            description: 'Validación visual de claims JWT estándar como exp, iat y sub'
        },
        {
            title: 'Análisis de Seguridad',
            description: 'Análisis enfocado en seguridad de tokens JWT para vulnerabilidades potenciales'
        },
        {
            title: 'Soporte de Múltiples Formatos',
            description: 'Soporte para varios formatos JWT y esquemas de codificación'
        }
    ],
    'jwtDecoder.steps': [
        'Pega tu token JWT en el área de entrada o carga desde archivo',
        'Ve encabezado, carga útil y firma decodificados automáticamente',
        'Inspecciona claims del token, tiempo de expiración e información de usuario',
        'Guarda tokens útiles en el historial para referencia futura',
        'Copia partes decodificadas o descarga tokens para documentación',
        'Usa el historial para restaurar y comparar diferentes tokens JWT'
    ],
    'jwtDecoder.examples': [
        {
            title: 'Token de Autenticación',
            description: 'Decodifica token JWT de autenticación con información de usuario',
            code: 'Entrada: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            result: 'Encabezado: {alg: "HS256", typ: "JWT"} | Carga Útil: {sub: "1234567890", name: "John Doe", iat: 1516239022}'
        },
        {
            title: 'Token de Acceso API',
            description: 'Decodifica token JWT de acceso API con roles y permisos',
            code: 'Entrada: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwicm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sImV4cCI6MTY5NDEyMzQ1Nn0.signature_here',
            result: 'Encabezado: {alg: "RS256", typ: "JWT"} | Carga Útil: {userId: "user123", roles: ["admin", "user"], exp: 1694123456}',
            steps: [
                'Pega token JWT desde respuesta API',
                'Ve encabezado decodificado con información del algoritmo',
                'Verifica carga útil para roles de usuario y permisos',
                'Verifica tiempo de expiración y validez del token'
            ]
        },
        {
            title: 'Token OAuth2',
            description: 'Decodifica token de acceso OAuth2 con información de cliente',
            code: 'Entrada: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJ3ZWJfYXBwIiwic2NvcGUiOiJyZWFkOndyaXRlIiwiYXVkIjoiaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20ifQ.signature',
            result: 'Encabezado: {alg: "RS256", typ: "JWT"} | Carga Útil: {client_id: "web_app", scope: "read:write", aud: "https://api.example.com"}'
        }
    ],
    'jwtDecoder.useCases': [
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores depurando tokens JWT en autenticación y autorización de API',
            example: 'Desarrollador backend depurando tokens JWT para autenticación de usuario en REST API'
        },
        {
            title: 'Pruebas de Seguridad',
            description: 'Profesionales de seguridad analizando tokens JWT para vulnerabilidades y validación',
            example: 'Analista de seguridad inspeccionando tokens JWT para verificación de firma apropiada'
        },
        {
            title: 'Integración OAuth2',
            description: 'Desarrolladores implementando autenticación OAuth2 con tokens JWT',
            example: 'Desarrollador full-stack integrando proveedor OAuth2 con tokens de acceso JWT'
        },
        {
            title: 'Depuración de Tokens',
            description: 'Desarrolladores solucionando problemas de tokens JWT en entornos de producción',
            example: 'Ingeniero DevOps depurando tokens JWT expirados causando fallos de autenticación'
        },
        {
            title: 'Desarrollo de Aplicaciones Móviles',
            description: 'Desarrolladores móviles manejando tokens JWT en aplicaciones móviles',
            example: 'Desarrollador iOS decodificando tokens JWT para gestión de sesión de usuario'
        },
        {
            title: 'Arquitectura de Microservicios',
            description: 'Arquitectos gestionando tokens JWT a través de microservicios',
            example: 'Arquitecto de sistemas analizando claims de tokens JWT para autenticación servicio-a-servicio'
        },
        {
            title: 'Seguridad de Aplicaciones Web',
            description: 'Equipos de seguridad implementando sistemas de autenticación basados en JWT',
            example: 'Equipo de seguridad implementando validación de tokens JWT en aplicaciones web'
        },
        {
            title: 'Aprendizaje JWT',
            description: 'Estudiantes y desarrolladores aprendiendo estructura e implementación JWT',
            example: 'Estudiante de ciencias de la computación aprendiendo estructura de tokens JWT y claims'
        }
    ],
    'jwtDecoder.technicalDetails': 'Nuestro decodificador JWT usa funciones incorporadas de JavaScript para decodificación Base64 y análisis JSON. La herramienta soporta estructura JWT estándar con tres partes (header.payload.signature) y maneja varios algoritmos incluyendo HS256, RS256 y ES256. Todo el procesamiento ocurre localmente usando JavaScript moderno.',
    'jwtDecoder.bestPractices': [
        {
            title: 'Validación de Tokens',
            tip: 'Siempre valida tokens JWT en el lado del servidor, nunca confíes en datos decodificados del lado del cliente.'
        },
        {
            title: 'Verificación de Expiración',
            tip: 'Verifica el claim exp para asegurar que los tokens no estén expirados antes de procesar.'
        },
        {
            title: 'Verificación de Algoritmo',
            tip: 'Verifica que el algoritmo en el encabezado coincida con tu algoritmo de firma esperado.'
        },
        {
            title: 'Almacenamiento Seguro',
            tip: 'Almacena tokens JWT de forma segura usando cookies httpOnly o almacenamiento local seguro.'
        }
    ],
    'jwtDecoder.commonErrors': [
        {
            error: 'Formato JWT Inválido',
            cause: 'Token JWT faltando partes requeridas o formato incorrecto',
            solution: 'Asegura que JWT tenga tres partes separadas por puntos (header.payload.signature). Verifica segmentos faltantes.',
            prevention: 'Valida formato JWT antes de procesar y usa generación de token apropiada.'
        },
        {
            error: 'Fallo en Decodificación Base64',
            cause: 'Codificación Base64 inválida en encabezado o carga útil JWT',
            solution: 'Verifica que las partes JWT estén codificadas apropiadamente en Base64url. Verifica fuente e integridad del token.',
            prevention: 'Usa librerías JWT apropiadas para generación y validación de tokens.'
        },
        {
            error: 'Error de Análisis JSON',
            cause: 'JSON malformado en encabezado o carga útil JWT',
            solution: 'Asegura que la estructura JSON sea válida. Verifica comillas faltantes, corchetes o comas.',
            prevention: 'Valida estructura JSON antes de codificación JWT y usa serialización apropiada.'
        },
        {
            error: 'Falla en Carga de Archivo',
            cause: 'Formato de archivo inválido o archivo JWT corrupto',
            solution: 'Asegura que el archivo contenga token JWT válido. Verifica codificación y contenido del archivo.',
            prevention: 'Valida archivos JWT antes de subir y asegura extensiones de archivo apropiadas.'
        },
        {
            error: 'Acceso al Portapapeles Denegado',
            cause: 'Restricciones de seguridad del navegador previniendo acceso al portapapeles',
            solution: 'Usa copiar-pegar manual o intenta un navegador diferente. Asegura conexión HTTPS.',
            prevention: 'Usa navegadores modernos y asegura contexto de seguridad apropiado para operaciones del portapapeles.'
        },
        {
            error: 'Problemas de Gestión de Historial',
            cause: 'Limitaciones de almacenamiento del navegador o datos de historial corruptos',
            solution: 'Limpia almacenamiento del navegador y refresca página para resetear funcionalidad de historial.',
            prevention: 'Exporta regularmente tokens importantes y limpia el historial periódicamente.'
        }
    ],
    'jwtDecoder.alternatives': [
        {
            name: 'JWT.io',
            useCase: 'Decodificador JWT online popular con características de depuración',
            pros: 'Depuración avanzada, Soporte de algoritmos, Características de comunidad',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Historial limitado',
            comparison: 'Nuestra herramienta ofrece procesamiento local con completa privacidad y gestión de historial.'
        },
        {
            name: 'Librerías de Depuración JWT',
            useCase: 'Librerías de programación para decodificación JWT en aplicaciones',
            pros: 'Integración con código, Características avanzadas, Optimizado para rendimiento',
            cons: 'Programación requerida, Complejidad de implementación',
            comparison: 'Nuestra herramienta ofrece decodificación instantánea sin requisitos de programación.'
        },
        {
            name: 'Extensiones de Navegador',
            useCase: 'Extensiones de navegador para decodificación JWT en herramientas de desarrollo',
            pros: 'Integrado con navegador, Decodificación en tiempo real, Conveniencia',
            cons: 'Instalación de extensión, Características limitadas, Preocupaciones de seguridad',
            comparison: 'Nuestra herramienta proporciona características comprehensivas sin requisitos de extensión de navegador.'
        },
        {
            name: 'Visor JWT de Postman',
            useCase: 'Decodificación JWT en herramientas de prueba API como Postman',
            pros: 'Integración API, Flujo de trabajo de prueba, Características avanzadas',
            cons: 'Dependencia de herramienta API, Curva de aprendizaje, Costos de suscripción',
            comparison: 'Nuestra herramienta ofrece decodificación JWT dedicada sin requisitos de herramienta API.'
        }
    ],
    'jwtDecoder.relatedTools': [
        {
            name: 'Generador JWT',
            description: 'Genera tokens JWT con claims personalizados',
            url: '/jwt-generator'
        },
        {
            name: 'Validador JWT',
            description: 'Valida tokens JWT y firmas',
            url: '/jwt-validator'
        },
        {
            name: 'Decodificador Base64',
            description: 'Decodifica cadenas codificadas en Base64',
            url: '/base64-decoder'
        },
        {
            name: 'Formateador JSON',
            description: 'Formatea y embellece datos JSON',
            url: '/json-formatter'
        },
        {
            name: 'Generador de Tokens',
            description: 'Genera varios tokens de autenticación',
            url: '/token-generator'
        },
        {
            name: 'Playground OAuth2',
            description: 'Prueba flujos de autenticación OAuth2',
            url: '/oauth2-playground'
        },
        {
            name: 'Probador API',
            description: 'Prueba endpoints API con autenticación',
            url: '/api-tester'
        },
        {
            name: 'Generador de Hash',
            description: 'Genera varios valores de hash',
            url: '/hash-generator'
        },
        {
            name: 'Decodificador de Certificados',
            description: 'Decodifica certificados SSL/TLS',
            url: '/certificate-decoder'
        }
    ],
    'jwtDecoder.faqs': [
        {
            question: '¿Qué es un token JWT?',
            answer: 'Un JSON Web Token (JWT) es un medio compacto y seguro de URL de representar claims para ser transferidos entre dos partes. Consiste en tres partes: encabezado, carga útil y firma.'
        },
        {
            question: '¿Es segura la decodificación JWT?',
            answer: 'La decodificación JWT es segura ya que solo revela la información que fue codificada en el token. Sin embargo, nunca confíes en datos decodificados sin verificación de firma apropiada.'
        },
        {
            question: '¿Puedo decodificar cualquier token JWT?',
            answer: 'Sí, puedes decodificar cualquier token JWT formateado apropiadamente. Sin embargo, solo los tokens con firmas válidas deberían ser confiables para autenticación.'
        },
        {
            question: '¿Qué información hay en el encabezado JWT?',
            answer: 'El encabezado JWT contiene metadatos sobre el token incluyendo el algoritmo de firma (alg) y tipo de token (typ).'
        },
        {
            question: '¿Qué claims son estándar en JWT?',
            answer: 'Los claims JWT estándar incluyen sub (subject), iat (issued at), exp (expiration time), iss (issuer) y aud (audience).'
        },
        {
            question: '¿Cómo se verifica la firma JWT?',
            answer: 'La firma JWT se verifica usando la clave secreta o clave pública dependiendo del algoritmo. Nuestro decodificador solo muestra la firma para inspección.'
        },
        {
            question: '¿Puedo modificar tokens JWT?',
            answer: 'Puedes modificar la carga útil JWT, pero la firma se volverá inválida. Las firmas válidas requieren la clave de firma original.'
        },
        {
            question: '¿Qué algoritmos JWT son compatibles?',
            answer: 'Nuestro decodificador soporta todos los algoritmos JWT estándar incluyendo HS256, RS256, ES256 y otros para propósitos de visualización.'
        },
        {
            question: '¿Están privados mis datos de token?',
            answer: 'Toda la decodificación JWT ocurre directamente en tu navegador. Tus tokens nunca se suben a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Puedo guardar resultados decodificados?',
            answer: '¡Sí! Puedes guardar tokens en el historial, copiar partes decodificadas o descargar resultados para documentación y depuración.'
        }
    ],
    'jwtDecoder.securityNote': 'Toda la decodificación JWT ocurre localmente en tu navegador usando JavaScript. No se almacenan tokens en nuestros servidores, asegurando completa privacidad y seguridad. Nunca confíes en datos JWT decodificados sin verificación de firma apropiada.',
    'jwtDecoder.additionalContent': 'La decodificación JWT es esencial para desarrollo de API, depuración de autenticación y análisis de seguridad. Combina nuestro decodificador con otras herramientas como generadores JWT, validadores y probadores API para flujos de trabajo comprehensivos de autenticación y autorización.'
};
