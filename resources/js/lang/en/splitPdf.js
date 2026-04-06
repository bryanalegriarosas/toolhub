export default {
    'splitPdf.title': 'PDF Splitter - Free Online PDF Page Splitter Tool',
    'splitPdf.description': 'Split PDF into individual pages with selective page extraction, custom naming, and batch processing for better document management.',
    'splitPdf.choose_pdf': 'Choose PDF',
    'splitPdf.clear_pdf': 'Clear PDF',
    'splitPdf.pdf_information': 'PDF Information',
    'splitPdf.total_pages': 'Total Pages:',
    'splitPdf.file_size': 'File Size:',
    'splitPdf.selected': 'Selected:',
    'splitPdf.format': 'Format:',
    'splitPdf.page_selection': 'Page Selection',
    'splitPdf.select_all_pages': 'Select All Pages',
    'splitPdf.of_pages_selected': 'of {{num}} pages selected',
    'splitPdf.split_options': 'Split Options',
    'splitPdf.filename_prefix': 'Filename Prefix',
    'splitPdf.output_format': 'Output Format',
    'splitPdf.individual_pdfs': 'Individual PDFs',
    'splitPdf.zip_archive': 'ZIP Archive',
    'splitPdf.splitting': 'Splitting...',
    'splitPdf.split_pages': 'Split Page(s)',
    'splitPdf.drop_pdf': 'Drop PDF here or click to upload',
    'splitPdf.split_pages_result': 'Split Pages',
    'splitPdf.download_all_as_zip': 'Download All as ZIP',
    'splitPdf.download': 'Download',
    'splitPdf.page': 'Page',
    
    // SEO Content specific to PDF splitter
    'splitPdf.mainDescription': 'Free online PDF splitter with page selection, custom naming, and secure local processing. Extract specific pages or split entire documents instantly.',
    'splitPdf.extendedDescription': 'Our comprehensive PDF splitter tool helps you extract individual pages from PDF documents with advanced features like selective page selection, custom filename prefixes, and batch download options. All processing happens locally in your browser for complete privacy and security.',
    'splitPdf.features': [
        {
            title: 'Selective Page Extraction',
            description: 'Choose specific pages or extract all pages with visual page grid and selection controls'
        },
        {
            title: 'Custom File Naming',
            description: 'Set custom filename prefixes for organized file management and easy identification'
        },
        {
            title: 'Batch Processing',
            description: 'Process multiple pages simultaneously with efficient splitting algorithms and progress tracking'
        },
        {
            title: 'Multiple Output Formats',
            description: 'Download individual PDF files or combine all pages into a single ZIP archive'
        },
        {
            title: 'Secure Local Processing',
            description: 'All PDF splitting happens in your browser - files never leave your device'
        },
        {
            title: 'Page Preview',
            description: 'Visual page grid with numbered thumbnails for easy page identification and selection'
        },
        {
            title: 'Instant Download',
            description: 'Get your split pages immediately after processing with no waiting time'
        },
        {
            title: 'Format Preservation',
            description: 'Maintains original quality, formatting, text, and images from each extracted page'
        }
    ],
    'splitPdf.steps': [
        'Upload PDF file using drag-and-drop or click to select file',
        'View PDF information including total pages and file size',
        'Select specific pages using the visual page grid or select all pages',
        'Configure split options including filename prefix and output format',
        'Click split to extract pages and download individually or as ZIP archive'
    ],
    'splitPdf.examples': [
        {
            title: 'Extract Specific Pages',
            description: 'Extract chapters from a textbook PDF',
            code: 'Input: textbook-2024.pdf (50 pages)\nSelect: Pages 1-15, 31-45\nOptions: prefix "chapter", individual PDFs',
            result: 'Output: chapter-1.pdf (15 pages), chapter-2.pdf (15 pages)'
        },
        {
            title: 'Split Invoice Bundle',
            description: 'Separate individual invoices from batch PDF',
            code: 'Input: monthly-invoices.pdf (30 pages)\nSelect: All pages\nOptions: prefix "invoice", ZIP archive',
            result: 'Output: invoices-split-pages.zip with 30 individual invoice files'
        },
        {
            title: 'Create Page Samples',
            description: 'Extract sample pages from large document',
            code: 'Input: annual-report.pdf (120 pages)\nSelect: Pages 1, 5, 10, 50\nOptions: prefix "sample", individual PDFs',
            result: 'Output: sample-1.pdf, sample-5.pdf, sample-10.pdf, sample-50.pdf'
        }
    ],
    'splitPdf.useCases': [
        {
            title: 'Document Management',
            description: 'Professionals organizing large documents into manageable sections',
            example: 'Manager splitting annual report into quarterly sections'
        },
        {
            title: 'Academic Research',
            description: 'Students and researchers extracting specific chapters or pages from textbooks',
            example: 'Student extracting relevant chapters from textbook for study'
        },
        {
            title: 'Legal Documentation',
            description: 'Lawyers separating individual case files or evidence pages from large documents',
            example: 'Attorney extracting specific exhibits from case file'
        },
        {
            title: 'Invoice Processing',
            description: 'Accountants separating individual invoices from batch PDF statements',
            example: 'Bookkeeper splitting monthly invoice bundle into individual files'
        },
        {
            title: 'Content Creation',
            description: 'Content creators extracting specific pages for presentations or reports',
            example: 'Marketer extracting case studies from company brochure'
        },
        {
            title: 'Personal Organization',
            description: 'Individuals organizing personal documents into relevant sections',
            example: 'Homeowner splitting warranty documents by appliance category'
        }
    ],
    'splitPdf.technicalDetails': 'Our PDF splitter uses advanced JavaScript libraries to process PDF files directly in your browser. The tool reads each PDF file, extracts individual pages, and creates separate PDF documents while preserving all formatting, text, images, and layout. The splitting process maintains original quality and supports various PDF versions. For ZIP downloads, the tool uses JSZip to bundle multiple files. All processing happens locally using WebAssembly and JavaScript.',
    'splitPdf.bestPractices': [
        {
            title: 'Page Selection Strategy',
            tip: 'Plan your page selection before splitting. Use the visual grid to identify and select only the pages you need to avoid unnecessary files.'
        },
        {
            title: 'File Naming Convention',
            tip: 'Use descriptive prefixes that indicate the content type or purpose. Include dates or version numbers for better organization.'
        },
        {
            title: 'Batch vs Individual Downloads',
            tip: 'Use ZIP format for large numbers of pages to save time. Download individually when you need immediate access to specific pages.'
        },
        {
            title: 'Quality Preservation',
            tip: 'The splitter maintains original quality. Avoid re-compressing extracted pages to maintain image and text clarity.'
        }
    ],
    'splitPdf.commonErrors': [
        {
            error: 'Invalid PDF Format',
            cause: 'Attempting to split non-PDF files or corrupted PDF documents',
            solution: 'Ensure the file is a valid PDF document and not password protected',
            prevention: 'Check file extension and test individual PDFs before splitting'
        },
        {
            error: 'File Size Exceeded',
            cause: 'PDF files larger than 50MB causing processing issues',
            solution: 'Compress large PDFs or split into smaller sections before processing',
            prevention: 'Check file size and optimize large documents before upload'
        },
        {
            error: 'No Pages Selected',
            cause: 'Attempting to split without selecting any pages',
            solution: 'Select at least one page using the visual page grid',
            prevention: 'Use "Select All Pages" option or manually select required pages'
        },
        {
            error: 'Split Process Failure',
            cause: 'Browser memory limitations or corrupted PDF pages',
            solution: 'Refresh the page, reduce selected pages, or check file integrity',
            prevention: 'Use modern browsers and limit to reasonable page quantities'
        },
        {
            error: 'Download Issues',
            cause: 'Browser blocking downloads or insufficient disk space',
            solution: 'Check browser download settings and ensure adequate storage space',
            prevention: 'Clear browser cache and verify download permissions'
        },
        {
            error: 'Memory Exhaustion',
            cause: 'Too many pages causing browser memory to run out',
            solution: 'Split pages in smaller batches or reduce page count',
            prevention: 'Monitor system resources and split in stages'
        }
    ],
    'splitPdf.alternatives': [
        {
            name: 'Desktop PDF Software',
            useCase: 'Professional document management with advanced features',
            pros: 'Advanced features, Offline processing, Batch operations',
            cons: 'Expensive licenses, Complex interface, Installation required',
            comparison: 'Our tool offers free, instant splitting without installation or cost'
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
            name: 'Print to PDF',
            useCase: 'Basic page extraction using print functionality',
            pros: 'Built-in feature, No extra software, Simple process',
            cons: 'Poor quality, Manual process, Limited control',
            comparison: 'Our tool offers superior quality and advanced selection features'
        }
    ],
    'splitPdf.relatedTools': [
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
    'splitPdf.faqs': [
        {
            question: 'What PDF formats are supported?',
            answer: 'We support standard PDF files. The tool will extract each selected page and convert it to a separate PDF document while preserving original quality.'
        },
        {
            question: 'Can I select specific pages?',
            answer: 'Yes! You can select individual pages using the visual page grid, or select all pages at once. Each selected page will become a separate PDF file.'
        },
        {
            question: 'What output formats are available?',
            answer: 'You can download each page as an individual PDF file or combine all selected pages into a single ZIP archive for convenient batch download.'
        },
        {
            question: 'How are filenames generated?',
            answer: 'Each page is named with your chosen prefix followed by the page number (e.g., page-1.pdf, page-2.pdf). You can customize the prefix to suit your needs.'
        },
        {
            question: 'Is there a file size limit?',
            answer: 'PDF files should be under 50MB for optimal performance. The total size of split files will be similar to the original PDF.'
        },
        {
            question: 'Can I split password-protected PDFs?',
            answer: 'The tool works with unprotected PDFs. Password-protected files need to be unlocked before splitting using appropriate PDF software.'
        },
        {
            question: 'Will the split pages preserve quality?',
            answer: 'Absolutely! The splitter maintains original quality, formatting, text, images, and layout from each extracted page.'
        },
        {
            question: 'How many pages can I split at once?',
            answer: 'You can split multiple pages, though performance may vary based on file size and browser capabilities. Large documents may take longer to process.'
        },
        {
            question: 'Are my PDF files uploaded to your servers?',
            answer: 'No! All PDF splitting happens directly in your browser. Your files never leave your device, ensuring complete privacy.'
        },
        {
            question: 'Is this PDF splitter completely free?',
            answer: 'Yes! Our PDF splitter is completely free with no registration, watermarks, or hidden costs. Split unlimited PDFs.'
        }
    ],
    'splitPdf.securityNote': 'All PDF splitting happens locally in your browser using JavaScript. No files are uploaded to external servers, ensuring your document privacy and complete data security.',
    'splitPdf.additionalContent': 'PDF splitting is essential for document organization and workflow efficiency. Combine our splitter with other PDF tools like compression, merging, and conversion for comprehensive document management.'
};
