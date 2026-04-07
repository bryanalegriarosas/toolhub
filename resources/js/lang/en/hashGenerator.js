export default {
    'hashGenerator.title': 'Hash Generator - Online SHA-1, SHA-256, SHA-512 Tool',
    'hashGenerator.description': 'Generate SHA-1, SHA-256, and SHA-512 hashes from text or files with copy and history features.',
    'hashGenerator.load_file': 'Load File',
    'hashGenerator.copy_text': 'Copy Text',
    'hashGenerator.download_text': 'Download Text',
    'hashGenerator.save': 'Save',
    'hashGenerator.sha1': 'SHA-1',
    'hashGenerator.sha256': 'SHA-256',
    'hashGenerator.sha512': 'SHA-512',
    'hashGenerator.copy': 'Copy',
    'hashGenerator.download': 'Download',
    'hashGenerator.history': 'History',
    'hashGenerator.restore': 'Restore',
    'hashGenerator.download_history': 'Download History',
    'hashGenerator.clear_history': 'Clear History',
    'hashGenerator.enter_text': 'Enter text...',
    
    // SEO Content specific to Hash Generator
    'hashGenerator.mainDescription': 'Free online hash generator supporting SHA-1, SHA-256, and SHA-512 algorithms with instant processing and history tracking.',
    'hashGenerator.extendedDescription': 'Our comprehensive hash generator supports multiple SHA algorithms including SHA-1, SHA-256, and SHA-512. Features instant text processing, file upload support, hash comparison, and complete history tracking. All operations occur in your browser for complete privacy.',
    'hashGenerator.features': [
        {
            title: 'Multiple SHA Algorithms',
            description: 'Support for SHA-1, SHA-256, and SHA-512 hash algorithms'
        },
        {
            title: 'Instant Processing',
            description: 'Real-time hash generation as you type or upload files'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for hash generation'
        },
        {
            title: 'Hash History',
            description: 'Track and manage your hash generation history locally'
        },
        {
            title: 'One-Click Copy',
            description: 'Instantly copy any hash value to clipboard'
        },
        {
            title: 'Download Options',
            description: 'Download individual hashes or complete history as text files'
        },
        {
            title: 'Hash Comparison',
            description: 'Compare different hash values for verification'
        },
        {
            title: 'Responsive Design',
            description: 'Responsive design optimized for mobile and desktop hash generation'
        }
    ],
    'hashGenerator.steps': [
        'Type or paste text or load a file',
        'Hashes are automatically generated for all supported algorithms',
        'Copy individual hashes or download all results',
        'Save to history for future reference and verification'
    ],
    'hashGenerator.examples': [
        {
            title: 'Password Hashing',
            description: 'Generate secure SHA-256 hash for password storage',
            code: 'mypassword123',
            result: 'SHA-256: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd5f7b9e1e00fce',
            steps: [
                'Enter password in text field',
                'Copy SHA-256 hash for database storage',
                'Never store passwords in plain text, only hashes'
            ]
        },
        {
            title: 'File Integrity Verification',
            description: 'Generate SHA-256 hash for file integrity verification',
            code: 'Important document content that should not be modified',
            result: 'SHA-256: 2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
            steps: [
                'Load file or paste content',
                'Generate SHA-256 hash',
                'Store hash for future verification',
                'Compare file content against stored hash'
            ]
        },
        {
            title: 'API Key Generation',
            description: 'Create unique identifiers for API authentication',
            code: 'user123_secret_api_2024',
            result: 'SHA-1: 8d6e8c8c8c8c8c8c8c8c8c8c8c8c8c',
            steps: [
                'Enter API key identifier',
                'Generate SHA-1 hash for quick reference',
                'Use hash for API authentication systems',
                'Store both identifier and hash for verification'
            ]
        }
    ],
    'hashGenerator.useCases': [
        {
            title: 'Password Security',
            description: 'Security professionals hashing passwords for secure storage and verification',
            example: 'Security administrator hashing user passwords before database storage'
        },
        {
            title: 'Data Integrity',
            description: 'Developers and IT professionals verifying file integrity and detecting changes',
            example: 'Developer generating SHA-256 hashes for deployment verification'
        },
        {
            title: 'API Authentication',
            description: 'Backend developers creating hash-based authentication tokens and API keys',
            example: 'API developer generating SHA-256 hashes for request authentication'
        },
        {
            title: 'Digital Signatures',
            description: 'Security teams creating hash values for digital document signing',
            example: 'Security professional generating SHA-512 hashes for document signing'
        },
        {
            title: 'Blockchain Applications',
            description: 'Blockchain developers creating hash values for transaction verification',
            example: 'Blockchain developer generating SHA-256 hashes for transaction IDs'
        },
        {
            title: 'Compliance Requirements',
            description: 'Compliance officers generating hash values for regulatory requirements',
            example: 'Compliance officer generating SHA-256 hashes for audit trails'
        }
    ],
    'hashGenerator.technicalDetails': 'Our hash generator uses the Web Crypto API for secure SHA-1, SHA-256, and SHA-512 hash generation. The algorithms process input data through UTF-8 encoding and generate fixed-length hash outputs. All computation occurs locally using native browser cryptographic functions for maximum security and performance.',
    'hashGenerator.bestPractices': [
        {
            title: 'Algorithm Selection',
            tip: 'Use SHA-256 for general purposes, SHA-512 for maximum security, and SHA-1 only when required for compatibility.'
        },
        {
            title: 'Hash Storage',
            tip: 'Always store hashes separately from original data for security verification.'
        },
        {
            title: 'Data Verification',
            tip: 'Generate hashes before storing or transmitting data to enable integrity verification.'
        },
        {
            title: 'Security Considerations',
            tip: 'Remember that hashing is one-way - always protect sensitive original data even when storing hashes.'
        }
    ],
    'hashGenerator.commonErrors': [
        {
            error: 'Empty Input',
            cause: 'No text or file content provided for hash generation',
            solution: 'Enter text in input field or load a file to generate hashes.',
            prevention: 'Always ensure there is content before attempting hash generation.'
        },
        {
            error: 'Large File Processing',
            cause: 'File too large for browser-based hash generation',
            solution: 'Use smaller files or process data in chunks for hash generation.',
            prevention: 'Check file size limits and use appropriate chunk sizes for large data.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'Web Crypto API not available in browser',
            solution: 'Update to a modern browser that supports Web Crypto API.',
            prevention: 'Use modern browsers with cryptographic API support for hash generation.'
        },
        {
            error: 'Memory Limitations',
            cause: 'Insufficient memory to process large data hashes',
            solution: 'Close other tabs and applications to free memory for hash processing.',
            prevention: 'Monitor memory usage and process data in manageable chunks.'
        }
    ],
    'hashGenerator.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'sha1sum, sha256sum, sha512sum command line utilities',
            pros: 'Powerful processing, Scriptable, System integration',
            cons: 'Technical knowledge required, No GUI, Manual operation',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'Crypto, hashlib, OpenSSL programming libraries',
            pros: 'Code integration, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant hash generation without programming requirements.'
        },
        {
            name: 'Online Hash Tools',
            useCase: 'Various web-based hash generation services',
            pros: 'Cross-platform access, No installation, Multiple algorithms',
            cons: 'Privacy concerns, Internet dependency, Security risks',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Built-in System Tools',
            useCase: 'PowerShell Get-FileHash, Certutil system utilities',
            pros: 'System integration, No installation, Enterprise features',
            cons: 'Platform-specific, Learning curve, Limited algorithms',
            comparison: 'Our tool provides consistent experience across different platforms.'
        }
    ],
    'hashGenerator.relatedTools': [
        {
            name: 'Password Generator',
            description: 'Generate strong passwords with customizable options',
            url: '/password-generator'
        },
        {
            name: 'Text Encryptor',
            description: 'Encrypt text with various encryption algorithms',
            url: '/text-encryptor'
        },
        {
            name: 'Hash Verifier',
            description: 'Verify hash values against original data',
            url: '/hash-verifier'
        },
        {
            name: 'File Comparator',
            description: 'Compare files and detect differences',
            url: '/file-comparator'
        },
        {
            name: 'Digital Signature Tool',
            description: 'Create and verify digital signatures',
            url: '/digital-signature'
        },
        {
            name: 'Checksum Calculator',
            description: 'Calculate various checksum values for files',
            url: '/checksum-calculator'
        },
        {
            name: 'API Key Generator',
            description: 'Generate secure API keys and tokens',
            url: '/api-key-generator'
        },
        {
            name: 'Security Audit Tool',
            description: 'Audit and analyze security configurations',
            url: '/security-audit'
        }
    ],
    'hashGenerator.faqs': [
        {
            question: 'What hash algorithms are supported?',
            answer: 'Our tool supports SHA-1, SHA-256, and SHA-512 algorithms using the Web Crypto API for secure generation.'
        },
        {
            question: 'Can I hash large files?',
            answer: 'Yes, you can load reasonably sized files. The tool processes data efficiently using browser streaming.'
        },
        {
            question: 'Are the generated hashes secure?',
            answer: 'Yes, we use the Web Crypto API which provides cryptographically secure hash generation in modern browsers.'
        },
        {
            question: 'What is the difference between SHA algorithms?',
            answer: 'SHA-1 produces 160-bit hashes, SHA-256 produces 256-bit hashes, and SHA-512 produces 512-bit hashes. Higher bit values provide better security but are longer.'
        },
        {
            question: 'Can I compare hashes?',
            answer: 'Yes, you can generate hashes for different data and compare them to verify data integrity or detect changes.'
        },
        {
            question: 'Is my data private?',
            answer: 'All hash generation occurs directly in your browser. Your text data and generated hashes are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What can I use hashes for?',
            answer: 'Hashes are commonly used for password storage, data integrity verification, digital signatures, blockchain applications, and API authentication.'
        },
        {
            question: 'Can I save hash history?',
            answer: 'Yes, the tool maintains a local history of your hash generations for easy access and verification.'
        },
        {
            question: 'Which SHA algorithm should I use?',
            answer: 'Use SHA-256 for general purposes, SHA-512 for maximum security requirements, and SHA-1 only when required for compatibility with legacy systems.'
        }
    ],
    'hashGenerator.securityNote': 'All hash generation occurs locally in your browser using the Web Crypto API. No text data or hash values are stored on our servers, ensuring complete privacy and security.',
    'hashGenerator.additionalContent': 'Hash generation is essential for password security, data integrity verification, API authentication, digital signatures, blockchain applications, and compliance requirements. Combine our generator with other tools like password generators, text encryptors, and security audit tools for comprehensive security workflow management.'
};
