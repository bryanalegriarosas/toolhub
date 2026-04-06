export default {
    'imageCompressor.title': 'Image Compressor - Free Online Image Optimization Tool',
    'imageCompressor.description': 'Compress images to reduce file size while maintaining quality. Support for JPEG, PNG, WebP with adjustable compression settings and format conversion.',
    'imageCompressor.choose_image': 'Choose Image',
    'imageCompressor.drop_image': 'Drop image here or click to upload',
    'imageCompressor.quality': 'Quality',
    'imageCompressor.format': 'Format',
    'imageCompressor.max_width': 'Max Width (px)',
    'imageCompressor.no_limit': 'No limit',
    'imageCompressor.processing': 'Processing...',
    'imageCompressor.compress_image': 'Compress Image',
    'imageCompressor.clear_all': 'Clear All',
    'imageCompressor.original': 'Original',
    'imageCompressor.compressed': 'Compressed',
    'imageCompressor.size': 'Size:',
    'imageCompressor.dimensions': 'Dimensions:',
    'imageCompressor.savings': 'Savings:',
    
    // SEO Content specific to Image Compressor
    'imageCompressor.mainDescription': 'Free online image compressor with advanced optimization algorithms, quality control, format conversion, and secure local processing. Reduce image file sizes while maintaining visual quality.',
    'imageCompressor.extendedDescription': 'Our comprehensive image compressor tool helps you optimize images for web use with advanced features like adjustable quality settings, format conversion, dimension resizing, and real-time compression preview. All processing happens locally in your browser for complete privacy and security.',
    'imageCompressor.features': [
        {
            title: 'Multiple Format Support',
            description: 'Support for JPEG, PNG, WebP, GIF, BMP, and SVG image formats for comprehensive compression'
        },
        {
            title: 'Adjustable Quality Control',
            description: 'Fine-tune compression levels from 10% to 100% to balance file size and image quality'
        },
        {
            title: 'Format Conversion',
            description: 'Convert between JPEG, PNG, and WebP formats during compression for optimal file types'
        },
        {
            title: 'Dimension Resizing',
            description: 'Set maximum width to resize images while maintaining aspect ratio automatically'
        },
        {
            title: 'Real-time Preview',
            description: 'See before and after compression results with file size and dimension comparisons'
        },
        {
            title: 'Compression Statistics',
            description: 'Detailed compression ratio and file size savings information for optimization tracking'
        },
        {
            title: 'Secure Local Processing',
            description: 'All compression happens in your browser - images never leave your device'
        },
        {
            title: 'Instant Download',
            description: 'Download compressed images immediately with automatic filename generation'
        },
        {
            title: 'Smart Algorithms',
            description: 'Advanced compression algorithms optimized for different image types and use cases'
        }
    ],
    'imageCompressor.steps': [
        'Upload your image using the file selector or drag and drop',
        'Adjust compression quality (10-100%) to balance file size and quality',
        'Choose output format (JPEG, PNG, WebP) for your specific needs',
        'Set maximum width to resize images if needed (optional)',
        'Click "Compress Image" to process and optimize your image',
        'Download your compressed image with reduced file size'
    ],
    'imageCompressor.examples': [
        {
            title: 'Website Image Optimization',
            description: 'Compress hero image for faster web page loading',
            code: 'Input: hero-image.jpg (2.5MB) | Quality: 80% | Format: JPEG',
            result: 'Output: hero-image-compressed.jpg (450KB) - 82% size reduction'
        },
        {
            title: 'Social Media Image Compression',
            description: 'Optimize images for social media platforms',
            code: 'Input: post-photo.png (1.8MB) | Quality: 70% | Format: PNG',
            result: 'Output: post-photo-compressed.png (380KB) - 79% size reduction',
            steps: [
                'Upload high-quality photo',
                'Set quality to 70% for social media',
                'Choose PNG format for transparency support',
                'Download optimized image for upload'
            ]
        },
        {
            title: 'Email Newsletter Images',
            description: 'Compress images for email campaigns',
            code: 'Input: newsletter-banner.jpg (800KB) | Quality: 60% | Format: JPEG',
            result: 'Output: newsletter-banner.jpg (180KB) - 77% size reduction'
        }
    ],
    'imageCompressor.useCases': [
        {
            title: 'Web Development',
            description: 'Developers optimizing images for faster website loading and better user experience',
            example: 'Frontend developer compressing product images for e-commerce site'
        },
        {
            title: 'Content Creation',
            description: 'Content creators optimizing images for social media, blogs, and digital marketing',
            example: 'Social media manager compressing Instagram story images'
        },
        {
            title: 'Email Marketing',
            description: 'Marketers compressing images for email newsletters and campaigns',
            example: 'Email marketer optimizing header images for newsletter'
        },
        {
            title: 'E-commerce Optimization',
            description: 'Online store owners reducing product image sizes for faster page loads',
            example: 'E-commerce manager compressing product photos for online store'
        },
        {
            title: 'Mobile App Development',
            description: 'App developers optimizing images for mobile applications and responsive design',
            example: 'Mobile developer compressing app icons and UI images'
        },
        {
            title: 'Digital Asset Management',
            description: 'Designers organizing and compressing large image libraries and assets',
            example: 'Graphic designer compressing design asset library for client delivery'
        }
    ],
    'imageCompressor.technicalDetails': 'Our image compressor uses advanced Canvas API and compression algorithms to optimize images directly in your browser. The tool reads each image file, applies intelligent compression based on quality settings, and can convert between formats while maintaining optimal quality. The compression process preserves important visual details while reducing file size through smart data optimization. All processing happens locally using WebAssembly and JavaScript.',
    'imageCompressor.bestPractices': [
        {
            title: 'Quality Settings',
            tip: 'Use 80-90% quality for web images to balance size and visual quality. Use 60-70% for thumbnails and previews. Use 90-100% for archival or print purposes.'
        },
        {
            title: 'Format Selection',
            tip: 'Choose JPEG for photographs and complex images. Use PNG for graphics with transparency or text. Use WebP for modern browsers and maximum compression.'
        },
        {
            title: 'Size Optimization',
            tip: 'Resize images to maximum dimensions needed for your use case. Larger images than necessary waste bandwidth and slow loading.'
        },
        {
            title: 'Batch Processing',
            tip: 'Compress multiple images in sequence for consistent quality settings. Test different quality levels to find optimal balance for your specific images.'
        }
    ],
    'imageCompressor.commonErrors': [
        {
            error: 'Invalid Image Format',
            cause: 'Attempting to compress non-image files or unsupported image formats',
            solution: 'Ensure the file is a valid image in supported formats (JPEG, PNG, WebP, GIF, BMP, SVG)',
            prevention: 'Check file extensions and verify images can be opened normally'
        },
        {
            error: 'File Size Exceeded',
            cause: 'Image files larger than 10MB causing processing issues',
            solution: 'Use a smaller image or compress in stages with larger files',
            prevention: 'Check image file size and optimize large images before compression'
        },
        {
            error: 'Compression Failure',
            cause: 'Browser memory limitations or corrupted image files',
            solution: 'Refresh the page, try lower quality settings, or use a different browser',
            prevention: 'Use modern browsers and ensure adequate system resources'
        },
        {
            error: 'Format Conversion Error',
            cause: 'Issues converting between image formats during compression',
            solution: 'Try compressing in the original format or use a different output format',
            prevention: 'Test format compatibility with your target use case'
        },
        {
            error: 'Canvas Processing Error',
            cause: 'Browser不支持Canvas API or JavaScript errors during image processing',
            solution: 'Update your browser or try with a different device',
            prevention: 'Use modern browsers with Canvas API support'
        },
        {
            error: 'Download Issues',
            cause: 'Browser blocking downloads or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space',
            prevention: 'Clear browser cache and verify download permissions'
        }
    ],
    'imageCompressor.alternatives': [
        {
            name: 'Desktop Image Software',
            useCase: 'Professional image editing and compression with advanced features',
            pros: 'Advanced features, Offline processing, Batch operations',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool offers free, instant compression without installation or cost'
        },
        {
            name: 'Online Compression Services',
            useCase: 'Cloud-based image processing with collaboration features',
            pros: 'Cloud storage, Team collaboration, Advanced tools',
            cons: 'Privacy concerns, Subscription costs, Internet dependency',
            comparison: 'Our tool processes locally for complete privacy and no recurring costs'
        },
        {
            name: 'Build Tools',
            useCase: 'Developer tools for image optimization in build processes',
            pros: 'Automated processing, Build integration, Command line tools',
            cons: 'Technical setup, Development knowledge required, Limited GUI',
            comparison: 'Our tool provides user-friendly interface with no technical setup'
        },
        {
            name: 'CMS Image Optimizers',
            useCase: 'Content management system plugins for automatic image optimization',
            pros: 'Automatic optimization, CMS integration, Workflow automation',
            cons: 'Platform specific, Subscription costs, Limited control',
            comparison: 'Our tool works independently with any platform or CMS'
        }
    ],
    'imageCompressor.relatedTools': [
        {
            name: 'Image Resizer',
            description: 'Resize images to specific dimensions',
            url: '/image-resizer'
        },
        {
            name: 'Image Format Converter',
            description: 'Convert between different image formats',
            url: '/image-converter'
        },
        {
            name: 'Image to PDF Converter',
            description: 'Convert images to PDF documents',
            url: '/image-to-pdf'
        },
        {
            name: 'JPG to PDF Converter',
            description: 'Convert multiple JPG images to PDF',
            url: '/jpg-to-pdf'
        },
        {
            name: 'WebP Converter',
            description: 'Convert images to WebP format for better compression',
            url: '/webp-converter'
        },
        {
            name: 'PNG Compressor',
            description: 'Specialized PNG compression with transparency support',
            url: '/png-compressor'
        },
        {
            name: 'Image Optimizer',
            description: 'Advanced image optimization for web performance',
            url: '/image-optimizer'
        }
    ],
    'imageCompressor.faqs': [
        {
            question: 'What image formats are supported?',
            answer: 'We support all major image formats including JPEG, PNG, WebP, GIF, BMP, and SVG files for compression.'
        },
        {
            question: 'How does image compression work?',
            answer: 'Image compression reduces file size by removing unnecessary data and optimizing how the image is stored. Quality settings control the balance between file size and visual quality.'
        },
        {
            question: 'What quality setting should I use?',
            answer: 'Use 80-90% for web images, 60-70% for thumbnails, and 90-100% for archival. Higher quality means larger file size but better visual quality.'
        },
        {
            question: 'Can I resize images while compressing?',
            answer: 'Yes! You can set a maximum width and the tool will automatically maintain the aspect ratio while resizing during compression.'
        },
        {
            question: 'What\'s the difference between JPEG and PNG?',
            answer: 'JPEG uses lossy compression for smaller files, ideal for photographs. PNG uses lossless compression for perfect quality, ideal for graphics with transparency.'
        },
        {
            question: 'How much can I reduce file size?',
            answer: 'Compression results vary by image type and quality settings. Typical reductions range from 50-90% for photographs, 10-50% for graphics.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes! All compression happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'Can I compress multiple images at once?',
            answer: 'Currently, this tool processes one image at a time. For batch processing, you would need to compress images individually or use batch compression tools.'
        },
        {
            question: 'Is this image compressor completely free?',
            answer: 'Yes! Our image compressor is completely free with no registration, watermarks, or hidden costs. Compress unlimited images.'
        }
    ],
    'imageCompressor.securityNote': 'All image compression happens locally in your browser using JavaScript and Canvas API. No files are uploaded to external servers, ensuring your image privacy and complete data security.',
    'imageCompressor.additionalContent': 'Image compression is essential for web performance and user experience. Combine our compressor with other tools like format conversion, resizing, and PDF conversion for comprehensive image optimization.'
};
