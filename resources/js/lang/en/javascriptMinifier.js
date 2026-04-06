export default {
    'javascriptMinifier.title': 'JavaScript Minifier',
    'javascriptMinifier.input_javascript': 'Input JavaScript',
    'javascriptMinifier.input_javascript_placeholder': 'Paste your JavaScript code here...',
    'javascriptMinifier.minify': 'Minify',
    'javascriptMinifier.copy_output': 'Copy Output',
    'javascriptMinifier.clear_all': 'Clear All',
    'javascriptMinifier.remove_comments': 'Remove comments',
    'javascriptMinifier.remove_extra_whitespace': 'Remove extra whitespace',
    'javascriptMinifier.preserve_line_breaks': 'Preserve line breaks',
    'javascriptMinifier.minified_output': 'Minified Output',
    'javascriptMinifier.statistics': 'Statistics',
    'javascriptMinifier.original_size': 'Original size:',
    'javascriptMinifier.minified_size': 'Minified size:',
    'javascriptMinifier.savings': 'Savings:',
    'javascriptMinifier.compression_ratio': 'Compression ratio:',
    'javascriptMinifier.paste_your_javascript_code_here': 'Paste your JavaScript code here...',
    'javascriptMinifier.minified_javascript_will_appear_here': 'Minified JavaScript will appear here...',
    
    // SEO Content specific to JavaScript Minifier
    'javascriptMinifier.mainDescription': 'Free online JavaScript minifier with customizable options, real-time compression, and detailed statistics. Perfect for developers optimizing web performance.',
    'javascriptMinifier.extendedDescription': 'Our comprehensive JavaScript minifier tool helps you compress JavaScript code with advanced options. Includes comment removal, whitespace optimization, line break preservation, customizable minification settings, and detailed compression statistics. All operations happen in your browser for complete privacy.',
    'javascriptMinifier.features': [
        {
            title: 'Real-time JavaScript Minification',
            description: 'Instant JavaScript compression as you type with automatic optimization'
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
            description: 'Optionally remove JavaScript comments while preserving functionality'
        },
        {
            title: 'Whitespace Optimization',
            description: 'Smart whitespace removal with options to preserve line breaks and essential spaces'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of minified JavaScript and download results for production'
        },
        {
            title: 'Auto-minification',
            description: 'Automatic minification as you type with configurable options'
        },
        {
            title: 'Safe Minification',
            description: 'Preserves JavaScript functionality while removing unnecessary characters'
        },
        {
            title: 'Large File Support',
            description: 'Handles large JavaScript files efficiently with progress feedback'
        },
        {
            title: 'Syntax Preservation',
            description: 'Maintains valid JavaScript syntax throughout minification process'
        },
        {
            title: 'Mobile Friendly',
            description: 'Responsive design optimized for mobile and desktop minification'
        },
        {
            title: 'Privacy First',
            description: 'All JavaScript minification happens locally in your browser with no server storage'
        }
    ],
    'javascriptMinifier.steps': [
        'Paste or type your JavaScript code in the input textarea',
        'Configure minification options (comments, whitespace, line breaks)',
        'Click "Minify" to compress your JavaScript code',
        'View compression statistics and savings achieved',
        'Copy or download minified JavaScript for production use',
        'Use "Clear All" to reset and start new minification'
    ],
    'javascriptMinifier.examples': [
        {
            title: 'Basic JavaScript Function',
            description: 'Minify a simple JavaScript function with comments and whitespace',
            code: 'Input: function calculateTotal(items) {\\n    let total = 0;\\n    for (let item of items) {\\n        total += item.price * item.quantity;\\n    }\\n    return total;\\n}',
            result: 'Output: function calculateTotal(items){let total=0;for(let item of items){total+=item.price*item.quantity;}return total;}'
        },
        {
            title: 'Production JavaScript Optimization',
            description: 'Optimize production JavaScript with aggressive whitespace removal',
            code: 'Input: const API_URL = "https://api.example.com";\\nconst API_KEY = "your-secret-key";\\n\\n// Fetch data from API\\nasync function fetchData() {\\n    const response = await fetch(API_URL, {\\n        headers: {\\n            "Authorization": `Bearer ${API_KEY}`\\n        }\\n    });\\n    return response.json();\\n}',
            result: 'Output: const API_URL="https://api.example.com";const API_KEY="your-secret-key";async function fetchData(){const response=await fetch(API_URL,{headers:{"Authorization":`Bearer ${API_KEY}`}});return response.json();}',
            steps: [
                'Paste production JavaScript code',
                'Enable all optimization options',
                'Review minified output for functionality',
                'Download optimized JavaScript for deployment'
            ]
        },
        {
            title: 'JavaScript with ES6 Features',
            description: 'Minify JavaScript containing modern ES6 syntax and arrow functions',
            code: 'Input: const users = ["Alice", "Bob", "Charlie"];\\nconst activeUsers = users.filter(user => user.isActive);\\nconst totalUsers = activeUsers.length;\\n\\nconsole.log(`Active users: ${totalUsers}`);\\n',
            result: 'Output: const users=["Alice","Bob","Charlie"];const activeUsers=users.filter(user=>user.isActive);const totalUsers=activeUsers.length;console.log(`Active users: ${totalUsers}`);'
        }
    ],
    'javascriptMinifier.useCases': [
        {
            title: 'Web Performance Optimization',
            description: 'Developers optimizing JavaScript for faster page load times and better user experience',
            example: 'Frontend developer minifying JavaScript files for production deployment'
        },
        {
            title: 'Production Deployment',
            description: 'DevOps engineers preparing JavaScript files for production environments',
            example: 'DevOps engineer optimizing JavaScript assets before CDN deployment'
        },
        {
            title: 'Static Site Generation',
            description: 'Developers optimizing static JavaScript files for better performance',
            example: 'JAMstack developer minifying generated JavaScript files for static site'
        },
        {
            title: 'Mobile App Development',
            description: 'Mobile developers optimizing JavaScript for hybrid applications',
            example: 'React Native developer minifying JavaScript bundles for mobile app performance'
        },
        {
            title: 'SEO Enhancement',
            description: 'SEO specialists optimizing JavaScript for better search engine rankings',
            example: 'SEO expert minifying JavaScript to improve page load speed and rankings'
        },
        {
            title: 'Code Review',
            description: 'Code reviewers analyzing JavaScript for optimization opportunities',
            example: 'Senior developer reviewing JavaScript code for minification potential'
        }
    ],
    'javascriptMinifier.technicalDetails': 'Our JavaScript minifier uses advanced regex patterns and string manipulation to remove unnecessary characters while preserving JavaScript functionality. The tool handles JavaScript comments, whitespace, line breaks, and provides real-time statistics. All processing happens locally using modern JavaScript with safe minification algorithms.',
    'javascriptMinifier.bestPractices': [
        {
            title: 'Test Minified Output',
            tip: 'Always test minified JavaScript to ensure functionality is preserved after minification.'
        },
        {
            title: 'Backup Original Code',
            tip: 'Keep a backup of original JavaScript files before applying minification.'
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
    'javascriptMinifier.commonErrors': [
        {
            error: 'Broken JavaScript After Minification',
            cause: 'Aggressive minification breaking JavaScript structure or functionality',
            solution: 'Use conservative minification settings and test output thoroughly.',
            prevention: 'Test minified JavaScript in different browsers and validate JavaScript syntax.'
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
            cause: 'Minified JavaScript causing slower performance due to suboptimal compression',
            solution: 'Review minification settings and test actual performance impact.',
            prevention: 'Measure performance before and after minification to ensure improvements.'
        },
        {
            error: 'JavaScript Specificity Issues',
            cause: 'Minification affecting JavaScript variables and function declarations',
            solution: 'Test JavaScript execution after minification and adjust if needed.',
            prevention: 'Use conservative minification that preserves variable declarations.'
        },
        {
            error: 'File Size Limitations',
            cause: 'Browser limitations with very large JavaScript files',
            solution: 'Split large files into smaller components and minify separately.',
            prevention: 'Keep individual JavaScript files reasonably sized for better performance.'
        }
    ],
    'javascriptMinifier.alternatives': [
        {
            name: 'Build Tools Minifiers',
            useCase: 'Webpack, Vite, and other build tool JavaScript minification plugins',
            pros: 'Integrated workflow, Automated process, Advanced optimization',
            cons: 'Setup required, Build complexity, Learning curve',
            comparison: 'Our tool provides instant minification without build tool setup.'
        },
        {
            name: 'Online Minifiers',
            useCase: 'Web-based JavaScript minification services',
            pros: 'Cross-platform access, Additional features, No installation',
            cons: 'Privacy concerns, Internet dependency, File size limits',
            comparison: 'Our tool works offline with complete privacy and no file size limits.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'CLI tools for JavaScript minification and optimization',
            pros: 'Scriptable, Fast processing, CI/CD integration',
            cons: 'Setup required, Technical knowledge, No GUI',
            comparison: 'Our tool provides user-friendly interface with visual feedback.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'JavaScript minification extensions for code editors',
            pros: 'Editor integration, Real-time minification, Workflow integration',
            cons: 'IDE specific, Limited features, Extension installation',
            comparison: 'Our tool offers comprehensive features without IDE dependencies.'
        }
    ],
    'javascriptMinifier.relatedTools': [
        {
            name: 'HTML Minifier',
            description: 'Minify HTML code for better performance',
            url: '/html-minifier'
        },
        {
            name: 'CSS Minifier',
            description: 'Minify CSS code for optimization',
            url: '/css-minifier'
        },
        {
            name: 'JavaScript Validator',
            description: 'Validate JavaScript code for syntax errors',
            url: '/javascript-validator'
        },
        {
            name: 'Code Formatter',
            description: 'Format and beautify JavaScript code',
            url: '/javascript-formatter'
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
    'javascriptMinifier.faqs': [
        {
            question: 'What does JavaScript minification do?',
            answer: 'JavaScript minification removes unnecessary characters like whitespace, comments, and formatting from your JavaScript code without changing its functionality. This reduces file size and improves page load times.'
        },
        {
            question: 'Is minified JavaScript still valid?',
            answer: 'Yes, our minifier preserves JavaScript validity and functionality. The minified JavaScript remains syntactically correct and fully functional.'
        },
        {
            question: 'How much compression can I expect?',
            answer: 'Compression varies by JavaScript structure, but typically you can achieve 20-40% size reduction. Well-formatted JavaScript with lots of whitespace and comments compresses more.'
        },
        {
            question: 'Should I preserve line breaks?',
            answer: 'Preserve line breaks if you need to maintain readability for debugging or if your build process requires specific line endings. This may slightly reduce compression but helps with maintenance.'
        },
        {
            question: 'What about modern JavaScript syntax?',
            answer: 'Our minifier handles modern JavaScript syntax including ES6 features, arrow functions, and template literals correctly while maintaining functionality.'
        },
        {
            question: 'Can I customize the minification process?',
            answer: 'Yes, you can choose to remove comments, handle whitespace differently, and preserve line breaks based on your specific needs.'
        },
        {
            question: 'Is my JavaScript code private?',
            answer: 'All JavaScript minification happens directly in your browser. Your JavaScript code and minified results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What file size limits exist?',
            answer: 'Our tool handles large JavaScript files efficiently within browser limitations. For very large files, consider splitting into smaller components.'
        },
        {
            question: 'How do I know if minification worked?',
            answer: 'Check the compression statistics showing original size, minified size, and savings percentage. Test the minified JavaScript to ensure it works correctly.'
        }
    ],
    'javascriptMinifier.securityNote': 'All JavaScript minification happens locally in your browser using JavaScript. No JavaScript code or minified results are stored on our servers, ensuring complete privacy and security.',
    'javascriptMinifier.additionalContent': 'JavaScript minification is essential for web performance optimization, production deployment, and user experience improvement. Combine our JavaScript minifier with other tools like CSS minifiers, HTML minifiers, and performance testing tools for comprehensive web optimization workflows.'
};
