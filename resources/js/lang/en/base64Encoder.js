export default {
    'base64Encoder.title': 'Base64 Encoder - Free Online Tool',
    'base64Encoder.auto': 'Auto',
    'base64Encoder.load_file': 'Load file:',
    'base64Encoder.encode': 'Encode',
    'base64Encoder.copy': 'Copy',
    'base64Encoder.download': 'Download',
    'base64Encoder.clear': 'Clear',
    'base64Encoder.history': 'History',
    'base64Encoder.download_all': 'Download All',
    'base64Encoder.clear_history': 'Clear History',
    'base64Encoder.paste_text_here': 'Paste text here...',
    
    // SEO Content specific to Base64 Encoder
    'base64Encoder.mainDescription': 'Free online Base64 encoder tool with text encoding, file support, and instant conversion. Perfect for data transmission and API development.',
    'base64Encoder.extendedDescription': 'Our comprehensive Base64 encoder tool helps you convert text and files to Base64 encoding instantly. Includes auto-processing, file upload support, history tracking, and export options. All operations happen in your browser for complete privacy.',
    'base64Encoder.features': [
        {
            title: 'Instant Encoding',
            description: 'Convert text to Base64 instantly with real-time processing and results'
        },
        {
            title: 'Auto-Processing Mode',
            description: 'Enable auto-processing for automatic Base64 encoding as you type'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for quick Base64 encoding and conversion'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for easy sharing and pasting'
        },
        {
            title: 'Download Results',
            description: 'Download Base64 encoded results as text files for documentation'
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
    'base64Encoder.steps': [
        'Enter or paste your text in the input field',
        'Click "Encode" button or enable auto-processing for automatic encoding',
        'View the Base64 encoded result instantly',
        'Copy to clipboard or download the encoded result',
        'Use history to track and manage previous encodings'
    ],
    'base64Encoder.examples': [
        {
            title: 'Encoding Text to Base64',
            description: 'Convert plain text to Base64 for safe transmission',
            code: 'Hello World!',
            result: 'SGVsbG8gV29ybGQh'
        },
        {
            title: 'Encoding JSON for API',
            description: 'Encode JSON data for API requests and data transmission',
            code: '{"user":"john","status":"active"}',
            result: 'eyJ1c2VyIjoiSm9obiIsInN0YXR1cyI6ImFjdGl2ZSJ9'
        },
        {
            title: 'Encoding Special Characters',
            description: 'Handle special characters and international text properly',
            code: 'Café © & Crème brûlée',
            result: 'Q2Fmw6kg4pCUICYgQ3LDqG1lIGJyw7Juw6ls',
            steps: [
                'Paste text with special characters',
                'Click "Encode" button',
                'Copy the Base64 result',
                'Use in URLs or data transmission'
            ]
        }
    ],
    'base64Encoder.useCases': [
        {
            title: 'API Development',
            description: 'Developers encoding data for API requests and authentication',
            example: 'Backend developer encoding credentials for API authentication'
        },
        {
            title: 'Data Transmission',
            description: 'Transmitting binary data safely over text-based protocols',
            example: 'Network engineer encoding configuration files for transmission'
        },
        {
            title: 'Web Development',
            description: 'Embedding images and assets directly in HTML/CSS',
            example: 'Frontend developer embedding small images directly in CSS'
        },
        {
            title: 'Email Systems',
            description: 'Encoding attachments and content for email transmission',
            example: 'Email system encoding attachments for secure transmission'
        },
        {
            title: 'Database Storage',
            description: 'Storing binary data in text-only database fields',
            example: 'Database developer encoding images for text-only storage'
        },
        {
            title: 'Security Applications',
            description: 'Basic obfuscation of sensitive data for transmission',
            example: 'Security team encoding sensitive configuration data'
        }
    ],
    'base64Encoder.technicalDetails': 'Our Base64 encoder uses JavaScript\'s built-in btoa() function with proper Unicode handling. The tool processes text encoding, handles special characters correctly, and provides real-time conversion. All processing happens locally using efficient encoding algorithms for optimal performance.',
    'base64Encoder.bestPractices': [
        {
            title: 'Character Encoding',
            tip: 'Ensure proper UTF-8 encoding for international characters and special symbols.'
        },
        {
            title: 'Data Size Limits',
            tip: 'Be aware that Base64 encoding increases data size by approximately 33%.'
        },
        {
            title: 'Security Considerations',
            tip: 'Remember Base64 is encoding, not encryption. Use proper encryption for sensitive data.'
        },
        {
            title: 'Performance Optimization',
            tip: 'Use auto-processing for small texts and manual processing for large files.'
        }
    ],
    'base64Encoder.commonErrors': [
        {
            error: 'Invalid Character Encoding',
            cause: 'Text contains invalid characters or improper encoding',
            solution: 'Ensure text uses proper UTF-8 encoding and valid characters.',
            prevention: 'Validate input text before encoding and handle special characters properly.'
        },
        {
            error: 'Large File Processing',
            cause: 'Attempting to encode very large files causing performance issues',
            solution: 'Break down large files into smaller chunks for processing.',
            prevention: 'Test with smaller file sizes and optimize for large files.'
        },
        {
            error: 'Unicode Handling Issues',
            cause: 'Improper handling of Unicode characters and international text',
            solution: 'Use proper Unicode encoding with unescape and encodeURIComponent.',
            prevention: 'Test with various character sets and international text.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'Using incompatible methods for Base64 encoding',
            solution: 'Use standard btoa() function with proper Unicode handling.',
            prevention: 'Test encoding across different browsers and environments.'
        }
    ],
    'base64Encoder.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'Base64 command in Unix/Linux systems and PowerShell',
            pros: 'Built-in availability, Scriptable, Batch processing',
            cons: 'Technical knowledge required, No GUI, Complex syntax',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'Base64 libraries in Python, Java, JavaScript, and other languages',
            pros: 'Integration with code, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool offers instant encoding without programming requirements.'
        },
        {
            name: 'Online Encoding Services',
            useCase: 'Web-based Base64 encoding services',
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
    'base64Encoder.relatedTools': [
        {
            name: 'Base64 Decoder',
            description: 'Decode Base64 strings back to original text',
            url: '/base64-decoder'
        },
        {
            name: 'Base64 to Image',
            description: 'Convert Base64 strings to images',
            url: '/base64-to-image'
        },
        {
            name: 'Image to Base64',
            description: 'Convert images to Base64 strings',
            url: '/image-to-base64'
        },
        {
            name: 'URL Encoder',
            description: 'Encode URLs for safe transmission',
            url: '/url-encoder'
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
            name: 'Text Encoder',
            description: 'Encode text in various formats',
            url: '/text-encoder'
        },
        {
            name: 'Binary Converter',
            description: 'Convert between binary and text formats',
            url: '/binary-converter'
        }
    ],
    'base64Encoder.faqs': [
        {
            question: 'What is Base64 encoding?',
            answer: 'Base64 is an encoding scheme that converts binary data into ASCII text format, commonly used for safe data transmission and storage.'
        },
        {
            question: 'How does Base64 encoding work?',
            answer: 'Base64 converts binary data into 64 different ASCII characters by representing 6 bits of data with each character, making it safe for text-based transmission.'
        },
        {
            question: 'Is Base64 encryption?',
            answer: 'No, Base64 is encoding, not encryption. It\'s easily reversible and should not be used for security purposes. Use proper encryption for sensitive data.'
        },
        {
            question: 'Does Base64 increase file size?',
            answer: 'Yes, Base64 encoding increases data size by approximately 33% due to the conversion from 8-bit to 6-bit representation.'
        },
        {
            question: 'Can I encode large files?',
            answer: 'Yes, our tool can handle large text files, but very large files may take longer to process due to browser limitations.'
        },
        {
            question: 'How does auto-processing work?',
            answer: 'Auto-processing automatically encodes your text as you type, providing instant Base64 conversion without manual button clicks.'
        },
        {
            question: 'Is my data private?',
            answer: 'All encoding happens directly in your browser. Your text and encoded results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What characters can be encoded?',
            answer: 'Base64 can encode any binary data, including special characters, Unicode text, and international characters with proper UTF-8 encoding.'
        }
    ],
    'base64Encoder.securityNote': 'All Base64 encoding happens locally in your browser using JavaScript. No text content or encoded results are stored on our servers, ensuring complete privacy and security.',
    'base64Encoder.additionalContent': 'Base64 encoding is essential for data transmission, API development, web development, and secure data handling. Combine our encoder with other tools like Base64 decoder, URL encoder, and text encoders for comprehensive data processing workflows.'
};
