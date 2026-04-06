export default {
    'jsonFormatter.title': 'Formateador y Validador JSON Online Gratuito',
    'jsonFormatter.description': 'Usa este formateador JSON gratuito para embellecer, validar y minificar tus datos JSON instantáneamente. Perfecto para desarrolladores que trabajan con APIs y depuran respuestas JSON.',
    'jsonFormatter.load_file': 'Cargar archivo:',
    'jsonFormatter.indent': 'Sangría:',
    'jsonFormatter.two_spaces': '2 espacios',
    'jsonFormatter.four_spaces': '4 espacios',
    'jsonFormatter.none': 'Ninguno',
    'jsonFormatter.auto_format': 'Auto-formato',
    'jsonFormatter.input_json': 'Entrada JSON',
    'jsonFormatter.result': 'Resultado',
    'jsonFormatter.format': 'Formato',
    'jsonFormatter.minify': 'Minificar',
    'jsonFormatter.copy': 'Copiar',
    'jsonFormatter.download': 'Descargar',
    'jsonFormatter.clear': 'Limpiar',
    
    // SEO Content specific to JSON formatter
    'jsonFormatter.mainDescription': 'Formateador JSON online gratuito con validación, embellecimiento, minificación y formateo en tiempo real. Perfecto para desarrolladores que trabajan con APIs y depuran JSON.',
    'jsonFormatter.extendedDescription': 'Nuestra herramienta comprehensiva de formateo JSON te ayuda a formatear, validar y minificar datos JSON con características avanzadas. Incluye validación en tiempo real, resaltado de sintaxis, auto-formateo, control de sangría y procesamiento local seguro. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'jsonFormatter.features': [
        {
            title: 'Validación en Tiempo Real',
            description: 'Valida sintaxis JSON instantáneamente con resaltado de errores y números de línea'
        },
        {
            title: 'Embellamiento JSON',
            description: 'Formatea JSON con sangría y estructura apropiadas para mejor legibilidad'
        },
        {
            title: 'Minificación JSON',
            description: 'Remueve espacios en blanco innecesarios para reducir el tamaño de archivo JSON para producción'
        },
        {
            title: 'Detección de Auto-formato',
            description: 'Formatea automáticamente JSON mientras escribes con configuraciones de sangría personalizables'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos JSON directamente desde tu dispositivo para procesamiento rápido'
        },
        {
            title: 'Resaltado de Sintaxis',
            description: 'Resaltado de sintaxis codificado por colores para fácil visualización de estructura JSON'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia JSON formateado al portapapeles con un clic para fácil compartir'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga JSON formateado o minificado con extensiones de archivo apropiadas'
        },
        {
            title: 'Control de Sangría',
            description: 'Elige entre 2 espacios, 4 espacios o sin sangría'
        },
        {
            title: 'Detección de Errores',
            description: 'Reporte comprehensivo de errores con números de línea y mensajes detallados'
        }
    ],
    'jsonFormatter.steps': [
        'Pega o carga tu JSON en el editor de entrada',
        'Elige tu estilo de sangría preferido (2 espacios, 4 espacios o ninguno)',
        'Habilita auto-formato para formatear JSON mientras escribes',
        'Haz clic en "Formato" para embellecer tu JSON con sangría apropiada',
        'Haz clic en "Minificar" para remover espacios en blanco innecesarios y reducir el tamaño de archivo',
        'Copia el resultado al portapapeles o descarga como archivo JSON',
        'Usa el JSON formateado en tus aplicaciones o desarrollo de APIs'
    ],
    'jsonFormatter.examples': [
        {
            title: 'Formateo de Respuesta API',
            description: 'Formatea una respuesta API desordenada para hacerla legible',
            code: 'Entrada: {"user":{"id":123,"name":"John","email":"john@example.com","address":{"street":"123 Main St","city":"New York","zip":"10001"}}}',
            result: 'JSON formateado con sangría y estructura apropiadas'
        },
        {
            title: 'Minificación para Producción',
            description: 'Remueve espacios innecesarios para reducir el tamaño de archivo',
            code: 'Entrada: {"name":"My App","version":"1.0.0","dependencies":{"vue":"^3.0.0","axios":"^0.24.0"}}',
            result: '{"name":"My App","version":"1.0.0","dependencies":{"vue":"^3.0.0","axios":"^0.24.0"}}',
            steps: [
                'Pega tu JSON formateado',
                'Establece sangría en "Ninguno"',
                'Haz clic en botón "Minificar"',
                'Copia resultado compacto para uso en producción'
            ]
        },
        {
            title: 'Depuración de Sintaxis JSON',
            description: 'Identifica y corrige errores de sintaxis JSON',
            code: 'Entrada: {"users":[{"name":"Alice","age":30},{"name":"Bob","age":25}',
            result: 'Error detectado: Falta corchete de cierre, resaltado de errores apropiado mostrado'
        }
    ],
    'jsonFormatter.useCases': [
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores formateando respuestas API y depurando datos JSON',
            example: 'Desarrollador backend formateando respuestas API para consumo frontend'
        },
        {
            title: 'Desarrollo Frontend',
            description: 'Desarrolladores frontend procesando respuestas API y archivos de configuración',
            example: 'Desarrollador React formateando archivos de configuración JSON para configuraciones de aplicación'
        },
        {
            title: 'Análisis de Datos',
            description: 'Analistas de datos formateando y validando conjuntos de datos JSON para análisis',
            example: 'Científico de datos formateando datos JSON de APIs para análisis de datos'
        },
        {
            title: 'Gestión de Configuración',
            description: 'Ingenieros DevOps gestionando archivos de configuración y configuraciones de despliegue',
            example: 'Ingeniero DevOps formateando archivos de configuración JSON para despliegue en la nube'
        },
        {
            title: 'Desarrollo de Apps Móviles',
            description: 'Desarrolladores móviles manejando datos JSON de APIs y almacenamiento local',
            example: 'Desarrollador React Native formateando respuestas JSON de APIs backend'
        },
        {
            title: 'Documentación',
            description: 'Escritores técnicos formateando ejemplos JSON para documentación',
            example: 'Escritor técnico formateando ejemplos de respuesta API para documentación de desarrolladores'
        }
    ],
    'jsonFormatter.technicalDetails': 'Nuestro formateador JSON usa algoritmos avanzados de análisis y formateo JavaScript para validar y embellecer datos JSON. La herramienta proporciona validación de sintaxis en tiempo real, detección de errores, control de sangría y capacidades de minificación. Todo el procesamiento ocurre localmente usando JavaScript moderno y APIs JSON.',
    'jsonFormatter.bestPractices': [
        {
            title: 'Validación JSON',
            tip: 'Siempre valida JSON antes de usarlo en producción. La herramienta proporciona validación en tiempo real para detectar errores de sintaxis temprano.'
        },
        {
            title: 'Consistencia de Sangría',
            tip: 'Usa sangría consistente (2 o 4 espacios) a través de tu proyecto para mejor legibilidad de código.'
        },
        {
            title: 'Minificación para Producción',
            tip: 'Minifica archivos JSON para producción para reducir el tamaño de archivo y mejorar tiempos de carga.'
        },
        {
            title: 'Verificación de Errores',
            tip: 'Presta atención a mensajes de error y corrige problemas de sintaxis antes de usar JSON en aplicaciones.'
        }
    ],
    'jsonFormatter.commonErrors': [
        {
            error: 'Sintaxis JSON Inválida',
            cause: 'Comas faltantes, corchetes incorrectos o comas finales en estructura JSON',
            solution: 'Verifica comas faltantes, corchetes no coincidentes o comas finales. Usa la característica de validación para identificar problemas específicos.',
            prevention: 'Usa un linter JSON en tu IDE y valida JSON antes de confirmar en código.'
        },
        {
            error: 'Falla en Carga de Archivo',
            cause: 'Formato de archivo inválido o archivo JSON corrupto',
            solution: 'Asegura que el archivo sea un archivo JSON válido con sintaxis apropiada. Intenta abrir el archivo en un editor de texto primero.',
            prevention: 'Valida archivos JSON antes de subir y asegura extensiones de archivo apropiadas (.json).'
        },
        {
            error: 'Procesamiento de JSON Grande',
            cause: 'Archivos JSON muy grandes causando problemas de rendimiento del navegador',
            solution: 'Usa archivos JSON más pequeños o procesa en fragmentos. Considera usar un navegador más potente o herramienta de escritorio.',
            prevention: 'Divide archivos JSON grandes en fragmentos más pequeños manejables para mejor rendimiento.'
        },
        {
            error: 'Acceso al Portapapeles Denegado',
            cause: 'Restricciones de seguridad del navegador previniendo acceso al portapapeles',
            solution: 'Usa copiar-pegar manual o intenta un navegador diferente. Asegura conexión HTTPS para acceso al portapapeles.',
            prevention: 'Usa navegadores modernos y asegura contexto de seguridad apropiado para operaciones del portapapeles.'
        },
        {
            error: 'Falla en Descarga',
            cause: 'Problemas de descarga del navegador o espacio insuficiente en disco',
            solution: 'Verifica la configuración de descarga del navegador y asegura espacio de almacenamiento adecuado.',
            prevention: 'Limpia la caché del navegador y verifica los permisos de descarga.'
        },
        {
            error: 'Problemas de Codificación',
            cause: 'Archivo JSON contiene codificación de caracteres inválida',
            solution: 'Asegura que los archivos JSON se guarden con codificación UTF-8. Usa un editor de texto para verificar la codificación del archivo.',
            prevention: 'Siempre guarda archivos JSON con codificación UTF-8 para evitar problemas de caracteres.'
        }
    ],
    'jsonFormatter.alternatives': [
        {
            name: 'Formateadores JSON de IDE',
            useCase: 'Formateo JSON incorporado en editores de código como VS Code, WebStorm',
            pros: 'Integrado con flujo de trabajo de desarrollo, Características avanzadas, Sin dependencia de internet',
            cons: 'Requiere instalación de IDE, Curva de aprendizaje para características avanzadas',
            comparison: 'Nuestra herramienta ofrece formateo instantáneo sin requisitos de instalación.'
        },
        {
            name: 'Validadores JSON Online',
            useCase: 'Servicios de validación y formateo JSON basados en la nube',
            pros: 'Acceso multiplataforma, Validación avanzada, Características de colaboración',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Costos de suscripción',
            comparison: 'Nuestra herramienta procesa localmente para completa privacidad y sin costo.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas de desarrollador para formateo JSON vía terminal',
            pros: 'Programable, Procesamiento rápido, Integración con flujos de trabajo',
            cons: 'Configuración técnica requerida, Sin GUI, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona interfaz amigable sin configuración técnica.'
        },
        {
            name: 'Extensiones de Navegador',
            useCase: 'Complementos del navegador para formateo y validación JSON',
            pros: 'Acceso rápido desde cualquier página web, Integración con navegador, Opciones de menú contextual',
            cons: 'Específico del navegador, Funcionalidad limitada, Preocupaciones de privacidad con algunas extensiones',
            comparison: 'Nuestra herramienta funciona independientemente y protege tu privacidad.'
        }
    ],
    'jsonFormatter.relatedTools': [
        {
            name: 'Validador JSON',
            description: 'Valida sintaxis y estructura JSON',
            url: '/json-validator'
        },
        {
            name: 'Minificador JSON',
            description: 'Minifica archivos JSON para reducir tamaño',
            url: '/json-minifier'
        },
        {
            name: 'XML a JSON',
            description: 'Convierte datos XML a formato JSON',
            url: '/xml-to-json'
        },
        {
            name: 'CSV a JSON',
            description: 'Convierte datos CSV a formato JSON',
            url: '/csv-to-json'
        },
        {
            name: 'YAML a JSON',
            description: 'Convierte archivos YAML a formato JSON',
            url: '/yaml-to-json'
        },
        {
            name: 'JSON a XML',
            description: 'Convierte datos JSON a formato XML',
            url: '/json-to-xml'
        },
        {
            name: 'JSON Pretty Print',
            description: 'Formatea e imprime JSON con formateo apropiado',
            url: '/json-pretty-print'
        }
    ],
    'jsonFormatter.faqs': [
        {
            question: '¿Qué es JSON?',
            answer: 'JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero usado por APIs y aplicaciones web. Es fácil para que los humanos lean y escriban y para que las máquinas analicen y generen.'
        },
        {
            question: '¿Por qué debería formatear JSON?',
            answer: 'Formatear JSON lo hace más fácil de leer, depurar y mantener. La sangría apropiada ayuda a identificar problemas de estructura y mejora la legibilidad del código.'
        },
        {
            question: '¿Qué es la minificación JSON?',
            answer: 'La minificación remueve espacios en blanco innecesarios (espacios, tabs, nuevas líneas) de JSON para reducir el tamaño de archivo. Esto mejora los tiempos de carga en entornos de producción.'
        },
        {
            question: '¿Puedo cargar archivos JSON?',
            answer: '¡Sí! Puedes cargar archivos .json directamente usando la entrada de archivo. La herramienta analizará y formateará el contenido del archivo automáticamente.'
        },
        {
            question: '¿Cómo funciona el auto-formato?',
            answer: 'El auto-formato formatea automáticamente tu JSON mientras escribes, asegurando sangría y estructura apropiadas. Puedes activar/desactivar esta característica.'
        },
        {
            question: '¿Qué opciones de sangría están disponibles?',
            answer: 'Puedes elegir entre 2 espacios, 4 espacios o sin sangría. 2 espacios es el estándar más común para formateo JSON.'
        },
        {
            question: '¿Están seguros mis datos?',
            answer: 'Todo el formateo JSON ocurre directamente en tu navegador. Tus datos JSON nunca se suben a nuestros servidores, asegurando completa privacidad y seguridad.'
        },
        {
            question: '¿Puedo formatear archivos JSON grandes?',
            answer: 'Aunque no hay un límite estricto, archivos JSON muy grandes pueden causar problemas de rendimiento del navegador. Para archivos grandes, considera usar herramientas de escritorio o procesar en fragmentos.'
        },
        {
            question: '¿Qué errores puede detectar el formateador?',
            answer: 'El formateador puede detectar errores de sintaxis incluyendo comas faltantes, corchetes no coincidentes, comas finales, caracteres inválidos y problemas estructurales.'
        },
        {
            question: '¿Puedo usar esto para desarrollo de API?',
            answer: '¡Absolutamente! Esta herramienta es perfecta para formatear respuestas API, depurar datos JSON y preparar archivos de configuración para desarrollo.'
        }
    ],
    'jsonFormatter.securityNote': 'Todo el formateo JSON ocurre localmente en tu navegador usando JavaScript. No se almacenan datos en nuestros servidores, asegurando completa privacidad y seguridad.',
    'jsonFormatter.additionalContent': 'El formateo JSON es esencial para desarrollo de API, gestión de configuración e intercambio de datos. Combina nuestro formateador con otras herramientas como validación, conversión y minificación para procesamiento comprehensivo de datos.'
};
