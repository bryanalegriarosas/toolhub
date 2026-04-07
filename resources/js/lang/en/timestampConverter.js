export default {
    'timestampConverter.title': 'Unix Timestamp Converter - Free Online Tool',
    'timestampConverter.description': 'Convert between UNIX timestamps and human-readable dates instantly. Supports seconds and milliseconds.',
    'timestampConverter.unix_timestamp': 'Unix Timestamp',
    'timestampConverter.date': 'Date',
    'timestampConverter.seconds': 'Seconds',
    'timestampConverter.milliseconds': 'Milliseconds',
    'timestampConverter.use_date_only_input': 'Use date-only input',
    'timestampConverter.convert': 'Convert',
    'timestampConverter.copy_timestamp': 'Copy Timestamp',
    'timestampConverter.copy_date': 'Copy Date',
    'timestampConverter.clear': 'Clear',
    'timestampConverter.history': 'History',
    'timestampConverter.copy': 'Copy',
    'timestampConverter.clear_history': 'Clear History',
    
    // SEO Content specific to Timestamp Converter
    'timestampConverter.mainDescription': 'Free online UNIX timestamp converter tool with instant conversion between timestamps and human-readable dates. Perfect for developers and data processing.',
    'timestampConverter.extendedDescription': 'Our comprehensive UNIX timestamp converter tool helps you convert between UNIX timestamps and human-readable dates instantly. Includes support for seconds and milliseconds, timezone handling, conversion history, and copy functionality. All operations happen in your browser for complete privacy.',
    'timestampConverter.features': [
        {
            title: 'Instant Conversion',
            description: 'Convert between UNIX timestamps and human-readable dates instantly with real-time processing'
        },
        {
            title: 'Multiple Units Support',
            description: 'Handle both seconds and milliseconds timestamps with automatic conversion'
        },
        {
            title: 'Date/Time Flexibility',
            description: 'Support both date-only and date+time inputs for comprehensive conversion'
        },
        {
            title: 'Copy Functionality',
            description: 'One-click copy to clipboard for both timestamps and dates'
        },
        {
            title: 'Conversion History',
            description: 'Track your conversion history with copy and clear functionality'
        },
        {
            title: 'Timezone Handling',
            description: 'Automatic timezone handling based on your browser settings'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop conversion'
        },
        {
            title: 'Privacy First',
            description: 'All conversion happens locally in your browser with no server storage'
        }
    ],
    'timestampConverter.steps': [
        'Enter or generate a timestamp (seconds or milliseconds) or select a date',
        'Toggle "Use date-only input" to switch between date and date+time',
        'Choose seconds or milliseconds for timestamp units',
        'Click Convert to update the other field automatically',
        'Copy values or clear using the action buttons'
    ],
    'timestampConverter.examples': [
        {
            title: 'Convert Current Time',
            description: 'Convert current timestamp to human-readable date',
            code: 'Timestamp: 1710000000 (seconds)',
            result: 'Date: 2024-03-09 10:00:00'
        },
        {
            title: 'JavaScript Date Conversion',
            description: 'Convert JavaScript milliseconds timestamp',
            code: 'Timestamp: 1710000000000 (milliseconds)',
            result: 'Date: 2024-03-09 10:00:00',
            steps: [
                'Get timestamp from JavaScript: Date.now()',
                'Select "Milliseconds" unit',
                'Enter timestamp',
                'Convert to readable date'
            ]
        },
        {
            title: 'API Response Timestamp',
            description: 'Convert timestamp from API response',
            code: 'Timestamp: 1672531200 (seconds)',
            result: 'Date: 2023-01-01 00:00:00'
        }
    ],
    'timestampConverter.useCases': [
        {
            title: 'Web Development',
            description: 'Developers converting timestamps for web applications and APIs',
            example: 'Frontend developer converting API timestamps for display'
        },
        {
            title: 'Data Processing',
            description: 'Data analysts processing timestamp data from databases and logs',
            example: 'Data analyst converting log timestamps for analysis'
        },
        {
            title: 'API Integration',
            description: 'Developers working with API responses containing timestamps',
            example: 'Backend developer converting timestamps for API documentation'
        },
        {
            title: 'Database Management',
            description: 'Database administrators managing timestamp fields and data',
            example: 'DB admin converting timestamps for data migration'
        },
        {
            title: 'Mobile Development',
            description: 'Mobile app developers handling timestamp conversions in apps',
            example: 'iOS developer converting timestamps for app features'
        },
        {
            title: 'System Administration',
            description: 'System administrators working with system logs and timestamps',
            example: 'Sysadmin converting server timestamps for troubleshooting'
        }
    ],
    'timestampConverter.technicalDetails': 'Our timestamp converter uses JavaScript\'s built-in Date object for accurate timestamp conversion. The tool handles both seconds and milliseconds by applying appropriate conversion factors (1000ms = 1s). All date calculations use UTC internally and display local time based on browser timezone settings. All processing happens locally using efficient date manipulation for optimal performance.',
    'timestampConverter.bestPractices': [
        {
            title: 'Consistent Units',
            tip: 'Always be consistent with timestamp units (seconds vs milliseconds) in your application.'
        },
        {
            title: 'Timezone Awareness',
            tip: 'Be aware of timezone differences when working with timestamps across different regions.'
        },
        {
            title: 'Validation',
            tip: 'Always validate timestamp inputs before processing to prevent errors.'
        },
        {
            title: 'Precision Considerations',
            tip: 'Use milliseconds for higher precision when needed, seconds for general use.'
        }
    ],
    'timestampConverter.commonErrors': [
        {
            error: 'Invalid Timestamp Format',
            cause: 'Input contains non-numeric characters or invalid timestamp values',
            solution: 'Ensure timestamp is a valid number representing seconds or milliseconds since epoch.',
            prevention: 'Validate input format and provide user-friendly error messages.'
        },
        {
            error: 'Unit Mismatch',
            cause: 'Using wrong unit (seconds vs milliseconds) for timestamp conversion',
            solution: 'Select the correct unit before conversion or verify the expected format.',
            prevention: 'Clearly document timestamp format requirements and validate units.'
        },
        {
            error: 'Date Parsing Issues',
            cause: 'Invalid date format or unsupported date values',
            solution: 'Use standard date formats and validate date inputs before conversion.',
            prevention: 'Provide clear input examples and format guidelines.'
        },
        {
            error: 'Timezone Confusion',
            cause: 'Mixing UTC and local time without proper conversion',
            solution: 'Be consistent with timezone handling and document timezone assumptions.',
            prevention: 'Always specify timezone when working with timestamps across regions.'
        }
    ],
    'timestampConverter.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'date command in Unix/Linux systems and PowerShell',
            pros: 'Built-in availability, Scriptable, System integration',
            cons: 'Technical knowledge required, No GUI, Complex syntax',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'Date/time libraries in Python, Java, JavaScript, and other languages',
            pros: 'Integration with code, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant conversion without programming requirements.'
        },
        {
            name: 'Online Converters',
            useCase: 'Web-based timestamp conversion services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'IDE Plugins',
            useCase: 'Development environment plugins for timestamp conversion',
            pros: 'IDE integration, Workflow integration, Advanced features',
            cons: 'IDE specific, Learning curve, Limited standalone use',
            comparison: 'Our tool provides focused conversion without development environment dependencies.'
        }
    ],
    'timestampConverter.relatedTools': [
        {
            name: 'Date Calculator',
            description: 'Calculate date differences and add/subtract time periods',
            url: '/date-calculator'
        },
        {
            name: 'Time Zone Converter',
            description: 'Convert times between different time zones',
            url: '/timezone-converter'
        },
        {
            name: 'Epoch Converter',
            description: 'Convert between different epoch formats',
            url: '/epoch-converter'
        },
        {
            name: 'Date Formatter',
            description: 'Format dates in various styles and patterns',
            url: '/date-formatter'
        },
        {
            name: 'Time Calculator',
            description: 'Calculate time differences and durations',
            url: '/time-calculator'
        },
        {
            name: 'Unix Time Calculator',
            description: 'Perform calculations with UNIX timestamps',
            url: '/unix-time-calculator'
        },
        {
            name: 'ISO Date Converter',
            description: 'Convert between ISO date formats and timestamps',
            url: '/iso-date-converter'
        },
        {
            name: 'Date Parser',
            description: 'Parse and analyze date strings from various formats',
            url: '/date-parser'
        }
    ],
    'timestampConverter.faqs': [
        {
            question: 'What is a UNIX timestamp?',
            answer: 'A UNIX timestamp represents the number of seconds (or milliseconds) that have elapsed since January 1, 1970 UTC (Unix epoch).'
        },
        {
            question: 'Can I use different time zones?',
            answer: 'Conversion is performed in UTC; the date field displays local time based on your browser\'s timezone settings.'
        },
        {
            question: 'Does the date field include time?',
            answer: 'Yes, you can specify both date and time. The converter uses your local time when calculating timestamps.'
        },
        {
            question: 'What does the date-only toggle do?',
            answer: 'When enabled, the input switches to a simple date picker and treats time as 00:00; when disabled it accepts both date and time.'
        },
        {
            question: 'What\'s the difference between seconds and milliseconds?',
            answer: 'Seconds count whole seconds since epoch, while milliseconds provide higher precision with three decimal places.'
        },
        {
            question: 'Can I convert negative timestamps?',
            answer: 'Yes, negative timestamps represent dates before January 1, 1970 UTC and are supported by our converter.'
        },
        {
            question: 'Is my data private?',
            answer: 'All conversion happens directly in your browser. Your timestamps and dates are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What is the maximum timestamp?',
            answer: 'JavaScript Date objects support timestamps up to approximately 8.6e16 milliseconds (September 13, 275760).'
        }
    ],
    'timestampConverter.securityNote': 'All timestamp conversion happens locally in your browser using JavaScript. No timestamp or date data is stored on our servers, ensuring complete privacy and security.',
    'timestampConverter.additionalContent': 'UNIX timestamp conversion is essential for web development, data processing, API integration, and system administration. Combine our converter with other tools like date calculators, timezone converters, and date formatters for comprehensive time and date management workflows.'
};
