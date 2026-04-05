export default {
    mainDescription: "Un decodificador Base64 online rápido y seguro que convierte texto codificado en Base64 de vuelta a su formato original. Perfecto para desarrolladores, analistas de datos y cualquiera que trabaje con datos codificados. No requiere instalación - decodifica directamente en tu navegador con completa privacidad.",
    
    extendedDescription: `
<p class="mb-4">La codificación Base64 es una técnica fundamental en desarrollo web y transmisión de datos que convierte datos binarios en formato de texto ASCII. Nuestra herramienta Base64 Decoder proporciona una manera simple, rápida y segura de revertir este proceso, convirtiendo cadenas codificadas en Base64 de vuelta a su forma original.</p>

<p class="mb-4">Ya sea que estés depurando respuestas de API, analizando tokens JWT, extrayendo imágenes incrustadas de HTML, o trabajando con archivos adjuntos de correo electrónico, esta herramienta maneja todas las tareas de decodificación Base64 con facilidad. Soporta Base64 estándar, codificación Base64 URL-safe, y maneja automáticamente tanto cadenas con y sin relleno.</p>

<p>Toda la decodificación ocurre directamente en tu navegador usando JavaScript, lo que significa que tus datos nunca abandonan tu computadora. Esto asegura completa privacidad y seguridad para información sensible mientras proporciona resultados instantáneos sin retrasos del servidor.</p>
`,
    
    features: [
        {
            title: "Decodificación Instantánea",
            description: "Decodifica cadenas Base64 en milisegundos con nuestro motor JavaScript optimizado. Sin esperas, sin retrasos."
        },
        {
            title: "100% del Lado del Cliente",
            description: "Todo el procesamiento ocurre en tu navegador. Tus datos nunca tocan nuestros servidores, asegurando completa privacidad."
        },
        {
            title: "Modo de Decodificación Automática",
            description: "Habilita la decodificación automática mientras escribes o pegas, perfecto para pruebas rápidas y flujos de trabajo de depuración."
        },
        {
            title: "Soporte de Carga de Archivos",
            description: "Carga archivos codificados en Base64 directamente desde tu computadora para operaciones de decodificación por lotes rápidas."
        },
        {
            title: "Historial de Decodificación",
            description: "Lleva un registro de tus decodificaciones recientes con nuestra función de historial integrada. Copia o exporta cualquier resultado anterior."
        },
        {
            title: "Descargar Resultados",
            description: "Exporta contenido decodificado como archivos de texto con un clic, facilitando guardar y compartir resultados."
        },
        {
            title: "Manejo de Errores",
            description: "Mensajes de error claros te ayudan a identificar y corregir problemas con entrada Base64 inválida rápidamente."
        },
        {
            title: "Soporte URL-Safe",
            description: "Maneja automáticamente ambas variantes de Base64: estándar y URL-safe (caracteres - y _)."
        }
    ],
    
    steps: [
        "Pega tu texto codificado en Base64 en el área de texto de entrada, o haz clic en 'Cargar archivo' para subir un archivo de texto que contenga datos Base64.",
        "Opcionalmente habilita el modo 'Decodificación Automática' para ver resultados instantáneamente mientras escribes o pegas, perfecto para pruebas rápidas.",
        "Haz clic en el botón 'Decodificar' para convertir tu cadena Base64 de vuelta a su formato de texto original.",
        "Revisa la salida decodificada en el área de resultados de abajo. La herramienta muestra el contenido original exacto.",
        "Usa 'Copiar Resultado' para copiar el texto decodificado a tu portapapeles para usar en otras aplicaciones.",
        "Haz clic en 'Descargar' para guardar el contenido decodificado como un archivo .txt en tu computadora.",
        "Accede a decodificaciones anteriores desde la sección Historial de abajo, donde puedes copiar o descargar cualquier resultado pasado.",
        "Usa 'Limpiar' para reiniciar la herramienta y comenzar una nueva sesión de decodificación con entradas frescas."
    ],
    
    examples: [
        {
            title: "Decodificación de Texto Simple",
            description: "El caso de uso más básico - decodificar texto plano que fue previamente codificado en Base64. Esto es común en archivos de configuración y transmisión simple de datos.",
            code: "SGVsbG8gV29ybGQh",
            result: "¡Hola Mundo!",
            steps: [
                "Copia la cadena Base64: SGVsbG8gV29ybGQh",
                "Pégala en el campo de entrada",
                "Haz clic en el botón 'Decodificar'",
                "El resultado '¡Hola Mundo!' aparece en el área de salida"
            ]
        },
        {
            title: "Decodificación de Datos JSON de APIs",
            description: "Muchas APIs REST codifican payloads JSON en Base64 para transmisión. Este ejemplo muestra cómo decodificar un objeto de usuario típico que podría ser devuelto por una API de autenticación.",
            code: "eyJuYW1lIjoiSm9obiIsImFnZSI6MzAsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20ifQ==",
            result: '{"name":"John","age":30,"email":"john.doe@example.com"}',
            steps: [
                "Recibe JSON codificado en Base64 de una respuesta de API",
                "Pega la cadena codificada en el decodificador",
                "Haz clic en 'Decodificar' para ver el JSON crudo",
                "Copia el JSON para usar en tu aplicación o para depuración"
            ]
        },
        {
            title: "Decodificación de Base64 URL-Safe",
            description: "Base64 URL-safe usa diferentes caracteres (- en lugar de +, _ en lugar de /) para evitar conflictos con codificación URL. Los tokens JWT comúnmente usan este formato.",
            code: "SGVsbG8gV29ybGQgV2ViVG9vbFN0YWNr",
            result: "Hola Mundo WebToolStack",
            steps: [
                "Identifica Base64 URL-safe (contiene caracteres - o _)",
                "Pega la cadena - la herramienta detecta automáticamente el formato",
                "El decodificador maneja caracteres URL-safe automáticamente",
                "Ve o descarga el resultado decodificado"
            ]
        },
        {
            title: "Decodificación de Payload de Token JWT",
            description: "Los tokens JSON Web (JWT) consisten en tres partes codificadas en Base64-URL separadas por puntos. Este ejemplo muestra cómo decodificar la sección del medio (payload) para ver los claims del token.",
            code: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            result: '{"sub":"1234567890","name":"John Doe","iat":1516239022}',
            steps: [
                "Toma la sección del medio de un token JWT (entre los dos puntos)",
                "Pega solo esa sección del medio en el decodificador (sin los puntos)",
                "Ve el JSON decodificado conteniendo claims como ID de usuario, nombre y expiración",
                "Usa esto para depurar problemas de autenticación o entender contenidos del token"
            ]
        },
        {
            title: "Decodificación de Metadatos de Archivo Adjunto de Email",
            description: "Protocolos de email como SMTP codifican metadatos de archivos adjuntos y nombres de archivo en Base64. Esto ayuda al depurar problemas de entrega de email o construir clientes de email.",
            code: "ZmlsZW5hbWU9InJlcG9ydC5wZGYi",
            result: 'filename="report.pdf"',
            steps: [
                "Extrae la cadena Base64 de cabeceras de email o datos MIME",
                "Decodifica para revelar el nombre de archivo o metadatos originales",
                "Usa esta información para análisis de email o solución de problemas"
            ]
        }
    ],
    
    useCases: [
        {
            title: "Desarrollo Web e Integración de APIs",
            description: "Los desarrolladores frecuentemente encuentran datos codificados en Base64 al trabajar con APIs REST, endpoints GraphQL y servicios web. Las respuestas de API a menudo incluyen imágenes, archivos o payloads JSON codificados en Base64. Esta herramienta ayuda a decodificar e inspeccionar rápidamente estas respuestas durante desarrollo y depuración, permitiéndote verificar la integridad de datos y entender el comportamiento de API sin escribir scripts de decodificación personalizados.",
            example: "Al probar una API de perfil de usuario que devuelve imágenes de avatar como URIs de datos Base64, usa este decodificador para extraer y verificar los datos de imagen antes de renderizarlos en tu aplicación."
        },
        {
            title: "Análisis de Tokens JWT",
            description: "Los JSON Web Tokens (JWT) son ampliamente usados para autenticación y autorización en aplicaciones web modernas. Los JWT consisten en tres partes codificadas en Base64-URL: header, payload y signature. Decodificar la sección del payload revela información crucial como ID de usuario, roles, permisos y expiración del token. Esto es invaluable para depurar problemas de autenticación, entender la estructura del token y verificar claims antes de implementar lógica de validación de tokens.",
            example: "Si los usuarios experimentan cierres de sesión inesperados, decodifica el payload del JWT para verificar el claim 'exp' (expiración) y confirmar la configuración de vida útil del token."
        },
        {
            title: "Desarrollo y Depuración de Email",
            description: "Los sistemas de email usan codificación Base64 extensamente para archivos adjuntos, caracteres no-ASCII en cabeceras e imágenes incrustadas. Al construir clientes de email, depurar problemas de entrega o analizar mensajes MIME, necesitarás decodificar varios elementos Base64. Esto incluye nombres de archivo de adjuntos, líneas de asunto con caracteres especiales y datos de imagen en línea. Entender el contenido decodificado ayuda a solucionar problemas de codificación de caracteres y verificar el formato adecuado de email.",
            example: "Cuando un cliente reporta nombres de adjunto garblados en emails, decodifica el nombre de archivo codificado en Base64 de la cabecera Content-Disposition para identificar problemas de codificación de caracteres."
        },
        {
            title: "Data URI e Imágenes Incrustadas",
            description: "Los desarrolladores web usan Data URI codificadas en Base64 para incrustar imágenes directamente en HTML y CSS, reduciendo solicitudes HTTP y mejorando tiempos de carga para imágenes pequeñas. Al optimizar sitios web o depurar problemas de visualización, puedes necesitar decodificar estas imágenes incrustadas para verificar su contenido, verificar tamaños de archivo o extraerlas para edición. Esta herramienta facilita convertir datos de imagen Data URI de vuelta a contenido visible.",
            example: "Para optimizar una página web con iconos incrustados, decodifica los datos de imagen Base64 para verificar si convertir a SVG o usar sprites de imagen reduciría el tamaño del archivo."
        },
        {
            title: "Análisis de Seguridad y Forense",
            description: "Los profesionales de seguridad y desarrolladores usan decodificación Base64 durante auditorías de seguridad, pruebas de penetración y análisis de malware. Los atacantes a veces ofuscan payloads, scripts o URLs maliciosas usando codificación Base64 para evadir detección. Decodificar cadenas Base64 sospechosas en logs, tráfico de red o código fuente ayuda a identificar amenazas potenciales, analizar patrones de ataque y entender vulnerabilidades de seguridad. Esto es esencial para respuesta a incidentes e investigación de seguridad.",
            example: "Al analizar código JavaScript sospechoso que contiene una cadena Base64 larga, decodifícala para revelar código potencialmente malicioso o URLs de phishing."
        },
        {
            title: "Gestión de Archivos de Configuración",
            description: "Muchas aplicaciones y frameworks almacenan datos de configuración, credenciales y certificados en formato Base64. Secrets de Kubernetes, configs de Docker, pipelines CI/CD y servicios en la nube a menudo requieren valores codificados en Base64. Esta herramienta ayuda a administradores y desarrolladores a decodificar rápidamente estos valores para verificación, solución de problemas y auditoría sin necesidad de herramientas de línea de comandos o conocimiento de programación.",
            example: "Al depurar un error de despliegue de Kubernetes, decodifica los valores de secretos Base64 para verificar que las credenciales de la base de datos estén formateadas correctamente."
        },
        {
            title: "Inspección de Campos de Base de Datos",
            description: "Algunas bases de datos y ORMs almacenan datos binarios o caracteres especiales como cadenas codificadas en Base64 en campos de texto. Al consultar bases de datos, depurar problemas de importación de datos o analizar migraciones de datos, puedes encontrar valores Base64 que necesitan decodificación. Esto es particularmente común con procedimientos almacenados, salidas de trigger y sistemas heredados que convirtieron datos binarios a texto para compatibilidad.",
            example: "Al migrar una base de datos heredada donde los datos blob fueron convertidos a campos de texto Base64, decodifica valores de muestra para verificar la integridad de datos y planificar la estrategia de migración."
        },
        {
            title: "Desarrollo de Aplicaciones Móviles",
            description: "Las aplicaciones móviles frecuentemente usan Base64 para caché de imágenes, almacenamiento de datos offline y comunicación de API. Los desarrolladores de iOS y Android codifican imágenes y archivos para almacenamiento local o transmisión para reducir complejidad. Al depurar aplicaciones móviles, probar integraciones de API u optimizar almacenamiento, los desarrolladores necesitan decodificar estos valores para inspeccionar los datos reales y verificar la implementación correcta de codificación/decodificación.",
            example: "Cuando una aplicación Android muestra imágenes caché corruptas, decodifica los valores almacenados Base64 para verificar si el proceso de codificación está preservando los datos de imagen correctamente."
        }
    ],
    
    technicalDetails: `
<h3 class="text-xl font-semibold mb-3">Entendiendo la Codificación Base64</h3>
<p class="mb-4">Base64 es un esquema de codificación binaria-a-texto definido en RFC 4648. Convierte datos binarios en un subconjunto de caracteres ASCII que pueden ser transmitidos seguramente a través de sistemas diseñados para manejar texto. La codificación usa 64 caracteres ASCII diferentes (A-Z, a-z, 0-9, +, /) para representar datos binarios.</p>

<h4 class="text-lg font-semibold mb-2">El Proceso de Codificación</h4>
<p class="mb-4">Base64 funciona tomando tres bytes (24 bits) de datos binarios y dividiéndolos en cuatro grupos de 6 bits. Cada grupo de 6 bits representa un valor de 0-63, que se mapea a uno de los 64 caracteres Base64. Este proceso aumenta el tamaño de datos en aproximadamente 33% (4 bytes de Base64 por cada 3 bytes de datos originales).</p>

<h4 class="text-lg font-semibold mb-2">Relleno con Caracteres =</h4>
<p class="mb-4">Cuando los datos de entrada no son divisibles por 3, Base64 agrega relleno usando el carácter '=' para completar el bloque final de 4 caracteres. Un '=' indica que los datos originales tenían un byte extra, mientras que '==' indica dos bytes extra. Algunas implementaciones omiten el relleno en variantes URL-safe.</p>

<h4 class="text-lg font-semibold mb-2">Cómo Funciona Nuestro Decodificador</h4>
<p class="mb-3">Esta herramienta usa la función nativa del navegador <code>atob()</code> (ASCII a Binario) para realizar la decodificación. El proceso:</p>
<ol class="list-decimal ml-6 mb-4 space-y-2">
    <li>Toma la cadena de entrada Base64</li>
    <li>Valida que contiene solo caracteres Base64 válidos</li>
    <li>Decodifica cada grupo de 4 caracteres de vuelta a 3 bytes de datos originales</li>
    <li>Maneja codificación UTF-8 para contenido de texto usando funciones decodeURIComponent y escape</li>
    <li>Devuelve los datos binarios o de texto originales</li>
</ol>

<h4 class="text-lg font-semibold mb-2">Conjuntos de Caracteres</h4>
<p class="mb-4"><strong>Base64 Estándar:</strong> Usa A-Z, a-z, 0-9, +, / y = para relleno<br>
<strong>Base64 URL-Safe:</strong> Reemplaza + con - y / con _ para evitar conflictos de codificación URL<br>
<strong>Base64 MIME:</strong> Agrega saltos de línea cada 76 caracteres para compatibilidad de email</p>

<h4 class="text-lg font-semibold mb-2">Compatibilidad del Navegador</h4>
<p class="mb-4">La función atob() es soportada en todos los navegadores modernos (Chrome, Firefox, Safari, Edge) y ha sido parte de la plataforma web desde Internet Explorer 10. Esto asegura que nuestro decodificador funciona confiablemente en todas las plataformas sin requerir librerías externas o procesamiento del lado del servidor.</p>
`,
    
    bestPractices: [
        {
            title: "Verificar Formato de Entrada",
            tip: "Antes de decodificar, verifica que tu cadena contenga solo caracteres Base64 válidos (A-Z, a-z, 0-9, +, /, =). Los espacios en blanco, saltos de línea y otros caracteres deben ser eliminados primero para evitar errores."
        },
        {
            title: "Manejar Archivos Grandes con Cuidado",
            tip: "Para cadenas Base64 muy grandes (over 10MB), considera dividirlas en fragmentos más pequeños o usar la opción de descarga de archivos en lugar de ver en el navegador, ya que mostrar bloques de texto grandes puede ralentizar tu navegador."
        },
        {
            title: "Preservar Relleno",
            tip: "Al copiar cadenas Base64, asegúrate de incluir los caracteres de relleno (=) al final. Aunque algunos decodificadores manejan relleno faltante, incluirlo asegura máxima compatibilidad y decodificación correcta."
        },
        {
            title: "Usar Modo Automático para Pruebas",
            tip: "Habilita Decodificación Automática al probar múltiples valores rápidamente. Esto es especialmente útil al depurar respuestas de API o comparar diferentes versiones codificadas de los mismos datos."
        },
        {
            title: "Verificar Codificación de Caracteres",
            tip: "Si el texto decodificado muestra caracteres extraños o símbolos, los datos originales podrían haber sido codificados con un conjunto de caracteres diferente (como Latin-1 en lugar de UTF-8). Intenta recodificar los datos de origen con el conjunto de caracteres correcto antes de la codificación Base64."
        },
        {
            title: "Descargar Contenido Binario",
            tip: "Si estás decodificando datos binarios (imágenes, PDFs, ejecutables), usa siempre el botón Descargar en lugar de intentar ver la salida como texto. La visualización del navegador puede mostrar caracteres garblados, pero el archivo descargado será correcto."
        },
        {
            title: "Validar Estructura JWT",
            tip: "Al decodificar tokens JWT, recuerda que tienen tres partes separadas por puntos. Decodifica solo la sección del medio (payload) para ver claims. La primera sección (header) también decodifica a JSON, mientras que la tercera (signature) son datos binarios."
        },
        {
            title: "Limpiar Datos Sensibles",
            tip: "Después de decodificar información sensible como claves API o credenciales, usa el botón Limpiar para eliminar los datos de la herramienta. Aunque todo el procesamiento es del lado del cliente, esto previene compartir accidentalmente información sensible si alguien más usa tu computadora."
        }
    ],
    
    commonErrors: [
        {
            error: "Carácter inválido en cadena Base64",
            cause: "La entrada contiene caracteres fuera del alfabeto Base64 (A-Z, a-z, 0-9, +, /, =). Esto a menudo sucede al copiar de fuentes que incluyen espacios en blanco, saltos de línea o caracteres especiales.",
            solution: "Elimina todos los espacios en blanco, saltos de línea y caracteres especiales de tu entrada. Solo deben permanecer caracteres Base64 válidos. Muchos editores de texto agregan caracteres invisibles al copiar - intenta pegar en un editor de texto plano primero para limpiar la cadena."
        },
        {
            error: "La cadena contiene un carácter inválido",
            cause: "La cadena Base64 ha sido corrompida o truncada durante la copia, o incluye caracteres de un esquema de codificación diferente (como Base32 o Hex).",
            solution: "Verifica que copiaste la cadena completa incluyendo cualquier carácter de relleno (=) al final. Verifica que la fuente proporcionó datos Base64 y no un formato de codificación diferente. Vuelve a copiar la cadena de la fuente original si es posible."
        },
        {
            error: "La cadena a decodificar no está correctamente codificada",
            cause: "La longitud de entrada es inválida (no es múltiplo de 4 después del relleno), o el relleno es incorrecto. Esto sucede cuando las cadenas son editadas manualmente o copiadas parcialmente.",
            solution: "Las cadenas Base64 deben tener una longitud que sea múltiplo de 4 caracteres. Verifica que no hayas eliminado accidentalmente caracteres o relleno (=) del final. Si la cadena se supone que es Base64 URL-safe, podría estar faltando relleno intencionalmente - intenta agregar caracteres = para hacer la longitud divisible por 4."
        },
        {
            error: "La salida decodificada muestra texto garblado o caracteres extraños",
            cause: "Los datos son binarios (no destinados a mostrarse como texto) o fueron codificados con una codificación de caracteres diferente a UTF-8. Esto ocurre comúnmente con imágenes, PDFs o texto codificado en Latin-1 u otros conjuntos de caracteres.",
            solution: "Si estás decodificando una imagen, PDF u otro archivo binario, usa el botón Descargar para guardar el archivo apropiadamente en lugar de verlo como texto. Para datos de texto con problemas de codificación, verifica qué conjunto de caracteres se usó durante la codificación original y asegúrate que coincida con el formato de salida esperado."
        },
        {
            error: "No pasa nada al hacer clic en Decodificar",
            cause: "El campo de entrada está vacío, o el JavaScript del navegador está deshabilitado/bloqueado, impidiendo que el decodificador se ejecute.",
            solution: "Asegúrate de haber pegado o tipeado contenido en el campo de entrada antes de hacer clic en Decodificar. Verifica que JavaScript esté habilitado en la configuración de tu navegador. Intenta refrescar la página si la herramienta parece no responder."
        },
        {
            error: "El payload JWT decodificado muestra datos incorrectos",
            cause: "Decodificaste la sección equivocada del token JWT, o el token usa una codificación diferente. Los JWT tienen tres partes (header.payload.signature), y necesitas decodificar solo la parte del medio.",
            solution: "Divide tu JWT por los caracteres punto (.). La sección del medio contiene los claims del payload. Copia solo esa sección (sin los puntos) y decodifícala. No incluyas las porciones de header o signature."
        },
        {
            error: "Decodificación Automática no funciona",
            cause: "El checkbox Auto Decodificar está desmarcado, o hay Base64 inválido en la entrada impidiendo el procesamiento automático.",
            solution: "Asegúrate que el checkbox Auto esté marcado. La función de decodificación automática solo funciona con entrada Base64 válida - si tu cadena tiene errores, necesitarás corregirlos antes de que la decodificación automática pueda procesarla. Intenta pegar una cadena Base64 válida conocida para probar si la decodificación automática está funcionando."
        }
    ],
    
    alternatives: [
        {
            name: "Base64 (Estándar)",
            useCase: "Codificación de propósito general para APIs, archivos y transmisión de datos",
            pros: "Soporte universal, bien documentado, estandarizado (RFC 4648)",
            cons: "33% de aumento de tamaño, no es URL-safe sin modificación"
        },
        {
            name: "Base64 URL-Safe",
            useCase: "Tokens, parámetros URL, seguridad web (JWT, OAuth)",
            pros: "Seguro para URLs, no necesita escapado especial, mismo que estándar pero con - y _",
            cons: "No compatible con Base64 estándar sin conversión"
        },
        {
            name: "Base32",
            useCase: "Sistemas insensibles a mayúsculas/minúsculas, códigos legibles por humanos (TOTP, compartir archivos)",
            pros: "Sin confusión de mayúsculas/minúsculas, entrada manual más fácil, sin caracteres especiales",
            cons: "40% más grande que Base64, menos eficiente"
        },
        {
            name: "Base58",
            useCase: "Direcciones de criptomonedas, blockchain, identificadores orientados a usuarios",
            pros: "Evita caracteres ambiguos (0, O, I, l), sin caracteres especiales",
            cons: "No estandarizado como Base64, requiere librerías especiales"
        },
        {
            name: "Hexadecimal (Base16)",
            useCase: "Depuración, hashes criptográficos, códigos de color, inspección de datos binarios",
            pros: "Fácil de leer/depurar, conversión simple, solo 0-9 y A-F",
            cons: "100% de aumento de tamaño (el doble del tamaño original), menos eficiente"
        },
        {
            name: "Binario (Crudo)",
            useCase: "Máxima eficiencia cuando la transmisión binaria es soportada",
            pros: "Sin aumento de tamaño, almacenamiento más eficiente",
            cons: "No puede transmitirse a través de sistemas solo texto, puede ser corrompido"
        }
    ],
    
    relatedTools: [
        {
            name: "Base64 Encoder",
            description: "Convierte texto o archivos a formato Base64 para APIs, emails y transmisión de datos",
            url: "/tools/base64-encoder"
        },
        {
            name: "JSON Formatter",
            description: "Formatea y valida datos JSON, perfecto para respuestas de API decodificadas",
            url: "/tools/json-formatter"
        },
        {
            name: "JWT Decoder",
            description: "Decodifica y analiza Tokens Web JSON con inspección de header y payload",
            url: "/tools/jwt-decoder"
        },
        {
            name: "URL Decoder",
            description: "Decodifica cadenas codificadas URL y parámetros de consulta",
            url: "/tools/url-decoder"
        },
        {
            name: "Hash Generator",
            description: "Genera hashes MD5, SHA-1, SHA-256 para verificación de datos",
            url: "/tools/hash-generator"
        },
        {
            name: "Image to Base64",
            description: "Convierte imágenes a Data URI Base64 para incrustar en HTML/CSS",
            url: "/tools/image-to-base64"
        }
    ],
    
    faqs: [
        {
            question: "¿Qué es la codificación Base64 y por qué se usa?",
            answer: "Base64 es un esquema de codificación binaria-a-texto que convierte datos binarios en texto ASCII usando 64 caracteres diferentes (A-Z, a-z, 0-9, +, /). Se usa cuando necesitas transmitir datos binarios a través de sistemas diseñados para manejar solo texto, como protocolos de email (SMTP), APIs JSON, archivos XML y URLs. Base64 asegura la integridad de datos durante la transmisión evitando caracteres especiales que podrían ser mal interpretados. Usos comunes incluyen incrustar imágenes en HTML/CSS (Data URIs), codificar tokens JWT para autenticación, transmitir archivos vía APIs JSON y almacenar datos binarios en archivos de configuración basados en texto. Aunque Base64 aumenta el tamaño del archivo en aproximadamente 33%, proporciona compatibilidad universal en todos los sistemas."
        },
        {
            question: "¿Es Base64 una forma de encriptación o seguridad?",
            answer: "No, Base64 NO es encriptación y proporciona cero seguridad. Es simplemente un esquema de codificación que convierte datos de un formato a otro. Cualquiera puede decodificar Base64 instantáneamente sin claves, contraseñas o conocimiento especial - es completamente reversible y transparente. Nunca uses Base64 para proteger información sensible como contraseñas, claves API o datos personales. Si necesitas seguridad, usa algoritmos de encriptación properios como AES-256, RSA o implementa HTTPS para transmisión de datos. Base64 es solo para compatibilidad y conversión de formato, no para ocultar o proteger datos. Tratarlo como seguridad podría exponer información sensible a atacantes."
        },
        {
            question: "¿Cuál es la diferencia entre Base64 estándar y Base64 URL-safe?",
            answer: "Base64 estándar usa el conjunto de caracteres A-Z, a-z, 0-9, +, / y = para relleno. Sin embargo, los caracteres + y / tienen significados especiales en URLs (+ se convierte en espacio, / separa segmentos de ruta). Base64 URL-safe (también llamado Base64url) reemplaza + con - (guión/menos) y / con _ (guion bajo) para evitar conflictos. Adicionalmente, Base64 URL-safe a menudo omite los caracteres de relleno =. Esta variante es esencial para tokens, parámetros URL y cualquier dato que será parte de una URL. Los tokens JWT, tokens OAuth y muchas APIs modernas usan Base64 URL-safe. Nuestro decodificador maneja automáticamente ambos formatos, así que no necesitas preocuparte por qué variante estás usando."
        },
        {
            question: "¿Puedo decodificar cualquier tipo de archivo con este decodificador Base64?",
            answer: "Sí, nuestro decodificador puede manejar datos codificados en Base64 de cualquier tipo de archivo - archivos de texto, imágenes (PNG, JPG, GIF), documentos (PDF, DOCX), archivos de audio (MP3, WAV), videos, ejecutables, archivos ZIP y más. Sin embargo, esta herramienta está optimizada para ver contenido basado en texto. Para archivos binarios como imágenes o PDFs, la salida decodificada mostrará caracteres garblados si intentas verla como texto. En su lugar, usa el botón Descargar para guardar el archivo decodificado en su formato binario apropiado. La descarga preservará la estructura de archivo correcta, y luego puedes abrirlo con la aplicación apropiada. Para contenido de texto (JSON, XML, HTML, texto plano), puedes ver y copiar la salida decodificada directamente en el navegador."
        },
        {
            question: "¿Por qué mi salida decodificada muestra caracteres extraños o garblados?",
            answer: "Hay varias razones para salida garblada: (1) Los datos originales son binarios (como una imagen o PDF) y no pueden mostrarse como texto - usa el botón Descargar en su lugar. (2) La cadena Base64 es inválida o corrompida - verifica caracteres faltantes, espacios en blanco extra o relleno incorrecto. (3) El texto fue codificado con un conjunto de caracteres diferente (como Latin-1 o Windows-1252 en lugar de UTF-8) - los datos originales necesitan ser recodificados con el conjunto de caracteres correcto. (4) Estás viendo solo parte de los datos - asegúrate de copiar la cadena Base64 completa incluyendo todos los caracteres de relleno (=). (5) Los datos no son realmente Base64 - podrían estar codificados con un esquema diferente como Base32, Hex o una codificación personalizada. Intenta eliminar cualquier espacio en blanco y asegurando que la entrada contenga solo caracteres Base64 válidos."
        }
    ],
    
    securityNote: "Toda la decodificación Base64 ocurre completamente en tu navegador usando JavaScript. Tus datos nunca abandonan tu computadora o tocan nuestros servidores, asegurando completa privacidad y seguridad. Sin embargo, recuerda que Base64 NO es encriptación - los datos decodificados son los mismos que los originales y nunca estuvieron verdaderamente protegidos. Usa siempre el botón Limpiar después de trabajar con información sensible, especialmente en computadoras compartidas.",
    
    additionalContent: `
<h3 class="text-2xl font-bold mb-4">Temas Avanzados de Base64</h3>

<h4 class="text-xl font-semibold mb-3">Consideraciones de Rendimiento</h4>
<p class="mb-4">Al trabajar con archivos grandes codificados en Base64, el rendimiento puede convertirse en una preocupación. La decodificación basada en navegador es generalmente rápida para archivos bajo 10MB, pero archivos más grandes pueden causar lag temporal. Para aplicaciones de producción procesando grandes volúmenes de datos Base64, considera estas optimizaciones:</p>

<div class="space-y-4 mb-6">
    <div class="border-l-4 border-blue-500 pl-4">
        <h5 class="font-semibold mb-2">Procesamiento de Respuestas API</h5>
        <p class="text-gray-600 dark:text-gray-400">Muchas APIs devuelven datos binarios (PDFs, imágenes, archivos) como cadenas codificadas en Base64 en respuestas JSON. Tu flujo de trabajo: (1) Llama a la API, (2) Extrae la cadena Base64 del JSON, (3) Decodifica el Base64, (4) Guarda o muestra el archivo binario. Este patrón es común en servicios de generación de documentos, APIs de procesamiento de imágenes y servicios de conversión de archivos.</p>
    </div>
    
    <div class="border-l-4 border-green-500 pl-4">
        <h5 class="font-semibold mb-2">Extracción de Archivos Adjuntos de Email</h5>
        <p class="text-gray-600 dark:text-gray-400">Las librerías de análisis de email a menudo proporcionan archivos adjuntos como cadenas codificadas en Base64. Tu flujo de trabajo: (1) Analiza la estructura MIME del email, (2) Extrae metadatos del archivo adjunto (nombre de archivo, tipo), (3) Decodifica los datos del archivo adjunto Base64, (4) Guarda con el nombre de archivo original. Esto es esencial para clientes de email, sistemas de automatización y herramientas de gestión de documentos.</p>
    </div>
    
    <div class="border-l-4 border-purple-500 pl-4">
        <h5 class="font-semibold mb-2">Gestión de Configuración</h5>
        <p class="text-gray-600 dark:text-gray-400">Kubernetes secrets, configs de Docker y sistemas CI/CD a menudo almacenan datos sensibles como Base64. Tu flujo de trabajo: (1) Extrae la configuración, (2) Decodifica los valores Base64, (3) Valida el contenido decodificado, (4) Usa en tu aplicación o script. Este patrón ayuda a separar datos sensibles del código mientras los mantiene en archivos de configuración basados en texto.</p>
    </div>
</div>

<h4 class="text-xl font-semibold mb-3 mt-6">Contexto Histórico y Estándares</h4>
<p class="mb-4">Base64 fue diseñado originalmente en 1987 como parte del estándar MIME (Multipurpose Internet Mail Extensions), documentado en RFC 2045. La necesidad surgió porque los sistemas de email de esa época solo podían transmitir confiablemente texto ASCII de 7 bits, haciendo imposible enviar archivos adjuntos binarios como imágenes o documentos. Base64 proporcionó una solución codificando datos binarios de 8 bits en caracteres ASCII de 7 bits.</p>

<p class="mb-4">Con el tiempo, Base64 se convirtió en un bloque fundamental de la web moderna. Ahora está especificado en RFC 4648 (2006), que define ambas variantes: estándar y URL-safe. Hoy, Base64 se usa mucho más allá del email: en JSON Web Tokens (JWT), Data URIs, autenticación API, recursos incrustados y incontables otras aplicaciones donde los datos binarios necesitan representación de texto.</p>

<p class="mb-4">La longevidad y ubicuidad de la codificación demuestran su elegancia simple - a pesar del overhead del 33%, la compatibilidad universal y facilidad de implementación lo hacen irremplazable en muchos escenarios. Los estándares web modernos continúan dependiendo de Base64, y sigue siendo una habilidad crítica para desarrolladores trabajando con APIs web, transmisión de datos y aplicaciones basadas en navegador.</p>
`
};
