export default {
    'jsonToCsv.title': 'Convertidor JSON a CSV - Herramienta Online Gratuita',
    'jsonToCsv.description': 'Convierte datos de array JSON a formato CSV con seguimiento de historial y características de descarga.',
    'jsonToCsv.load_json_file': 'Cargar archivo JSON',
    'jsonToCsv.download': 'Descargar',
    'jsonToCsv.save': 'Guardar',
    'jsonToCsv.input_json': 'Entrada JSON',
    'jsonToCsv.csv_output': 'Salida CSV',
    'jsonToCsv.convert': 'Convertir',
    'jsonToCsv.copy': 'Copiar',
    'jsonToCsv.clear': 'Limpiar',
    'jsonToCsv.history': 'Historial',
    'jsonToCsv.restore': 'Restaurar',
    'jsonToCsv.download_all': 'Descargar Todo',
    'jsonToCsv.clear_history': 'Limpiar Historial',
    'jsonToCsv.placeholder_json': '[{"nombre":"Juan","edad":30}]',
    
    // SEO Content specific to JSON to CSV
    'jsonToCsv.mainDescription': 'Convertidor JSON a CSV online gratuito con detección automática de delimitadores, seguimiento de historial y capacidades de procesamiento por lotes.',
    'jsonToCsv.extendedDescription': 'Nuestro convertidor comprehensivo JSON a CSV te ayuda a transformar datos de array JSON a formato CSV instantáneamente. Incluye detección automática de delimitadores, manejo de caracteres especiales, seguimiento de historial y procesamiento por lotes. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'jsonToCsv.features': [
        {
            title: 'Detección Automática de Formato',
            description: 'Detecta automáticamente la estructura JSON y convierte a formato CSV apropiado'
        },
        {
            title: 'Manejo de Caracteres Especiales',
            description: 'Escapa apropiadamente comas, comillas y saltos de línea según estándares CSV'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos JSON directamente para conversión rápida'
        },
        {
            title: 'Historial de Conversión',
            description: 'Rastrea y gestiona tu historial de conversiones localmente'
        },
        {
            title: 'Procesamiento por Lotes',
            description: 'Procesa múltiples objetos JSON en una sola conversión'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia con un clic al portapapeles para resultados CSV'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga resultados individuales o historial completo como archivos CSV'
        },
        {
            title: 'Manejo de Errores',
            description: 'Mensajes de error claros y validación para entrada JSON inválida'
        }
    ],
    'jsonToCsv.steps': [
        'Ingresa datos de array JSON o carga un archivo JSON',
        'Haz clic en Convertir para transformar a formato CSV',
        'Copia o descarga el resultado CSV',
        'Guarda en historial para referencia posterior'
    ],
    'jsonToCsv.examples': [
        {
            title: 'Datos de Usuario Simple',
            description: 'Convierte información de usuario de JSON a CSV',
            code: '[{"nombre":"Juan","edad":30,"ciudad":"Nueva York"},{"nombre":"María","edad":25,"ciudad":"Los Ángeles"}]',
            result: 'nombre,edad,ciudad\nJuan,30,Nueva York\nMaría,25,Los Ángeles',
            steps: [
                'Ingresa el array JSON en el campo de entrada',
                'Haz clic en "Convertir" para transformar a CSV',
                'Copia el resultado CSV para usar en hojas de cálculo'
            ]
        },
        {
            title: 'Catálogo de Productos',
            description: 'Convierte datos de productos para plataformas de comercio electrónico',
            code: '[{"id":1,"producto":"Laptop","precio":999.99,"stock":50},{"id":2,"producto":"Mouse","precio":29.99,"stock":200}]',
            result: 'id,producto,precio,stock\n1,Laptop,999.99,50\n2,Mouse,29.99,200',
            steps: [
                'Pega datos de producto JSON',
                'Convierte a CSV para gestión de inventario',
                'Descarga como archivo CSV para importación a Excel'
            ]
        },
        {
            title: 'Datos de Respuesta API',
            description: 'Convierte respuestas de API a formato de hoja de cálculo',
            code: '[{"estado":"éxito","codigo":200,"mensaje":"Datos recuperados"}]',
            result: 'estado,codigo,mensaje\néxito,200,Datos recuperados',
            steps: [
                'Copia respuesta de API JSON',
                'Convierte a CSV para análisis',
                'Usa en herramientas de análisis de datos'
            ]
        }
    ],
    'jsonToCsv.useCases': [
        {
            title: 'Análisis de Datos',
            description: 'Analistas de datos convirtiendo respuestas de API a formato de hoja de cálculo',
            example: 'Analista convirtiendo datos JSON a CSV para análisis de Excel'
        },
        {
            title: 'Integración de Comercio Electrónico',
            description: 'Tiendas en línea convirtiendo datos de productos a CSV para sistemas de inventario',
            example: 'Gerente de comercio electrónico convirtiendo catálogos de productos a formato CSV'
        },
        {
            title: 'Migración de Base de Datos',
            description: 'Desarrolladores migrando datos entre diferentes sistemas de base de datos',
            example: 'Administrador de base de datos convirtiendo exportaciones JSON a CSV para importación de datos'
        },
        {
            title: 'Generación de Reportes',
            description: 'Analistas de negocios creando reportes desde fuentes de datos JSON',
            example: 'Analista de negocios convirtiendo datos JSON a CSV para reportes'
        },
        {
            title: 'Integración de API',
            description: 'Desarrolladores procesando respuestas de API para análisis de datos',
            example: 'Desarrollador backend convirtiendo respuestas de API a formato CSV'
        },
        {
            title: 'Respaldo de Datos',
            description: 'Administradores de sistemas creando respaldos CSV desde datos JSON',
            example: 'Administrador de sistema convirtiendo logs JSON a CSV para almacenamiento de respaldo'
        }
    ],
    'jsonToCsv.technicalDetails': 'Nuestro convertidor JSON a CSV usa el analizador JSON incorporado de JavaScript para análisis preciso de datos. El convertidor detecta automáticamente claves de objeto como encabezados CSV y escapa apropiadamente caracteres especiales incluyendo comas, comillas y saltos de línea según estándares RFC 4180. Todo el procesamiento ocurre localmente usando manipulación de cadenas eficiente para rendimiento óptimo.',
    'jsonToCsv.bestPractices': [
        {
            title: 'Estructura de Datos Consistente',
            tip: 'Asegura que todos los objetos JSON tengan claves consistentes para generación apropiada de encabezados CSV.'
        },
        {
            title: 'Validación de Datos',
            tip: 'Valida la estructura JSON antes de la conversión para evitar errores en la salida CSV.'
        },
        {
            title: 'Manejo de Caracteres Especiales',
            tip: 'Prueba la salida CSV con caracteres especiales para asegurar escape apropiado.'
        },
        {
            title: 'Procesamiento de Archivos Grandes',
            tip: 'Para conjuntos de datos grandes, considera dividir datos en fragmentos más pequeños para mejor rendimiento.'
        }
    ],
    'jsonToCsv.commonErrors': [
        {
            error: 'Formato JSON Inválido',
            cause: 'La entrada contiene sintaxis JSON inválida o estructura incorrecta',
            solution: 'Asegura que el JSON esté formateado apropiadamente con sintaxis y estructura válidas.',
            prevention: 'Usa validadores JSON y prueba con muestras pequeñas antes de conversión por lotes.'
        },
        {
            error: 'JSON No Array',
            cause: 'La entrada JSON no es un array de objetos',
            solution: 'Envuelve tus datos JSON en formato de array [{}...] para conversión CSV apropiada.',
            prevention: 'Siempre estructura datos como array de objetos para compatibilidad CSV.'
        },
        {
            error: 'Claves de Objeto Inconsistentes',
            cause: 'Los objetos JSON tienen claves diferentes causando encabezados CSV inconsistentes',
            solution: 'Asegura que todos los objetos tengan claves consistentes o maneja valores faltantes apropiadamente.',
            prevention: 'Define estructura de datos estándar y valida consistencia de objetos.'
        },
        {
            error: 'Problemas de Caracteres Especiales',
            cause: 'Problemas de formato CSV con comas, comillas o caracteres especiales',
            solution: 'Usa escape apropiado y prueba la salida con aplicaciones de hoja de cálculo.',
            prevention: 'Valida caracteres especiales y usa reglas de escape CSV estándar.'
        }
    ],
    'jsonToCsv.alternatives': [
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'jq, csvkit, pandas utilidades de línea de comandos',
            pros: 'Procesamiento potente, Programable, Características avanzadas',
            cons: 'Conocimiento técnico requerido, Sin GUI, Configuración compleja',
            comparison: 'Nuestra herramienta proporciona interfaz amigable con retroalimentación visual sin configuración técnica.'
        },
        {
            name: 'Bibliotecas de Programación',
            useCase: 'Pandas, csv-writer, json2csv bibliotecas de programación',
            pros: 'Integración con código, Características avanzadas, Personalizable',
            cons: 'Programación requerida, Complejidad de configuración, Uso independiente limitado',
            comparison: 'Nuestra herramienta ofrece conversión instantánea sin requisitos de programación.'
        },
        {
            name: 'Software de Hojas de Cálculo',
            useCase: 'Excel, Google Sheets, LibreOffice Calc funciones de importación',
            pros: 'Análisis avanzado, Interfaz visual, Integración con flujos de trabajo',
            cons: 'Proceso manual, Automatización limitada, Dependencia de software',
            comparison: 'Nuestra herramienta proporciona conversión automatizada sin requisitos de software de hojas de cálculo.'
        },
        {
            name: 'Convertidores Online',
            useCase: 'Varios servicios web de conversión JSON a CSV',
            pros: 'Acceso multiplataforma, Sin instalación, Características adicionales',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Características limitadas',
            comparison: 'Nuestra herramienta funciona offline con completa privacidad y características comprehensivas.'
        }
    ],
    'jsonToCsv.relatedTools': [
        {
            name: 'CSV a JSON',
            description: 'Convierte datos CSV de vuelta a formato JSON',
            url: '/csv-to-json'
        },
        {
            name: 'Validador JSON',
            description: 'Valida y formatea datos JSON',
            url: '/json-validator'
        },
        {
            name: 'Formateador JSON',
            description: 'Formatea y embellece código JSON',
            url: '/json-formatter'
        },
        {
            name: 'Validador CSV',
            description: 'Valida formato y estructura CSV',
            url: '/csv-validator'
        },
        {
            name: 'Convertidor de Datos',
            description: 'Convierte entre varios formatos de datos',
            url: '/data-converter'
        },
        {
            name: 'XML a JSON',
            description: 'Convierte datos XML a formato JSON',
            url: '/xml-to-json'
        },
        {
            name: 'YAML a JSON',
            description: 'Convierte datos YAML a formato JSON',
            url: '/yaml-to-json'
        },
        {
            name: 'Excel a JSON',
            description: 'Convierte archivos Excel a formato JSON',
            url: '/excel-to-json'
        }
    ],
    'jsonToCsv.faqs': [
        {
            question: '¿Qué formato JSON es compatible?',
            answer: 'La herramienta acepta arrays de objetos JSON. Cada objeto debe tener claves consistentes que se convertirán en encabezados CSV.'
        },
        {
            question: '¿Cómo se manejan los caracteres especiales?',
            answer: 'Los caracteres especiales incluyendo comas, comillas y saltos de línea se escapan apropiadamente según estándares CSV.'
        },
        {
            question: '¿Puedo procesar archivos JSON grandes?',
            answer: 'Sí, puedes cargar archivos JSON. La herramienta maneja archivos de tamaño razonable para procesamiento en navegador.'
        },
        {
            question: '¿Qué pasa con los valores faltantes?',
            answer: 'Los valores faltantes o nulos se convierten en cadenas vacías en la salida CSV.'
        },
        {
            question: '¿Puedo convertir objetos JSON anidados?',
            answer: 'La herramienta funciona mejor con objetos JSON planos. Las estructuras anidadas pueden necesitar ser aplanadas antes de la conversión.'
        },
        {
            question: '¿Son privados mis datos?',
            answer: 'Toda la conversión ocurre directamente en tu navegador. Tus datos JSON y salida CSV nunca se envían a nuestros servidores, asegurando completa privacidad.'
        },
        {
            question: '¿Qué delimitador se usa en CSV?',
            answer: 'La herramienta usa coma (,) como delimitador estándar. Todos los caracteres especiales se escapan apropiadamente.'
        },
        {
            question: '¿Puedo guardar historial de conversión?',
            answer: 'Sí, la herramienta mantiene un historial local de tus conversiones para fácil acceso y referencia.'
        }
    ],
    'jsonToCsv.securityNote': 'Toda la conversión JSON a CSV ocurre localmente en tu navegador usando JavaScript. Ningún dato JSON o salida CSV se almacena en nuestros servidores, asegurando completa privacidad y seguridad.',
    'jsonToCsv.additionalContent': 'La conversión JSON a CSV es esencial para análisis de datos, integración de comercio electrónico, migración de base de datos, generación de reportes e integración de API. Combina nuestro convertidor con otras herramientas como validadores CSV, formateadores JSON y convertidores de datos para gestión comprehensiva de flujos de trabajo de datos.'
};
