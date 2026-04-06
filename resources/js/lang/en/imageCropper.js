export default {
    'imageCropper.title': 'Image Cropper - Free Online Image Cropping Tool',
    'imageCropper.description': 'Crop images with interactive selection, aspect ratios, preset sizes, and download options. Perfect for profile pictures, thumbnails, and social media optimization.',
    'imageCropper.choose_image': 'Choose Image',
    'imageCropper.drop_image': 'Drop image here or click to upload',
    'imageCropper.clear_image': 'Clear Image',
    'imageCropper.width_px': 'Width (px)',
    'imageCropper.height_px': 'Height (px)',
    'imageCropper.x_position': 'X Position',
    'imageCropper.y_position': 'Y Position',
    'imageCropper.aspect_ratio': 'Aspect Ratio',
    'imageCropper.free': 'Free',
    'imageCropper.square_1_1': 'Square (1:1)',
    'imageCropper.widescreen_16_9': 'Widescreen (16:9)',
    'imageCropper.standard_4_3': 'Standard (4:3)',
    'imageCropper.photo_3_2': 'Photo (3:2)',
    'imageCropper.portrait_9_16': 'Portrait (9:16)',
    'imageCropper.quick_presets': 'Quick Presets',
    'imageCropper.custom': 'Custom',
    'imageCropper.instagram_square': 'Instagram Square (1080×1080)',
    'imageCropper.instagram_story': 'Instagram Story (1080×1920)',
    'imageCropper.facebook_cover': 'Facebook Cover (1200×630)',
    'imageCropper.twitter_header': 'Twitter Header (1500×500)',
    'imageCropper.youtube_thumbnail': 'YouTube Thumbnail (1280×720)',
    'imageCropper.thumbnail': 'Thumbnail (300×300)',
    'imageCropper.small': 'Small (150×150)',
    'imageCropper.center_crop': 'Center Crop',
    'imageCropper.crop_image': 'Crop Image',
    'imageCropper.processing': 'Processing...',
    'imageCropper.original_image': 'Original Image',
    'imageCropper.cropped_result': 'Cropped Result',
    'imageCropper.cropped': 'Cropped',
    'imageCropper.download_cropped_image': 'Download Cropped Image',
    
    // SEO Content specific to Image Cropper
    'imageCropper.mainDescription': 'Free online image cropper with interactive selection, aspect ratio control, preset sizes, and download options. Crop images precisely for social media, thumbnails, and professional use.',
    'imageCropper.extendedDescription': 'Our comprehensive image cropper tool provides precise cropping capabilities with interactive selection, real-time preview, aspect ratio preservation, and preset sizes for social media platforms. Features include visual crop overlay, corner handles for resizing, multiple aspect ratios, and secure local processing. All operations happen in your browser for complete privacy.',
    'imageCropper.features': [
        {
            title: 'Interactive Crop Selection',
            description: 'Click and drag to create custom crop areas with visual overlay and corner handles'
        },
        {
            title: 'Aspect Ratio Control',
            description: 'Lock aspect ratio or choose from common ratios like 1:1, 16:9, 4:3, and more'
        },
        {
            title: 'Preset Sizes',
            description: 'Quick access to dimensions for Instagram, Facebook, Twitter, YouTube, and other platforms'
        },
        {
            title: 'Real-time Preview',
            description: 'See crop area overlay and preview changes before downloading'
        },
        {
            title: 'Precise Position Control',
            description: 'Adjust X and Y position for perfect crop placement'
        },
        {
            title: 'Multiple Format Support',
            description: 'Support for JPEG, PNG, WebP, GIF, BMP, and SVG image formats'
        },
        {
            title: 'Secure Local Processing',
            description: 'All cropping happens in your browser - images never leave your device'
        },
        {
            title: 'Download Options',
            description: 'Download cropped images in original format or convert to different formats'
        },
        {
            title: 'Responsive Design',
            description: 'Works perfectly on desktop and mobile devices with touch-friendly controls'
        }
    ],
    'imageCropper.steps': [
        'Upload your image using file selector or drag and drop',
        'Click and drag on the image to create a crop selection area',
        'Adjust crop dimensions manually or use preset aspect ratios',
        'Fine-tune position with X and Y controls for perfect placement',
        'Preview the crop area with real-time overlay',
        'Click "Crop Image" and download your perfectly cropped image'
    ],
    'imageCropper.examples': [
        {
            title: 'Profile Picture Cropping',
            description: 'Crop image to square profile picture',
            code: 'Input: full-body-photo.jpg | Aspect Ratio: 1:1 | Size: 400×400px',
            result: 'Output: profile-picture.jpg (perfect square for social media)'
        },
        {
            title: 'YouTube Thumbnail Creation',
            description: 'Create YouTube thumbnail from larger image',
            code: 'Input: landscape-video.jpg | Aspect Ratio: 16:9 | Size: 1280×720px',
            result: 'Output: youtube-thumbnail.jpg (perfect YouTube dimensions)',
            steps: [
                'Upload landscape video screenshot',
                'Select 16:9 aspect ratio',
                'Crop to focus on main subject',
                'Download optimized thumbnail'
            ]
        },
        {
            title: 'Instagram Story Cropping',
            description: 'Crop image for Instagram story format',
            code: 'Input: vertical-photo.jpg | Aspect Ratio: 9:16 | Size: 1080×1920px',
            result: 'Output: instagram-story.jpg (full-screen story format)'
        }
    ],
    'imageCropper.useCases': [
        {
            title: 'Social Media Management',
            description: 'Content creators cropping images for different social media platforms',
            example: 'Social media manager cropping photos for Instagram stories and Facebook posts'
        },
        {
            title: 'Thumbnail Generation',
            description: 'Creating thumbnails for websites and video platforms',
            example: 'Content creator generating thumbnails for blog posts and YouTube videos'
        },
        {
            title: 'Profile Picture Optimization',
            description: 'Users creating perfect profile pictures for social networks',
            example: 'Professional cropping profile picture for LinkedIn or dating apps'
        },
        {
            title: 'Content Creation',
            description: 'Bloggers and creators preparing images for various platforms',
            example: 'Content creator cropping images for blog headers and social media'
        },
        {
            title: 'E-commerce Preparation',
            description: 'Online store owners preparing product images',
            example: 'E-commerce manager cropping product photos for consistent displays'
        },
        {
            title: 'Digital Marketing',
            description: 'Marketers creating ad banners and promotional materials',
            example: 'Digital marketer cropping banner ads for different campaigns'
        },
        {
            title: 'Print Production',
            description: 'Designers preparing images for print materials',
            example: 'Graphic designer cropping artwork for print production'
        }
    ],
    'imageCropper.technicalDetails': 'Our image cropper uses advanced Canvas API and interactive selection algorithms to crop images directly in your browser. The tool reads each image file, enables interactive crop selection with visual feedback, maintains aspect ratios when locked, and creates a cropped image using HTML5 Canvas. The cropping process preserves image quality while adjusting dimensions according to your specifications. All processing happens locally using WebAssembly and JavaScript.',
    'imageCropper.bestPractices': [
        {
            title: 'Selection Planning',
            tip: 'Plan your crop area before making selections. Consider the final use case and platform requirements.'
        },
        {
            title: 'Aspect Ratio Considerations',
            tip: 'Lock aspect ratio for social media consistency. Use presets for platform-specific dimensions.'
        },
        {
            title: 'Quality Preservation',
            tip: 'Choose appropriate output format: JPEG for photos, PNG for graphics with transparency, WebP for modern browsers.'
        },
        {
            title: 'Position Precision',
            tip: 'Use X and Y position controls for precise crop placement. Center crop for balanced composition.'
        }
    ],
    'imageCropper.commonErrors': [
        {
            error: 'Invalid Image Format',
            cause: 'Attempting to crop non-image files or unsupported image formats',
            solution: 'Ensure file is a valid image in supported formats (JPEG, PNG, WebP, GIF, BMP, SVG)',
            prevention: 'Check file extensions and verify images can be opened normally'
        },
        {
            error: 'File Size Exceeded',
            cause: 'Image files larger than 10MB causing processing issues',
            solution: 'Use a smaller image or resize before cropping',
            prevention: 'Check image file size and optimize large images before cropping'
        },
        {
            error: 'Invalid Crop Dimensions',
            cause: 'Crop area too small, too large, or outside image boundaries',
            solution: 'Ensure crop area is within image bounds and has minimum dimensions of 10×10px',
            prevention: 'Check crop area requirements for your target platform before cropping'
        },
        {
            error: 'Canvas Processing Error',
            cause: 'Browser memory limitations or corrupted image files',
            solution: 'Refresh the page, try smaller crop areas, or use a different browser',
            prevention: 'Use modern browsers and ensure adequate system resources'
        },
        {
            error: 'Format Conversion Error',
            cause: 'Issues converting between image formats during cropping',
            solution: 'Try cropping in original format or use a different output format',
            prevention: 'Test format compatibility with your target use case'
        },
        {
            error: 'Download Issues',
            cause: 'Browser blocking downloads or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space',
            prevention: 'Clear browser cache and verify download permissions'
        }
    ],
    'imageCropper.alternatives': [
        {
            name: 'Desktop Image Software',
            useCase: 'Professional image editing and cropping with advanced features',
            pros: 'Advanced features, Offline processing, Batch operations',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool offers free, instant cropping without installation or cost'
        },
        {
            name: 'Online Cropping Services',
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
    'imageCropper.relatedTools': [
        {
            name: 'Image Resizer',
            description: 'Resize images to custom dimensions',
            url: '/image-resizer'
        },
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
            name: 'Background Remover',
            description: 'Remove backgrounds from images',
            url: '/background-remover'
        },
        {
            name: 'Image Optimizer',
            description: 'Advanced image optimization for web performance',
            url: '/image-optimizer'
        },
        {
            name: 'Batch Image Cropper',
            description: 'Crop multiple images at once',
            url: '/batch-image-cropper'
        }
    ],
    'imageCropper.faqs': [
        {
            question: 'What image formats are supported?',
            answer: 'We support all major image formats including JPEG, PNG, WebP, GIF, BMP, and SVG files for cropping.'
        },
        {
            question: 'How do I crop an image?',
            answer: 'Click and drag on the image to create a selection area. Adjust the corners to resize the crop area. You can also use preset aspect ratios for common dimensions.'
        },
        {
            question: 'What are the preset aspect ratios for?',
            answer: 'Preset aspect ratios include Square (1:1), Widescreen (16:9), Standard (4:3), Photo (3:2), and Portrait (9:16) for different use cases.'
        },
        {
            question: 'Can I crop to custom dimensions?',
            answer: 'Yes! You can set custom width and height, or use the X and Y position controls for precise crop placement.'
        },
        {
            question: 'What does the crop overlay show?',
            answer: 'The blue overlay shows exactly which part of the image will be cropped. You can resize the selection by dragging the corner handles.'
        },
        {
            question: 'Can I lock the aspect ratio?',
            answer: 'Yes! When locked, changing one dimension automatically adjusts the other to maintain the original image proportions.'
        },
        {
            question: 'What output formats are available?',
            answer: 'You can choose between JPEG (best for photos), PNG (supports transparency), and WebP (modern compression) formats.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes! All cropping happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'Can I download the cropped image?',
            answer: 'Yes! Once cropped, you can download the image in your chosen format with a single click.'
        },
        {
            question: 'Is this image cropper completely free?',
            answer: 'Yes! Our image cropper is completely free with no registration, watermarks, or hidden costs. Crop unlimited images.'
        }
    ],
    'imageCropper.securityNote': 'All image cropping happens locally in your browser using JavaScript and Canvas API. No files are uploaded to external servers, ensuring your image privacy and complete data security.',
    'imageCropper.additionalContent': 'Image cropping is essential for social media optimization, content creation, and professional image preparation. Combine our cropper with other tools like resizing, compression, and format conversion for comprehensive image management.'
};
