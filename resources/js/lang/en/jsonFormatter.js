export default {
    'jsonFormatter.title': 'Free JSON Formatter & Validator Online',
    'jsonFormatter.description': 'Use this free JSON formatter to beautify, validate and minify your JSON data instantly. Perfect for developers working with APIs and debugging JSON responses.',
    'jsonFormatter.load_file': 'Load file:',
    'jsonFormatter.indent': 'Indent:',
    'jsonFormatter.two_spaces': '2 spaces',
    'jsonFormatter.four_spaces': '4 spaces',
    'jsonFormatter.none': 'None',
    'jsonFormatter.auto_format': 'Auto-format',
    'jsonFormatter.input_json': 'Input JSON',
    'jsonFormatter.result': 'Result',
    'jsonFormatter.format': 'Format',
    'jsonFormatter.minify': 'Minify',
    'jsonFormatter.copy': 'Copy',
    'jsonFormatter.download': 'Download',
    'jsonFormatter.clear': 'Clear',
    
    // SEO Content specific to JSON formatter
    'jsonFormatter.mainDescription': 'Free online JSON formatter with validation, beautification, minification, and real-time formatting. Perfect for developers working with APIs and debugging JSON.',
    'jsonFormatter.extendedDescription': 'Our comprehensive JSON formatter tool helps you format, validate, and minify JSON data with advanced features. Includes real-time validation, syntax highlighting, auto-formatting, indentation control, and secure local processing. All operations happen in your browser for complete privacy.',
    'jsonFormatter.features': [
        {
            title: 'Real-time Validation',
            description: 'Instantly validate JSON syntax with error highlighting and line numbers'
        },
        {
            title: 'JSON Beautification',
            description: 'Format JSON with proper indentation and structure for better readability'
        },
        {
            title: 'JSON Minification',
            description: 'Remove unnecessary whitespace to reduce JSON file size for production'
        },
        {
            title: 'Auto-format Detection',
            description: 'Automatically format JSON as you type with customizable indentation settings'
        },
        {
            title: 'File Upload Support',
            description: 'Load JSON files directly from your device for quick processing'
        },
        {
            title: 'Syntax Highlighting',
            description: 'Color-coded syntax highlighting for easy JSON structure visualization'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy formatted JSON to clipboard for easy sharing'
        },
        {
            title: 'Download Options',
            description: 'Download formatted or minified JSON with proper file extensions'
        },
        {
            title: 'Indentation Control',
            description: 'Choose between 2 spaces, 4 spaces, or no indentation'
        },
        {
            title: 'Error Detection',
            description: 'Comprehensive error reporting with line numbers and detailed messages'
        }
    ],
    'jsonFormatter.steps': [
        'Paste or load your JSON into the input editor',
        'Choose your preferred indentation style (2 spaces, 4 spaces, or none)',
        'Enable auto-format to format JSON as you type',
        'Click "Format" to beautify your JSON with proper indentation',
        'Click "Minify" to remove unnecessary whitespace and reduce file size',
        'Copy the result to clipboard or download as a JSON file',
        'Use the formatted JSON in your applications or API development'
    ],
    'jsonFormatter.examples': [
        {
            title: 'Formatting API Response',
            description: 'Format a messy API response to make it readable',
            code: 'Input: {"user":{"id":123,"name":"John","email":"john@example.com","address":{"street":"123 Main St","city":"New York","zip":"10001"}}}',
            result: 'Formatted JSON with proper indentation and structure'
        },
        {
            title: 'Minifying for Production',
            description: 'Remove unnecessary spaces to reduce file size',
            code: 'Input: {"name":"My App","version":"1.0.0","dependencies":{"vue":"^3.0.0","axios":"^0.24.0"}}',
            result: '{"name":"My App","version":"1.0.0","dependencies":{"vue":"^3.0.0","axios":"^0.24.0"}}',
            steps: [
                'Paste your formatted JSON',
                'Set indentation to "None"',
                'Click "Minify" button',
                'Copy compact result for production use'
            ]
        },
        {
            title: 'Debugging JSON Syntax',
            description: 'Identify and fix JSON syntax errors',
            code: 'Input: {"users":[{"name":"Alice","age":30},{"name":"Bob","age":25}',
            result: 'Error detected: Missing closing bracket, proper error highlighting shown'
        }
    ],
    'jsonFormatter.useCases': [
        {
            title: 'API Development',
            description: 'Developers formatting API responses and debugging JSON data',
            example: 'Backend developer formatting API responses for frontend consumption'
        },
        {
            title: 'Frontend Development',
            description: 'Frontend developers processing API responses and configuration files',
            example: 'React developer formatting configuration JSON files for application settings'
        },
        {
            title: 'Data Analysis',
            description: 'Data analysts formatting and validating JSON datasets for analysis',
            example: 'Data scientist formatting JSON data from APIs for data analysis'
        },
        {
            title: 'Configuration Management',
            description: 'DevOps engineers managing configuration files and deployment settings',
            example: 'DevOps engineer formatting JSON configuration files for cloud deployment'
        },
        {
            title: 'Mobile App Development',
            description: 'Mobile developers handling JSON data from APIs and local storage',
            example: 'React Native developer formatting JSON responses from backend APIs'
        },
        {
            title: 'Documentation',
            description: 'Technical writers formatting JSON examples for documentation',
            example: 'Technical writer formatting API response examples for developer documentation'
        }
    ],
    'jsonFormatter.technicalDetails': 'Our JSON formatter uses advanced JavaScript parsing and formatting algorithms to validate and beautify JSON data. The tool provides real-time syntax validation, error detection, indentation control, and minification capabilities. All processing happens locally using modern JavaScript and JSON APIs.',
    'jsonFormatter.bestPractices': [
        {
            title: 'JSON Validation',
            tip: 'Always validate JSON before using it in production. The tool provides real-time validation to catch syntax errors early.'
        },
        {
            title: 'Indentation Consistency',
            tip: 'Use consistent indentation (2 or 4 spaces) throughout your project for better code readability.'
        },
        {
            title: 'Minification for Production',
            tip: 'Minify JSON files for production to reduce file size and improve loading times.'
        },
        {
            title: 'Error Checking',
            tip: 'Pay attention to error messages and fix syntax issues before using JSON in applications.'
        }
    ],
    'jsonFormatter.commonErrors': [
        {
            error: 'Invalid JSON Syntax',
            cause: 'Missing commas, incorrect brackets, or trailing commas in JSON structure',
            solution: 'Check for missing commas, unmatched brackets, or trailing commas. Use the validation feature to identify specific issues.',
            prevention: 'Use a JSON linter in your IDE and validate JSON before committing to code.'
        },
        {
            error: 'File Upload Failed',
            cause: 'Invalid file format or corrupted JSON file',
            solution: 'Ensure the file is a valid JSON file with proper syntax. Try opening the file in a text editor first.',
            prevention: 'Validate JSON files before uploading and ensure proper file extensions (.json).'
        },
        {
            error: 'Large JSON Processing',
            cause: 'Very large JSON files causing browser performance issues',
            solution: 'Use smaller JSON files or process in chunks. Consider using a more powerful browser or desktop tool.',
            prevention: 'Break large JSON files into smaller manageable chunks for better performance.'
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
            cause: 'JSON file contains invalid character encoding',
            solution: 'Ensure JSON files are saved with UTF-8 encoding. Use a text editor to verify file encoding.',
            prevention: 'Always save JSON files with UTF-8 encoding to avoid character issues.'
        }
    ],
    'jsonFormatter.alternatives': [
        {
            name: 'IDE JSON Formatters',
            useCase: 'Built-in JSON formatting in code editors like VS Code, WebStorm',
            pros: 'Integrated with development workflow, Advanced features, No internet dependency',
            cons: 'Requires IDE installation, Learning curve for advanced features',
            comparison: 'Our tool offers instant formatting without installation requirements.'
        },
        {
            name: 'Online JSON Validators',
            useCase: 'Cloud-based JSON validation and formatting services',
            pros: 'Cross-platform access, Advanced validation, Collaboration features',
            cons: 'Privacy concerns, Internet dependency, Subscription costs',
            comparison: 'Our tool processes locally for complete privacy and no cost.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Developer tools for JSON formatting via terminal',
            pros: 'Scriptable, Fast processing, Integration with workflows',
            cons: 'Technical setup required, No GUI, Learning curve',
            comparison: 'Our tool provides user-friendly interface with no technical setup.'
        },
        {
            name: 'Browser Extensions',
            useCase: 'Browser add-ons for JSON formatting and validation',
            pros: 'Quick access from any webpage, Integration with browser, Context menu options',
            cons: 'Browser-specific, Limited functionality, Privacy concerns with some extensions',
            comparison: 'Our tool works independently and protects your privacy.'
        }
    ],
    'jsonFormatter.relatedTools': [
        {
            name: 'JSON Validator',
            description: 'Validate JSON syntax and structure',
            url: '/json-validator'
        },
        {
            name: 'JSON Minifier',
            description: 'Minify JSON files to reduce size',
            url: '/json-minifier'
        },
        {
            name: 'XML to JSON',
            description: 'Convert XML data to JSON format',
            url: '/xml-to-json'
        },
        {
            name: 'CSV to JSON',
            description: 'Convert CSV data to JSON format',
            url: '/csv-to-json'
        },
        {
            name: 'YAML to JSON',
            description: 'Convert YAML files to JSON format',
            url: '/yaml-to-json'
        },
        {
            name: 'JSON to XML',
            description: 'Convert JSON data to XML format',
            url: '/json-to-xml'
        },
        {
            name: 'JSON Pretty Print',
            description: 'Format and print JSON with proper formatting',
            url: '/json-pretty-print'
        }
    ],
    'jsonFormatter.faqs': [
        {
            question: 'What is JSON?',
            answer: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format used by APIs and web applications. It\'s easy for humans to read and write for machines to parse and generate.'
        },
        {
            question: 'Why should I format JSON?',
            answer: 'Formatting JSON makes it easier to read, debug, and maintain. Proper indentation helps identify structure issues and improves code readability.'
        },
        {
            question: 'What is JSON minification?',
            answer: 'Minification removes unnecessary whitespace (spaces, tabs, newlines) from JSON to reduce file size. This improves loading times in production environments.'
        },
        {
            question: 'Can I load JSON files?',
            answer: 'Yes! You can load .json files directly using the file input. The tool will parse and format the file content automatically.'
        },
        {
            question: 'How does auto-format work?',
            answer: 'Auto-format automatically formats your JSON as you type, ensuring proper indentation and structure. You can toggle this feature on/off.'
        },
        {
            question: 'What indentation options are available?',
            answer: 'You can choose between 2 spaces, 4 spaces, or no indentation. 2 spaces is the most common standard for JSON formatting.'
        },
        {
            question: 'Is my data secure?',
            answer: 'All JSON formatting happens directly in your browser. Your JSON data is never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'Can I format large JSON files?',
            answer: 'While there\'s no strict limit, very large JSON files may cause browser performance issues. For large files, consider using desktop tools or processing in chunks.'
        },
        {
            question: 'What errors can the formatter detect?',
            answer: 'The formatter can detect syntax errors including missing commas, unmatched brackets, trailing commas, invalid characters, and structural issues.'
        },
        {
            question: 'Can I use this for API development?',
            answer: 'Absolutely! This tool is perfect for formatting API responses, debugging JSON data, and preparing configuration files for development.'
        }
    ],
    'jsonFormatter.securityNote': 'All JSON formatting happens locally in your browser using JavaScript. No data is stored on our servers, ensuring complete privacy and security.',
    'jsonFormatter.additionalContent': 'JSON formatting is essential for API development, configuration management, and data exchange. Combine our formatter with other tools like validation, conversion, and minification for comprehensive data processing.'
};
