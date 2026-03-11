<template>
    <Head>
        <meta
            name="description"
            content="Convert Markdown text to HTML with live preview and syntax highlighting."
        />
    </Head>

    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 class="text-2xl font-bold">Markdown to HTML</h2>

        <div class="flex flex-wrap gap-4">
            <label class="flex items-center gap-2">
                <input type="checkbox" v-model="livePreview" />
                <span>Live Preview</span>
            </label>
            <label class="flex items-center gap-2">
                <span>Load file:</span>
                <input ref="fileInput" type="file" @change="loadFile" class="form-input" accept=".md,.txt" />
            </label>
        </div>

        <div class="space-y-6">
            <!-- Markdown Input -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">
                    Markdown Input
                </label>
                <div class="flex gap-2 mb-2">
                    <button
                        @click="insertMarkdown('# ', 'heading')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Heading"
                    >
                        H1
                    </button>
                    <button
                        @click="insertMarkdown('**', 'bold')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Bold"
                    >
                        <strong>B</strong>
                    </button>
                    <button
                        @click="insertMarkdown('*', 'italic')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Italic"
                    >
                        <em>I</em>
                    </button>
                    <button
                        @click="insertMarkdown('`', 'code')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Inline Code"
                    >
                        &lt;/&gt;
                    </button>
                    <button
                        @click="insertMarkdown('[', 'link')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Link"
                    >
                        🔗
                    </button>
                    <button
                        @click="insertMarkdown('- ', 'list')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="List"
                    >
                        ≡
                    </button>
                    <button
                        @click="insertMarkdown('> ', 'quote')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Quote"
                    >
                        "
                    </button>
                    <button
                        @click="insertMarkdown('```\n', 'codeblock')"
                        class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                        title="Code Block"
                    >
                        &lt;/&gt;
                    </button>
                </div>
                <textarea
                    v-model="markdown"
                    @input="handleInput"
                    placeholder="Enter your Markdown here..."
                    class="w-full h-64 p-4 border rounded-lg font-mono text-sm focus:ring focus:ring-blue-200"
                ></textarea>
                <div class="text-sm text-gray-500">
                    Characters: {{ markdown.length }} | Lines: {{ lineCount }}
                </div>
            </div>

            <!-- HTML Output -->
            <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">
                    HTML Output
                </label>
                <div class="border rounded-lg h-64 overflow-auto bg-gray-50">
                    <div 
                        v-if="html"
                        class="p-4 prose prose-sm max-w-none"
                        v-html="html"
                    ></div>
                    <div v-else class="p-4 text-gray-400 italic">
                        HTML output will appear here...
                    </div>
                </div>
                <div class="text-sm text-gray-500">
                    HTML Characters: {{ html.length }}
                </div>
            </div>
        </div>

        <!-- Raw HTML Code -->
        <div v-if="html" class="space-y-2">
            <div class="flex items-center justify-between">
                <label class="block text-sm font-medium text-gray-700">
                    Raw HTML Code
                </label>
                <button
                    @click="copyHtml"
                    class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                >
                    Copy HTML
                </button>
            </div>
            <pre class="w-full h-48 p-4 border rounded-lg bg-gray-900 text-green-400 text-sm overflow-auto">{{ html }}</pre>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3">
            <button
                @click="convert"
                :disabled="!markdown"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
                Convert to HTML
            </button>

            <button
                @click="copyHtml"
                :disabled="!html"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
                Copy HTML
            </button>

            <button
                @click="downloadHtml"
                :disabled="!html"
                class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
                Download HTML
            </button>

            <button
                @click="downloadMarkdown"
                :disabled="!markdown"
                class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
            >
                Download Markdown
            </button>

            <button
                @click="clearAll"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
                Clear All
            </button>
        </div>

        <!-- Sample Markdown -->
        <div class="border-t pt-6">
            <h3 class="font-semibold mb-3">Sample Markdown</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    @click="loadSample('basic')"
                    class="p-3 border rounded-lg hover:bg-gray-50 text-left"
                >
                    <div class="font-medium">Basic Example</div>
                    <div class="text-sm text-gray-600">Headings, lists, links</div>
                </button>
                <button
                    @click="loadSample('advanced')"
                    class="p-3 border rounded-lg hover:bg-gray-50 text-left"
                >
                    <div class="font-medium">Advanced Example</div>
                    <div class="text-sm text-gray-600">Code blocks, tables, images</div>
                </button>
                <button
                    @click="loadSample('documentation')"
                    class="p-3 border rounded-lg hover:bg-gray-50 text-left"
                >
                    <div class="font-medium">Documentation Style</div>
                    <div class="text-sm text-gray-600">API documentation format</div>
                </button>
                <button
                    @click="loadSample('readme')"
                    class="p-3 border rounded-lg hover:bg-gray-50 text-left"
                >
                    <div class="font-medium">README Style</div>
                    <div class="text-sm text-gray-600">Project README format</div>
                </button>
            </div>
        </div>

        <ToolSeoContent
            title="Markdown to HTML Converter"
            description="Convert Markdown text to HTML with live preview and syntax highlighting."
            :steps="steps"
            :faqs="faqs"
        />
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const steps = [
    "Enter or paste your Markdown text",
    "Convert to HTML instantly or use live preview",
    "Copy or download the HTML output",
    "Use toolbar buttons for quick formatting"
];

const faqs = [
    { 
        question: "What Markdown syntax is supported?", 
        answer: "Common syntax including headings, bold, italic, links, lists, code blocks, tables, and images." 
    },
    { 
        question: "Can I use live preview?", 
        answer: "Yes, enable live preview to see HTML output as you type." 
    },
    { 
        question: "Can I download the converted HTML?", 
        answer: "Yes, you can download both the original Markdown and converted HTML files." 
    }
];

const markdown = ref("");
const html = ref("");
const livePreview = ref(true);
const fileInput = ref(null);

const lineCount = computed(() => {
    return markdown.value.split('\n').length;
});

// Simple Markdown to HTML converter
const convertMarkdown = (text) => {
    if (!text) return '';
    
    let html = text;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Code
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');
    
    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre><code class="language-${lang || 'text'}">${code}</code></pre>`;
    });
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
    
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    
    // Lists (basic)
    html = html.replace(/^\* (.+)/gim, '<li>$1</li>');
    html = html.replace(/^- (.+)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Blockquotes
    html = html.replace(/^> (.+)/gim, '<blockquote>$1</blockquote>');
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    html = html.replace(/^\*\*\*$/gim, '<hr>');
    
    // Wrap in paragraphs
    if (html && !html.includes('<h1>') && !html.includes('<h2>') && !html.includes('<h3>') && 
        !html.includes('<ul>') && !html.includes('<blockquote>') && !html.includes('<pre>')) {
        html = `<p>${html}</p>`;
    }
    
    return html;
};

const convert = () => {
    html.value = convertMarkdown(markdown.value);
};

const handleInput = () => {
    if (livePreview.value) {
        convert();
    }
};

const insertMarkdown = (syntax, type) => {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.value.substring(start, end);
    let newText = '';
    
    switch(type) {
        case 'heading':
            newText = `# ${selectedText || 'Heading'}`;
            break;
        case 'bold':
            newText = `**${selectedText || 'Bold text'}**`;
            break;
        case 'italic':
            newText = `*${selectedText || 'Italic text'}*`;
            break;
        case 'code':
            newText = `\`${selectedText || 'code'}\``;
            break;
        case 'link':
            newText = `[${selectedText || 'Link text'}](url)`;
            break;
        case 'list':
            newText = `- ${selectedText || 'List item'}`;
            break;
        case 'quote':
            newText = `> ${selectedText || 'Quote'}`;
            break;
        case 'codeblock':
            newText = `\`\`\`\n${selectedText || 'Code block'}\n\`\`\``;
            break;
    }
    
    markdown.value = markdown.value.substring(0, start) + newText + markdown.value.substring(end);
    
    // Set cursor position
    setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + newText.length, start + newText.length);
    }, 0);
};

const copyHtml = () => {
    if (!html.value) return;
    navigator.clipboard.writeText(html.value);
};

const downloadHtml = () => {
    if (!html.value) return;
    const blob = new Blob([html.value], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.html";
    a.click();
    URL.revokeObjectURL(url);
};

const downloadMarkdown = () => {
    if (!markdown.value) return;
    const blob = new Blob([markdown.value], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.md";
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    markdown.value = "";
    html.value = "";
    if (fileInput.value) fileInput.value.value = null;
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        markdown.value = ev.target.result;
        if (livePreview.value) convert();
    };
    reader.readAsText(file);
};

const loadSample = (type) => {
    const samples = {
        basic: `# Basic Markdown Example

## This is a heading

This is a paragraph with **bold text** and *italic text*.

### Lists

- Item 1
- Item 2
- Item 3

### Links

[Visit GitHub](https://github.com)

### Code

Here is some inline code: \`console.log('Hello')\`

> This is a blockquote
> It can span multiple lines`,

        advanced: `# Advanced Markdown Example

## Code Blocks

\`\`\`javascript
function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
greet('World');
\`\`\`

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Headers | ✅ | Supported |
| Tables | ✅ | Supported |
| Images | ✅ | Supported |

## Images

![Markdown Logo](https://markdown-here.com/img/icon256.png)

## Mixed Content

You can combine **bold**, *italic*, and \`code\` in the same line.

### Nested Lists

1. First item
   - Nested item 1
   - Nested item 2
2. Second item

---

## Horizontal Rule

This is above the horizontal rule.`,

        documentation: `# API Documentation

## Overview

This document describes the API endpoints for our service.

## Authentication

All API requests require authentication using an API key.

\`\`\`bash
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.example.com/data
\`\`\`

## Endpoints

### GET /users

Retrieve a list of users.

**Parameters:**
- \`page\` (optional): Page number (default: 1)
- \`limit\` (optional): Items per page (default: 10)

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 1
}
\`\`\`

### POST /users

Create a new user.

**Request Body:**
\`\`\`json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
\`\`\`

## Error Handling

The API returns standard HTTP status codes. In case of errors, a detailed message is provided.

> **Note:** Always handle API errors gracefully in your application.`,

        readme: `# Project Name

A brief description of what this project does and who it's for.

## Installation

\`\`\`bash
npm install my-project
\`\`\`

Or using yarn:

\`\`\`bash
yarn add my-project
\`\`\`

## Usage

\`\`\`javascript
import myProject from 'my-project';

// Your code here
const result = myProject.doSomething();
console.log(result);
\`\`\`

## Features

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@your-twitter](https://twitter.com/your-twitter)

Project Link: [https://github.com/your-username/your-project](https://github.com/your-username/your-project)`
    };
    
    markdown.value = samples[type] || '';
    if (livePreview.value) convert();
};

// Auto-convert when live preview is enabled
watch(markdown, () => {
    if (livePreview.value) {
        convert();
    }
});

// Initial conversion if there's content
if (markdown.value && livePreview.value) {
    convert();
}
</script>