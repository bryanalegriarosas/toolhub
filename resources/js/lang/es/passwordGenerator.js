export default {
    'passwordGenerator.title': 'Generador de Contraseñas - Crear Contraseñas Fuertes Online',
    'passwordGenerator.description': 'Genera contraseñas seguras con longitud y conjuntos de caracteres personalizados.',
    'passwordGenerator.password_length': 'Longitud de contraseña',
    'passwordGenerator.uppercase': 'Mayúsculas',
    'passwordGenerator.lowercase': 'Minúsculas',
    'passwordGenerator.numbers': 'Números',
    'passwordGenerator.symbols': 'Símbolos',
    'passwordGenerator.exclude_similar': 'Excluir similares (iIlLoO0)',
    'passwordGenerator.generate': 'Generar',
    'passwordGenerator.copy': 'Copiar',
    'passwordGenerator.clear': 'Limpiar',
    'passwordGenerator.history': 'Historial',
    'passwordGenerator.download_all': 'Descargar Todo',
    'passwordGenerator.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to Password Generator
    'passwordGenerator.mainDescription': 'Generador de contraseñas online gratuito con longitud personalizable, conjuntos de caracteres y características de seguridad.',
    'passwordGenerator.extendedDescription': 'Nuestro generador comprehensivo de contraseñas te ayuda a crear contraseñas fuertes y seguras con opciones personalizables. Incluye selección de conjunto de caracteres, control de longitud, exclusión de caracteres similares y seguimiento de historial. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'passwordGenerator.features': [
        {
            title: 'Longitud Personalizable',
            description: 'Establece longitud de contraseña de 1 a 128 caracteres para diferentes requisitos de seguridad'
        },
        {
            title: 'Control de Conjunto de Caracteres',
            description: 'Elige entre mayúsculas, minúsculas, números y símbolos para complejidad de contraseña'
        },
        {
            title: 'Exclusión de Caracteres Similares',
            description: 'Opcionalmente excluye caracteres que se parecen (i, l, 1, L, o, O, 0) para prevenir confusión'
        },
        {
            title: 'Historial de Contraseñas',
            description: 'Rastrea y gestiona tus contraseñas generadas localmente para referencia'
        },
        {
            title: 'Copia con un Clic',
            description: 'Copia instantáneamente contraseñas generadas al portapapeles para fácil uso'
        },
        {
            title: 'Generación por Lotes',
            description: 'Genera múltiples contraseñas rápidamente con diferentes configuraciones'
        },
        {
            title: 'Indicadores de Seguridad',
            description: 'Indicadores visuales para fuerza y complejidad de contraseña'
        },
        {
            title: 'Diseño Responsivo',
            description: 'Diseño responsivo optimizado para generación de contraseñas móviles y de escritorio'
        }
    ],
    'passwordGenerator.steps': [
        'Elige la longitud deseada y conjuntos de caracteres',
        'Haz clic en generar para crear una contraseña segura',
        'Copia o descarga contraseñas, y revisa el historial',
        'Usa contraseñas generadas para cuentas y necesidades de seguridad'
    ],
    'passwordGenerator.examples': [
        {
            title: 'Contraseña Fuerte para Sitio Web',
            description: 'Genera una contraseña segura para registro de usuario',
            code: 'Longitud: 16, Incluir: Mayúsculas, Minúsculas, Números, Símbolos',
            result: 'Kj8#mP2$nL9@xQ5!',
            steps: [
                'Establece longitud a 16 caracteres',
                'Habilita todos los tipos de caracteres (mayúsculas, minúsculas, números, símbolos)',
                'Haz clic en "Generar"',
                'Copia la contraseña generada'
            ]
        },
        {
            title: 'Código PIN Simple',
            description: 'Genera un PIN numérico para dispositivos móviles',
            code: 'Longitud: 6, Incluir: Solo números',
            result: '274936',
            steps: [
                'Establece longitud a 6',
                'Habilita solo la opción "Números"',
                'Deshabilita otros tipos de caracteres',
                'Haz clic en "Generar"'
            ]
        },
        {
            title: 'Contraseña Estilo Frase',
            description: 'Crea una contraseña legible pero segura sin símbolos',
            code: 'Longitud: 20, Incluir: Mayúsculas, Minúsculas, Números, Excluir caracteres similares',
            result: 'TrustedBlueSky48',
            steps: [
                'Establece longitud a 20',
                'Habilita mayúsculas, minúsculas, números',
                'Deshabilita símbolos',
                'Habilita "Excluir caracteres similares"',
                'Genera múltiples opciones hasta que encuentres una memorable'
            ]
        }
    ],
    'passwordGenerator.useCases': [
        {
            title: 'Registro de Cuentas',
            description: 'Usuarios creando contraseñas seguras para nuevas cuentas en línea y servicios',
            example: 'Usuario registrándose para cuentas de redes sociales con contraseñas fuertes y únicas'
        },
        {
            title: 'Seguridad TI',
            description: 'Administradores TI generando contraseñas para acceso al sistema y gestión de usuarios',
            example: 'Administrador TI creando contraseñas temporales para mantenimiento del sistema y acceso'
        },
        {
            title: 'Desarrollo de Aplicaciones',
            description: 'Desarrolladores generando contraseñas de prueba para desarrollo y pruebas de aplicaciones',
            example: 'Desarrollador creando contraseñas de prueba para sistemas de autenticación de usuario'
        },
        {
            title: 'Seguridad Personal',
            description: 'Individuos creando contraseñas seguras para dispositivos personales y servicios en línea',
            example: 'Persona creando contraseñas para cuentas de correo electrónico, banca y compras'
        },
        {
            title: 'Seguridad Empresarial',
            description: 'Usuarios empresariales generando contraseñas para cuentas corporativas y sistemas',
            example: 'Empleado creando contraseñas para sistemas de la empresa y cuentas de clientes'
        },
        {
            title: 'Restablecimiento de Contraseñas',
            description: 'Personal de soporte generando contraseñas temporales para recuperación de cuentas de usuario',
            example: 'Agente de soporte generando contraseñas seguras temporales para procesos de restablecimiento de contraseña'
        }
    ],
    'passwordGenerator.technicalDetails': 'Nuestro generador de contraseñas usa generación de números aleatorios criptográficamente seguros para crear contraseñas. El conjunto de caracteres se construye dinámicamente basado en las selecciones del usuario, y la exclusión de caracteres similares previene la confusión visual. Toda la generación ocurre localmente usando el Math.random() incorporado de JavaScript con semilla apropiada para seguridad.',
    'passwordGenerator.bestPractices': [
        {
            title: 'Longitud de Contraseña',
            tip: 'Usa contraseñas de al menos 12 caracteres para mejor seguridad contra ataques de fuerza bruta.'
        },
        {
            title: 'Variedad de Caracteres',
            tip: 'Incluye múltiples tipos de caracteres (mayúsculas, minúsculas, números, símbolos) para máxima complejidad.'
        },
        {
            title: 'Evitar Información Personal',
            tip: 'Nunca uses información personal como nombres, fechas de cumpleaños o palabras comunes en las contraseñas.'
        },
        {
            title: 'Actualizaciones Regulares',
            tip: 'Actualiza las contraseñas regularmente y usa contraseñas únicas para diferentes cuentas y servicios.'
        }
    ],
    'passwordGenerator.commonErrors': [
        {
            error: 'Ningún Tipo de Carácter Seleccionado',
            cause: 'Todas las opciones de tipo de carácter están deshabilitadas',
            solution: 'Habilita al menos un tipo de carácter (mayúsculas, minúsculas, números o símbolos).',
            prevention: 'Asegúrate siempre de que al menos un tipo de carácter esté seleccionado antes de generar contraseñas.'
        },
        {
            error: 'Longitud de Contraseña Inválida',
            cause: 'La longitud de la contraseña está establecida en cero o valor negativo',
            solution: 'Establece una longitud de contraseña positiva entre 1 y 128 caracteres.',
            prevention: 'Usa el campo de entrada de longitud para establecer la longitud de contraseña apropiada.'
        },
        {
            error: 'Problemas de Copia en el Navegador',
            cause: 'Acceso al portapapeles denegado o problemas de compatibilidad del navegador',
            solution: 'Verifica los permisos del navegador para acceso al portapapeles o usa el método de copia manual.',
            prevention: 'Prueba la funcionalidad del portapapeles en tu navegador y usa HTTPS para sitios seguros.'
        },
        {
            error: 'Conjunto de Caracteres Demasiado Pequeño',
            cause: 'El conjunto de caracteres es demasiado pequeño para generación de contraseñas seguras',
            solution: 'Habilita más tipos de caracteres o aumenta la longitud de la contraseña para mejor seguridad.',
            prevention: 'Usa siempre múltiples tipos de caracteres para mejor complejidad de la contraseña.'
        }
    ],
    'passwordGenerator.alternatives': [
        {
            name: 'Gestores de Contraseñas Incorporados',
            useCase: 'Gestores de contraseñas del navegador, Keychain, Administrador de Credenciales de Windows',
            pros: 'Integración del sistema, Autocompletar, Sincronización entre dispositivos',
            cons: 'Personalización limitada, Específico de la plataforma, Preocupaciones de privacidad',
            comparison: 'Nuestra herramienta ofrece más opciones de personalización y funciona completamente sin conexión con completa privacidad.'
        },
        {
            name: 'Aplicaciones de Gestor de Contraseñas',
            useCase: '1Password, LastPass, Bitwarden, Dashlane gestores de contraseñas',
            pros: 'Características avanzadas, Multiplataforma, Almacenamiento cifrado',
            cons: 'Costo de suscripción, Curva de aprendizaje, Dependencia de internet',
            comparison: 'Nuestra herramienta proporciona generación de contraseñas gratuita sin requisitos de cuenta o suscripciones.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'pwgen, openssl, mkpasswd utilidades de línea de comandos',
            pros: 'Programable, Opciones avanzadas, Sin sobrecarga de GUI',
            cons: 'Conocimiento técnico requerido, Operación manual, Accesibilidad limitada',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Generadores de Contraseñas Online',
            useCase: 'Varios servicios web de generación de contraseñas',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Riesgos de seguridad',
            comparison: 'Nuestra herramienta funciona sin conexión con completa privacidad y sin transmisión de datos a servidores.'
        }
    ],
    'passwordGenerator.relatedTools': [
        {
            name: 'Verificador de Fuerza de Contraseña',
            description: 'Analiza la fuerza de contraseña y nivel de seguridad',
            url: '/password-strength-checker'
        },
        {
            name: 'Generador de Hash',
            description: 'Genera varios valores de hash desde contraseñas y texto',
            url: '/hash-generator'
        },
        {
            name: 'Generador de Cadena Aleatoria',
            description: 'Genera cadenas aleatorias con conjuntos de caracteres personalizados',
            url: '/random-string-generator'
        },
        {
            name: 'Generador UUID',
            description: 'Genera UUIDs únicos para desarrollo de aplicaciones',
            url: '/uuid-generator'
        },
        {
            name: 'Generador de Código PIN',
            description: 'Genera códigos PIN numéricos para dispositivos móviles',
            url: '/pin-generator'
        },
        {
            name: 'Cifrador de Texto',
            description: 'Cifra texto con varios métodos de cifrado',
            url: '/text-encryptor'
        },
        {
            name: 'Herramienta de Auditoría de Seguridad',
            description: 'Audita y analiza configuraciones de seguridad',
            url: '/security-audit'
        },
        {
            name: 'Gestor de Contraseñas',
            description: 'Sistema de almacenamiento y gestión de contraseñas seguro',
            url: '/password-manager'
        }
    ],
    'passwordGenerator.faqs': [
        {
            question: '¿Qué hace una contraseña fuerte?',
            answer: 'Las contraseñas fuertes combinan longitud (12+ caracteres), variedad de caracteres (mayúsculas, minúsculas, números, símbolos) y evitan patrones comunes o información personal.'
        },
        {
            question: '¿Son verdaderamente aleatorias las contraseñas generadas?',
            answer: 'Sí, nuestro generador usa generación de números aleatorios criptográficamente seguros para asegurar verdadera aleatoriedad e imprevisibilidad.'
        },
        {
            question: '¿Puedo generar contraseñas para diferentes propósitos?',
            answer: 'Sí, puedes personalizar la longitud y conjuntos de caracteres para contraseñas de sitios web, códigos PIN o contraseñas estilo frase.'
        },
        {
            question: '¿Son privados mis datos de contraseña?',
            answer: 'Toda la generación de contraseñas ocurre directamente en tu navegador. Ninguna contraseña o configuración se envía a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué son los caracteres similares?',
            answer: 'Los caracteres similares son aquellos que pueden parecerse (i, l, 1, L, o, O, 0). Excluirlos previene confusión en la entrada de contraseña.'
        },
        {
            question: '¿Qué tan largas deben ser mis contraseñas?',
            answer: 'Para seguridad, usa contraseñas de al menos 12 caracteres. Las contraseñas más largas (16-20 caracteres) proporcionan mejor protección contra ataques de fuerza bruta.'
        },
        {
            question: '¿Puedo guardar contraseñas generadas?',
            answer: 'Sí, la herramienta mantiene un historial local de tus contraseñas generadas para tu referencia. Considera usar un gestor de contraseñas dedicado para almacenamiento a largo plazo.'
        },
        {
            question: '¿Qué conjuntos de caracteres debo usar?',
            answer: 'Para máxima seguridad, usa todos los tipos de caracteres (mayúsculas, minúsculas, números, símbolos). Para códigos PIN, usa solo números. Para contraseñas memorables, considera excluir símbolos.'
        }
    ],
    'passwordGenerator.securityNote': 'Toda la generación de contraseñas ocurre localmente en tu navegador usando JavaScript. Ninguna contraseña o configuración de generación se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'passwordGenerator.additionalContent': 'La generación de contraseñas es esencial para registro de cuentas, seguridad TI, desarrollo de aplicaciones, seguridad personal, seguridad empresarial y procesos de restablecimiento de contraseña. Combina nuestro generador con otras herramientas como verificadores de fuerza de contraseña, generadores de hash y herramientas de auditoría de seguridad para gestión comprehensiva de flujos de trabajo de seguridad.'
};
