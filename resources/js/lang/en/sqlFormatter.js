export default {
    'sqlFormatter.title': 'SQL Formatter',
    'sqlFormatter.description': 'Format and beautify SQL queries with proper indentation.',
    'sqlFormatter.auto_format': 'Auto Format',
    'sqlFormatter.indentation': 'Indentation:',
    'sqlFormatter.spaces': 'Spaces',
    'sqlFormatter.tabs': 'Tabs',
    'sqlFormatter.size': 'Size:',
    'sqlFormatter.load_file': 'Load file:',
    'sqlFormatter.sql_input': 'SQL Input',
    'sqlFormatter.sql_input_placeholder': 'Enter SQL query...',
    'sqlFormatter.formatted_sql': 'Formatted SQL',
    'sqlFormatter.format_sql': 'Format SQL',
    'sqlFormatter.copy_formatted': 'Copy Formatted',
    'sqlFormatter.minify': 'Minify',
    'sqlFormatter.download_sql': 'Download SQL',
    'sqlFormatter.clear_all': 'Clear All',
    'sqlFormatter.sample_sql_queries': 'Sample SQL Queries',
    'sqlFormatter.simple_select': 'Simple SELECT',
    'sqlFormatter.basic_query_with_where_clause': 'Basic query with WHERE clause',
    'sqlFormatter.join_query': 'JOIN Query',
    'sqlFormatter.multiple_table_joins': 'Multiple table joins',
    'sqlFormatter.complex_query': 'Complex Query',
    'sqlFormatter.subqueries_and_functions': 'Subqueries and functions',
    'sqlFormatter.aggregate_functions': 'Aggregate Functions',
    'sqlFormatter.group_by_with_aggregates': 'GROUP BY with aggregates',
    'sqlFormatter.keywords': 'Keywords',
    'sqlFormatter.tables': 'Tables',
    'sqlFormatter.columns': 'Columns',
    'sqlFormatter.functions': 'Functions',
    'sqlFormatter.characters': 'Characters:',
    'sqlFormatter.lines': 'Lines:',
    'sqlFormatter.formatted_sql_will_appear_here': 'Formatted SQL will appear here...',
    
    // SEO Content specific to SQL formatter
    'sqlFormatter.mainDescription': 'Free online SQL formatter with syntax highlighting, auto-formatting, indentation control, and query statistics. Perfect for database developers and SQL query optimization.',
    'sqlFormatter.extendedDescription': 'Our comprehensive SQL formatter tool helps you format, beautify, and analyze SQL queries with advanced features. Includes real-time formatting, syntax highlighting, keyword insertion, query statistics, and support for complex SQL structures. All operations happen in your browser for complete privacy.',
    'sqlFormatter.features': [
        {
            title: 'Real-time SQL Formatting',
            description: 'Format SQL queries instantly as you type with customizable indentation and auto-formatting'
        },
        {
            title: 'Syntax Highlighting',
            description: 'Color-coded SQL syntax highlighting for better readability and error detection'
        },
        {
            title: 'Multiple Indentation Styles',
            description: 'Choose between spaces or tabs with customizable indentation size (2, 4, or 8)'
        },
        {
            title: 'SQL Keyword Insertion',
            description: 'Quick insert commonly used SQL keywords like SELECT, FROM, WHERE, JOIN, GROUP BY'
        },
        {
            title: 'Query Statistics',
            description: 'Real-time analysis showing keywords count, tables, columns, and functions used'
        },
        {
            title: 'File Upload Support',
            description: 'Load SQL files directly from your device for quick formatting'
        },
        {
            title: 'SQL Minification',
            description: 'Remove unnecessary whitespace to reduce SQL file size for production'
        },
        {
            title: 'Sample Queries',
            description: 'Built-in sample SQL queries for learning and testing purposes'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy formatted SQL to clipboard or download as .sql file'
        },
        {
            title: 'Complex Query Support',
            description: 'Handles complex SQL with subqueries, joins, aggregate functions, and nested structures'
        }
    ],
    'sqlFormatter.steps': [
        'Enter or paste your SQL query in the input area',
        'Configure formatting options (auto-format, indentation type, and size)',
        'Use keyword buttons to quickly insert common SQL statements',
        'Click "Format SQL" or enable auto-format for real-time formatting',
        'View query statistics including keywords, tables, columns, and functions',
        'Copy formatted SQL to clipboard or download as a .sql file'
    ],
    'sqlFormatter.examples': [
        {
            title: 'Complex SELECT Query',
            description: 'Format a complex SELECT query with JOINs and WHERE clauses',
            code: 'Input: SELECT u.name, u.email, p.title, p.created_at FROM users u JOIN posts p ON u.id = p.user_id WHERE u.status = \'active\' AND p.published = true ORDER BY p.created_at DESC LIMIT 10',
            result: 'Formatted SQL with proper indentation and line breaks for readability'
        },
        {
            title: 'Multi-Table Query with Aggregation',
            description: 'Format SQL query with GROUP BY and aggregate functions',
            code: 'Input: SELECT c.name, COUNT(o.id) as order_count, SUM(o.total) as revenue FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.created_at >= \'2024-01-01\' GROUP BY c.id, c.name HAVING COUNT(o.id) > 5 ORDER BY revenue DESC',
            result: 'Formatted SQL with proper structure for aggregate functions and GROUP BY clauses',
            steps: [
                'Paste complex SQL query with aggregation',
                'Choose 4-space indentation for better readability',
                'Enable auto-format for real-time formatting',
                'Copy formatted SQL for documentation or sharing'
            ]
        },
        {
            title: 'Subquery with Functions',
            description: 'Format SQL with subqueries and aggregate functions',
            code: 'Input: SELECT e.name, e.salary, d.department_name, (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) as avg_salary FROM employees e LEFT JOIN departments d ON e.department_id = d.id WHERE e.salary > (SELECT AVG(salary) FROM employees) AND EXISTS (SELECT 1 FROM projects p WHERE p.employee_id = e.id AND p.status = \'active\') ORDER BY e.salary DESC',
            result: 'Formatted SQL with proper subquery indentation and function highlighting'
        }
    ],
    'sqlFormatter.useCases': [
        {
            title: 'Database Development',
            description: 'Database developers formatting and optimizing SQL queries for better performance',
            example: 'DBA formatting complex queries for production database optimization'
        },
        {
            title: 'Application Development',
            description: 'Backend developers formatting SQL queries for application data access',
            example: 'Backend developer formatting ORM-generated SQL for debugging and optimization'
        },
        {
            title: 'Data Analysis',
            description: 'Data analysts formatting SQL queries for reporting and business intelligence',
            example: 'Data analyst formatting complex analytical queries for business reports'
        },
        {
            title: 'Code Review',
            description: 'Development teams reviewing and standardizing SQL code formatting',
            example: 'Tech lead ensuring consistent SQL formatting across team projects'
        },
        {
            title: 'Documentation',
            description: 'Technical writers formatting SQL examples for documentation and tutorials',
            example: 'Technical writer formatting SQL queries for developer documentation'
        },
        {
            title: 'Learning SQL',
            description: 'Students and beginners learning SQL syntax and query structure',
            example: 'Student formatting SQL queries to understand proper structure and syntax'
        }
    ],
    'sqlFormatter.technicalDetails': 'Our SQL formatter uses advanced parsing algorithms to analyze and format SQL queries with proper indentation, keyword highlighting, and structure validation. The tool supports standard SQL syntax including SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, and aggregate functions. All processing happens locally using modern JavaScript.',
    'sqlFormatter.bestPractices': [
        {
            title: 'Consistent Indentation',
            tip: 'Use consistent indentation (2 or 4 spaces) throughout your SQL queries for better readability.'
        },
        {
            title: 'Keyword Capitalization',
            tip: 'Follow SQL conventions for capitalizing keywords (SELECT, FROM, WHERE) to improve code readability.'
        },
        {
            title: 'Query Structure',
            tip: 'Break complex queries into logical parts with proper indentation for easier debugging.'
        },
        {
            title: 'Performance Considerations',
            tip: 'Use the formatter to identify potential performance issues in complex queries before execution.'
        }
    ],
    'sqlFormatter.commonErrors': [
        {
            error: 'Invalid SQL Syntax',
            cause: 'Missing keywords, incorrect table names, or malformed SQL structure',
            solution: 'Check for missing keywords like FROM, WHERE, or incorrect table/column names. Use the formatter to identify syntax issues.',
            prevention: 'Use SQL linters in your IDE and validate queries before execution.'
        },
        {
            error: 'File Upload Failed',
            cause: 'Invalid file format or corrupted SQL file',
            solution: 'Ensure the file is a valid SQL file with proper syntax. Try opening the file in a text editor first.',
            prevention: 'Validate SQL files before uploading and ensure proper file extensions (.sql).'
        },
        {
            error: 'Large Query Processing',
            cause: 'Very large SQL queries causing browser performance issues',
            solution: 'Use smaller queries or process in parts. Consider using a more powerful browser or desktop tool.',
            prevention: 'Break large queries into smaller manageable parts for better performance.'
        },
        {
            error: 'Clipboard Access Denied',
            cause: 'Browser security restrictions preventing clipboard access',
            solution: 'Use manual copy-paste or try a different browser. Ensure HTTPS connection for clipboard access.',
            prevention: 'Use modern browsers and ensure proper security context for clipboard operations.'
        },
        {
            error: 'Download Failed',
            cause: 'Browser download issues or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space.',
            prevention: 'Clear browser cache and verify download permissions.'
        },
        {
            error: 'Encoding Issues',
            cause: 'SQL file contains invalid character encoding',
            solution: 'Ensure SQL files are saved with UTF-8 encoding. Use a text editor to verify file encoding.',
            prevention: 'Always save SQL files with UTF-8 encoding to avoid character issues.'
        }
    ],
    'sqlFormatter.alternatives': [
        {
            name: 'IDE SQL Formatters',
            useCase: 'Built-in SQL formatting in database tools like DBeaver, SQL Server Management Studio',
            pros: 'Integrated with development workflow, Advanced features, No internet dependency',
            cons: 'Requires IDE installation, Learning curve for advanced features',
            comparison: 'Our tool offers instant formatting without installation requirements.'
        },
        {
            name: 'Online SQL Validators',
            useCase: 'Cloud-based SQL validation and formatting services',
            pros: 'Cross-platform access, Advanced validation, Collaboration features',
            cons: 'Privacy concerns, Internet dependency, Subscription costs',
            comparison: 'Our tool processes locally for complete privacy and no cost.'
        },
        {
            name: 'Database Management Tools',
            useCase: 'Professional database tools with built-in query formatting',
            pros: 'Advanced features, Integration with databases, Professional support',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool is free and requires no installation.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Developer tools for SQL formatting via terminal',
            pros: 'Scriptable, Fast processing, Integration with workflows',
            cons: 'Technical setup required, No GUI, Learning curve',
            comparison: 'Our tool provides user-friendly interface with no technical setup.'
        }
    ],
    'sqlFormatter.relatedTools': [
        {
            name: 'SQL Validator',
            description: 'Validate SQL syntax and structure',
            url: '/sql-validator'
        },
        {
            name: 'SQL Minifier',
            description: 'Minify SQL queries to reduce size',
            url: '/sql-minifier'
        },
        {
            name: 'SQL to JSON',
            description: 'Convert SQL queries to JSON format',
            url: '/sql-to-json'
        },
        {
            name: 'JSON to SQL',
            description: 'Convert JSON data to SQL queries',
            url: '/json-to-sql'
        },
        {
            name: 'SQL Builder',
            description: 'Visual SQL query builder tool',
            url: '/sql-builder'
        },
        {
            name: 'Database Schema Designer',
            description: 'Design database schemas and relationships',
            url: '/database-designer'
        },
        {
            name: 'Query Optimizer',
            description: 'Optimize SQL queries for better performance',
            url: '/query-optimizer'
        },
        {
            name: 'SQL Pretty Print',
            description: 'Format and print SQL with proper formatting',
            url: '/sql-pretty-print'
        }
    ],
    'sqlFormatter.faqs': [
        {
            question: 'What SQL dialects are supported?',
            answer: 'The formatter supports standard SQL syntax including SELECT, INSERT, UPDATE, DELETE, JOIN, and common functions. It works with most SQL dialects including MySQL, PostgreSQL, SQL Server, and Oracle.'
        },
        {
            question: 'Can I customize the indentation?',
            answer: 'Yes! You can choose between spaces or tabs and set the indentation size (2, 4, or 8 spaces).'
        },
        {
            question: 'Does it support complex queries?',
            answer: 'Yes! The formatter handles complex queries with subqueries, joins, aggregate functions, and nested structures.'
        },
        {
            question: 'What are query statistics?',
            answer: 'Query statistics show real-time analysis of your SQL including keyword count, table references, column usage, and function calls.'
        },
        {
            question: 'Can I load SQL files?',
            answer: 'Yes! You can load .sql files directly using the file input. The tool will parse and format the file content automatically.'
        },
        {
            question: 'How does auto-format work?',
            answer: 'Auto-format automatically formats your SQL as you type, ensuring proper indentation and structure. You can toggle this feature on/off.'
        },
        {
            question: 'Is my data secure?',
            answer: 'All SQL formatting happens directly in your browser. Your SQL queries are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'Can I format large SQL files?',
            answer: 'While there\'s no strict limit, very large SQL files may cause browser performance issues. For large files, consider using desktop tools or processing in parts.'
        },
        {
            question: 'What SQL keywords are supported?',
            answer: 'The formatter supports all major SQL keywords including SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY, and aggregate functions like COUNT, SUM, AVG.'
        },
        {
            question: 'Can I use this for database development?',
            answer: 'Absolutely! This tool is perfect for formatting queries for development, debugging, documentation, and code review.'
        }
    ],
    'sqlFormatter.securityNote': 'All SQL formatting happens locally in your browser using JavaScript. No data is stored on our servers, ensuring complete privacy and security.',
    'sqlFormatter.additionalContent': 'SQL formatting is essential for database development, query optimization, and code maintenance. Combine our formatter with other tools like validation, conversion, and query building for comprehensive database development.'
};
