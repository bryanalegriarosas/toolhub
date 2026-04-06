export default {
    'base64ToImage.title': 'Convertidor de Base64 a Imagen - Herramienta Online Gratuita',
    'base64ToImage.description': 'Herramienta online gratuita para convertir cadenas Base64 de vuelta a imágenes. Soporta todos los formatos de imagen con validación, vista previa y opciones de descarga.',
    'base64ToImage.base64_input': 'Entrada Base64',
    'base64ToImage.paste': 'Pegar',
    'base64ToImage.clear': 'Limpiar',
    'base64ToImage.load_sample': 'Cargar Ejemplo',
    'base64ToImage.base64_input_placeholder': 'Pega tu cadena Base64 aquí...',
    'base64ToImage.characters': 'caracteres',
    'base64ToImage.detected_format': 'Formato Detectado:',
    'base64ToImage.valid_base64': '✓ Base64 Válido',
    'base64ToImage.invalid_base64': '✗ Base64 Inválido',
    'base64ToImage.generating': 'Generando...',
    'base64ToImage.generate_image': 'Generar Imagen',
    'base64ToImage.reset_all': 'Reiniciar Todo',
    'base64ToImage.generated_image': 'Imagen Generada',
    'base64ToImage.copied': '¡Copiado!',
    'base64ToImage.copy_url': 'Copiar URL',
    'base64ToImage.download': 'Descargar',
    'base64ToImage.format': 'Formato:',
    'base64ToImage.dimensions': 'Dimensiones:',
    'base64ToImage.base64_size': 'Tamaño Base64:',
    'base64ToImage.est_image_size': 'Tamaño Est. Imagen:',
    
    // SEO Content specific to Base64 to Image converter
    'base64ToImage.mainDescription': 'Convertidor gratuito de Base64 a Imagen online con detección de formato, validación, vista previa y opciones de descarga. Convierte cadenas Base64 a cualquier formato de imagen instantáneamente.',
    'base64ToImage.extendedDescription': 'Nuestra herramienta comprehensiva de conversión de Base64 a Imagen te ayuda a convertir cadenas Base64 de vuelta a archivos de imagen con características avanzadas. Incluye detección automática de formato, validación en tiempo real, vista previa de imagen, información de formato y procesamiento local seguro. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'base64ToImage.features': [
        {
            title: 'Detección Automática de Formato',
            description: 'Detecta automáticamente el formato de imagen desde cadena Base64 (JPEG, PNG, GIF, WebP, BMP, SVG)'
        },
        {
            title: 'Validación en Tiempo Real',
            description: 'Valida cadenas Base64 en tiempo real con retroalimentación visual y detección de errores'
        },
        {
            title: 'Vista Previa de Imagen',
            description: 'Previsualiza imágenes convertidas instantáneamente con información detallada de formato y dimensiones'
        },
        {
            title: 'Soporte de Formato',
            description: 'Soporta tanto formato de URL de datos como cadenas Base64 limpias para máxima compatibilidad'
        },
        {
            title: 'Copiar al Portapapeles',
            description: 'Copia URLs de imagen al portapapeles con un clic para fácil compartir y uso'
        },
        {
            title: 'Opciones de Descarga',
            description: 'Descarga imágenes convertidas en su formato detectado original con extensiones de archivo apropiadas'
        },
        {
            title: 'Datos de Ejemplo',
            description: 'Carga datos Base64 de ejemplo para propósitos de prueba y aprendizaje'
        },
        {
            title: 'Análisis de Tamaño',
            description: 'Muestra tamaño de cadena Base64 y tamaño estimado de archivo de imagen para comparación'
        },
        {
            title: 'Manejo de Errores',
            description: 'Mensajes de error comprehensivos y validación para experiencia de usuario fluida'
        },
        {
            title: 'Procesamiento Seguro',
            description: 'Toda la conversión ocurre localmente en tu navegador - no se requieren subidas al servidor'
        }
    ],
    'base64ToImage.steps': [
        'Pega tu cadena Base64 o carga un ejemplo para probar',
        'La herramienta detectará automáticamente el formato de imagen y validará el Base64',
        'Haz clic en "Generar Imagen" para convertir Base64 a archivo de imagen',
        'Previsualiza la imagen generada con información de formato y dimensiones',
        'Copia la URL de la imagen o descarga el archivo de imagen para usar',
        'Usa la imagen restaurada en tus aplicaciones o documentos'
    ],
    'base64ToImage.examples': [
        {
            title: 'Restaurar Imagen Incrustada',
            description: 'Convertir imagen Base64 de vuelta a formato de archivo',
            code: 'Entrada: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
            result: 'Salida: Imagen cuadrada roja de 1x1 píxel (restaurada desde Base64)'
        },
        {
            title: 'Recuperación de Imagen de Base de Datos',
            description: 'Extraer imágenes almacenadas como Base64 en base de datos',
            code: 'Entrada: Cadena Base64 de campo blob de base de datos | Formato: Detección automática',
            result: 'Salida: Archivo de imagen original (formato JPEG/PNG/GIF preservado)',
            steps: [
                'Copia cadena Base64 de base de datos',
                'Pega en herramienta convertidora',
                'Verifica detección de formato de imagen',
                'Descarga archivo de imagen restaurado'
            ]
        },
        {
            title: 'Imagen de Respuesta API',
            description: 'Convertir respuesta Base64 de API a imagen',
            code: 'Entrada: Base64 de respuesta JSON de API | Formato: JPEG',
            result: 'Salida: Imagen JPEG descargable desde datos de API'
        }
    ],
    'base64ToImage.useCases': [
        {
            title: 'Recuperación de Base de Datos',
            description: 'Desarrolladores restaurando imágenes almacenadas como Base64 en bases de datos',
            example: 'Desarrollador backend extrayendo avatares de usuario almacenados como Base64 en base de datos'
        },
        {
            title: 'Integración API',
            description: 'Desarrolladores procesando datos de imagen Base64 de respuestas API',
            example: 'Desarrollador frontend convirtiendo Base64 de respuesta API de app móvil'
        },
        {
            title: 'Migración de Datos',
            description: 'Profesionales de TI migrando datos de imagen entre sistemas',
            example: 'Ingeniero de datos convirtiendo almacenamiento de imagen Base64 a almacenamiento basado en archivos'
        },
        {
            title: 'Gestión de Contenido',
            description: 'Gestores de contenido restaurando imágenes desde almacenamiento basado en texto',
            example: 'Administrador CMS restaurando imágenes desde archivos de respaldo Base64'
        },
        {
            title: 'Procesamiento de Email',
            description: 'Usuarios extrayendo imágenes incrustadas de contenido de email',
            example: 'Usuario de email extrayendo imágenes incrustadas en email como cadenas Base64'
        },
        {
            title: 'Depuración y Pruebas',
            description: 'Desarrolladores probando procesos de codificación/decodificación Base64',
            example: 'Ingeniero QA verificando funcionalidad de conversión de Base64 a imagen'
        }
    ],
    'base64ToImage.technicalDetails': 'Nuestro convertidor de Base64 a Imagen usa algoritmos avanzados de decodificación Base64 y detección de formato para convertir cadenas Base64 de vuelta a archivos de imagen. La herramienta soporta tanto formato de URL de datos como cadenas Base64 limpias, valida entrada en tiempo real y crea URLs de datos de imagen apropiadas. Todo el procesamiento ocurre localmente usando JavaScript y Canvas API.',
    'base64ToImage.bestPractices': [
        {
            title: 'Validación Base64',
            tip: 'Siempre valida cadenas Base64 antes de la conversión. La herramienta proporciona validación en tiempo real para asegurar integridad de datos.'
        },
        {
            title: 'Detección de Formato',
            tip: 'Confía en la detección automática de formato pero verifica que el formato detectado coincida con tus expectativas.'
        },
        {
            title: 'Verificación de Fuente de Datos',
            tip: 'Asegura que tu fuente Base64 sea confiable y los datos estén completos antes de la conversión.'
        },
        {
            title: 'Consideraciones de Tamaño',
            tip: 'Cadenas Base64 grandes pueden tomar más tiempo en procesar. Considera el impacto del tamaño en el rendimiento.'
        }
    ],
    'base64ToImage.commonErrors': [
        {
            error: 'Formato Base64 Inválido',
            cause: 'La cadena Base64 contiene caracteres inválidos, relleno incorrecto o datos corruptos',
            solution: 'Asegura que la cadena Base64 esté completa y formateada apropiadamente. Usa la característica de validación.',
            prevention: 'Copia la cadena Base64 completa y verifica que no esté truncada o modificada.'
        },
        {
            error: 'Formato de Imagen No Soportado',
            cause: 'La cadena Base64 contiene formato de imagen no soportado o corrupto',
            solution: 'Verifica el formato fuente y asegura que sea un tipo de imagen soportado (JPEG, PNG, GIF, WebP, BMP, SVG).',
            prevention: 'Verifica el formato de imagen original antes de la codificación Base64.'
        },
        {
            error: 'Datos de Imagen Corruptos',
            cause: 'La cadena Base64 está corrupta o incompleta',
            solution: 'Obtén una copia fresca de la cadena Base64 de la fuente original.',
            prevention: 'Verifica la integridad Base64 antes del almacenamiento o transmisión.'
        },
        {
            error: 'Tiempo de Espera de Conversión',
            cause: 'Cadenas Base64 grandes causando tiempos de espera de procesamiento del navegador',
            solution: 'Usa cadenas Base64 más pequeñas o intenta de nuevo con un navegador diferente.',
            prevention: 'Prueba con cadenas más pequeñas primero y asegura recursos adecuados del sistema.'
        },
        {
            error: 'Falla en Generación de Imagen',
            cause: 'Limitaciones del navegador o formato de datos de imagen incompatible',
            solution: 'Intenta un navegador diferente o verifica el formato de cadena Base64.',
            prevention: 'Usa navegadores modernos y asegura que la cadena Base64 esté formateada apropiadamente.'
        },
        {
            error: 'Falla en Descarga',
            cause: 'Problemas de descarga del navegador o espacio insuficiente en disco',
            solution: 'Verifica la configuración de descarga del navegador y asegura espacio de almacenamiento adecuado.',
            prevention: 'Limpia la caché del navegador y verifica los permisos de descarga.'
        }
    ],
    'base64ToImage.alternatives': [
        {
            name: 'Decodificadores Base64 Online',
            useCase: 'Servicios de decodificación Base64 basados en la nube',
            pros: 'Acceso multiplataforma, Sin instalación, Soporte de múltiples formatos',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Límites de tamaño de archivo',
            comparison: 'Nuestra herramienta procesa localmente para completa privacidad y sin límites de tamaño de archivo.'
        },
        {
            name: 'Software de Imagen de Escritorio',
            useCase: 'Software de edición de imagen profesional con importación Base64',
            pros: 'Características avanzadas, Procesamiento por lotes, Operación offline',
            cons: 'Licencias caras, Interfaz compleja, Instalación requerida',
            comparison: 'Nuestra herramienta es gratuita y no requiere instalación.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas de desarrollador para decodificación Base64 vía terminal',
            pros: 'Programable, Procesamiento rápido, Integración con flujos de trabajo',
            cons: 'Configuración técnica requerida, Sin GUI, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona interfaz amigable sin configuración técnica.'
        },
        {
            name: 'Librerías de Programación',
            useCase: 'Librerías de software para decodificación Base64 en aplicaciones',
            pros: 'Integración con código, Procesamiento personalizado, Optimizado para rendimiento',
            cons: 'Conocimiento de programación requerido, Complejidad de implementación',
            comparison: 'Nuestra herramienta ofrece conversión instantánea sin programación.'
        }
    ],
    'base64ToImage.relatedTools': [
        {
            name: 'Imagen a Base64',
            description: 'Convertir imágenes a cadenas Base64',
            url: '/image-to-base64'
        },
        {
            name: 'Codificador/Decodificador Base64',
            description: 'Codificar y decodificar cadenas Base64',
            url: '/base64-encoder'
        },
        {
            name: 'Convertidor de Formato de Imagen',
            description: 'Convertir entre diferentes formatos de imagen',
            url: '/image-converter'
        },
        {
            name: 'Validador de Imagen',
            description: 'Validar y analizar archivos de imagen',
            url: '/image-validator'
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
        },
        {
            name: 'Base64 a Texto',
            description: 'Convertir cadenas Base64 de vuelta a texto',
            url: '/base64-to-text'
        }
    ],
    'base64ToImage.faqs': [
        {
            question: '¿Qué formatos Base64 son compatibles?',
            answer: 'Soportamos todos los formatos de imagen Base64 incluyendo URLs de datos (data:image/...;base64,) y cadenas Base64 limpias para JPEG, PNG, GIF, WebP, BMP y SVG.'
        },
        {
            question: '¿Cómo sé si mi Base64 es válido?',
            answer: 'La herramienta valida automáticamente tu entrada Base64 y muestra el formato detectado. Verás una marca de verificación verde para Base64 válido e información de formato.'
        },
        {
            question: '¿Qué pasa si mi Base64 no tiene prefijo de datos?',
            answer: 'La herramienta puede manejar ambos formatos - con o sin el prefijo data:image. Detectará automáticamente el tipo de imagen desde los datos Base64.'
        },
        {
            question: '¿Puedo descargar la imagen generada?',
            answer: '¡Sí! Una vez que la imagen es generada, puedes descargarla en el formato detectado (JPEG, PNG, etc.) con solo un clic.'
        },
        {
            question: '¿Qué tan precisa es la detección de formato?',
            answer: 'Nuestra detección de formato es altamente precisa para formatos de imagen estándar. Analiza los datos Base64 y firmas de archivo para identificar formatos JPEG, PNG, GIF, WebP, BMP y SVG.'
        },
        {
            question: '¿Hay un límite de tamaño para entrada Base64?',
            answer: 'Aunque no hay un límite estricto, cadenas Base64 muy grandes (más de 50MB) pueden causar problemas de rendimiento del navegador y no se recomiendan.'
        },
        {
            question: '¿Puedo usar esto para depuración?',
            answer: '¡Sí! Esta herramienta es perfecta para depurar problemas de codificación Base64, probar datos de imagen y verificar la detección de formato.'
        },
        {
            question: '¿Están seguros mis datos?',
            answer: 'Toda la conversión ocurre directamente en tu navegador. Tus cadenas Base64 nunca se suben a nuestros servidores, asegurando completa privacidad y seguridad.'
        },
        {
            question: '¿Qué formatos de imagen pueden ser generados?',
            answer: 'La herramienta puede generar imágenes JPEG, PNG, GIF, WebP, BMP y SVG basadas en el formato Base64 detectado.'
        },
        {
            question: '¿Puedo copiar la URL de imagen generada?',
            answer: '¡Sí! Puedes copiar la URL de datos de imagen generada al portapapeles para fácil compartir o uso en otras aplicaciones.'
        }
    ],
    'base64ToImage.securityNote': 'Toda la conversión de Base64 a Imagen ocurre localmente en tu navegador usando JavaScript y Canvas API. No se almacenan datos en nuestros servidores, asegurando completa privacidad y seguridad.',
    'base64ToImage.additionalContent': 'La conversión de Base64 a Imagen es esencial para recuperación de datos, integración API y gestión de contenido. Combina nuestro convertidor con otras herramientas como codificación Base64, conversión de imagen y validación de formato para procesamiento comprehensivo de datos.'
};
