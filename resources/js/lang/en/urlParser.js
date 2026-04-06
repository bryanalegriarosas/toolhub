export default {
    'urlParser.title': 'URL Parser',
    'urlParser.copy': 'Copy',
    'urlParser.download_url': 'Download URL',
    'urlParser.clear': 'Clear',
    'urlParser.save': 'Save',
    'urlParser.url_placeholder': 'https://example.com:8080/path?name=john&id=1#top',
    'urlParser.protocol': 'Protocol:',
    'urlParser.host': 'Host:',
    'urlParser.hostname': 'Hostname:',
    'urlParser.port': 'Port:',
    'urlParser.path': 'Path:',
    'urlParser.hash': 'Hash:',
    'urlParser.query_parameters': 'Query Parameters:',
    'urlParser.none': 'None',
    'urlParser.invalid_url': 'Invalid URL',
    'urlParser.history': 'History',
    'urlParser.restore': 'Restore',
    'urlParser.download_history': 'Download History',
    'urlParser.clear_history': 'Clear History',
    
    // SEO Content specific to URL Parser
    'urlParser.mainDescription': 'Free online URL parser tool with component breakdown, parameter extraction, and history tracking. Perfect for developers analyzing URL structures.',
    'urlParser.extendedDescription': 'Our comprehensive URL parser tool helps you break down URLs into individual components with detailed analysis. Includes protocol detection, hostname extraction, port identification, path parsing, query parameter extraction, hash analysis, and history management. All operations happen in your browser for complete privacy.',
    'urlParser.features': [
        {
            title: 'Complete URL Breakdown',
            description: 'Parse URLs into all components: protocol, host, port, path, query, and hash'
        },
        {
            title: 'Query Parameter Extraction',
            description: 'Extract and display all query parameters with their values in organized format'
        },
        {
            title: 'Protocol Detection',
            description: 'Automatically detect and display URL protocols (http, https, ftp, etc.)'
        },
        {
            title: 'Port Identification',
            description: 'Extract and display port numbers from URLs with default port handling'
        },
        {
            title: 'Hostname Analysis',
            description: 'Separate hostname from full host for detailed domain analysis'
        },
        {
            title: 'Path Component Parsing',
            description: 'Extract and display the path component of URLs for routing analysis'
        },
        {
            title: 'Hash Fragment Analysis',
            description: 'Extract and display hash/fragment identifiers from URLs'
        },
        {
            title: 'History Tracking',
            description: 'Save and manage parsed URLs with timestamps for quick access'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of parsed components and download results for documentation'
        },
        {
            title: 'Error Handling',
            description: 'Robust error handling with clear invalid URL messages'
        },
        {
            title: 'Real-time Parsing',
            description: 'Instant URL parsing as you type with automatic component extraction'
        },
        {
            title: 'Mobile Friendly',
            description: 'Responsive design optimized for mobile and desktop URL parsing'
        },
        {
            title: 'Privacy First',
            description: 'All URL parsing happens locally in your browser with no server storage'
        }
    ],
    'urlParser.steps': [
        'Enter or paste a complete URL in the input field',
        'View instant breakdown of all URL components',
        'Analyze query parameters and their values',
        'Use copy or download buttons for documentation purposes',
        'Save frequently parsed URLs to history for quick access',
        'Restore previous URLs from history when needed'
    ],
    'urlParser.examples': [
        {
            title: 'E-commerce Product URL',
            description: 'Parse complex product URL with multiple parameters',
            code: 'Input: https://example.com/products/laptop?category=electronics&brand=dell&price=999&sort=rating',
            result: 'Protocol: https | Host: example.com | Path: /products/laptop | Query: category=electronics&brand=dell&price=999&sort=rating'
        },
        {
            title: 'API Endpoint URL',
            description: 'Parse API endpoint with path and query parameters',
            code: 'Input: https://api.example.com/v1/users/123/posts?limit=10&sort=created_at&order=desc',
            result: 'Protocol: https | Host: api.example.com | Path: /v1/users/123/posts | Query: limit=10&sort=created_at&order=desc',
            steps: [
                'Enter API endpoint URL',
                'Extract path parameters (user ID: 123)',
                'Parse query parameters for filtering',
                'Use components for API requests'
            ]
        },
        {
            title: 'Social Media Share URL',
            description: 'Parse social media sharing URL with encoded parameters',
            code: 'Input: https://twitter.com/intent/tweet?text=Hello%20World&url=https://example.com&hashtags=web,development',
            result: 'Protocol: https | Host: twitter.com | Path: /intent/tweet | Query: text=Hello World&url=https://example.com&hashtags=web,development'
        }
    ],
    'urlParser.useCases': [
        {
            title: 'Web Development',
            description: 'Developers analyzing URL structures for routing and parameter handling',
            example: 'Frontend developer parsing URL parameters for React Router configuration'
        },
        {
            title: 'API Development',
            description: 'Backend developers extracting endpoint information and parameters',
            example: 'API developer parsing request URLs for endpoint routing'
        },
        {
            title: 'Security Analysis',
            description: 'Security professionals analyzing URLs for potential vulnerabilities',
            example: 'Security analyst checking URL parameters for injection risks'
        },
        {
            title: 'SEO Optimization',
            description: 'SEO specialists analyzing URL structures for search engine optimization',
            example: 'SEO expert analyzing URL paths and parameters for ranking factors'
        },
        {
            title: 'Data Extraction',
            description: 'Data scientists extracting structured information from URL collections',
            example: 'Data analyst extracting query parameters from log file URLs'
        },
        {
            title: 'URL Validation',
            description: 'Quality assurance engineers testing URL format and structure',
            example: 'QA engineer validating URL formats in web applications'
        },
        {
            title: 'Educational Purposes',
            description: 'Students learning about URL structure and components',
            example: 'Computer science student understanding URL anatomy and parsing'
        },
        {
            title: 'Debugging Applications',
            description: 'Developers debugging URL-related issues in web applications',
            example: 'Full-stack developer troubleshooting URL routing problems'
        }
    ],
    'urlParser.technicalDetails': 'Our URL parser uses the built-in JavaScript URL constructor for accurate parsing. The tool handles protocol detection, hostname extraction, port identification, path parsing, query parameter extraction using URLSearchParams, and hash fragment analysis. All processing happens locally using modern JavaScript with comprehensive error handling.',
    'urlParser.bestPractices': [
        {
            title: 'URL Encoding',
            tip: 'Always properly encode special characters in URLs using encodeURIComponent() for query parameters.'
        },
        {
            title: 'Parameter Validation',
            tip: 'Validate extracted parameters before using them in applications to prevent security issues.'
        },
        {
            title: 'Protocol Security',
            tip: 'Use HTTPS protocol whenever possible to ensure secure communication.'
        },
        {
            title: 'URL Length Limits',
            tip: 'Be aware of URL length limits (typically 2048 characters) for browser compatibility.'
        }
    ],
    'urlParser.commonErrors': [
        {
            error: 'Invalid URL Format',
            cause: 'Entering malformed URLs or missing required components',
            solution: 'Ensure URL includes protocol and valid domain format.',
            prevention: 'Use URL validation libraries and test URLs before implementation.'
        },
        {
            error: 'Missing Protocol',
            cause: 'URLs without protocol specification (http:// or https://)',
            solution: 'Always include protocol in URLs or use protocol-relative URLs.',
            prevention: 'Implement automatic protocol detection and addition in applications.'
        },
        {
            error: 'Encoding Issues',
            cause: 'Improper URL encoding of special characters and parameters',
            solution: 'Use proper URL encoding functions for special characters.',
            prevention: 'Always encode query parameters and path segments with special characters.'
        },
        {
            error: 'Port Specification Errors',
            cause: 'Incorrect port numbers or port specification in wrong format',
            solution: 'Use valid port numbers (1-65535) and proper port syntax.',
            prevention: 'Validate port numbers and handle default ports appropriately.'
        },
        {
            error: 'Parameter Parsing Issues',
            cause: 'Complex query parameters not parsed correctly due to formatting',
            solution: 'Use standard query parameter format with proper encoding.',
            prevention: 'Follow URL standards for parameter formatting and encoding.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'URL parsing differences across browsers causing inconsistent results',
            solution: 'Use modern URL APIs and test across different browsers.',
            prevention: 'Use standardized URL parsing methods and polyfills for older browsers.'
        }
    ],
    'urlParser.alternatives': [
        {
            name: 'Browser URL Bar',
            useCase: 'Using browser address bar for basic URL inspection',
            pros: 'Built-in to browser, Instant access, No installation needed',
            cons: 'Limited parsing, No component breakdown, No history tracking',
            comparison: 'Our tool provides detailed component breakdown and parameter extraction.'
        },
        {
            name: 'Online URL Decoders',
            useCase: 'Web-based URL decoding and parsing services',
            pros: 'Cross-platform access, Additional features, No installation',
            cons: 'Privacy concerns, Internet dependency, Potential ads',
            comparison: 'Our tool works offline with complete privacy and no distractions.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'CLI tools for URL parsing and analysis',
            pros: 'Scriptable, Fast processing, Automation friendly',
            cons: 'Setup required, Technical knowledge, No GUI',
            comparison: 'Our tool provides user-friendly interface with visual component breakdown.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'URL parsing libraries in various programming languages',
            pros: 'Integration with code, Advanced features, Custom parsing',
            cons: 'Programming required, Implementation complexity, Dependency management',
            comparison: 'Our tool offers instant parsing without programming requirements.'
        }
    ],
    'urlParser.relatedTools': [
        {
            name: 'URL Encoder/Decoder',
            description: 'Encode and decode URLs for web applications',
            url: '/url-encoder-decoder'
        },
        {
            name: 'Query String Parser',
            description: 'Parse and manipulate query strings',
            url: '/query-string-parser'
        },
        {
            name: 'Base64 Encoder',
            description: 'Encode and decode Base64 strings',
            url: '/base64-encoder'
        },
        {
            name: 'URL Shortener',
            description: 'Create and analyze shortened URLs',
            url: '/url-shortener'
        },
        {
            name: 'HTTP Header Checker',
            description: 'Check and analyze HTTP headers of any URL',
            url: '/http-header-checker'
        },
        {
            name: 'Redirect Checker',
            description: 'Check URL redirects and chains',
            url: '/redirect-checker'
        },
        {
            name: 'SSL Checker',
            description: 'Check SSL certificate status and details',
            url: '/ssl-checker'
        },
        {
            name: 'DNS Lookup',
            description: 'Perform DNS queries and lookups',
            url: '/dns-lookup'
        },
        {
            name: 'Website Speed Test',
            description: 'Test website performance and speed',
            url: '/website-speed-test'
        }
    ],
    'urlParser.faqs': [
        {
            question: 'What components can be parsed from a URL?',
            answer: 'Our tool parses protocol, host, hostname, port, pathname, query parameters, and hash fragments. Each component is extracted and displayed separately for detailed analysis.'
        },
        {
            question: 'How are query parameters extracted?',
            answer: 'Query parameters are extracted using the URLSearchParams API, which automatically decodes URL-encoded parameters and separates them into key-value pairs for easy access.'
        },
        {
            question: 'What happens with invalid URLs?',
            answer: 'Invalid URLs trigger an error message and no parsing results are displayed. The tool uses try-catch blocks to handle malformed URLs gracefully.'
        },
        {
            question: 'Can I parse URLs with special characters?',
            answer: 'Yes, the tool handles URL-encoded characters automatically. Special characters in URLs should be properly encoded using standard URL encoding methods.'
        },
        {
            question: 'How is the port number handled?',
            answer: 'Port numbers are extracted separately from the host. If no port is specified, the tool shows the default port for the protocol (80 for HTTP, 443 for HTTPS).'
        },
        {
            question: 'What about relative URLs?',
            answer: 'The JavaScript URL constructor requires absolute URLs with protocols. Relative URLs will show as invalid. Use full URLs with protocols for best results.'
        },
        {
            question: 'Can I parse multiple URLs at once?',
            answer: 'Currently, the tool parses one URL at a time. You can use the history feature to save multiple parsed URLs for quick access.'
        },
        {
            question: 'How is the hash fragment processed?',
            answer: 'Hash fragments (everything after #) are extracted separately and displayed without decoding. This is useful for single-page applications and anchor links.'
        },
        {
            question: 'Are my parsed URLs private?',
            answer: 'All URL parsing happens directly in your browser. Your URLs and parsing history are stored locally and never sent to our servers, ensuring complete privacy.'
        }
    ],
    'urlParser.securityNote': 'All URL parsing happens locally in your browser using JavaScript. No URLs or parsing data are stored on our servers, ensuring complete privacy and security.',
    'urlParser.additionalContent': 'URL parsing is essential for web development, API integration, security analysis, and data extraction. Combine our URL parser with other tools like URL encoders, HTTP header checkers, and redirect checkers for comprehensive web development and security workflows.'
};
