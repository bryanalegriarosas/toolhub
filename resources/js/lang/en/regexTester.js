export default {
    'regexTester.title': 'Regex Tester',
    'regexTester.description': 'Evaluate regular expression patterns against text with instant match results and history.',
    'regexTester.load_file': 'Load file:',
    'regexTester.copy_text': 'Copy Text',
    'regexTester.download_text': 'Download Text',
    'regexTester.clear': 'Clear',
    'regexTester.save': 'Save',
    'regexTester.regex_pattern': 'Regex Pattern',
    'regexTester.test_text': 'Test Text',
    'regexTester.text_placeholder': 'Enter text to test...',
    'regexTester.matches': 'Matches',
    'regexTester.no_matches': 'No matches',
    'regexTester.history': 'History',
    'regexTester.restore': 'Restore',
    'regexTester.download_history': 'Download History',
    'regexTester.clear_history': 'Clear History',
    
    // SEO Content specific to Regex tester
    'regexTester.mainDescription': 'Free online regex tester with real-time matching, pattern validation, syntax highlighting, and test history. Perfect for developers testing and debugging regular expressions.',
    'regexTester.extendedDescription': 'Our comprehensive regex tester tool helps you test and validate regular expressions with advanced features. Includes real-time pattern matching, syntax validation, test history management, and support for complex regex patterns. All operations happen in your browser for complete privacy.',
    'regexTester.features': [
        {
            title: 'Real-time Regex Testing',
            description: 'Test regex patterns instantly as you type with live match results'
        },
        {
            title: 'Syntax Validation',
            description: 'Validate regex syntax with error highlighting and suggestions'
        },
        {
            title: 'Match Highlighting',
            description: 'Color-coded match highlighting with group extraction and position tracking'
        },
        {
            title: 'Test History',
            description: 'Save and manage regex test history with pattern and text pairs'
        },
        {
            title: 'File Upload Support',
            description: 'Load test files directly from your device for regex testing'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy test text or download results as text files'
        },
        {
            title: 'Pattern Library',
            description: 'Built-in common regex patterns for email, phone, URL, and password validation'
        },
        {
            title: 'Group Capture',
            description: 'Visual display of regex groups and captured values'
        },
        {
            title: 'Multiple Test Modes',
            description: 'Test patterns against single text or multiple test cases'
        },
        {
            title: 'Export Results',
            description: 'Export match results and test history for documentation and sharing'
        },
        {
            title: 'Regex Reference',
            description: 'Quick reference for common regex syntax and special characters'
        }
    ],
    'regexTester.steps': [
        'Enter your regular expression pattern in the regex input field',
        'Add test text in the test text area',
        'Click "Test" or use real-time testing to see matches',
        'View detailed match results including groups and positions',
        'Save useful patterns to history for future reference',
        'Copy match results or download test data for documentation'
    ],
    'regexTester.examples': [
        {
            title: 'Email Validation',
            description: 'Test regex pattern for email address validation',
            code: 'Pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/',
            result: 'Matches: john@example.com | test.user@domain.co.uk | ✗ invalid-email | ✗ @missingdomain.com'
        },
        {
            title: 'Phone Number Validation',
            description: 'Validate international phone number formats',
            code: 'Pattern: /^\\+?[1-9]\\d{1,14}$/',
            result: 'Matches: +1234567890 | ✓ 9876543210 | ✗ 123 | ✗ +0123456789',
            steps: [
                'Enter phone number regex pattern',
                'Test with sample international numbers',
                'Verify format support for different countries',
                'Adjust pattern for specific requirements'
            ]
        },
        {
            title: 'URL Extraction',
            description: 'Extract all URLs from text using regex pattern',
            code: 'Pattern: /https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+([\\w\\-\\.,@?^=%&:/~\\+#]*[\\w\\-\\@?^=%&/~\\+#])?/',
            result: 'Found: https://example.com | https://test.org/page | http://site.net'
        },
        {
            title: 'Password Strength Validation',
            description: 'Validate password requirements with complex regex',
            code: 'Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/',
            result: '✓ StrongPass123! | ✗ weak | ✗ NoNumber! | ✗ short1A!',
            steps: [
                'Test password with complexity requirements',
                'Verify uppercase, lowercase, number, and special character requirements',
                'Adjust minimum length and complexity rules',
                'Use for form validation and security policies'
            ]
        }
    ],
    'regexTester.useCases': [
        {
            title: 'Form Validation',
            description: 'Developers testing regex patterns for form input validation',
            example: 'Frontend developer testing email validation regex for user registration form'
        },
        {
            title: 'Data Processing',
            description: 'Data scientists extracting patterns from large text datasets',
            example: 'Data scientist extracting email addresses and phone numbers from customer data'
        },
        {
            title: 'Log Analysis',
            description: 'System administrators parsing log files with regex patterns',
            example: 'DevOps engineer extracting error patterns and IP addresses from server logs'
        },
        {
            title: 'Content Moderation',
            description: 'Content moderators filtering text using regex patterns',
            example: 'Content moderator detecting and filtering inappropriate content patterns'
        },
        {
            title: 'Security Testing',
            description: 'Security professionals testing input validation patterns',
            example: 'Security engineer testing regex patterns for input sanitization'
        },
        {
            title: 'API Development',
            description: 'Backend developers validating API request parameters',
            example: 'API developer testing regex patterns for endpoint validation'
        },
        {
            title: 'Text Processing',
            description: 'Writers and editors processing text with pattern matching',
            example: 'Technical writer extracting specific terms and formatting from documents'
        },
        {
            title: 'Learning Regex',
            description: 'Students and developers learning regex syntax and patterns',
            example: 'Student practicing regex patterns with interactive testing and examples'
        }
    ],
    'regexTester.technicalDetails': 'Our regex tester uses JavaScript RegExp engine for pattern matching and validation. The tool supports standard JavaScript regex syntax including global flags, character classes, quantifiers, and capture groups. All processing happens locally using modern JavaScript and RegExp API.',
    'regexTester.bestPractices': [
        {
            title: 'Pattern Optimization',
            tip: 'Use efficient regex patterns to avoid performance issues with large text inputs.'
        },
        {
            title: 'Character Escaping',
            tip: 'Properly escape special characters in regex patterns and use raw strings when needed.'
        },
        {
            title: 'Testing Strategy',
            tip: 'Test regex patterns with various edge cases and invalid inputs to ensure robustness.'
        },
        {
            title: 'Group Usage',
            tip: 'Use capture groups effectively to extract specific parts of matches for processing.'
        }
    ],
    'regexTester.commonErrors': [
        {
            error: 'Invalid Regex Syntax',
            cause: 'Malformed regex pattern with unescaped characters or incorrect syntax',
            solution: 'Check for missing brackets, unescaped special characters, or incorrect quantifiers. Use the syntax validation feature.',
            prevention: 'Use regex linters and test patterns thoroughly before deployment.'
        },
        {
            error: 'Performance Issues',
            cause: 'Complex regex patterns causing browser slowdown with large text inputs',
            solution: 'Optimize regex patterns and consider breaking complex patterns into simpler components.',
            prevention: 'Test regex performance with large datasets and avoid catastrophic backtracking.'
        },
        {
            error: 'File Upload Failed',
            cause: 'Invalid file format or corrupted test file',
            solution: 'Ensure the file is a valid text file with proper encoding. Try opening the file in a text editor first.',
            prevention: 'Validate test files before uploading and ensure proper file extensions.'
        },
        {
            error: 'Clipboard Access Denied',
            cause: 'Browser security restrictions preventing clipboard access',
            solution: 'Use manual copy-paste or try a different browser. Ensure HTTPS connection for clipboard access.',
            prevention: 'Use modern browsers and ensure proper security context for clipboard operations.'
        },
        {
            error: 'History Management Issues',
            cause: 'Browser storage limitations or corrupted history data',
            solution: 'Clear browser storage and cookies, then refresh the page to reset history functionality.',
            prevention: 'Regularly export important test patterns and results as backup.'
        },
        {
            error: 'Encoding Issues',
            cause: 'Text files with invalid character encoding causing regex failures',
            solution: 'Ensure test files are saved with UTF-8 encoding. Use a text editor to verify file encoding.',
            prevention: 'Always save test files with UTF-8 encoding to avoid character issues.'
        }
    ],
    'regexTester.alternatives': [
        {
            name: 'IDE Regex Tools',
            useCase: 'Built-in regex testing in code editors like VS Code, WebStorm',
            pros: 'Integrated with development workflow, Advanced features, No internet dependency',
            cons: 'Requires IDE installation, Learning curve for advanced features',
            comparison: 'Our tool offers instant testing without installation requirements.'
        },
        {
            name: 'Online Regex Testers',
            useCase: 'Cloud-based regex testing and validation services',
            pros: 'Cross-platform access, Advanced validation, Collaboration features',
            cons: 'Privacy concerns, Internet dependency, Subscription costs',
            comparison: 'Our tool processes locally for complete privacy and no cost.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Developer tools for regex testing via terminal',
            pros: 'Scriptable, Fast processing, Integration with workflows',
            cons: 'Technical setup required, No GUI, Learning curve',
            comparison: 'Our tool provides user-friendly interface with no technical setup.'
        },
        {
            name: 'Regex Libraries',
            useCase: 'Programming libraries for regex pattern matching',
            pros: 'Advanced features, Performance optimized, Integration with code',
            cons: 'Programming knowledge required, Implementation complexity',
            comparison: 'Our tool offers instant testing without programming requirements.'
        }
    ],
    'regexTester.relatedTools': [
        {
            name: 'Regex Validator',
            description: 'Validate regex syntax and structure',
            url: '/regex-validator'
        },
        {
            name: 'Regex Builder',
            description: 'Visual regex pattern builder tool',
            url: '/regex-builder'
        },
        {
            name: 'String to Regex',
            description: 'Convert strings to regex patterns',
            url: '/string-to-regex'
        },
        {
            name: 'Regex to String',
            description: 'Convert regex patterns to readable strings',
            url: '/regex-to-string'
        },
        {
            name: 'Regex Debugger',
            description: 'Debug and optimize regex patterns',
            url: '/regex-debugger'
        },
        {
            name: 'Pattern Library',
            description: 'Collection of common regex patterns',
            url: '/regex-patterns'
        },
        {
            name: 'Text Analyzer',
            description: 'Analyze text patterns and structure',
            url: '/text-analyzer'
        },
        {
            name: 'String Tools',
            description: 'Various string manipulation tools',
            url: '/string-tools'
        },
        {
            name: 'Regex Pretty Print',
            description: 'Format and display regex patterns with proper formatting',
            url: '/regex-pretty-print'
        }
    ],
    'regexTester.faqs': [
        {
            question: 'What regex syntax is supported?',
            answer: 'The tester supports standard JavaScript RegExp syntax including character classes, quantifiers, groups, and flags (g, i, m).'
        },
        {
            question: 'Can I test complex regex patterns?',
            answer: 'Yes! The tool handles complex patterns including lookaheads, backreferences, and conditional statements.'
        },
        {
            question: 'How does match highlighting work?',
            answer: 'Matches are highlighted with different colors for easy identification, and captured groups are extracted separately.'
        },
        {
            question: 'Is my test data secure?',
            answer: 'All regex testing happens directly in your browser. Your test data and patterns are never uploaded to our servers.'
        },
        {
            question: 'Can I save test patterns?',
            answer: 'Yes! You can save regex patterns and test results to history for future reference and documentation.'
        },
        {
            question: 'What are capture groups?',
            answer: 'Capture groups are parts of regex patterns enclosed in parentheses that extract specific portions of matches for processing.'
        },
        {
            question: 'Can I test multiple patterns?',
            answer: 'Yes! You can test different regex patterns against the same text to compare results and choose the best pattern.'
        },
        {
            question: 'Does it support Unicode?',
            answer: 'Yes! The tool supports Unicode characters and patterns for international text processing and validation.'
        },
        {
            question: 'Can I export test results?',
            answer: 'Yes! You can copy match results, download test data, or export history for documentation and sharing.'
        }
    ],
    'regexTester.securityNote': 'All regex testing happens locally in your browser using JavaScript RegExp engine. No data is stored on our servers, ensuring complete privacy and security.',
    'regexTester.additionalContent': 'Regex testing is essential for form validation, data processing, log analysis, and pattern matching. Combine our tester with other tools like regex builders, validators, and string manipulation for comprehensive text processing and validation workflows.'
};
