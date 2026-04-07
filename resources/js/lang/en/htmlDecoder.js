export default {
    'htmlDecoder.title': 'HTML Decoder - Free Online Tool',
    'htmlDecoder.load_file': 'Load file:',
    'htmlDecoder.copy': 'Copy',
    'htmlDecoder.download_input': 'Download Input',
    'htmlDecoder.clear': 'Clear',
    'htmlDecoder.save': 'Save',
    'htmlDecoder.paste_encoded_html_here': 'Paste encoded HTML here...',
    'htmlDecoder.decoded_html': 'Decoded HTML',
    'htmlDecoder.history': 'History',
    'htmlDecoder.restore': 'Restore',
    'htmlDecoder.download_history': 'Download History',
    'htmlDecoder.clear_history': 'Clear History',
    
    // SEO Content specific to HTML Decoder
    'htmlDecoder.mainDescription': 'Free online HTML decoder tool with entity decoding, file support, and instant conversion. Perfect for web development and content processing.',
    'htmlDecoder.extendedDescription': 'Our comprehensive HTML decoder tool helps you convert HTML entities back to readable characters instantly. Includes real-time decoding, file upload support, history tracking, and export options. All operations happen in your browser for complete privacy.',
    'htmlDecoder.features': [
        {
            title: 'Real-time HTML Decoding',
            description: 'Convert HTML entities back to readable characters instantly as you type'
        },
        {
            title: 'Entity Recognition',
            description: 'Recognize and decode all standard HTML entities including numeric and named entities'
        },
        {
            title: 'File Upload Support',
            description: 'Load HTML and text files directly for quick decoding'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for easy sharing and pasting'
        },
        {
            title: 'Download Results',
            description: 'Download decoded HTML as text files for documentation'
        },
        {
            title: 'Decoding History',
            description: 'Track your decoding history with restore and download functionality'
        },
        {
            title: 'Multiple Entity Types',
            description: 'Handle named entities (&amp;), numeric entities (&#39;), and hexadecimal entities (&#x27;)'
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
    'htmlDecoder.steps': [
        'Paste or load your encoded HTML in the input field',
        'View the decoded HTML output in real-time below',
        'Copy the decoded result or download the input file',
        'Save to history for future reference and restoration'
    ],
    'htmlDecoder.examples': [
        {
            title: 'Decoding HTML Entities',
            description: 'Convert HTML entities back to readable characters',
            code: '&lt;div class=&#39;container&#39;&gt;Hello &amp; Welcome!&lt;/div&gt;',
            result: '<div class=\'container\'>Hello & Welcome!</div>'
        },
        {
            title: 'Decoding User Content',
            description: 'Decode safely stored user input for display',
            code: '&lt;script&gt;alert(&#39;safe now&#39;)&lt;/script&gt;',
            result: '<script>alert(\'safe now\')</script>',
            steps: [
                'Retrieve encoded content from database',
                'Decode HTML entities',
                'Display in controlled environment',
                'Ensure proper sanitization'
            ]
        },
        {
            title: 'Decoding Code Examples',
            description: 'Convert encoded code examples back to readable format',
            code: '&lt;p&gt;Use &amp;lt;strong&amp;gt; for bold text&lt;/p&gt;',
            result: '<p>Use <strong> for bold text</p>'
        }
    ],
    'htmlDecoder.useCases': [
        {
            title: 'Content Management',
            description: 'CMS systems decoding stored HTML entities for safe display',
            example: 'Content manager decoding blog post content stored with HTML entities'
        },
        {
            title: 'Data Processing',
            description: 'Processing and decoding HTML data from APIs and databases',
            example: 'Data processor decoding HTML entities from API responses'
        },
        {
            title: 'Web Development',
            description: 'Developers debugging and testing HTML entity encoding',
            example: 'Frontend developer testing HTML entity decoding in web applications'
        },
        {
            title: 'Email Processing',
            description: 'Decoding HTML content from email templates and newsletters',
            example: 'Email marketer decoding HTML content from email campaigns'
        },
        {
            title: 'Documentation',
            description: 'Technical writers converting encoded HTML examples to readable format',
            example: 'Technical writer decoding HTML code examples for documentation'
        },
        {
            title: 'Database Migration',
            description: 'Converting HTML-encoded data during database migrations',
            example: 'Database administrator migrating HTML-encoded content to new system'
        }
    ],
    'htmlDecoder.technicalDetails': 'Our HTML decoder uses JavaScript\'s built-in HTML parsing capabilities to convert entities back to characters. The tool creates a temporary textarea element, sets its innerHTML, and retrieves the decoded text value. This approach handles all standard HTML entities including named, numeric, and hexadecimal entities. All processing happens locally using efficient DOM manipulation for optimal performance.',
    'htmlDecoder.bestPractices': [
        {
            title: 'Validate Input Source',
            tip: 'Always validate the source of encoded HTML content before decoding for security.'
        },
        {
            title: 'Sanitize After Decoding',
            tip: 'Sanitize decoded content before displaying to prevent XSS attacks from malicious content.'
        },
        {
            title: 'Use Contextual Decoding',
            tip: 'Understand the context where decoded content will be used and apply appropriate security measures.'
        },
        {
            title: 'Test with Various Entities',
            tip: 'Test decoding with various entity types to ensure comprehensive support.'
        }
    ],
    'htmlDecoder.commonErrors': [
        {
            error: 'Malformed HTML Entities',
            cause: 'Input contains incomplete or incorrectly formatted HTML entities',
            solution: 'Ensure all HTML entities are properly formatted with & and ; delimiters.',
            prevention: 'Validate input format and handle malformed entities gracefully.'
        },
        {
            error: 'Invalid Entity Names',
            cause: 'Using non-standard or misspelled HTML entity names',
            solution: 'Use only standard HTML entity names supported by browsers.',
            prevention: 'Reference HTML entity specifications and validate entity names.'
        },
        {
            error: 'Security Risks',
            cause: 'Decoding malicious HTML content without proper sanitization',
            solution: 'Always sanitize decoded content before displaying in web pages.',
            prevention: 'Implement proper content sanitization and security measures.'
        },
        {
            error: 'Performance Issues',
            cause: 'Processing very large HTML documents causing browser slowdown',
            solution: 'Process large documents in chunks or implement streaming decoding.',
            prevention: 'Test performance with realistic document sizes and optimize accordingly.'
        }
    ],
    'htmlDecoder.alternatives': [
        {
            name: 'Server-side Decoding',
            useCase: 'Backend decoding libraries in PHP, Python, Java, Node.js',
            pros: 'More secure, Server control, Integration with databases',
            cons: 'Server load, Network dependency, Complexity',
            comparison: 'Our tool provides instant client-side decoding without server requirements.'
        },
        {
            name: 'Browser Developer Tools',
            useCase: 'Chrome DevTools, Firefox Developer Tools console decoding',
            pros: 'Built-in availability, Advanced debugging, Real-time testing',
            cons: 'Technical knowledge required, Limited batch processing, Manual process',
            comparison: 'Our tool offers user-friendly interface with batch processing capabilities.'
        },
        {
            name: 'Text Editors with Plugins',
            useCase: 'VS Code, Sublime Text with HTML decoding plugins',
            pros: 'Editor integration, Workflow integration, Advanced features',
            cons: 'Setup required, Editor specific, Learning curve',
            comparison: 'Our tool provides standalone decoding without editor dependencies.'
        },
        {
            name: 'Online Decoding Services',
            useCase: 'Web-based HTML decoding services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        }
    ],
    'htmlDecoder.relatedTools': [
        {
            name: 'HTML Encoder',
            description: 'Encode HTML characters to safe entities',
            url: '/html-encoder'
        },
        {
            name: 'URL Decoder',
            description: 'Decode URL-encoded strings back to original text',
            url: '/url-decoder'
        },
        {
            name: 'Base64 Decoder',
            description: 'Decode Base64 strings back to original content',
            url: '/base64-decoder'
        },
        {
            name: 'JSON Parser',
            description: 'Parse and format JSON data safely',
            url: '/json-parser'
        },
        {
            name: 'XML Decoder',
            description: 'Decode XML entities back to readable text',
            url: '/xml-decoder'
        },
        {
            name: 'Text Decoder',
            description: 'Decode text in various formats',
            url: '/text-decoder'
        },
        {
            name: 'HTML Validator',
            description: 'Validate and check HTML syntax',
            url: '/html-validator'
        },
        {
            name: 'Entity Converter',
            description: 'Convert between different entity formats',
            url: '/entity-converter'
        }
    ],
    'htmlDecoder.faqs': [
        {
            question: 'What does this tool do?',
            answer: 'Our HTML decoder converts HTML entities (like &amp;, &lt;, &gt;) back to their original characters (&, <, >) for readable display.'
        },
        {
            question: 'Which entities are supported?',
            answer: 'We support all standard HTML entities including named entities (&amp;), numeric entities (&#39;), and hexadecimal entities (&#x27;).'
        },
        {
            question: 'Can I load a file?',
            answer: 'Yes, you can load .html and .txt files directly. The file contents will be automatically decoded and displayed in the output area.'
        },
        {
            question: 'Where is history stored?',
            answer: 'History is stored only in your current browser session and does not persist between sessions or across devices.'
        },
        {
            question: 'Is decoding safe?',
            answer: 'Decoding itself is safe, but always sanitize decoded content before displaying in web pages to prevent XSS attacks.'
        },
        {
            question: 'Can I decode large HTML documents?',
            answer: 'Yes, our tool can handle large HTML documents, though very large files may cause performance issues in some browsers.'
        },
        {
            question: 'Is my data private?',
            answer: 'All decoding happens directly in your browser. Your HTML content and decoded results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What about malformed entities?',
            answer: 'Our tool handles most malformed entities gracefully, but very badly formatted entities may not decode correctly.'
        }
    ],
    'htmlDecoder.securityNote': 'All HTML decoding happens locally in your browser using JavaScript. No HTML content or decoded results are stored on our servers, ensuring complete privacy and security. Always sanitize decoded content before displaying in web pages to prevent XSS attacks.',
    'htmlDecoder.additionalContent': 'HTML decoding is essential for content management, data processing, web development, and safe content display. Combine our decoder with other tools like HTML encoder, URL decoder, and content sanitizers for comprehensive web content processing workflows.'
};
