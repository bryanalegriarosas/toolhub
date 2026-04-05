export default {
    mainDescription: "A fast and secure online Base64 decoder that converts Base64 encoded text back to its original format. Perfect for developers, data analysts, and anyone working with encoded data. No installation required - decode directly in your browser with complete privacy.",
    
    extendedDescription: `
<p class="mb-4">Base64 encoding is a fundamental technique in web development and data transmission that converts binary data into ASCII text format. Our Base64 Decoder tool provides a simple, fast, and secure way to reverse this process, converting Base64 encoded strings back to their original form.</p>

<p class="mb-4">Whether you're debugging API responses, analyzing JWT tokens, extracting embedded images from HTML, or working with email attachments, this tool handles all Base64 decoding tasks with ease. It supports standard Base64, Base64 URL-safe encoding, and automatically handles both padded and unpadded strings.</p>

<p>All decoding happens directly in your browser using JavaScript, which means your data never leaves your computer. This ensures complete privacy and security for sensitive information while providing instant results without server delays.</p>
`,
    
    features: [
        {
            title: "Instant Decoding",
            description: "Decode Base64 strings in milliseconds with our optimized JavaScript engine. No waiting, no delays."
        },
        {
            title: "100% Client-Side",
            description: "All processing happens in your browser. Your data never touches our servers, ensuring complete privacy."
        },
        {
            title: "Auto-Decode Mode",
            description: "Enable automatic decoding as you type or paste, perfect for quick testing and debugging workflows."
        },
        {
            title: "File Upload Support",
            description: "Load Base64 encoded files directly from your computer for quick batch decoding operations."
        },
        {
            title: "Decoding History",
            description: "Keep track of your recent decodings with our built-in history feature. Copy or export any previous result."
        },
        {
            title: "Download Results",
            description: "Export decoded content as text files with one click, making it easy to save and share results."
        },
        {
            title: "Error Handling",
            description: "Clear error messages help you identify and fix issues with invalid Base64 input quickly."
        },
        {
            title: "URL-Safe Support",
            description: "Automatically handles both standard and URL-safe Base64 variants (- and _ characters)."
        }
    ],
    
    steps: [
        "Paste your Base64 encoded text into the input textarea, or click 'Load file' to upload a text file containing Base64 data.",
        "Optionally enable 'Auto Decode' mode to see results instantly as you type or paste, perfect for quick testing.",
        "Click the 'Decode' button to convert your Base64 string back to its original text format.",
        "Review the decoded output in the result area below. The tool displays the exact original content.",
        "Use 'Copy Result' to copy the decoded text to your clipboard for use in other applications.",
        "Click 'Download' to save the decoded content as a .txt file on your computer.",
        "Access previous decodings from the History section below, where you can copy or download any past result.",
        "Use 'Clear' to reset the tool and start a new decoding session with fresh inputs."
    ],
    
    examples: [
        {
            title: "Decoding Simple Text",
            description: "The most basic use case - decoding plain text that was previously encoded in Base64. This is common in configuration files and simple data transmission.",
            code: "SGVsbG8gV29ybGQh",
            result: "Hello World!",
            steps: [
                "Copy the Base64 string: SGVsbG8gV29ybGQh",
                "Paste it into the input field",
                "Click 'Decode' button",
                "The result 'Hello World!' appears in the output area"
            ]
        },
        {
            title: "Decoding JSON Data from APIs",
            description: "Many REST APIs encode JSON payloads in Base64 for transmission. This example shows how to decode a typical user object that might be returned from an authentication API.",
            code: "eyJuYW1lIjoiSm9obiIsImFnZSI6MzAsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20ifQ==",
            result: '{"name":"John","age":30,"email":"john.doe@example.com"}',
            steps: [
                "Receive Base64 encoded JSON from an API response",
                "Paste the encoded string into the decoder",
                "Click 'Decode' to see the raw JSON",
                "Copy the JSON to use in your application or for debugging"
            ]
        },
        {
            title: "Decoding URL-Safe Base64",
            description: "URL-safe Base64 uses different characters (- instead of +, _ instead of /) to avoid conflicts with URL encoding. JWT tokens commonly use this format.",
            code: "SGVsbG8gV29ybGQgV2ViVG9vbFN0YWNr",
            result: "Hello World WebToolStack",
            steps: [
                "Identify URL-safe Base64 (contains - or _ characters)",
                "Paste the string - the tool automatically detects the format",
                "The decoder handles URL-safe characters automatically",
                "View or download the decoded result"
            ]
        },
        {
            title: "Decoding JWT Token Payload",
            description: "JSON Web Tokens (JWT) consist of three Base64 encoded parts separated by dots. This example shows how to decode the middle section (payload) to view the token claims.",
            code: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            result: '{"sub":"1234567890","name":"John Doe","iat":1516239022}',
            steps: [
                "Take the middle section of a JWT token (between the two dots)",
                "Paste it into the decoder",
                "View the decoded JSON containing token claims like user ID, name, and expiration",
                "Use this for debugging authentication issues or understanding token contents"
            ]
        },
        {
            title: "Decoding Email Attachment Metadata",
            description: "Email protocols like SMTP encode attachment metadata and filenames in Base64. This helps when debugging email delivery issues or building email clients.",
            code: "ZmlsZW5hbWU9InJlcG9ydC5wZGYi",
            result: 'filename="report.pdf"',
            steps: [
                "Extract Base64 string from email headers or MIME data",
                "Decode to reveal the original filename or metadata",
                "Use this information for email parsing or troubleshooting"
            ]
        }
    ],
    
    useCases: [
        {
            title: "Web Development & API Integration",
            description: "Developers frequently encounter Base64 encoded data when working with REST APIs, GraphQL endpoints, and web services. API responses often include Base64 encoded images, files, or JSON payloads. This tool helps quickly decode and inspect these responses during development and debugging, allowing you to verify data integrity and understand API behavior without writing custom decoding scripts.",
            example: "When testing a user profile API that returns avatar images as Base64 data URIs, use this decoder to extract and verify the image data before rendering it in your application."
        },
        {
            title: "JWT Token Analysis",
            description: "JSON Web Tokens (JWT) are widely used for authentication and authorization in modern web applications. JWTs consist of three Base64-URL encoded parts: header, payload, and signature. Decoding the payload section reveals crucial information like user ID, roles, permissions, and token expiration. This is invaluable for debugging authentication issues, understanding token structure, and verifying claims before implementing token validation logic.",
            example: "If users are experiencing unexpected logouts, decode the JWT payload to check the 'exp' (expiration) claim and verify token lifetime settings."
        },
        {
            title: "Email Development & Debugging",
            description: "Email systems use Base64 encoding extensively for attachments, non-ASCII characters in headers, and embedded images. When building email clients, debugging delivery issues, or parsing MIME messages, you'll need to decode various Base64 elements. This includes attachment filenames, subject lines with special characters, and inline image data. Understanding the decoded content helps troubleshoot character encoding problems and verify proper email formatting.",
            example: "When a client reports garbled attachment names in emails, decode the Base64 encoded filename from the Content-Disposition header to identify character encoding issues."
        },
        {
            title: "Data URI and Embedded Images",
            description: "Web developers use Base64 encoded Data URIs to embed images directly in HTML and CSS, reducing HTTP requests and improving page load times for small images. When optimizing websites or debugging display issues, you may need to decode these embedded images to verify their contents, check file sizes, or extract them for editing. This tool makes it easy to convert Data URI image data back to viewable content.",
            example: "To optimize a webpage with embedded icons, decode the Base64 image data to check if converting to SVG or using image sprites would reduce file size."
        },
        {
            title: "Security Analysis & Forensics",
            description: "Security professionals and developers use Base64 decoding during security audits, penetration testing, and malware analysis. Attackers sometimes obfuscate payloads, scripts, or malicious URLs using Base64 encoding to evade detection. Decoding suspicious Base64 strings in logs, network traffic, or source code helps identify potential threats, analyze attack patterns, and understand security vulnerabilities. This is essential for incident response and security research.",
            example: "When analyzing suspicious JavaScript code that contains a long Base64 string, decode it to reveal potentially malicious code or phishing URLs."
        },
        {
            title: "Configuration File Management",
            description: "Many applications and frameworks store configuration data, credentials, and certificates in Base64 format. Kubernetes secrets, Docker configs, CI/CD pipelines, and cloud services often require Base64 encoded values. This tool helps administrators and developers quickly decode these values for verification, troubleshooting, and auditing purposes without needing command-line tools or programming knowledge.",
            example: "When debugging a Kubernetes deployment error, decode the Base64 secret values to verify database credentials are correctly formatted."
        },
        {
            title: "Database Field Inspection",
            description: "Some databases and ORMs store binary data or special characters as Base64 encoded strings in text fields. When querying databases, debugging data import issues, or analyzing data migrations, you may encounter Base64 values that need decoding. This is particularly common with stored procedures, trigger outputs, and legacy systems that converted binary data to text for compatibility.",
            example: "When migrating a legacy database where blob data was converted to Base64 text fields, decode sample values to verify data integrity and plan the migration strategy."
        },
        {
            title: "Mobile App Development",
            description: "Mobile applications frequently use Base64 for image caching, offline data storage, and API communication. iOS and Android developers encode images and files for local storage or transmission to reduce complexity. When debugging mobile apps, testing API integrations, or optimizing storage, developers need to decode these values to inspect the actual data and verify correct encoding/decoding implementation.",
            example: "When an Android app shows corrupted cached images, decode the Base64 stored values to check if the encoding process is preserving image data correctly."
        }
    ],
    
    technicalDetails: `
<h3 class="text-xl font-semibold mb-3">Understanding Base64 Encoding</h3>
<p class="mb-4">Base64 is a binary-to-text encoding scheme defined in RFC 4648. It converts binary data into a subset of ASCII characters that can be safely transmitted through systems designed to handle text. The encoding uses 64 different ASCII characters (A-Z, a-z, 0-9, +, /) to represent binary data.</p>

<h4 class="text-lg font-semibold mb-2">The Encoding Process</h4>
<p class="mb-4">Base64 works by taking three bytes (24 bits) of binary data and dividing them into four 6-bit groups. Each 6-bit group represents a value from 0-63, which maps to one of the 64 Base64 characters. This process increases the data size by approximately 33% (4 bytes of Base64 for every 3 bytes of original data).</p>

<h4 class="text-lg font-semibold mb-2">Padding with = Characters</h4>
<p class="mb-4">When the input data isn't divisible by 3, Base64 adds padding using the '=' character to complete the final 4-character block. One '=' indicates the original data had one extra byte, while '==' indicates two extra bytes. Some implementations omit padding in URL-safe variants.</p>

<h4 class="text-lg font-semibold mb-2">How Our Decoder Works</h4>
<p class="mb-3">This tool uses the browser's native <code>atob()</code> function (ASCII to Binary) to perform the decoding. The process:</p>
<ol class="list-decimal ml-6 mb-4 space-y-2">
    <li>Takes the Base64 input string</li>
    <li>Validates that it contains only valid Base64 characters</li>
    <li>Decodes each 4-character group back to 3 bytes of original data</li>
    <li>Handles UTF-8 encoding for text content using decodeURIComponent and escape functions</li>
    <li>Returns the original binary or text data</li>
</ol>

<h4 class="text-lg font-semibold mb-2">Character Sets</h4>
<p class="mb-4"><strong>Standard Base64:</strong> Uses A-Z, a-z, 0-9, +, / and = for padding<br>
<strong>URL-Safe Base64:</strong> Replaces + with - and / with _ to avoid URL encoding conflicts<br>
<strong>MIME Base64:</strong> Adds line breaks every 76 characters for email compatibility</p>

<h4 class="text-lg font-semibold mb-2">Browser Compatibility</h4>
<p class="mb-4">The atob() function is supported in all modern browsers (Chrome, Firefox, Safari, Edge) and has been part of the web platform since Internet Explorer 10. This ensures our decoder works reliably across all platforms without requiring external libraries or server-side processing.</p>
`,
    
    bestPractices: [
        {
            title: "Verify Input Format",
            tip: "Before decoding, check that your string contains only valid Base64 characters (A-Z, a-z, 0-9, +, /, =). Whitespace, newlines, and other characters should be removed first to avoid errors."
        },
        {
            title: "Handle Large Files Carefully",
            tip: "For very large Base64 strings (over 10MB), consider breaking them into smaller chunks or using the file download option instead of viewing in the browser, as displaying large text blocks can slow down your browser."
        },
        {
            title: "Preserve Padding",
            tip: "When copying Base64 strings, make sure to include the padding characters (=) at the end. While some decoders handle missing padding, including it ensures maximum compatibility and correct decoding."
        },
        {
            title: "Use Auto Mode for Testing",
            tip: "Enable Auto Decode when testing multiple values quickly. This is especially useful when debugging API responses or comparing different encoded versions of the same data."
        },
        {
            title: "Check Character Encoding",
            tip: "If decoded text shows strange characters or symbols, the original data might have been encoded with a different character set (like Latin-1 instead of UTF-8). Try re-encoding the source data with the correct character set before Base64 encoding."
        },
        {
            title: "Download Binary Content",
            tip: "If you're decoding binary data (images, PDFs, executables), always use the Download button instead of trying to view the output as text. The browser display may show garbled characters, but the downloaded file will be correct."
        },
        {
            title: "Validate JWT Structure",
            tip: "When decoding JWT tokens, remember they have three parts separated by dots. Decode only the middle section (payload) to view claims. The first section (header) also decodes to JSON, while the third (signature) is binary data."
        },
        {
            title: "Clear Sensitive Data",
            tip: "After decoding sensitive information like API keys or credentials, use the Clear button to remove the data from the tool. Although all processing is client-side, this prevents accidental sharing of sensitive information if someone else uses your computer."
        }
    ],
    
    commonErrors: [
        {
            error: "Invalid character in Base64 string",
            cause: "The input contains characters outside the Base64 alphabet (A-Z, a-z, 0-9, +, /, =). This often happens when copying from sources that include whitespace, newlines, or special characters.",
            solution: "Remove all whitespace, newlines, and special characters from your input. Only valid Base64 characters should remain. Many text editors add invisible characters when copying - try pasting into a plain text editor first to clean the string."
        },
        {
            error: "String contains an invalid character",
            cause: "The Base64 string has been corrupted or truncated during copying, or it includes characters from a different encoding scheme (like Base32 or Hex).",
            solution: "Verify you copied the complete string including any padding (= characters) at the end. Check that the source actually provided Base64 data and not a different encoding format. Re-copy the string from the original source if possible."
        },
        {
            error: "The string to be decoded is not correctly encoded",
            cause: "The input length is invalid (not a multiple of 4 after padding), or the padding is incorrect. This happens when strings are manually edited or partially copied.",
            solution: "Base64 strings should have a length that's a multiple of 4 characters. Check that you haven't accidentally removed characters or padding (=) from the end. If the string is supposed to be URL-safe Base64, it might be missing padding intentionally - try adding = characters to make the length divisible by 4."
        },
        {
            error: "Decoded output shows garbled text or weird characters",
            cause: "The data is either binary (not meant to be displayed as text) or was encoded with a different character encoding than UTF-8. This commonly occurs with images, PDFs, or text encoded in Latin-1 or other character sets.",
            solution: "If decoding an image, PDF, or other binary file, use the Download button to save the file properly instead of viewing it as text. For text data with encoding issues, check what character set was used during the original encoding and ensure it matches the expected output format."
        },
        {
            error: "Nothing happens when clicking Decode",
            cause: "The input field is empty, or the browser's JavaScript is disabled/blocked, preventing the decoder from running.",
            solution: "Make sure you've pasted or typed content into the input field before clicking Decode. Check that JavaScript is enabled in your browser settings. Try refreshing the page if the tool seems unresponsive."
        },
        {
            error: "Decoded JWT payload shows incorrect data",
            cause: "You decoded the wrong section of the JWT token, or the token uses a different encoding. JWTs have three parts (header.payload.signature), and you need to decode only the middle part.",
            solution: "Split your JWT by the dot (.) characters. The middle section contains the payload claims. Copy only this section (without the dots) and decode it. Don't include the header or signature portions."
        },
        {
            error: "Auto Decode not working",
            cause: "The Auto Decode checkbox is unchecked, or there's invalid Base64 in the input preventing automatic processing.",
            solution: "Ensure the Auto checkbox is checked. The auto-decode feature only works with valid Base64 input - if your string has errors, you'll need to fix them before auto-decode can process it. Try pasting a known valid Base64 string to test if auto-decode is working."
        }
    ],
    
    alternatives: [
        {
            name: "Base64 (Standard)",
            useCase: "General purpose encoding for APIs, files, and data transmission",
            pros: "Universal support, well-documented, standardized (RFC 4648)",
            cons: "33% size increase, not URL-safe without modification"
        },
        {
            name: "Base64 URL-Safe",
            useCase: "Tokens, URL parameters, web security (JWT, OAuth)",
            pros: "Safe for URLs, no special escaping needed, same as standard but with - and _",
            cons: "Not compatible with standard Base64 without conversion"
        },
        {
            name: "Base32",
            useCase: "Case-insensitive systems, human-readable codes (TOTP, file sharing)",
            pros: "No case confusion, easier manual entry, no special characters",
            cons: "40% larger than Base64, less efficient"
        },
        {
            name: "Base58",
            useCase: "Cryptocurrency addresses, blockchain, user-facing identifiers",
            pros: "Avoids ambiguous characters (0, O, I, l), no special characters",
            cons: "Not standardized like Base64, requires special libraries"
        },
        {
            name: "Hexadecimal (Base16)",
            useCase: "Debugging, cryptographic hashes, color codes, binary data inspection",
            pros: "Easy to read/debug, simple conversion, 0-9 and A-F only",
            cons: "100% size increase (twice the original size), less efficient"
        },
        {
            name: "Binary (Raw)",
            useCase: "Maximum efficiency when binary transmission is supported",
            pros: "No size increase, most efficient storage",
            cons: "Can't transmit through text-only systems, may be corrupted"
        }
    ],
    
    relatedTools: [
        {
            name: "Base64 Encoder",
            description: "Convert text or files to Base64 format for APIs, emails, and data transmission",
            url: "/tools/base64-encoder"
        },
        {
            name: "JSON Formatter",
            description: "Format and validate JSON data, perfect for decoded API responses",
            url: "/tools/json-formatter"
        },
        {
            name: "JWT Decoder",
            description: "Decode and analyze JSON Web Tokens with header and payload inspection",
            url: "/tools/jwt-decoder"
        },
        {
            name: "URL Decoder",
            description: "Decode URL-encoded strings and query parameters",
            url: "/tools/url-decoder"
        },
        {
            name: "Hash Generator",
            description: "Generate MD5, SHA-1, SHA-256 hashes for data verification",
            url: "/tools/hash-generator"
        },
        {
            name: "Image to Base64",
            description: "Convert images to Base64 Data URIs for embedding in HTML/CSS",
            url: "/tools/image-to-base64"
        }
    ],
    
    faqs: [
        {
            question: "What is Base64 encoding and why is it used?",
            answer: "Base64 is a binary-to-text encoding scheme that converts binary data into ASCII text using 64 different characters (A-Z, a-z, 0-9, +, /). It's used when you need to transmit binary data through systems designed to handle only text, such as email protocols (SMTP), JSON APIs, XML files, and URLs. Base64 ensures data integrity during transmission by avoiding special characters that might be misinterpreted. Common uses include embedding images in HTML/CSS (Data URIs), encoding JWT tokens for authentication, transmitting files via JSON APIs, and storing binary data in text-based configuration files. While Base64 increases file size by about 33%, it provides universal compatibility across all systems."
        },
        {
            question: "Is Base64 a form of encryption or security?",
            answer: "No, Base64 is NOT encryption and provides zero security. It's simply an encoding scheme that converts data from one format to another. Anyone can decode Base64 instantly without any keys, passwords, or special knowledge - it's completely reversible and transparent. Never use Base64 to protect sensitive information like passwords, API keys, or personal data. If you need security, use proper encryption algorithms like AES-256, RSA, or implement HTTPS for data transmission. Base64 is only for compatibility and format conversion, not for hiding or protecting data. Treating it as security could expose sensitive information to attackers."
        },
        {
            question: "What's the difference between standard Base64 and URL-safe Base64?",
            answer: "Standard Base64 uses the character set A-Z, a-z, 0-9, +, / and = for padding. However, the + and / characters have special meanings in URLs (+ becomes a space, / separates path segments). URL-safe Base64 (also called Base64url) replaces + with - (hyphen/minus) and / with _ (underscore) to avoid conflicts. Additionally, URL-safe Base64 often omits the = padding characters. This variant is essential for tokens, URL parameters, and any data that will be part of a URL. JWT tokens, OAuth tokens, and many modern APIs use URL-safe Base64. Our decoder automatically handles both formats, so you don't need to worry about which variant you're using."
        },
        {
            question: "Can I decode any type of file with this Base64 decoder?",
            answer: "Yes, our decoder can handle Base64 encoded data from any file type - text files, images (PNG, JPG, GIF), documents (PDF, DOCX), audio files (MP3, WAV), videos, executables, ZIP files, and more. However, this tool is optimized for viewing text-based content. For binary files like images or PDFs, the decoded output will show garbled characters if you try to view it as text. Instead, use the Download button to save the decoded file in its proper binary format. The download will preserve the correct file structure, and you can then open it with the appropriate application. For text content (JSON, XML, HTML, plain text), you can view and copy the decoded output directly in the browser."
        },
        {
            question: "Why does my decoded output show strange or garbled characters?",
            answer: "There are several reasons for garbled output: (1) The original data is binary (like an image or PDF) and can't be displayed as text - use the Download button instead. (2) The Base64 string is invalid or corrupted - check for missing characters, extra whitespace, or incorrect padding. (3) The text was encoded with a different character set (like Latin-1 or Windows-1252 instead of UTF-8) - the original data needs to be re-encoded with the correct character set. (4) You're viewing only part of the data - make sure you copied the complete Base64 string including all padding (=) characters. (5) The data isn't actually Base64 - it might be encoded with a different scheme like Base32, Hex, or a custom encoding. Try removing any whitespace and ensuring the input contains only valid Base64 characters."
        }
    ],
    
    securityNote: "All Base64 decoding happens entirely in your browser using JavaScript. Your data never leaves your computer or touches our servers, ensuring complete privacy and security. However, remember that Base64 is NOT encryption - decoded data is the same as the original and was never truly protected. Always use the Clear button after working with sensitive information, especially on shared computers.",
    
    additionalContent: `
<h3 class="text-2xl font-bold mb-4">Advanced Base64 Topics</h3>

<h4 class="text-xl font-semibold mb-3">Performance Considerations</h4>
<p class="mb-4">When working with large Base64 encoded files, performance can become a concern. Browser-based decoding is generally fast for files under 10MB, but larger files may cause temporary lag. For production applications processing large volumes of Base64 data, consider these optimizations:</p>

<div class="space-y-4 mb-6">
    <div class="border-l-4 border-blue-500 pl-4">
        <h5 class="font-semibold mb-2">API Response Processing</h5>
        <p class="text-gray-600 dark:text-gray-400">Many APIs return binary data (PDFs, images, files) as Base64 encoded strings in JSON responses. Your workflow: (1) Call the API, (2) Extract the Base64 string from the JSON, (3) Decode the Base64, (4) Save or display the binary file. This pattern is common in document generation services, image processing APIs, and file conversion services.</p>
    </div>
    
    <div class="border-l-4 border-green-500 pl-4">
        <h5 class="font-semibold mb-2">Email Attachment Extraction</h5>
        <p class="text-gray-600 dark:text-gray-400">Email parsing libraries often provide attachments as Base64 encoded strings. Your workflow: (1) Parse the email MIME structure, (2) Extract attachment metadata (filename, type), (3) Decode the Base64 attachment data, (4) Save with the original filename. This is essential for email clients, automation systems, and document management tools.</p>
    </div>
    
    <div class="border-l-4 border-purple-500 pl-4">
        <h5 class="font-semibold mb-2">Configuration Management</h5>
        <p class="text-gray-600 dark:text-gray-400">Kubernetes secrets, Docker configs, and CI/CD systems often store sensitive data as Base64. Your workflow: (1) Pull the configuration, (2) Decode the Base64 values, (3) Validate the decoded content, (4) Use in your application or script. This pattern helps separate sensitive data from code while keeping it in text-based config files.</p>
    </div>
</div>

<h4 class="text-xl font-semibold mb-3 mt-6">Historical Context & Standards</h4>
<p class="mb-4">Base64 was originally designed in 1987 as part of the MIME (Multipurpose Internet Mail Extensions) standard, documented in RFC 2045. The need arose because email systems of that era could only reliably transmit 7-bit ASCII text, making it impossible to send binary attachments like images or documents. Base64 provided a solution by encoding 8-bit binary data into 7-bit ASCII characters.</p>

<p class="mb-4">Over time, Base64 became a fundamental building block of the modern web. It's now specified in RFC 4648 (2006), which defines both the standard and URL-safe variants. Today, Base64 is used far beyond email: in JSON Web Tokens (JWT), Data URIs, API authentication, embedded resources, and countless other applications where binary data needs text representation.</p>

<p class="mb-4">The encoding's longevity and ubiquity demonstrate its elegant simplicity - despite the 33% overhead, the universal compatibility and ease of implementation make it irreplaceable in many scenarios. Modern web standards continue to rely on Base64, and it remains a critical skill for developers working with web APIs, data transmission, and browser-based applications.</p>
`
};
