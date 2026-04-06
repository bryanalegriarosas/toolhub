export default {
    'jwtDecoder.title': 'JWT Decoder',
    'jwtDecoder.load_file': 'Load file:',
    'jwtDecoder.copy': 'Copy',
    'jwtDecoder.download_token': 'Download Token',
    'jwtDecoder.clear': 'Clear',
    'jwtDecoder.save': 'Save',
    'jwtDecoder.paste_jwt_token_here': 'Paste JWT token here...',
    'jwtDecoder.header': 'Header',
    'jwtDecoder.payload': 'Payload',
    'jwtDecoder.signature': 'Signature',
    'jwtDecoder.history': 'History',
    'jwtDecoder.restore': 'Restore',
    'jwtDecoder.download_history': 'Download History',
    'jwtDecoder.clear_history': 'Clear History',
    
    // SEO Content specific to JWT decoder
    'jwtDecoder.mainDescription': 'Free online JWT decoder with real-time token parsing, header/payload inspection, signature analysis, and history management. Perfect for developers debugging JWT tokens.',
    'jwtDecoder.extendedDescription': 'Our comprehensive JWT decoder tool helps you decode and analyze JSON Web Tokens with advanced features. Includes real-time token parsing, header and payload inspection, signature verification, claims analysis, and token history management. All operations happen in your browser for complete privacy.',
    'jwtDecoder.features': [
        {
            title: 'Real-time JWT Decoding',
            description: 'Decode JWT tokens instantly as you paste them with automatic parsing'
        },
        {
            title: 'Header Inspection',
            description: 'View JWT header with algorithm, token type, and metadata'
        },
        {
            title: 'Payload Analysis',
            description: 'Inspect JWT payload with claims, expiration, and user information'
        },
        {
            title: 'Signature Display',
            description: 'View JWT signature for verification and debugging purposes'
        },
        {
            title: 'Token History',
            description: 'Save and manage JWT tokens with timestamp and restore functionality'
        },
        {
            title: 'File Upload Support',
            description: 'Load JWT tokens directly from files for batch processing'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy decoded parts or download tokens as files'
        },
        {
            title: 'Error Detection',
            description: 'Automatic detection and display of invalid or malformed JWT tokens'
        },
        {
            title: 'Claims Validation',
            description: 'Visual validation of standard JWT claims like exp, iat, and sub'
        },
        {
            title: 'Security Analysis',
            description: 'Security-focused analysis of JWT tokens for potential vulnerabilities'
        },
        {
            title: 'Multiple Format Support',
            description: 'Support for various JWT formats and encoding schemes'
        }
    ],
    'jwtDecoder.steps': [
        'Paste your JWT token in the input area or load from file',
        'View automatically decoded header, payload, and signature',
        'Inspect token claims, expiration time, and user information',
        'Save useful tokens to history for future reference',
        'Copy decoded parts or download tokens for documentation',
        'Use history to restore and compare different JWT tokens'
    ],
    'jwtDecoder.examples': [
        {
            title: 'Authentication Token',
            description: 'Decode JWT authentication token with user information',
            code: 'Input: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            result: 'Header: {alg: "HS256", typ: "JWT"} | Payload: {sub: "1234567890", name: "John Doe", iat: 1516239022}'
        },
        {
            title: 'API Access Token',
            description: 'Decode API access JWT token with roles and permissions',
            code: 'Input: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwicm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sImV4cCI6MTY5NDEyMzQ1Nn0.signature_here',
            result: 'Header: {alg: "RS256", typ: "JWT"} | Payload: {userId: "user123", roles: ["admin", "user"], exp: 1694123456}',
            steps: [
                'Paste JWT token from API response',
                'View decoded header with algorithm information',
                'Check payload for user roles and permissions',
                'Verify expiration time and token validity'
            ]
        },
        {
            title: 'OAuth2 Token',
            description: 'Decode OAuth2 access token with client information',
            code: 'Input: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJ3ZWJfYXBwIiwic2NvcGUiOiJyZWFkOndyaXRlIiwiYXVkIjoiaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20ifQ.signature',
            result: 'Header: {alg: "RS256", typ: "JWT"} | Payload: {client_id: "web_app", scope: "read:write", aud: "https://api.example.com"}'
        }
    ],
    'jwtDecoder.useCases': [
        {
            title: 'API Development',
            description: 'Developers debugging JWT tokens in API authentication and authorization',
            example: 'Backend developer debugging JWT tokens for user authentication in REST API'
        },
        {
            title: 'Security Testing',
            description: 'Security professionals analyzing JWT tokens for vulnerabilities and validation',
            example: 'Security analyst inspecting JWT tokens for proper signature verification'
        },
        {
            title: 'OAuth2 Integration',
            description: 'Developers implementing OAuth2 authentication with JWT tokens',
            example: 'Full-stack developer integrating OAuth2 provider with JWT access tokens'
        },
        {
            title: 'Token Debugging',
            description: 'Developers troubleshooting JWT token issues in production environments',
            example: 'DevOps engineer debugging expired JWT tokens causing authentication failures'
        },
        {
            title: 'Mobile App Development',
            description: 'Mobile developers handling JWT tokens in mobile applications',
            example: 'iOS developer decoding JWT tokens for user session management'
        },
        {
            title: 'Microservices Architecture',
            description: 'Architects managing JWT tokens across microservices',
            example: 'System architect analyzing JWT token claims for service-to-service authentication'
        },
        {
            title: 'Web Application Security',
            description: 'Security teams implementing JWT-based authentication systems',
            example: 'Security team implementing JWT token validation in web applications'
        },
        {
            title: 'Learning JWT',
            description: 'Students and developers learning JWT structure and implementation',
            example: 'Computer science student learning JWT token structure and claims'
        }
    ],
    'jwtDecoder.technicalDetails': 'Our JWT decoder uses JavaScript built-in functions for Base64 decoding and JSON parsing. The tool supports standard JWT structure with three parts (header.payload.signature) and handles various algorithms including HS256, RS256, and ES256. All processing happens locally using modern JavaScript.',
    'jwtDecoder.bestPractices': [
        {
            title: 'Token Validation',
            tip: 'Always validate JWT tokens on the server-side, never trust client-side decoded data.'
        },
        {
            title: 'Expiration Checking',
            tip: 'Check the exp claim to ensure tokens are not expired before processing.'
        },
        {
            title: 'Algorithm Verification',
            tip: 'Verify the algorithm in the header matches your expected signing algorithm.'
        },
        {
            title: 'Secure Storage',
            tip: 'Store JWT tokens securely using httpOnly cookies or secure local storage.'
        }
    ],
    'jwtDecoder.commonErrors': [
        {
            error: 'Invalid JWT Format',
            cause: 'JWT token missing required parts or incorrect format',
            solution: 'Ensure JWT has three parts separated by dots (header.payload.signature). Check for missing segments.',
            prevention: 'Validate JWT format before processing and use proper token generation.'
        },
        {
            error: 'Base64 Decoding Failed',
            cause: 'Invalid Base64 encoding in JWT header or payload',
            solution: 'Check if JWT parts are properly Base64url encoded. Verify token source and integrity.',
            prevention: 'Use proper JWT libraries for token generation and validation.'
        },
        {
            error: 'JSON Parsing Error',
            cause: 'Malformed JSON in JWT header or payload',
            solution: 'Ensure JSON structure is valid. Check for missing quotes, brackets, or commas.',
            prevention: 'Validate JSON structure before JWT encoding and use proper serialization.'
        },
        {
            error: 'File Upload Failed',
            cause: 'Invalid file format or corrupted JWT file',
            solution: 'Ensure file contains valid JWT token. Check file encoding and content.',
            prevention: 'Validate JWT files before uploading and ensure proper file extensions.'
        },
        {
            error: 'Clipboard Access Denied',
            cause: 'Browser security restrictions preventing clipboard access',
            solution: 'Use manual copy-paste or try a different browser. Ensure HTTPS connection.',
            prevention: 'Use modern browsers and ensure proper security context for clipboard operations.'
        },
        {
            error: 'History Management Issues',
            cause: 'Browser storage limitations or corrupted history data',
            solution: 'Clear browser storage and refresh page to reset history functionality.',
            prevention: 'Regularly export important tokens and clear history periodically.'
        }
    ],
    'jwtDecoder.alternatives': [
        {
            name: 'JWT.io',
            useCase: 'Popular online JWT decoder with debugging features',
            pros: 'Advanced debugging, Algorithm support, Community features',
            cons: 'Privacy concerns, Internet dependency, Limited history',
            comparison: 'Our tool offers local processing with complete privacy and history management.'
        },
        {
            name: 'JWT Debugger Libraries',
            useCase: 'Programming libraries for JWT decoding in applications',
            pros: 'Integration with code, Advanced features, Performance optimized',
            cons: 'Programming required, Implementation complexity',
            comparison: 'Our tool offers instant decoding without programming requirements.'
        },
        {
            name: 'Browser Extensions',
            useCase: 'Browser extensions for JWT decoding in development tools',
            pros: 'Integrated with browser, Real-time decoding, Convenience',
            cons: 'Extension installation, Limited features, Security concerns',
            comparison: 'Our tool provides comprehensive features without browser extension requirements.'
        },
        {
            name: 'Postman JWT Viewer',
            useCase: 'JWT decoding in API testing tools like Postman',
            pros: 'API integration, Testing workflow, Advanced features',
            cons: 'API tool dependency, Learning curve, Subscription costs',
            comparison: 'Our tool offers dedicated JWT decoding with no API tool requirements.'
        }
    ],
    'jwtDecoder.relatedTools': [
        {
            name: 'JWT Generator',
            description: 'Generate JWT tokens with custom claims',
            url: '/jwt-generator'
        },
        {
            name: 'JWT Validator',
            description: 'Validate JWT tokens and signatures',
            url: '/jwt-validator'
        },
        {
            name: 'Base64 Decoder',
            description: 'Decode Base64 encoded strings',
            url: '/base64-decoder'
        },
        {
            name: 'JSON Formatter',
            description: 'Format and beautify JSON data',
            url: '/json-formatter'
        },
        {
            name: 'Token Generator',
            description: 'Generate various authentication tokens',
            url: '/token-generator'
        },
        {
            name: 'OAuth2 Playground',
            description: 'Test OAuth2 authentication flows',
            url: '/oauth2-playground'
        },
        {
            name: 'API Tester',
            description: 'Test API endpoints with authentication',
            url: '/api-tester'
        },
        {
            name: 'Hash Generator',
            description: 'Generate various hash values',
            url: '/hash-generator'
        },
        {
            name: 'Certificate Decoder',
            description: 'Decode SSL/TLS certificates',
            url: '/certificate-decoder'
        }
    ],
    'jwtDecoder.faqs': [
        {
            question: 'What is a JWT token?',
            answer: 'A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts: header, payload, and signature.'
        },
        {
            question: 'Is JWT decoding secure?',
            answer: 'JWT decoding is safe as it only reveals the information that was encoded in the token. However, never trust decoded data without proper signature verification.'
        },
        {
            question: 'Can I decode any JWT token?',
            answer: 'Yes, you can decode any properly formatted JWT token. However, only tokens with valid signatures should be trusted for authentication.'
        },
        {
            question: 'What information is in the JWT header?',
            answer: 'The JWT header contains metadata about the token including the signing algorithm (alg) and token type (typ).'
        },
        {
            question: 'What claims are standard in JWT?',
            answer: 'Standard JWT claims include sub (subject), iat (issued at), exp (expiration time), iss (issuer), and aud (audience).'
        },
        {
            question: 'How is JWT signature verified?',
            answer: 'JWT signature is verified using the secret key or public key depending on the algorithm. Our decoder only displays the signature for inspection.'
        },
        {
            question: 'Can I modify JWT tokens?',
            answer: 'You can modify JWT payload, but the signature will become invalid. Valid signatures require the original signing key.'
        },
        {
            question: 'What JWT algorithms are supported?',
            answer: 'Our decoder supports all standard JWT algorithms including HS256, RS256, ES256, and others for display purposes.'
        },
        {
            question: 'Is my token data private?',
            answer: 'All JWT decoding happens directly in your browser. Your tokens are never uploaded to our servers, ensuring complete privacy.'
        },
        {
            question: 'Can I save decoded results?',
            answer: 'Yes! You can save tokens to history, copy decoded parts, or download results for documentation and debugging.'
        }
    ],
    'jwtDecoder.securityNote': 'All JWT decoding happens locally in your browser using JavaScript. No tokens are stored on our servers, ensuring complete privacy and security. Never trust decoded JWT data without proper signature verification.',
    'jwtDecoder.additionalContent': 'JWT decoding is essential for API development, authentication debugging, and security analysis. Combine our decoder with other tools like JWT generators, validators, and API testers for comprehensive authentication and authorization workflows.'
};
