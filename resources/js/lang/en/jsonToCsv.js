export default {
    'jsonToCsv.title': 'JSON to CSV Converter - Free Online Tool',
    'jsonToCsv.description': 'Convert JSON array data into CSV format with history tracking and download features.',
    'jsonToCsv.load_json_file': 'Load JSON file',
    'jsonToCsv.download': 'Download',
    'jsonToCsv.save': 'Save',
    'jsonToCsv.input_json': 'Input JSON',
    'jsonToCsv.csv_output': 'CSV Output',
    'jsonToCsv.convert': 'Convert',
    'jsonToCsv.copy': 'Copy',
    'jsonToCsv.clear': 'Clear',
    'jsonToCsv.history': 'History',
    'jsonToCsv.restore': 'Restore',
    'jsonToCsv.download_all': 'Download All',
    'jsonToCsv.clear_history': 'Clear History',
    'jsonToCsv.placeholder_json': '[{"name":"John","age":30}]',
    
    // SEO Content specific to JSON to CSV
    'jsonToCsv.mainDescription': 'Free online JSON to CSV converter with automatic delimiter detection, history tracking, and batch processing capabilities.',
    'jsonToCsv.extendedDescription': 'Our comprehensive JSON to CSV converter helps you transform JSON array data into CSV format instantly. Includes automatic delimiter detection, special character handling, history tracking, and batch processing. All operations happen in your browser for complete privacy.',
    'jsonToCsv.features': [
        {
            title: 'Automatic Format Detection',
            description: 'Automatically detects JSON structure and converts to proper CSV format'
        },
        {
            title: 'Special Character Handling',
            description: 'Properly escapes commas, quotes, and newlines according to CSV standards'
        },
        {
            title: 'File Upload Support',
            description: 'Upload JSON files directly for quick conversion'
        },
        {
            title: 'Conversion History',
            description: 'Track and manage your conversion history locally'
        },
        {
            title: 'Batch Processing',
            description: 'Process multiple JSON objects in a single conversion'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for CSV results'
        },
        {
            title: 'Download Options',
            description: 'Download individual results or complete history as CSV files'
        },
        {
            title: 'Error Handling',
            description: 'Clear error messages and validation for invalid JSON input'
        }
    ],
    'jsonToCsv.steps': [
        'Enter JSON array data or upload a JSON file',
        'Click Convert to transform to CSV format',
        'Copy or download the CSV result',
        'Save to history for later reference'
    ],
    'jsonToCsv.examples': [
        {
            title: 'Simple User Data',
            description: 'Convert user information from JSON to CSV',
            code: '[{"name":"John","age":30,"city":"New York"},{"name":"Jane","age":25,"city":"Los Angeles"}]',
            result: 'name,age,city\nJohn,30,New York\nJane,25,Los Angeles',
            steps: [
                'Enter the JSON array in the input field',
                'Click "Convert" to transform to CSV',
                'Copy the CSV result for use in spreadsheets'
            ]
        },
        {
            title: 'Product Catalog',
            description: 'Convert product data for e-commerce platforms',
            code: '[{"id":1,"product":"Laptop","price":999.99,"stock":50},{"id":2,"product":"Mouse","price":29.99,"stock":200}]',
            result: 'id,product,price,stock\n1,Laptop,999.99,50\n2,Mouse,29.99,200',
            steps: [
                'Paste product JSON data',
                'Convert to CSV for inventory management',
                'Download as CSV file for Excel import'
            ]
        },
        {
            title: 'API Response Data',
            description: 'Convert API responses to spreadsheet format',
            code: '[{"status":"success","code":200,"message":"Data retrieved"}]',
            result: 'status,code,message\nsuccess,200,Data retrieved',
            steps: [
                'Copy API response JSON',
                'Convert to CSV for analysis',
                'Use in data analysis tools'
            ]
        }
    ],
    'jsonToCsv.useCases': [
        {
            title: 'Data Analysis',
            description: 'Data analysts converting API responses to spreadsheet format',
            example: 'Analyst converting JSON data to CSV for Excel analysis'
        },
        {
            title: 'E-commerce Integration',
            description: 'Online stores converting product data to CSV for inventory systems',
            example: 'E-commerce manager converting product catalogs to CSV format'
        },
        {
            title: 'Database Migration',
            description: 'Developers migrating data between different database systems',
            example: 'Database admin converting JSON exports to CSV for data import'
        },
        {
            title: 'Report Generation',
            description: 'Business analysts creating reports from JSON data sources',
            example: 'Business analyst converting JSON data to CSV for reporting'
        },
        {
            title: 'API Integration',
            description: 'Developers processing API responses for data analysis',
            example: 'Backend developer converting API responses to CSV format'
        },
        {
            title: 'Data Backup',
            description: 'System administrators creating CSV backups from JSON data',
            example: 'Sysadmin converting JSON logs to CSV for backup storage'
        }
    ],
    'jsonToCsv.technicalDetails': 'Our JSON to CSV converter uses JavaScript\'s built-in JSON parser for accurate data parsing. The converter automatically detects object keys as CSV headers and properly escapes special characters including commas, quotes, and newlines according to RFC 4180 standards. All processing happens locally using efficient string manipulation for optimal performance.',
    'jsonToCsv.bestPractices': [
        {
            title: 'Consistent Data Structure',
            tip: 'Ensure all JSON objects have consistent keys for proper CSV header generation.'
        },
        {
            title: 'Data Validation',
            tip: 'Validate JSON structure before conversion to avoid errors in CSV output.'
        },
        {
            title: 'Special Character Handling',
            tip: 'Test CSV output with special characters to ensure proper escaping.'
        },
        {
            title: 'Large File Processing',
            tip: 'For large datasets, consider splitting data into smaller chunks for better performance.'
        }
    ],
    'jsonToCsv.commonErrors': [
        {
            error: 'Invalid JSON Format',
            cause: 'Input contains invalid JSON syntax or structure',
            solution: 'Ensure JSON is properly formatted with valid syntax and structure.',
            prevention: 'Use JSON validators and test with small samples before bulk conversion.'
        },
        {
            error: 'Non-Array JSON',
            cause: 'Input JSON is not an array of objects',
            solution: 'Wrap your JSON data in an array format [{}...] for proper CSV conversion.',
            prevention: 'Always structure data as array of objects for CSV compatibility.'
        },
        {
            error: 'Inconsistent Object Keys',
            cause: 'JSON objects have different keys causing inconsistent CSV headers',
            solution: 'Ensure all objects have consistent keys or handle missing values appropriately.',
            prevention: 'Define standard data structure and validate object consistency.'
        },
        {
            error: 'Special Character Issues',
            cause: 'CSV format issues with commas, quotes, or special characters',
            solution: 'Use proper escaping and test output with spreadsheet applications.',
            prevention: 'Validate special characters and use standard CSV escaping rules.'
        }
    ],
    'jsonToCsv.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'jq, csvkit, pandas command-line utilities',
            pros: 'Powerful processing, Scriptable, Advanced features',
            cons: 'Technical knowledge required, No GUI, Complex setup',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'Pandas, csv-writer, json2csv programming libraries',
            pros: 'Integration with code, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant conversion without programming requirements.'
        },
        {
            name: 'Spreadsheet Software',
            useCase: 'Excel, Google Sheets, LibreOffice Calc import functions',
            pros: 'Advanced analysis, Visual interface, Integration with workflows',
            cons: 'Manual process, Limited automation, Software dependency',
            comparison: 'Our tool provides automated conversion without spreadsheet software requirements.'
        },
        {
            name: 'Online Converters',
            useCase: 'Various web-based JSON to CSV conversion services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        }
    ],
    'jsonToCsv.relatedTools': [
        {
            name: 'CSV to JSON',
            description: 'Convert CSV data back to JSON format',
            url: '/csv-to-json'
        },
        {
            name: 'JSON Validator',
            description: 'Validate and format JSON data',
            url: '/json-validator'
        },
        {
            name: 'JSON Formatter',
            description: 'Format and beautify JSON code',
            url: '/json-formatter'
        },
        {
            name: 'CSV Validator',
            description: 'Validate CSV format and structure',
            url: '/csv-validator'
        },
        {
            name: 'Data Converter',
            description: 'Convert between various data formats',
            url: '/data-converter'
        },
        {
            name: 'XML to JSON',
            description: 'Convert XML data to JSON format',
            url: '/xml-to-json'
        },
        {
            name: 'YAML to JSON',
            description: 'Convert YAML data to JSON format',
            url: '/yaml-to-json'
        },
        {
            name: 'Excel to JSON',
            description: 'Convert Excel files to JSON format',
            url: '/excel-to-json'
        }
    ],
    'jsonToCsv.faqs': [
        {
            question: 'What JSON format is supported?',
            answer: 'The tool accepts JSON arrays of objects. Each object should have consistent keys that will become CSV headers.'
        },
        {
            question: 'How are special characters handled?',
            answer: 'Special characters including commas, quotes, and newlines are properly escaped according to CSV standards.'
        },
        {
            question: 'Can I process large JSON files?',
            answer: 'Yes, you can upload JSON files. The tool handles files of reasonable size for browser processing.'
        },
        {
            question: 'What happens with missing values?',
            answer: 'Missing or null values are converted to empty strings in the CSV output.'
        },
        {
            question: 'Can I convert nested JSON objects?',
            answer: 'The tool works best with flat JSON objects. Nested structures may need to be flattened before conversion.'
        },
        {
            question: 'Is my data private?',
            answer: 'All conversion happens directly in your browser. Your JSON data and CSV output are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What delimiter is used in CSV?',
            answer: 'The tool uses comma (,) as the standard delimiter. All special characters are properly escaped.'
        },
        {
            question: 'Can I save conversion history?',
            answer: 'Yes, the tool maintains a local history of your conversions for easy access and reference.'
        }
    ],
    'jsonToCsv.securityNote': 'All JSON to CSV conversion happens locally in your browser using JavaScript. No JSON data or CSV output is stored on our servers, ensuring complete privacy and security.',
    'jsonToCsv.additionalContent': 'JSON to CSV conversion is essential for data analysis, e-commerce integration, database migration, report generation, and API integration. Combine our converter with other tools like CSV validators, JSON formatters, and data converters for comprehensive data workflow management.'
};
