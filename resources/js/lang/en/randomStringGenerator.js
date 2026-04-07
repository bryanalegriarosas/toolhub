export default {
    'randomStringGenerator.title': 'Random String Generator - Create Secure Random Strings Online',
    'randomStringGenerator.description': 'Generate secure random strings with custom length and character sets. Includes history, copy/download and file support.',
    'randomStringGenerator.load_file': 'Load file:',
    'randomStringGenerator.copy': 'Copy',
    'randomStringGenerator.download_result': 'Download Result',
    'randomStringGenerator.clear': 'Clear',
    'randomStringGenerator.save': 'Save',
    'randomStringGenerator.length': 'Length',
    'randomStringGenerator.letters': 'Letters',
    'randomStringGenerator.numbers': 'Numbers',
    'randomStringGenerator.symbols': 'Symbols',
    'randomStringGenerator.generate': 'Generate',
    'randomStringGenerator.result': 'Result',
    'randomStringGenerator.history': 'History',
    'randomStringGenerator.restore': 'Restore',
    'randomStringGenerator.download_history': 'Download History',
    'randomStringGenerator.clear_history': 'Clear History',
    
    // SEO Content specific to Random String Generator
    'randomStringGenerator.mainDescription': 'Free online random string generator with customizable length, character sets, and secure generation.',
    'randomStringGenerator.extendedDescription': 'Our comprehensive random string generator supports custom length from 4-128 characters, multiple character sets (letters, numbers, symbols), file upload support, and complete history tracking. All operations happen in your browser for complete privacy.',
    'randomStringGenerator.features': [
        {
            title: 'Customizable Length',
            description: 'Generate strings from 4 to 128 characters long'
        },
        {
            title: 'Multiple Character Sets',
            description: 'Include letters, numbers, and symbols independently or together'
        },
        {
            title: 'Secure Generation',
            description: 'Uses cryptographically secure random number generation'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files to extract and use their content'
        },
        {
            title: 'String History',
            description: 'Track and manage your generated strings locally'
        },
        {
            title: 'One-Click Copy',
            description: 'Instantly copy any generated string to clipboard'
        },
        {
            title: 'Download Options',
            description: 'Download individual strings or complete history as text files'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop string generation'
        }
    ],
    'randomStringGenerator.steps': [
        'Choose length and select character sets (letters, numbers, symbols)',
        'Click generate to create a secure random string',
        'Copy the result or download it as a file',
        'Save to history for later reference and use'
    ],
    'randomStringGenerator.examples': [
        {
            title: 'API Key Generation',
            description: 'Generate secure API key for authentication',
            code: 'Length: 32 | Characters: Letters + Numbers | Symbols: No',
            result: 'Generated: a7b3K9m2X5p8Q1r4T6y9U2w5Z8c1F (secure API key)',
            steps: [
                'Set length to 32 characters',
                'Enable letters and numbers only',
                'Generate and use for API authentication',
                'Store securely in your authentication system'
            ]
        },
        {
            title: 'Session Token Creation',
            description: 'Create random session token for web applications',
            code: 'Length: 64 | Characters: Letters + Numbers + Symbols | Symbols: Yes',
            result: 'Generated: K9$m2X5#p8Q1r4!T6y9U2@w5Z8c1F*a7b3K9m2X5p8Q1r4T6y9U2w5Z8c1F',
            steps: [
                'Set length to 64 characters for security',
                'Include all character types for maximum complexity',
                'Generate and store in secure database',
                'Use for user session authentication'
            ]
        },
        {
            title: 'Random Password',
            description: 'Generate strong random password for security',
            code: 'Length: 16 | Characters: Letters + Numbers + Symbols | Symbols: Yes',
            result: 'Generated: Q1r4!T6y9U2@w5Z8 (strong password)',
            steps: [
                'Set length to 16 characters',
                'Include letters, numbers, and symbols',
                'Generate and use as secure password',
                'Store using proper password hashing'
            ]
        }
    ],
    'randomStringGenerator.useCases': [
        {
            title: 'API Authentication',
            description: 'Backend developers generating secure API keys and tokens for authentication systems',
            example: 'API developer generating random strings for secure API key creation'
        },
        {
            title: 'Session Management',
            description: 'Web developers creating session tokens for user authentication and security',
            example: 'Web developer generating random session tokens for user login management'
        },
        {
            title: 'Security Testing',
            description: 'Security professionals generating test data for penetration testing and validation',
            example: 'Security tester generating random strings for fuzzing and security testing'
        },
        {
            title: 'Database Seeding',
            description: 'Database developers generating random data for testing and development',
            example: 'Database developer generating random strings for test data population'
        },
        {
            title: 'Password Generation',
            description: 'Security teams generating temporary passwords and secure credentials',
            example: 'Security administrator generating random strings for temporary password creation'
        },
        {
            title: 'Unique Identifiers',
            description: 'System architects creating unique identifiers for various system components',
            example: 'System architect generating random strings for unique component identification'
        }
    ],
    'randomStringGenerator.technicalDetails': 'Our random string generator uses the browser\'s built-in Math.random() function combined with cryptographically secure random number generation. Character sets are dynamically constructed based on user selections, and strings are generated character by character using secure random indices.',
    'randomStringGenerator.bestPractices': [
        {
            title: 'Length Selection',
            tip: 'Use longer strings (16+ characters) for security-critical applications like passwords and API keys.'
        },
        {
            title: 'Character Complexity',
            tip: 'Include multiple character types (letters, numbers, symbols) for stronger, more secure strings.'
        },
        {
            title: 'Security Considerations',
            tip: 'Never use generated strings directly as passwords without additional security measures like proper hashing.'
        },
        {
            title: 'Randomness Quality',
            tip: 'For high-security applications, consider using cryptographically secure generation methods.'
        }
    ],
    'randomStringGenerator.commonErrors': [
        {
            error: 'Invalid Length',
            cause: 'Length is outside the valid range (4-128 characters) or not a number',
            solution: 'Enter a valid number between 4 and 128 for the length field.',
            prevention: 'Always use whole numbers within the specified range for string length.'
        },
        {
            error: 'No Character Sets Selected',
            cause: 'All character type options are disabled',
            solution: 'Enable at least one character type (letters, numbers, or symbols).',
            prevention: 'Always ensure at least one character set is selected before generation.'
        },
        {
            error: 'File Upload Issues',
            cause: 'File is too large, corrupted, or in unsupported format',
            solution: 'Use smaller text files or check file format and size limits.',
            prevention: 'Verify file is plain text and within reasonable size limits before upload.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'Clipboard API or file reading not available in browser',
            solution: 'Update to a modern browser that supports these APIs.',
            prevention: 'Use modern browsers with full API support for best experience.'
        }
    ],
    'randomStringGenerator.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'pwgen, openssl rand, /dev/urandom command-line utilities',
            pros: 'System integration, Scriptable, No dependencies',
            cons: 'Technical knowledge required, No GUI, Platform specific',
            comparison: 'Our tool provides user-friendly interface with visual feedback and cross-platform compatibility.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'random, secrets, crypto programming libraries',
            pros: 'Code integration, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant string generation without programming requirements.'
        },
        {
            name: 'Online Generators',
            useCase: 'Various web-based random string generation services',
            pros: 'Cross-platform access, No installation, Multiple options',
            cons: 'Privacy concerns, Internet dependency, Security risks',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Built-in System Tools',
            useCase: 'PowerShell Get-Random, system random utilities',
            pros: 'System integration, No installation, Enterprise features',
            cons: 'Platform specific, Learning curve, Limited customization',
            comparison: 'Our tool provides consistent experience across different platforms.'
        }
    ],
    'randomStringGenerator.relatedTools': [
        {
            name: 'Password Generator',
            description: 'Generate strong passwords with customizable options',
            url: '/password-generator'
        },
        {
            name: 'UUID Generator',
            description: 'Generate universally unique identifiers (UUIDs)',
            url: '/uuid-generator'
        },
        {
            name: 'Hash Generator',
            description: 'Generate SHA-1, SHA-256, and SHA-512 hashes',
            url: '/hash-generator'
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
            name: 'Text Encryptor',
            description: 'Encrypt text with various encryption methods',
            url: '/text-encryptor'
        },
        {
            name: 'Random Number Generator',
            description: 'Generate random numbers within specified ranges',
            url: '/random-number-generator'
        },
        {
            name: 'Security Audit Tool',
            description: 'Audit and analyze security configurations',
            url: '/security-audit'
        }
    ],
    'randomStringGenerator.faqs': [
        {
            question: 'How long can the generated string be?',
            answer: 'You can generate strings from 4 to 128 characters long, configurable by the length field.'
        },
        {
            question: 'What characters can be included?',
            answer: 'You can include letters (uppercase and lowercase), numbers (0-9), and various symbols (!@#$%^&*()_+-=[]{}<>?) independently.'
        },
        {
            question: 'Are the generated strings truly random?',
            answer: 'Yes, we use the browser\'s built-in random number generation for secure, unpredictable results.'
        },
        {
            question: 'Can I load text from files?',
            answer: 'Yes, you can upload text files and the content will be used to set the string length.'
        },
        {
            question: 'Is my data private?',
            answer: 'All string generation happens directly in your browser. No data is sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'Can I save generated strings?',
            answer: 'Yes, the tool maintains a local history and you can download strings as text files.'
        },
        {
            question: 'What makes a string secure?',
            answer: 'Longer length and character variety (mix of letters, numbers, and symbols) create more secure strings.'
        },
        {
            question: 'Can I generate multiple strings at once?',
            answer: 'Currently the tool generates one string at a time, but you can generate multiple quickly using the history feature.'
        }
    ],
    'randomStringGenerator.securityNote': 'All random string generation happens locally in your browser using built-in random number generation. No data is sent to our servers, ensuring complete privacy and security.',
    'randomStringGenerator.additionalContent': 'Random string generation is essential for API authentication, session management, security testing, database seeding, password generation, and unique identifier creation. Combine our generator with other tools like password generators, hash generators, and security audit tools for comprehensive security workflow management.'
};
