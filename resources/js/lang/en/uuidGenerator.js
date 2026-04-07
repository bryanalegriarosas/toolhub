export default {
    'uuidGenerator.title': 'UUID Generator - Create Unique Identifiers Online',
    'uuidGenerator.description': 'Generate universally unique identifiers (UUIDs) instantly with customizable options and history tracking.',
    'uuidGenerator.count': 'Count:',
    'uuidGenerator.uppercase': 'Uppercase',
    'uuidGenerator.generate': 'Generate',
    'uuidGenerator.copy': 'Copy',
    'uuidGenerator.clear': 'Clear',
    'uuidGenerator.history': 'History',
    'uuidGenerator.download_all': 'Download All',
    'uuidGenerator.clear_history': 'Clear History',
    'uuidGenerator.placeholder': 'Generated UUIDs will appear here...',
    
    // SEO Content specific to UUID Generator
    'uuidGenerator.mainDescription': 'Free online UUID generator supporting version 4 random UUIDs with batch generation and customizable formatting options.',
    'uuidGenerator.extendedDescription': 'Our comprehensive UUID generator supports version 4 random UUID generation using browser crypto API. Includes batch generation, uppercase formatting, history tracking, and instant download options. All operations happen in your browser for complete privacy and instant results.',
    'uuidGenerator.features': [
        {
            title: 'Version 4 UUIDs',
            description: 'Generates cryptographically secure version 4 UUIDs using browser crypto API'
        },
        {
            title: 'Batch Generation',
            description: 'Generate multiple UUIDs at once for batch operations'
        },
        {
            title: 'Uppercase Formatting',
            description: 'Option to generate UUIDs in uppercase format'
        },
        {
            title: 'UUID History',
            description: 'Track and manage your generated UUIDs locally'
        },
        {
            title: 'One-Click Copy',
            description: 'Instantly copy any UUID to clipboard'
        },
        {
            title: 'Download Options',
            description: 'Download individual UUIDs or complete history as text files'
        },
        {
            title: 'Instant Generation',
            description: 'Generate UUIDs instantly without server requests'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop UUID generation'
        }
    ],
    'uuidGenerator.steps': [
        'Set the number of UUIDs you want to generate',
        'Toggle uppercase option if needed for your use case',
        'Click generate to create unique identifiers instantly',
        'Copy individual UUIDs or download all results for your project'
    ],
    'uuidGenerator.examples': [
        {
            title: 'Generate Single UUID',
            description: 'Create one unique identifier for database records',
            code: 'Count: 1, Uppercase: No',
            result: '550e8400-e29b-41d4-a716-446655440000',
            steps: [
                'Set count to 1',
                'Leave uppercase disabled',
                'Click "Generate"',
                'Copy the generated UUID for database insertion'
            ]
        },
        {
            title: 'Generate Multiple UUIDs',
            description: 'Create multiple UUIDs at once for batch operations',
            code: 'Count: 5, Uppercase: Yes',
            result: '550E8400-E29B-41D4-A716-446655440001\n550E8400-E29B-41D4-A716-446655440002\n550E8400-E29B-41D4-A716-446655440003\n550E8400-E29B-41D4-A716-446655440004\n550E8400-E29B-41D4-A716-446655440005',
            steps: [
                'Set count to 5',
                'Enable uppercase option',
                'Click "Generate"',
                'Copy all UUIDs for batch processing'
            ]
        },
        {
            title: 'Database Primary Key',
            description: 'Generate UUID for use as primary key in databases',
            code: 'Count: 1, Uppercase: No',
            result: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            steps: [
                'Generate single UUID',
                'Copy for database insertion',
                'Use as primary key in your table',
                'Ensures global uniqueness across systems'
            ]
        }
    ],
    'uuidGenerator.useCases': [
        {
            title: 'Database Design',
            description: 'Database developers creating unique primary keys for database records and tables',
            example: 'Database administrator generating UUIDs for user record primary keys'
        },
        {
            title: 'API Development',
            description: 'Backend developers creating unique identifiers for API endpoints and resources',
            example: 'API developer generating UUIDs for resource identification'
        },
        {
            title: 'Distributed Systems',
            description: 'System architects creating unique identifiers for distributed system components',
            example: 'System architect generating UUIDs for microservice identification'
        },
        {
            title: 'Application Development',
            description: 'Software developers creating unique identifiers for application entities and objects',
            example: 'App developer generating UUIDs for session management'
        },
        {
            title: 'Data Integration',
            description: 'Data engineers creating unique identifiers for data integration and ETL processes',
            example: 'Data engineer generating UUIDs for record tracking across systems'
        },
        {
            title: 'Testing and QA',
            description: 'QA engineers generating unique test data for testing scenarios',
            example: 'QA engineer generating UUIDs for test data generation'
        }
    ],
    'uuidGenerator.technicalDetails': 'Our UUID generator uses the browser\'s native crypto.randomUUID() method to generate cryptographically secure version 4 UUIDs. Each UUID is a 128-bit value displayed in the standard 8-4-4-4-12 hexadecimal format. All generation happens locally using the Web Crypto API for maximum security and performance.',
    'uuidGenerator.bestPractices': [
        {
            title: 'UUID Version Selection',
            tip: 'Use version 4 UUIDs for general purposes as they provide good randomness and are widely supported.'
        },
        {
            title: 'Database Storage',
            tip: 'Store UUIDs as CHAR(36) or UUID-specific data types in databases for optimal performance.'
        },
        {
            title: 'Case Consistency',
            tip: 'Maintain consistent case (uppercase or lowercase) throughout your application for UUID handling.'
        },
        {
            title: 'Performance Considerations',
            tip: 'Generate UUIDs in batches when possible to reduce overhead and improve performance.'
        }
    ],
    'uuidGenerator.commonErrors': [
        {
            error: 'Invalid Count',
            cause: 'Count value is zero, negative, or not a number',
            solution: 'Enter a positive integer between 1 and 1000 for the count field.',
            prevention: 'Always use positive whole numbers when specifying UUID count.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'crypto.randomUUID() method not available in the browser',
            solution: 'Update to a modern browser that supports the Web Crypto API.',
            prevention: 'Use modern browsers with native UUID generation support.'
        },
        {
            error: 'Copy Functionality',
            cause: 'Clipboard API not available or permission denied',
            solution: 'Use manual copy or update browser permissions for clipboard access.',
            prevention: 'Ensure browser supports clipboard API and permissions are granted.'
        },
        {
            error: 'Large Batch Generation',
            cause: 'Generating too many UUIDs at once causing performance issues',
            solution: 'Generate smaller batches or use server-side generation for large volumes.',
            prevention: 'Limit batch sizes to reasonable amounts for browser-based generation.'
        }
    ],
    'uuidGenerator.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'uuidgen, uuid command-line utilities',
            pros: 'System integration, Scriptable, No dependencies',
            cons: 'Technical knowledge required, No GUI, Platform specific',
            comparison: 'Our tool provides user-friendly interface with visual feedback and cross-platform compatibility.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'uuid, python-uuid, node-uuid programming libraries',
            pros: 'Code integration, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant UUID generation without programming requirements.'
        },
        {
            name: 'Online UUID Services',
            useCase: 'Various web-based UUID generation services',
            pros: 'Cross-platform access, No installation, Multiple versions',
            cons: 'Privacy concerns, Internet dependency, Security risks',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Built-in System Tools',
            useCase: 'PowerShell New-Guid, system UUID utilities',
            pros: 'System integration, No installation, Enterprise features',
            cons: 'Platform specific, Learning curve, Limited customization',
            comparison: 'Our tool provides consistent experience across different platforms.'
        }
    ],
    'uuidGenerator.relatedTools': [
        {
            name: 'Hash Generator',
            description: 'Generate SHA-1, SHA-256, and SHA-512 hashes',
            url: '/hash-generator'
        },
        {
            name: 'Random String Generator',
            description: 'Generate random strings with custom character sets',
            url: '/random-string-generator'
        },
        {
            name: 'Password Generator',
            description: 'Generate strong passwords with customizable options',
            url: '/password-generator'
        },
        {
            name: 'API Key Generator',
            description: 'Generate secure API keys and tokens',
            url: '/api-key-generator'
        },
        {
            name: 'Base64 Encoder',
            description: 'Encode text and files to Base64 format',
            url: '/base64-encoder'
        },
        {
            name: 'Timestamp Converter',
            description: 'Convert between different timestamp formats',
            url: '/timestamp-converter'
        },
        {
            name: 'JSON Formatter',
            description: 'Format and validate JSON data',
            url: '/json-formatter'
        },
        {
            name: 'Text Encryptor',
            description: 'Encrypt text with various encryption methods',
            url: '/text-encryptor'
        }
    ],
    'uuidGenerator.faqs': [
        {
            question: 'What is a UUID?',
            answer: 'A UUID (Universally Unique Identifier) is a 128-bit identifier used to uniquely identify information in computer systems without central coordination.'
        },
        {
            question: 'Which UUID version is generated?',
            answer: 'Our tool generates version 4 UUIDs, which are created using random or pseudo-random numbers and provide excellent uniqueness.'
        },
        {
            question: 'Are the generated UUIDs truly unique?',
            answer: 'Version 4 UUIDs have an extremely low probability of collision (1 in 2^122), making them practically unique for most applications.'
        },
        {
            question: 'Can I generate multiple UUIDs at once?',
            answer: 'Yes, you can specify any count and the tool will generate that many unique UUIDs in a single operation.'
        },
        {
            question: 'What is the format of generated UUIDs?',
            answer: 'UUIDs are generated in the standard 8-4-4-4-12 hexadecimal format (e.g., 550e8400-e29b-41d4-a716-446655440000).'
        },
        {
            question: 'Can I use uppercase UUIDs?',
            answer: 'Yes, you can toggle the uppercase option to generate UUIDs in uppercase format for your specific requirements.'
        },
        {
            question: 'Is my data private?',
            answer: 'All UUID generation happens directly in your browser using the crypto API. No data is sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'Can I save generated UUIDs?',
            answer: 'Yes, the tool maintains a local history of generated UUIDs and you can download them as a text file for future reference.'
        }
    ],
    'uuidGenerator.securityNote': 'All UUID generation happens locally in your browser using the native crypto.randomUUID() method. No data is sent to our servers, ensuring complete privacy and security.',
    'uuidGenerator.additionalContent': 'UUID generation is essential for database design, API development, distributed systems, application development, data integration, and testing scenarios. Combine our generator with other tools like hash generators, random string generators, and password generators for comprehensive development workflow management.'
};
