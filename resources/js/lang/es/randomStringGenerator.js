export default {
    'randomStringGenerator.title': 'Generador de Cadenas Aleatorias - Crear Cadenas Seguras Online',
    'randomStringGenerator.description': 'Genera cadenas aleatorias seguras con longitud y conjuntos de caracteres personalizados. Incluye historial, copia/descarga y soporte de archivos.',
    'randomStringGenerator.load_file': 'Cargar archivo:',
    'randomStringGenerator.copy': 'Copiar',
    'randomStringGenerator.download_result': 'Descargar Resultado',
    'randomStringGenerator.clear': 'Limpiar',
    'randomStringGenerator.save': 'Guardar',
    'randomStringGenerator.length': 'Longitud',
    'randomStringGenerator.letters': 'Letras',
    'randomStringGenerator.numbers': 'Números',
    'randomStringGenerator.symbols': 'Símbolos',
    'randomStringGenerator.generate': 'Generar',
    'randomStringGenerator.result': 'Resultado',
    'randomStringGenerator.history': 'Historial',
    'randomStringGenerator.restore': 'Restaurar',
    'randomStringGenerator.download_history': 'Descargar Historial',
    'randomStringGenerator.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to Random String Generator
    'randomStringGenerator.mainDescription': 'Generador de cadenas aleatorias online gratuito con longitud personalizable, conjuntos de caracteres y generación segura.',
    'randomStringGenerator.extendedDescription': 'Nuestro generador comprehensivo de cadenas aleatorias soporta longitud personalizable de 4-128 caracteres, múltiples conjuntos de caracteres (letras, números, símbolos), soporte de carga de archivos y seguimiento completo de historial. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'randomStringGenerator.features': [
        {
            title: 'Longitud Personalizable',
            description: 'Genera cadenas de 4 a 128 caracteres de largo'
        },
        {
            title: 'Múltiples Conjuntos de Caracteres',
            description: 'Incluye letras, números y símbolos independientemente o juntos'
        },
        {
            title: 'Generación Segura',
            description: 'Usa generación de números aleatorios criptográficamente seguros'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto para extraer y usar su contenido'
        },
        {
            title: 'Historial de Cadenas',
            description: 'Rastrea y gestiona tus cadenas generadas localmente'
        },
        {
            title: 'Copia con un Clic',
            description: 'Copia instantáneamente cualquier cadena generada al portapapeles'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga cadenas individuales o historial completo como archivos de texto'
        },
        {
            title: 'Diseño Responsivo',
            description: 'Diseño responsivo optimizado para generación de cadenas móviles y de escritorio'
        }
    ],
    'randomStringGenerator.steps': [
        'Elige longitud y selecciona conjuntos de caracteres (letras, números, símbolos)',
        'Haz clic en generar para crear una cadena aleatoria segura',
        'Copia el resultado o descárgalo como un archivo',
        'Guarda en historial para referencia futura y uso'
    ],
    'randomStringGenerator.examples': [
        {
            title: 'Generación de Clave API',
            description: 'Genera clave API segura para autenticación',
            code: 'Longitud: 32 | Caracteres: Letras + Números | Símbolos: No',
            result: 'Generado: a7b3K9m2X5p8Q1r4T6y9U2w5Z8c1F (clave API segura)',
            steps: [
                'Establece longitud a 32 caracteres',
                'Habilita letras y números solo',
                'Genera y usa para autenticación de API',
                'Almacena de forma segura en tu sistema de autenticación'
            ]
        },
        {
            title: 'Creación de Token de Sesión',
            description: 'Crea token de sesión aleatorio para aplicaciones web',
            code: 'Longitud: 64 | Caracteres: Letras + Números + Símbolos | Símbolos: Sí',
            result: 'Generado: K9$m2X5#p8Q1r4!T6y9U2@w5Z8c1F*a7b3K9m2X5p8Q1r4T6y9U2w5Z8c1F',
            steps: [
                'Establece longitud a 64 caracteres para seguridad',
                'Incluye todos los tipos de caracteres para máxima complejidad',
                'Genera y almacena en base de datos segura',
                'Usa para autenticación de sesión de usuario'
            ]
        },
        {
            title: 'Contraseña Aleatoria',
            description: 'Genera contraseña aleatoria fuerte para seguridad',
            code: 'Longitud: 16 | Caracteres: Letras + Números + Símbolos | Símbolos: Sí',
            result: 'Generado: Q1r4!T6y9U2@w5Z8 (contraseña fuerte)',
            steps: [
                'Establece longitud a 16 caracteres',
                'Incluye letras, números y símbolos',
                'Genera y usa como contraseña segura',
                'Almacena usando hashing de contraseñas apropiado'
            ]
        }
    ],
    'randomStringGenerator.useCases': [
        {
            title: 'Autenticación de API',
            description: 'Desarrolladores backend generando claves API y tokens seguros para sistemas de autenticación',
            example: 'Desarrollador de API generando cadenas aleatorias para creación de claves API seguras'
        },
        {
            title: 'Gestión de Sesiones',
            description: 'Desarrolladores web creando tokens de sesión para autenticación y seguridad de usuarios',
            example: 'Desarrollador web generando tokens de sesión aleatorios para gestión de inicio de sesión de usuario'
        },
        {
            title: 'Pruebas de Seguridad',
            description: 'Profesionales de seguridad generando datos de prueba para pruebas de penetración y validación',
            example: 'Probador de seguridad generando cadenas aleatorias para fuzzing y pruebas de seguridad'
        },
        {
            title: 'Población de Base de Datos',
            description: 'Desarrolladores de bases de datos generando datos aleatorios para pruebas y desarrollo',
            example: 'Desarrollador de base de datos generando cadenas aleatorias para población de datos de prueba'
        },
        {
            title: 'Generación de Contraseñas',
            description: 'Equipos de seguridad generando contraseñas temporales y credenciales seguras',
            example: 'Administrador de seguridad generando cadenas aleatorias para creación de contraseñas temporales'
        },
        {
            title: 'Identificadores Únicos',
            description: 'Arquitectos de sistemas creando identificadores únicos para varios componentes del sistema',
            example: 'Arquitecto de sistema generando cadenas aleatorias para identificación única de componentes'
        }
    ],
    'randomStringGenerator.technicalDetails': 'Nuestro generador de cadenas aleatorias usa la función incorporada Math.random() del navegador combinada con generación de números aleatorios criptográficamente seguros. Los conjuntos de caracteres se construyen dinámicamente basados en las selecciones del usuario, y las cadenas se generan carácter por carácter usando índices aleatorios seguros.',
    'randomStringGenerator.bestPractices': [
        {
            title: 'Selección de Longitud',
            tip: 'Usa cadenas más largas (16+ caracteres) para aplicaciones críticas de seguridad como contraseñas y claves API.'
        },
        {
            title: 'Complejidad de Caracteres',
            tip: 'Incluye múltiples tipos de caracteres (letras, números, símbolos) para cadenas más fuertes y seguras.'
        },
        {
            title: 'Consideraciones de Seguridad',
            tip: 'Nunca uses cadenas generadas directamente como contraseñas sin medidas de seguridad adicionales como hashing apropiado.'
        },
        {
            title: 'Calidad de Aleatoriedad',
            tip: 'Para aplicaciones de alta seguridad, considera usar métodos de generación criptográficamente seguros.'
        }
    ],
    'randomStringGenerator.commonErrors': [
        {
            error: 'Longitud Inválida',
            cause: 'La longitud está fuera del rango válido (4-128 caracteres) o no es un número',
            solution: 'Ingresa un número válido entre 4 y 128 para el campo de longitud.',
            prevention: 'Usa siempre números enteros dentro del rango especificado para la longitud de la cadena.'
        },
        {
            error: 'Ningún Conjunto de Caracteres Seleccionado',
            cause: 'Todas las opciones de tipo de carácter están deshabilitadas',
            solution: 'Habilita al menos un tipo de carácter (letras, números o símbolos).',
            prevention: 'Asegúrate siempre de que al menos un conjunto de caracteres esté seleccionado antes de la generación.'
        },
        {
            error: 'Problemas de Carga de Archivos',
            cause: 'El archivo es demasiado grande, corrupto o en formato no soportado',
            solution: 'Usa archivos de texto más pequeños o verifica el formato y límites de tamaño del archivo.',
            prevention: 'Verifica que el archivo sea texto plano y dentro de límites de tamaño razonables antes de cargar.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'La API del portapapeles o lectura de archivos no está disponible en el navegador',
            solution: 'Actualiza a un navegador moderno que soporte estas APIs.',
            prevention: 'Usa navegadores modernos con soporte completo de API para la mejor experiencia.'
        }
    ],
    'randomStringGenerator.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'utilidades de línea de comandos pwgen, openssl rand, /dev/urandom',
            pros: 'Integración de sistema, Programable, Sin dependencias',
            cons: 'Conocimiento técnico requerido, Sin GUI, Específico de plataforma',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual y compatibilidad multiplataforma.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'bibliotecas de programación random, secrets, crypto',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece generación instantánea de cadenas sin requisitos de programación.'
        },
        {
            name: 'Generadores Online',
            useCase: 'Varios servicios web de generación de cadenas aleatorias',
            pros: 'Acceso multiplataforma, Sin instalación, Múltiples opciones',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Riesgos de seguridad',
            comparison: 'Nuestra herramienta funciona sin conexión con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Herramientas del Sistema Incorporadas',
            useCase: 'utilidades del sistema PowerShell Get-Random, aleatorias del sistema',
            pros: 'Integración de sistema, Sin instalación, Características empresariales',
            cons: 'Específico de plataforma, Curva de aprendizaje, Personalización limitada',
            comparison: 'Nuestra herramienta proporciona experiencia consistente a través de diferentes plataformas.'
        }
    ],
    'randomStringGenerator.relatedTools': [
        {
            name: 'Generador de Contraseñas',
            description: 'Genera contraseñas fuertes con opciones personalizables',
            url: '/password-generator'
        },
        {
            name: 'Generador de UUID',
            description: 'Genera identificadores únicos universales (UUIDs)',
            url: '/uuid-generator'
        },
        {
            name: 'Generador de Hash',
            description: 'Genera hashes SHA-1, SHA-256 y SHA-512',
            url: '/hash-generator'
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
            name: 'Cifrador de Texto',
            description: 'Cifra texto con varios métodos de cifrado',
            url: '/text-encryptor'
        },
        {
            name: 'Generador de Números Aleatorios',
            description: 'Genera números aleatorios dentro de rangos especificados',
            url: '/random-number-generator'
        },
        {
            name: 'Herramienta de Auditoría de Seguridad',
            description: 'Audita y analiza configuraciones de seguridad',
            url: '/security-audit'
        }
    ],
    'randomStringGenerator.faqs': [
        {
            question: '¿Qué tan larga puede ser la cadena generada?',
            answer: 'Puedes generar cadenas de 4 a 128 caracteres de largo, configurable por el campo de longitud.'
        },
        {
            question: '¿Qué caracteres pueden ser incluidos?',
            answer: 'Puedes incluir letras (mayúsculas y minúsculas), números (0-9) y varios símbolos (!@#$%^&*()_+-=[]{}<>?) independientemente.'
        },
        {
            question: '¿Son realmente aleatorias las cadenas generadas?',
            answer: 'Sí, usamos la generación de números aleatorios incorporada del navegador para resultados seguros e impredecibles.'
        },
        {
            question: '¿Puedo cargar texto desde archivos?',
            answer: 'Sí, puedes cargar archivos de texto y el contenido se usará para establecer la longitud de la cadena.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la generación de cadenas ocurre directamente en tu navegador. Ningún dato se envía a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Puedo guardar cadenas generadas?',
            answer: 'Sí, la herramienta mantiene un historial local y puedes descargar cadenas como archivos de texto.'
        },
        {
            question: '¿Qué hace una cadena segura?',
            answer: 'Mayor longitud y variedad de caracteres (mezcla de letras, números y símbolos) crean cadenas más seguras.'
        },
        {
            question: '¿Puedo generar múltiples cadenas a la vez?',
            answer: 'Actualmente, la herramienta genera una cadena a la vez, pero puedes generar múltiples rápidamente usando la característica de historial.'
        }
    ],
    'randomStringGenerator.securityNote': 'Toda la generación de cadenas aleatorias ocurre localmente en tu navegador usando generación de números aleatorios incorporada. Ningún dato se envía a nuestros servidores, asegurando completa privacidad y seguridad.',
    'randomStringGenerator.additionalContent': 'La generación de cadenas aleatorias es esencial para autenticación de API, gestión de sesiones, pruebas de seguridad, población de bases de datos, generación de contraseñas y creación de identificadores únicos. Combina nuestro generador con otras herramientas como generadores de contraseñas, generadores de hash y herramientas de auditoría de seguridad para gestión comprehensiva de flujos de trabajo de seguridad.'
};
