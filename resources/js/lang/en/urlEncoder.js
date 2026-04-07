export default {
    'urlEncoder.title': 'URL Encoder - Free Online Tool',
    'urlEncoder.auto': 'Auto',
    'urlEncoder.load_file': 'Load file:',
    'urlEncoder.encode': 'Encode',
    'urlEncoder.copy': 'Copy',
    'urlEncoder.download': 'Download',
    'urlEncoder.clear': 'Clear',
    'urlEncoder.history': 'History',
    'urlEncoder.download_all': 'Download All',
    'urlEncoder.clear_history': 'Clear History',
    'urlEncoder.paste_text_here': 'Paste text here...',
    
    // SEO Content specific to URL Encoder
    'urlEncoder.mainDescription': 'Free online URL encoder tool with text encoding, file support, and instant conversion. Perfect for web development and API integration.',
    'urlEncoder.extendedDescription': 'Our comprehensive URL encoder tool helps you convert text to URL-safe encoding instantly. Includes auto-processing, file upload support, history tracking, and export options. All operations happen in your browser for complete privacy.',
    'urlEncoder.features': [
        {
            title: 'Instant URL Encoding',
            description: 'Convert text to URL-safe encoding instantly with real-time processing and results'
        },
        {
            title: 'Auto-Processing Mode',
            description: 'Enable auto-processing for automatic URL encoding as you type'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for quick URL encoding and conversion'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for easy sharing and pasting'
        },
        {
            title: 'Download Results',
            description: 'Download URL encoded results as text files for documentation'
        },
        {
            title: 'Encoding History',
            description: 'Track your encoding history with copy and download functionality'
        },
        {
            title: 'Unicode Support',
            description: 'Handle special characters, international text, and Unicode properly'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop encoding'
        },
        {
            title: 'Privacy First',
            description: 'All encoding happens locally in your browser with no server storage'
        }
    ],
    'urlEncoder.steps': [
        'Enter or paste your text in the input field',
        'Click "Encode" button or enable auto-processing for automatic encoding',
        'View the URL encoded result instantly',
        'Copy to clipboard or download the encoded result',
        'Use history to track and manage previous encodings'
    ],
    'urlEncoder.examples': [
        {
            title: 'Encoding URL Parameters',
            description: 'Encode special characters in URL query parameters',
            code: 'search?q=hello world & page=1&category=web development',
            result: 'search%3Fq%3Dhello%20world%20%26%20page%3D1%26category%3Dweb%20development'
        },
        {
            title: 'Encoding File Paths',
            description: 'Encode file paths with special characters for URLs',
            code: 'C:/Users/John Doe/Documents/file name.txt',
            result: 'C%3A%2FUsers%2FJohn%20Doe%2FDocuments%2Ffile%20name.txt'
        },
        {
            title: 'Encoding Special Characters',
            description: 'Handle spaces, symbols and international characters',
            code: 'Café & Restaurant (Main St)',
            result: 'Caf%C3%A9%20%26%20Restaurant%20%28Main%20St%29',
            steps: [
                'Paste text with special characters',
                'Click "Encode" button',
                'Copy the URL-safe result',
                'Use in links or API requests'
            ]
        }
    ],
    'urlEncoder.useCases': [
        {
            title: 'Web Development',
            description: 'Developers encoding URL parameters for web applications and APIs',
            example: 'Frontend developer encoding query parameters for API requests'
        },
        {
            title: 'API Integration',
            description: 'Encoding data for safe transmission in API endpoints and web services',
            example: 'Backend developer encoding user input for API parameter transmission'
        },
        {
            title: 'Link Generation',
            description: 'Creating safe URLs with special characters for sharing and embedding',
            example: 'Marketing team creating shareable links with special characters'
        },
        {
            title: 'Data Transmission',
            description: 'Transmitting text data safely over HTTP protocols',
            example: 'System administrator encoding configuration data for URL transmission'
        },
        {
            title: 'Form Processing',
            description: 'Encoding form data for submission to web servers',
            example: 'Web developer encoding form inputs for secure submission'
        },
        {
            title: 'Content Management',
            description: 'Encoding file names and paths for web storage and retrieval',
            example: 'CMS developer encoding file paths for web storage systems'
        }
    ],
    'urlEncoder.technicalDetails': 'Our URL encoder uses JavaScript\'s built-in encodeURIComponent() function with proper Unicode handling. The tool processes URL encoding, handles special characters correctly, and provides real-time conversion. All processing happens locally using efficient encoding algorithms for optimal performance.',
    'urlEncoder.bestPractices': [
        {
            title: 'Character Encoding',
            tip: 'Ensure proper UTF-8 encoding for international characters and special symbols.'
        },
        {
            title: 'URL Length Limits',
            tip: 'Be aware of URL length limits in different browsers and servers (typically 2048 characters).'
        },
        {
            title: 'Encoding Selectively',
            tip: 'Only encode characters that need encoding to maintain readability when possible.'
        },
        {
            title: 'Testing URLs',
            tip: 'Always test encoded URLs in your target environment to ensure proper functionality.'
        }
    ],
    'urlEncoder.commonErrors': [
        {
            error: 'Invalid Character Encoding',
            cause: 'Text contains invalid characters or improper encoding',
            solution: 'Ensure text uses proper UTF-8 encoding and valid characters.',
            prevention: 'Validate input text before encoding and handle special characters properly.'
        },
        {
            error: 'URL Length Exceeded',
            cause: 'Encoded URL exceeds maximum length limits for browsers or servers',
            solution: 'Shorten URLs or use alternative methods for large data transmission.',
            prevention: 'Monitor URL length and implement URL shortening for long URLs.'
        },
        {
            error: 'Double Encoding',
            cause: 'Applying URL encoding to already encoded text',
            solution: 'Decode first if needed, then apply single encoding.',
            prevention: 'Check if text is already encoded before applying encoding.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'Using incompatible methods for URL encoding',
            solution: 'Use standard encodeURIComponent() function for cross-browser compatibility.',
            prevention: 'Test encoding across different browsers and environments.'
        }
    ],
    'urlEncoder.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'URL encoding commands in Unix/Linux systems and PowerShell',
            pros: 'Built-in availability, Scriptable, Batch processing',
            cons: 'Technical knowledge required, No GUI, Complex syntax',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'URL encoding libraries in Python, Java, JavaScript, and other languages',
            pros: 'Integration with code, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant encoding without programming requirements.'
        },
        {
            name: 'Online Encoding Services',
            useCase: 'Web-based URL encoding services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Development Tools',
            useCase: 'IDE plugins and development environment encoding tools',
            pros: 'IDE integration, Workflow integration, Advanced features',
            cons: 'IDE specific, Learning curve, Limited standalone use',
            comparison: 'Our tool provides focused encoding without development environment dependencies.'
        }
    ],
    'urlEncoder.relatedTools': [
        {
            name: 'URL Decoder',
            description: 'Decode URL strings back to original text',
            url: '/url-decoder'
        },
        {
            name: 'Base64 Encoder',
            description: 'Convert text to Base64 encoding',
            url: '/base64-encoder'
        },
        {
            name: 'HTML Encoder',
            description: 'Encode HTML entities for web safety',
            url: '/html-encoder'
        },
        {
            name: 'JSON Encoder',
            description: 'Encode JSON data for transmission',
            url: '/json-encoder'
        },
        {
            name: 'URL Parser',
            description: 'Parse and analyze URL components',
            url: '/url-parser'
        },
        {
            name: 'Text Encoder',
            description: 'Encode text in various formats',
            url: '/text-encoder'
        },
        {
            name: 'Query String Builder',
            description: 'Build URL query strings safely',
            url: '/query-string-builder'
        },
        {
            name: 'Link Shortener',
            description: 'Shorten long URLs for sharing',
            url: '/link-shortener'
        }
    ],
    'urlEncoder.faqs': [
        {
            question: 'What is URL encoding?',
            answer: 'URL encoding converts characters into a format safe for URL transmission by replacing unsafe ASCII characters with a "%" followed by two hexadecimal digits.'
        },
        {
            question: 'Why do I need URL encoding?',
            answer: 'URL encoding ensures that special characters, spaces, and international characters can be safely transmitted in URLs without causing parsing errors.'
        },
        {
            question: 'What characters get encoded?',
            answer: 'Characters that are not safe in URLs like spaces, ampersands, question marks, and non-ASCII characters get encoded to their percent-encoded equivalents.'
        },
        {
            question: 'Is URL encoding the same as Base64?',
            answer: 'No, URL encoding is specifically for making text URL-safe, while Base64 is for general binary-to-text encoding with different purposes.'
        },
        {
            question: 'Can I encode large text?',
            answer: 'Yes, our tool can handle large text files, but be aware of URL length limits (typically 2048 characters) in web applications.'
        },
        {
            question: 'How does auto-processing work?',
            answer: 'Auto-processing automatically encodes your text as you type, providing instant URL-safe conversion without manual button clicks.'
        },
        {
            question: 'Is my data private?',
            answer: 'All encoding happens directly in your browser. Your text and encoded results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What is the difference between encodeURI and encodeURIComponent?',
            answer: 'encodeURIComponent encodes all special characters while encodeURI leaves some characters like :, /, and ? unencoded. Our tool uses encodeURIComponent for maximum safety.'
        }
    ],
    'urlEncoder.securityNote': 'All URL encoding happens locally in your browser using JavaScript. No text content or encoded results are stored on our servers, ensuring complete privacy and security.',
    'urlEncoder.additionalContent': 'URL encoding is essential for web development, API integration, data transmission, and safe web communication. Combine our encoder with other tools like URL decoder, Base64 encoder, and query string builders for comprehensive web development workflows.'
};
