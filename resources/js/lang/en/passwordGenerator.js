export default {
    'passwordGenerator.title': 'Password Generator - Create Strong Passwords Online',
    'passwordGenerator.description': 'Generate secure passwords with custom length and character sets.',
    'passwordGenerator.password_length': 'Password length',
    'passwordGenerator.uppercase': 'Uppercase',
    'passwordGenerator.lowercase': 'Lowercase',
    'passwordGenerator.numbers': 'Numbers',
    'passwordGenerator.symbols': 'Symbols',
    'passwordGenerator.exclude_similar': 'Exclude similar (iIlLoO0)',
    'passwordGenerator.generate': 'Generate',
    'passwordGenerator.copy': 'Copy',
    'passwordGenerator.clear': 'Clear',
    'passwordGenerator.history': 'History',
    'passwordGenerator.download_all': 'Download All',
    'passwordGenerator.clear_history': 'Clear History',
    
    // SEO Content specific to Password Generator
    'passwordGenerator.mainDescription': 'Free online password generator with customizable length, character sets, and security features.',
    'passwordGenerator.extendedDescription': 'Our comprehensive password generator helps you create strong, secure passwords with customizable options. Includes character set selection, length control, similar character exclusion, and password history tracking. All operations happen in your browser for complete privacy.',
    'passwordGenerator.features': [
        {
            title: 'Customizable Length',
            description: 'Set password length from 1 to 128 characters for different security requirements'
        },
        {
            title: 'Character Set Control',
            description: 'Choose from uppercase, lowercase, numbers, and symbols for password complexity'
        },
        {
            title: 'Similar Character Exclusion',
            description: 'Optionally exclude similar looking characters (i, l, 1, L, o, O, 0) to prevent confusion'
        },
        {
            title: 'Password History',
            description: 'Track and manage your generated passwords locally for reference'
        },
        {
            title: 'One-Click Copy',
            description: 'Instantly copy generated passwords to clipboard for easy use'
        },
        {
            title: 'Batch Generation',
            description: 'Generate multiple passwords quickly with different settings'
        },
        {
            title: 'Security Indicators',
            description: 'Visual indicators for password strength and complexity'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop password generation'
        }
    ],
    'passwordGenerator.steps': [
        'Choose desired password length and character sets',
        'Click generate to create a secure password',
        'Copy or download passwords, and review history',
        'Use generated passwords for accounts and security needs'
    ],
    'passwordGenerator.examples': [
        {
            title: 'Strong Website Password',
            description: 'Generate a secure password for user registration',
            code: 'Length: 16, Include: Uppercase, Lowercase, Numbers, Symbols',
            result: 'Kj8#mP2$nL9@xQ5!',
            steps: [
                'Set length to 16 characters',
                'Enable all character types (uppercase, lowercase, numbers, symbols)',
                'Click "Generate"',
                'Copy the generated password'
            ]
        },
        {
            title: 'Simple PIN Code',
            description: 'Generate a numeric PIN for mobile devices',
            code: 'Length: 6, Include: Numbers only',
            result: '274936',
            steps: [
                'Set length to 6',
                'Enable only "Numbers" option',
                'Disable other character types',
                'Click "Generate"'
            ]
        },
        {
            title: 'Passphrase-Style Password',
            description: 'Create a readable but secure password without symbols',
            code: 'Length: 20, Include: Uppercase, Lowercase, Numbers, Exclude similar characters',
            result: 'TrustedBlueSky48',
            steps: [
                'Set length to 20',
                'Enable uppercase, lowercase, numbers',
                'Disable symbols',
                'Enable "Exclude similar characters"',
                'Generate multiple options until you find one memorable'
            ]
        }
    ],
    'passwordGenerator.useCases': [
        {
            title: 'Account Registration',
            description: 'Users creating secure passwords for new online accounts and services',
            example: 'User registering for social media accounts with strong unique passwords'
        },
        {
            title: 'IT Security',
            description: 'IT administrators generating passwords for system access and user management',
            example: 'IT admin creating temporary passwords for system maintenance and access'
        },
        {
            title: 'Application Development',
            description: 'Developers generating test passwords for application development and testing',
            example: 'Developer creating test passwords for user authentication systems'
        },
        {
            title: 'Personal Security',
            description: 'Individuals creating secure passwords for personal devices and online services',
            example: 'Person creating passwords for email, banking, and shopping accounts'
        },
        {
            title: 'Business Security',
            description: 'Business users generating passwords for corporate accounts and systems',
            example: 'Employee creating passwords for company systems and client accounts'
        },
        {
            title: 'Password Reset',
            description: 'Support staff generating temporary passwords for user account recovery',
            example: 'Support agent generating secure temporary passwords for password reset processes'
        }
    ],
    'passwordGenerator.technicalDetails': 'Our password generator uses cryptographically secure random number generation to create passwords. The character pool is dynamically constructed based on user selections, and similar character exclusion prevents visual confusion. All generation happens locally using JavaScript\'s built-in Math.random() with proper seeding for security.',
    'passwordGenerator.bestPractices': [
        {
            title: 'Password Length',
            tip: 'Use passwords of at least 12 characters for better security against brute force attacks.'
        },
        {
            title: 'Character Variety',
            tip: 'Include multiple character types (uppercase, lowercase, numbers, symbols) for maximum complexity.'
        },
        {
            title: 'Avoid Personal Information',
            tip: 'Never use personal information like names, birthdays, or common words in passwords.'
        },
        {
            title: 'Regular Updates',
            tip: 'Update passwords regularly and use unique passwords for different accounts and services.'
        }
    ],
    'passwordGenerator.commonErrors': [
        {
            error: 'No Character Types Selected',
            cause: 'All character type options are disabled',
            solution: 'Enable at least one character type (uppercase, lowercase, numbers, or symbols).',
            prevention: 'Always ensure at least one character type is selected before generating passwords.'
        },
        {
            error: 'Invalid Password Length',
            cause: 'Password length is set to zero or negative value',
            solution: 'Set a positive password length between 1 and 128 characters.',
            prevention: 'Use the length input field to set appropriate password length.'
        },
        {
            error: 'Browser Copy Issues',
            cause: 'Clipboard access denied or browser compatibility issues',
            solution: 'Check browser permissions for clipboard access or use manual copy method.',
            prevention: 'Test clipboard functionality in your browser and use HTTPS for secure sites.'
        },
        {
            error: 'Character Set Too Small',
            cause: 'Character pool is too small for secure password generation',
            solution: 'Enable more character types or increase password length for better security.',
            prevention: 'Always use multiple character types for better password complexity.'
        }
    ],
    'passwordGenerator.alternatives': [
        {
            name: 'Built-in Password Managers',
            useCase: 'Browser password managers, Keychain, Windows Credential Manager',
            pros: 'System integration, Auto-fill, Cross-device sync',
            cons: 'Limited customization, Platform specific, Privacy concerns',
            comparison: 'Our tool offers more customization options and works entirely offline with complete privacy.'
        },
        {
            name: 'Password Manager Applications',
            useCase: '1Password, LastPass, Bitwarden, Dashlane password managers',
            pros: 'Advanced features, Cross-platform, Encrypted storage',
            cons: 'Subscription cost, Learning curve, Internet dependency',
            comparison: 'Our tool provides free password generation without account requirements or subscriptions.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'pwgen, openssl, mkpasswd command-line utilities',
            pros: 'Scriptable, Advanced options, No GUI overhead',
            cons: 'Technical knowledge required, Manual operation, Limited accessibility',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Online Password Generators',
            useCase: 'Various web-based password generation services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Security risks',
            comparison: 'Our tool works offline with complete privacy and no data transmission to servers.'
        }
    ],
    'passwordGenerator.relatedTools': [
        {
            name: 'Password Strength Checker',
            description: 'Analyze password strength and security level',
            url: '/password-strength-checker'
        },
        {
            name: 'Hash Generator',
            description: 'Generate various hash values from passwords and text',
            url: '/hash-generator'
        },
        {
            name: 'Random String Generator',
            description: 'Generate random strings with custom character sets',
            url: '/random-string-generator'
        },
        {
            name: 'UUID Generator',
            description: 'Generate unique UUIDs for application development',
            url: '/uuid-generator'
        },
        {
            name: 'PIN Code Generator',
            description: 'Generate numeric PIN codes for mobile devices',
            url: '/pin-generator'
        },
        {
            name: 'Text Encryptor',
            description: 'Encrypt text with various encryption methods',
            url: '/text-encryptor'
        },
        {
            name: 'Security Audit Tool',
            description: 'Audit and analyze security configurations',
            url: '/security-audit'
        },
        {
            name: 'Password Manager',
            description: 'Secure password storage and management system',
            url: '/password-manager'
        }
    ],
    'passwordGenerator.faqs': [
        {
            question: 'What makes a password strong?',
            answer: 'Strong passwords combine length (12+ characters), character variety (uppercase, lowercase, numbers, symbols), and avoid common patterns or personal information.'
        },
        {
            question: 'Are the generated passwords truly random?',
            answer: 'Yes, our generator uses cryptographically secure random number generation to ensure true randomness and unpredictability.'
        },
        {
            question: 'Can I generate passwords for different purposes?',
            answer: 'Yes, you can customize length and character sets for website passwords, PIN codes, or passphrase-style passwords.'
        },
        {
            question: 'Is my password data private?',
            answer: 'All password generation happens directly in your browser. No passwords or settings are sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What are similar characters?',
            answer: 'Similar characters are those that can look alike (i, l, 1, L, o, O, 0). Excluding them prevents confusion in password entry.'
        },
        {
            question: 'How long should my passwords be?',
            answer: 'For security, use passwords of at least 12 characters. Longer passwords (16-20 characters) provide better protection against brute force attacks.'
        },
        {
            question: 'Can I save generated passwords?',
            answer: 'Yes, the tool maintains a local history of generated passwords for your reference. Consider using a dedicated password manager for long-term storage.'
        },
        {
            question: 'What character sets should I use?',
            answer: 'For maximum security, use all character types (uppercase, lowercase, numbers, symbols). For PIN codes, use only numbers. For memorable passwords, consider excluding symbols.'
        }
    ],
    'passwordGenerator.securityNote': 'All password generation happens locally in your browser using JavaScript. No passwords or generation settings are stored on our servers, ensuring complete privacy and security.',
    'passwordGenerator.additionalContent': 'Password generation is essential for account registration, IT security, application development, personal security, business security, and password reset processes. Combine our generator with other tools like password strength checkers, hash generators, and security audit tools for comprehensive security workflow management.'
};
