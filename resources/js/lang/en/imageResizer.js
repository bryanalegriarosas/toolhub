export default {
    'imageResizer.title': 'Image Resizer - Free Online Image Dimension Tool',
    'imageResizer.description': 'Resize images to custom dimensions with aspect ratio lock, presets, and format conversion. Perfect for social media, web optimization, and professional use.',
    'imageResizer.choose_image': 'Choose Image',
    'imageResizer.drop_image': 'Drop image here or click to upload',
    'imageResizer.original_dimensions': 'Original Dimensions',
    'imageResizer.size': 'Size:',
    'imageResizer.width_px': 'Width (px)',
    'imageResizer.height_px': 'Height (px)',
    'imageResizer.scale': 'Scale (%)',
    'imageResizer.lock_aspect_ratio': 'Lock Aspect Ratio',
    'imageResizer.quick_presets': 'Quick Presets',
    'imageResizer.output_format': 'Output Format',
    'imageResizer.processing': 'Processing...',
    'imageResizer.resize_image': 'Resize Image',
    'imageResizer.clear_all': 'Clear All',
    'imageResizer.resized_image': 'Resized Image',
    'imageResizer.new_dimensions': 'New Dimensions:',
    'imageResizer.file_size': 'File Size:',
    'imageResizer.download_resized_image': 'Download Resized Image',
    
    // SEO Content specific to Image Resizer
    'imageResizer.mainDescription': 'Free online image resizer with advanced dimension controls, aspect ratio preservation, preset sizes, and format conversion. Resize images for social media, web optimization, and professional use.',
    'imageResizer.extendedDescription': 'Our comprehensive image resizer tool helps you adjust image dimensions with precision controls for width, height, scale, and aspect ratio. Features include preset sizes for social media platforms, real-time dimension preview, format conversion options, and secure local processing. All operations happen in your browser for complete privacy.',
    'imageResizer.features': [
        {
            title: 'Custom Dimension Control',
            description: 'Set precise width and height in pixels with real-time preview of changes'
        },
        {
            title: 'Aspect Ratio Preservation',
            description: 'Lock aspect ratio to maintain image proportions when resizing'
        },
        {
            title: 'Scale Percentage Control',
            description: 'Resize images by percentage from 1% to 200% for proportional scaling'
        },
        {
            title: 'Social Media Presets',
            description: 'Quick access to common dimensions for Instagram, Facebook, Twitter, YouTube, and more'
        },
        {
            title: 'Format Conversion',
            description: 'Convert between JPEG, PNG, and WebP formats during resizing'
        },
        {
            title: 'Real-time Preview',
            description: 'See new dimensions and file size before downloading'
        },
        {
            title: 'Secure Local Processing',
            description: 'All resizing happens in your browser - images never leave your device'
        },
        {
            title: 'Batch Ready Interface',
            description: 'Streamlined workflow for resizing multiple images sequentially'
        }
    ],
    'imageResizer.steps': [
        'Upload your image using file selector or drag and drop',
        'View original dimensions and file information',
        'Set new dimensions manually or use preset sizes for social media',
        'Enable aspect ratio lock to maintain proportions when resizing',
        'Choose output format (JPEG, PNG, WebP) for your specific needs',
        'Click "Resize Image" and download your perfectly sized image'
    ],
    'imageResizer.examples': [
        {
            title: 'Social Media Optimization',
            description: 'Resize image for Instagram post',
            code: 'Original: 1920×1080px | Target: 1080×1080px | Aspect Ratio: Locked',
            result: 'Perfect square format for Instagram feed with maintained quality'
        },
        {
            title: 'Web Thumbnail Creation',
            description: 'Create thumbnail for website',
            code: 'Original: 4000×3000px | Target: 400×300px | Scale: 10%',
            result: 'Optimized thumbnail with reduced file size and maintained aspect ratio',
            steps: [
                'Upload high-resolution image',
                'Set width to 400px with aspect ratio locked',
                'Choose JPEG format for web compatibility',
                'Download optimized thumbnail'
            ]
        },
        {
            title: 'Header Banner Resizing',
            description: 'Resize for website header banner',
            code: 'Original: 1024×768px | Target: 1920×400px | Format: PNG',
            result: 'Wide banner format optimized for website headers with transparency support'
        }
    ],
    'imageResizer.useCases': [
        {
            title: 'Social Media Management',
            description: 'Content creators resizing images for different social media platforms',
            example: 'Social media manager resizing photos for Instagram, Facebook, and Twitter'
        },
        {
            title: 'Web Development',
            description: 'Developers optimizing images for websites and applications',
            example: 'Frontend developer creating thumbnails and responsive images'
        },
        {
            title: 'E-commerce Optimization',
            description: 'Online store owners resizing product images for consistent displays',
            example: 'E-commerce manager standardizing product photo dimensions'
        },
        {
            title: 'Digital Marketing',
            description: 'Marketers creating ad banners and promotional materials',
            example: 'Digital marketer resizing banner ads for different platforms'
        },
        {
            title: 'Content Creation',
            description: 'Bloggers and creators preparing images for various platforms',
            example: 'Content creator resizing images for blog and social media'
        },
        {
            title: 'Print Preparation',
            description: 'Designers preparing images for print materials and documents',
            example: 'Graphic designer resizing artwork for print production'
        }
    ],
    'imageResizer.technicalDetails': 'Our image resizer uses advanced Canvas API and image processing algorithms to resize images directly in your browser. The tool reads each image file, calculates optimal dimensions based on your settings, and creates a resized image using HTML5 Canvas. The resizing process maintains image quality while adjusting dimensions according to your specifications. All processing happens locally using WebAssembly and JavaScript.',
    'imageResizer.bestPractices': [
        {
            title: 'Aspect Ratio Considerations',
            tip: 'Lock aspect ratio when resizing for social media to maintain proportions. Use presets for platform-specific dimensions.'
        },
        {
            title: 'Quality Preservation',
            tip: 'Choose appropriate output format: JPEG for photos, PNG for graphics with transparency, WebP for modern browsers.'
        },
        {
            title: 'Dimension Planning',
            tip: 'Plan target dimensions based on use case: thumbnails (100-300px), social media (1080px+), web banners (1920px+).'
        },
        {
            title: 'File Size Management',
            tip: 'Monitor file size changes during resizing. Larger dimensions create bigger files; balance quality and size.'
        }
    ],
    'imageResizer.commonErrors': [
        {
            error: 'Invalid Image Format',
            cause: 'Attempting to resize non-image files or unsupported image formats',
            solution: 'Ensure file is a valid image in supported formats (JPEG, PNG, WebP, GIF, BMP, SVG)',
            prevention: 'Check file extensions and verify images can be opened normally'
        },
        {
            error: 'File Size Exceeded',
            cause: 'Image files larger than 10MB causing processing issues',
            solution: 'Use a smaller image or resize in stages with larger files',
            prevention: 'Check image file size and optimize large images before resizing'
        },
        {
            error: 'Dimension Validation Error',
            cause: 'Invalid dimension values or extremely large dimensions causing processing issues',
            solution: 'Use reasonable dimensions (under 10,000px) and valid positive numbers',
            prevention: 'Check dimension requirements for your target platform before resizing'
        },
        {
            error: 'Canvas Processing Error',
            cause: 'Browser memory limitations or corrupted image files',
            solution: 'Refresh the page, try smaller dimensions, or use a different browser',
            prevention: 'Use modern browsers and ensure adequate system resources'
        },
        {
            error: 'Format Conversion Error',
            cause: 'Issues converting between image formats during resizing',
            solution: 'Try resizing in original format or use a different output format',
            prevention: 'Test format compatibility with your target use case'
        },
        {
            error: 'Download Issues',
            cause: 'Browser blocking downloads or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space',
            prevention: 'Clear browser cache and verify download permissions'
        }
    ],
    'imageResizer.alternatives': [
        {
            name: 'Desktop Image Software',
            useCase: 'Professional image editing and resizing with advanced features',
            pros: 'Advanced features, Offline processing, Batch operations',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool offers free, instant resizing without installation or cost'
        },
        {
            name: 'Online Resizing Services',
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
    'imageResizer.relatedTools': [
        {
            name: 'Image Compressor',
            description: 'Reduce image file size while maintaining quality',
            url: '/image-compressor'
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
            name: 'Image Cropper',
            description: 'Crop images to specific dimensions',
            url: '/image-cropper'
        },
        {
            name: 'WebP Converter',
            description: 'Convert images to WebP format for better compression',
            url: '/webp-converter'
        },
        {
            name: 'Image Optimizer',
            description: 'Advanced image optimization for web performance',
            url: '/image-optimizer'
        },
        {
            name: 'Batch Image Resizer',
            description: 'Resize multiple images at once',
            url: '/batch-image-resizer'
        }
    ],
    'imageResizer.faqs': [
        {
            question: 'What image formats are supported?',
            answer: 'We support all major image formats including JPEG, PNG, WebP, GIF, BMP, and SVG files for resizing.'
        },
        {
            question: 'What does "Lock Aspect Ratio" do?',
            answer: 'When enabled, changing one dimension automatically adjusts the other to maintain the original image proportions. This prevents distortion.'
        },
        {
            question: 'What are the preset sizes for?',
            answer: 'Presets include common dimensions for social media platforms: Instagram (1080×1080), Facebook (1200×630), Twitter (1500×500), YouTube (1280×720), and more.'
        },
        {
            question: 'Can I resize multiple images at once?',
            answer: 'Currently, this tool processes one image at a time to ensure quality control and precise dimension settings.'
        },
        {
            question: 'How does scale percentage work?',
            answer: 'Scale resizes both dimensions proportionally. 100% is original size, 50% halves dimensions, 200% doubles dimensions.'
        },
        {
            question: 'What output formats are available?',
            answer: 'You can choose between JPEG (best for photos), PNG (supports transparency), and WebP (modern compression) formats.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes! All resizing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'What are the dimension limits?',
            answer: 'Maximum practical dimensions are around 10,000×10,000 pixels. Larger dimensions may cause browser performance issues.'
        },
        {
            question: 'Is this image resizer completely free?',
            answer: 'Yes! Our image resizer is completely free with no registration, watermarks, or hidden costs. Resize unlimited images.'
        }
    ],
    'imageResizer.securityNote': 'All image resizing happens locally in your browser using JavaScript and Canvas API. No files are uploaded to external servers, ensuring your image privacy and complete data security.',
    'imageResizer.additionalContent': 'Image resizing is essential for web performance, social media optimization, and content creation. Combine our resizer with other tools like compression, format conversion, and PDF creation for comprehensive image management.'
};
