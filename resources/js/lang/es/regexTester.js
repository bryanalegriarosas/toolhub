export default {
    'regexTester.title': 'Probador de Regex',
    'regexTester.description': 'Evalúa patrones de expresiones regulares contra texto con resultados de coincidencia instantáneos e historial.',
    'regexTester.load_file': 'Cargar archivo:',
    'regexTester.copy_text': 'Copiar Texto',
    'regexTester.download_text': 'Descargar Texto',
    'regexTester.clear': 'Limpiar',
    'regexTester.save': 'Guardar',
    'regexTester.regex_pattern': 'Patrón Regex',
    'regexTester.test_text': 'Texto de Prueba',
    'regexTester.text_placeholder': 'Ingrese texto para probar...',
    'regexTester.matches': 'Coincidencias',
    'regexTester.no_matches': 'Sin coincidencias',
    'regexTester.history': 'Historial',
    'regexTester.restore': 'Restaurar',
    'regexTester.download_history': 'Descargar Historial',
    'regexTester.clear_history': 'Limpiar Historial',
    
    // SEO Content specific to Regex tester
    'regexTester.mainDescription': 'Probador de regex online gratuito con pruebas en tiempo real, validación de sintaxis, resaltado de coincidencias y gestión de historial. Perfecto para desarrolladores probando y depurando expresiones regulares.',
    'regexTester.extendedDescription': 'Nuestra herramienta comprehensiva de probador de regex te ayuda a probar y validar expresiones regulares con características avanzadas. Incluye pruebas en tiempo real, validación de sintaxis, gestión de historial de pruebas y soporte para patrones regex complejos. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'regexTester.features': [
        {
            title: 'Pruebas Regex en Tiempo Real',
            description: 'Prueba patrones regex instantáneamente mientras escribes con resultados de coincidencia en vivo'
        },
        {
            title: 'Validación de Sintaxis',
            description: 'Valida sintaxis regex con resaltado de errores y sugerencias'
        },
        {
            title: 'Resaltado de Coincidencias',
            description: 'Resaltado de coincidencias codificado por colores con extracción de grupos y seguimiento de posición'
        },
        {
            title: 'Historial de Pruebas',
            description: 'Guarda y gestiona historial de pruebas regex con pares de patrón y texto'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos de prueba directamente desde tu dispositivo para pruebas regex'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia texto de prueba con un clic o descarga resultados como archivos de texto'
        },
        {
            title: 'Biblioteca de Patrones',
            description: 'Patrones regex comunes incorporados para validación de email, teléfono, URL y contraseña'
        },
        {
            title: 'Captura de Grupo',
            description: 'Visualización de grupos regex y valores capturados'
        },
        {
            title: 'Múltiples Modos de Prueba',
            description: 'Prueba patrones contra texto único o múltiples casos de prueba'
        },
        {
            title: 'Exportar Resultados',
            description: 'Exporta resultados de coincidencias e historial de pruebas para documentación y compartir'
        },
        {
            title: 'Referencia Regex',
            description: 'Referencia rápida para sintaxis regex común y caracteres especiales'
        }
    ],
    'regexTester.steps': [
        'Ingresa tu patrón de expresión regular en el campo de entrada regex',
        'Agrega texto de prueba en el área de texto de prueba',
        'Haz clic en "Probar" o usa pruebas en tiempo real para ver coincidencias',
        'Ve resultados de coincidencia detallados incluyendo grupos y posiciones',
        'Guarda patrones útiles en el historial para referencia futura',
        'Copia resultados de coincidencias o descarga datos de prueba para documentación'
    ],
    'regexTester.examples': [
        {
            title: 'Validación de Email',
            description: 'Prueba patrón regex para validación de dirección de email',
            code: 'Patrón: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/',
            result: 'Coincidencias: john@example.com | test.user@domain.co.uk | ✗ email-inválido | ✗ @dominiofaltante.com'
        },
        {
            title: 'Validación de Número de Teléfono',
            description: 'Valida formatos de número de teléfono internacionales',
            code: 'Patrón: /^\\+?[1-9]\\d{1,14}$/',
            result: 'Coincidencias: +1234567890 | ✓ 9876543210 | ✗ 123 | ✗ +0123456789',
            steps: [
                'Ingresa patrón regex de número de teléfono',
                'Prueba con números de muestra internacionales',
                'Verifica soporte de formato para diferentes países',
                'Ajusta patrón para requisitos específicos'
            ]
        },
        {
            title: 'Extracción de URL',
            description: 'Extrae todas las URLs de texto usando patrón regex',
            code: 'Patrón: /https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+([\\w\\-\\.,@?^=%&:/~\\+#]*[\\w\\-\\@?^=%&/~\\+#])?/',
            result: 'Encontrados: https://example.com | https://test.org/page | http://site.net'
        },
        {
            title: 'Validación de Fortaleza de Contraseña',
            description: 'Valida requisitos de contraseña con regex complejo',
            code: 'Patrón: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])([A-Za-z\\d@$!%*?&]{8,}$/',
            result: '✓ ContraseñaFuerte123! | ✗ débil | ✗ SinNúmero! | ✗ corta1A!',
            steps: [
                'Prueba contraseña con requisitos de complejidad',
                'Verifica mayúsculas, minúsculas, número y caracteres especiales',
                'Ajusta longitud mínima y reglas de complejidad',
                'Usa para validación de formulario y políticas de seguridad'
            ]
        }
    ],
    'regexTester.useCases': [
        {
            title: 'Validación de Formularios',
            description: 'Desarrolladores probando patrones regex para validación de entrada de formulario',
            example: 'Desarrollador frontend probando regex de validación de email para formulario de registro de usuario'
        },
        {
            title: 'Procesamiento de Datos',
            description: 'Científicos de datos extrayendo patrones de conjuntos de datos grandes',
            example: 'Científico de datos extrayendo direcciones de email y números de teléfono de datos de clientes'
        },
        {
            title: 'Análisis de Logs',
            description: 'Administradores de sistema parseando archivos de logs con patrones regex',
            example: 'Ingeniero DevOps extrayendo patrones de error y direcciones IP de logs del servidor'
        },
        {
            title: 'Moderación de Contenido',
            description: 'Moderadores de contenido filtrando texto usando patrones regex',
            example: 'Moderador de contenido detectando y filtrando patrones de contenido inapropiados'
        },
        {
            title: 'Pruebas de Seguridad',
            description: 'Profesionales de seguridad probando patrones de validación de entrada',
            example: 'Ingeniero de seguridad probando patrones regex para saneamiento de entrada'
        },
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores backend validando parámetros de solicitud API',
            example: 'Desarrollador API probando patrones regex para validación de endpoint'
        },
        {
            title: 'Procesamiento de Texto',
            description: 'Escritores y editores procesando texto con coincidencia de patrones',
            example: 'Escritor técnico extrayendo términos específicos y formato de documentos'
        },
        {
            title: 'Aprendizaje Regex',
            description: 'Estudiantes y desarrolladores aprendiendo sintaxis y patrones regex',
            example: 'Estudiante practicando patrones regex con pruebas interactivas y ejemplos'
        }
    ],
    'regexTester.technicalDetails': 'Nuestro probador de regex usa el motor JavaScript RegExp para coincidencia de patrones y validación. La herramienta soporta sintaxis regex estándar JavaScript incluyendo flags globales, clases de caracteres, cuantificadores y grupos de captura. Todo el procesamiento ocurre localmente usando JavaScript moderno y RegExp API.',
    'regexTester.bestPractices': [
        {
            title: 'Optimización de Patrones',
            tip: 'Usa patrones regex eficientes para evitar problemas de rendimiento con entradas de texto grandes.'
        },
        {
            title: 'Escapado de Caracteres',
            tip: 'Escapa apropiadamente caracteres especiales en patrones regex y usa cadenas raw cuando sea necesario.'
        },
        {
            title: 'Estrategia de Pruebas',
            tip: 'Prueba patrones regex con varios casos límite y entradas inválidas para asegurar robustez.'
        },
        {
            title: 'Uso de Grupos',
            tip: 'Usa grupos de captura efectivamente para extraer partes específicas de coincidencias para procesamiento.'
        }
    ],
    'regexTester.commonErrors': [
        {
            error: 'Sintaxis Regex Inválida',
            cause: 'Patrón regex malformado con caracteres sin escapar o sintaxis incorrecta',
            solution: 'Verifica corchetes faltantes, caracteres especiales sin escapar o cuantificadores incorrectos. Usa la característica de validación de sintaxis.',
            prevention: 'Usa linters regex y prueba patrones a fondo antes del despliegue.'
        },
        {
            error: 'Problemas de Rendimiento',
            cause: 'Patrones regex complejos causando desaceleración del navegador con entradas de texto grandes',
            solution: 'Optimiza patrones regex y considera dividir patrones complejos en componentes más simples.',
            prevention: 'Prueba rendimiento de regex con conjuntos de datos grandes y evita retroceso catastrófico.'
        },
        {
            error: 'Falla en Carga de Archivo',
            cause: 'Formato de archivo inválido o archivo de prueba corrupto',
            solution: 'Asegura que el archivo sea un archivo de texto válido con codificación apropiada. Intenta abrir el archivo en un editor de texto primero.',
            prevention: 'Valida archivos de prueba antes de subir y asegura extensiones de archivo apropiadas.'
        },
        {
            error: 'Acceso al Portapapeles Denegado',
            cause: 'Restricciones de seguridad del navegador previniendo acceso al portapapeles',
            solution: 'Usa copiar-pegar manual o intenta un navegador diferente. Asegura conexión HTTPS para acceso al portapapeles.',
            prevention: 'Usa navegadores modernos y asegura contexto de seguridad apropiado para operaciones del portapapeles.'
        },
        {
            error: 'Problemas de Gestión de Historial',
            cause: 'Limitaciones de almacenamiento del navegador o datos de historial corruptos',
            solution: 'Limpia almacenamiento y cookies del navegador, luego refresca la página para resetear la funcionalidad de historial.',
            prevention: 'Exporta regularmente patrones de prueba importantes y resultados como respaldo.'
        },
        {
            error: 'Problemas de Codificación',
            cause: 'Archivos de texto con codificación de caracteres inválida causando fallos de regex',
            solution: 'Asegura que los archivos de prueba se guarden con codificación UTF-8. Usa un editor de texto para verificar la codificación del archivo.',
            prevention: 'Siempre guarda archivos de prueba con codificación UTF-8 para evitar problemas de caracteres.'
        }
    ],
    'regexTester.alternatives': [
        {
            name: 'Herramientas Regex de IDE',
            useCase: 'Pruebas regex incorporadas en editores de código como VS Code, WebStorm',
            pros: 'Integrado con flujo de trabajo de desarrollo, Características avanzadas, Sin dependencia de internet',
            cons: 'Requiere instalación de IDE, Curva de aprendizaje para características avanzadas',
            comparison: 'Nuestra herramienta ofrece pruebas instantáneas sin requisitos de instalación.'
        },
        {
            name: 'Probadores Regex Online',
            useCase: 'Servicios de pruebas y validación regex basados en la nube',
            pros: 'Acceso multiplataforma, Validación avanzada, Características de colaboración',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Costos de suscripción',
            comparison: 'Nuestra herramienta procesa localmente para completa privacidad y sin costo.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas de desarrollador para pruebas regex vía terminal',
            pros: 'Programable, Procesamiento rápido, Integración con flujos de trabajo',
            cons: 'Configuración técnica requerida, Sin GUI, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona interfaz amigable sin configuración técnica.'
        },
        {
            name: 'Librerías Regex',
            useCase: 'Librerías de programación para coincidencia de patrones regex',
            pros: 'Características avanzadas, Optimizado para rendimiento, Integración con código',
            cons: 'Conocimiento de programación requerido, Complejidad de implementación',
            comparison: 'Nuestra herramienta ofrece pruebas instantáneas sin requisitos de programación.'
        }
    ],
    'regexTester.relatedTools': [
        {
            name: 'Validador Regex',
            description: 'Valida sintaxis y estructura regex',
            url: '/regex-validator'
        },
        {
            name: 'Constructor Regex',
            description: 'Herramienta visual de construcción de patrones regex',
            url: '/regex-builder'
        },
        {
            name: 'String a Regex',
            description: 'Convierte cadenas a patrones regex',
            url: '/string-to-regex'
        },
        {
            name: 'Regex a String',
            description: 'Convierte patrones regex a cadenas legibles',
            url: '/regex-to-string'
        },
        {
            name: 'Depurador Regex',
            description: 'Depura y optimiza patrones regex',
            url: '/regex-debugger'
        },
        {
            name: 'Biblioteca de Patrones',
            description: 'Colección de patrones regex comunes',
            url: '/regex-patterns'
        },
        {
            name: 'Analizador de Texto',
            description: 'Analiza patrones y estructura de texto',
            url: '/text-analyzer'
        },
        {
            name: 'Herramientas de Cadena',
            description: 'Varias herramientas de manipulación de cadenas',
            url: '/string-tools'
        },
        {
            name: 'Regex Pretty Print',
            description: 'Formatea y muestra patrones regex con formateo apropiado',
            url: '/regex-pretty-print'
        }
    ],
    'regexTester.faqs': [
        {
            question: '¿Qué sintaxis regex es compatible?',
            answer: 'El probador soporta sintaxis RegExp JavaScript estándar incluyendo clases de caracteres, cuantificadores, grupos y flags (g, i, m).'
        },
        {
            question: '¿Puedo probar patrones regex complejos?',
            answer: '¡Sí! La herramienta maneja patrones complejos incluyendo lookaheads, retroreferencias y declaraciones condicionales.'
        },
        {
            question: '¿Cómo funciona el resaltado de coincidencias?',
            answer: 'Las coincidencias se resaltan con diferentes colores para fácil identificación, y los grupos capturados se extraen separadamente.'
        },
        {
            question: '¿Están seguros mis datos de prueba?',
            answer: 'Todas las pruebas regex ocurren directamente en tu navegador. Tus datos de prueba y patrones nunca se suben a nuestros servidores.'
        },
        {
            question: '¿Puedo guardar patrones de prueba?',
            answer: '¡Sí! Puedes guardar patrones regex y resultados de pruebas en el historial para referencia futura y documentación.'
        },
        {
            question: '¿Qué son los grupos de captura?',
            answer: 'Los grupos de captura son partes de patrones regex encerrados en paréntesis que extraen porciones específicas de coincidencias para procesamiento.'
        },
        {
            question: '¿Puedo probar múltiples patrones?',
            answer: '¡Sí! Puedes probar diferentes patrones regex contra el mismo texto para comparar resultados y elegir el mejor patrón.'
        },
        {
            question: '¿Soporta Unicode?',
            answer: '¡Sí! La herramienta soporta caracteres Unicode y patrones para procesamiento de texto internacional y validación.'
        },
        {
            question: '¿Puedo exportar resultados de prueba?',
            answer: '¡Sí! Puedes copiar resultados de coincidencias, descargar datos de prueba o exportar historial para documentación y compartir.'
        }
    ],
    'regexTester.securityNote': 'Todas las pruebas regex ocurren localmente en tu navegador usando el motor RegExp JavaScript. No se almacenan datos en nuestros servidores, asegurando completa privacidad y seguridad.',
    'regexTester.additionalContent': 'Las pruebas regex son esenciales para validación de formularios, procesamiento de datos, análisis de logs y coincidencia de patrones. Combina nuestro probador con otras herramientas como constructores regex, validadores y manipulación de cadenas para flujos de trabajo comprehensivos de procesamiento de texto y validación.'
};
