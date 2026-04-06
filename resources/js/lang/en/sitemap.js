export default {
    'sitemap.title': 'Sitemap Generator - Free Online XML Sitemap Tool',
    'sitemap.description': 'Generate XML sitemaps with validation, multiple URLs, and advanced options for better search engine indexing.',
    'sitemap.generate_button': 'Generate Sitemap',
    'sitemap.copy_xml': 'Copy XML',
    'sitemap.copied': 'Copied!',
    'sitemap.download_file': 'Download File',
    'sitemap.clear_all': 'Clear All',
    'sitemap.generated_sitemap': 'Generated Sitemap',
    'sitemap.validation_errors': 'Please fix the following issues:',
    
    // Form labels
    'sitemap.url_input': 'URL Input',
    'sitemap.website_urls': 'Website URLs',
    'sitemap.urls_placeholder': 'Enter URLs one per line\nhttps://example.com/page1\nhttps://example.com/page2',
    'sitemap.clear_urls': 'Clear URLs',
    'sitemap.quick_add': 'Quick Add',
    'sitemap.add_single_url': 'Add single URL',
    'sitemap.add_url': 'Add URL',
    
    'sitemap.sitemap_options': 'Sitemap Options',
    'sitemap.change_frequency': 'Change Frequency',
    'sitemap.always': 'Always',
    'sitemap.hourly': 'Hourly',
    'sitemap.daily': 'Daily',
    'sitemap.weekly': 'Weekly',
    'sitemap.monthly': 'Monthly',
    'sitemap.yearly': 'Yearly',
    'sitemap.never': 'Never',
    
    'sitemap.priority': 'Priority',
    'sitemap.highest': 'Highest',
    'sitemap.high': 'High',
    'sitemap.medium': 'Medium',
    'sitemap.low': 'Low',
    'sitemap.lowest': 'Lowest',
    'sitemap.default': 'Default',
    
    'sitemap.last_modified': 'Last Modified',
    'sitemap.use_server_time': 'Use server time',
    'sitemap.use_current_time': 'Use current time',
    'sitemap.dont_include': 'Don\'t include',
    
    'sitemap.include_images': 'Include images',
    'sitemap.validate_urls': 'Validate URLs',
    
    // Statistics
    'sitemap.total_urls': 'Total URLs',
    'sitemap.file_size': 'File Size',
    'sitemap.valid_urls': 'Valid URLs',
    'sitemap.invalid_urls': 'Invalid URLs',
    
    // SEO Content specific to sitemap generator
    'sitemap.mainDescription': 'Free online sitemap generator with XML validation, multiple URL support, and advanced options. Create professional XML sitemaps for better search engine discovery and indexing.',
    'sitemap.extendedDescription': 'Our comprehensive sitemap generator helps you create optimized XML sitemaps that improve search engine crawling and indexing. Support for change frequency, priority settings, last modified dates, URL validation, and image sitemaps with proper XML formatting and SEO best practices.',
    'sitemap.features': [
        {
            title: 'Multiple URL Support',
            description: 'Add up to 50,000 URLs per sitemap with bulk input and individual URL addition options'
        },
        {
            title: 'Advanced XML Options',
            description: 'Configure change frequency, priority levels, and last modified dates for optimal crawling'
        },
        {
            title: 'Real-time Validation',
            description: 'Instant URL validation and syntax checking to ensure sitemap compliance with standards'
        },
        {
            title: 'Image Sitemap Support',
            description: 'Include image references in your sitemap for better visual content indexing'
        },
        {
            title: 'Flexible Frequency Settings',
            description: 'Choose from always to never update frequencies to match your content schedule'
        },
        {
            title: 'Priority Management',
            description: 'Set page priorities from 0.1 to 1.0 to guide search engine crawling importance'
        },
        {
            title: 'Export Options',
            description: 'Download as XML file or copy to clipboard for immediate website implementation'
        },
        {
            title: 'Size Optimization',
            description: 'Automatic file size monitoring and optimization for better performance'
        }
    ],
    'sitemap.steps': [
        'Enter your website URLs manually or add them one by one using the quick add feature',
        'Configure sitemap options including change frequency, priority levels, and last modified dates',
        'Choose validation settings and decide whether to include images in your sitemap',
        'Generate XML sitemap with proper formatting and SEO-optimized structure',
        'Preview the generated sitemap, copy to clipboard, or download as XML file'
    ],
    'sitemap.examples': [
        {
            title: 'Blog Website Sitemap',
            description: 'Generate sitemap for blog with weekly updates and medium priority',
            code: 'URLs: https://blog.com/, https://blog.com/about, https://blog.com/contact\nFrequency: Weekly\nPriority: 0.8\nLast Modified: Current time',
            result: 'XML sitemap with 3 URLs, weekly frequency, medium priority, and current timestamps'
        },
        {
            title: 'E-commerce Store Sitemap',
            description: 'Create sitemap for online store with daily updates and highest priority',
            code: 'URLs: https://store.com/, https://store.com/products, https://store.com/categories\nFrequency: Daily\nPriority: 1.0\nLast Modified: Server time',
            result: 'XML sitemap optimized for e-commerce with high priority and daily update frequency'
        },
        {
            title: 'Portfolio Website Sitemap',
            description: 'Generate sitemap for portfolio with monthly updates and low priority',
            code: 'URLs: https://portfolio.com/, https://portfolio.com/projects, https://portfolio.com/contact\nFrequency: Monthly\nPriority: 0.7\nLast Modified: Don\'t include',
            result: 'XML sitemap suitable for portfolio websites with monthly update schedule'
        }
    ],
    'sitemap.useCases': [
        {
            title: 'Blog Content Management',
            description: 'Bloggers creating sitemaps for regular content updates and better search engine discovery',
            example: 'Travel blog with weekly post updates and category pages'
        },
        {
            title: 'E-commerce Optimization',
            description: 'Online stores managing product pages and categories for better indexing',
            example: 'Retail site with daily product updates and seasonal categories'
        },
        {
            title: 'Corporate Websites',
            description: 'Business websites ensuring all important pages are discovered and indexed',
            example: 'Company site with service pages and news updates'
        },
        {
            title: 'Portfolio Sites',
            description: 'Creative professionals showcasing work with project-based sitemaps',
            example: 'Designer portfolio with project galleries and contact information'
        },
        {
            title: 'News Websites',
            description: 'Media outlets with frequent content updates requiring timely indexing',
            example: 'News site with hourly article updates and category sections'
        },
        {
            title: 'Educational Platforms',
            description: 'Online learning platforms with course content and resource pages',
            example: 'E-learning site with course pages and educational resources'
        }
    ],
    'sitemap.technicalDetails': 'XML sitemaps are structured files that list URLs for search engines to discover and index. They use the sitemap protocol with XML format including <urlset> as root element, <url> for each page, <loc> for URL location, <lastmod> for modification dates, <changefreq> for update frequency, <priority> for page importance, and <image> for visual content. Sitemaps help search engines understand site structure, crawling priorities, and content freshness for optimal indexing.',
    'sitemap.bestPractices': [
        {
            title: 'URL Selection',
            tip: 'Include only canonical URLs that you want indexed. Avoid including duplicate content, redirect pages, or admin interfaces. Focus on high-value pages that drive traffic and conversions.'
        },
        {
            title: 'Frequency Settings',
            tip: 'Set realistic change frequencies based on actual update patterns. Use daily for frequently updated content, weekly for regular updates, and monthly for static pages. Avoid using "always" unless content truly changes constantly.'
        },
        {
            title: 'Priority Distribution',
            tip: 'Use 1.0 for homepage and critical pages, 0.8-0.9 for important category pages, 0.5-0.7 for standard content, and 0.1-0.4 for less important pages. Ensure priority distribution reflects actual site hierarchy.'
        },
        {
            title: 'File Management',
            tip: 'Keep sitemaps under 50MB and 50,000 URLs. For larger sites, create multiple sitemaps and a sitemap index file. Update sitemaps when content changes significantly.'
        }
    ],
    'sitemap.commonErrors': [
        {
            error: 'Invalid URL Format',
            cause: 'Including malformed URLs or missing protocol (http/https)',
            solution: 'Ensure all URLs are properly formatted with protocol and domain',
            prevention: 'Use URL validation feature and test each URL before adding'
        },
        {
            error: 'Exceeding URL Limits',
            cause: 'Adding more than 50,000 URLs or creating files larger than 50MB',
            solution: 'Split into multiple sitemaps and create a sitemap index',
            prevention: 'Monitor URL count and file size during generation'
        },
        {
            error: 'Incorrect Priority Values',
            cause: 'Using priority values outside the 0.0-1.0 range',
            solution: 'Use valid priority values between 0.1 and 1.0',
            prevention: 'Use the priority selector dropdown for valid options'
        },
        {
            error: 'XML Syntax Errors',
            cause: 'Special characters not properly escaped in URLs',
            solution: 'Ensure proper XML escaping of special characters',
            prevention: 'Use our generator which handles XML escaping automatically'
        },
        {
            error: 'Missing Last Modified Dates',
            cause: 'Forgetting to include lastmod for frequently updated content',
            solution: 'Add lastmod dates for dynamic content to improve crawling efficiency',
            prevention: 'Set appropriate lastmod options for different content types'
        },
        {
            error: 'Duplicate URLs',
            cause: 'Including the same URL multiple times in the sitemap',
            solution: 'Remove duplicate URLs and keep only canonical versions',
            prevention: 'Use URL validation which can help identify duplicates'
        }
    ],
    'sitemap.alternatives': [
        {
            name: 'Manual XML Creation',
            useCase: 'Developers comfortable with XML and sitemap protocol',
            pros: 'Complete control, No dependencies, Learning experience',
            cons: 'Error-prone, Time-consuming, Requires XML knowledge',
            comparison: 'Our tool automates XML creation while maintaining flexibility and validation'
        },
        {
            name: 'CMS Sitemap Plugins',
            useCase: 'WordPress, Drupal, or other CMS users',
            pros: 'Automatic generation, Content integration, Regular updates',
            cons: 'CMS-specific, Limited customization, Plugin dependencies',
            comparison: 'Our tool works with any platform and offers advanced configuration options'
        },
        {
            name: 'Server-side Scripts',
            useCase: 'Dynamic websites with real-time content updates',
            pros: 'Automatic updates, Real-time generation, Database integration',
            cons: 'Technical setup required, Server resources, Maintenance overhead',
            comparison: 'Our tool provides immediate results without server configuration'
        },
        {
            name: 'Online Sitemap Services',
            useCase: 'Websites needing ongoing sitemap management',
            pros: 'Automatic crawling, Regular updates, Monitoring features',
            cons: 'Subscription costs, External dependency, Privacy concerns',
            comparison: 'Our tool is free, private, and gives you full control over your sitemap'
        }
    ],
    'sitemap.relatedTools': [
        {
            name: 'Robots.txt Generator',
            description: 'Create robots.txt files to control search engine crawling behavior',
            url: '/robots-txt-generator'
        },
        {
            name: 'Meta Tag Generator',
            description: 'Generate SEO meta tags for better search engine ranking',
            url: '/meta-tag-generator'
        },
        {
            name: 'Schema Markup Generator',
            description: 'Create structured data markup for rich snippets in search results',
            url: '/schema-generator'
        },
        {
            name: 'SEO Analyzer',
            description: 'Analyze website SEO performance and get optimization recommendations',
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
    'sitemap.faqs': [
        {
            question: 'What is a sitemap?',
            answer: 'A sitemap is an XML file that lists all important pages of your website, helping search engines discover and index your content more efficiently.'
        },
        {
            question: 'Why do I need a sitemap?',
            answer: 'Sitemaps help search engines find your content faster, improve crawling efficiency, ensure all pages are indexed, and provide metadata about your content.'
        },
        {
            question: 'What URLs should I include?',
            answer: 'Include all important pages: homepage, category pages, product pages, blog posts, service pages, and any content you want search engines to index.'
        },
        {
            question: 'What is change frequency?',
            answer: 'Change frequency tells search engines how often your content is updated. Use realistic values: always, hourly, daily, weekly, monthly, yearly, or never.'
        },
        {
            question: 'What is priority?',
            answer: 'Priority indicates the importance of pages relative to other pages on your site, ranging from 0.0 (least important) to 1.0 (most important).'
        },
        {
            question: 'How many URLs can I include?',
            answer: 'You can include up to 50,000 URLs per sitemap file. For larger sites, create multiple sitemap files and use a sitemap index.'
        },
        {
            question: 'Should I include images in sitemap?',
            answer: 'Yes, including images helps search engines discover and index your visual content, which can improve image search visibility.'
        },
        {
            question: 'How often should I update my sitemap?',
            answer: 'Update your sitemap whenever you add or remove important pages, or when content update patterns change significantly.'
        },
        {
            question: 'Where do I place my sitemap file?',
            answer: 'Place your sitemap.xml file in the root directory of your website (https://example.com/sitemap.xml) and submit it to search engines.'
        },
        {
            question: 'Is this sitemap generator free?',
            answer: 'Yes! Our sitemap generator is completely free with no registration required. Generate unlimited sitemaps for all your websites.'
        }
    ],
    'sitemap.securityNote': 'All sitemap generation happens locally in your browser. No data is sent to our servers, ensuring your website URLs and structure remain private and secure.',
    'sitemap.additionalContent': 'XML sitemaps are essential for SEO but work best when combined with proper robots.txt files, quality meta tags, and regular content updates. Use our sitemap generator as part of a comprehensive SEO strategy.'
};
