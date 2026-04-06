export default {
    'httpHeaderChecker.title': 'HTTP Header Checker',
    'httpHeaderChecker.url': 'URL',
    'httpHeaderChecker.enter_url_placeholder': 'Enter URL (e.g., https://example.com)',
    'httpHeaderChecker.check_headers': 'Check Headers',
    'httpHeaderChecker.loading': 'Loading...',
    'httpHeaderChecker.clear': 'Clear',
    'httpHeaderChecker.quick_urls': 'Quick URLs:',
    'httpHeaderChecker.response_information': 'Response Information',
    'httpHeaderChecker.status': 'Status:',
    'httpHeaderChecker.method': 'Method:',
    'httpHeaderChecker.protocol': 'Protocol:',
    'httpHeaderChecker.response_time': 'Response Time:',
    'httpHeaderChecker.content_type': 'Content Type:',
    'httpHeaderChecker.http_headers': 'HTTP Headers',
    'httpHeaderChecker.headers_analysis': 'Headers Analysis',
    'httpHeaderChecker.caching': 'Caching:',
    'httpHeaderChecker.security': 'Security:',
    'httpHeaderChecker.compression': 'Compression:',
    'httpHeaderChecker.cors': 'CORS:',
    'httpHeaderChecker.content_size': 'Content Size:',
    'httpHeaderChecker.server': 'Server:',
    'httpHeaderChecker.copy_headers': 'Copy Headers',
    'httpHeaderChecker.download_headers': 'Download Headers',
    'httpHeaderChecker.refresh': 'Refresh',
    'httpHeaderChecker.recent_checks': 'Recent Checks',
    
    // SEO Content specific to HTTP Header checker
    'httpHeaderChecker.mainDescription': 'Free online HTTP header checker with real-time analysis, security inspection, caching analysis, and CORS detection. Perfect for web developers debugging HTTP responses.',
    'httpHeaderChecker.extendedDescription': 'Our comprehensive HTTP header checker tool helps you analyze and inspect HTTP headers with advanced features. Includes real-time header analysis, security header detection, caching policy inspection, CORS configuration analysis, and response time monitoring. All operations happen in your browser for complete privacy.',
    'httpHeaderChecker.features': [
        {
            title: 'Real-time Header Analysis',
            description: 'Analyze HTTP headers instantly as you enter URLs with automatic parsing'
        },
        {
            title: 'Security Header Detection',
            description: 'Detect and analyze security headers like CSP, HSTS, and X-Frame-Options'
        },
        {
            title: 'Caching Policy Analysis',
            description: 'Inspect caching headers including Cache-Control, ETag, and Expires'
        },
        {
            title: 'CORS Configuration Check',
            description: 'Analyze Cross-Origin Resource Sharing headers and policies'
        },
        {
            title: 'Response Time Monitoring',
            description: 'Monitor HTTP response times for performance analysis'
        },
        {
            title: 'Content Type Detection',
            description: 'Identify content types and encoding from HTTP headers'
        },
        {
            title: 'Server Information',
            description: 'Extract server details and technology information'
        },
        {
            title: 'Compression Analysis',
            description: 'Detect content compression like gzip, brotli, and deflate'
        },
        {
            title: 'Quick URL Testing',
            description: 'Built-in quick URLs for instant testing of common services'
        },
        {
            title: 'Recent Checks History',
            description: 'Save and manage recent header checks with timestamps'
        },
        {
            title: 'Export Functionality',
            description: 'Copy or download header analysis results for documentation'
        },
        {
            title: 'Status Code Analysis',
            description: 'Color-coded status codes for quick error identification'
        }
    ],
    'httpHeaderChecker.steps': [
        'Enter the URL you want to check HTTP headers for',
        'Click "Check Headers" to analyze the HTTP response',
        'View detailed header information including security and caching',
        'Analyze response status, timing, and server information',
        'Use quick URLs for testing common web services',
        'Copy or download header analysis results for documentation'
    ],
    'httpHeaderChecker.examples': [
        {
            title: 'Website Security Headers',
            description: 'Check security headers of a website',
            code: 'Input: https://example.com',
            result: 'Headers: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Strict-Transport-Security: max-age=31536000, Content-Security-Policy: default-src \'self\''
        },
        {
            title: 'API Response Headers',
            description: 'Analyze API endpoint headers',
            code: 'Input: https://api.example.com/users',
            result: 'Headers: Content-Type: application/json, Access-Control-Allow-Origin: *, Rate-Limit-Limit: 100, Rate-Limit-Remaining: 99',
            steps: [
                'Enter API endpoint URL',
                'Review response headers for authentication',
                'Check rate limiting information',
                'Verify CORS configuration for frontend access'
            ]
        },
        {
            title: 'CDN Cache Headers',
            description: 'Check caching headers for CDN performance',
            code: 'Input: https://cdn.example.com/assets/style.css',
            result: 'Headers: Cache-Control: max-age=31536000, ETag: "abc123", Last-Modified: Wed, 01 Jan 2023 00:00:00 GMT, Content-Encoding: gzip'
        }
    ],
    'httpHeaderChecker.useCases': [
        {
            title: 'Web Development Debugging',
            description: 'Developers debugging HTTP responses and header configurations',
            example: 'Frontend developer checking CORS headers for API integration'
        },
        {
            title: 'Security Auditing',
            description: 'Security professionals auditing website security headers',
            example: 'Security analyst checking CSP and HSTS implementation'
        },
        {
            title: 'Performance Optimization',
            description: 'Performance engineers analyzing caching and compression headers',
            example: 'DevOps engineer optimizing CDN caching strategies'
        },
        {
            title: 'API Integration',
            description: 'Backend developers verifying API response headers',
            example: 'API developer checking content-type and authentication headers'
        },
        {
            title: 'SEO Analysis',
            description: 'SEO specialists analyzing server response headers',
            example: 'SEO specialist checking server and content-type headers for search optimization'
        },
        {
            title: 'Network Troubleshooting',
            description: 'Network administrators troubleshooting HTTP communication issues',
            example: 'Network admin analyzing response times and status codes'
        },
        {
            title: 'Compliance Testing',
            description: 'Compliance officers testing security header implementations',
            example: 'Compliance officer verifying security headers for regulatory requirements'
        },
        {
            title: 'Learning HTTP',
            description: 'Students and developers learning HTTP protocol and headers',
            example: 'Computer science student learning about HTTP headers and web protocols'
        }
    ],
    'httpHeaderChecker.technicalDetails': 'Our HTTP header checker uses the Fetch API to make HTTP requests and analyze response headers. The tool supports both HEAD and GET requests, handles CORS restrictions, and provides detailed analysis of security, caching, and performance headers. All processing happens locally using modern JavaScript.',
    'httpHeaderChecker.bestPractices': [
        {
            title: 'Security Headers',
            tip: 'Always implement security headers like CSP, HSTS, and X-Frame-Options for web application security.'
        },
        {
            title: 'Caching Strategy',
            tip: 'Configure proper caching headers based on content type and update frequency for optimal performance.'
        },
        {
            title: 'CORS Configuration',
            tip: 'Set appropriate CORS headers to allow legitimate cross-origin requests while maintaining security.'
        },
        {
            title: 'Content Type Headers',
            tip: 'Always specify correct Content-Type headers to ensure proper browser rendering and API compatibility.'
        }
    ],
    'httpHeaderChecker.commonErrors': [
        {
            error: 'CORS Restrictions',
            cause: 'Browser preventing cross-origin requests due to CORS policies',
            solution: 'Use server-side proxy or configure proper CORS headers on the target server.',
            prevention: 'Configure CORS headers appropriately and use same-origin requests when possible.'
        },
        {
            error: 'Invalid URL Format',
            cause: 'Malformed URL or unsupported protocol',
            solution: 'Ensure URL includes protocol (http:// or https://) and valid domain format.',
            prevention: 'Validate URL format before making requests and use proper URL encoding.'
        },
        {
            error: 'Network Timeouts',
            cause: 'Slow server response or network connectivity issues',
            solution: 'Check network connectivity and try again. Consider using different testing locations.',
            prevention: 'Monitor server performance and implement timeout handling in applications.'
        },
        {
            error: 'Server Access Denied',
            cause: 'Server blocking requests due to rate limiting or security policies',
            solution: 'Check rate limits and authentication requirements. Try again after delay.',
            prevention: 'Implement proper rate limiting and authentication in API clients.'
        },
        {
            error: 'SSL Certificate Issues',
            cause: 'Expired or invalid SSL certificates preventing HTTPS requests',
            solution: 'Update SSL certificates or use HTTP for testing environments.',
            prevention: 'Monitor SSL certificate expiration and implement automatic renewal.'
        },
        {
            error: 'Header Parsing Errors',
            cause: 'Malformed HTTP headers or encoding issues',
            solution: 'Check server configuration and ensure proper header formatting.',
            prevention: 'Validate HTTP header compliance and use standard header formats.'
        }
    ],
    'httpHeaderChecker.alternatives': [
        {
            name: 'Browser DevTools',
            useCase: 'Built-in browser developer tools for HTTP inspection',
            pros: 'Integrated with browser, Real-time monitoring, Advanced features',
            cons: 'Browser specific, Limited to current tab, Technical knowledge required',
            comparison: 'Our tool offers dedicated HTTP analysis with educational features and history.'
        },
        {
            name: 'cURL Commands',
            useCase: 'Command-line tool for making HTTP requests',
            pros: 'Scriptable, Detailed control, No browser restrictions',
            cons: 'Technical setup required, No GUI, Manual analysis',
            comparison: 'Our tool provides user-friendly interface with automatic analysis.'
        },
        {
            name: 'Postman',
            useCase: 'API development and testing platform',
            pros: 'Advanced features, Team collaboration, API documentation',
            cons: 'Subscription costs, Complex interface, Internet dependency',
            comparison: 'Our tool offers focused HTTP header analysis without complexity.'
        },
        {
            name: 'Online Header Checkers',
            useCase: 'Web-based HTTP header analysis services',
            pros: 'Cross-platform access, No installation, Quick testing',
            cons: 'Privacy concerns, Limited features, Internet required',
            comparison: 'Our tool processes locally with complete privacy and comprehensive analysis.'
        }
    ],
    'httpHeaderChecker.relatedTools': [
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
            name: 'Ping Test',
            description: 'Test network connectivity and latency',
            url: '/ping-test'
        },
        {
            name: 'Redirect Checker',
            description: 'Check URL redirects and chains',
            url: '/redirect-checker'
        },
        {
            name: 'Meta Tags Analyzer',
            description: 'Analyze HTML meta tags and SEO',
            url: '/meta-tags-analyzer'
        },
        {
            name: 'Website Speed Test',
            description: 'Test website performance and speed',
            url: '/website-speed-test'
        },
        {
            name: 'API Tester',
            description: 'Test API endpoints and responses',
            url: '/api-tester'
        },
        {
            name: 'Status Code Checker',
            description: 'Check HTTP status codes and meanings',
            url: '/status-code-checker'
        },
        {
            name: 'Security Headers Test',
            description: 'Test security header implementation',
            url: '/security-headers-test'
        }
    ],
    'httpHeaderChecker.faqs': [
        {
            question: 'What are HTTP headers?',
            answer: 'HTTP headers are additional information sent between clients and servers, containing metadata about the request or response, including content type, caching policies, security settings, and more.'
        },
        {
            question: 'Can I check any website?',
            answer: 'Yes, you can check any publicly accessible website. Some sites may block automated requests or require authentication.'
        },
        {
            question: 'What security headers should I look for?',
            answer: 'Key security headers include Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, X-Content-Type-Options, and Access-Control-Allow-Origin for CORS.'
        },
        {
            question: 'How are caching headers analyzed?',
            answer: 'We analyze Cache-Control, ETag, Expires, and Last-Modified headers to determine caching strategies and performance optimization.'
        },
        {
            question: 'What does CORS analysis show?',
            answer: 'CORS analysis shows Access-Control-Allow-Origin, Access-Control-Allow-Methods, and other headers that control cross-origin request permissions.'
        },
        {
            question: 'Why might some headers be missing?',
            answer: 'Some headers may be missing due to CORS restrictions, server configuration, or privacy settings. Try using server-side tools for complete analysis.'
        },
        {
            question: 'How is response time calculated?',
            answer: 'Response time is measured from the moment the request is sent to when the response headers are received, showing network latency and server processing time.'
        },
        {
            question: 'Can I check API endpoints?',
            answer: 'Yes! You can check any URL including API endpoints. Look for Content-Type: application/json and authentication headers.'
        },
        {
            question: 'Are my requests private?',
            answer: 'All HTTP header checks happen directly in your browser. Your requests and the URLs you check are never stored on our servers.'
        }
    ],
    'httpHeaderChecker.securityNote': 'All HTTP header checking happens locally in your browser using the Fetch API. No requests are logged or stored on our servers, ensuring complete privacy and security.',
    'httpHeaderChecker.additionalContent': 'HTTP header analysis is essential for web development, security auditing, performance optimization, and API integration. Combine our header checker with other tools like SSL checkers, DNS lookup, and performance testing for comprehensive web development and debugging workflows.'
};
