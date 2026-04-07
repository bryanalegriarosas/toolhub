export default {
    'timestampConverter.title': 'Convertidor de Timestamp UNIX - Herramienta Online Gratuita',
    'timestampConverter.description': 'Convierte entre timestamps UNIX y fechas legibles instantáneamente. Soporta segundos y milisegundos.',
    'timestampConverter.unix_timestamp': 'Timestamp UNIX',
    'timestampConverter.date': 'Fecha',
    'timestampConverter.seconds': 'Segundos',
    'timestampConverter.milliseconds': 'Milisegundos',
    'timestampConverter.use_date_only_input': 'Usar solo fecha',
    'timestampConverter.convert': 'Convertir',
    'timestampConverter.copy_timestamp': 'Copiar Timestamp',
    'timestampConverter.copy_date': 'Copiar Fecha',
    'timestampConverter.clear': 'Limpiar',
    'timestampConverter.history': 'Historial',
    'timestampConverter.copy': 'Copiar',
    'timestampConverter.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to Timestamp Converter
    'timestampConverter.mainDescription': 'Herramienta de conversión de timestamp UNIX online gratuita con conversión instantánea entre timestamps y fechas legibles. Perfecta para desarrolladores y procesamiento de datos.',
    'timestampConverter.extendedDescription': 'Nuestra herramienta comprehensiva de conversión de timestamp UNIX te ayuda a convertir entre timestamps UNIX y fechas legibles instantáneamente. Incluye soporte para segundos y milisegundos, manejo de zona horaria, historial de conversión y funcionalidad de copia. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'timestampConverter.features': [
        {
            title: 'Conversión Instantánea',
            description: 'Convierte entre timestamps UNIX y fechas legibles instantáneamente con procesamiento en tiempo real'
        },
        {
            title: 'Soporte de Múltiples Unidades',
            description: 'Maneja timestamps de segundos y milisegundos con conversión automática'
        },
        {
            title: 'Flexibilidad de Fecha/Hora',
            description: 'Soporta entradas de solo fecha y fecha+hora para conversión comprehensiva'
        },
        {
            title: 'Funcionalidad de Copia',
            description: 'Copia con un clic al portapapeles para timestamps y fechas'
        },
        {
            title: 'Historial de Conversión',
            description: 'Rastrea tu historial de conversión con funcionalidad de copia y limpieza'
        },
        {
            title: 'Manejo de Zona Horaria',
            description: 'Manejo automático de zona horaria basado en configuraciones de tu navegador'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Diseño responsivo optimizado para conversión móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la conversión ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'timestampConverter.steps': [
        'Ingresa o genera un timestamp (segundos o milisegundos) o selecciona una fecha',
        'Activa "Usar solo fecha" para cambiar entre fecha y fecha+hora',
        'Elige segundos o milisegundos para unidades de timestamp',
        'Haz clic en Convertir para actualizar el otro campo automáticamente',
        'Copia valores o limpia usando los botones de acción'
    ],
    'timestampConverter.examples': [
        {
            title: 'Convertir Tiempo Actual',
            description: 'Convierte timestamp actual a fecha legible',
            code: 'Timestamp: 1710000000 (segundos)',
            result: 'Fecha: 2024-03-09 10:00:00'
        },
        {
            title: 'Conversión de Fecha JavaScript',
            description: 'Convierte timestamp de milisegundos de JavaScript',
            code: 'Timestamp: 1710000000000 (milisegundos)',
            result: 'Fecha: 2024-03-09 10:00:00',
            steps: [
                'Obtener timestamp de JavaScript: Date.now()',
                'Seleccionar unidad "Milisegundos"',
                'Ingresar timestamp',
                'Convertir a fecha legible'
            ]
        },
        {
            title: 'Timestamp de Respuesta API',
            description: 'Convierte timestamp de respuesta API',
            code: 'Timestamp: 1672531200 (segundos)',
            result: 'Fecha: 2023-01-01 00:00:00'
        }
    ],
    'timestampConverter.useCases': [
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores convirtiendo timestamps para aplicaciones web y APIs',
            example: 'Desarrollador frontend convirtiendo timestamps de API para visualización'
        },
        {
            title: 'Procesamiento de Datos',
            description: 'Analistas de datos procesando datos de timestamp de bases de datos y logs',
            example: 'Analista de datos convirtiendo timestamps de logs para análisis'
        },
        {
            title: 'Integración de API',
            description: 'Desarrolladores trabajando con respuestas API que contienen timestamps',
            example: 'Desarrollador backend convirtiendo timestamps para documentación API'
        },
        {
            title: 'Gestión de Base de Datos',
            description: 'Administradores de bases de datos gestionando campos de timestamp y datos',
            example: 'Administrador DB convirtiendo timestamps para migración de datos'
        },
        {
            title: 'Desarrollo Móvil',
            description: 'Desarrolladores de apps móviles manejando conversiones de timestamp en aplicaciones',
            example: 'Desarrollador iOS convirtiendo timestamps para características de app'
        },
        {
            title: 'Administración de Sistemas',
            description: 'Administradores de sistemas trabajando con logs de sistema y timestamps',
            example: 'Sysadmin convirtiendo timestamps de servidor para solución de problemas'
        }
    ],
    'timestampConverter.technicalDetails': 'Nuestro convertidor de timestamp usa el objeto Date incorporado de JavaScript para conversión precisa de timestamp. La herramienta maneja segundos y milisegundos aplicando factores de conversión apropiados (1000ms = 1s). Todos los cálculos de fecha usan UTC internamente y muestran hora local basada en configuraciones de zona horaria del navegador. Todo el procesamiento ocurre localmente usando manipulación de fecha eficiente para rendimiento óptimo.',
    'timestampConverter.bestPractices': [
        {
            title: 'Unidades Consistentes',
            tip: 'Sé siempre consistente con unidades de timestamp (segundos vs milisegundos) en tu aplicación.'
        },
        {
            title: 'Conciencia de Zona Horaria',
            tip: 'Ten en cuenta diferencias de zona horaria cuando trabajas con timestamps en diferentes regiones.'
        },
        {
            title: 'Validación',
            tip: 'Siempre valida entradas de timestamp antes de procesar para prevenir errores.'
        },
        {
            title: 'Consideraciones de Precisión',
            tip: 'Usa milisegundos para mayor precisión cuando sea necesario, segundos para uso general.'
        }
    ],
    'timestampConverter.commonErrors': [
        {
            error: 'Formato de Timestamp Inválido',
            cause: 'La entrada contiene caracteres no numéricos o valores de timestamp inválidos',
            solution: 'Asegura que el timestamp sea un número válido representando segundos o milisegundos desde epoch.',
            prevention: 'Valida el formato de entrada y proporciona mensajes de error amigables para el usuario.'
        },
        {
            error: 'Desajuste de Unidades',
            cause: 'Usando unidad incorrecta (segundos vs milisegundos) para conversión de timestamp',
            solution: 'Selecciona la unidad correcta antes de la conversión o verifica el formato esperado.',
            prevention: 'Documenta claramente los requisitos de formato de timestamp y valida unidades.'
        },
        {
            error: 'Problemas de Análisis de Fecha',
            cause: 'Formato de fecha inválido o valores de fecha no soportados',
            solution: 'Usa formatos de fecha estándar y valida entradas de fecha antes de la conversión.',
            prevention: 'Proporciona ejemplos de entrada claros y guías de formato.'
        },
        {
            error: 'Confusión de Zona Horaria',
            cause: 'Mezclando UTC y hora local sin conversión apropiada',
            solution: 'Sé consistente con el manejo de zona horaria y documenta suposiciones de zona horaria.',
            prevention: 'Especifica siempre la zona horaria cuando trabajas con timestamps entre regiones.'
        }
    ],
    'timestampConverter.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Comando date en sistemas Unix/Linux y PowerShell',
            pros: 'Disponibilidad incorporada, Programable, Integración con sistema',
            cons: 'Conocimiento técnico requerido, Sin GUI, Sintaxis compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'Bibliotecas de fecha/hora en Python, Java, JavaScript y otros lenguajes',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece conversión instantánea sin requisitos de programación.'
        },
        {
            name: 'Convertidores Online',
            useCase: 'Servicios de conversión de timestamp basados en web',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Plugins de IDE',
            useCase: 'Plugins de entorno de desarrollo para conversión de timestamp',
            pros: 'Integración IDE, Integración de flujo de trabajo, Características avanzadas',
            cons: 'Específico de IDE, Curva de aprendizaje, Uso independiente limitado',
            comparison: 'Nuestra herramienta proporciona conversión enfocada sin dependencias de entorno de desarrollo.'
        }
    ],
    'timestampConverter.relatedTools': [
        {
            name: 'Calculadora de Fechas',
            description: 'Calcula diferencias de fechas y agrega/resta períodos de tiempo',
            url: '/date-calculator'
        },
        {
            name: 'Convertidor de Zona Horaria',
            description: 'Convierte tiempos entre diferentes zonas horarias',
            url: '/timezone-converter'
        },
        {
            name: 'Convertidor de Epoch',
            description: 'Convierte entre diferentes formatos de epoch',
            url: '/epoch-converter'
        },
        {
            name: 'Formateador de Fechas',
            description: 'Formatea fechas en varios estilos y patrones',
            url: '/date-formatter'
        },
        {
            name: 'Calculadora de Tiempo',
            description: 'Calcula diferencias de tiempo y duraciones',
            url: '/time-calculator'
        },
        {
            name: 'Calculadora de Tiempo UNIX',
            description: 'Realiza cálculos con timestamps UNIX',
            url: '/unix-time-calculator'
        },
        {
            name: 'Convertidor de Fecha ISO',
            description: 'Convierte entre formatos de fecha ISO y timestamps',
            url: '/iso-date-converter'
        },
        {
            name: 'Analizador de Fechas',
            description: 'Analiza y analiza cadenas de fecha de varios formatos',
            url: '/date-parser'
        }
    ],
    'timestampConverter.faqs': [
        {
            question: '¿Qué es un timestamp UNIX?',
            answer: 'Un timestamp UNIX representa el número de segundos (o milisegundos) que han transcurrido desde el 1 de enero de 1970 UTC (época Unix).'
        },
        {
            question: '¿Puedo usar diferentes zonas horarias?',
            answer: 'La conversión se realiza en UTC; el campo de fecha muestra hora local basada en la configuración de zona horaria de tu navegador.'
        },
        {
            question: '¿El campo de fecha incluye hora?',
            answer: 'Sí, puedes especificar tanto fecha como hora. El convertidor usa tu hora local al calcular timestamps.'
        },
        {
            question: '¿Qué hace el interruptor de solo fecha?',
            answer: 'Cuando está activado, la entrada cambia a un selector de fecha simple y trata la hora como 00:00; cuando está desactivado acepta tanto fecha como hora.'
        },
        {
            question: '¿Cuál es la diferencia entre segundos y milisegundos?',
            answer: 'Los segundos cuentan segundos completos desde epoch, mientras que los milisegundos proporcionan mayor precisión con tres decimales.'
        },
        {
            question: '¿Puedo convertir timestamps negativos?',
            answer: 'Sí, los timestamps negativos representan fechas antes del 1 de enero de 1970 UTC y son soportados por nuestro convertidor.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la conversión ocurre directamente en tu navegador. Tus timestamps y fechas nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Cuál es el timestamp máximo?',
            answer: 'Los objetos Date de JavaScript soportan timestamps hasta aproximadamente 8.6e16 milisegundos (13 de septiembre de 275760).'
        }
    ],
    'timestampConverter.securityNote': 'Toda la conversión de timestamp ocurre localmente en tu navegador usando JavaScript. Ningún dato de timestamp o fecha se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'timestampConverter.additionalContent': 'La conversión de timestamp UNIX es esencial para desarrollo web, procesamiento de datos, integración de API y administración de sistemas. Combina nuestro convertidor con otras herramientas como calculadoras de fecha, convertidores de zona horaria y formateadores de fecha para flujos de trabajo comprehensivos de gestión de tiempo y fecha.'
};
