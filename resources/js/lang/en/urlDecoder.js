export default {
    'urlDecoder.title': 'URL Decoder - Free Online Tool',
    'urlDecoder.auto': 'Auto',
    'urlDecoder.load_file': 'Load file:',
    'urlDecoder.decode': 'Decode',
    'urlDecoder.copy': 'Copy',
    'urlDecoder.download': 'Download',
    'urlDecoder.clear': 'Clear',
    'urlDecoder.history': 'History',
    'urlDecoder.download_all': 'Download All',
    'urlDecoder.clear_history': 'Clear History',
    'urlDecoder.paste_url_encoded_text_here': 'Paste URL-encoded text here...',
    
    // SEO Content specific to URL Decoder
    'urlDecoder.mainDescription': 'Free online URL decoder tool with text decoding, file support, and instant conversion. Perfect for web development and API integration.',
    'urlDecoder.extendedDescription': 'Our comprehensive URL decoder tool helps you convert URL-encoded text back to original readable text instantly. Includes auto-processing, file upload support, history tracking, and export options. All operations happen in your browser for complete privacy.',
    'urlDecoder.features': [
        {
            title: 'Instant URL Decoding',
            description: 'Convert URL-encoded text back to readable text instantly with real-time processing and results'
        },
        {
            title: 'Auto-Processing Mode',
            description: 'Enable auto-processing for automatic URL decoding as you type'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for quick URL decoding and conversion'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for easy sharing and pasting'
        },
        {
            title: 'Download Results',
            description: 'Download URL decoded results as text files for documentation'
        },
        {
            title: 'Decoding History',
            description: 'Track your decoding history with copy and download functionality'
        },
        {
            title: 'Unicode Support',
            description: 'Handle special characters, international text, and UTF-8 properly'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop decoding'
        },
        {
            title: 'Privacy First',
            description: 'All decoding happens locally in your browser with no server storage'
        }
    ],
    'urlDecoder.steps': [
        'Enter or paste your URL-encoded text in the input field',
        'Click "Decode" button or enable auto-processing for automatic decoding',
        'View the decoded readable text result instantly',
        'Copy to clipboard or download the decoded result',
        'Use history to track and manage previous decodings'
    ],
    'urlDecoder.examples': [
        {
            title: 'Decoding URL Parameters',
            description: 'Decode URL query parameters back to readable text',
            code: 'search%3Fq%3Dhello%20world%20%26%20page%3D1%26category%3Dweb%20development',
            result: 'search?q=hello world & page=1&category=web development'
        },
        {
            title: 'Decoding File Paths',
            description: 'Convert URL-encoded file paths back to normal paths',
            code: 'C%3A%2FUsers%2FJohn%20Doe%2FDocuments%2Ffile%20name.txt',
            result: 'C:/Users/John Doe/Documents/file name.txt'
        },
        {
            title: 'Decoding International Characters',
            description: 'Handle UTF-8 encoded characters from URLs',
            code: 'Caf%C3%A9%20%26%20Restaurant%20%28Main%20St%29',
            result: 'Café & Restaurant (Main St)',
            steps: [
                'Paste URL-encoded text',
                'Click "Decode" button',
                'Copy the readable result',
                'Use in your application or display to users'
            ]
        }
    ],
    'urlDecoder.useCases': [
        {
            title: 'Web Development',
            description: 'Developers decoding URL parameters from web applications and APIs',
            example: 'Frontend developer decoding query parameters from API responses'
        },
        {
            title: 'API Integration',
            description: 'Decoding URL-encoded data from API responses and web services',
            example: 'Backend developer decoding URL-encoded user input from API calls'
        },
        {
            title: 'Link Analysis',
            description: 'Analyzing and decoding URLs for security and debugging purposes',
            example: 'Security analyst decoding suspicious URLs for threat analysis'
        },
        {
            title: 'Data Processing',
            description: 'Processing URL-encoded data from web forms and submissions',
            example: 'Data processor decoding form submissions for database storage'
        },
        {
            title: 'Debugging',
            description: 'Debugging URL encoding issues in web applications',
            example: 'Developer debugging URL parameter encoding problems'
        },
        {
            title: 'Content Management',
            description: 'Decoding file names and paths from web storage systems',
            example: 'CMS developer decoding URL-encoded file paths for content management'
        }
    ],
    'urlDecoder.technicalDetails': 'Our URL decoder uses JavaScript\'s built-in decodeURIComponent() function with proper UTF-8 handling. The tool processes URL decoding, handles percent-encoded characters correctly, and provides real-time conversion. All processing happens locally using efficient decoding algorithms for optimal performance.',
    'urlDecoder.bestPractices': [
        {
            title: 'Input Validation',
            tip: 'Always validate URL-encoded input before processing to prevent errors.'
        },
        {
            title: 'Error Handling',
            tip: 'Handle decoding errors gracefully and provide user-friendly error messages.'
        },
        {
            title: 'Character Encoding',
            tip: 'Ensure proper UTF-8 encoding for international characters and special symbols.'
        },
        {
            title: 'Security Considerations',
            tip: 'Be cautious when decoding URLs from untrusted sources for security reasons.'
        }
    ],
    'urlDecoder.commonErrors': [
        {
            error: 'Invalid URL Encoding',
            cause: 'Input contains invalid percent-encoding or malformed URL strings',
            solution: 'Validate input format and ensure proper URL encoding structure.',
            prevention: 'Check input format before decoding and handle encoding errors.'
        },
        {
            error: 'Malformed Percent Encoding',
            cause: 'Incomplete or invalid percent-encoded sequences in the input',
            solution: 'Ensure all percent sequences are complete and valid.',
            prevention: 'Validate percent encoding format before processing.'
        },
        {
            error: 'Character Encoding Issues',
            cause: 'Improper UTF-8 encoding causing character decoding problems',
            solution: 'Use proper UTF-8 encoding and handle character conversion correctly.',
            prevention: 'Test with various character sets and international text.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'Using incompatible methods for URL decoding',
            solution: 'Use standard decodeURIComponent() function for cross-browser compatibility.',
            prevention: 'Test decoding across different browsers and environments.'
        }
    ],
    'urlDecoder.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'URL decoding commands in Unix/Linux systems and PowerShell',
            pros: 'Built-in availability, Scriptable, Batch processing',
            cons: 'Technical knowledge required, No GUI, Complex syntax',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'URL decoding libraries in Python, Java, JavaScript, and other languages',
            pros: 'Integration with code, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant decoding without programming requirements.'
        },
        {
            name: 'Online Decoding Services',
            useCase: 'Web-based URL decoding services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Development Tools',
            useCase: 'IDE plugins and development environment decoding tools',
            pros: 'IDE integration, Workflow integration, Advanced features',
            cons: 'IDE specific, Learning curve, Limited standalone use',
            comparison: 'Our tool provides focused decoding without development environment dependencies.'
        }
    ],
    'urlDecoder.relatedTools': [
        {
            name: 'URL Encoder',
            description: 'Convert text to URL-safe encoding',
            url: '/url-encoder'
        },
        {
            name: 'Base64 Decoder',
            description: 'Decode Base64 strings back to original text',
            url: '/base64-decoder'
        },
        {
            name: 'HTML Decoder',
            description: 'Decode HTML entities back to text',
            url: '/html-decoder'
        },
        {
            name: 'JSON Parser',
            description: 'Parse and format JSON data',
            url: '/json-parser'
        },
        {
            name: 'URL Parser',
            description: 'Parse and analyze URL components',
            url: '/url-parser'
        },
        {
            name: 'Text Decoder',
            description: 'Decode text in various formats',
            url: '/text-decoder'
        },
        {
            name: 'Query String Parser',
            description: 'Parse URL query strings into objects',
            url: '/query-string-parser'
        },
        {
            name: 'Link Validator',
            description: 'Validate and check URL formats',
            url: '/link-validator'
        }
    ],
    'urlDecoder.faqs': [
        {
            question: 'What is URL decoding?',
            answer: 'URL decoding converts percent-encoded characters back to their original form, making URL-encoded text readable again.'
        },
        {
            question: 'Why do I need URL decoding?',
            answer: 'URL decoding is needed to convert URL-encoded data back to readable text for processing, display, or storage in applications.'
        },
        {
            question: 'What characters get decoded?',
            answer: 'Percent-encoded characters like %20 (space), %26 (&), %3F (?) and UTF-8 encoded international characters get decoded back to their original form.'
        },
        {
            question: 'Is URL decoding safe?',
            answer: 'URL decoding is generally safe, but be cautious when decoding URLs from untrusted sources as they may contain malicious content.'
        },
        {
            question: 'Can I decode large text?',
            answer: 'Yes, our tool can handle large text files for URL decoding, though very large files may take longer to process.'
        },
        {
            question: 'How does auto-processing work?',
            answer: 'Auto-processing automatically decodes your URL-encoded text as you type, providing instant readable text conversion without manual button clicks.'
        },
        {
            question: 'Is my data private?',
            answer: 'All decoding happens directly in your browser. Your URL-encoded text and decoded results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What is the difference between decodeURI and decodeURIComponent?',
            answer: 'decodeURIComponent decodes all special characters while decodeURI leaves some characters like :, /, and # encoded. Our tool uses decodeURIComponent for complete decoding.'
        }
    ],
    'urlDecoder.securityNote': 'All URL decoding happens locally in your browser using JavaScript. No URL-encoded text or decoded results are stored on our servers, ensuring complete privacy and security.',
    'urlDecoder.additionalContent': 'URL decoding is essential for web development, API integration, data processing, and web application debugging. Combine our decoder with other tools like URL encoder, Base64 decoder, and query string parsers for comprehensive web development workflows.'
};
