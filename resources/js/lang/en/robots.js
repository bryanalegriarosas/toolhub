export default {
    'robots.title': 'Robots.txt Generator - Free Online SEO Tool',
    'robots.generate_button': 'Generate Robots.txt',
    'robots.copy_result': 'Copy Result',
    'robots.copied': 'Copied!',
    'robots.download': 'Download',
    'robots.clear': 'Clear',
    'robots.generated_robots': 'Generated Robots.txt',
    'robots.copy_all': 'Copy All',
    'robots.download_file': 'Download File',
    'robots.live_preview': 'Live Preview',
    'robots.validation_errors': 'Please fix the following issues:',
    
    // SEO Content specific to robots.txt generator
    'robots.mainDescription': 'Free online robots.txt generator with advanced directives, user-agent configuration, and real-time validation. Create professional robots.txt files for better search engine crawling control.',
    'robots.extendedDescription': 'Our comprehensive robots.txt generator helps you create optimized crawling instructions for search engines. Support for User-agent directives, Allow/Disallow rules, Crawl-delay, Host directives, and Sitemap declarations with syntax validation and best practices guidance.',
    'robots.features': [
        {
            title: 'User-Agent Configuration',
            description: 'Support for all major search engine bots including Googlebot, Bingbot, and custom user agents with specific crawling rules'
        },
        {
            title: 'Advanced Directives',
            description: 'Complete support for Allow, Disallow, Crawl-delay, Host, and Sitemap directives with syntax validation'
        },
        {
            title: 'Real-time Validation',
            description: 'Instant syntax checking and error detection to ensure your robots.txt follows web standards and best practices'
        },
        {
            title: 'Multiple Rule Management',
            description: 'Add, edit, and remove multiple Allow/Disallow rules with intuitive interface and organized structure'
        },
        {
            title: 'Sitemap Integration',
            description: 'Easy sitemap declaration with URL validation and support for multiple sitemap files'
        },
        {
            title: 'Crawl Control',
            description: 'Precise crawl-delay configuration to manage server load and control bot access frequency'
        },
        {
            title: 'Export Options',
            description: 'Download as robots.txt file or copy to clipboard for immediate implementation'
        },
        {
            title: 'Live Preview',
            description: 'See exactly how your robots.txt file will look before downloading with formatted output'
        }
    ],
    'robots.steps': [
        'Configure your User-agent settings (All bots, Googlebot, or custom)',
        'Set crawl delay to control bot access frequency (0-3600 seconds)',
        'Add Allow rules for paths you want bots to access',
        'Add Disallow rules for restricted directories and files',
        'Configure Host directives for regional SEO optimization',
        'Add Sitemap URLs to help search engines discover your content',
        'Generate and preview your robots.txt file',
        'Download or copy the file to your website root directory'
    ],
    'robots.examples': [
        {
            title: 'Basic Blog Robots.txt',
            description: 'Simple configuration for blog websites',
            code: 'User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /wp-admin/\nSitemap: https://blog.example.com/sitemap.xml',
            result: 'Allows all bots to access content while restricting admin areas'
        },
        {
            title: 'E-commerce Store Configuration',
            description: 'Robots.txt for online stores with product pages',
            code: 'User-agent: *\nAllow: /\nDisallow: /cart/\nDisallow: /checkout/\nDisallow: /admin/\nCrawl-delay: 1\nSitemap: https://store.example.com/sitemap.xml',
            result: 'Optimized for e-commerce with cart restrictions and crawl delay'
        },
        {
            title: 'Corporate Website Setup',
            description: 'Professional configuration for business websites',
            code: 'User-agent: *\nAllow: /\nDisallow: /private/\nDisallow: /internal/\nDisallow: /temp/\nUser-agent: Googlebot\nCrawl-delay: 2\nSitemap: https://company.example.com/sitemap.xml',
            result: 'Corporate setup with specific Googlebot settings and private area restrictions'
        }
    ],
    'robots.useCases': [
        {
            title: 'Blog Optimization',
            description: 'Bloggers controlling access to content and admin areas while ensuring proper indexing',
            example: 'Travel blog allowing public posts but restricting draft and admin sections'
        },
        {
            title: 'E-commerce Management',
            description: 'Online stores managing bot access to product pages while protecting checkout processes',
            example: 'Retail site allowing product crawling but blocking cart and checkout areas'
        },
        {
            title: 'Corporate Websites',
            description: 'Business websites protecting sensitive internal content while maintaining public visibility',
            example: 'Company site allowing public pages but restricting internal documentation'
        },
        {
            title: 'Development Testing',
            description: 'Developers creating robots.txt for staging and testing environments',
            example: 'Test site blocking all search engines during development phase'
        },
        {
            title: 'SEO Audits',
            description: 'SEO professionals analyzing and optimizing robots.txt files for better crawling',
            example: 'Agency reviewing client robots.txt for crawling efficiency issues'
        },
        {
            title: 'Multi-language Sites',
            description: 'Websites with multiple language versions managing regional crawling preferences',
            example: 'International site using Host directives for regional targeting'
        }
    ],
    'robots.technicalDetails': 'Robots.txt is a text file that tells search engine crawlers which pages or files the crawler can or cannot request from your site. It uses the Robots Exclusion Protocol with directives like User-agent to specify crawlers, Allow/Disallow to control access, Crawl-delay to manage timing, Sitemap to declare sitemap locations, and Host for regional preferences. The file must be placed in the website root directory and follows specific syntax rules that search engines interpret to optimize crawling behavior.',
    'robots.bestPractices': [
        {
            title: 'File Placement',
            tip: 'Always place robots.txt in the root directory (https://example.com/robots.txt). Search engines will not find it in subdirectories. Ensure the file is accessible and returns proper HTTP headers.'
        },
        {
            title: 'User-Agent Order',
            tip: 'Start with specific user agents (Googlebot, Bingbot) before the wildcard (*). Each user-agent group should be followed by its specific directives. Use separate groups for different bots when needed.'
        },
        {
            title: 'Directive Structure',
            tip: 'Use Allow before Disallow for the same path patterns. Be specific with path patterns using wildcards (*) and end-of-path markers ($). Test patterns with Google Robots Testing Tool.'
        },
        {
            title: 'Sitemap Declaration',
            tip: 'Include sitemap URLs at the end of the file. Use absolute URLs with proper protocol (https://). List multiple sitemaps if needed, one per line.'
        }
    ],
    'robots.commonErrors': [
        {
            error: 'Incorrect File Location',
            cause: 'Placing robots.txt in subdirectories instead of root directory',
            solution: 'Move file to website root directory (https://example.com/robots.txt)',
            prevention: 'Always verify file accessibility by browsing to the direct URL'
        },
        {
            error: 'Syntax Errors',
            cause: 'Typos in directive names, missing colons, or incorrect formatting',
            solution: 'Use validation tools and test with Google Robots Testing Tool',
            prevention: 'Generate with our tool and validate syntax before implementation'
        },
        {
            error: 'Blocking Important Content',
            cause: 'Overly broad Disallow rules preventing access to important pages',
            solution: 'Review Disallow directives and use specific path patterns',
            prevention: 'Test with Google Search Console to ensure proper indexing'
        },
        {
            error: 'Missing Sitemap Declaration',
            cause: 'Forgetting to include sitemap URLs in robots.txt',
            solution: 'Add Sitemap directives at the end of the file',
            prevention: 'Always include sitemap declarations for better content discovery'
        },
        {
            error: 'Case Sensitivity Issues',
            cause: 'Using incorrect case in directives or path patterns',
            solution: 'Use proper capitalization: User-agent, Allow, Disallow, Sitemap',
            prevention: 'Follow standard robots.txt syntax conventions'
        },
        {
            error: 'Large File Size',
            cause: 'Creating overly complex robots.txt with too many rules',
            solution: 'Keep file under 500KB and simplify rules where possible',
            prevention: 'Use efficient patterns and remove unnecessary directives'
        }
    ],
    'robots.alternatives': [
        {
            name: 'Manual Text Editor',
            useCase: 'Developers comfortable with robots.txt syntax',
            pros: 'Complete control, No dependencies, Learning experience',
            cons: 'Error-prone, No validation, Time-consuming',
            comparison: 'Our tool provides validation and guidance while maintaining flexibility'
        },
        {
            name: 'CMS Plugins',
            useCase: 'WordPress, Drupal, or other CMS users',
            pros: 'Integrated management, Automatic updates, Easy interface',
            cons: 'CMS-specific, Limited customization, Plugin dependencies',
            comparison: 'Our tool works with any platform and offers advanced features'
        },
        {
            name: 'SEO Platform Tools',
            useCase: 'Enterprise SEO management platforms',
            pros: 'Advanced analytics, Team collaboration, Automated optimization',
            cons: 'Expensive, Complex setup, Overkill for simple sites',
            comparison: 'Our tool provides essential features without complexity or cost'
        },
        {
            name: 'Online Generators',
            useCase: 'Quick basic robots.txt creation',
            pros: 'Fast, Simple interface, No installation',
            cons: 'Limited features, Basic validation, No advanced options',
            comparison: 'Our tool offers comprehensive features with professional-grade validation'
        }
    ],
    'robots.relatedTools': [
        {
            name: 'Meta Tag Generator',
            description: 'Create SEO meta tags for better search engine ranking and social media sharing',
            url: '/meta-tag-generator'
        },
        {
            name: 'Sitemap Generator',
            description: 'Generate XML sitemaps to help search engines discover and index your content',
            url: '/sitemap-generator'
        },
        {
            name: 'Schema Markup Generator',
            description: 'Create structured data markup for rich snippets in search results',
            url: '/schema-generator'
        },
        {
            name: 'SEO Analyzer',
            description: 'Analyze your website SEO performance and get optimization recommendations',
            url: '/seo-analyzer'
        },
        {
            name: 'Keyword Research Tool',
            description: 'Find relevant keywords with search volume and competition data',
            url: '/keyword-research'
        },
        {
            name: 'Page Speed Analyzer',
            description: 'Check website loading speed and get optimization suggestions',
            url: '/page-speed'
        },
        {
            name: 'SSL Certificate Generator',
            description: 'Generate SSL certificates for secure HTTPS connections',
            url: '/ssl-generator'
        }
    ],
    'robots.faqs': [
        {
            question: 'What is robots.txt?',
            answer: 'Robots.txt is a text file that tells search engine crawlers which pages or files the crawler can or cannot request from your site. It\'s part of the Robots Exclusion Protocol and helps control crawling behavior.'
        },
        {
            question: 'Where should I place robots.txt?',
            answer: 'Robots.txt must be placed in the root directory of your website (https://example.com/robots.txt). Search engines will only look for it in this specific location.'
        },
        {
            question: 'Is robots.txt mandatory for SEO?',
            answer: 'No, robots.txt is not mandatory, but it\'s highly recommended for SEO. It helps control crawl budget, prevents indexing of sensitive content, and can improve search engine efficiency.'
        },
        {
            question: 'Can robots.txt block all search engines?',
            answer: 'Yes, you can block all search engines by using "User-agent: *" followed by "Disallow: /". However, this will prevent your site from being indexed and appearing in search results.'
        },
        {
            question: 'What is the difference between Allow and Disallow?',
            answer: 'Allow explicitly permits access to specific paths, while Disallow prevents access. If both apply to the same path, the more specific rule takes precedence. By default, all paths are allowed.'
        },
        {
            question: 'What is Crawl-delay?',
            answer: 'Crawl-delay tells search engines how many seconds to wait between requests. It helps manage server load and prevents overwhelming your website with too many rapid requests.'
        },
        {
            question: 'How do I include multiple sitemaps?',
            answer: 'Add multiple Sitemap directives, one per line: "Sitemap: https://example.com/sitemap1.xml" and "Sitemap: https://example.com/sitemap2.xml"'
        },
        {
            question: 'Can I use wildcards in robots.txt?',
            answer: 'Yes, you can use asterisk (*) as a wildcard for matching any characters in paths, and dollar sign ($) to mark end of string. For example: "Disallow: /*.pdf$" blocks all PDF files.'
        },
        {
            question: 'How often should I update robots.txt?',
            answer: 'Update robots.txt when you add new sections to your site, change URL structure, or need to modify crawling rules. Regular reviews are recommended for large websites.'
        },
        {
            question: 'Is this robots.txt generator free?',
            answer: 'Yes! Our robots.txt generator is completely free with no registration required. Generate unlimited robots.txt files for all your websites.'
        }
    ],
    'robots.securityNote': 'All robots.txt generation happens locally in your browser. No data is sent to our servers, ensuring your website structure and crawling preferences remain private and secure.',
    'robots.additionalContent': 'Robots.txt is just one part of comprehensive SEO strategy. Combine our robots.txt generator with proper meta tags, quality sitemaps, and technical SEO for optimal search engine performance and crawling efficiency.'
};
