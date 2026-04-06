export default {
    'imageToBase64.title': 'Convertidor de Imagen a Base64 - Herramienta Online Gratuita',
    'imageToBase64.description': 'Herramienta online gratuita para convertir imágenes a cadenas Base64. Soporta todos los formatos de imagen con vista previa, funcionalidad de copia y opciones de descarga.',
    'imageToBase64.drop_image_here': 'Suelta imagen aquí o haz clic para subir',
    'imageToBase64.choose_image': 'Elegir Imagen',
    'imageToBase64.converting': 'Convirtiendo...',
    'imageToBase64.convert_to_base64': 'Convertir a Base64',
    'imageToBase64.clear': 'Limpiar',
    'imageToBase64.image_preview': 'Vista Previa de Imagen',
    'imageToBase64.base64_output': 'Salida Base64',
    'imageToBase64.format': 'Formato:',
    'imageToBase64.original_size': 'Tamaño Original:',
    'imageToBase64.base64_size': 'Tamaño Base64:',
    'imageToBase64.size_increase': 'Aumento de Tamaño:',
    'imageToBase64.copied': '¡Copiado!',
    'imageToBase64.copy': 'Copiar',
    'imageToBase64.download': 'Descargar',
    'imageToBase64.include_data_prefix': 'Incluir prefijo de datos',
    'imageToBase64.clean_base64': 'Base64 Limpio (sin prefijo)',
    'imageToBase64.characters': 'caracteres',
    
    // SEO Content specific to Image to Base64 converter
    'imageToBase64.mainDescription': 'Convertidor gratuito de Imagen a Base64 online con soporte de formato, vista previa, funcionalidad de copia y opciones de descarga. Convierte cualquier imagen a cadena Base64 instantáneamente.',
    'imageToBase64.extendedDescription': 'Nuestra herramienta comprehensiva de conversión de Imagen a Base64 te ayuda a convertir cualquier formato de imagen a codificación Base64 con características avanzadas. Incluye vista previa en tiempo real, opciones de formato, copia al portapapeles, funcionalidad de descarga y procesamiento local seguro. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'imageToBase64.features': [
        {
            title: 'Soporte Universal de Formatos',
            description: 'Convierte imágenes JPEG, PNG, GIF, WebP, BMP y SVG a cadenas Base64'
        },
        {
            title: 'Vista Previa en Tiempo Real',
            description: 'Previsualiza imágenes convertidas instantáneamente con información detallada de archivo y comparación de tamaño'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia cadenas Base64 al portapapeles con un clic para fácil uso en código'
        },
        {
            title: 'Opciones de Formato',
            description: 'Elige entre Base64 limpio o con prefijo de datos para diferentes casos de uso'
        },
        {
            title: 'Descargar como Texto',
            description: 'Descarga cadenas Base64 como archivos de texto para respaldo y compartir'
        },
        {
            title: 'Análisis de Tamaño',
            description: 'Compara tamaños de archivo originales y Base64 con cálculo de porcentaje de aumento'
        },
        {
            title: 'Soporte de Arrastrar y Soltar',
            description: 'Interfaz intuitiva de arrastrar y soltar para subidas rápidas de imágenes'
        },
        {
            title: 'Procesamiento Local Seguro',
            description: 'Toda la conversión ocurre en tu navegador - no se requieren subidas al servidor'
        },
        {
            title: 'Responsivo para Móvil',
            description: 'Funciona perfectamente en escritorio y dispositivos móviles con interfaz táctil amigable'
        },
        {
            title: 'Manejo de Errores',
            description: 'Mensajes de error comprehensivos y validación para experiencia de usuario fluida'
        }
    ],
    'imageToBase64.steps': [
        'Sube tu imagen usando el selector de archivos o arrastrar y soltar',
        'Haz clic en "Convertir a Base64" para procesar tu imagen',
        'Ve la vista previa de la imagen y el resultado Base64 en tiempo real',
        'Elige opciones de formato (con/sin prefijo de datos)',
        'Copia al portapapeles o descarga como archivo de texto para usar',
        'Usa la cadena Base64 en HTML, CSS o JavaScript'
    ],
    'imageToBase64.examples': [
        {
            title: 'Logo para Incrustar en CSS',
            description: 'Convertir logo a Base64 para fondo CSS',
            code: 'Entrada: company-logo.png (5KB) | Salida: cadena Base64 comenzando con \'data:image/png;base64,iVBORw0KGgoAAAANS...\'',
            result: 'Uso CSS: background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANS...\');'
        },
        {
            title: 'Icono para Email HTML',
            description: 'Convertir icono a Base64 para plantillas de email',
            code: 'Entrada: email-icon.jpg (2KB) | Salida: cadena Base64 para incrustar en email',
            result: 'Uso HTML: <img src=\'data:image/jpeg;base64,/9j/4AAQSkZJRgABA...\' alt=\'Icono de Email\'>',
            steps: [
                'Sube icono o logo pequeño',
                'Copia la cadena Base64 generada',
                'Pega en la plantilla de email HTML',
                'Prueba el renderizado del email en diferentes clientes'
            ]
        },
        {
            title: 'Foto de Perfil para API',
            description: 'Convertir imagen de perfil a Base64 para payload de API',
            code: 'Entrada: avatar.jpg (15KB) | Salida: cadena Base64 para API JSON',
            result: 'Payload JSON: { \'profile_image\': \'data:image/jpeg;base64,/9j/4AAQSkZJRgABA...\' }'
        }
    ],
    'imageToBase64.useCases': [
        {
            title: 'Desarrollo Web',
            description: 'Desarrolladores incrustando imágenes directamente en HTML, CSS y JavaScript',
            example: 'Desarrollador frontend incrustando iconos pequeños en CSS para reducir solicitudes HTTP'
        },
        {
            title: 'Marketing por Email',
            description: 'Marketeros creando emails HTML con imágenes incrustadas',
            example: 'Marketero de email incrustando logo en plantilla de email para visualización consistente'
        },
        {
            title: 'Desarrollo de API',
            description: 'Desarrolladores enviando datos de imagen en solicitudes API',
            example: 'Desarrollador backend recibiendo subidas de imagen Base64 desde app móvil'
        },
        {
            title: 'Gestión de Contenido',
            description: 'Creadores de contenido almacenando imágenes como texto en bases de datos',
            example: 'Desarrollador CMS almacenando avatares de usuario como Base64 en base de datos'
        },
        {
            title: 'Desarrollo de Apps Móviles',
            description: 'Desarrolladores móviles manejando transmisión de datos de imagen',
            example: 'Desarrollador React Native enviando fotos de perfil al servidor'
        },
        {
            title: 'Migración de Datos',
            description: 'Desarrolladores convirtiendo archivos de imagen para almacenamiento en base de datos',
            example: 'Ingeniero de datos migrando activos de imagen a almacenamiento basado en texto'
        }
    ],
    'imageToBase64.technicalDetails': 'Nuestro convertidor de Imagen a Base64 usa FileReader API y JavaScript moderno para convertir archivos de imagen a codificación Base64. La herramienta procesa imágenes localmente en tu navegador, soporta todos los formatos de imagen principales y proporciona conversión en tiempo real con opciones de formato. Todo el procesamiento ocurre del lado del cliente usando HTML5 File API y Canvas API.',
    'imageToBase64.bestPractices': [
        {
            title: 'Optimización de Tamaño de Imagen',
            tip: 'Usa imágenes más pequeñas (menos de 1MB) para conversión Base64 para evitar problemas de rendimiento y cadenas de datos grandes.'
        },
        {
            title: 'Selección de Formato',
            tip: 'Usa JPEG para fotografías y PNG para gráficos con transparencia. Considera WebP para mejor compresión.'
        },
        {
            title: 'Uso de Prefijo de Datos',
            tip: 'Incluye prefijo de datos para uso directo en HTML/CSS, usa Base64 limpio para solicitudes API o almacenamiento en base de datos.'
        },
        {
            title: 'Consideraciones de Rendimiento',
            tip: 'Base64 aumenta el tamaño de archivo en ~33%. Usa con moderación y solo para imágenes pequeñas o activos críticos.'
        }
    ],
    'imageToBase64.commonErrors': [
        {
            error: 'Formato de Archivo Inválido',
            cause: 'Intentando convertir archivos que no son imágenes o formatos no soportados',
            solution: 'Asegura que el archivo sea un formato de imagen válido (JPEG, PNG, GIF, WebP, BMP, SVG).',
            prevention: 'Verifica la extensión del archivo y asegura que la imagen pueda abrirse normalmente antes de la conversión.'
        },
        {
            error: 'Tamaño de Archivo Demasiado Grande',
            cause: 'Archivos de imagen más grandes de 10MB causando problemas de rendimiento del navegador',
            solution: 'Usa una imagen más pequeña o comprime la imagen antes de la conversión Base64.',
            prevention: 'Optimiza imágenes antes de la conversión y considera los requisitos de tamaño de archivo.'
        },
        {
            error: 'Tiempo de Espera de Conversión',
            cause: 'Imágenes grandes causando tiempos de espera de procesamiento del navegador',
            solution: 'Usa imágenes más pequeñas o intenta de nuevo con un navegador diferente.',
            prevention: 'Prueba con imágenes pequeñas primero y asegura recursos adecuados del sistema.'
        },
        {
            error: 'Fallo al Copiar al Portapapeles',
            cause: 'Restricciones de seguridad del navegador o problemas de acceso al portapapeles',
            solution: 'Selecciona y copia manualmente el texto Base64 o usa la opción de descarga.',
            prevention: 'Usa navegadores modernos y asegura permisos adecuados para acceso al portapapeles.'
        },
        {
            error: 'Fallo en Descarga',
            cause: 'Problemas de descarga del navegador o espacio insuficiente en disco',
            solution: 'Verifica la configuración de descarga del navegador y asegura espacio de almacenamiento adecuado.',
            prevention: 'Limpia la caché del navegador y verifica los permisos de descarga.'
        },
        {
            error: 'Problemas de Memoria',
            cause: 'Imágenes grandes consumiendo demasiada memoria del navegador',
            solution: 'Usa imágenes más pequeñas o reinicia el navegador para liberar memoria.',
            prevention: 'Monitorea el uso de memoria y evita procesar múltiples imágenes grandes simultáneamente.'
        }
    ],
    'imageToBase64.alternatives': [
        {
            name: 'Convertidores Base64 Online',
            useCase: 'Servicios de conversión Base64 basados en la nube',
            pros: 'Acceso multiplataforma, Sin instalación, Soporte de múltiples formatos',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Límites de tamaño de archivo',
            comparison: 'Nuestra herramienta procesa localmente para completa privacidad y sin límites de tamaño de archivo.'
        },
        {
            name: 'Software de Escritorio',
            useCase: 'Software profesional de procesamiento de imagen con exportación Base64',
            pros: 'Características avanzadas, Procesamiento por lotes, Operación offline',
            cons: 'Licencias caras, Interfaz compleja, Instalación requerida',
            comparison: 'Nuestra herramienta es gratuita y no requiere instalación.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas de desarrollador para codificación Base64 vía terminal',
            pros: 'Programable, Procesamiento rápido, Integración con flujos de trabajo',
            cons: 'Configuración técnica requerida, Sin GUI, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona interfaz amigable sin configuración técnica.'
        },
        {
            name: 'Extensiones de Navegador',
            useCase: 'Complementos del navegador para conversión rápida Base64',
            pros: 'Acceso rápido, Integración con navegador, Opciones de menú contextual',
            cons: 'Específico del navegador, Funcionalidad limitada, Preocupaciones de privacidad',
            comparison: 'Nuestra herramienta funciona independientemente y protege tu privacidad.'
        }
    ],
    'imageToBase64.relatedTools': [
        {
            name: 'Base64 a Imagen',
            description: 'Convertir cadenas Base64 de vuelta a archivos de imagen',
            url: '/base64-to-image'
        },
        {
            name: 'Convertidor de Formato de Imagen',
            description: 'Convertir entre diferentes formatos de imagen',
            url: '/image-converter'
        },
        {
            name: 'Compresor de Imagen',
            description: 'Comprimir imágenes para reducir el tamaño de archivo',
            url: '/image-compressor'
        },
        {
            name: 'Redimensionador de Imagen',
            description: 'Redimensionar imágenes a dimensiones personalizadas',
            url: '/image-resizer'
        },
        {
            name: 'Codificador/Decodificador Base64',
            description: 'Codificar y decodificar cadenas Base64',
            url: '/base64-encoder'
        },
        {
            name: 'Convertidor de Archivos',
            description: 'Convertir entre diferentes formatos de archivo',
            url: '/file-converter'
        },
        {
            name: 'Texto a Base64',
            description: 'Convertir cadenas de texto a codificación Base64',
            url: '/text-to-base64'
        }
    ],
    'imageToBase64.faqs': [
        {
            question: '¿Qué es la codificación Base64?',
            answer: 'Base64 es un esquema de codificación que convierte datos binarios a formato de texto, haciéndolo seguro para incrustar imágenes directamente en HTML, CSS o JavaScript.'
        },
        {
            question: '¿Por qué usaría Base64 para imágenes?',
            answer: 'Base64 elimina la necesidad de archivos de imagen separados, reduce solicitudes HTTP y es útil para incrustar iconos pequeños, logos o imágenes en emails.'
        },
        {
            question: '¿Qué formatos de imagen son compatibles?',
            answer: 'Soportamos todos los formatos de imagen principales incluyendo JPEG, PNG, GIF, WebP, BMP y archivos SVG.'
        },
        {
            question: '¿Hay un límite de tamaño para la conversión Base64?',
            answer: 'Aunque no hay un límite estricto, imágenes muy grandes (más de 10MB) pueden causar problemas de rendimiento del navegador y no se recomiendan para codificación Base64.'
        },
        {
            question: '¿Cuál es la diferencia entre Base64 limpio y con prefijo?',
            answer: 'Base64 limpio contiene solo los datos codificados, mientras que con prefijo incluye "data:image/[formato];base64," que se necesita para uso directo en HTML/CSS.'
        },
        {
            question: '¿Cuánto más grande es Base64 que la imagen original?',
            answer: 'La codificación Base64 aumenta el tamaño de archivo en aproximadamente 33% debido a la sobrecarga de codificación. Por eso se recomienda solo para imágenes pequeñas.'
        },
        {
            question: '¿Puedo usar Base64 en CSS?',
            answer: '¡Sí! Puedes usar Base64 en CSS con el esquema URI de datos: background-image: url(\'data:image/png;base64,TU_CADENA_BASE64\');'
        },
        {
            question: '¿Están seguros mis datos?',
            answer: 'Toda la conversión ocurre directamente en tu navegador. Tus imágenes nunca se suben a nuestros servidores, asegurando completa privacidad y seguridad.'
        },
        {
            question: '¿Puedo convertir múltiples imágenes a la vez?',
            answer: 'Actualmente, esta herramienta procesa una imagen a la vez para asegurar control de calidad y conversión precisa.'
        },
        {
            question: '¿Cómo uso Base64 en HTML?',
            answer: 'Usa Base64 en HTML con el esquema URI de datos: <img src="data:image/png;base64,TU_CADENA_BASE64" alt="Descripción">'
        }
    ],
    'imageToBase64.securityNote': 'Toda la conversión Base64 ocurre localmente en tu navegador usando FileReader API. No se almacenan datos en nuestros servidores, asegurando completa privacidad y seguridad.',
    'imageToBase64.additionalContent': 'La conversión de Imagen a Base64 es esencial para desarrollo web, marketing por email y transmisión de datos. Combina nuestro convertidor con otras herramientas como compresión de imagen, conversión de formato y decodificación Base64 para gestión comprehensiva de medios.'
};
