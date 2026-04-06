export default {
    'cssMinifier.title': 'CSS Minifier',
    'cssMinifier.input_css': 'Input CSS',
    'cssMinifier.input_css_placeholder': 'Paste your CSS code here...',
    'cssMinifier.minify': 'Minify',
    'cssMinifier.copy_output': 'Copy Output',
    'cssMinifier.clear_all': 'Clear All',
    'cssMinifier.remove_comments': 'Remove comments',
    'cssMinifier.remove_extra_whitespace': 'Remove extra whitespace',
    'cssMinifier.preserve_line_breaks': 'Preserve line breaks',
    'cssMinifier.minified_output': 'Minified Output',
    'cssMinifier.statistics': 'Statistics',
    'cssMinifier.original_size': 'Original size:',
    'cssMinifier.minified_size': 'Minified size:',
    'cssMinifier.savings': 'Savings:',
    'cssMinifier.compression_ratio': 'Compression ratio:',
    'cssMinifier.paste_your_css_code_here': 'Paste your CSS code here...',
    'cssMinifier.minified_css_will_appear_here': 'Minified CSS will appear here...',
    
    // SEO Content specific to CSS Minifier
    'cssMinifier.mainDescription': 'Free online CSS minifier with customizable options, real-time compression, and detailed statistics. Perfect for developers optimizing web performance.',
    'cssMinifier.extendedDescription': 'Our comprehensive CSS minifier tool helps you compress CSS code with advanced options. Includes comment removal, whitespace optimization, line break preservation, customizable minification settings, and detailed compression statistics. All operations happen in your browser for complete privacy.',
    'cssMinifier.features': [
        {
            title: 'Real-time CSS Minification',
            description: 'Instant CSS compression as you type with automatic optimization'
        },
        {
            title: 'Customizable Minification Options',
            description: 'Flexible minification settings including comment removal, whitespace handling, and line break preservation'
        },
        {
            title: 'Compression Statistics',
            description: 'Detailed statistics showing original size, minified size, savings, and compression ratio'
        },
        {
            title: 'Comment Removal',
            description: 'Optionally remove CSS comments while preserving functionality'
        },
        {
            title: 'Whitespace Optimization',
            description: 'Smart whitespace removal with options to preserve line breaks and essential spaces'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of minified CSS and download results for production'
        },
        {
            title: 'Auto-minification',
            description: 'Automatic minification as you type with configurable options'
        },
        {
            title: 'Safe Minification',
            description: 'Preserves CSS functionality while removing unnecessary characters'
        },
        {
            title: 'Large File Support',
            description: 'Handles large CSS files efficiently with progress feedback'
        },
        {
            title: 'Syntax Preservation',
            description: 'Maintains valid CSS syntax throughout minification process'
        },
        {
            title: 'Mobile Friendly',
            description: 'Responsive design optimized for mobile and desktop minification'
        },
        {
            title: 'Privacy First',
            description: 'All CSS minification happens locally in your browser with no server storage'
        }
    ],
    'cssMinifier.steps': [
        'Paste or type your CSS code in the input textarea',
        'Configure minification options (comments, whitespace, line breaks)',
        'Click "Minify" to compress your CSS code',
        'View compression statistics and savings achieved',
        'Copy or download minified CSS for production use',
        'Use "Clear All" to reset and start new minification'
    ],
    'cssMinifier.examples': [
        {
            title: 'Basic CSS Stylesheet',
            description: 'Minify a simple CSS stylesheet with comments and whitespace',
            code: 'Input: /* Main styles */\\n.container {\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    padding: 20px;\\n}\\n\\n.header {\\n    background-color: #ffffff;\\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\\n}',
            result: 'Output: .container{max-width:1200px;margin:0 auto;padding:20px}.header{background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.1)}'
        },
        {
            title: 'Production CSS Optimization',
            description: 'Optimize production CSS with aggressive whitespace removal',
            code: 'Input: :root {\\n    --primary-color: #3498db;\\n    --secondary-color: #2ecc71;\\n    --font-size-base: 16px;\\n}\\n\\n.btn {\\n    padding: 12px 24px;\\n    font-size: var(--font-size-base);\\n    background-color: var(--primary-color);\\n    color: white;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}',
            result: 'Output: :root{--primary-color:#3498db;--secondary-color:#2ecc71;--font-size-base:16px}.btn{padding:12px 24px;font-size:var(--font-size-base);background-color:var(--primary-color);color:#fff;border:none;border-radius:4px;cursor:pointer}',
            steps: [
                'Paste production CSS code',
                'Enable all optimization options',
                'Review minified output for functionality',
                'Download optimized CSS for deployment'
            ]
        },
        {
            title: 'CSS with Media Queries',
            description: 'Minify CSS containing responsive media queries',
            code: 'Input: @media (max-width: 768px) {\\n    .container {\\n        padding: 10px;\\n    }\\n}\\n\\n@media (min-width: 769px) {\\n    .container {\\n        padding: 20px;\\n    }\\n}',
            result: 'Output: @media (max-width:768px){.container{padding:10px}}@media (min-width:769px){.container{padding:20px}}'
        }
    ],
    'cssMinifier.useCases': [
        {
            title: 'Web Performance Optimization',
            description: 'Developers optimizing CSS for faster page load times and better user experience',
            example: 'Frontend developer minifying CSS stylesheets for production deployment'
        },
        {
            title: 'Production Deployment',
            description: 'DevOps engineers preparing CSS files for production environments',
            example: 'DevOps engineer optimizing CSS assets before CDN deployment'
        },
        {
            title: 'Static Site Generation',
            description: 'Developers optimizing static CSS files for better performance',
            example: 'JAMstack developer minifying generated CSS files for static site'
        },
        {
            title: 'Email Template Optimization',
            description: 'Email marketers optimizing CSS for email templates and better deliverability',
            example: 'Email developer minifying CSS for inline email styles'
        },
        {
            title: 'CMS Content Optimization',
            description: 'Content managers optimizing CSS content for better performance',
            example: 'WordPress developer minifying CSS content for faster page loads'
        },
        {
            title: 'Mobile App Development',
            description: 'Mobile developers optimizing CSS for hybrid applications',
            example: 'Ionic developer minifying CSS for mobile app performance'
        },
        {
            title: 'SEO Enhancement',
            description: 'SEO specialists optimizing CSS for better search engine rankings',
            example: 'SEO expert minifying CSS to improve page load speed and rankings'
        },
        {
            title: 'Code Review',
            description: 'Code reviewers analyzing CSS for optimization opportunities',
            example: 'Senior developer reviewing CSS code for minification potential'
        }
    ],
    'cssMinifier.technicalDetails': 'Our CSS minifier uses advanced regex patterns and string manipulation to remove unnecessary characters while preserving CSS functionality. The tool handles CSS comments, whitespace, line breaks, and provides real-time statistics. All processing happens locally using modern JavaScript with safe minification algorithms.',
    'cssMinifier.bestPractices': [
        {
            title: 'Test Minified Output',
            tip: 'Always test minified CSS to ensure functionality is preserved after minification.'
        },
        {
            title: 'Backup Original Code',
            tip: 'Keep a backup of original CSS files before applying minification.'
        },
        {
            title: 'Use Build Tools',
            tip: 'Integrate minification into your build process for automated optimization.'
        },
        {
            title: 'Monitor Performance',
            tip: 'Measure actual performance impact of minification using web performance tools.'
        }
    ],
    'cssMinifier.commonErrors': [
        {
            error: 'Broken CSS After Minification',
            cause: 'Aggressive minification breaking CSS structure or functionality',
            solution: 'Use conservative minification settings and test output thoroughly.',
            prevention: 'Test minified CSS in different browsers and validate CSS syntax.'
        },
        {
            error: 'Lost Functionality',
            cause: 'Removing essential whitespace or comments that affect CSS rendering',
            solution: 'Review minification options and preserve necessary whitespace.',
            prevention: 'Use line break preservation and test CSS rendering after minification.'
        },
        {
            error: 'Encoding Issues',
            cause: 'Character encoding problems during minification process',
            solution: 'Ensure proper UTF-8 encoding and handle special characters correctly.',
            prevention: 'Use proper character encoding and test with international characters.'
        },
        {
            error: 'Performance Regression',
            cause: 'Minified CSS causing slower performance due to suboptimal compression',
            solution: 'Review minification settings and test actual performance impact.',
            prevention: 'Measure performance before and after minification to ensure improvements.'
        },
        {
            error: 'CSS Specificity Issues',
            cause: 'Minification affecting CSS selector specificity and cascade',
            solution: 'Test CSS specificity after minification and adjust if needed.',
            prevention: 'Use conservative minification that preserves selector structure.'
        },
        {
            error: 'File Size Limitations',
            cause: 'Browser limitations with very large CSS files',
            solution: 'Split large files into smaller components and minify separately.',
            prevention: 'Keep individual CSS files reasonably sized for better performance.'
        }
    ],
    'cssMinifier.alternatives': [
        {
            name: 'Build Tools Minifiers',
            useCase: 'Webpack, Vite, and other build tool CSS minification plugins',
            pros: 'Integrated workflow, Automated process, Advanced optimization',
            cons: 'Setup required, Build complexity, Learning curve',
            comparison: 'Our tool provides instant minification without build tool setup.'
        },
        {
            name: 'Online Minifiers',
            useCase: 'Web-based CSS minification services',
            pros: 'Cross-platform access, Additional features, No installation',
            cons: 'Privacy concerns, Internet dependency, File size limits',
            comparison: 'Our tool works offline with complete privacy and no file size limits.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'CLI tools for CSS minification and optimization',
            pros: 'Scriptable, Fast processing, CI/CD integration',
            cons: 'Setup required, Technical knowledge, No GUI',
            comparison: 'Our tool provides user-friendly interface with visual feedback.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'CSS minification extensions for code editors',
            pros: 'Editor integration, Real-time minification, Workflow integration',
            cons: 'IDE specific, Limited features, Extension installation',
            comparison: 'Our tool offers comprehensive features without IDE dependencies.'
        }
    ],
    'cssMinifier.relatedTools': [
        {
            name: 'HTML Minifier',
            description: 'Minify HTML code for better performance',
            url: '/html-minifier'
        },
        {
            name: 'JavaScript Minifier',
            description: 'Minify JavaScript code for optimization',
            url: '/js-minifier'
        },
        {
            name: 'CSS Validator',
            description: 'Validate CSS code for syntax errors',
            url: '/css-validator'
        },
        {
            name: 'CSS Formatter',
            description: 'Format and beautify CSS code',
            url: '/css-formatter'
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
    'cssMinifier.faqs': [
        {
            question: 'What does CSS minification do?',
            answer: 'CSS minification removes unnecessary characters like whitespace, comments, and formatting from your CSS code without changing its functionality. This reduces file size and improves page load times.'
        },
        {
            question: 'Is minified CSS still valid?',
            answer: 'Yes, our minifier preserves CSS validity and functionality. The minified CSS remains syntactically correct and fully functional.'
        },
        {
            question: 'How much compression can I expect?',
            answer: 'Compression varies by CSS structure, but typically you can achieve 15-40% size reduction. Well-formatted CSS with lots of whitespace and comments compresses more.'
        },
        {
            question: 'Should I preserve line breaks?',
            answer: 'Preserve line breaks if you need to maintain readability for debugging or if your build process requires specific line endings. This may slightly reduce compression but helps with maintenance.'
        },
        {
            question: 'What about CSS variables and functions?',
            answer: 'Our minifier handles CSS custom properties (variables) and functions correctly, preserving their functionality while removing unnecessary characters around them.'
        },
        {
            question: 'Can I customize the minification process?',
            answer: 'Yes, you can choose to remove comments, handle whitespace differently, and preserve line breaks based on your specific needs.'
        },
        {
            question: 'Is my CSS code private?',
            answer: 'All CSS minification happens directly in your browser. Your CSS code and minified results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What file size limits exist?',
            answer: 'Our tool handles large CSS files efficiently within browser limitations. For very large files, consider splitting into smaller components.'
        },
        {
            question: 'How do I know if minification worked?',
            answer: 'Check the compression statistics showing original size, minified size, and savings percentage. Test the minified CSS to ensure it works correctly.'
        }
    ],
    'cssMinifier.securityNote': 'All CSS minification happens locally in your browser using JavaScript. No CSS code or minified results are stored on our servers, ensuring complete privacy and security.',
    'cssMinifier.additionalContent': 'CSS minification is essential for web performance optimization, production deployment, and user experience improvement. Combine our CSS minifier with other tools like HTML minifiers, JavaScript minifiers, and performance testing tools for comprehensive web optimization workflows.'
};
