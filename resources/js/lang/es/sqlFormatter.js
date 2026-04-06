export default {
    'sqlFormatter.title': 'Formateador SQL',
    'sqlFormatter.description': 'Formatea y embellece consultas SQL con sangría apropiada.',
    'sqlFormatter.auto_format': 'Auto Formato',
    'sqlFormatter.indentation': 'Sangría:',
    'sqlFormatter.spaces': 'Espacios',
    'sqlFormatter.tabs': 'Tabs',
    'sqlFormatter.size': 'Tamaño:',
    'sqlFormatter.load_file': 'Cargar archivo:',
    'sqlFormatter.sql_input': 'Entrada SQL',
    'sqlFormatter.sql_input_placeholder': 'Ingrese la consulta SQL...',
    'sqlFormatter.formatted_sql': 'SQL Formateado',
    'sqlFormatter.format_sql': 'Formato SQL',
    'sqlFormatter.copy_formatted': 'Copiar Formateado',
    'sqlFormatter.minify': 'Minificar',
    'sqlFormatter.download_sql': 'Descargar SQL',
    'sqlFormatter.clear_all': 'Limpiar Todo',
    'sqlFormatter.sample_sql_queries': 'Consultas SQL de Ejemplo',
    'sqlFormatter.simple_select': 'SELECT Simple',
    'sqlFormatter.basic_query_with_where_clause': 'Consulta básica con cláusula WHERE',
    'sqlFormatter.join_query': 'Consulta JOIN',
    'sqlFormatter.multiple_table_joins': 'Múltiples joins de tabla',
    'sqlFormatter.complex_query': 'Consulta Compleja',
    'sqlFormatter.subqueries_and_functions': 'Subconsultas y funciones',
    'sqlFormatter.aggregate_functions': 'Funciones de Agregación',
    'sqlFormatter.group_by_with_aggregates': 'GROUP BY con agregados',
    'sqlFormatter.keywords': 'Palabras clave',
    'sqlFormatter.tables': 'Tablas',
    'sqlFormatter.columns': 'Columnas',
    'sqlFormatter.functions': 'Funciones',
    'sqlFormatter.characters': 'Caracteres:',
    'sqlFormatter.lines': 'Líneas:',
    'sqlFormatter.formatted_sql_will_appear_here': 'El SQL formateado aparecerá aquí...',
    
    // SEO Content specific to SQL formatter
    'sqlFormatter.mainDescription': 'Formateador SQL online gratuito con resaltado de sintaxis, auto-formateo, control de sangría y estadísticas de consulta. Perfecto para desarrolladores de bases de datos y optimización de consultas SQL.',
    'sqlFormatter.extendedDescription': 'Nuestra herramienta comprehensiva de formateo SQL te ayuda a formatear, embellecer y analizar consultas SQL con características avanzadas. Incluye formateo en tiempo real, resaltado de sintaxis, inserción de palabras clave, estadísticas de consulta y soporte para estructuras SQL complejas. Todas las operaciones ocurren en tu navegador para completa privacidad.',
    'sqlFormatter.features': [
        {
            title: 'Formateo SQL en Tiempo Real',
            description: 'Formatea consultas SQL instantáneamente mientras escribes con sangría personalizable y auto-formateo'
        },
        {
            title: 'Resaltado de Sintaxis',
            description: 'Resaltado de sintaxis SQL codificado por colores para mejor legibilidad y detección de errores'
        },
        {
            title: 'Múltiples Estilos de Sangría',
            description: 'Elige entre espacios o tabs con tamaño de sangría personalizable (2, 4 u 8)'
        },
        {
            title: 'Inserción de Palabras Clave SQL',
            description: 'Inserta rápidamente palabras clave SQL comunes como SELECT, FROM, WHERE, JOIN, GROUP BY'
        },
        {
            title: 'Estadísticas de Consulta',
            description: 'Análisis en tiempo real mostrando conteo de palabras clave, tablas, columnas y funciones usadas'
        },
        {
            title: 'Soporte de Carga de Archivos',
            description: 'Carga archivos SQL directamente desde tu dispositivo para formateo rápido'
        },
        {
            title: 'Minificación SQL',
            description: 'Remueve espacios en blanco innecesarios para reducir el tamaño de archivo SQL para producción'
        },
        {
            title: 'Consultas de Ejemplo',
            description: 'Consultas SQL incorporadas para propósitos de aprendizaje y prueba'
        },
        {
            title: 'Copiar y Descargar',
            description: 'Copia SQL formateado al portapapeles con un clic o descarga como archivo .sql'
        },
        {
            title: 'Soporte de Consultas Complejas',
            description: 'Maneja SQL complejo con subconsultas, joins, funciones de agregación y estructuras anidadas'
        }
    ],
    'sqlFormatter.steps': [
        'Ingresa o pega tu consulta SQL en el área de entrada',
        'Configura opciones de formateo (auto-formateo, tipo de sangría y tamaño)',
        'Usa botones de palabras clave para insertar rápidamente sentencias SQL comunes',
        'Haz clic en "Formato SQL" o habilita auto-formateo para formateo en tiempo real',
        'Ve las estadísticas de consulta incluyendo palabras clave, tablas, columnas y funciones',
        'Copia SQL formateado al portapapeles o descarga como archivo .sql'
    ],
    'sqlFormatter.examples': [
        {
            title: 'Consulta SELECT Compleja',
            description: 'Formatea una consulta SELECT compleja con JOINs y cláusulas WHERE',
            code: 'Entrada: SELECT u.name, u.email, p.title, p.created_at FROM users u JOIN posts p ON u.id = p.user_id WHERE u.status = \'active\' AND p.published = true ORDER BY p.created_at DESC LIMIT 10',
            result: 'SQL formateado con sangría apropiada y saltos de línea para mejor legibilidad'
        },
        {
            title: 'Consulta Multi-Tabla con Agregación',
            description: 'Formatea consulta SQL con GROUP BY y funciones de agregación',
            code: 'Entrada: SELECT c.name, COUNT(o.id) as order_count, SUM(o.total) as revenue FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.created_at >= \'2024-01-01\' GROUP BY c.id, c.name HAVING COUNT(o.id) > 5 ORDER BY revenue DESC',
            result: 'SQL formateado con estructura apropiada para funciones de agregación y cláusulas GROUP BY',
            steps: [
                'Pega consulta SQL compleja con agregación',
                'Elige sangría de 4 espacios para mejor legibilidad',
                'Habilita auto-formateo para formateo en tiempo real',
                'Copia SQL formateado para documentación o compartir'
            ]
        },
        {
            title: 'Subconsulta con Funciones',
            description: 'Formatea SQL con subconsultas y funciones de agregación',
            code: 'Entrada: SELECT e.name, e.salary, d.department_name, (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) as avg_salary FROM employees e LEFT JOIN departments d ON e.department_id = d.id WHERE e.salary > (SELECT AVG(salary) FROM employees) AND EXISTS (SELECT 1 FROM projects p WHERE p.employee_id = e.id AND p.status = \'active\') ORDER BY e.salary DESC',
            result: 'SQL formateado con sangría de subconsulta apropiada y resaltado de funciones'
        }
    ],
    'sqlFormatter.useCases': [
        {
            title: 'Desarrollo de Base de Datos',
            description: 'Desarrolladores de bases de datos formateando y optimizando consultas SQL para mejor rendimiento',
            example: 'DBA formateando consultas complejas para optimización de base de datos de producción'
        },
        {
            title: 'Desarrollo de Aplicaciones',
            description: 'Desarrolladores backend formateando consultas SQL para acceso a datos de aplicación',
            example: 'Desarrollador backend formateando SQL generado por ORM para depuración y optimización'
        },
        {
            title: 'Análisis de Datos',
            description: 'Analistas de datos formateando consultas SQL para reportes e inteligencia de negocios',
            example: 'Analista de datos formateando consultas analíticas complejas para reportes de negocios'
        },
        {
            title: 'Revisión de Código',
            description: 'Equipos de desarrollo revisando y estandarizando formateo de código SQL',
            example: 'Líder técnico asegurando formateo SQL consistente a través de proyectos de equipo'
        },
        {
            title: 'Documentación',
            description: 'Escritores técnicos formateando ejemplos SQL para documentación y tutoriales',
            example: 'Escritor técnico formateando consultas SQL para documentación de desarrolladores'
        },
        {
            title: 'Aprendizaje SQL',
            description: 'Estudiantes y principiantes aprendiendo sintaxis SQL y estructura de consultas',
            example: 'Estudiante formateando consultas SQL para entender estructura y sintaxis apropiadas'
        }
    ],
    'sqlFormatter.technicalDetails': 'Nuestro formateador SQL usa algoritmos avanzados de análisis para formatear y analizar consultas SQL con sangría apropiada, resaltado de palabras clave y validación de estructura. La herramienta soporta sintaxis SQL estándar incluyendo SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY y funciones de agregación. Todo el procesamiento ocurre localmente usando JavaScript moderno.',
    'sqlFormatter.bestPractices': [
        {
            title: 'Sangría Consistente',
            tip: 'Usa sangría consistente (2 o 4 espacios) a través de tus consultas SQL para mejor legibilidad.'
        },
        {
            title: 'Capitalización de Palabras Clave',
            tip: 'Sigue convenciones SQL para capitalizar palabras clave (SELECT, FROM, WHERE) para mejorar la legibilidad del código.'
        },
        {
            title: 'Estructura de Consulta',
            tip: 'Divide consultas complejas en partes lógicas con sangría apropiada para más fácil depuración.'
        },
        {
            title: 'Consideraciones de Rendimiento',
            tip: 'Usa el formateador para identificar problemas potenciales de rendimiento en consultas complejas antes de la ejecución.'
        }
    ],
    'sqlFormatter.commonErrors': [
        {
            error: 'Sintaxis SQL Inválida',
            cause: 'Palabras clave faltantes, nombres de tabla incorrectos o estructura SQL malformada',
            solution: 'Verifica palabras clave faltantes como FROM, WHERE o nombres de tabla/columna incorrectos. Usa el formateador para identificar problemas de sintaxis.',
            prevention: 'Usa linters SQL en tu IDE y valida consultas antes de la ejecución.'
        },
        {
            error: 'Falla en Carga de Archivo',
            cause: 'Formato de archivo inválido o archivo SQL corrupto',
            solution: 'Asegura que el archivo sea un archivo SQL válido con sintaxis apropiada. Intenta abrir el archivo en un editor de texto primero.',
            prevention: 'Valida archivos SQL antes de subir y asegura extensiones de archivo apropiadas (.sql).'
        },
        {
            error: 'Procesamiento de Consulta Grande',
            cause: 'Consultas SQL muy grandes causando problemas de rendimiento del navegador',
            solution: 'Usa consultas más pequeñas o procesa en partes. Considera usar un navegador más potente o herramienta de escritorio.',
            prevention: 'Divide consultas grandes en partes más pequeñas manejables para mejor rendimiento.'
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
            cause: 'Archivo SQL contiene codificación de caracteres inválida',
            solution: 'Asegura que los archivos SQL se guarden con codificación UTF-8. Usa un editor de texto para verificar la codificación del archivo.',
            prevention: 'Siempre guarda archivos SQL con codificación UTF-8 para evitar problemas de caracteres.'
        }
    ],
    'sqlFormatter.alternatives': [
        {
            name: 'Formateadores SQL de IDE',
            useCase: 'Formateo SQL incorporado en herramientas de base de datos como DBeaver, SQL Server Management Studio',
            pros: 'Integrado con flujo de trabajo de desarrollo, Características avanzadas, Sin dependencia de internet',
            cons: 'Requiere instalación de IDE, Curva de aprendizaje para características avanzadas',
            comparison: 'Nuestra herramienta ofrece formateo instantáneo sin requisitos de instalación.'
        },
        {
            name: 'Validadores SQL Online',
            useCase: 'Servicios de validación y formateo SQL basados en la nube',
            pros: 'Acceso multiplataforma, Validación avanzada, Características de colaboración',
            cons: 'Preocupaciones de privacidad, Dependencia de internet, Costos de suscripción',
            comparison: 'Nuestra herramienta procesa localmente para completa privacidad y sin costo.'
        },
        {
            name: 'Herramientas de Gestión de Base de Datos',
            useCase: 'Herramientas profesionales de base de datos con formateo de consultas incorporado',
            pros: 'Características avanzadas, Integración con bases de datos, Soporte profesional',
            cons: 'Licencias caras, Interfaz compleja, Instalación requerida',
            comparison: 'Nuestra herramienta es gratuita y no requiere instalación.'
        },
        {
            name: 'Herramientas de Línea de Comandos',
            useCase: 'Herramientas de desarrollador para formateo SQL vía terminal',
            pros: 'Programable, Procesamiento rápido, Integración con flujos de trabajo',
            cons: 'Configuración técnica requerida, Sin GUI, Curva de aprendizaje',
            comparison: 'Nuestra herramienta proporciona interfaz amigable sin configuración técnica.'
        }
    ],
    'sqlFormatter.relatedTools': [
        {
            name: 'Validador SQL',
            description: 'Valida sintaxis y estructura SQL',
            url: '/sql-validator'
        },
        {
            name: 'Minificador SQL',
            description: 'Minifica consultas SQL para reducir tamaño',
            url: '/sql-minifier'
        },
        {
            name: 'SQL a JSON',
            description: 'Convierte consultas SQL a formato JSON',
            url: '/sql-to-json'
        },
        {
            name: 'JSON a SQL',
            description: 'Convierte datos JSON a consultas SQL',
            url: '/json-to-sql'
        },
        {
            name: 'Constructor SQL',
            description: 'Herramienta visual de construcción de consultas SQL',
            url: '/sql-builder'
        },
        {
            name: 'Diseñador de Esquema de Base de Datos',
            description: 'Diseña esquemas de base de datos y relaciones',
            url: '/database-designer'
        },
        {
            name: 'Optimizador de Consultas',
            description: 'Optimiza consultas SQL para mejor rendimiento',
            url: '/query-optimizer'
        },
        {
            name: 'SQL Pretty Print',
            description: 'Formatea e imprime SQL con formateo apropiado',
            url: '/sql-pretty-print'
        }
    ],
    'sqlFormatter.faqs': [
        {
            question: '¿Qué dialectos SQL son compatibles?',
            answer: 'El formateador soporta sintaxis SQL estándar incluyendo SELECT, INSERT, UPDATE, DELETE, JOIN y funciones comunes. Funciona con la mayoría de dialectos SQL incluyendo MySQL, PostgreSQL, SQL Server y Oracle.'
        },
        {
            question: '¿Puedo personalizar la sangría?',
            answer: '¡Sí! Puedes elegir entre espacios o tabs y establecer el tamaño de sangría (2, 4 u 8 espacios).'
        },
        {
            question: '¿Soporta consultas complejas?',
            answer: '¡Sí! El formateador maneja consultas complejas con subconsultas, joins, funciones de agregación y estructuras anidadas.'
        },
        {
            question: '¿Qué son las estadísticas de consulta?',
            answer: 'Las estadísticas de consulta muestran análisis en tiempo real de tu SQL incluyendo conteo de palabras clave, referencias de tablas, uso de columnas y llamadas a funciones.'
        },
        {
            question: '¿Puedo cargar archivos SQL?',
            answer: '¡Sí! Puedes cargar archivos .sql directamente usando la entrada de archivo. La herramienta analizará y formateará el contenido del archivo automáticamente.'
        },
        {
            question: '¿Cómo funciona el auto-formateo?',
            answer: 'El auto-formateo formatea automáticamente tu SQL mientras escribes, asegurando sangría y estructura apropiadas. Puedes activar/desactivar esta característica.'
        },
        {
            question: '¿Están seguros mis datos?',
            answer: 'Todo el formateo SQL ocurre directamente en tu navegador. Tus consultas SQL nunca se suben a nuestros servidores, asegurando completa privacidad y seguridad.'
        },
        {
            question: '¿Puedo formatear archivos SQL grandes?',
            answer: 'Aunque no hay un límite estricto, archivos SQL muy grandes pueden causar problemas de rendimiento del navegador. Para archivos grandes, considera usar herramientas de escritorio o procesar en partes.'
        },
        {
            question: '¿Qué palabras clave SQL son compatibles?',
            answer: 'El formateador soporta todas las palabras clave SQL principales incluyendo SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY y funciones de agregación como COUNT, SUM, AVG.'
        },
        {
            question: '¿Puedo usar esto para desarrollo de base de datos?',
            answer: '¡Absolutamente! Esta herramienta es perfecta para formatear consultas para desarrollo, depuración, documentación y revisión de código.'
        }
    ],
    'sqlFormatter.securityNote': 'Todo el formateo SQL ocurre localmente en tu navegador usando JavaScript. No se almacenan datos en nuestros servidores, asegurando completa privacidad y seguridad.',
    'sqlFormatter.additionalContent': 'El formateo SQL es esencial para desarrollo de bases de datos, optimización de consultas y mantenimiento de código. Combina nuestro formateador con otras herramientas como validación, conversión y construcción de consultas para desarrollo comprehensivo de bases de datos.'
};
