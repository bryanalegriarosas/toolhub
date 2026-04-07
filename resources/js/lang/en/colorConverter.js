export default {
    'colorConverter.title': 'Color Converter - HEX to RGB/HSL Tool',
    'colorConverter.description': 'Convert colors between HEX, RGB, and HSL formats instantly with visual preview.',
    'colorConverter.hex': 'HEX',
    'colorConverter.rgb': 'RGB',
    'colorConverter.hsl': 'HSL',
    'colorConverter.random_color': 'Random Color',
    'colorConverter.clear': 'Clear',
    'colorConverter.save_to_history': 'Save to History',
    'colorConverter.recent_colors': 'Recent Colors',
    'colorConverter.clear_history': 'Clear history',
    'colorConverter.invalid_hex_format': 'Invalid HEX format',
    'colorConverter.placeholder_hex': '#000000',
    
    // SEO Content specific to Color Converter
    'colorConverter.mainDescription': 'Free online color converter tool for HEX to RGB/HSL conversion with visual preview. Perfect for web designers and developers.',
    'colorConverter.extendedDescription': 'Our comprehensive color converter tool helps you convert colors between HEX, RGB, and HSL formats instantly. Includes real-time visual preview, copy functionality, color history, and random color generation. All operations happen in your browser for complete privacy.',
    'colorConverter.features': [
        {
            title: 'Multiple Format Support',
            description: 'Convert between HEX, RGB, and HSL color formats seamlessly'
        },
        {
            title: 'Visual Color Preview',
            description: 'See real-time color preview as you type or convert'
        },
        {
            title: 'Copy to Clipboard',
            description: 'One-click copy to clipboard for all color formats'
        },
        {
            title: 'Color History',
            description: 'Save and manage your recent color conversions locally'
        },
        {
            title: 'Random Color Generator',
            description: 'Generate random colors for inspiration and testing'
        },
        {
            title: 'Format Validation',
            description: 'Real-time validation of HEX color format with error messages'
        },
        {
            title: 'Mobile Responsive',
            description: 'Responsive design optimized for mobile and desktop use'
        },
        {
            title: 'Privacy First',
            description: 'All conversion happens locally in your browser with no server storage'
        }
    ],
    'colorConverter.steps': [
        'Enter a color code in HEX format (e.g., #ff5733)',
        'See automatic preview and conversions to RGB and HSL',
        'Copy the format you need or save color to your local history',
        'Use random color generator for inspiration'
    ],
    'colorConverter.examples': [
        {
            title: 'Convert Brand Color',
            description: 'Convert brand color from HEX to RGB and HSL for web development',
            code: 'Input HEX: #3498db',
            result: 'RGB: rgb(52, 152, 219) | HSL: hsl(204, 70%, 53%)'
        },
        {
            title: 'Material Design Colors',
            description: 'Convert Material Design color palette',
            code: 'Input HEX: #f44336',
            result: 'RGB: rgb(244, 67, 54) | HSL: hsl(4, 90%, 58%)',
            steps: [
                'Enter HEX color code',
                'View RGB for CSS opacity',
                'Use HSL for color variations',
                'Copy desired format for your project'
            ]
        },
        {
            title: 'CSS Custom Properties',
            description: 'Convert colors for CSS variables',
            code: 'Input HEX: #2ecc71',
            result: 'RGB: rgb(46, 204, 113) | HSL: hsl(145, 63%, 49%)'
        }
    ],
    'colorConverter.useCases': [
        {
            title: 'Web Development',
            description: 'Developers converting colors for CSS and web design projects',
            example: 'Frontend developer converting brand colors for website styling'
        },
        {
            title: 'Graphic Design',
            description: 'Designers working with color palettes and brand guidelines',
            example: 'Graphic designer creating color schemes for client projects'
        },
        {
            title: 'UI/UX Design',
            description: 'Designers creating user interfaces with consistent color systems',
            example: 'UX designer converting design system colors for implementation'
        },
        {
            title: 'Brand Management',
            description: 'Marketing teams managing brand color consistency',
            example: 'Brand manager ensuring color consistency across materials'
        },
        {
            title: 'Color Palette Creation',
            description: 'Artists and designers creating color harmonies and palettes',
            example: 'Artist exploring color combinations for digital artwork'
        },
        {
            title: 'CSS Development',
            description: 'Developers working with CSS custom properties and themes',
            example: 'CSS developer creating theme variables for dark/light modes'
        }
    ],
    'colorConverter.technicalDetails': 'Our color converter uses standard color space conversion algorithms. HEX to RGB conversion parses hexadecimal values and converts them to decimal RGB components. RGB to HSL conversion uses the standard formula to transform RGB color space to HSL (Hue, Saturation, Lightness) for more intuitive color manipulation. All calculations happen locally using JavaScript for optimal performance.',
    'colorConverter.bestPractices': [
        {
            title: 'Consistent Color Usage',
            tip: 'Maintain consistent color formats throughout your project for better maintainability.'
        },
        {
            title: 'Color Accessibility',
            tip: 'Test color contrast ratios to ensure accessibility compliance in your designs.'
        },
        {
            title: 'Color Validation',
            tip: 'Always validate color codes before using them in production environments.'
        },
        {
            title: 'Format Selection',
            tip: 'Use HEX for web colors, RGB for opacity, and HSL for color manipulation.'
        }
    ],
    'colorConverter.commonErrors': [
        {
            error: 'Invalid HEX Format',
            cause: 'Input contains invalid characters or incorrect HEX format',
            solution: 'Ensure HEX code starts with # and contains 3 or 6 valid hexadecimal characters.',
            prevention: 'Use the visual preview to validate colors before copying.'
        },
        {
            error: 'Color Range Issues',
            cause: 'RGB values outside 0-255 range or HSL values outside valid ranges',
            solution: 'Ensure RGB values are between 0-255 and HSL values are in correct ranges.',
            prevention: 'Use our converter to validate color ranges automatically.'
        },
        {
            error: 'Format Confusion',
            cause: 'Mixing different color formats without proper conversion',
            solution: 'Always convert colors to the required format before using them.',
            prevention: 'Use consistent color format naming and documentation.'
        },
        {
            error: 'Browser Compatibility',
            cause: 'Using color formats not supported by target browsers',
            solution: 'Test colors in target browsers and use fallback formats.',
            prevention: 'Use widely supported color formats like HEX and RGB.'
        }
    ],
    'colorConverter.alternatives': [
        {
            name: 'Graphics Software',
            useCase: 'Adobe Photoshop, GIMP, Figma color pickers',
            pros: 'Advanced features, Professional tools, Integration with design workflows',
            cons: 'Expensive licenses, Complex interface, Overkill for simple conversion',
            comparison: 'Our tool provides instant conversion without software installation or cost.'
        },
        {
            name: 'Online Color Tools',
            useCase: 'Coolors, Adobe Color, Paletton color tools',
            pros: 'Color palette generation, Advanced features, Community features',
            cons: 'Internet dependency, Privacy concerns, Limited conversion options',
            comparison: 'Our tool works offline with complete privacy and comprehensive conversion.'
        },
        {
            name: 'IDE Extensions',
            useCase: 'VS Code, Sublime Text color picker extensions',
            pros: 'IDE integration, Workflow integration, Quick access',
            cons: 'IDE specific, Limited features, Setup complexity',
            comparison: 'Our tool provides comprehensive conversion without development environment dependencies.'
        },
        {
            name: 'Command Line Tools',
            useCase: 'Color conversion scripts and command-line utilities',
            pros: 'Scriptable, Advanced options, System integration',
            cons: 'Technical knowledge required, No GUI, Complex setup',
            comparison: 'Our tool provides user-friendly interface with visual feedback without technical setup.'
        }
    ],
    'colorConverter.relatedTools': [
        {
            name: 'Color Palette Generator',
            description: 'Generate color palettes and color schemes',
            url: '/color-palette-generator'
        },
        {
            name: 'Color Picker',
            description: 'Pick colors from images and websites',
            url: '/color-picker'
        },
        {
            name: 'Gradient Generator',
            description: 'Create CSS gradients with multiple colors',
            url: '/gradient-generator'
        },
        {
            name: 'CSS Color Variables',
            description: 'Generate CSS custom properties for colors',
            url: '/css-color-variables'
        },
        {
            name: 'Contrast Checker',
            description: 'Check color contrast for accessibility',
            url: '/contrast-checker'
        },
        {
            name: 'Colorblind Simulator',
            description: 'Simulate how colors appear to colorblind users',
            url: '/colorblind-simulator'
        },
        {
            name: 'Color Mixer',
            description: 'Mix and blend colors to create new shades',
            url: '/color-mixer'
        },
        {
            name: 'Color Extractor',
            description: 'Extract colors from images and URLs',
            url: '/color-extractor'
        }
    ],
    'colorConverter.faqs': [
        {
            question: 'What formats does this tool support?',
            answer: 'Currently it allows input of HEX codes and converts them to RGB and HSL formats automatically.'
        },
        {
            question: 'Is history saved permanently?',
            answer: 'The color history is maintained during your current browsing session and stored locally in your browser.'
        },
        {
            question: 'Can I use this for professional design work?',
            answer: 'Yes, our converter provides accurate color conversions suitable for professional web and graphic design projects.'
        },
        {
            question: 'What is the difference between RGB and HSL?',
            answer: 'RGB represents colors as Red, Green, Blue values, while HSL uses Hue, Saturation, Lightness for more intuitive color manipulation.'
        },
        {
            question: 'Can I convert RGB to HEX?',
            answer: 'Currently the tool accepts HEX input and converts to RGB/HSL. RGB to HEX conversion feature is coming soon.'
        },
        {
            question: 'Is my data private?',
            answer: 'All color conversion happens directly in your browser. Your color data is never sent to our servers, ensuring complete privacy.'
        },
        {
            question: 'What color formats are best for web development?',
            answer: 'HEX is common for web colors, RGB is useful for opacity, and HSL is great for programmatic color manipulation.'
        },
        {
            question: 'Can I use random colors for inspiration?',
            answer: 'Yes, the random color generator creates random HEX colors perfect for design inspiration and testing.'
        }
    ],
    'colorConverter.securityNote': 'All color conversion happens locally in your browser using JavaScript. No color data is stored on our servers, ensuring complete privacy and security.',
    'colorConverter.additionalContent': 'Color conversion is essential for web development, graphic design, UI/UX design, brand management, and color palette creation. Combine our converter with other tools like color palette generators, contrast checkers, and gradient generators for comprehensive color workflow management.'
};
