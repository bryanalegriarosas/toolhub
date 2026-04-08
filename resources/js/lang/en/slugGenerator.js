export default {
    'slugGenerator.title': 'Slug Generator - Create SEO-Friendly URLs Online',
    'slugGenerator.description': 'Create URL-friendly slugs from any text with customizable separators and stop-word removal. Perfect for SEO optimization.',
    'slugGenerator.load_file': 'Load file:',
    'slugGenerator.copy': 'Copy Slug',
    'slugGenerator.download_result': 'Download Slug',
    'slugGenerator.clear': 'Clear',
    'slugGenerator.save': 'Save',
    'slugGenerator.enter_text': 'Enter text',
    'slugGenerator.slug': 'Slug',
    'slugGenerator.history': 'History',
    'slugGenerator.restore': 'Restore',
    'slugGenerator.download_history': 'Download History',
    'slugGenerator.clear_history': 'Clear History',
    'slugGenerator.hyphen': 'Hyphen (-)',
    'slugGenerator.underscore': 'Underscore (_)',
    'slugGenerator.remove_common_words': 'Remove common words',
    'slugGenerator.length': 'Length:',
    
    // SEO Content specific to Slug Generator
    'slugGenerator.mainDescription': 'Free online slug generator for creating SEO-friendly URLs from any text with customizable separators and stop-word removal.',
    'slugGenerator.extendedDescription': 'Our comprehensive slug generator transforms any text into clean, SEO-friendly URLs. Whether you\'re creating blog post URLs, product pages, or any web content, this tool ensures your slugs are optimized for search engines and user readability. With support for multiple separators and intelligent stop-word removal, you can create professional URLs that improve your site\'s SEO performance.',
    'slugGenerator.features': [
        {
            title: 'Instant Slug Generation',
            description: 'Generate URL-friendly slugs from any text input in real-time'
        },
        {
            title: 'Customizable Separators',
            description: 'Choose between hyphens (-) and underscores (_) for URL formatting'
        },
        {
            title: 'Stop-Word Removal',
            description: 'Intelligently remove common words for cleaner, shorter URLs'
        },
        {
            title: 'Real-Time Preview',
            description: 'See your slug update instantly as you type'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copying of generated slugs to clipboard'
        },
        {
            title: 'Download Options',
            description: 'Download slugs as text files for offline use'
        },
        {
            title: 'Slug History',
            description: 'Track and manage your generated slugs locally'
        },
        {
            title: 'File Upload Support',
            description: 'Load text files to generate slugs from file content'
        },
        {
            title: 'Special Character Handling',
            description: 'Automatically handles and normalizes special characters'
        },
        {
            title: 'Length Counter',
            description: 'Real-time character count for URL optimization'
        }
    ],
    'slugGenerator.steps': [
        'Enter or paste your text in the input field',
        'Choose your preferred separator (hyphen or underscore)',
        'Optionally enable stop-word removal for cleaner slugs',
        'Copy the generated slug to clipboard',
        'Download as file or save to history for later use'
    ],
    'slugGenerator.examples': [
        {
            title: 'Blog Post URL',
            description: 'Create SEO-friendly URL for blog posts',
            code: 'Input: How to Learn JavaScript Programming in 2024',
            result: 'Slug: how-to-learn-javascript-programming-in-2024'
        },
        {
            title: 'Product Page URL',
            description: 'Generate clean product URLs for e-commerce',
            code: 'Input: Apple iPhone 15 Pro Max - 256GB - Blue Titanium',
            result: 'Slug: apple-iphone-15-pro-max-256gb-blue-titanium',
            steps: [
                'Enter product title with details',
                'Use hyphen separator for readability',
                'Enable \'Remove common words\' option',
                'Copy the SEO-friendly slug'
            ]
        },
        {
            title: 'Article Title with Special Characters',
            description: 'Handle special characters and symbols',
            code: 'Input: C++ Programming: The Complete Guide (2024 Edition)',
            result: 'Slug: c-programming-complete-guide-2024-edition'
        }
    ],
    'slugGenerator.useCases': [
        {
            title: 'Blog Posts and Articles',
            description: 'Content creators creating clean, readable URLs for blog content that improve SEO and user experience',
            example: 'Blogger generating slugs for SEO-optimized blog post URLs'
        },
        {
            title: 'E-commerce Product Pages',
            description: 'Online store owners generating product URLs that are both human-readable and search engine friendly',
            example: 'E-commerce manager creating clean product page URLs'
        },
        {
            title: 'Documentation and Guides',
            description: 'Technical writers creating consistent URL structures for documentation and help guides',
            example: 'Technical writer generating slugs for documentation pages'
        },
        {
            title: 'News and Media Websites',
            description: 'Journalists and editors optimizing article URLs for better search engine ranking and sharing',
            example: 'News editor creating SEO-friendly article URLs'
        },
        {
            title: 'Portfolio and Gallery Sites',
            description: 'Designers and artists creating clean URLs for project showcases and creative portfolios',
            example: 'Designer generating slugs for portfolio project URLs'
        }
    ],
    'slugGenerator.technicalDetails': 'Our slug generator processes text by converting to lowercase, removing non-alphanumeric characters (except selected separators), and optionally filtering out common stop words. The tool handles Unicode characters and converts them to ASCII equivalents for maximum URL compatibility.',
    'slugGenerator.bestPractices': [
        {
            title: 'Keep URLs Short',
            tip: 'Aim for slugs under 60 characters for optimal display in search results and better user experience.'
        },
        {
            title: 'Use Descriptive Keywords',
            tip: 'Include relevant keywords that accurately describe your content for better SEO performance.'
        },
        {
            title: 'Avoid Stop Words',
            tip: 'Remove common words that don\'t add SEO value to make URLs more concise and focused.'
        },
        {
            title: 'Use Hyphens Over Underscores',
            tip: 'Search engines treat hyphens as word separators, making them better for SEO than underscores.'
        },
        {
            title: 'Be Consistent',
            tip: 'Maintain the same slug format across your entire website for better user experience and SEO.'
        }
    ],
    'slugGenerator.commonErrors': [
        {
            error: 'Using Special Characters',
            cause: 'Including characters like @, #, $, % in URLs that can cause encoding issues',
            solution: 'Use only alphanumeric characters with hyphens or underscores as separators.',
            prevention: 'Let the slug generator automatically handle special character removal.'
        },
        {
            error: 'Making URLs Too Long',
            cause: 'Creating slugs that are too long and get truncated in search results',
            solution: 'Keep slugs concise and under 60 characters when possible.',
            prevention: 'Use stop-word removal and focus on essential keywords.'
        },
        {
            error: 'Including File Extensions',
            cause: 'Adding .html, .php, or other file extensions to slugs unnecessarily',
            solution: 'Remove file extensions from slugs as they\'re handled by web server configuration.',
            prevention: 'Focus on content-related keywords only in your slugs.'
        },
        {
            error: 'Using Numbers Instead of Words',
            cause: 'Replacing descriptive words with numerical identifiers',
            solution: 'Use descriptive words that accurately represent your content.',
            prevention: 'Prioritize readability and SEO value over brevity.'
        },
        {
            error: 'Changing URLs Frequently',
            cause: 'Modifying published URLs which breaks existing links and SEO value',
            solution: 'Plan your URL structure carefully and maintain consistency.',
            prevention: 'Use the slug generator to create optimal URLs from the start.'
        }
    ],
    'slugGenerator.alternatives': [
        {
            name: 'URL Encoder Tools',
            useCase: 'Simple URL encoding for special characters',
            pros: 'Handles special characters, Quick encoding, Widely available',
            cons: 'Not SEO-optimized, No readability focus, Limited functionality',
            comparison: 'Our tool creates readable, SEO-friendly slugs rather than just encoding characters.'
        },
        {
            name: 'CMS Built-in Functions',
            useCase: 'WordPress, Drupal, and other CMS slug generation',
            pros: 'Integrated, Automatic, No extra setup',
            cons: 'Limited customization, Platform-specific, Less control',
            comparison: 'Our tool offers more customization and works across any platform.'
        },
        {
            name: 'Programming Libraries',
            useCase: 'slugify, speakingurl and other programming libraries',
            pros: 'Code integration, Advanced features, Customizable',
            cons: 'Programming required, Setup complexity, Limited standalone use',
            comparison: 'Our tool provides instant slug generation without programming requirements.'
        },
        {
            name: 'Online URL Shorteners',
            useCase: 'Bitly, TinyURL and other URL shortening services',
            pros: 'Very short URLs, Analytics tracking, Easy sharing',
            cons: 'Not SEO-friendly, Third-party dependency, Loss of control',
            comparison: 'Our tool creates descriptive, SEO-optimized URLs rather than just short ones.'
        }
    ],
    'slugGenerator.relatedTools': [
        {
            name: 'URL Encoder/Decoder',
            description: 'Encode and decode URLs with special characters safely',
            url: '/url-encoder'
        },
        {
            name: 'Random String Generator',
            description: 'Generate random strings for passwords and unique identifiers',
            url: '/random-string-generator'
        },
        {
            name: 'Text Case Converter',
            description: 'Convert text between different case formats like camelCase and snake_case',
            url: '/text-case-converter'
        },
        {
            name: 'HTML Entity Encoder',
            description: 'Encode special characters for safe HTML display',
            url: '/html-entity-encoder'
        },
        {
            name: 'Meta Tags Generator',
            description: 'Generate SEO meta tags for web pages',
            url: '/meta-tags-generator'
        },
        {
            name: 'Keyword Density Checker',
            description: 'Analyze keyword density in your text for SEO optimization',
            url: '/keyword-density-checker'
        }
    ],
    'slugGenerator.faqs': [
        {
            question: 'What is a slug in URLs?',
            answer: 'A slug is the part of a URL that identifies a specific page in human-readable form, typically derived from the page title. For example, in "example.com/blog/how-to-code", the slug is "how-to-code".'
        },
        {
            question: 'Why should I remove common words from slugs?',
            answer: 'Removing stop words like "the", "and", "or" creates shorter, more focused URLs that are better for SEO and user readability. These words don\'t typically add value to search engine optimization.'
        },
        {
            question: 'What\'s the difference between using hyphens and underscores?',
            answer: 'Hyphens (-) are preferred for SEO as search engines treat them as word separators. Underscores (_) are sometimes used in technical contexts but don\'t separate words as effectively for search engines.'
        },
        {
            question: 'Can I use this tool for non-English text?',
            answer: 'Yes, the tool handles Unicode characters and converts them to ASCII equivalents for URL compatibility. However, some special characters may be normalized to their closest ASCII equivalents.'
        },
        {
            question: 'How long should a slug be?',
            answer: 'Ideally keep slugs under 60 characters for optimal display in search results and better user experience. Shorter slugs are also more shareable and memorable.'
        },
        {
            question: 'Can I customize the stop words list?',
            answer: 'Currently the tool uses a predefined list of common English stop words. Custom stop words may be added in future updates based on user feedback.'
        },
        {
            question: 'Are the generated slugs SEO-friendly?',
            answer: 'Yes, the tool follows SEO best practices by creating readable, keyword-rich URLs with proper separators. This helps improve search engine ranking and user experience.'
        },
        {
            question: 'Can I use slugs for file names?',
            answer: 'Yes, the generated slugs are also suitable for creating clean, readable file names that follow web best practices and are compatible with most systems.'
        }
    ],
    'slugGenerator.securityNote': 'This tool processes all data locally in your browser. No text or slugs are sent to external servers, ensuring your content remains private and secure.',
    'slugGenerator.additionalContent': 'For developers: This slug generator can be integrated into web applications using the provided API. The algorithm follows SEO best practices and is compatible with modern web standards. Consider implementing server-side validation for critical applications and maintaining consistent URL structures across your website.'
};
