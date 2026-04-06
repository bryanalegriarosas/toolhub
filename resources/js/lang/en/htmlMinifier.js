export default {
    'htmlMinifier.title': 'HTML Minifier',
    'htmlMinifier.input_html': 'Input HTML',
    'htmlMinifier.input_html_placeholder': 'Paste your HTML code here...',
    'htmlMinifier.minify': 'Minify',
    'htmlMinifier.copy_output': 'Copy Output',
    'htmlMinifier.clear_all': 'Clear All',
    'htmlMinifier.remove_comments': 'Remove comments',
    'htmlMinifier.remove_extra_whitespace': 'Remove extra whitespace',
    'htmlMinifier.preserve_line_breaks': 'Preserve line breaks',
    'htmlMinifier.minified_output': 'Minified Output',
    'htmlMinifier.statistics': 'Statistics',
    'htmlMinifier.original_size': 'Original size:',
    'htmlMinifier.minified_size': 'Minified size:',
    'htmlMinifier.savings': 'Savings:',
    'htmlMinifier.compression_ratio': 'Compression ratio:',
    'htmlMinifier.paste_your_html_code_here': 'Paste your HTML code here...',
    'htmlMinifier.minified_html_will_appear_here': 'Minified HTML will appear here...',
    
    // SEO Content specific to HTML Minifier
    'htmlMinifier.mainDescription': 'Free online HTML minifier with customizable options, real-time compression, and detailed statistics. Perfect for developers optimizing web performance.',
    'htmlMinifier.extendedDescription': 'Our comprehensive HTML minifier tool helps you compress HTML code with advanced options. Includes comment removal, whitespace optimization, line break preservation, customizable minification settings, and detailed compression statistics. All operations happen in your browser for complete privacy.',
    'htmlMinifier.features': [
        {
            title: 'Real-time Minification',
            description: 'Instant HTML compression as you type with automatic optimization'
        },
        {
            title: 'Customizable Options',
            description: 'Flexible minification settings including comment removal, whitespace handling, and line break preservation'
        },
        {
            title: 'Compression Statistics',
            description: 'Detailed statistics showing original size, minified size, savings, and compression ratio'
        },
        {
            title: 'Comment Removal',
            description: 'Optionally remove HTML comments while preserving functionality'
        },
        {
            title: 'Whitespace Optimization',
            description: 'Smart whitespace removal with options to preserve line breaks'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of minified HTML and download results for production'
        },
        {
            title: 'Auto-minification',
            description: 'Automatic minification as you type with configurable options'
        },
        {
            title: 'Safe Minification',
            description: 'Preserves HTML functionality while removing unnecessary characters'
        },
        {
            title: 'Large File Support',
            description: 'Handles large HTML files efficiently with progress feedback'
        },
        {
            title: 'Syntax Preservation',
            description: 'Maintains valid HTML syntax throughout minification process'
        },
        {
            title: 'Mobile Friendly',
            description: 'Responsive design optimized for mobile and desktop minification'
        },
        {
            title: 'Privacy First',
            description: 'All HTML minification happens locally in your browser with no server storage'
        }
    ],
    'htmlMinifier.steps': [
        'Paste or type your HTML code in the input textarea',
        'Configure minification options (comments, whitespace, line breaks)',
        'Click "Minify" to compress your HTML code',
        'View compression statistics and savings achieved',
        'Copy or download minified HTML for production use',
        'Use "Clear All" to reset and start new minification'
    ],
    'htmlMinifier.examples': [
        {
            title: 'Basic HTML Document',
            description: 'Minify a simple HTML document with comments and whitespace',
            code: 'Input: <!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello World</h1><!-- This is a comment --><p>Welcome to my website</p></body></html>',
            result: 'Output: <!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello World</h1><p>Welcome to my website</p></body></html>'
        },
        {
            title: 'Production HTML Optimization',
            description: 'Optimize production HTML with aggressive whitespace removal',
            code: 'Input: <html lang="en"><head><meta charset="UTF-8"><title>Optimized Page</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="styles.css"></head><body><header><nav><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li></ul></nav></body></html>',
            result: 'Output: <html lang="en"><head><meta charset="UTF-8"><title>Optimized Page</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="styles.css"></head><body><header><nav><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li></ul></nav></body></html>',
            steps: [
                'Paste production HTML code',
                'Enable all optimization options',
                'Review minified output for functionality',
                'Download optimized HTML for deployment'
            ]
        },
        {
            title: 'HTML with Inline Scripts',
            description: 'Minify HTML containing JavaScript and CSS',
            code: 'Input: <!DOCTYPE html><html><head><script>console.log("Hello");</script><style>body { margin: 0; }</style></head><body><div class="container">Content</div></body></html>',
            result: 'Output: <!DOCTYPE html><html><head><script>console.log("Hello");</script><style>body{margin:0}</style></head><body><div class="container">Content</div></body></html>'
        }
    ],
    'htmlMinifier.useCases': [
        {
            title: 'Web Performance Optimization',
            description: 'Developers optimizing HTML for faster page load times and better user experience',
            example: 'Frontend developer minifying HTML templates for production deployment'
        },
        {
            title: 'Production Deployment',
            description: 'DevOps engineers preparing HTML files for production environments',
            example: 'DevOps engineer optimizing HTML assets before CDN deployment'
        },
        {
            title: 'Static Site Generation',
            description: 'Developers optimizing static HTML sites for better performance',
            example: 'JAMstack developer minifying generated HTML files for static site'
        },
        {
            title: 'Email Template Optimization',
            description: 'Email marketers optimizing HTML email templates for smaller file sizes',
            example: 'Email developer minifying HTML email templates for better deliverability'
        },
        {
            title: 'CMS Content Optimization',
            description: 'Content managers optimizing HTML content for better performance',
            example: 'WordPress developer minifying HTML content for faster page loads'
        },
        {
            title: 'Mobile App Development',
            description: 'Mobile developers optimizing HTML for hybrid applications',
            example: 'Ionic developer minifying HTML templates for mobile app performance'
        },
        {
            title: 'SEO Enhancement',
            description: 'SEO specialists optimizing HTML for better search engine rankings',
            example: 'SEO expert minifying HTML to improve page load speed and rankings'
        },
        {
            title: 'Code Review',
            description: 'Code reviewers analyzing HTML for optimization opportunities',
            example: 'Senior developer reviewing HTML code for minification potential'
        }
    ],
    'htmlMinifier.technicalDetails': 'Our HTML minifier uses advanced regex patterns and string manipulation to remove unnecessary characters while preserving HTML functionality. The tool handles HTML comments, whitespace, line breaks, and provides real-time statistics. All processing happens locally using modern JavaScript with safe minification algorithms.',
    'htmlMinifier.bestPractices': [
        {
            title: 'Test Minified Output',
            tip: 'Always test minified HTML to ensure functionality is preserved after minification.'
        },
        {
            title: 'Backup Original Code',
            tip: 'Keep a backup of original HTML files before applying minification.'
        },
        {
            title: 'Use Build Tools',
            tip: 'Integrate minification into your build process for automated optimization.'
        },
        {
            title: 'Monitor Performance',
            tip: 'Measure the actual performance impact of minification using web performance tools.'
        }
    ],
    'htmlMinifier.commonErrors': [
        {
            error: 'Broken HTML After Minification',
            cause: 'Aggressive minification breaking HTML structure or functionality',
            solution: 'Use conservative minification settings and test output thoroughly.',
            prevention: 'Test minified HTML in different browsers and validate HTML structure.'
        },
        {
            error: 'Lost Functionality',
            cause: 'Removing essential whitespace or comments that affect JavaScript execution',
            solution: 'Review minification options and preserve necessary whitespace.',
            prevention: 'Use line break preservation and test JavaScript functionality after minification.'
        },
        {
            error: 'Encoding Issues',
            cause: 'Character encoding problems during minification process',
            solution: 'Ensure proper UTF-8 encoding and handle special characters correctly.',
            prevention: 'Use proper character encoding and test with international characters.'
        },
        {
            error: 'Performance Regression',
            cause: 'Minified HTML causing slower performance due to suboptimal compression',
            solution: 'Review minification settings and test actual performance impact.',
            prevention: 'Measure performance before and after minification to ensure improvements.'
        },
        {
            error: 'CSS and JavaScript Issues',
            cause: 'Minification affecting inline styles and scripts',
            solution: 'Use appropriate minification settings for content with inline code.',
            prevention: 'Test inline scripts and styles separately after minification.'
        },
        {
            error: 'File Size Limitations',
            cause: 'Browser limitations with very large HTML files',
            solution: 'Split large files into smaller components and minify separately.',
            prevention: 'Keep individual HTML files reasonably sized for better performance.'
        }
    ],
    'htmlMinifier.alternatives': [
        {
            name: 'Build Tools Minifiers',
            useCase: 'Webpack, Vite, and other build tool minification plugins',
            pros: 'Integrated workflow, Automated process, Advanced optimization',
            cons: 'Setup required, Build complexity, Learning curve',
            comparison: 'Our tool provides instant minification without build tool setup.'
        },
        {
            name: 'Online Minifiers',
            useCase: 'Web-based HTML minification services',
            pros: 'Cross-platform access, Additional features, No installation',
            cons: 'Privacy concerns, Internet dependency, File size limits',
            comparison: 'Our tool works offline with complete privacy and no file size limits.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'CLI tools for HTML minification and optimization',
            pros: 'Scriptable, Fast processing, CI/CD integration',
            cons: 'Setup required, Technical knowledge, No GUI',
            comparison: 'Our tool provides user-friendly interface with visual feedback.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'HTML minification extensions for code editors',
            pros: 'Editor integration, Real-time minification, Workflow integration',
            cons: 'IDE specific, Limited features, Extension installation',
            comparison: 'Our tool offers comprehensive features without IDE dependencies.'
        }
    ],
    'htmlMinifier.relatedTools': [
        {
            name: 'CSS Minifier',
            description: 'Minify CSS code for better performance',
            url: '/css-minifier'
        },
        {
            name: 'JavaScript Minifier',
            description: 'Minify JavaScript code for optimization',
            url: '/js-minifier'
        },
        {
            name: 'HTML Validator',
            description: 'Validate HTML code for syntax errors',
            url: '/html-validator'
        },
        {
            name: 'Code Formatter',
            description: 'Format and beautify HTML code',
            url: '/html-formatter'
        },
        {
            name: 'Image Optimizer',
            description: 'Optimize images for web performance',
            url: '/image-optimizer'
        },
        {
            name: 'Bundle Analyzer',
            description: 'Analyze bundle sizes and dependencies',
            url: '/bundle-analyzer'
        },
        {
            name: 'Performance Test',
            description: 'Test website performance and optimization',
            url: '/website-speed-test'
        },
        {
            name: 'Lighthouse Audit',
            description: 'Run comprehensive web performance audits',
            url: '/lighthouse-audit'
        },
        {
            name: 'Cache Checker',
            description: 'Check browser caching and optimization',
            url: '/cache-checker'
        }
    ],
    'htmlMinifier.faqs': [
        {
            question: 'What does HTML minification do?',
            answer: 'HTML minification removes unnecessary characters like whitespace, comments, and formatting from your HTML code without changing its functionality. This reduces file size and improves page load times.'
        },
        {
            question: 'Is minified HTML still valid?',
            answer: 'Yes, our minifier preserves HTML validity and functionality. The minified HTML remains syntactically correct and fully functional.'
        },
        {
            question: 'How much compression can I expect?',
            answer: 'Compression varies by HTML structure, but typically you can achieve 10-30% size reduction. Well-formatted HTML with lots of whitespace and comments compresses more.'
        },
        {
            question: 'Should I preserve line breaks?',
            answer: 'Preserve line breaks if you need to maintain readability for debugging or if your build process requires specific line endings. This may slightly reduce compression but helps with maintenance.'
        },
        {
            question: 'What about inline JavaScript and CSS?',
            answer: 'Our minifier handles inline code within HTML, but be cautious with aggressive settings that might affect script execution or styling.'
        },
        {
            question: 'Can I customize the minification process?',
            answer: 'Yes, you can choose to remove comments, handle whitespace differently, and preserve line breaks based on your specific needs.'
        },
        {
            question: 'Is my HTML code private?',
            answer: 'All HTML minification happens directly in your browser. Your HTML code and minified results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What file size limits exist?',
            answer: 'Our tool handles large HTML files efficiently within browser limitations. For very large files, consider splitting into smaller components.'
        },
        {
            question: 'How do I know if minification worked?',
            answer: 'Check the compression statistics showing original size, minified size, and savings percentage. Test the minified HTML to ensure it works correctly.'
        }
    ],
    'htmlMinifier.securityNote': 'All HTML minification happens locally in your browser using JavaScript. No HTML code or minified results are stored on our servers, ensuring complete privacy and security.',
    'htmlMinifier.additionalContent': 'HTML minification is essential for web performance optimization, production deployment, and user experience improvement. Combine our HTML minifier with other tools like CSS minifiers, JavaScript minifiers, and performance testing tools for comprehensive web optimization workflows.'
};
