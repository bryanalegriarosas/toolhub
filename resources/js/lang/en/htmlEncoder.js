export default {
    'htmlEncoder.title': 'HTML Encoder - Free Online Tool',
    'htmlEncoder.load_file': 'Load file:',
    'htmlEncoder.copy': 'Copy',
    'htmlEncoder.download_input': 'Download Input',
    'htmlEncoder.clear': 'Clear',
    'htmlEncoder.save': 'Save',
    'htmlEncoder.paste_html_here': 'Paste HTML here...',
    'htmlEncoder.encoded_html': 'Encoded HTML',
    'htmlEncoder.history': 'History',
    'htmlEncoder.restore': 'Restore',
    'htmlEncoder.download_history': 'Download History',
    'htmlEncoder.clear_history': 'Clear History',
    
    // SEO Content specific to HTML Encoder
    'htmlEncoder.mainDescription': 'Free online HTML encoder tool with character encoding, file support, and instant conversion. Perfect for web security and XSS prevention.',
    'htmlEncoder.extendedDescription': 'Our comprehensive HTML encoder tool helps you convert HTML characters to safe entities instantly. Includes real-time encoding, file upload support, history tracking, and export options. All operations happen in your browser for complete privacy.',
    'htmlEncoder.features': [
        {
            title: 'Real-time HTML Encoding',
            description: 'Convert HTML characters to safe entities instantly as you type'
        },
        {
            title: 'XSS Prevention',
            description: 'Encode user input to prevent Cross-Site Scripting attacks'
        },
        {
            title: 'File Upload Support',
            description: 'Load HTML and text files directly for quick encoding'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for easy sharing and pasting'
        },
        {
            title: 'Download Results',
            description: 'Download encoded HTML as text files for documentation'
        },
        {
            title: 'Encoding History',
            description: 'Track your encoding history with restore and download functionality'
        },
        {
            title: 'Multiple Character Support',
            description: 'Encode &, <, >, ", and \' characters to HTML entities'
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
    'htmlEncoder.steps': [
        'Paste or load your HTML/text in the input field',
        'View the encoded HTML output in real-time below',
        'Copy the encoded result or download the input file',
        'Save to history for future reference and restoration'
    ],
    'htmlEncoder.examples': [
        {
            title: 'Encoding Special Characters',
            description: 'Convert HTML special characters to safe entities',
            code: '<div class=\'container\'>Hello & Welcome!</div>',
            result: '&lt;div class=&#39;container&#39;&gt;Hello &amp; Welcome!&lt;/div&gt;'
        },
        {
            title: 'Encoding User Input',
            description: 'Encode user input to prevent XSS attacks',
            code: '<script>alert(\'XSS attack\')</script>',
            result: '&lt;script&gt;alert(&#39;XSS attack&#39;)&lt;/script&gt;',
            steps: [
                'Get user input from form',
                'Encode using HTML entities',
                'Display safely in HTML',
                'Prevent script execution'
            ]
        },
        {
            title: 'Encoding Code Examples',
            description: 'Display code snippets safely in HTML',
            code: '<p>Use &lt;strong&gt; for bold text</p>',
            result: '&lt;p&gt;Use &amp;lt;strong&amp;gt; for bold text&lt;/p&gt;'
        }
    ],
    'htmlEncoder.useCases': [
        {
            title: 'Web Security',
            description: 'Developers encoding user input to prevent XSS attacks and ensure web application security',
            example: 'Frontend developer encoding user comments before displaying them'
        },
        {
            title: 'Content Management',
            description: 'CMS systems encoding user-generated content for safe display',
            example: 'Content manager encoding blog post comments for security'
        },
        {
            title: 'Code Documentation',
            description: 'Technical writers encoding HTML code examples for documentation',
            example: 'Technical writer encoding HTML snippets for tutorial content'
        },
        {
            title: 'Form Processing',
            description: 'Processing and encoding form data for safe HTML display',
            example: 'Web developer encoding form submissions for display'
        },
        {
            title: 'Email Templates',
            description: 'Encoding HTML content for email templates and newsletters',
            example: 'Marketing specialist encoding HTML email content'
        },
        {
            title: 'API Integration',
            description: 'Encoding HTML content for API responses and data transmission',
            example: 'Backend developer encoding HTML content for JSON API responses'
        }
    ],
    'htmlEncoder.technicalDetails': 'Our HTML encoder uses JavaScript string replacement to convert special characters to HTML entities. The tool processes &, <, >, ", and \' characters by replacing them with &amp;, &lt;, &gt;, &quot;, and &#039; respectively. All processing happens locally using efficient string manipulation for optimal performance.',
    'htmlEncoder.bestPractices': [
        {
            title: 'Always Encode User Input',
            tip: 'Never trust user input - always encode it before displaying in HTML to prevent XSS attacks.'
        },
        {
            title: 'Use Contextual Encoding',
            tip: 'Use appropriate encoding based on context (HTML, attributes, JavaScript, CSS).'
        },
        {
            title: 'Validate Input First',
            tip: 'Validate user input for length and format before encoding for better security.'
        },
        {
            title: 'Test with Malicious Input',
            tip: 'Test your encoding with various XSS attack vectors to ensure proper protection.'
        }
    ],
    'htmlEncoder.commonErrors': [
        {
            error: 'Incomplete Encoding',
            cause: 'Missing some special characters or using incorrect entity names',
            solution: 'Ensure all special characters (&, <, >, ", \') are properly encoded.',
            prevention: 'Use comprehensive encoding functions that handle all HTML special characters.'
        },
        {
            error: 'Double Encoding',
            cause: 'Applying HTML encoding to already encoded content',
            solution: 'Check if content is already encoded before applying encoding.',
            prevention: 'Implement logic to detect and avoid double encoding scenarios.'
        },
        {
            error: 'Wrong Context Encoding',
            cause: 'Using HTML encoding in JavaScript or CSS contexts',
            solution: 'Use appropriate encoding for each context (HTML, JS, CSS).',
            prevention: 'Understand different encoding requirements for various contexts.'
        },
        {
            error: 'Performance Issues',
            cause: 'Encoding very large HTML documents causing browser slowdown',
            solution: 'Process large documents in chunks or implement streaming encoding.',
            prevention: 'Test performance with realistic document sizes and optimize accordingly.'
        }
    ],
    'htmlEncoder.alternatives': [
        {
            name: 'Server-side Encoding',
            useCase: 'Backend encoding libraries in PHP, Python, Java, Node.js',
            pros: 'More secure, Server control, Integration with databases',
            cons: 'Server load, Network dependency, Complexity',
            comparison: 'Our tool provides instant client-side encoding without server requirements.'
        },
        {
            name: 'Framework Built-in Functions',
            useCase: 'React, Vue, Angular built-in encoding functions',
            pros: 'Framework integration, Automatic protection, Optimized performance',
            cons: 'Framework specific, Limited control, Learning curve',
            comparison: 'Our tool offers standalone encoding without framework dependencies.'
        },
        {
            name: 'Content Security Policy',
            useCase: 'CSP headers to prevent XSS attacks',
            pros: 'Browser-level protection, No encoding needed, Comprehensive security',
            cons: 'Complex configuration, Breaking changes, Limited browser support',
            comparison: 'Our tool complements CSP with proper input encoding for layered security.'
        },
        {
            name: 'Web Application Firewalls',
            useCase: 'WAF solutions for XSS protection',
            pros: 'Advanced protection, Automatic updates, Comprehensive security',
            cons: 'Cost, Configuration complexity, False positives',
            comparison: 'Our tool provides basic encoding as a first line of defense.'
        }
    ],
    'htmlEncoder.relatedTools': [
        {
            name: 'HTML Decoder',
            description: 'Decode HTML entities back to original text',
            url: '/html-decoder'
        },
        {
            name: 'XSS Protection Checker',
            description: 'Test and validate XSS protection measures',
            url: '/xss-protection-checker'
        },
        {
            name: 'URL Encoder',
            description: 'Encode URLs for safe transmission',
            url: '/url-encoder'
        },
        {
            name: 'Base64 Encoder',
            description: 'Convert text to Base64 encoding',
            url: '/base64-encoder'
        },
        {
            name: 'JSON Encoder',
            description: 'Encode JSON data for safe transmission',
            url: '/json-encoder'
        },
        {
            name: 'CSS Encoder',
            description: 'Encode CSS for security and safety',
            url: '/css-encoder'
        },
        {
            name: 'JavaScript Encoder',
            description: 'Encode JavaScript for XSS prevention',
            url: '/javascript-encoder'
        },
        {
            name: 'XML Encoder',
            description: 'Encode XML for safe data transmission',
            url: '/xml-encoder'
        }
    ],
    'htmlEncoder.faqs': [
        {
            question: 'Which characters are encoded?',
            answer: 'Our tool encodes &, <, >, ", and \' characters to their HTML entity equivalents: &amp;, &lt;, &gt;, &quot;, and &#039; respectively.'
        },
        {
            question: 'Why is HTML encoding important?',
            answer: 'HTML encoding prevents XSS attacks by converting special characters to safe entities, ensuring user input is displayed as text rather than executed as HTML or JavaScript.'
        },
        {
            question: 'Can I encode a file?',
            answer: 'Yes, you can load .html and .txt files directly. The file contents will be automatically encoded and displayed in the output area.'
        },
        {
            question: 'Does history persist between sessions?',
            answer: 'No, encoding history is stored in browser memory and is cleared when you reload the page or close the browser tab.'
        },
        {
            question: 'Is this encoding sufficient for XSS protection?',
            answer: 'HTML encoding is a crucial first step, but comprehensive XSS protection requires multiple layers including CSP, input validation, and output encoding.'
        },
        {
            question: 'Can I encode large HTML documents?',
            answer: 'Yes, our tool can handle large HTML documents, though very large files may cause performance issues in some browsers.'
        },
        {
            question: 'Is my data private?',
            answer: 'All encoding happens directly in your browser. Your HTML content and encoded results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What about Unicode characters?',
            answer: 'Unicode characters that are not special HTML characters are left unchanged. Only &, <, >, ", and \' are encoded to HTML entities.'
        }
    ],
    'htmlEncoder.securityNote': 'All HTML encoding happens locally in your browser using JavaScript. No HTML content or encoded results are stored on our servers, ensuring complete privacy and security. This tool helps prevent XSS attacks but should be used as part of a comprehensive security strategy.',
    'htmlEncoder.additionalContent': 'HTML encoding is essential for web security, XSS prevention, content management, and safe user input handling. Combine our encoder with other security tools like XSS protection checkers, URL encoders, and content security policy implementations for comprehensive web application security.'
};
