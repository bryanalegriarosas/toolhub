export default {
    'imageToPdf.title': 'Image to PDF Converter - Free Online Tool',
    'imageToPdf.description': 'Convert images to PDF with custom page sizes, orientations, quality settings, and secure local processing for professional documents.',
    'imageToPdf.select_image_file': 'Select Image File',
    'imageToPdf.supported_formats': 'Supported formats: JPG, PNG, GIF, BMP, WebP. Max size: 10MB',
    'imageToPdf.preview': 'Preview:',
    'imageToPdf.pdf_options': 'PDF Options:',
    'imageToPdf.page_size': 'Page Size:',
    'imageToPdf.orientation': 'Orientation:',
    'imageToPdf.image_fit': 'Image Fit:',
    'imageToPdf.quality': 'Quality:',
    'imageToPdf.a4': 'A4',
    'imageToPdf.letter': 'Letter',
    'imageToPdf.legal': 'Legal',
    'imageToPdf.portrait': 'Portrait',
    'imageToPdf.landscape': 'Landscape',
    'imageToPdf.contain': 'Contain (fit to page)',
    'imageToPdf.cover': 'Cover (fill page)',
    'imageToPdf.actual': 'Actual size',
    'imageToPdf.high': 'High',
    'imageToPdf.medium': 'Medium',
    'imageToPdf.low': 'Low',
    'imageToPdf.generating_pdf': 'Generating PDF...',
    'imageToPdf.download_pdf': 'Download PDF',
    'imageToPdf.clear': 'Clear',
    
    // SEO Content specific to Image to PDF converter
    'imageToPdf.mainDescription': 'Free online image to PDF converter with advanced options for page sizes, orientations, quality settings, and secure local processing. Convert single images to professional PDF documents instantly.',
    'imageToPdf.extendedDescription': 'Our comprehensive image to PDF converter tool helps you transform individual images into professional PDF documents with advanced features like multiple page sizes, orientation options, image fitting controls, and quality settings. All processing happens locally in your browser for complete privacy and security.',
    'imageToPdf.features': [
        {
            title: 'Multiple Image Formats',
            description: 'Support for JPG, JPEG, PNG, GIF, BMP, and WebP image formats for comprehensive conversion'
        },
        {
            title: 'Custom Page Sizes',
            description: 'Choose from standard page sizes (A4, Letter, Legal) with portrait and landscape orientation options'
        },
        {
            title: 'Image Fitting Options',
            description: 'Control how images are placed on pages with contain, cover, and actual size options'
        },
        {
            title: 'Quality Control',
            description: 'Set output quality with High, Medium, or Low options for different file size and clarity needs'
        },
        {
            title: 'Secure Local Processing',
            description: 'All conversion happens in your browser - images never leave your device'
        },
        {
            title: 'Instant Preview',
            description: 'Preview your image before conversion with file information and dimensions display'
        },
        {
            title: 'Smart File Naming',
            description: 'Automatic filename generation with "_converted" suffix to avoid overwriting original files'
        },
        {
            title: 'Error Handling',
            description: 'Comprehensive validation and error reporting for file types, sizes, and processing issues'
        }
    ],
    'imageToPdf.steps': [
        'Select an image file using the file selector or drag and drop',
        'Preview your image to confirm it\'s the correct file',
        'Configure PDF options: page size, orientation, image fit, and quality',
        'Click "Download PDF" to generate and download your converted file',
        'Your PDF will be saved with the original filename plus "_converted.pdf"'
    ],
    'imageToPdf.examples': [
        {
            title: 'Certificate Creation',
            description: 'Convert certificate image to PDF',
            code: 'Input: certificate.png (300dpi) | Page Size: A4 | Orientation: Landscape',
            result: 'Output: certificate.pdf (high-quality printable certificate)'
        },
        {
            title: 'Recipe Card PDF',
            description: 'Convert recipe image to shareable PDF',
            code: 'Input: recipe-card.jpg | Page Size: Letter | Quality: High',
            result: 'Output: recipe-card.pdf (perfect for printing and sharing)'
        },
        {
            title: 'Invoice Image to PDF',
            description: 'Convert invoice image to professional PDF',
            code: 'Input: invoice-scan.jpg | Page Size: A4 | Orientation: Portrait',
            result: 'Output: invoice.pdf (professional document format)'
        }
    ],
    'imageToPdf.useCases': [
        {
            title: 'Document Conversion',
            description: 'Converting scanned documents, receipts, and certificates to PDF format',
            example: 'Office worker converting scanned invoice to professional PDF document'
        },
        {
            title: 'Creative Projects',
            description: 'Artists and designers converting artwork and designs to PDF for sharing',
            example: 'Graphic designer converting logo design to PDF for client delivery'
        },
        {
            title: 'Educational Materials',
            description: 'Teachers and students converting educational images and worksheets to PDF',
            example: 'Teacher converting worksheet image to PDF for classroom distribution'
        },
        {
            title: 'Recipe Sharing',
            description: 'Home cooks converting recipe cards and cooking instructions to PDF',
            example: 'Food blogger converting recipe photo to PDF for cookbook creation'
        },
        {
            title: 'Certificate Processing',
            description: 'Organizations converting certificates and awards to PDF for distribution',
            example: 'Training center converting completion certificate to PDF for email'
        },
        {
            title: 'Personal Archives',
            description: 'Individuals organizing personal photos and documents into PDF format',
            example: 'Homeowner converting warranty document photo to PDF for records'
        }
    ],
    'imageToPdf.technicalDetails': 'Our image to PDF converter uses advanced JavaScript libraries to process images directly in your browser. The tool reads each image file, calculates optimal dimensions based on your page size and fitting preferences, and creates a professional PDF document using jsPDF. The conversion process maintains image quality while optimizing for PDF standards. All processing happens locally using WebAssembly and JavaScript, ensuring your images never leave your device.',
    'imageToPdf.bestPractices': [
        {
            title: 'Image Quality Selection',
            tip: 'Use High quality for documents requiring maximum detail and clarity. Medium for general use and balance. Low for smaller file sizes when quality is less critical.'
        },
        {
            title: 'Page Size Selection',
            tip: 'Choose A4 for international documents, Letter for US documents, and Legal for official documents. Consider the final use when selecting orientation.'
        },
        {
            title: 'Image Fitting Strategy',
            tip: 'Use "Contain" to see the entire image, "Cover" for full-page coverage, and "Actual size" to maintain original dimensions.'
        },
        {
            title: 'File Preparation',
            tip: 'Ensure your image is high resolution and properly oriented before conversion. Check file size is under 10MB for optimal processing.'
        }
    ],
    'imageToPdf.commonErrors': [
        {
            error: 'Invalid File Type',
            cause: 'Attempting to convert non-image files or unsupported image formats',
            solution: 'Ensure the file is a valid image in supported formats (JPG, PNG, GIF, BMP, WebP)',
            prevention: 'Check file extensions and verify images can be opened normally'
        },
        {
            error: 'File Size Exceeded',
            cause: 'Image files larger than 10MB causing processing issues',
            solution: 'Compress or resize the image before uploading',
            prevention: 'Check image file size and optimize large images before conversion'
        },
        {
            error: 'Image Loading Failure',
            cause: 'Corrupted image files or browser compatibility issues',
            solution: 'Try a different image or use a different browser',
            prevention: 'Test images can be opened normally before conversion'
        },
        {
            error: 'PDF Generation Failure',
            cause: 'Browser memory limitations or JavaScript errors during processing',
            solution: 'Refresh the page and try again with a smaller image',
            prevention: 'Use modern browsers and ensure adequate system resources'
        },
        {
            error: 'Download Issues',
            cause: 'Browser blocking downloads or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space',
            prevention: 'Clear browser cache and verify download permissions'
        },
        {
            error: 'Processing Timeout',
            cause: 'Very large images or slow system performance',
            solution: 'Wait longer or try with a smaller image file',
            prevention: 'Use reasonably sized images for faster processing'
        }
    ],
    'imageToPdf.alternatives': [
        {
            name: 'Desktop Image Software',
            useCase: 'Professional image editing and PDF creation with advanced features',
            pros: 'Advanced features, Offline processing, Batch operations',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool offers free, instant conversion without installation or cost'
        },
        {
            name: 'Online Conversion Services',
            useCase: 'Cloud-based image processing with collaboration features',
            pros: 'Cloud storage, Team collaboration, Advanced tools',
            cons: 'Privacy concerns, Subscription costs, Internet dependency',
            comparison: 'Our tool processes locally for complete privacy and no recurring costs'
        },
        {
            name: 'Print to PDF',
            useCase: 'Basic image to PDF conversion using system print functionality',
            pros: 'Built-in feature, No extra software, Simple process',
            cons: 'Poor quality, Manual process, Limited control',
            comparison: 'Our tool offers superior quality and advanced fitting options'
        },
        {
            name: 'Mobile Apps',
            useCase: 'On-the-go image to PDF conversion with mobile convenience',
            pros: 'Mobile access, Touch interface, Camera integration',
            cons: 'Limited features, Small screen, Subscription costs',
            comparison: 'Our tool provides full-featured conversion on any device with browser'
        }
    ],
    'imageToPdf.relatedTools': [
        {
            name: 'JPG to PDF Converter',
            description: 'Convert multiple JPG images to PDF with advanced options',
            url: '/jpg-to-pdf'
        },
        {
            name: 'PDF to Image Converter',
            description: 'Convert PDF files back to JPG images',
            url: '/pdf-to-jpg'
        },
        {
            name: 'Image Compressor',
            description: 'Reduce image file size while maintaining quality',
            url: '/image-compressor'
        },
        {
            name: 'Image Resizer',
            description: 'Resize images to specific dimensions',
            url: '/image-resizer'
        },
        {
            name: 'PDF Merger',
            description: 'Combine multiple PDF files into one document',
            url: '/merge-pdf'
        },
        {
            name: 'PDF Compressor',
            description: 'Reduce PDF file size while maintaining quality',
            url: '/pdf-compressor'
        },
        {
            name: 'Image Format Converter',
            description: 'Convert between different image formats',
            url: '/image-converter'
        }
    ],
    'imageToPdf.faqs': [
        {
            question: 'What image formats are supported?',
            answer: 'We support all major image formats including JPG, JPEG, PNG, GIF, BMP, and WebP. Files can be up to 10MB in size.'
        },
        {
            question: 'What page sizes are available?',
            answer: 'You can choose between A4 (210×297mm), Letter (216×279mm), and Legal (216×356mm) page sizes. Each can be oriented as portrait or landscape.'
        },
        {
            question: 'What\'s the difference between image fit options?',
            answer: '"Contain" fits the entire image within page margins, "Cover" fills the entire page (may crop edges), and "Actual size" maintains original image dimensions.'
        },
        {
            question: 'How does quality affect the PDF?',
            answer: 'High quality preserves maximum image detail but creates larger files. Medium and low settings reduce file size but may decrease image clarity. Choose based on your needs.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes! All processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
        },
        {
            question: 'Can I convert multiple images to one PDF?',
            answer: 'Currently, this tool converts one image per PDF. For multiple images, you would need to use our JPG to PDF tool or merge individual PDFs afterward.'
        },
        {
            question: 'What happens to the filename?',
            answer: 'The original filename is preserved with "_converted" added before the .pdf extension to avoid overwriting your original image file.'
        },
        {
            question: 'Is there a file size limit?',
            answer: 'Yes, images must be under 10MB for optimal performance. Larger files may cause processing delays or failures.'
        },
        {
            question: 'Can I use this on mobile devices?',
            answer: 'Yes! The tool works on any device with a modern web browser. The interface is responsive and works with touch controls.'
        },
        {
            question: 'Is this image to PDF converter completely free?',
            answer: 'Yes! Our image to PDF converter is completely free with no registration, watermarks, or hidden costs. Convert unlimited images.'
        }
    ],
    'imageToPdf.securityNote': 'All image to PDF conversion happens locally in your browser using JavaScript. No files are uploaded to external servers, ensuring your image privacy and complete data security.',
    'imageToPdf.additionalContent': 'Image to PDF conversion is essential for document creation and sharing. Combine our converter with other tools like image compression, PDF merging, and format conversion for comprehensive document management.'
};
