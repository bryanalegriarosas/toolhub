export default {
    'diffChecker.title': 'Diff Checker',
    'diffChecker.text_1_original': 'Text 1 (Original)',
    'diffChecker.text_2_modified': 'Text 2 (Modified)',
    'diffChecker.load_file': 'Load File',
    'diffChecker.clear': 'Clear',
    'diffChecker.compare_texts': 'Compare Texts',
    'diffChecker.swap_texts': 'Swap Texts',
    'diffChecker.copy_differences': 'Copy Differences',
    'diffChecker.download_diff': 'Download Diff',
    'diffChecker.clear_all': 'Clear All',
    'diffChecker.lines_added': 'Lines Added',
    'diffChecker.lines_removed': 'Lines Removed',
    'diffChecker.lines_modified': 'Lines Modified',
    'diffChecker.lines_unchanged': 'Lines Unchanged',
    'diffChecker.differences': 'Differences',
    'diffChecker.side_by_side_view': 'Side-by-Side View',
    'diffChecker.hide': 'Hide',
    'diffChecker.show': 'Show',
    'diffChecker.paste_or_type_your_first_text_here': 'Paste or type your first text here...',
    'diffChecker.paste_or_type_your_second_text_here': 'Paste or type your second text here...',
    
    // SEO Content specific to Diff Checker
    'diffChecker.mainDescription': 'Free online diff checker tool with text comparison, highlighting, and statistics. Perfect for code review, document tracking, and change analysis.',
    'diffChecker.extendedDescription': 'Our comprehensive diff checker tool helps you compare two texts and find differences instantly. Includes line-by-line comparison, side-by-side view, change statistics, highlighted differences, and export options. All operations happen in your browser for complete privacy.',
    'diffChecker.features': [
        {
            title: 'Side-by-Side Comparison',
            description: 'View texts side by side with synchronized scrolling for easy comparison'
        },
        {
            title: 'Line-by-Line Analysis',
            description: 'Detailed line-by-line comparison with clear difference highlighting'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for quick comparison and analysis'
        },
        {
            title: 'Change Statistics',
            description: 'View detailed statistics including lines added, removed, modified, and unchanged'
        },
        {
            title: 'Color-Coded Differences',
            description: 'Visual highlighting with green for additions, red for removals, yellow for modifications'
        },
        {
            title: 'Copy and Export',
            description: 'Copy differences to clipboard or download as diff files'
        },
        {
            title: 'Text Swapping',
            description: 'Quickly swap text positions to change comparison perspective'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop text comparison'
        },
        {
            title: 'Privacy First',
            description: 'All text comparison happens locally in your browser with no server storage'
        }
    ],
    'diffChecker.steps': [
        'Paste or load your first text in the left panel',
        'Paste or load your second text in the right panel',
        'Click "Compare Texts" to analyze differences',
        'View highlighted changes and statistics in the results section',
        'Use side-by-side view for detailed comparison',
        'Copy or download the diff results for documentation'
    ],
    'diffChecker.examples': [
        {
            title: 'Code Review Comparison',
            description: 'Compare different versions of code for review',
            code: 'Text 1: function calculateTotal(price, tax) { return price * (1 + tax); } | Text 2: function calculateTotal(price, tax) { return price * (1 + tax) * 1.1; }',
            result: 'Highlights: Added "* 1.1" for service fee calculation - Green line shows addition, Red shows removal'
        },
        {
            title: 'Document Revision Tracking',
            description: 'Track changes in document revisions',
            code: 'Text 1: The quick brown fox jumps over the lazy dog. | Text 2: The quick brown fox jumps over the sleeping dog.',
            result: 'Changes: "lazy" → "sleeping" - improved word choice - Yellow line shows modification',
            steps: [
                'Paste original document in left panel',
                'Add revised version in right panel',
                'Review highlighted differences',
                'Accept or reject changes as needed'
            ]
        },
        {
            title: 'Configuration File Changes',
            description: 'Compare configuration file modifications',
            code: 'Text 1: timeout: 30 | retries: 3 | debug: false | Text 2: timeout: 60 | retries: 5 | debug: true',
            result: 'Modified: timeout 30→60, retries 3→5, debug false→true - Multiple changes highlighted with different colors'
        }
    ],
    'diffChecker.useCases': [
        {
            title: 'Code Review',
            description: 'Developers comparing code changes for review and approval',
            example: 'Senior developer reviewing junior developer\'s code changes before merge'
        },
        {
            title: 'Document Collaboration',
            description: 'Teams collaborating on documents with change tracking',
            example: 'Content team comparing document revisions for blog post updates'
        },
        {
            title: 'Version Control',
            description: 'Tracking changes between different versions of files or configurations',
            example: 'DevOps engineer comparing configuration changes between environments'
        },
        {
            title: 'Legal Document Review',
            description: 'Lawyers reviewing contract modifications and amendments',
            example: 'Legal team comparing different versions of legal documents'
        },
        {
            title: 'Academic Paper Editing',
            description: 'Students and professors tracking changes in academic papers',
            example: 'Research team comparing thesis revisions and corrections'
        },
        {
            title: 'Translation Comparison',
            description: 'Translators comparing original and translated texts',
            example: 'Translation team comparing source text with translated versions'
        }
    ],
    'diffChecker.technicalDetails': 'Our diff checker uses JavaScript to compare texts line by line and identify differences. The tool processes text comparison algorithms, change detection logic, and visual highlighting. All processing happens locally using efficient string comparison and diff generation algorithms for optimal performance.',
    'diffChecker.bestPractices': [
        {
            title: 'Clear Text Organization',
            tip: 'Organize your texts with clear structure and consistent formatting for accurate comparison.'
        },
        {
            title: 'Incremental Changes',
            tip: 'Make small, focused changes to easily understand and review differences.'
        },
        {
            title: 'Context Awareness',
            tip: 'Consider the context and purpose of changes when reviewing differences.'
        },
        {
            title: 'Regular Comparison',
            tip: 'Compare texts regularly to catch changes early and maintain version control.'
        }
    ],
    'diffChecker.commonErrors': [
        {
            error: 'Incorrect Text Alignment',
            cause: 'Texts not properly aligned causing incorrect line comparison',
            solution: 'Ensure texts are properly formatted and aligned for accurate comparison.',
            prevention: 'Use consistent line endings and formatting in both texts.'
        },
        {
            error: 'Large File Performance',
            cause: 'Very large text files causing performance issues during comparison',
            solution: 'Break down large texts into smaller sections for comparison.',
            prevention: 'Test with smaller text sizes and optimize for large files.'
        },
        {
            error: 'Encoding Issues',
            cause: 'Different text encodings causing comparison problems',
            solution: 'Ensure both texts use the same encoding (UTF-8 recommended).',
            prevention: 'Standardize text encoding before comparison.'
        },
        {
            error: 'Missing Line Breaks',
            cause: 'Inconsistent line endings affecting comparison accuracy',
            solution: 'Use consistent line endings (LF or CRLF) in both texts.',
            prevention: 'Normalize line endings before text comparison.'
        }
    ],
    'diffChecker.alternatives': [
        {
            name: 'Command Line Diff Tools',
            useCase: 'Git diff, diff command, and other CLI comparison tools',
            pros: 'Powerful features, Scriptable, Version control integration',
            cons: 'Technical knowledge required, No GUI, Complex setup',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'IDE Diff Features',
            useCase: 'VS Code, Sublime Text, and other editor diff capabilities',
            pros: 'Editor integration, Advanced features, Workflow integration',
            cons: 'IDE specific, Learning curve, Limited standalone use',
            comparison: 'Our tool offers focused text comparison without IDE dependencies.'
        },
        {
            name: 'Online Diff Services',
            useCase: 'Web-based text comparison services',
            pros: 'Cross-platform access, No installation, Additional features',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Version Control Systems',
            useCase: 'Git, SVN, and other version control diff capabilities',
            pros: 'Complete version control, History tracking, Collaboration features',
            cons: 'Complex setup, Overkill for simple comparisons, Learning curve',
            comparison: 'Our tool provides simple, focused text comparison without version control complexity.'
        }
    ],
    'diffChecker.relatedTools': [
        {
            name: 'Text Compare',
            description: 'Compare text files with detailed analysis',
            url: '/text-compare'
        },
        {
            name: 'Code Merger',
            description: 'Merge code changes intelligently',
            url: '/code-merger'
        },
        {
            name: 'File Difference Checker',
            description: 'Find differences between files',
            url: '/file-difference-checker'
        },
        {
            name: 'Text Analyzer',
            description: 'Analyze text content and structure',
            url: '/text-analyzer'
        },
        {
            name: 'Version Control Helper',
            description: 'Assist with version control operations',
            url: '/version-control-helper'
        },
        {
            name: 'Document Merger',
            description: 'Combine multiple documents',
            url: '/document-merger'
        },
        {
            name: 'Change Tracker',
            description: 'Track and manage document changes',
            url: '/change-tracker'
        },
        {
            name: 'Text Formatter',
            description: 'Format and beautify text content',
            url: '/text-formatter'
        }
    ],
    'diffChecker.faqs': [
        {
            question: 'What text formats are supported?',
            answer: 'Our tool supports plain text files (.txt) and any text content you paste directly. UTF-8 encoding is recommended for best compatibility.'
        },
        {
            question: 'How are differences detected?',
            answer: 'The tool compares texts line by line and identifies additions (green), removals (red), and modifications (yellow) with precise line numbering.'
        },
        {
            question: 'Can I compare large texts?',
            answer: 'Yes, our tool can handle large texts, but very large files may take longer to process. For optimal performance, consider breaking down large texts.'
        },
        {
            question: 'What is side-by-side view?',
            answer: 'Side-by-side view displays both texts simultaneously with synchronized scrolling, making it easy to compare corresponding lines and changes.'
        },
        {
            question: 'How accurate is the comparison?',
            answer: 'Our diff checker is highly accurate for text comparison. It uses precise line-by-line analysis to ensure all differences are correctly identified.'
        },
        {
            question: 'Can I export the results?',
            answer: 'Yes, you can copy differences to clipboard or download them as a formatted diff file for documentation and sharing.'
        },
        {
            question: 'Is my text data private?',
            answer: 'All text comparison happens directly in your browser. Your text content and comparison results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What do the colors mean?',
            answer: 'Green indicates added lines, red shows removed lines, yellow highlights modified lines, and gray represents unchanged content.'
        }
    ],
    'diffChecker.securityNote': 'All text comparison happens locally in your browser using JavaScript. No text content or comparison results are stored on our servers, ensuring complete privacy and security.',
    'diffChecker.additionalContent': 'Text comparison is essential for code review, document collaboration, version control, and change management. Combine our diff checker with other tools like code mergers, text analyzers, and version control helpers for comprehensive development workflows.'
};
