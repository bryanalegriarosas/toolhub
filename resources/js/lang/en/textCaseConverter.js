export default {
    'textCaseConverter.title': 'Text Case Converter',
    'textCaseConverter.load_file': 'Load file:',
    'textCaseConverter.copy_text': 'Copy Text',
    'textCaseConverter.download_text': 'Download Text',
    'textCaseConverter.clear': 'Clear',
    'textCaseConverter.save': 'Save',
    'textCaseConverter.enter_your_text': 'Enter your text...',
    'textCaseConverter.uppercase': 'UPPERCASE',
    'textCaseConverter.lowercase': 'lowercase',
    'textCaseConverter.camelcase': 'camelCase',
    'textCaseConverter.snake_case': 'snake_case',
    'textCaseConverter.kebab_case': 'kebab-case',
    'textCaseConverter.history': 'History',
    'textCaseConverter.restore': 'Restore',
    'textCaseConverter.download_history': 'Download History',
    'textCaseConverter.clear_history': 'Clear History',
    
    // SEO Content specific to Text Case Converter
    'textCaseConverter.mainDescription': 'Free online text case converter with multiple case formats, real-time conversion, and history tracking. Perfect for developers, writers, and content creators.',
    'textCaseConverter.extendedDescription': 'Our comprehensive text case converter tool helps you convert text between different case formats instantly. Includes uppercase, lowercase, camelCase, snake_case, kebab-case conversions, file upload support, and conversion history. All operations happen in your browser for complete privacy.',
    'textCaseConverter.features': [
        {
            title: 'Multiple Case Formats',
            description: 'Convert between uppercase, lowercase, camelCase, snake_case, and kebab-case formats'
        },
        {
            title: 'Real-time Conversion',
            description: 'Instant text conversion as you type with automatic case detection'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for quick case conversion'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of converted text and download results for documentation'
        },
        {
            title: 'History Management',
            description: 'Save and manage conversion history for quick access and reference'
        },
        {
            title: 'Developer-Friendly Formats',
            description: 'Optimized case formats for programming variables and CSS classes'
        },
        {
            title: 'Batch Processing',
            description: 'Handle multiple text conversions efficiently with history tracking'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop case conversion'
        },
        {
            title: 'Privacy First',
            description: 'All text conversion happens locally in your browser with no server storage'
        }
    ],
    'textCaseConverter.steps': [
        'Paste or type your text in the input area',
        'View instant conversions in all supported case formats',
        'Use file upload to load text from files',
        'Copy or download converted text for documentation purposes',
        'Save important conversions to history for future reference',
        'Restore previous conversions from history when needed'
    ],
    'textCaseConverter.examples': [
        {
            title: 'Programming Variable Names',
            description: 'Convert text to different programming case formats',
            code: 'Input: User Profile Management System',
            result: 'UPPERCASE: USER PROFILE MANAGEMENT SYSTEM | lowercase: user profile management system | camelCase: userProfileManagementSystem | snake_case: user_profile_management_system | kebab-case: user-profile-management-system'
        },
        {
            title: 'CSS Class Names',
            description: 'Convert text to kebab-case for CSS classes',
            code: 'Input: Main Navigation Header',
            result: 'UPPERCASE: MAIN NAVIGATION HEADER | lowercase: main navigation header | camelCase: mainNavigationHeader | snake_case: main_navigation_header | kebab-case: main-navigation-header (perfect for CSS classes)',
            steps: [
                'Enter descriptive text for CSS class',
                'Copy kebab-case result',
                'Use in HTML class attributes',
                'Maintain consistent naming convention'
            ]
        },
        {
            title: 'JavaScript Variables',
            description: 'Convert text to camelCase for JavaScript variables',
            code: 'Input: Shopping Cart Total Price',
            result: 'UPPERCASE: SHOPPING CART TOTAL PRICE | lowercase: shopping cart total price | camelCase: shoppingCartTotalPrice (ideal for JS variables)',
            steps: [
                'Enter variable description',
                'Convert to camelCase',
                'Copy for JavaScript code',
                'Use consistent naming convention'
            ]
        }
    ],
    'textCaseConverter.useCases': [
        {
            title: 'Web Development',
            description: 'Developers converting text for variable names, CSS classes, and API endpoints',
            example: 'Frontend developer converting descriptive text to camelCase for React component props'
        },
        {
            title: 'CSS Development',
            description: 'Designers converting text to kebab-case for CSS class names and IDs',
            example: 'CSS developer converting component names to kebab-case for stylesheet organization'
        },
        {
            title: 'API Development',
            description: 'Backend developers converting endpoint names to snake_case for REST APIs',
            example: 'API developer converting resource names to snake_case for database fields'
        },
        {
            title: 'Content Writing',
            description: 'Writers converting headlines and titles to different case formats',
            example: 'Content writer converting blog post titles to title case for SEO optimization'
        },
        {
            title: 'Database Design',
            description: 'Database administrators converting field names to snake_case for consistent naming',
            example: 'DB admin converting column names to snake_case for database schema'
        },
        {
            title: 'Documentation',
            description: 'Technical writers converting section headers to different case formats',
            example: 'Technical writer converting documentation headers to title case for consistency'
        },
        {
            title: 'Code Review',
            description: 'Code reviewers checking naming conventions and case consistency',
            example: 'Senior developer verifying case conversion follows team coding standards'
        }
    ],
    'textCaseConverter.technicalDetails': 'Our text case converter uses JavaScript string manipulation methods to convert text between different case formats. The tool handles uppercase, lowercase, camelCase, snake_case, and kebab-case conversions using regex patterns and string operations. All processing happens locally using efficient algorithms for optimal performance.',
    'textCaseConverter.bestPractices': [
        {
            title: 'Consistent Naming Conventions',
            tip: 'Choose case formats that match your project or team naming standards.'
        },
        {
            title: 'Context-Aware Conversion',
            tip: 'Consider the context where the converted text will be used (CSS, JavaScript, database, etc.).'
        },
        {
            title: 'Regular Expression Testing',
            tip: 'Test converted text with regex patterns to ensure proper format matching.'
        },
        {
            title: 'Version Control Integration',
            tip: 'Use consistent case conversion for better version control and collaboration.'
        }
    ],
    'textCaseConverter.commonErrors': [
        {
            error: 'Incorrect Case Conversion',
            cause: 'Special characters or formatting affecting case conversion accuracy',
            solution: 'Use clean text and review conversion results for accuracy.',
            prevention: 'Remove special formatting and use standard text for accurate conversion.'
        },
        {
            error: 'File Upload Issues',
            cause: 'Browser limitations or file format problems with text file loading',
            solution: 'Use standard text files and check browser compatibility.',
            prevention: 'Test file upload with different browsers and use UTF-8 encoding.'
        },
        {
            error: 'Naming Convention Conflicts',
            cause: 'Using wrong case format for specific programming contexts',
            solution: 'Understand which case format is appropriate for your use case.',
            prevention: 'Follow project-specific naming conventions and team standards.'
        },
        {
            error: 'History Management Problems',
            cause: 'Lost conversion history or confusion with saved conversions',
            solution: 'Regular backup and clear organization of history entries.',
            prevention: 'Maintain consistent history management and backup important conversions.'
        },
        {
            error: 'Mobile Performance Issues',
            cause: 'Large text files causing performance problems on mobile devices',
            solution: 'Optimize text processing for mobile performance.',
            prevention: 'Test with various text sizes and optimize for mobile devices.'
        }
    ],
    'textCaseConverter.alternatives': [
        {
            name: 'Code Editors',
            useCase: 'VS Code, Sublime Text, and other text editors with case conversion plugins',
            pros: 'Advanced editing, Plugin ecosystem, Syntax highlighting',
            cons: 'Setup required, Learning curve, Limited conversion features',
            comparison: 'Our tool provides instant online access without installation or complex setup.'
        },
        {
            name: 'Online Converters',
            useCase: 'Web-based text case conversion services',
            pros: 'Cross-platform access, Additional features, No installation',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'CLI tools for text case conversion and manipulation',
            pros: 'Scriptable, Fast processing, CI/CD integration',
            cons: 'Setup required, Technical knowledge, No GUI',
            comparison: 'Our tool provides user-friendly interface with visual feedback.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'Case conversion extensions for code editors',
            pros: 'Editor integration, Real-time conversion, Workflow integration',
            cons: 'IDE specific, Limited features, Extension installation',
            comparison: 'Our tool offers comprehensive features without IDE dependencies.'
        }
    ],
    'textCaseConverter.relatedTools': [
        {
            name: 'Text Formatter',
            description: 'Format and beautify text content',
            url: '/text-formatter'
        },
        {
            name: 'Variable Name Generator',
            description: 'Generate consistent variable names',
            url: '/variable-name-generator'
        },
        {
            name: 'CSS Class Generator',
            description: 'Generate CSS-friendly class names',
            url: '/css-class-generator'
        },
        {
            name: 'Code Style Checker',
            description: 'Check code style and naming conventions',
            url: '/code-style-checker'
        },
        {
            name: 'Text Analyzer',
            description: 'Comprehensive text analysis and statistics',
            url: '/text-analyzer'
        },
        {
            name: 'Regex Tester',
            description: 'Test regular expressions for case conversion',
            url: '/regex-tester'
        },
        {
            name: 'Naming Convention Checker',
            description: 'Verify naming convention compliance',
            url: '/naming-convention-checker'
        },
        {
            name: 'Code Refactoring Tool',
            description: 'Refactor code with better naming',
            url: '/code-refactoring-tool'
        },
        {
            name: 'Documentation Generator',
            description: 'Generate consistent documentation',
            url: '/documentation-generator'
        }
    ],
    'textCaseConverter.faqs': [
        {
            question: 'What case formats are supported?',
            answer: 'Our tool supports uppercase, lowercase, camelCase, snake_case, and kebab-case formats. Each format is optimized for specific use cases like programming variables, CSS classes, or database fields.'
        },
        {
            question: 'How is camelCase calculated?',
            answer: 'CamelCase removes spaces and underscores, capitalizes the first letter of each word after the first, and joins words together. For example, "hello world" becomes "helloWorld".'
        },
        {
            question: 'What is the difference between snake_case and kebab-case?',
            answer: 'Snake_case uses underscores (snake_case) while kebab-case uses hyphens (kebab-case). Snake_case is commonly used for database fields, while kebab-case is preferred for CSS classes and URLs.'
        },
        {
            question: 'Can I use this for CSS class names?',
            answer: 'Yes, kebab-case is the standard convention for CSS class names. Our tool converts your text to kebab-case format which is perfect for HTML class attributes.'
        },
        {
            question: 'Is my text data private?',
            answer: 'All text conversion happens directly in your browser. Your text content and conversion results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What file formats are supported?',
            answer: 'Our tool supports standard text files (.txt, .md, .csv) with UTF-8 encoding. Files are processed locally in your browser.'
        },
        {
            question: 'Can I convert multiple lines at once?',
            answer: 'Yes, our tool processes all text content, including multiple lines, and applies the selected case conversion to the entire text.'
        },
        {
            question: 'How accurate is the case conversion?',
            answer: 'Our case converter is highly accurate for standard text. Special formatting or unusual characters may require manual verification.'
        }
    ],
    'textCaseConverter.securityNote': 'All text conversion happens locally in your browser using JavaScript. No text content or conversion results are stored on our servers, ensuring complete privacy and security.',
    'textCaseConverter.additionalContent': 'Text case conversion is essential for web development, CSS design, API development, and content creation. Combine our text case converter with other tools like code formatters, naming convention checkers, and documentation generators for comprehensive development workflows.'
};
