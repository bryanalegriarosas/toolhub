export default {
    'markdownToHtml.title': 'Markdown to HTML Converter - Free Online Tool',
    'markdownToHtml.description': 'Convert Markdown text to HTML with live preview and syntax highlighting.',
    'markdownToHtml.live_preview': 'Live Preview',
    'markdownToHtml.load_file': 'Load file:',
    'markdownToHtml.markdown_input': 'Markdown Input',
    'markdownToHtml.markdown_button_h1': 'Heading',
    'markdownToHtml.markdown_button_bold': 'Bold',
    'markdownToHtml.markdown_button_italic': 'Italic',
    'markdownToHtml.markdown_button_code': 'Code',
    'markdownToHtml.markdown_button_link': 'Link',
    'markdownToHtml.markdown_button_list': 'List',
    'markdownToHtml.markdown_button_quote': 'Quote',
    'markdownToHtml.markdown_button_codeblock': 'Code Block',
    'markdownToHtml.html_output': 'HTML Output',
    'markdownToHtml.raw_html_code': 'Raw HTML Code',
    'markdownToHtml.copy_html': 'Copy HTML',
    'markdownToHtml.convert_to_html': 'Convert to HTML',
    'markdownToHtml.download_html': 'Download HTML',
    'markdownToHtml.download_markdown': 'Download Markdown',
    'markdownToHtml.clear_all': 'Clear All',
    'markdownToHtml.sample_markdown': 'Sample Markdown',
    'markdownToHtml.basic_example': 'Basic Example',
    'markdownToHtml.advanced_example': 'Advanced Example',
    'markdownToHtml.documentation_style': 'Documentation Style',
    'markdownToHtml.readme_style': 'README Style',
    'markdownToHtml.headings_lists_links': 'Headings, lists, links',
    'markdownToHtml.code_blocks_tables_images': 'Code blocks, tables, images',
    'markdownToHtml.api_documentation_format': 'API documentation format',
    'markdownToHtml.project_readme_format': 'Project README format',
    'markdownToHtml.enter_your_markdown_here': 'Enter your Markdown here...',
    'markdownToHtml.html_output_will_appear_here': 'HTML output will appear here...',
    'markdownToHtml.characters': 'Characters',
    'markdownToHtml.lines': 'Lines',
    'markdownToHtml.html_characters': 'HTML Characters',
    
    // SEO Content specific to Markdown to HTML
    'markdownToHtml.mainDescription': 'Free online Markdown to HTML converter with live preview, syntax highlighting, and formatting tools. Perfect for documentation and content creation.',
    'markdownToHtml.extendedDescription': 'Our comprehensive Markdown to HTML converter helps you convert Markdown text to clean HTML instantly. Includes live preview, formatting toolbar, syntax highlighting, file upload support, and export options. All operations happen in your browser for complete privacy.',
    'markdownToHtml.features': [
        {
            title: 'Live Preview',
            description: 'See HTML output in real-time as you type Markdown text'
        },
        {
            title: 'Formatting Toolbar',
            description: 'Quick formatting buttons for headings, bold, italic, links, lists, and code blocks'
        },
        {
            title: 'Syntax Highlighting',
            description: 'Beautiful syntax highlighting for code blocks with language detection'
        },
        {
            title: 'File Upload Support',
            description: 'Load Markdown files directly for quick conversion'
        },
        {
            title: 'Multiple Export Options',
            description: 'Download both original Markdown and converted HTML files'
        },
        {
            title: 'Sample Templates',
            description: 'Pre-built templates for basic, advanced, documentation, and README styles'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop editing'
        },
        {
            title: 'Privacy First',
            description: 'All conversion happens locally in your browser with no server storage'
        }
    ],
    'markdownToHtml.steps': [
        'Enter or paste your Markdown text in the input area',
        'Enable live preview to see HTML output as you type',
        'Use formatting toolbar buttons for quick Markdown syntax',
        'Convert to HTML instantly or download the output files'
    ],
    'markdownToHtml.examples': [
        {
            title: 'Blog Post Markdown',
            description: 'Convert blog post from Markdown to HTML',
            code: '# My Blog Post\n\n## Introduction\nThis is a **blog post** with *italic* text and `code`.\n\n- Item 1\n- Item 2\n- Item 3\n\n> This is a quote from someone important.',
            result: '<h1>My Blog Post</h1>\n<h2>Introduction</h2>\n<p>This is a <strong>blog post</strong> with <em>italic</em> text and <code>code</code>.</p>\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ul>\n<blockquote>\n<p>This is a quote from someone important.</p>\n</blockquote>'
        },
        {
            title: 'Technical Documentation',
            description: 'Convert technical documentation with code blocks',
            code: '# API Documentation\n\n## Installation\n```bash\nnpm install my-package\n```\n\n## Usage\n```javascript\nconst package = require(\'my-package\');\npackage.init();\n```',
            result: '<h1>API Documentation</h1>\n<h2>Installation</h2>\n<pre><code class="language-bash">npm install my-package</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-javascript">const package = require(\'my-package\');\npackage.init();</code></pre>',
            steps: [
                'Write technical documentation in Markdown',
                'Use code blocks with language specification',
                'Convert to clean HTML for web display',
                'Copy HTML for documentation sites'
            ]
        }
    ],
    'markdownToHtml.useCases': [
        {
            title: 'Documentation Writing',
            description: 'Technical writers creating API documentation and user guides',
            example: 'Technical writer converting API documentation for web display'
        },
        {
            title: 'Blog Content Creation',
            description: 'Bloggers and content creators writing posts in Markdown format',
            example: 'Blogger converting Markdown posts to HTML for publishing'
        },
        {
            title: 'README Files',
            description: 'Developers creating README files for GitHub repositories',
            example: 'Developer converting README.md to HTML for project documentation'
        },
        {
            title: 'Educational Content',
            description: 'Educators creating course materials and tutorials',
            example: 'Teacher converting lesson plans from Markdown to HTML'
        },
        {
            title: 'Technical Articles',
            description: 'Writers creating technical articles and tutorials',
            example: 'Technical writer converting tutorials to HTML format'
        },
        {
            title: 'Static Site Generation',
            description: 'Developers generating static sites from Markdown content',
            example: 'Web developer converting Markdown posts to HTML for static sites'
        }
    ],
    'markdownToHtml.technicalDetails': 'Our Markdown to HTML converter uses a comprehensive parsing engine that handles common Markdown syntax including headings, bold, italic, links, lists, code blocks, tables, images, and blockquotes. The converter processes text sequentially, applying regex patterns and string replacement to generate clean HTML5 output. All processing happens locally using efficient JavaScript algorithms for optimal performance.',
    'markdownToHtml.bestPractices': [
        {
            title: 'Consistent Formatting',
            tip: 'Use consistent Markdown formatting throughout your documents for better readability.'
        },
        {
            title: 'Code Block Syntax',
            tip: 'Always specify language in code blocks for proper syntax highlighting.'
        },
        {
            title: 'Link Validation',
            tip: 'Validate all links and image references in your Markdown before conversion.'
        },
        {
            title: 'Preview Testing',
            tip: 'Use live preview to test formatting and ensure proper HTML output.'
        }
    ],
    'markdownToHtml.commonErrors': [
        {
            error: 'Invalid Markdown Syntax',
            cause: 'Incorrect Markdown formatting or unsupported syntax',
            solution: 'Check Markdown syntax guidelines and use supported formatting options.',
            prevention: 'Use live preview to validate formatting before final conversion.'
        },
        {
            error: 'Broken Links',
            cause: 'Invalid or broken link references in Markdown',
            solution: 'Validate all links and ensure proper URL formatting.',
            prevention: 'Test all links after conversion and use proper link syntax.'
        },
        {
            error: 'Code Block Issues',
            cause: 'Improper code block formatting or missing language specification',
            solution: 'Use proper triple backtick syntax with language specification.',
            prevention: 'Always include language tags for code blocks and test syntax highlighting.'
        },
        {
            error: 'Table Formatting',
            cause: 'Incorrect table formatting or missing separators',
            solution: 'Use proper table syntax with header separators and consistent column alignment.',
            prevention: 'Validate table structure and ensure proper pipe separators.'
        }
    ],
    'markdownToHtml.alternatives': [
        {
            name: 'Command Line Tools',
            useCase: 'pandoc, markdown command-line tools',
            pros: 'Powerful features, Scriptable, Advanced options',
            cons: 'Technical knowledge required, No GUI, Complex setup',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        },
        {
            name: 'Online Editors',
            useCase: 'StackEdit, Dillinger, Typora online editors',
            pros: 'Advanced features, Cloud sync, Collaboration',
            cons: 'Internet dependency, Privacy concerns, Limited offline use',
            comparison: 'Our tool works offline with complete privacy and comprehensive features.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'VS Code, Atom, Sublime Text Markdown extensions',
            pros: 'IDE integration, Advanced editing, Workflow integration',
            cons: 'IDE specific, Learning curve, Limited standalone use',
            comparison: 'Our tool provides focused conversion without development environment dependencies.'
        },
        {
            name: 'Static Site Generators',
            useCase: 'Jekyll, Hugo, Hexo static site generators',
            pros: 'Complete sites, Advanced features, Template systems',
            cons: 'Complex setup, Overkill for simple conversion, Learning curve',
            comparison: 'Our tool offers simple conversion without full site generation complexity.'
        }
    ],
    'markdownToHtml.relatedTools': [
        {
            name: 'HTML to Markdown',
            description: 'Convert HTML back to Markdown format',
            url: '/html-to-markdown'
        },
        {
            name: 'Markdown Editor',
            description: 'Advanced Markdown editor with live preview',
            url: '/markdown-editor'
        },
        {
            name: 'HTML Formatter',
            description: 'Format and beautify HTML code',
            url: '/html-formatter'
        },
        {
            name: 'CSS Generator',
            description: 'Generate CSS for HTML styling',
            url: '/css-generator'
        },
        {
            name: 'Code Formatter',
            description: 'Format code in various programming languages',
            url: '/code-formatter'
        },
        {
            name: 'Text Editor',
            description: 'Online text editor with syntax highlighting',
            url: '/text-editor'
        },
        {
            name: 'Document Converter',
            description: 'Convert between various document formats',
            url: '/document-converter'
        },
        {
            name: 'Syntax Highlighter',
            description: 'Add syntax highlighting to code blocks',
            url: '/syntax-highlighter'
        }
    ],
    'markdownToHtml.faqs': [
        {
            question: 'What Markdown syntax is supported?',
            answer: 'We support common Markdown syntax including headings, bold, italic, links, lists, code blocks, tables, images, blockquotes, and horizontal rules.'
        },
        {
            question: 'Can I use live preview?',
            answer: 'Yes, enable live preview to see HTML output in real-time as you type Markdown text.'
        },
        {
            question: 'Can I download the converted HTML?',
            answer: 'Yes, you can download both the original Markdown file and the converted HTML file separately.'
        },
        {
            question: 'Are code blocks syntax highlighted?',
            answer: 'Yes, code blocks with language specification receive proper syntax highlighting in the HTML output.'
        },
        {
            question: 'Can I load existing Markdown files?',
            answer: 'Yes, you can load .md and .txt files directly using the file upload feature.'
        },
        {
            question: 'Is my data private?',
            answer: 'All conversion happens directly in your browser. Your Markdown text and HTML output are never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'Can I use tables in Markdown?',
            answer: 'Yes, tables are supported using pipe syntax with header separators for proper formatting.'
        },
        {
            question: 'What about images in Markdown?',
            answer: 'Images are supported using standard Markdown image syntax with alt text and URL.'
        }
    ],
    'markdownToHtml.securityNote': 'All Markdown to HTML conversion happens locally in your browser using JavaScript. No Markdown content or HTML output is stored on our servers, ensuring complete privacy and security.',
    'markdownToHtml.additionalContent': 'Markdown to HTML conversion is essential for documentation writing, blog content creation, README files, educational content, and static site generation. Combine our converter with other tools like HTML formatters, CSS generators, and syntax highlighters for comprehensive content creation workflows.'
};
