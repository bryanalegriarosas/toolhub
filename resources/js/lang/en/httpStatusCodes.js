export default {
    'httpStatusCodes.title': 'HTTP Status Code Lookup',
    'httpStatusCodes.copy': 'Copy',
    'httpStatusCodes.download_code': 'Download Code',
    'httpStatusCodes.clear': 'Clear',
    'httpStatusCodes.save': 'Save',
    'httpStatusCodes.enter_status_code_placeholder': 'Enter status code (e.g. 404)',
    'httpStatusCodes.history': 'History',
    'httpStatusCodes.restore': 'Restore',
    'httpStatusCodes.download_history': 'Download History',
    'httpStatusCodes.clear_history': 'Clear History',
    
    // SEO Content specific to HTTP Status Codes
    'httpStatusCodes.mainDescription': 'Free online HTTP status code lookup tool with comprehensive database, history tracking, and instant code meanings. Perfect for developers debugging HTTP responses.',
    'httpStatusCodes.extendedDescription': 'Our comprehensive HTTP status code lookup tool helps you instantly find meanings of HTTP status codes with detailed descriptions. Includes comprehensive database of all standard HTTP status codes, history tracking for frequent lookups, and detailed explanations for debugging web applications. All operations happen in your browser for complete privacy.',
    'httpStatusCodes.features': [
        {
            title: 'Comprehensive Status Database',
            description: 'Complete database of all standard HTTP status codes from 1xx to 5xx'
        },
        {
            title: 'Instant Code Lookup',
            description: 'Get instant meanings and descriptions for any HTTP status code'
        },
        {
            title: 'Detailed Explanations',
            description: 'Comprehensive explanations of what each status code means and when it occurs'
        },
        {
            title: 'History Tracking',
            description: 'Save and manage frequently looked up status codes with timestamps'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of status codes and download results for documentation'
        },
        {
            title: 'Category Organization',
            description: 'Status codes organized by categories: informational, success, redirection, client error, server error'
        },
        {
            title: 'Common Codes Highlight',
            description: 'Quick access to most commonly encountered HTTP status codes'
        },
        {
            title: 'Error Code Focus',
            description: 'Special focus on error codes with troubleshooting information'
        },
        {
            title: 'Success Code Reference',
            description: 'Complete reference for successful HTTP response codes'
        },
        {
            title: 'Redirection Guide',
            description: 'Detailed guide for understanding HTTP redirection codes'
        },
        {
            title: 'Mobile Friendly',
            description: 'Responsive design optimized for mobile and desktop use'
        },
        {
            title: 'Privacy First',
            description: 'All lookups happen locally in your browser with no server storage'
        }
    ],
    'httpStatusCodes.steps': [
        'Enter HTTP status code number in the input field',
        'View instant description and meaning of the status code',
        'Understand the context and implications of the response',
        'Use copy or download buttons for documentation purposes',
        'Save frequently used codes to history for quick access',
        'Restore previous lookups from history when needed'
    ],
    'httpStatusCodes.examples': [
        {
            title: 'Common Error Codes',
            description: 'Lookup frequently encountered HTTP error codes',
            code: 'Input: 404',
            result: '404 - Not Found: The requested resource could not be found on this server. Check the URL and try again.'
        },
        {
            title: 'Success Response Codes',
            description: 'Check successful HTTP response codes',
            code: 'Input: 200',
            result: '200 - OK: The request has succeeded. This is the most common HTTP response code indicating successful request processing.',
            steps: [
                'Enter HTTP status code number',
                'View detailed description and meaning',
                'Understand server response status',
                'Use for debugging web applications'
            ]
        },
        {
            title: 'Redirection Codes',
            description: 'Lookup HTTP redirection status codes',
            code: 'Input: 301',
            result: '301 - Moved Permanently: The requested resource has been permanently moved to a new URL. Update your bookmarks and links.'
        }
    ],
    'httpStatusCodes.useCases': [
        {
            title: 'Web Development Debugging',
            description: 'Developers debugging HTTP responses and understanding server behavior',
            example: 'Frontend developer checking why API calls are failing with 403 errors'
        },
        {
            title: 'API Development',
            description: 'Backend developers implementing proper HTTP status codes in APIs',
            example: 'API developer choosing appropriate status codes for different scenarios'
        },
        {
            title: 'System Administration',
            description: 'System administrators troubleshooting web server issues',
            example: 'Sysadmin investigating 502 Bad Gateway errors on production servers'
        },
        {
            title: 'SEO Analysis',
            description: 'SEO specialists analyzing HTTP status codes for website optimization',
            example: 'SEO analyst checking for 404 errors that might affect search rankings'
        },
        {
            title: 'Quality Assurance',
            description: 'QA testers verifying proper HTTP status code responses',
            example: 'QA engineer validating that error scenarios return appropriate status codes'
        },
        {
            title: 'Learning HTTP',
            description: 'Students and beginners learning about HTTP protocol and status codes',
            example: 'Computer science student understanding the difference between 301 and 302 redirects'
        },
        {
            title: 'Network Troubleshooting',
            description: 'Network engineers diagnosing HTTP communication issues',
            example: 'Network admin analyzing 503 Service Unavailable errors during outages'
        },
        {
            title: 'Documentation Writing',
            description: 'Technical writers documenting API behavior and error handling',
            example: 'Technical writer creating documentation for API error responses'
        }
    ],
    'httpStatusCodes.technicalDetails': 'Our HTTP status code lookup tool uses a comprehensive JavaScript object containing all standard HTTP status codes with detailed descriptions. The tool provides instant lookups, history management using localStorage, and supports all major HTTP status code categories (1xx-5xx). All processing happens locally using modern JavaScript.',
    'httpStatusCodes.bestPractices': [
        {
            title: 'Use Appropriate Codes',
            tip: 'Always use the most specific and appropriate HTTP status code for your response scenario.'
        },
        {
            title: 'Document Custom Codes',
            tip: 'If using custom status codes, document them thoroughly for API consumers.'
        },
        {
            title: 'Handle Errors Gracefully',
            tip: 'Implement proper error handling for client errors (4xx) and server errors (5xx).'
        },
        {
            title: 'Use Redirects Correctly',
            tip: 'Use 301 for permanent redirects and 302 for temporary redirects to optimize SEO.'
        }
    ],
    'httpStatusCodes.commonErrors': [
        {
            error: 'Invalid Status Code',
            cause: 'Entering non-numeric values or out-of-range status codes',
            solution: 'Enter valid HTTP status codes between 100 and 599.',
            prevention: 'Use the lookup tool to verify status codes before implementation.'
        },
        {
            error: 'Wrong Code Usage',
            cause: 'Using incorrect status codes for specific scenarios',
            solution: 'Research proper HTTP status code usage and follow HTTP standards.',
            prevention: 'Refer to HTTP specifications and best practices for code selection.'
        },
        {
            error: 'Missing Error Handling',
            cause: 'Not implementing proper handling for different status codes',
            solution: 'Add comprehensive error handling for all possible status code scenarios.',
            prevention: 'Plan error handling strategies during application design phase.'
        },
        {
            error: 'Inconsistent Code Usage',
            cause: 'Using different status codes for similar scenarios across the application',
            solution: 'Establish consistent status code usage patterns and document them.',
            prevention: 'Create status code guidelines and ensure team follows them consistently.'
        },
        {
            error: 'Ignoring Client Errors',
            cause: 'Not properly addressing 4xx client error codes in applications',
            solution: 'Implement proper client error handling and user feedback mechanisms.',
            prevention: 'Test all client error scenarios and provide helpful error messages.'
        },
        {
            error: 'Server Error Mismanagement',
            cause: 'Poor handling of 5xx server error codes leading to poor user experience',
            solution: 'Implement graceful degradation and error recovery mechanisms.',
            prevention: 'Monitor server errors and implement automated alerting and recovery.'
        }
    ],
    'httpStatusCodes.alternatives': [
        {
            name: 'MDN Web Docs',
            useCase: 'Comprehensive HTTP documentation by Mozilla',
            pros: 'Official documentation, Detailed explanations, Regular updates',
            cons: 'Technical language, No lookup tool, Internet required',
            comparison: 'Our tool provides instant lookup with user-friendly interface and history.'
        },
        {
            name: 'HTTP Status Code Websites',
            useCase: 'Online reference websites for HTTP status codes',
            pros: 'Cross-platform access, Search functionality, Additional resources',
            cons: 'Privacy concerns, Internet dependency, Ads and distractions',
            comparison: 'Our tool works offline with complete privacy and no distractions.'
        },
        {
            name: 'Browser DevTools',
            useCase: 'Built-in browser developer tools for HTTP monitoring',
            pros: 'Real-time monitoring, Integrated with browser, Advanced features',
            cons: 'Browser specific, Complex interface, Technical knowledge required',
            comparison: 'Our tool offers simple lookup focused on status code meanings.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'CLI tools for HTTP status code reference',
            pros: 'Scriptable, Fast access, No GUI needed',
            cons: 'Setup required, Limited features, Manual installation',
            comparison: 'Our tool provides user-friendly interface with history and additional features.'
        }
    ],
    'httpStatusCodes.relatedTools': [
        {
            name: 'HTTP Header Checker',
            description: 'Check and analyze HTTP headers of any URL',
            url: '/http-header-checker'
        },
        {
            name: 'URL Encoder/Decoder',
            description: 'Encode and decode URLs for web applications',
            url: '/url-encoder-decoder'
        },
        {
            name: 'API Tester',
            description: 'Test API endpoints and responses',
            url: '/api-tester'
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
            name: 'Ping Test',
            description: 'Test network connectivity and latency',
            url: '/ping-test'
        },
        {
            name: 'Website Speed Test',
            description: 'Test website performance and speed',
            url: '/website-speed-test'
        },
        {
            name: 'CURL Generator',
            description: 'Generate cURL commands for HTTP requests',
            url: '/curl-generator'
        }
    ],
    'httpStatusCodes.faqs': [
        {
            question: 'What are HTTP status codes?',
            answer: 'HTTP status codes are three-digit numbers returned by web servers to indicate the result of an HTTP request. They range from 100-599 and are categorized into informational (1xx), successful (2xx), redirection (3xx), client errors (4xx), and server errors (5xx).'
        },
        {
            question: 'How many HTTP status codes exist?',
            answer: 'There are officially defined HTTP status codes from 100 to 599, though not all numbers in this range are assigned. The main categories are: 1xx (informational), 2xx (success), 3xx (redirection), 4xx (client errors), and 5xx (server errors).'
        },
        {
            question: 'What is the most common HTTP status code?',
            answer: '200 OK is the most common HTTP status code, indicating that the HTTP request was successful. Other common codes include 404 (Not Found), 301 (Moved Permanently), 500 (Internal Server Error), and 403 (Forbidden).'
        },
        {
            question: 'What does 404 Not Found mean?',
            answer: '404 Not Found means the server could not find the requested resource. This occurs when the URL is incorrect, the resource has been moved or deleted, or there are permission issues preventing access to the resource.'
        },
        {
            question: 'What is the difference between 301 and 302 redirects?',
            answer: '301 indicates a permanent redirect, telling search engines to update their indexes, while 302 indicates a temporary redirect. Use 301 when a resource has permanently moved, and 302 for temporary redirects or during maintenance.'
        },
        {
            question: 'What are server error codes (5xx)?',
            answer: '5xx codes indicate server-side errors where the server failed to fulfill a valid request. Common examples include 500 (Internal Server Error), 502 (Bad Gateway), 503 (Service Unavailable), and 504 (Gateway Timeout).'
        },
        {
            question: 'What are client error codes (4xx)?',
            answer: '4xx codes indicate client-side errors where the request contains bad syntax or cannot be fulfilled. Common examples include 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), and 429 (Too Many Requests).'
        },
        {
            question: 'Can I create custom HTTP status codes?',
            answer: 'While you can technically use unassigned status codes, it\'s not recommended. Stick to standard HTTP status codes for compatibility. If you need custom responses, use standard codes and include custom information in the response body.'
        },
        {
            question: 'How should I handle different status codes in my application?',
            answer: 'Implement proper error handling for 4xx client errors (show user-friendly messages), retry logic for 5xx server errors, and appropriate actions for 3xx redirects. Always provide meaningful feedback to users regardless of the status code.'
        },
        {
            question: 'Are my lookups private?',
            answer: 'All HTTP status code lookups happen directly in your browser. Your search history is stored locally and never sent to our servers, ensuring complete privacy.'
        }
    ],
    'httpStatusCodes.securityNote': 'All HTTP status code lookups happen locally in your browser using JavaScript. No status codes or search history are stored on our servers, ensuring complete privacy and security.',
    'httpStatusCodes.additionalContent': 'HTTP status code understanding is essential for web development, API design, debugging, and system administration. Combine our status code lookup with other tools like HTTP header checkers, API testers, and redirect checkers for comprehensive web development and troubleshooting workflows.'
};
