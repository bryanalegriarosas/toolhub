export default {
    'wordCounter.title': 'Word Counter',
    'wordCounter.load_file': 'Load file:',
    'wordCounter.copy_text': 'Copy Text',
    'wordCounter.download_text': 'Download Text',
    'wordCounter.clear': 'Clear',
    'wordCounter.save': 'Save',
    'wordCounter.paste_your_text_here': 'Paste your text here...',
    'wordCounter.words': 'Words',
    'wordCounter.characters': 'Characters',
    'wordCounter.characters_no_spaces': 'Characters (no spaces)',
    'wordCounter.lines': 'Lines',
    'wordCounter.reading_time': 'Reading Time',
    'wordCounter.avg_word_length': 'Avg word length',
    'wordCounter.unique_words': 'Unique words',
    'wordCounter.history': 'History',
    'wordCounter.restore': 'Restore',
    'wordCounter.clear_history': 'Clear History',
    'wordCounter.min': 'min',
    
    // SEO Content specific to Word Counter
    'wordCounter.mainDescription': 'Free online word counter with real-time analysis, character counting, and text statistics. Perfect for writers, students, and content creators.',
    'wordCounter.extendedDescription': 'Our comprehensive word counter tool helps you analyze text content with advanced statistics. Includes word counting, character counting, line counting, reading time estimation, unique word analysis, and text history management. All operations happen in your browser for complete privacy.',
    'wordCounter.features': [
        {
            title: 'Real-time Word Counting',
            description: 'Instant word count as you type with automatic text analysis'
        },
        {
            title: 'Character Analysis',
            description: 'Complete character counting including and excluding spaces'
        },
        {
            title: 'Line Counting',
            description: 'Count lines in your text for formatting and structure analysis'
        },
        {
            title: 'Reading Time Estimation',
            description: 'Calculate estimated reading time based on average reading speed'
        },
        {
            title: 'Unique Word Analysis',
            description: 'Identify and count unique words in your text'
        },
        {
            title: 'Average Word Length',
            description: 'Calculate average word length for text complexity analysis'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files directly for quick analysis'
        },
        {
            title: 'Copy and Download',
            description: 'One-click copy of text and download results for documentation'
        },
        {
            title: 'History Management',
            description: 'Save and manage text analysis history for quick access'
        },
        {
            title: 'Mobile Friendly',
            description: 'Responsive design optimized for mobile and desktop text analysis'
        },
        {
            title: 'Privacy First',
            description: 'All text analysis happens locally in your browser with no server storage'
        }
    ],
    'wordCounter.steps': [
        'Paste or type your text in the textarea',
        'View real-time statistics including word count, character count, and line count',
        'Use file upload to load text from files',
        'Copy or download your text for documentation purposes',
        'Save important analyses to history for future reference',
        'Restore previous text analyses from history when needed'
    ],
    'wordCounter.examples': [
        {
            title: 'Blog Post Analysis',
            description: 'Analyze blog post content for word count and readability',
            code: 'Input: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            result: 'Words: 23 | Characters: 125 | Lines: 3 | Reading time: 0.12 min | Unique words: 19'
        },
        {
            title: 'Essay Word Count',
            description: 'Check essay length and character count for academic requirements',
            code: 'Input: The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet at least once.',
            result: 'Words: 23 | Characters: 136 | Characters (no spaces): 113 | Lines: 2 | Reading time: 0.12 min | Unique words: 23',
            steps: [
                'Paste essay content',
                'Check word count against requirements',
                'Analyze character count for limits',
                'Review reading time for accessibility'
            ]
        },
        {
            title: 'Social Media Post',
            description: 'Analyze social media content for character limits',
            code: 'Input: Excited to share my new project! Check it out and let me know what you think. #webdev #javascript #vuejs',
            result: 'Words: 17 | Characters: 103 | Characters (no spaces): 87 | Lines: 1 | Reading time: 0.09 min | Unique words: 16'
        }
    ],
    'wordCounter.useCases': [
        {
            title: 'Content Writing',
            description: 'Writers tracking word count for articles, blog posts, and publications',
            example: 'Content writer ensuring article meets specific word count requirements'
        },
        {
            title: 'Academic Writing',
            description: 'Students and researchers checking essay length and meeting assignment requirements',
            example: 'Student verifying essay word count for academic submission guidelines'
        },
        {
            title: 'Social Media Management',
            description: 'Social media managers checking character limits for posts and tweets',
            example: 'Social media manager checking post length against platform character limits'
        },
        {
            title: 'SEO Content Analysis',
            description: 'SEO specialists analyzing content length for optimization and ranking',
            example: 'SEO expert checking content length for optimal search engine optimization'
        },
        {
            title: 'Technical Documentation',
            description: 'Technical writers analyzing documentation length and readability',
            example: 'Technical writer checking documentation word count for project requirements'
        },
        {
            title: 'Translation Projects',
            description: 'Translators tracking word counts for project estimation and billing',
            example: 'Translator calculating word count for translation project pricing'
        },
        {
            title: 'Content Planning',
            description: 'Content planners analyzing text statistics for strategy and planning',
            example: 'Content strategist analyzing word count for content calendar planning'
        },
        {
            title: 'Quality Assurance',
            description: 'QA teams checking text length and consistency across documents',
            example: 'QA analyst verifying word count consistency in documentation'
        }
    ],
    'wordCounter.technicalDetails': 'Our word counter uses modern JavaScript algorithms to analyze text content in real-time. The tool processes word counting, character counting, line counting, unique word analysis, and reading time estimation. All processing happens locally using efficient string manipulation and set operations for optimal performance.',
    'wordCounter.bestPractices': [
        {
            title: 'Regular Text Saving',
            tip: 'Save important text analyses to history to track progress and maintain records.'
        },
        {
            title: 'Character Limit Awareness',
            tip: 'Be aware of character limits for different platforms and content types.'
        },
        {
            title: 'Word Count Guidelines',
            tip: 'Follow specific word count guidelines for academic and professional writing.'
        },
        {
            title: 'Text Organization',
            tip: 'Use line breaks and paragraphs strategically to improve readability.'
        }
    ],
    'wordCounter.commonErrors': [
        {
            error: 'Incorrect Word Counting',
            cause: 'Special characters or formatting affecting word counting accuracy',
            solution: 'Use clean text and review word count results for accuracy.',
            prevention: 'Remove special formatting and use standard text for accurate counting.'
        },
        {
            error: 'File Upload Issues',
            cause: 'Browser limitations or file format problems with text file loading',
            solution: 'Use standard text files and check browser compatibility.',
            prevention: 'Test file upload with different browsers and use UTF-8 encoding.'
        },
        {
            error: 'Character Count Discrepancies',
            cause: 'Different counting methods causing confusion between character counts',
            solution: 'Understand the difference between total characters and characters without spaces.',
            prevention: 'Clarify which character count metric is needed for your use case.'
        },
        {
            error: 'Reading Time Inaccuracy',
            cause: 'Fixed reading speed assumptions not matching actual reading complexity',
            solution: 'Adjust reading time based on content complexity and audience.',
            prevention: 'Consider content difficulty and reading level when estimating time.'
        },
        {
            error: 'History Management Problems',
            cause: 'Lost history data or confusion with saved analyses',
            solution: 'Regular backup and clear organization of history entries.',
            prevention: 'Maintain consistent history management and backup important analyses.'
        },
        {
            error: 'Mobile Performance Issues',
            cause: 'Large text files causing performance problems on mobile devices',
            solution: 'Optimize text processing for mobile performance.',
            prevention: 'Test with various text sizes and optimize for mobile devices.'
        }
    ],
    'wordCounter.alternatives': [
        {
            name: 'Word Processors',
            useCase: 'Microsoft Word, Google Docs, and other word processing software',
            pros: 'Advanced formatting, Collaboration features, Cloud integration',
            cons: 'Installation required, Subscription costs, Learning curve',
            comparison: 'Our tool provides instant online access without installation or costs.'
        },
        {
            name: 'Online Word Counters',
            useCase: 'Web-based word counting services and tools',
            pros: 'Cross-platform access, Additional features, No installation',
            cons: 'Privacy concerns, Internet dependency, Limited features',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'Text Editors',
            useCase: 'VS Code, Sublime Text, and other text editors with word count',
            pros: 'Advanced editing, Plugin ecosystem, Syntax highlighting',
            cons: 'Setup required, Complex interface, Limited counting features',
            comparison: 'Our tool offers focused word counting without complex editor setup.'
        },
        {
            name: 'Writing Apps',
            useCase: 'Scrivener, Ulysses, and specialized writing applications',
            pros: 'Writing-focused features, Project organization, Advanced statistics',
            cons: 'Premium pricing, Learning curve, Platform specific',
            comparison: 'Our tool provides essential word counting features without cost or complexity.'
        }
    ],
    'wordCounter.relatedTools': [
        {
            name: 'Character Counter',
            description: 'Count characters with detailed analysis',
            url: '/character-counter'
        },
        {
            name: 'Text Analyzer',
            description: 'Comprehensive text analysis and statistics',
            url: '/text-analyzer'
        },
        {
            name: 'Reading Time Calculator',
            description: 'Calculate reading time for different content types',
            url: '/reading-time-calculator'
        },
        {
            name: 'Text Formatter',
            description: 'Format and beautify text content',
            url: '/text-formatter'
        },
        {
            name: 'Plagiarism Checker',
            description: 'Check text for originality and plagiarism',
            url: '/plagiarism-checker'
        },
        {
            name: 'Grammar Checker',
            description: 'Check grammar and spelling in text',
            url: '/grammar-checker'
        },
        {
            name: 'Text Summarizer',
            description: 'Generate summaries from long text content',
            url: '/text-summarizer'
        },
        {
            name: 'SEO Content Analyzer',
            description: 'Analyze text for SEO optimization',
            url: '/seo-content-analyzer'
        },
        {
            name: 'Writing Assistant',
            description: 'AI-powered writing assistance and suggestions',
            url: '/writing-assistant'
        }
    ],
    'wordCounter.faqs': [
        {
            question: 'How are words counted?',
            answer: 'Words are counted by splitting text at whitespace characters and filtering out empty strings. Multiple consecutive spaces are treated as single separators.'
        },
        {
            question: 'What is the difference between character counts?',
            answer: 'Total characters include all characters including spaces, while characters without spaces exclude space characters. This is useful for platforms with character limits.'
        },
        {
            question: 'How is reading time calculated?',
            answer: 'Reading time is calculated based on an average reading speed of 200 words per minute. This can vary based on content complexity and reading level.'
        },
        {
            question: 'What counts as a unique word?',
            answer: 'Unique words are counted case-insensitively. For example, "The" and "the" are considered the same word for unique counting.'
        },
        {
            question: 'Can I analyze large text files?',
            answer: 'Yes, our tool can handle large text files efficiently. For very large files, consider processing in chunks for better performance.'
        },
        {
            question: 'Is my text data private?',
            answer: 'All text analysis happens directly in your browser. Your text content and analysis results are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What file formats are supported?',
            answer: 'Our tool supports standard text files (.txt, .md, .csv) with UTF-8 encoding. Files are processed locally in your browser.'
        },
        {
            question: 'How accurate is the word count?',
            answer: 'Our word counter is highly accurate for standard text. Special formatting or unusual characters may require manual verification.'
        },
        {
            question: 'Can I use this for academic writing?',
            answer: 'Yes, our tool is perfect for academic writing with word count tracking, character limits, and reading time estimation for assignments.'
        }
    ],
    'wordCounter.securityNote': 'All text analysis happens locally in your browser using JavaScript. No text content or analysis results are stored on our servers, ensuring complete privacy and security.',
    'wordCounter.additionalContent': 'Word counting is essential for content writing, academic work, SEO optimization, and text analysis. Combine our word counter with other tools like grammar checkers, plagiarism detectors, and reading time calculators for comprehensive content creation workflows.'
};
