export default {
    'mergePdf.title': 'Merge PDF',
    'mergePdf.description': 'Merge multiple PDF files into one document with page reordering, preview, and batch processing for better document management.',
    'mergePdf.choose_files': 'Choose PDF Files',
    'mergePdf.clear_all': 'Clear All',
    'mergePdf.pdf_files': 'PDF Files',
    'mergePdf.move_up': '↑ Move Up',
    'mergePdf.move_down': '↓ Move Down',
    'mergePdf.merge_options': 'Merge Options',
    'mergePdf.output_filename': 'Output Filename',
    'mergePdf.page_size': 'Page Size',
    'mergePdf.keep_original_sizes': 'Keep Original Sizes',
    'mergePdf.a4': 'A4',
    'mergePdf.letter': 'Letter',
    'mergePdf.legal': 'Legal',
    'mergePdf.merging_pdfs': 'Merging PDFs...',
    'mergePdf.merge_pdfs': 'Merge PDF(s)',
    'mergePdf.drop_files': 'Drop PDF files here or click to upload',
    'mergePdf.files_selected': 'PDF file(s) selected',
    
    // SEO Content specific to PDF merger
    'mergePdf.mainDescription': 'Free online PDF merger with drag-and-drop interface, page reordering, and secure local processing. Combine multiple PDFs into one document instantly.',
    'mergePdf.extendedDescription': 'Our comprehensive PDF merger tool helps you combine multiple PDF files into a single document with advanced features like page reordering, custom output filenames, and various page size options. All processing happens locally in your browser for complete privacy and security.',
    'mergePdf.features': [
        {
            title: 'Drag & Drop Interface',
            description: 'Intuitive drag-and-drop functionality for easy file upload and management'
        },
        {
            title: 'Page Reordering',
            description: 'Reorganize PDF pages by selecting files and moving them up or down in the merge order'
        },
        {
            title: 'Multiple File Support',
            description: 'Combine unlimited PDF files into a single document with no file count restrictions'
        },
        {
            title: 'Custom Output Options',
            description: 'Set custom filenames and choose from multiple page size options for standardized output'
        },
        {
            title: 'Secure Local Processing',
            description: 'All PDF merging happens in your browser - files never leave your device'
        },
        {
            title: 'File Size Management',
            description: 'Support for large PDF files up to 50MB each with automatic size optimization'
        },
        {
            title: 'Instant Download',
            description: 'Get your merged PDF immediately after processing with no waiting time'
        },
        {
            title: 'Format Preservation',
            description: 'Maintains original formatting, text, images, and layout from all source PDFs'
        }
    ],
    'mergePdf.steps': [
        'Upload multiple PDF files using drag-and-drop or click to select files',
        'Reorder files by selecting them and using the up/down arrow buttons',
        'Configure merge options including output filename and page size settings',
        'Click the merge button to combine all PDFs into a single document',
        'Download your merged PDF instantly with all original formatting preserved'
    ],
    'mergePdf.examples': [
        {
            title: 'Combine Invoice Pages',
            description: 'Merge multiple invoice PDFs into a monthly report',
            code: 'Files: invoice-jan.pdf, invoice-feb.pdf, invoice-mar.pdf\nOptions: Keep original sizes, filename: "quarterly-invoices-2024"',
            result: 'Output: quarterly-invoices-2024.pdf (3 files merged with original formatting)'
        },
        {
            title: 'Create Document Portfolio',
            description: 'Combine resume, cover letter and references into one package',
            code: 'Files: resume.pdf, cover-letter.pdf, references.pdf\nOptions: A4 size, filename: "job-application-package"',
            result: 'Output: job-application-package.pdf (complete portfolio with standardized page size)'
        },
        {
            title: 'Merge Research Papers',
            description: 'Combine related research documents into academic paper',
            code: 'Files: chapter1.pdf, chapter2.pdf, appendix.pdf\nOptions: Letter size, filename: "complete-research-paper"',
            result: 'Output: complete-research-paper.pdf (academic document with consistent formatting)'
        }
    ],
    'mergePdf.useCases': [
        {
            title: 'Business Document Management',
            description: 'Professionals combining reports, invoices, and contracts into organized packages',
            example: 'Accountant merging monthly invoices into quarterly reports'
        },
        {
            title: 'Academic Research',
            description: 'Students and researchers combining multiple papers and references',
            example: 'Graduate student merging thesis chapters and appendices'
        },
        {
            title: 'Legal Documentation',
            description: 'Lawyers and paralegals organizing case files and evidence documents',
            example: 'Attorney combining discovery documents into case file'
        },
        {
            title: 'Creative Portfolios',
            description: 'Artists and designers compiling work samples and portfolios',
            example: 'Graphic designer merging portfolio pieces into presentation'
        },
        {
            title: 'Personal Document Organization',
            description: 'Individuals organizing personal documents and records',
            example: 'Homeowner combining warranty documents and manuals'
        },
        {
            title: 'Educational Materials',
            description: 'Teachers creating comprehensive lesson plans and resource packets',
            example: 'Educator merging worksheets and handouts into student packet'
        }
    ],
    'mergePdf.technicalDetails': 'Our PDF merger uses advanced JavaScript libraries to process PDF files directly in your browser. The tool reads each PDF file, extracts pages, and combines them into a new document while preserving all formatting, text, images, and layout. The merging process maintains original quality and supports various PDF versions. All processing happens locally using WebAssembly and JavaScript, ensuring your files never leave your device.',
    'mergePdf.bestPractices': [
        {
            title: 'File Organization',
            tip: 'Organize files in the desired merge order before uploading. Use descriptive filenames to easily identify documents in the merge list.'
        },
        {
            title: 'Page Size Consistency',
            tip: 'Choose consistent page sizes (A4, Letter, or Legal) for professional documents. Keep original sizes for mixed-format documents.'
        },
        {
            title: 'File Size Management',
            tip: 'Keep individual files under 50MB for optimal performance. Consider splitting very large documents into smaller sections before merging.'
        },
        {
            title: 'Quality Preservation',
            tip: 'The merger preserves original quality. Avoid re-compressing already compressed PDFs to maintain image and text clarity.'
        }
    ],
    'mergePdf.commonErrors': [
        {
            error: 'Invalid File Format',
            cause: 'Attempting to upload non-PDF files or corrupted PDF documents',
            solution: 'Ensure all files are valid PDF documents and not password protected',
            prevention: 'Check file extensions and test individual PDFs before merging'
        },
        {
            error: 'File Size Exceeded',
            cause: 'PDF files larger than 50MB per file causing processing issues',
            solution: 'Compress large PDFs or split into smaller documents before merging',
            prevention: 'Check file sizes and optimize large documents before upload'
        },
        {
            error: 'Merge Process Failure',
            cause: 'Browser memory limitations or corrupted PDF files preventing successful merging',
            solution: 'Refresh the page, reduce file count, or check individual file integrity',
            prevention: 'Use modern browsers and limit to reasonable file quantities'
        },
        {
            error: 'Download Issues',
            cause: 'Browser blocking downloads or insufficient disk space for merged file',
            solution: 'Check browser download settings and ensure adequate storage space',
            prevention: 'Clear browser cache and verify download permissions'
        },
        {
            error: 'Page Layout Problems',
            cause: 'Conflicting page sizes or orientations between source PDFs',
            solution: 'Standardize page sizes or choose "Keep Original Sizes" option',
            prevention: 'Review source documents for consistent formatting'
        },
        {
            error: 'Memory Exhaustion',
            cause: 'Too many large files causing browser memory to run out',
            solution: 'Merge files in smaller batches or reduce file sizes',
            prevention: 'Monitor system resources and merge in stages'
        }
    ],
    'mergePdf.alternatives': [
        {
            name: 'Desktop PDF Software',
            useCase: 'Professional document management with advanced features',
            pros: 'Advanced features, Offline processing, Batch operations',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool offers free, instant merging without installation or cost'
        },
        {
            name: 'Online PDF Services',
            useCase: 'Cloud-based PDF processing with collaboration features',
            pros: 'Cloud storage, Team collaboration, Advanced tools',
            cons: 'Privacy concerns, Subscription costs, Internet dependency',
            comparison: 'Our tool processes locally for complete privacy and no recurring costs'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Technical users needing automation and scripting',
            pros: 'Batch processing, Automation, Advanced control',
            cons: 'Technical knowledge required, Complex setup, No GUI',
            comparison: 'Our tool provides intuitive interface with no technical knowledge needed'
        },
        {
            name: 'Printer Scanner Software',
            useCase: 'Basic PDF combining from scanner software',
            pros: 'Integrated with hardware, Simple interface, Basic features',
            cons: 'Limited functionality, Hardware dependent, Poor quality',
            comparison: 'Our tool offers superior quality and advanced features'
        }
    ],
    'mergePdf.relatedTools': [
        {
            name: 'PDF Splitter',
            description: 'Split large PDF files into smaller documents',
            url: '/pdf-splitter'
        },
        {
            name: 'PDF Compressor',
            description: 'Reduce PDF file size while maintaining quality',
            url: '/pdf-compressor'
        },
        {
            name: 'PDF Converter',
            description: 'Convert PDF files to and from various formats',
            url: '/pdf-converter'
        },
        {
            name: 'PDF Rotator',
            description: 'Rotate PDF pages to correct orientation',
            url: '/pdf-rotator'
        },
        {
            name: 'PDF Password Protector',
            description: 'Add password protection to PDF files',
            url: '/pdf-protector'
        },
        {
            name: 'Image to PDF',
            description: 'Convert images and documents to PDF format',
            url: '/image-to-pdf'
        },
        {
            name: 'PDF Watermarker',
            description: 'Add watermarks and stamps to PDF documents',
            url: '/pdf-watermarker'
        }
    ],
    'mergePdf.faqs': [
        {
            question: 'How many PDF files can I merge at once?',
            answer: 'You can merge multiple PDF files without a specific limit, though performance may vary based on file sizes and browser capabilities.'
        },
        {
            question: 'Can I change the order of pages after uploading?',
            answer: 'Yes! Select any file in the list and use the up/down arrows to reorder. The merge will follow your specified order.'
        },
        {
            question: 'Will the merged PDF preserve original formatting?',
            answer: 'Absolutely! The merger maintains all original formatting, text, images, fonts, and layout from each source PDF.'
        },
        {
            question: 'What page size options are available?',
            answer: 'You can keep original page sizes or standardize to A4, Letter, or Legal for consistent formatting across all pages.'
        },
        {
            question: 'Is there a file size limit for individual PDFs?',
            answer: 'Each PDF file should be under 50MB for optimal performance. Larger files may cause browser memory issues.'
        },
        {
            question: 'Are my PDF files uploaded to your servers?',
            answer: 'No! All PDF processing happens directly in your browser. Your files never leave your device, ensuring complete privacy.'
        },
        {
            question: 'Can I merge password-protected PDFs?',
            answer: 'The tool works with unprotected PDFs. Password-protected files need to be unlocked before merging.'
        },
        {
            question: 'What happens to bookmarks and links in merged PDFs?',
            answer: 'Basic content is preserved, but complex bookmarks and hyperlinks may need to be recreated in the merged document.'
        },
        {
            question: 'Can I merge PDFs with different page orientations?',
            answer: 'Yes, the tool handles mixed orientations. Choose "Keep Original Sizes" to maintain different orientations.'
        },
        {
            question: 'Is this PDF merger completely free?',
            answer: 'Yes! Our PDF merger is completely free with no registration, watermarks, or hidden costs. Merge unlimited PDFs.'
        }
    ],
    'mergePdf.securityNote': 'All PDF merging happens locally in your browser using JavaScript. No files are uploaded to external servers, ensuring your document privacy and complete data security.',
    'mergePdf.additionalContent': 'PDF merging is essential for document organization and workflow efficiency. Combine our merger with other PDF tools like compression, splitting, and conversion for comprehensive document management.'
};
