export default {
    'uuidGenerator.title': 'Generador de UUID - Crear Identificadores Únicos Online',
    'uuidGenerator.description': 'Genera identificadores únicos universales (UUIDs) instantáneamente con opciones personalizables y seguimiento de historial.',
    'uuidGenerator.count': 'Cantidad:',
    'uuidGenerator.uppercase': 'Mayúsculas',
    'uuidGenerator.generate': 'Generar',
    'uuidGenerator.copy': 'Copiar',
    'uuidGenerator.clear': 'Limpiar',
    'uuidGenerator.history': 'Historial',
    'uuidGenerator.download_all': 'Descargar Todo',
    'uuidGenerator.clear_history': 'Limpiar Historial',
    'uuidGenerator.placeholder': 'Los UUIDs generados aparecerán aquí...',
    
    // SEO Content specific to UUID Generator
    'uuidGenerator.mainDescription': 'Generador de UUID online gratuito soportando UUIDs de versión 4 aleatorios con generación por lotes y opciones de formato personalizables.',
    'uuidGenerator.extendedDescription': 'Nuestro generador comprehensivo de UUID soporta generación de UUIDs de versión 4 aleatorios usando la API crypto del navegador. Incluye generación por lotes, formato en mayúsculas, seguimiento de historial y opciones de descarga instantánea. Todas las operaciones ocurren en tu navegador para completa privacidad y resultados instantáneos.',
    'uuidGenerator.features': [
        {
            title: 'UUIDs Versión 4',
            description: 'Genera UUIDs de versión 4 criptográficamente seguros usando la API crypto del navegador'
        },
        {
            title: 'Generación por Lotes',
            description: 'Genera múltiples UUIDs a la vez para operaciones por lotes'
        },
        {
            title: 'Formato en Mayúsculas',
            description: 'Opción para generar UUIDs en formato mayúsculas'
        },
        {
            title: 'Historial de UUID',
            description: 'Rastrea y gestiona tus UUIDs generados localmente'
        },
        {
            title: 'Copia con un Clic',
            description: 'Copia instantáneamente cualquier UUID al portapapeles'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga UUIDs individuales o historial completo como archivos de texto'
        },
        {
            title: 'Generación Instantánea',
            description: 'Genera UUIDs instantáneamente sin solicitudes al servidor'
        },
        {
            title: 'Diseño Responsivo',
            description: 'Diseño responsivo optimizado para generación de UUIDs móviles y de escritorio'
        }
    ],
    'uuidGenerator.steps': [
        'Establece la cantidad de UUIDs que quieres generar',
        'Activa la opción de mayúsculas si es necesario para tu caso de uso',
        'Haz clic en generar para crear identificadores únicos instantáneamente',
        'Copia UUIDs individuales o descarga todos los resultados para tu proyecto'
    ],
    'uuidGenerator.examples': [
        {
            title: 'Generar UUID Individual',
            description: 'Crea un identificador único para registros de base de datos',
            code: 'Cantidad: 1, Mayúsculas: No',
            result: '550e8400-e29b-41d4-a716-446655440000',
            steps: [
                'Establece cantidad en 1',
                'Deja mayúsculas desactivado',
                'Haz clic en "Generar"',
                'Copia el UUID generado para inserción en base de datos'
            ]
        },
        {
            title: 'Generar Múltiples UUIDs',
            description: 'Crea múltiples UUIDs a la vez para operaciones por lotes',
            code: 'Cantidad: 5, Mayúsculas: Sí',
            result: '550E8400-E29B-41D4-A716-446655440001\n550E8400-E29B-41D4-A716-446655440002\n550E8400-E29B-41D4-A716-446655440003\n550E8400-E29B-41D4-A716-446655440004\n550E8400-E29B-41D4-A716-446655440005',
            steps: [
                'Establece cantidad en 5',
                'Activa opción de mayúsculas',
                'Haz clic en "Generar"',
                'Copia todos los UUIDs para procesamiento por lotes'
            ]
        },
        {
            title: 'Clave Primaria de Base de Datos',
            description: 'Genera UUID para usar como clave primaria en bases de datos',
            code: 'Cantidad: 1, Mayúsculas: No',
            result: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            steps: [
                'Genera UUID individual',
                'Copia para inserción en base de datos',
                'Usa como clave primaria en tu tabla',
                'Asegura unicidad global entre sistemas'
            ]
        }
    ],
    'uuidGenerator.useCases': [
        {
            title: 'Diseño de Base de Datos',
            description: 'Desarrolladores de bases de datos creando claves primarias únicas para registros y tablas de bases de datos',
            example: 'Administrador de base de datos generando UUIDs para claves primarias de registros de usuario'
        },
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores backend creando identificadores únicos para endpoints y recursos de API',
            example: 'Desarrollador de API generando UUIDs para identificación de recursos'
        },
        {
            title: 'Sistemas Distribuidos',
            description: 'Arquitectos de sistemas creando identificadores únicos para componentes de sistemas distribuidos',
            example: 'Arquitecto de sistema generando UUIDs para identificación de microservicios'
        },
        {
            title: 'Desarrollo de Aplicaciones',
            description: 'Desarrolladores de software creando identificadores únicos para entidades y objetos de aplicaciones',
            example: 'Desarrollador de app generando UUIDs para gestión de sesiones'
        },
        {
            title: 'Integración de Datos',
            description: 'Ingenieros de datos creando identificadores únicos para integración de datos y procesos ETL',
            example: 'Ingeniero de datos generando UUIDs para seguimiento de registros entre sistemas'
        },
        {
            title: 'Pruebas y QA',
            description: 'Ingenieros de QA generando datos de prueba únicos para escenarios de prueba',
            example: 'Ingeniero de QA generando UUIDs para generación de datos de prueba'
        }
    ],
    'uuidGenerator.technicalDetails': 'Nuestro generador de UUID usa el método nativo crypto.randomUUID() del navegador para generar UUIDs de versión 4 criptográficamente seguros. Cada UUID es un valor de 128-bit mostrado en formato hexadecimal estándar 8-4-4-4-12. Toda la generación ocurre localmente usando la Web Crypto API para máxima seguridad y rendimiento.',
    'uuidGenerator.bestPractices': [
        {
            title: 'Selección de Versión UUID',
            tip: 'Usa UUIDs de versión 4 para propósitos generales ya que proporcionan buen aleatoriedad y son ampliamente soportados.'
        },
        {
            title: 'Almacenamiento en Base de Datos',
            tip: 'Almacena UUIDs como CHAR(36) o tipos de datos específicos UUID en bases de datos para rendimiento óptimo.'
        },
        {
            title: 'Consistencia de Caso',
            tip: 'Mantén consistencia de caso (mayúsculas o minúsculas) en toda tu aplicación para manejo de UUIDs.'
        },
        {
            title: 'Consideraciones de Rendimiento',
            tip: 'Genera UUIDs en lotes cuando sea posible para reducir sobrecarga y mejorar rendimiento.'
        }
    ],
    'uuidGenerator.commonErrors': [
        {
            error: 'Cantidad Inválida',
            cause: 'El valor de cantidad es cero, negativo o no es un número',
            solution: 'Ingresa un entero positivo entre 1 y 1000 para el campo de cantidad.',
            prevention: 'Usa siempre números enteros positivos cuando especifiques la cantidad de UUIDs.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'El método crypto.randomUUID() no está disponible en el navegador',
            solution: 'Actualiza a un navegador moderno que soporte la Web Crypto API.',
            prevention: 'Usa navegadores modernos con soporte nativo de generación de UUID.'
        },
        {
            error: 'Funcionalidad de Copia',
            cause: 'La API del portapapeles no está disponible o se denegó el permiso',
            solution: 'Usa copia manual o actualiza los permisos del navegador para acceso al portapapeles.',
            prevention: 'Asegúrate de que el navegador soporte la API del portapapeles y los permisos estén concedidos.'
        },
        {
            error: 'Generación de Lote Grande',
            cause: 'Generar demasiados UUIDs a la vez causando problemas de rendimiento',
            solution: 'Genera lotes más pequeños o usa generación del lado del servidor para volúmenes grandes.',
            prevention: 'Limita los tamaños de lote a cantidades razonables para generación basada en navegador.'
        }
    ],
    'uuidGenerator.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'utilidades de línea de comandos uuidgen, uuid',
            pros: 'Integración de sistema, Programable, Sin dependencias',
            cons: 'Conocimiento técnico requerido, Sin GUI, Específico de plataforma',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual y compatibilidad multiplataforma.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'bibliotecas de programación uuid, python-uuid, node-uuid',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece generación instantánea de UUID sin requisitos de programación.'
        },
        {
            name: 'Servicios de UUID Online',
            useCase: 'Varios servicios web de generación de UUID',
            pros: 'Acceso multiplataforma, Sin instalación, Múltiples versiones',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Riesgos de seguridad',
            comparison: 'Nuestra herramienta funciona sin conexión con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Herramientas del Sistema Incorporadas',
            useCase: 'utilidades del sistema PowerShell New-Guid, UUID del sistema',
            pros: 'Integración de sistema, Sin instalación, Características empresariales',
            cons: 'Específico de plataforma, Curva de aprendizaje, Personalización limitada',
            comparison: 'Nuestra herramienta proporciona experiencia consistente a través de diferentes plataformas.'
        }
    ],
    'uuidGenerator.relatedTools': [
        {
            name: 'Generador de Hash',
            description: 'Genera hashes SHA-1, SHA-256 y SHA-512',
            url: '/hash-generator'
        },
        {
            name: 'Generador de Cadena Aleatoria',
            description: 'Genera cadenas aleatorias con conjuntos de caracteres personalizados',
            url: '/random-string-generator'
        },
        {
            name: 'Generador de Contraseñas',
            description: 'Genera contraseñas fuertes con opciones personalizables',
            url: '/password-generator'
        },
        {
            name: 'Generador de Claves API',
            description: 'Genera claves API y tokens seguros',
            url: '/api-key-generator'
        },
        {
            name: 'Codificador Base64',
            description: 'Codifica texto y archivos a formato Base64',
            url: '/base64-encoder'
        },
        {
            name: 'Convertidor de Timestamp',
            description: 'Convierte entre diferentes formatos de timestamp',
            url: '/timestamp-converter'
        },
        {
            name: 'Formateador JSON',
            description: 'Formatea y valida datos JSON',
            url: '/json-formatter'
        },
        {
            name: 'Cifrador de Texto',
            description: 'Cifra texto con varios métodos de cifrado',
            url: '/text-encryptor'
        }
    ],
    'uuidGenerator.faqs': [
        {
            question: '¿Qué es un UUID?',
            answer: 'Un UUID (Identificador Universalmente Único) es un identificador de 128-bit usado para identificar información únicamente en sistemas de computadora sin coordinación central.'
        },
        {
            question: '¿Qué versión de UUID se genera?',
            answer: 'Nuestra herramienta genera UUIDs de versión 4, los cuales son creados usando números aleatorios o pseudo-aleatorios y proporcionan excelente unicidad.'
        },
        {
            question: '¿Son realmente únicos los UUIDs generados?',
            answer: 'Los UUIDs de versión 4 tienen una probabilidad extremadamente baja de colisión (1 en 2^122), haciéndolos prácticamente únicos para la mayoría de aplicaciones.'
        },
        {
            question: '¿Puedo generar múltiples UUIDs a la vez?',
            answer: 'Sí, puedes especificar cualquier cantidad y la herramienta generará esa cantidad de UUIDs únicos en una sola operación.'
        },
        {
            question: '¿Cuál es el formato de los UUIDs generados?',
            answer: 'Los UUIDs se generan en formato hexadecimal estándar 8-4-4-4-12 (ej., 550e8400-e29b-41d4-a716-446655440000).'
        },
        {
            question: '¿Puedo usar UUIDs en mayúsculas?',
            answer: 'Sí, puedes activar la opción de mayúsculas para generar UUIDs en formato mayúsculas para tus requisitos específicos.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la generación de UUID ocurre directamente en tu navegador usando la API crypto. Ningún dato se envía a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Puedo guardar los UUIDs generados?',
            answer: 'Sí, la herramienta mantiene un historial local de los UUIDs generados y puedes descargarlos como archivo de texto para referencia futura.'
        }
    ],
    'uuidGenerator.securityNote': 'Toda la generación de UUID ocurre localmente en tu navegador usando el método nativo crypto.randomUUID(). Ningún dato se envía a nuestros servidores, asegurando completa privacidad y seguridad.',
    'uuidGenerator.additionalContent': 'La generación de UUID es esencial para diseño de bases de datos, desarrollo de API, sistemas distribuidos, desarrollo de aplicaciones, integración de datos y escenarios de prueba. Combina nuestro generador con otras herramientas como generadores de hash, generadores de cadenas aleatorias y generadores de contraseñas para gestión comprehensiva de flujos de trabajo de desarrollo.'
};
