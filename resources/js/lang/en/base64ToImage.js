export default {
    'base64ToImage.title': 'Base64 to Image Converter - Free Online Tool',
    'base64ToImage.description': 'Free online tool to convert Base64 strings back to images. Supports all image formats with validation, preview, and download options.',
    'base64ToImage.base64_input': 'Base64 Input',
    'base64ToImage.paste': 'Paste',
    'base64ToImage.clear': 'Clear',
    'base64ToImage.load_sample': 'Load Sample',
    'base64ToImage.base64_input_placeholder': 'Paste your Base64 string here...',
    'base64ToImage.characters': 'characters',
    'base64ToImage.detected_format': 'Detected Format:',
    'base64ToImage.valid_base64': '✓ Valid Base64',
    'base64ToImage.invalid_base64': '✗ Invalid Base64',
    'base64ToImage.generating': 'Generating...',
    'base64ToImage.generate_image': 'Generate Image',
    'base64ToImage.reset_all': 'Reset All',
    'base64ToImage.generated_image': 'Generated Image',
    'base64ToImage.copied': 'Copied!',
    'base64ToImage.copy_url': 'Copy URL',
    'base64ToImage.download': 'Download',
    'base64ToImage.format': 'Format:',
    'base64ToImage.dimensions': 'Dimensions:',
    'base64ToImage.base64_size': 'Base64 Size:',
    'base64ToImage.est_image_size': 'Est. Image Size:',
    
    // SEO Content specific to Base64 to Image converter
    'base64ToImage.mainDescription': 'Free online Base64 to Image converter with format detection, validation, preview, and download options. Convert Base64 strings to any image format instantly.',
    'base64ToImage.extendedDescription': 'Our comprehensive Base64 to Image converter tool helps you convert Base64 strings back to image files with advanced features. Includes automatic format detection, real-time validation, image preview, format information, and secure local processing. All operations happen in your browser for complete privacy.',
    'base64ToImage.features': [
        {
            title: 'Automatic Format Detection',
            description: 'Automatically detects image format from Base64 string (JPEG, PNG, GIF, WebP, BMP, SVG)'
        },
        {
            title: 'Real-time Validation',
            description: 'Validates Base64 strings in real-time with visual feedback and error detection'
        },
        {
            title: 'Image Preview',
            description: 'Preview converted images instantly with detailed format and dimension information'
        },
        {
            title: 'Format Support',
            description: 'Supports both data URL format and clean Base64 strings for maximum compatibility'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy image URLs to clipboard for easy sharing and use'
        },
        {
            title: 'Download Options',
            description: 'Download converted images in their original detected format with proper file extensions'
        },
        {
            title: 'Sample Data',
            description: 'Load sample Base64 data for testing and learning purposes'
        },
        {
            title: 'Size Analysis',
            description: 'Display Base64 string size and estimated image file size for comparison'
        },
        {
            title: 'Error Handling',
            description: 'Comprehensive error messages and validation for smooth user experience'
        },
        {
            title: 'Secure Processing',
            description: 'All conversion happens locally in your browser - no server uploads required'
        }
    ],
    'base64ToImage.steps': [
        'Paste your Base64 string or load a sample for testing',
        'The tool will automatically detect the image format and validate the Base64',
        'Click "Generate Image" to convert Base64 to image file',
        'Preview the generated image with format and dimension information',
        'Copy image URL or download the image file for use',
        'Use the restored image in your applications or documents'
    ],
    'base64ToImage.examples': [
        {
            title: 'Restore Embedded Image',
            description: 'Convert Base64 image back to file format',
            code: 'Input: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
            result: 'Output: 1x1 pixel red square image (restored from Base64)'
        },
        {
            title: 'Database Image Recovery',
            description: 'Extract images stored as Base64 in database',
            code: 'Input: Base64 string from database blob field | Format: Auto-detect',
            result: 'Output: Original image file (JPEG/PNG/GIF format preserved)',
            steps: [
                'Copy Base64 string from database',
                'Paste in converter tool',
                'Verify image format detection',
                'Download restored image file'
            ]
        },
        {
            title: 'API Response Image',
            description: 'Convert API Base64 response to image',
            code: 'Input: Base64 from JSON API response | Format: JPEG',
            result: 'Output: Downloadable JPEG image from API data'
        }
    ],
    'base64ToImage.useCases': [
        {
            title: 'Database Recovery',
            description: 'Developers restoring images stored as Base64 in databases',
            example: 'Backend developer extracting user avatars stored as Base64 in database'
        },
        {
            title: 'API Integration',
            description: 'Developers processing Base64 image data from API responses',
            example: 'Frontend developer converting Base64 from mobile app API response'
        },
        {
            title: 'Data Migration',
            description: 'IT professionals migrating image data between systems',
            example: 'Data engineer converting Base64 image storage to file-based storage'
        },
        {
            title: 'Content Management',
            description: 'Content managers restoring images from text-based storage',
            example: 'CMS admin restoring images from Base64 backup files'
        },
        {
            title: 'Email Processing',
            description: 'Users extracting embedded images from email content',
            example: 'Email user extracting images embedded in email as Base64 strings'
        },
        {
            title: 'Debugging and Testing',
            description: 'Developers testing Base64 encoding/decoding processes',
            example: 'QA engineer verifying Base64 to image conversion functionality'
        }
    ],
    'base64ToImage.technicalDetails': 'Our Base64 to Image converter uses advanced Base64 decoding algorithms and format detection to convert Base64 strings back to image files. The tool supports both data URL format and clean Base64 strings, validates input in real-time, and creates proper image data URLs. All processing happens locally using JavaScript and Canvas API.',
    'base64ToImage.bestPractices': [
        {
            title: 'Base64 Validation',
            tip: 'Always validate Base64 strings before conversion. The tool provides real-time validation to ensure data integrity.'
        },
        {
            title: 'Format Detection',
            tip: 'Trust the automatic format detection but verify the detected format matches your expectations.'
        },
        {
            title: 'Data Source Verification',
            tip: 'Ensure your Base64 source is reliable and the data is complete before conversion.'
        },
        {
            title: 'Size Considerations',
            tip: 'Large Base64 strings may take longer to process. Consider the size impact on performance.'
        }
    ],
    'base64ToImage.commonErrors': [
        {
            error: 'Invalid Base64 Format',
            cause: 'Base64 string contains invalid characters, incorrect padding, or corrupted data',
            solution: 'Ensure the Base64 string is complete and properly formatted. Use the validation feature.',
            prevention: 'Copy the complete Base64 string and verify it\'s not truncated or modified.'
        },
        {
            error: 'Unsupported Image Format',
            cause: 'Base64 string contains unsupported or corrupted image format',
            solution: 'Verify the source format and ensure it\'s a supported image type (JPEG, PNG, GIF, WebP, BMP, SVG).',
            prevention: 'Check the original image format before Base64 encoding.'
        },
        {
            error: 'Corrupted Image Data',
            cause: 'Base64 string is corrupted or incomplete',
            solution: 'Obtain a fresh copy of the Base64 string from the original source.',
            prevention: 'Verify Base64 integrity before storage or transmission.'
        },
        {
            error: 'Conversion Timeout',
            cause: 'Large Base64 strings causing browser processing timeouts',
            solution: 'Use smaller Base64 strings or try again with a different browser.',
            prevention: 'Test with smaller strings first and ensure adequate system resources.'
        },
        {
            error: 'Image Generation Failed',
            cause: 'Browser limitations or incompatible image data format',
            solution: 'Try a different browser or verify the Base64 string format.',
            prevention: 'Use modern browsers and ensure Base64 string is properly formatted.'
        },
        {
            error: 'Download Failed',
            cause: 'Browser download issues or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space.',
            prevention: 'Clear browser cache and verify download permissions.'
        }
    ],
    'base64ToImage.alternatives': [
        {
            name: 'Online Base64 Decoders',
            useCase: 'Cloud-based Base64 decoding services',
            pros: 'Cross-platform access, No installation, Multiple format support',
            cons: 'Privacy concerns, Internet dependency, File size limits',
            comparison: 'Our tool processes locally for complete privacy and no file size limits.'
        },
        {
            name: 'Desktop Image Software',
            useCase: 'Professional image editing software with Base64 import',
            pros: 'Advanced features, Batch processing, Offline operation',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool is free and requires no installation.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Developer tools for Base64 decoding via terminal',
            pros: 'Scriptable, Fast processing, Integration with workflows',
            cons: 'Technical setup required, No GUI, Learning curve',
            comparison: 'Our tool provides user-friendly interface with no technical setup.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'Software libraries for Base64 decoding in applications',
            pros: 'Integration with code, Custom processing, Performance optimized',
            cons: 'Programming knowledge required, Implementation complexity',
            comparison: 'Our tool offers instant conversion without programming.'
        }
    ],
    'base64ToImage.relatedTools': [
        {
            name: 'Image to Base64',
            description: 'Convert images to Base64 strings',
            url: '/image-to-base64'
        },
        {
            name: 'Base64 Encoder/Decoder',
            description: 'Encode and decode Base64 strings',
            url: '/base64-encoder'
        },
        {
            name: 'Image Format Converter',
            description: 'Convert between different image formats',
            url: '/image-converter'
        },
        {
            name: 'Image Validator',
            description: 'Validate and analyze image files',
            url: '/image-validator'
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
        },
        {
            name: 'Base64 to Text',
            description: 'Convert Base64 strings back to text',
            url: '/base64-to-text'
        }
    ],
    'base64ToImage.faqs': [
        {
            question: 'What Base64 formats are supported?',
            answer: 'We support all Base64 image formats including data URLs (data:image/...;base64,) and clean Base64 strings for JPEG, PNG, GIF, WebP, BMP, and SVG.'
        },
        {
            question: 'How do I know if my Base64 is valid?',
            answer: 'The tool automatically validates your Base64 input and shows the detected format. You\'ll see a green checkmark for valid Base64 and format information.'
        },
        {
            question: 'What if my Base64 doesn\'t have a data prefix?',
            answer: 'The tool can handle both formats - with or without the data:image prefix. It will automatically detect the image type from the Base64 data.'
        },
        {
            question: 'Can I download the generated image?',
            answer: 'Yes! Once the image is generated, you can download it in the detected format (JPEG, PNG, etc.) with just one click.'
        },
        {
            question: 'How accurate is format detection?',
            answer: 'Our format detection is highly accurate for standard image formats. It analyzes the Base64 data and file signatures to identify JPEG, PNG, GIF, WebP, BMP, and SVG formats.'
        },
        {
            question: 'Is there a size limit for Base64 input?',
            answer: 'While there\'s no strict limit, very large Base64 strings (over 50MB) may cause browser performance issues and are not recommended.'
        },
        {
            question: 'Can I use this for debugging?',
            answer: 'Yes! This tool is perfect for debugging Base64 encoding issues, testing image data, and verifying format detection.'
        },
        {
            question: 'Is my data secure?',
            answer: 'All conversion happens directly in your browser. Your Base64 strings are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'What image formats can be generated?',
            answer: 'The tool can generate JPEG, PNG, GIF, WebP, BMP, and SVG images based on the detected Base64 format.'
        },
        {
            question: 'Can I copy the generated image URL?',
            answer: 'Yes! You can copy the generated image data URL to clipboard for easy sharing or use in other applications.'
        }
    ],
    'base64ToImage.securityNote': 'All Base64 to Image conversion happens locally in your browser using JavaScript and Canvas API. No data is stored on our servers, ensuring complete privacy and security.',
    'base64ToImage.additionalContent': 'Base64 to Image conversion is essential for data recovery, API integration, and content management. Combine our converter with other tools like Base64 encoding, image conversion, and format validation for comprehensive data processing.'
};
