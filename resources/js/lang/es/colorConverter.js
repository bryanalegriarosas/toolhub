export default {
    'colorConverter.title': 'Convertidor de Color - Herramienta HEX a RGB/HSL',
    'colorConverter.description': 'Convierte colores entre formatos HEX, RGB y HSL instantáneamente con vista previa visual.',
    'colorConverter.hex': 'HEX',
    'colorConverter.rgb': 'RGB',
    'colorConverter.hsl': 'HSL',
    'colorConverter.random_color': 'Color Aleatorio',
    'colorConverter.clear': 'Limpiar',
    'colorConverter.save_to_history': 'Guardar en Historial',
    'colorConverter.recent_colors': 'Colores Recientes',
    'colorConverter.clear_history': 'Limpiar historial',
    'colorConverter.invalid_hex_format': 'Formato HEX inválido',
    'colorConverter.placeholder_hex': '#000000',
    
    // SEO Content specific to Color Converter
    'colorConverter.mainDescription': 'Herramienta de conversión de color online gratuita para conversión HEX a RGB/HSL con vista previa visual. Perfecta para diseñadores web y desarrolladores.',
    'colorConverter.extendedDescription': 'Nuestra herramienta comprehensiva de conversión de color te ayuda a convertir colores entre formatos HEX, RGB y HSL instantáneamente. Incluye vista previa visual en tiempo real, funcionalidad de copia, historial de colores y generación de colores aleatorios. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'colorConverter.features': [
        {
            title: 'Soporte de Múltiples Formatos',
            description: 'Convierte entre formatos de color HEX, RGB y HSL sin problemas'
        },
        {
            title: 'Vista Previa Visual de Color',
            description: 'Ve vista previa de color en tiempo real mientras escribes o conviertes'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para todos los formatos de color'
        },
        {
            title: 'Historial de Colores',
            description: 'Guarda y gestiona tus conversiones de color recientes localmente'
        },
        {
            title: 'Generador de Colores Aleatorios',
            description: 'Genera colores aleatorios para inspiración y pruebas'
        },
        {
            title: 'Validación de Formato',
            description: 'Validación en tiempo real del formato de color HEX con mensajes de error'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Diseño responsivo optimizado para uso móvil y de escritorio'
        },
        {
            title: 'Privacidad Primero',
            description: 'Toda la conversión ocurre localmente en tu navegador sin almacenamiento en servidor'
        }
    ],
    'colorConverter.steps': [
        'Ingresa un código de color en formato HEX (ej., #ff5733)',
        'Ve vista previa automática y conversiones a RGB y HSL',
        'Copia el formato que necesitas o guarda el color en tu historial local',
        'Usa el generador de colores aleatorios para inspiración'
    ],
    'colorConverter.examples': [
        {
            title: 'Convertir Color de Marca',
            description: 'Convierte color de marca de HEX a RGB y HSL para desarrollo web',
            code: 'Entrada HEX: #3498db',
            result: 'RGB: rgb(52, 152, 219) | HSL: hsl(204, 70%, 53%)'
        },
        {
            title: 'Colores Material Design',
            description: 'Convierte paleta de colores Material Design',
            code: 'Entrada HEX: #f44336',
            result: 'RGB: rgb(244, 67, 54) | HSL: hsl(4, 90%, 58%)',
            steps: [
                'Ingresa código de color HEX',
                'Ve RGB para opacidad CSS',
                'Usa HSL para variaciones de color',
                'Copia el formato deseado para tu proyecto'
            ]
        },
        {
            title: 'Propiedades CSS Personalizadas',
            description: 'Convierte colores para variables CSS',
            code: 'Entrada HEX: #2ecc71',
            result: 'RGB: rgb(46, 204, 113) | HSL: hsl(145, 63%, 49%)'
        }
    ],
    'colorConverter.useCases': [
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores convirtiendo colores para proyectos CSS y diseño web',
            example: 'Desarrollador frontend convirtiendo colores de marca para estilización de sitio web'
        },
        {
            title: 'Diseño Gráfico',
            description: 'Diseñadores trabajando con paletas de colores y guías de marca',
            example: 'Diseñador gráfico creando esquemas de color para proyectos de clientes'
        },
        {
            title: 'Diseño UI/UX',
            description: 'Diseñadores creando interfaces de usuario con sistemas de color consistentes',
            example: 'Diseñador UX convirtiendo colores de sistema de diseño para implementación'
        },
        {
            title: 'Gestión de Marca',
            description: 'Equipos de marketing gestionando consistencia de color de marca',
            example: 'Gerente de marca asegurando consistencia de color en materiales'
        },
        {
            title: 'Creación de Paletas de Color',
            description: 'Artistas y diseñadores creando armonías y paletas de color',
            example: 'Artista explorando combinaciones de color para arte digital'
        },
        {
            title: 'Desarrollo CSS',
            description: 'Desarrolladores trabajando con propiedades personalizadas CSS y temas',
            example: 'Desarrollador CSS creando variables de tema para modos oscuro/claro'
        }
    ],
    'colorConverter.technicalDetails': 'Nuestro convertidor de color usa algoritmos estándar de conversión de espacio de color. La conversión HEX a RGB analiza valores hexadecimales y los convierte a componentes RGB decimales. La conversión RGB a HSL usa fórmula estándar para transformar el espacio de color RGB a HSL (Tono, Saturación, Luminosidad) para manipulación de color más intuitiva. Todos los cálculos ocurren localmente usando JavaScript para rendimiento óptimo.',
    'colorConverter.bestPractices': [
        {
            title: 'Uso Consistente de Color',
            tip: 'Mantén formatos de color consistentes a lo largo de tu proyecto para mejor mantenibilidad.'
        },
        {
            title: 'Accesibilidad de Color',
            tip: 'Prueba relaciones de contraste de color para asegurar cumplimiento de accesibilidad en tus diseños.'
        },
        {
            title: 'Validación de Color',
            tip: 'Siempre valida códigos de color antes de usarlos en entornos de producción.'
        },
        {
            title: 'Selección de Formato',
            tip: 'Usa HEX para colores web, RGB para opacidad y HSL para manipulación de color.'
        }
    ],
    'colorConverter.commonErrors': [
        {
            error: 'Formato HEX Inválido',
            cause: 'La entrada contiene caracteres inválidos o formato HEX incorrecto',
            solution: 'Asegura que el código HEX comience con # y contenga 3 o 6 caracteres hexadecimales válidos.',
            prevention: 'Usa vista previa visual para validar colores antes de copiar.'
        },
        {
            error: 'Problemas de Rango de Color',
            cause: 'Valores RGB fuera del rango 0-255 o valores HSL fuera de rangos válidos',
            solution: 'Asegura que los valores RGB estén entre 0-255 y los valores HSL estén en rangos correctos.',
            prevention: 'Usa nuestro convertidor para validar rangos de color automáticamente.'
        },
        {
            error: 'Confusión de Formato',
            cause: 'Mezclando diferentes formatos de color sin conversión apropiada',
            solution: 'Siempre convierte colores al formato requerido antes de usarlos.',
            prevention: 'Usa nomenclatura de formato de color consistente y documentación.'
        },
        {
            error: 'Compatibilidad de Navegador',
            cause: 'Usando formatos de color no soportados por navegadores objetivo',
            solution: 'Prueba colores en navegadores objetivo y usa formatos de respaldo.',
            prevention: 'Usa formatos de color ampliamente soportados como HEX y RGB.'
        }
    ],
    'colorConverter.alternatives': [
        {
            name: 'Software Gráfico',
            useCase: 'Selectores de color de Adobe Photoshop, GIMP, Figma',
            pros: 'Características avanzadas, Herramientas profesionales, Integración con flujos de trabajo de diseño',
            cons: 'Licencias costosas, Interfaz compleja, Excesivo para conversión simple',
            comparison: 'Nuestra herramienta proporciona conversión instantánea sin instalación de software o costo.'
        },
        {
            name: 'Herramientas de Color Online',
            useCase: 'Herramientas de color de Coolors, Adobe Color, Paletton',
            pros: 'Generación de paleta de colores, Características avanzadas, Características comunitarias',
            cons: 'Dependencia de internet, Preocupaciones de privacidad, Opciones de conversión limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y conversión comprehensiva.'
        },
        {
            name: 'Extensiones de IDE',
            useCase: 'Extensiones de selector de color de VS Code, Sublime Text',
            pros: 'Integración IDE, Integración de flujo de trabajo, Acceso rápido',
            cons: 'Específico de IDE, Características limitadas, Complejidad de configuración',
            comparison: 'Nuestra herramienta proporciona conversión comprehensiva sin dependencias de entorno de desarrollo.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Scripts de conversión de color y utilidades de línea de comandos',
            pros: 'Programable, Opciones avanzadas, Integración con sistema',
            cons: 'Conocimiento técnico requerido, Sin GUI, Configuración compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        }
    ],
    'colorConverter.relatedTools': [
        {
            name: 'Generador de Paleta de Colores',
            description: 'Genera paletas de colores y esquemas de color',
            url: '/color-palette-generator'
        },
        {
            name: 'Selector de Color',
            description: 'Selecciona colores de imágenes y sitios web',
            url: '/color-picker'
        },
        {
            name: 'Generador de Gradientes',
            description: 'Crea gradientes CSS con múltiples colores',
            url: '/gradient-generator'
        },
        {
            name: 'Variables de Color CSS',
            description: 'Genera propiedades personalizadas CSS para colores',
            url: '/css-color-variables'
        },
        {
            name: 'Verificador de Contraste',
            description: 'Verifica contraste de color para accesibilidad',
            url: '/contrast-checker'
        },
        {
            name: 'Simulador Daltónico',
            description: 'Simula cómo aparecen los colores a usuarios daltónicos',
            url: '/colorblind-simulator'
        },
        {
            name: 'Mezclador de Colores',
            description: 'Mezcla y combina colores para crear nuevos tonos',
            url: '/color-mixer'
        },
        {
            name: 'Extractor de Colores',
            description: 'Extrae colores de imágenes y URLs',
            url: '/color-extractor'
        }
    ],
    'colorConverter.faqs': [
        {
            question: '¿Qué formatos soporta esta herramienta?',
            answer: 'Actualmente permite entrada de códigos HEX y los convierte automáticamente a formatos RGB y HSL.'
        },
        {
            question: '¿El historial se guarda permanentemente?',
            answer: 'El historial de colores se mantiene durante tu sesión actual de navegación y se almacena localmente en tu navegador.'
        },
        {
            question: '¿Puedo usar esto para trabajo de diseño profesional?',
            answer: 'Sí, nuestro convertidor proporciona conversiones de color precisas adecuadas para proyectos de diseño web y gráfico profesionales.'
        },
        {
            question: '¿Cuál es la diferencia entre RGB y HSL?',
            answer: 'RGB representa colores como valores Rojo, Verde, Azul, mientras que HSL usa Tono, Saturación, Luminosidad para manipulación de color más intuitiva.'
        },
        {
            question: '¿Puedo convertir RGB a HEX?',
            answer: 'Actualmente la herramienta acepta entrada HEX y convierte a RGB/HSL. La función de conversión RGB a HEX está llegando pronto.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la conversión de color ocurre directamente en tu navegador. Tus datos de color nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué formatos de color son mejores para desarrollo web?',
            answer: 'HEX es común para colores web, RGB es útil para opacidad y HSL es genial para manipulación de color programática.'
        },
        {
            question: '¿Puedo usar colores aleatorios para inspiración?',
            answer: 'Sí, el generador de colores aleatorios crea colores HEX perfectos para inspiración de diseño y pruebas.'
        }
    ],
    'colorConverter.securityNote': 'Toda la conversión de color ocurre localmente en tu navegador usando JavaScript. Ningún dato de color se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'colorConverter.additionalContent': 'La conversión de color es esencial para desarrollo web, diseño gráfico, diseño UI/UX, gestión de marca y creación de paletas de colores. Combina nuestro convertidor con otras herramientas como generadores de paleta de colores, verificadores de contraste y generadores de gradientes para gestión comprehensiva de flujos de trabajo de color.'
};
