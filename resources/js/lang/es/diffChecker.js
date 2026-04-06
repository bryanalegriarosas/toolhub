export default {
    'diffChecker.title': 'Verificador de Diferencias',
    'diffChecker.text_1_original': 'Texto 1 (Original)',
    'diffChecker.text_2_modified': 'Texto 2 (Modificado)',
    'diffChecker.load_file': 'Cargar Archivo',
    'diffChecker.clear': 'Limpiar',
    'diffChecker.compare_texts': 'Comparar Textos',
    'diffChecker.swap_texts': 'Intercambiar Textos',
    'diffChecker.copy_differences': 'Copiar Diferencias',
    'diffChecker.download_diff': 'Descargar Diff',
    'diffChecker.clear_all': 'Limpiar Todo',
    'diffChecker.lines_added': 'Líneas Agregadas',
    'diffChecker.lines_removed': 'Líneas Eliminadas',
    'diffChecker.lines_modified': 'Líneas Modificadas',
    'diffChecker.lines_unchanged': 'Líneas Sin Cambios',
    'diffChecker.differences': 'Diferencias',
    'diffChecker.side_by_side_view': 'Vista Lado a Lado',
    'diffChecker.hide': 'Ocultar',
    'diffChecker.show': 'Mostrar',
    'diffChecker.paste_or_type_your_first_text_here': 'Pega o escribe tu primer texto aquí...',
    'diffChecker.paste_or_type_your_second_text_here': 'Pega o escribe tu segundo texto aquí...',
    
    // SEO Content specific to Diff Checker
    'diffChecker.mainDescription': 'Herramienta de verificación de diferencias online gratuita con comparación de texto, resaltado y estadísticas. Perfecta para revisión de código, seguimiento de documentos y análisis de cambios.',
    'diffChecker.extendedDescription': 'Nuestra herramienta comprehensiva de verificador de diferencias te ayuda a comparar dos textos y encontrar diferencias instantáneamente. Incluye comparación línea por línea, vista lado a lado, estadísticas de cambios, resaltado de diferencias y opciones de exportación. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'diffChecker.features': [
        {
            title: 'Comparación Lado a Lado',
            description: 'Ver textos lado a lado con desplazamiento sincronizado para fácil comparación'
        },
        {
            title: 'Análisis Línea por Línea',
            description: 'Comparación detallada línea por línea con claro resaltado de diferencias'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Cargar archivos de texto directamente para rápida comparación y análisis'
        },
        {
            title: 'Estadísticas de Cambios',
            description: 'Ver estadísticas detalladas incluyendo líneas agregadas, eliminadas, modificadas y sin cambios'
        },
        {
            title: 'Diferencias Codificadas por Color',
            description: 'Resaltado visual con verde para adiciones, rojo para eliminaciones, amarillo para modificaciones'
        },
        {
            title: 'Copiar y Exportar',
            description: 'Copiar diferencias al portapapeles o descargar como archivos diff'
        },
        {
            title: 'Intercambio de Textos',
            description: 'Intercambiar rápidamente posiciones de texto para cambiar perspectiva de comparación'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Diseño responsivo optimizado para comparación de texto móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la comparación de texto ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'diffChecker.steps': [
        'Pega o carga tu primer texto en el panel izquierdo',
        'Pega o carga tu segundo texto en el panel derecho',
        'Haz clic en "Comparar Textos" para analizar diferencias',
        'Ve cambios resaltados y estadísticas en la sección de resultados',
        'Usa vista lado a lado para comparación detallada',
        'Copia o descarga los resultados diff para documentación'
    ],
    'diffChecker.examples': [
        {
            title: 'Comparación de Revisión de Código',
            description: 'Comparar diferentes versiones de código para revisión',
            code: 'Texto 1: function calculateTotal(price, tax) { return price * (1 + tax); } | Texto 2: function calculateTotal(price, tax) { return price * (1 + tax) * 1.1; }',
            result: 'Resaltados: Agregado "* 1.1" para cálculo de tarifa de servicio - Línea verde muestra adición, Rojo muestra eliminación'
        },
        {
            title: 'Seguimiento de Revisión de Documentos',
            description: 'Rastrear cambios en revisiones de documentos',
            code: 'Texto 1: The quick brown fox jumps over the lazy dog. | Texto 2: The quick brown fox jumps over the sleeping dog.',
            result: 'Cambios: "lazy" → "sleeping" - mejor elección de palabra - Línea amarilla muestra modificación',
            steps: [
                'Pega documento original en panel izquierdo',
                'Agrega versión revisada en panel derecho',
                'Revisa diferencias resaltadas',
                'Acepta o rechaza cambios según sea necesario'
            ]
        },
        {
            title: 'Cambios de Archivos de Configuración',
            description: 'Comparar modificaciones de archivos de configuración',
            code: 'Texto 1: timeout: 30 | retries: 3 | debug: false | Texto 2: timeout: 60 | retries: 5 | debug: true',
            result: 'Modificado: timeout 30→60, retries 3→5, debug false→true - Múltiples cambios resaltados con diferentes colores'
        }
    ],
    'diffChecker.useCases': [
        {
            title: 'Revisión de Código',
            description: 'Desarrolladores comparando cambios de código para revisión y aprobación',
            example: 'Desarrollador senior revisando cambios de código de desarrollador junior antes de fusión'
        },
        {
            title: 'Colaboración de Documentos',
            description: 'Equipos colaborando en documentos con seguimiento de cambios',
            example: 'Equipo de contenido comparando revisiones de documentos para actualizaciones de publicaciones de blog'
        },
        {
            title: 'Control de Versiones',
            description: 'Rastreando cambios entre diferentes versiones de archivos o configuraciones',
            example: 'Ingeniero DevOps comparando cambios de configuración entre entornos'
        },
        {
            title: 'Revisión de Documentos Legales',
            description: 'Abogados revisando modificaciones y enmiendas de contratos',
            example: 'Equipo legal comparando diferentes versiones de documentos legales'
        },
        {
            title: 'Edición de Documentos Académicos',
            description: 'Estudiantes y profesores rastreando cambios en documentos académicos',
            example: 'Equipo de investigación comparando revisiones de tesis y correcciones'
        },
        {
            title: 'Comparación de Traducción',
            description: 'Traductores comparando texto original y traducido',
            example: 'Equipo de traducción comparando texto fuente con versiones traducidas'
        }
    ],
    'diffChecker.technicalDetails': 'Nuestro verificador de diferencias usa JavaScript para comparar textos línea por línea e identificar diferencias. La herramienta procesa algoritmos de comparación de texto, lógica de detección de cambios y resaltado visual. Todo el procesamiento ocurre localmente usando algoritmos eficientes de comparación de cadenas y generación de diff para rendimiento óptimo.',
    'diffChecker.bestPractices': [
        {
            title: 'Organización Clara de Textos',
            tip: 'Organiza tus textos con estructura clara y formato consistente para comparación precisa.'
        },
        {
            title: 'Cambios Incrementales',
            tip: 'Haz cambios pequeños y enfocados para entender y revisar diferencias fácilmente.'
        },
        {
            title: 'Conciencia del Contexto',
            tip: 'Considera el contexto y propósito de los cambios al revisar diferencias.'
        },
        {
            title: 'Comparación Regular',
            tip: 'Compara textos regularmente para detectar cambios temprano y mantener control de versiones.'
        }
    ],
    'diffChecker.commonErrors': [
        {
            error: 'Alineación Incorrecta de Textos',
            cause: 'Textos no alineados correctamente causando comparación incorrecta de líneas',
            solution: 'Asegura que los textos estén formateados y alineados correctamente para comparación precisa.',
            prevention: 'Usa finales de línea y formato consistentes en ambos textos.'
        },
        {
            error: 'Problemas de Rendimiento con Archivos Grandes',
            cause: 'Archivos de texto muy grandes causando problemas de rendimiento durante la comparación',
            solution: 'Divide textos grandes en secciones más pequeñas para comparación.',
            prevention: 'Prueba con tamaños de texto más pequeños y optimiza para archivos grandes.'
        },
        {
            error: 'Problemas de Codificación',
            cause: 'Diferentes codificaciones de texto causando problemas de comparación',
            solution: 'Asegura que ambos textos usen la misma codificación (UTF-8 recomendado).',
            prevention: 'Estandariza la codificación de texto antes de la comparación.'
        },
        {
            error: 'Faltan Saltos de Línea',
            cause: 'Finales de línea inconsistentes afectando precisión de comparación',
            solution: 'Usa finales de línea consistentes (LF o CRLF) en ambos textos.',
            prevention: 'Normaliza finales de línea antes de la comparación de texto.'
        }
    ],
    'diffChecker.alternatives': [
        {
            name: 'Herramientas Diff de Línea de Comandos',
            useCase: 'Git diff, comando diff y otras herramientas de comparación CLI',
            pros: 'Características potentes, Programable, Integración con control de versiones',
            cons: 'Conocimiento técnico requerido, Sin GUI, Configuración compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Características Diff de IDE',
            useCase: 'VS Code, Sublime Text y otras capacidades diff de editor',
            pros: 'Integración con editor, Características avanzadas, Integración de flujo de trabajo',
            cons: 'Específico de IDE, Curva de aprendizaje, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece comparación de texto enfocada sin dependencias de IDE.'
        },
        {
            name: 'Servicios Diff Online',
            useCase: 'Servicios de comparación de texto basados en web',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        },
        {
            name: 'Sistemas de Control de Versiones',
            useCase: 'Git, SVN y otras capacidades diff de control de versiones',
            pros: 'Control de versiones completo, Seguimiento de historial, Características de colaboración',
            cons: 'Configuración compleja, Excesivo para comparaciones simples, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona comparación de texto simple y enfocada sin complejidad de control de versiones.'
        }
    ],
    'diffChecker.relatedTools': [
        {
            name: 'Comparador de Texto',
            description: 'Compara archivos de texto con análisis detallado',
            url: '/text-compare'
        },
        {
            name: 'Fusionador de Código',
            description: 'Fusiona cambios de código inteligentemente',
            url: '/code-merger'
        },
        {
            name: 'Verificador de Diferencias de Archivos',
            description: 'Encuentra diferencias entre archivos',
            url: '/file-difference-checker'
        },
        {
            name: 'Analizador de Texto',
            description: 'Analiza contenido y estructura de texto',
            url: '/text-analyzer'
        },
        {
            name: 'Ayudante de Control de Versiones',
            description: 'Asiste con operaciones de control de versiones',
            url: '/version-control-helper'
        },
        {
            name: 'Fusionador de Documentos',
            description: 'Combina múltiples documentos',
            url: '/document-merger'
        },
        {
            name: 'Rastreador de Cambios',
            description: 'Rastrea y gestiona cambios de documentos',
            url: '/change-tracker'
        },
        {
            name: 'Formateador de Texto',
            description: 'Formatea y embellece contenido de texto',
            url: '/text-formatter'
        }
    ],
    'diffChecker.faqs': [
        {
            question: '¿Qué formatos de texto son compatibles?',
            answer: 'Nuestra herramienta soporta archivos de texto plano (.txt) y cualquier contenido de texto que pegues directamente. Se recomienda codificación UTF-8 para mejor compatibilidad.'
        },
        {
            question: '¿Cómo se detectan las diferencias?',
            answer: 'La herramienta compara textos línea por línea e identifica adiciones (verde), eliminaciones (rojo) y modificaciones (amarillo) con numeración de línea precisa.'
        },
        {
            question: '¿Puedo comparar textos grandes?',
            answer: 'Sí, nuestra herramienta puede manejar textos grandes, pero archivos muy grandes pueden tardar más en procesarse. Para rendimiento óptimo, considera dividir textos grandes.'
        },
        {
            question: '¿Qué es la vista lado a lado?',
            answer: 'La vista lado a lado muestra ambos textos simultáneamente con desplazamiento sincronizado, facilitando comparar líneas correspondientes y cambios.'
        },
        {
            question: '¿Qué tan precisa es la comparación?',
            answer: 'Nuestro verificador de diferencias es altamente preciso para comparación de texto. Usa análisis línea por línea preciso para asegurar que todas las diferencias se identifiquen correctamente.'
        },
        {
            question: '¿Puedo exportar los resultados?',
            answer: 'Sí, puedes copiar diferencias al portapapeles o descargarlas como un archivo diff formateado para documentación y compartir.'
        },
        {
            question: '¿Es privado mi dato de texto?',
            answer: 'Toda la comparación de texto ocurre directamente en tu navegador. Tu contenido de texto y resultados de comparación nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué significan los colores?',
            answer: 'Verde indica líneas agregadas, rojo muestra líneas eliminadas, amarillo resalta líneas modificadas, y gris representa contenido sin cambios.'
        }
    ],
    'diffChecker.securityNote': 'Toda la comparación de texto ocurre localmente en tu navegador usando JavaScript. Ningún contenido de texto o resultados de comparación se almacenan en nuestros servidores, asegurando completa privacidad y seguridad.',
    'diffChecker.additionalContent': 'La comparación de texto es esencial para revisión de código, colaboración de documentos, control de versiones y gestión de cambios. Combina nuestro verificador de diferencias con otras herramientas como fusionadores de código, analizadores de texto y ayudantes de control de versiones para flujos de trabajo comprehensivos de desarrollo.'
};
