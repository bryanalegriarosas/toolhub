export default {
    'imageToBase64.title': 'Image to Base64 Converter - Free Online Tool',
    'imageToBase64.description': 'Free online tool to convert images to Base64 strings. Supports all image formats with preview, copy functionality, and download options.',
    'imageToBase64.drop_image_here': 'Drop image here or click to upload',
    'imageToBase64.choose_image': 'Choose Image',
    'imageToBase64.converting': 'Converting...',
    'imageToBase64.convert_to_base64': 'Convert to Base64',
    'imageToBase64.clear': 'Clear',
    'imageToBase64.image_preview': 'Image Preview',
    'imageToBase64.base64_output': 'Base64 Output',
    'imageToBase64.format': 'Format:',
    'imageToBase64.original_size': 'Original Size:',
    'imageToBase64.base64_size': 'Base64 Size:',
    'imageToBase64.size_increase': 'Size Increase:',
    'imageToBase64.copied': 'Copied!',
    'imageToBase64.copy': 'Copy',
    'imageToBase64.download': 'Download',
    'imageToBase64.include_data_prefix': 'Include data prefix',
    'imageToBase64.clean_base64': 'Clean Base64 (no prefix)',
    'imageToBase64.characters': 'characters',
    
    // SEO Content specific to Image to Base64 converter
    'imageToBase64.mainDescription': 'Free online Image to Base64 converter with format support, preview, copy functionality, and download options. Convert any image to Base64 string instantly.',
    'imageToBase64.extendedDescription': 'Our comprehensive Image to Base64 converter tool helps you convert any image format to Base64 encoding with advanced features. Includes real-time preview, format options, copy to clipboard, download functionality, and secure local processing. All operations happen in your browser for complete privacy.',
    'imageToBase64.features': [
        {
            title: 'Universal Format Support',
            description: 'Convert JPEG, PNG, GIF, WebP, BMP, and SVG images to Base64 strings'
        },
        {
            title: 'Real-time Preview',
            description: 'Preview converted images instantly with detailed file information and size comparison'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy Base64 strings to clipboard for easy use in code'
        },
        {
            title: 'Format Options',
            description: 'Choose between clean Base64 or with data prefix for different use cases'
        },
        {
            title: 'Download as Text',
            description: 'Download Base64 strings as text files for backup and sharing'
        },
        {
            title: 'Size Analysis',
            description: 'Compare original and Base64 file sizes with percentage increase calculation'
        },
        {
            title: 'Drag and Drop Support',
            description: 'Intuitive drag and drop interface for quick image uploads'
        },
        {
            title: 'Secure Local Processing',
            description: 'All conversion happens in your browser - no server uploads required'
        },
        {
            title: 'Mobile Responsive',
            description: 'Works perfectly on desktop and mobile devices with touch-friendly interface'
        },
        {
            title: 'Error Handling',
            description: 'Comprehensive error messages and validation for smooth user experience'
        }
    ],
    'imageToBase64.steps': [
        'Upload your image using the file selector or drag and drop',
        'Click "Convert to Base64" to process your image',
        'View the image preview and Base64 result in real-time',
        'Choose format options (with/without data prefix)',
        'Copy to clipboard or download as text file for use',
        'Use the Base64 string in HTML, CSS, or JavaScript'
    ],
    'imageToBase64.examples': [
        {
            title: 'Logo for CSS Embedding',
            description: 'Convert logo to Base64 for CSS background',
            code: 'Input: company-logo.png (5KB) | Output: Base64 string starting with \'data:image/png;base64,iVBORw0KGgoAAAANS...\'',
            result: 'CSS usage: background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANS...\');'
        },
        {
            title: 'Icon for HTML Email',
            description: 'Convert icon to Base64 for email templates',
            code: 'Input: email-icon.jpg (2KB) | Output: Base64 string for email embedding',
            result: 'HTML usage: <img src=\'data:image/jpeg;base64,/9j/4AAQSkZJRgABA...\' alt=\'Email Icon\'>',
            steps: [
                'Upload small icon or logo',
                'Copy generated Base64 string',
                'Paste in HTML email template',
                'Test email rendering across clients'
            ]
        },
        {
            title: 'Profile Picture for API',
            description: 'Convert profile image to Base64 for API payload',
            code: 'Input: avatar.jpg (15KB) | Output: Base64 string for JSON API',
            result: 'JSON payload: { \'profile_image\': \'data:image/jpeg;base64,/9j/4AAQSkZJRgABA...\' }'
        }
    ],
    'imageToBase64.useCases': [
        {
            title: 'Web Development',
            description: 'Developers embedding images directly in HTML, CSS, and JavaScript',
            example: 'Frontend developer embedding small icons in CSS to reduce HTTP requests'
        },
        {
            title: 'Email Marketing',
            description: 'Marketers creating HTML emails with embedded images',
            example: 'Email marketer embedding logo in email template for consistent display'
        },
        {
            title: 'API Development',
            description: 'Developers sending image data in API requests',
            example: 'Backend developer receiving Base64 image uploads from mobile app'
        },
        {
            title: 'Content Management',
            description: 'Content creators storing images as text in databases',
            example: 'CMS developer storing user avatars as Base64 in database'
        },
        {
            title: 'Mobile App Development',
            description: 'Mobile developers handling image data transmission',
            example: 'React Native developer sending profile pictures to server'
        },
        {
            title: 'Data Migration',
            description: 'Developers converting image files for database storage',
            example: 'Data engineer migrating image assets to text-based storage'
        }
    ],
    'imageToBase64.technicalDetails': 'Our Image to Base64 converter uses FileReader API and modern JavaScript to convert image files to Base64 encoding. The tool processes images locally in your browser, supports all major image formats, and provides real-time conversion with format options. All processing happens client-side using HTML5 File API and Canvas API.',
    'imageToBase64.bestPractices': [
        {
            title: 'Image Size Optimization',
            tip: 'Use smaller images (under 1MB) for Base64 conversion to avoid performance issues and large data strings.'
        },
        {
            title: 'Format Selection',
            tip: 'Use JPEG for photographs and PNG for graphics with transparency. Consider WebP for better compression.'
        },
        {
            title: 'Data Prefix Usage',
            tip: 'Include data prefix for direct HTML/CSS use, use clean Base64 for API requests or database storage.'
        },
        {
            title: 'Performance Considerations',
            tip: 'Base64 increases file size by ~33%. Use sparingly and only for small images or critical assets.'
        }
    ],
    'imageToBase64.commonErrors': [
        {
            error: 'Invalid File Format',
            cause: 'Attempting to convert non-image files or unsupported formats',
            solution: 'Ensure the file is a valid image format (JPEG, PNG, GIF, WebP, BMP, SVG).',
            prevention: 'Check file extension and verify image can be opened normally before conversion.'
        },
        {
            error: 'File Size Too Large',
            cause: 'Image files larger than 10MB causing browser performance issues',
            solution: 'Use a smaller image or compress the image before Base64 conversion.',
            prevention: 'Optimize images before conversion and consider file size requirements.'
        },
        {
            error: 'Conversion Timeout',
            cause: 'Large images causing browser processing timeouts',
            solution: 'Use smaller images or try again with a different browser.',
            prevention: 'Test with smaller images first and ensure adequate system resources.'
        },
        {
            error: 'Copy to Clipboard Failed',
            cause: 'Browser security restrictions or clipboard access issues',
            solution: 'Manually select and copy the Base64 text or use the download option.',
            prevention: 'Use modern browsers and ensure proper permissions for clipboard access.'
        },
        {
            error: 'Download Failed',
            cause: 'Browser download issues or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space.',
            prevention: 'Clear browser cache and verify download permissions.'
        },
        {
            error: 'Memory Issues',
            cause: 'Large images consuming too much browser memory',
            solution: 'Use smaller images or restart the browser to free memory.',
            prevention: 'Monitor memory usage and avoid processing multiple large images simultaneously.'
        }
    ],
    'imageToBase64.alternatives': [
        {
            name: 'Online Base64 Converters',
            useCase: 'Cloud-based Base64 conversion services',
            pros: 'Cross-platform access, No installation, Multiple format support',
            cons: 'Privacy concerns, Internet dependency, File size limits',
            comparison: 'Our tool processes locally for complete privacy and no file size limits.'
        },
        {
            name: 'Desktop Software',
            useCase: 'Professional image processing software with Base64 export',
            pros: 'Advanced features, Batch processing, Offline operation',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool is free and requires no installation.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Developer tools for Base64 encoding via terminal',
            pros: 'Scriptable, Fast processing, Integration with workflows',
            cons: 'Technical setup required, No GUI, Learning curve',
            comparison: 'Our tool provides user-friendly interface with no technical setup.'
        },
        {
            name: 'Browser Extensions',
            useCase: 'Browser add-ons for quick Base64 conversion',
            pros: 'Quick access, Integration with browser, Context menu options',
            cons: 'Browser-specific, Limited functionality, Privacy concerns',
            comparison: 'Our tool works independently and protects your privacy.'
        }
    ],
    'imageToBase64.relatedTools': [
        {
            name: 'Base64 to Image',
            description: 'Convert Base64 strings back to image files',
            url: '/base64-to-image'
        },
        {
            name: 'Image Format Converter',
            description: 'Convert between different image formats',
            url: '/image-converter'
        },
        {
            name: 'Image Compressor',
            description: 'Compress images to reduce file size',
            url: '/image-compressor'
        },
        {
            name: 'Image Resizer',
            description: 'Resize images to custom dimensions',
            url: '/image-resizer'
        },
        {
            name: 'Base64 Encoder/Decoder',
            description: 'Encode and decode Base64 strings',
            url: '/base64-encoder'
        },
        {
            name: 'File Converter',
            description: 'Convert between different file formats',
            url: '/file-converter'
        },
        {
            name: 'Text to Base64',
            description: 'Convert text strings to Base64 encoding',
            url: '/text-to-base64'
        }
    ],
    'imageToBase64.faqs': [
        {
            question: 'What is Base64 encoding?',
            answer: 'Base64 is an encoding scheme that converts binary data into text format, making it safe to embed images directly in HTML, CSS, or JavaScript.'
        },
        {
            question: 'Why would I use Base64 for images?',
            answer: 'Base64 eliminates the need for separate image files, reduces HTTP requests, and is useful for embedding small icons, logos, or images in emails.'
        },
        {
            question: 'What image formats are supported?',
            answer: 'We support all major image formats including JPEG, PNG, GIF, WebP, BMP, and SVG files.'
        },
        {
            question: 'Is there a size limit for Base64 conversion?',
            answer: 'While there\'s no strict limit, very large images (over 10MB) may cause browser performance issues and are not recommended for Base64 encoding.'
        },
        {
            question: 'What\'s the difference between clean Base64 and with prefix?',
            answer: 'Clean Base64 contains only the encoded data, while with prefix includes "data:image/[format];base64," which is needed for direct use in HTML/CSS.'
        },
        {
            question: 'How much larger is Base64 than the original image?',
            answer: 'Base64 encoding increases file size by approximately 33% due to the encoding overhead. This is why it\'s recommended for small images only.'
        },
        {
            question: 'Can I use Base64 in CSS?',
            answer: 'Yes! You can use Base64 in CSS with the data URI scheme: background-image: url(\'data:image/png;base64,YOUR_BASE64_STRING\');'
        },
        {
            question: 'Is my data secure?',
            answer: 'All conversion happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'Can I convert multiple images at once?',
            answer: 'Currently, this tool processes one image at a time to ensure quality control and accurate conversion.'
        },
        {
            question: 'How do I use Base64 in HTML?',
            answer: 'Use Base64 in HTML with the data URI scheme: <img src="data:image/png;base64,YOUR_BASE64_STRING" alt="Description">'
        }
    ],
    'imageToBase64.securityNote': 'All Base64 conversion happens locally in your browser using FileReader API. No data is stored on our servers, ensuring complete privacy and security.',
    'imageToBase64.additionalContent': 'Image to Base64 conversion is essential for web development, email marketing, and data transmission. Combine our converter with other tools like image compression, format conversion, and Base64 decoding for comprehensive media management.'
};
