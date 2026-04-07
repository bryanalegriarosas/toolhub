export default {
    'textToBase64.title': 'Text to Base64 Encoder/Decoder - Free Online Tool',
    'textToBase64.description': 'Encode or decode Base64 from plain text instantly with history and download features.',
    'textToBase64.load_file': 'Load file',
    'textToBase64.download': 'Download',
    'textToBase64.save': 'Save',
    'textToBase64.input': 'Input',
    'textToBase64.output': 'Output',
    'textToBase64.encode': 'Encode',
    'textToBase64.decode': 'Decode',
    'textToBase64.copy': 'Copy',
    'textToBase64.clear': 'Clear',
    'textToBase64.history': 'History',
    'textToBase64.restore': 'Restore',
    'textToBase64.download_all': 'Download All',
    'textToBase64.clear_history': 'Clear History',
    'textToBase64.placeholder_text': 'Enter text or Base64...',
    
    // SEO Content specific to Text to Base64
    'textToBase64.mainDescription': 'Free online text to Base64 encoder/decoder with automatic detection, history tracking, and batch processing capabilities.',
    'textToBase64.extendedDescription': 'Our comprehensive text to Base64 tool helps you encode and decode Base64 text instantly. Includes automatic format detection, special character handling, history tracking, and batch processing. All operations happen in your browser for complete privacy.',
    'textToBase64.features': [
        {
            title: 'Automatic Format Detection',
            description: 'Automatically detects Base64 format and converts to proper text'
        },
        {
            title: 'Unicode Support',
            description: 'Properly handles Unicode characters and special symbols in encoding'
        },
        {
            title: 'File Upload Support',
            description: 'Upload text files directly for quick encoding or decoding'
        },
        {
            title: 'Conversion History',
            description: 'Track and manage your conversion history locally'
        },
        {
            title: 'Batch Processing',
            description: 'Process multiple text conversions in a single operation'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for all results'
        },
        {
            title: 'Download Options',
            description: 'Download individual results or complete history as text files'
        },
        {
            title: 'Error Handling',
            description: 'Clear error messages and validation for invalid Base64 input'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop use'
        }
    ],
    'textToBase64.steps': [
        'Enter text or Base64 in the input field',
        'Click Encode or Decode to convert between formats',
        'Copy or download the result',
        'Save to history for later reference'
    ],
    'textToBase64.examples': [
        {
            title: 'Encoding Text',
            description: 'Convert plain text to Base64 format',
            code: 'Hello, World!',
            result: 'SGVsbG8sIFdvcmxkIQ==',
            steps: [
                'Enter "Hello, World!" in the input field',
                'Click "Encode" to convert to Base64',
                'Copy the Base64 result: SGVsbG8sIFdvcmxkIQ=='
            ]
        },
        {
            title: 'Decoding Base64',
            description: 'Convert Base64 back to readable text',
            code: 'SGVsbG8sIFdvcmxkIQ==',
            result: 'Hello, World!',
            steps: [
                'Enter Base64 in the input field',
                'Click "Decode" to convert to text',
                'Get the decoded text: Hello, World!'
            ]
        },
        {
            title: 'Encoding Special Characters',
            description: 'Handle Unicode and special characters in encoding',
            code: '¡Hola! ¿Cómo estás?',
            result: 'wqFIb2xhISDCsUNvbW8gZXN0w6FzPw==',
            steps: [
                'Enter text with special characters',
                'Click "Encode" to handle Unicode properly',
                'Use the Base64 result for safe transmission'
            ]
        }
    ],
    'textToBase64.useCases': [
        {
            title: 'Data Transmission',
            description: 'Developers encoding data for secure transmission over text protocols',
            example: 'Backend developer encoding API data for text-based protocols'
        },
        {
            title: 'Email Integration',
            description: 'Email systems encoding attachments and content for transmission',
            example: 'Email developer encoding file attachments in Base64 format'
        },
        {
            title: 'Web Development',
            description: 'Web developers encoding data for URLs and API parameters',
            example: 'Frontend developer encoding user data for URL parameters'
        },
        {
            title: 'Database Storage',
            description: 'Database administrators storing binary data in text-based systems',
            example: 'DB admin encoding binary data for text storage in databases'
        },
        {
            title: 'Configuration Files',
            description: 'System administrators encoding configuration data for text files',
            example: 'Sysadmin encoding configuration files in Base64 for storage'
        },
        {
            title: 'API Development',
            description: 'API developers encoding request/response data for web services',
            example: 'API developer encoding authentication tokens for web services'
        }
    ],
    'textToBase64.technicalDetails': 'Our text to Base64 encoder/decoder uses JavaScript\'s built-in btoa() and atob() functions for accurate encoding and decoding. The tool automatically detects Base64 format and properly handles Unicode characters using UTF-8 encoding before conversion. All processing happens locally using efficient string manipulation for optimal performance.',
    'textToBase64.bestPractices': [
        {
            title: 'Format Validation',
            tip: 'Always validate Base64 format before decoding to avoid errors.'
        },
        {
            title: 'Character Encoding',
            tip: 'Be aware of character encoding issues when working with different languages.'
        },
        {
            title: 'Data Size Limits',
            tip: 'Consider data size limits when encoding large files for web transmission.'
        },
        {
            title: 'Security Considerations',
            tip: 'Use Base64 for data obfuscation, not for true encryption of sensitive data.'
        }
    ],
    'textToBase64.commonErrors': [
        {
            error: 'Invalid Base64 Format',
            cause: 'Input contains invalid Base64 characters or incorrect padding',
            solution: 'Ensure Base64 is properly formatted with valid characters and proper padding.',
            prevention: 'Use Base64 validators and test with small samples before bulk processing.'
        },
        {
            error: 'Character Encoding Issues',
            cause: 'Unicode characters not properly handled during encoding/decoding',
            solution: 'Ensure proper UTF-8 encoding before Base64 conversion.',
            prevention: 'Test with special characters and different languages before production use.'
        },
        {
            error: 'Data Corruption',
            cause: 'Incomplete Base64 data or transmission errors',
            solution: 'Verify complete Base64 string and re-encode if necessary.',
            prevention: 'Use checksums and validation for critical data transmission.'
        },
        {
            error: 'Memory Limitations',
            cause: 'Large Base64 strings causing browser memory issues',
            solution: 'Process data in smaller chunks or use streaming for large files.',
            prevention: 'Implement data size limits and chunked processing for large datasets.'
        }
    ],
    'textToBase64.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'base64, openssl command-line utilities',
            pros: 'Powerful processing, Scriptable, Advanced features',
            cons: 'Technical knowledge required, No GUI, Complex setup',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'Base64 encoding libraries in various programming languages',
            pros: 'Integration with code, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant conversion without programming requirements.'
        },
        {
            name: 'Online Converters',
            useCase: 'Various web-based Base64 conversion services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'Base64 encoder/decoder extensions for development environments',
            pros: 'IDE integration, Workflow integration, Quick access',
            cons: 'IDE specific, Limited features, Setup complexity',
            comparison: 'Our tool provides focused conversion without development environment dependencies.'
        }
    ],
    'textToBase64.relatedTools': [
        {
            name: 'URL Encoder',
            description: 'Encode URLs for safe transmission in text-based protocols',
            url: '/url-encoder'
        },
        {
            name: 'Hash Generator',
            description: 'Generate various hash values from text data',
            url: '/hash-generator'
        },
        {
            name: 'Text Encoder',
            description: 'Convert text to various encoding formats',
            url: '/text-encoder'
        },
        {
            name: 'Binary Converter',
            description: 'Convert between text and binary formats',
            url: '/binary-converter'
        },
        {
            name: 'Hex Encoder',
            description: 'Convert text to hexadecimal format',
            url: '/hex-encoder'
        },
        {
            name: 'QR Code Generator',
            description: 'Generate QR codes from text data',
            url: '/qr-code-generator'
        },
        {
            name: 'Data Validator',
            description: 'Validate and format various data types',
            url: '/data-validator'
        },
        {
            name: 'Text Analyzer',
            description: 'Analyze text content and statistics',
            url: '/text-analyzer'
        }
    ],
    'textToBase64.faqs': [
        {
            question: 'What is Base64 encoding?',
            answer: 'Base64 is an encoding scheme that converts binary data into ASCII text format, commonly used for safe data transmission over text-based protocols.'
        },
        {
            question: 'Can I encode Unicode characters?',
            answer: 'Yes, the tool properly handles Unicode characters and special symbols using UTF-8 encoding before Base64 conversion.'
        },
        {
            question: 'Is my data private?',
            answer: 'All encoding and decoding happens directly in your browser. Your text data and Base64 output are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'Can I process large files?',
            answer: 'Yes, you can load text files. The tool handles files of reasonable size for browser processing.'
        },
        {
            question: 'What\'s the difference between encoding and decoding?',
            answer: 'Encoding converts text to Base64 format, while decoding converts Base64 back to original text. Both processes are reversible with proper data.'
        },
        {
            question: 'Can I save conversion history?',
            answer: 'Yes, the tool maintains a local history of your conversions for easy access and reference.'
        },
        {
            question: 'Is Base64 encryption?',
            answer: 'No, Base64 is encoding, not encryption. It obfuscates data but doesn\'t provide true security. Use proper encryption for sensitive data.'
        },
        {
            question: 'What characters are supported?',
            answer: 'The tool supports all Unicode characters including special symbols, emojis, and text from various languages and character sets.'
        }
    ],
    'textToBase64.securityNote': 'All text to Base64 encoding and decoding happens locally in your browser using JavaScript. No text data or Base64 output is stored on our servers, ensuring complete privacy and security.',
    'textToBase64.additionalContent': 'Text to Base64 conversion is essential for data transmission, email integration, web development, database storage, configuration management, and API development. Combine our encoder/decoder with other tools like URL encoders, hash generators, and data validators for comprehensive data workflow management.'
};
