export default {
    'hashGenerator.title': 'Generador de Hash - Herramienta Online SHA-1, SHA-256, SHA-512',
    'hashGenerator.description': 'Genera hashes SHA-1, SHA-256 y SHA-512 desde texto o archivos con características de copia e historial.',
    'hashGenerator.load_file': 'Cargar archivo',
    'hashGenerator.copy_text': 'Copiar Texto',
    'hashGenerator.download_text': 'Descargar Texto',
    'hashGenerator.save': 'Guardar',
    'hashGenerator.sha1': 'SHA-1',
    'hashGenerator.sha256': 'SHA-256',
    'hashGenerator.sha512': 'SHA-512',
    'hashGenerator.copy': 'Copiar',
    'hashGenerator.download': 'Descargar',
    'hashGenerator.history': 'Historial',
    'hashGenerator.restore': 'Restaurar',
    'hashGenerator.download_history': 'Descargar Historial',
    'hashGenerator.clear_history': 'Limpiar Historial',
    'hashGenerator.enter_text': 'Ingresa texto...',
    
    // SEO Content specific to Hash Generator
    'hashGenerator.mainDescription': 'Generador de hash online gratuito soportando algoritmos SHA-1, SHA-256 y SHA-512 con procesamiento instantáneo y seguimiento de historial.',
    'hashGenerator.extendedDescription': 'Nuestro generador comprehensivo de hash soporta múltiples algoritmos SHA incluyendo SHA-1, SHA-256 y SHA-512. Incluye procesamiento instantáneo de texto, soporte de carga de archivos, comparación de hashes y seguimiento completo de historial. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'hashGenerator.features': [
        {
            title: 'Múltiples Algoritmos SHA',
            description: 'Soporte para algoritmos de hash SHA-1, SHA-256 y SHA-512'
        },
        {
            title: 'Procesamiento Instantáneo',
            description: 'Generación de hash en tiempo real mientras escribes o cargas archivos'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de texto directamente para generación de hash'
        },
        {
            title: 'Historial de Hash',
            description: 'Rastrea y gestiona tu historial de generación de hashes localmente'
        },
        {
            title: 'Copia con un Clic',
            description: 'Copia instantáneamente cualquier valor de hash al portapapeles'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga hashes individuales o historial completo como archivos de texto'
        },
        {
            title: 'Comparación de Hash',
            description: 'Compara diferentes valores de hash para verificación'
        },
        {
            title: 'Diseño Responsivo',
            description: 'Diseño responsivo optimizado para generación de hash móvil y de escritorio'
        }
    ],
    'hashGenerator.steps': [
        'Escribe o pega texto o carga un archivo',
        'Los hashes se generan automáticamente para todos los algoritmos soportados',
        'Copia hashes individuales o descarga todos los resultados',
        'Guarda en historial para referencia y verificación posterior'
    ],
    'hashGenerator.examples': [
        {
            title: 'Hash de Contraseñas',
            description: 'Genera hash SHA-256 seguro para almacenamiento de contraseñas',
            code: 'micontraseña123',
            result: 'SHA-256: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd5f7b9e1e00fce',
            steps: [
                'Ingresa contraseña en campo de texto',
                'Copia hash SHA-256 para almacenamiento en base de datos',
                'Nunca almacenes contraseñas en texto plano, solo hashes'
            ]
        },
        {
            title: 'Verificación de Integridad de Archivos',
            description: 'Genera hash SHA-256 para verificación de integridad de archivos',
            code: 'Contenido de documento importante que no debe ser modificado',
            result: 'SHA-256: 2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
            steps: [
                'Carga archivo o pega contenido',
                'Genera hash SHA-256',
                'Almacena hash para verificación posterior',
                'Compara contenido de archivo contra hash almacenado'
            ]
        },
        {
            title: 'Generación de Claves API',
            description: 'Crea identificadores únicos para autenticación de API',
            code: 'usuario123_secreto_api_2024',
            result: 'SHA-1: 8d6e8c8c8c8c8c8c8c8c8c8c8c8c8c',
            steps: [
                'Ingresa identificador de clave API',
                'Genera hash SHA-1 para referencia rápida',
                'Usa hash para sistemas de autenticación de API',
                'Almacena tanto identificador como hash para verificación'
            ]
        }
    ],
    'hashGenerator.useCases': [
        {
            title: 'Seguridad de Contraseñas',
            description: 'Profesionales de seguridad hasheando contraseñas para almacenamiento y verificación seguros',
            example: 'Administrador de seguridad hasheando contraseñas de usuario antes de almacenamiento en base de datos'
        },
        {
            title: 'Integridad de Datos',
            description: 'Desarrolladores y profesionales de TI verificando integridad de archivos y detectando cambios',
            example: 'Desarrollador generando hashes SHA-256 para verificación de despliegue'
        },
        {
            title: 'Autenticación de API',
            description: 'Desarrolladores backend creando tokens de autenticación basados en hash y claves de API',
            example: 'Desarrollador de API generando hashes SHA-256 para autenticación de solicitudes'
        },
        {
            title: 'Firmas Digitales',
            description: 'Equipos de seguridad creando valores de hash para firma digital de documentos',
            example: 'Profesional de seguridad generando hashes SHA-512 para firma de documentos'
        },
        {
            title: 'Aplicaciones Blockchain',
            description: 'Desarrolladores de blockchain creando valores de hash para verificación de transacciones',
            example: 'Desarrollador de blockchain generando hashes SHA-256 para IDs de transacción'
        },
        {
            title: 'Requisitos de Cumplimiento',
            description: 'Oficiales de cumplimiento generando valores de hash para requisitos regulatorios',
            example: 'Oficial de cumplimiento generando hashes SHA-256 para trazas de auditoría'
        }
    ],
    'hashGenerator.technicalDetails': 'Nuestro generador de hash usa la Web Crypto API para generación segura de hashes SHA-1, SHA-256 y SHA-512. Los algoritmos procesan datos de entrada a través de codificación UTF-8 y generan salidas de hash de longitud fija. Todo el cómputo ocurre localmente usando funciones criptográficas nativas del navegador para máxima seguridad y rendimiento.',
    'hashGenerator.bestPractices': [
        {
            title: 'Selección de Algoritmo',
            tip: 'Usa SHA-256 para propósitos generales, SHA-512 para máxima seguridad, y SHA-1 solo cuando se requiera para compatibilidad.'
        },
        {
            title: 'Almacenamiento de Hash',
            tip: 'Almacena siempre hashes separadamente de los datos originales para verificación de seguridad.'
        },
        {
            title: 'Verificación de Datos',
            tip: 'Genera hashes antes de almacenar o transmitir datos para habilitar verificación de integridad.'
        },
        {
            title: 'Consideraciones de Seguridad',
            tip: 'Recuerda que el hash es unidireccional - siempre protege los datos originales sensibles incluso cuando almacenas hashes.'
        }
    ],
    'hashGenerator.commonErrors': [
        {
            error: 'Entrada Vacía',
            cause: 'No se proporcionó texto o contenido de archivo para generación de hash',
            solution: 'Ingresa texto en campo de entrada o carga un archivo para generar hashes.',
            prevention: 'Asegúrate siempre de que haya contenido antes de intentar generación de hash.'
        },
        {
            error: 'Procesamiento de Archivo Grande',
            cause: 'Archivo demasiado grande para generación de hash basada en navegador',
            solution: 'Usa archivos más pequeños o procesa datos en fragmentos para generación de hash.',
            prevention: 'Verifica límites de tamaño de archivo y usa tamaños de fragmento apropiados para datos grandes.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'Web Crypto API no disponible en el navegador',
            solution: 'Actualiza a un navegador moderno que soporte Web Crypto API.',
            prevention: 'Usa navegadores modernos con soporte de API criptográfica para generación de hash.'
        },
        {
            error: 'Limitaciones de Memoria',
            cause: 'Memoria insuficiente para procesar hashes de datos grandes',
            solution: 'Cierra otras pestañas y aplicaciones para liberar memoria para procesamiento de hash.',
            prevention: 'Monitorea uso de memoria y procesa datos en fragmentos manejables.'
        }
    ],
    'hashGenerator.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'utilidades de línea de comandos sha1sum, sha256sum, sha512sum',
            pros: 'Procesamiento potente, Programable, Integración de sistema',
            cons: 'Conocimiento técnico requerido, Sin GUI, Operación manual',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'bibliotecas de programación Crypto, hashlib, OpenSSL',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece generación instantánea de hash sin requisitos de programación.'
        },
        {
            name: 'Herramientas de Hash Online',
            useCase: 'Varios servicios web de generación de hash',
            pros: 'Acceso multiplataforma, Sin instalación, Múltiples algoritmos',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Riesgos de seguridad',
            comparison: 'Nuestra herramienta funciona sin conexión con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Herramientas del Sistema Incorporadas',
            useCase: 'utilidades del sistema PowerShell Get-FileHash, Certutil',
            pros: 'Integración de sistema, Sin instalación, Características empresariales',
            cons: 'Específico de plataforma, Curva de aprendizaje, Algoritmos limitados',
            comparison: 'Nuestra herramienta proporciona experiencia consistente a través de diferentes plataformas.'
        }
    ],
    'hashGenerator.relatedTools': [
        {
            name: 'Generador de Contraseñas',
            description: 'Genera contraseñas fuertes con opciones personalizables',
            url: '/password-generator'
        },
        {
            name: 'Cifrador de Texto',
            description: 'Cifra texto con varios algoritmos de cifrado',
            url: '/text-encryptor'
        },
        {
            name: 'Verificador de Hash',
            description: 'Verifica valores de hash contra datos originales',
            url: '/hash-verifier'
        },
        {
            name: 'Comparador de Archivos',
            description: 'Compara archivos y detecta diferencias',
            url: '/file-comparator'
        },
        {
            name: 'Herramienta de Firma Digital',
            description: 'Crea y verifica firmas digitales',
            url: '/digital-signature'
        },
        {
            name: 'Calculadora de Checksum',
            description: 'Calcula varios valores de checksum para archivos',
            url: '/checksum-calculator'
        },
        {
            name: 'Generador de Claves API',
            description: 'Genera claves API y tokens seguros',
            url: '/api-key-generator'
        },
        {
            name: 'Herramienta de Auditoría de Seguridad',
            description: 'Audita y analiza configuraciones de seguridad',
            url: '/security-audit'
        }
    ],
    'hashGenerator.faqs': [
        {
            question: '¿Qué algoritmos de hash son compatibles?',
            answer: 'Nuestra herramienta soporta algoritmos SHA-1, SHA-256 y SHA-512 usando la Web Crypto API para generación segura.'
        },
        {
            question: '¿Puedo hashear archivos grandes?',
            answer: 'Sí, puedes cargar archivos de tamaño razonable. La herramienta procesa datos eficientemente usando streaming del navegador.'
        },
        {
            question: '¿Son seguros los hashes generados?',
            answer: 'Sí, usamos la Web Crypto API que proporciona generación de hash criptográficamente segura en navegadores modernos.'
        },
        {
            question: '¿Cuál es la diferencia entre algoritmos SHA?',
            answer: 'SHA-1 produce hashes de 160-bit, SHA-256 produce hashes de 256-bit, y SHA-512 produce hashes de 512-bit. Valores de bits más altos proporcionan mejor seguridad pero son más largos.'
        },
        {
            question: '¿Puedo comparar hashes?',
            answer: 'Sí, puedes generar hashes para diferentes datos y compararlos para verificar integridad de datos o detectar cambios.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la generación de hash ocurre directamente en tu navegador. Tus datos de texto y hashes generados nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Para qué puedo usar hashes?',
            answer: 'Los hashes son comúnmente usados para almacenamiento de contraseñas, verificación de integridad de datos, firmas digitales, aplicaciones blockchain y autenticación de API.'
        },
        {
            question: '¿Puedo guardar historial de hash?',
            answer: 'Sí, la herramienta mantiene un historial local de tus generaciones de hash para fácil acceso y verificación.'
        },
        {
            question: '¿Qué algoritmo SHA debería usar?',
            answer: 'Usa SHA-256 para propósitos generales, SHA-512 para requisitos máximos de seguridad, y SHA-1 solo cuando se requiera para compatibilidad con sistemas heredados.'
        }
    ],
    'hashGenerator.securityNote': 'Toda la generación de hash ocurre localmente en tu navegador usando la Web Crypto API. Ningún dato de texto o valor de hash se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'hashGenerator.additionalContent': 'La generación de hash es esencial para seguridad de contraseñas, verificación de integridad de datos, autenticación de API, firmas digitales, aplicaciones blockchain y requisitos de cumplimiento. Combina nuestro generador con otras herramientas como generadores de contraseñas, cifradores de texto y herramientas de auditoría de seguridad para gestión comprehensiva de flujos de trabajo de seguridad.'
};
