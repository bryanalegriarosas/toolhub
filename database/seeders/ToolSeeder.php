<?php

namespace Database\Seeders;

use App\Models\Tool;
use Illuminate\Database\Seeder;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tool::truncate();
        
        $tools = [
            [
                'name' => 'JSON Formatter',
                'slug' => 'json-formatter',
                'icon' => 'Code',
                'description' => 'Format and validate JSON',
                'category_id' => 1
            ],
            [
                'name' => 'UUID Generator',
                'slug' => 'uuid-generator',
                'icon' => 'Key',
                'description' => 'Generate UUID v4',
                'category_id' => 1
            ],
            [
                'name' => 'Password Generator',
                'slug' => 'password-generator',
                'icon' => 'Hash',
                'description' => 'Generate secure passwords',
                'category_id' => 2
            ],
            [
                'name' => 'Base64 Encoder',
                'slug' => 'base64-encoder',
                'icon' => 'Binary',
                'description' => 'Encode text to Base64',
                'category_id' => 3
            ],
            [
                'name' => 'Base64 Decoder',
                'slug' => 'base64-decoder',
                'icon' => 'Binary',
                'description' => 'Decode Base64 text',
                'category_id' => 3
            ],
            [
                'name' => 'URL Encoder',
                'slug' => 'url-encoder',
                'icon' => 'Link',
                'description' => 'Encode text for use in URLs',
                'category_id' => 3
            ],
            [
                'name' => 'URL Decoder',
                'slug' => 'url-decoder',
                'icon' => 'Link',
                'description' => 'Decode URL-encoded text',
                'category_id' => 3
            ],
            [
                "name" => "Timestamp Converter",
                "slug" => "timestamp-converter",
                "icon" => "Clock",
                "description" => "Convert between Unix timestamps and human-readable dates",
                "category_id" => 1
            ],
            [
                "name" => "Word Counter",
                "slug" => "word-counter",
                "icon" => "FileText",
                "description" => "Count words and characters in text",
                "category_id" => 1
            ],
            [
                "name" => "Slug Generator",
                "slug" => "slug-generator",
                "icon" => "Tag",
                "description" => "Generate URL-friendly slugs from text",
                "category_id" => 1
            ],
            [
                "name" => "Hash Generator",
                "slug" => "hash-generator",
                "icon" => "Hash",
                "description" => "Generate secure hashes such as SHA-1, SHA-256 and SHA-512 from text instantly.",
                "category_id" => 2
            ],
            [
                "name" => "JWT Decoder",
                "slug" => "jwt-decoder",
                "icon" => "KeyRound",
                "description" => "Decode and inspect JSON Web Tokens (JWT) to view header, payload and signature.",
                "category_id" => 1
            ],
            [
                "name" => "Random String Generator",
                "slug" => "random-string-generator",
                "icon" => "Shuffle",
                "description" => "Generate random strings for API keys, tokens or passwords with customizable length and characters.",
                "category_id" => 2
            ],
            [
                "name" => "Text Case Converter",
                "slug" => "text-case-converter",
                "icon" => "CaseSensitive",
                "description" => "Convert text to uppercase, lowercase, camelCase, snake_case or kebab-case instantly.",
                "category_id" => 1
            ],
            [
                "name" => "HTML Encoder",
                "slug" => "html-encoder",
                "icon" => "Code",
                "description" => "Encode HTML characters into safe HTML entities to display code without executing it.",
                "category_id" => 3
            ],
            [
                "name" => "HTML Decoder",
                "slug" => "html-decoder",
                "icon" => "Code2",
                "description" => "Decode HTML entities back into normal characters instantly.",
                "category_id" => 3
            ],
            [
                "name" => "Regex Tester",
                "slug" => "regex-tester",
                "icon" => "Search",
                "description" => "Test regular expressions against text and instantly see matching results.",
                "category_id" => 1
            ],
            [
                "name" => "HTTP Status Code Lookup",
                "slug" => "http-status-codes",
                "icon" => "Server",
                "description" => "Lookup HTTP status codes and learn what each response code means for web requests.",
                "category_id" => 1
            ],
            [
                "name" => "URL Parser",
                "slug" => "url-parser",
                "icon" => "Link",
                "description" => "Parse and analyze URLs to view protocol, host, path and query parameters.",
                "category_id" => 1
            ],
            [
                "name" => "Color Converter",
                "slug" => "color-converter",
                "icon" => "Palette",
                "description" => "Convert colors between HEX and RGB formats for web development and design.",
                "category_id" => 1
            ],
            [
                "name" => "Diff Checker",
                "slug" => "diff-checker",
                "icon" => "GitCompare",
                "description" => "Compare two pieces of text and highlight the differences instantly.",
                "category_id" => 1
            ],
            [
                "name" => "Markdown to HTML",
                "slug" => "markdown-to-html",
                "icon" => "FileCode",
                "description" => "Convert Markdown text into HTML instantly.",
                "category_id" => 1
            ],
            [
                "name" => "SQL Formatter",
                "slug" => "sql-formatter",
                "icon" => "Database",
                "description" => "Format and beautify SQL queries to improve readability.",
                "category_id" => 1
            ],
            [
                "name" => "HTTP Header Checker",
                "slug" => "http-header-checker",
                "icon" => "Server",
                "description" => "Check the HTTP headers returned by any website or URL.",
                "category_id" => 1
            ],
            [
                "name" => "Image Compressor",
                "slug" => "image-compressor",
                "icon" => "Image",
                "description" => "Compress images online to reduce file size while maintaining quality.",
                "category_id" => 4
            ],
            [
                "name" => "Image Resizer",
                "slug" => "image-resizer",
                "icon" => "Maximize",
                "description" => "Resize images to custom dimensions quickly and easily.",
                "category_id" => 4
            ],
            [
                "name" => "Image to Base64",
                "slug" => "image-to-base64",
                "icon" => "Binary",
                "description" => "Convert images to Base64 encoded strings for embedding in HTML or CSS.",
                "category_id" => 3
            ],
            [
                "name" => "Base64 to Image",
                "slug" => "base64-to-image",
                "icon" => "Image",
                "description" => "Decode Base64 strings and convert them back into image files.",
                "category_id" => 3
            ],
            [
                "name" => "Image Cropper",
                "slug" => "image-cropper",
                "icon" => "Crop",
                "description" => "Crop images online to remove unwanted areas.",
                "category_id" => 4
            ],
            [
                "name" => "JPG to PDF",
                "slug" => "jpg-to-pdf",
                "icon" => "FileImage",
                "description" => "Convert JPG images into a single PDF document easily.",
                "category_id" => 4
            ],
            [
                "name" => "Merge PDF",
                "slug" => "merge-pdf",
                "icon" => "Files",
                "description" => "Combine multiple PDF files into one document.",
                "category_id" => 4
            ],
            [
                "name" => "Split PDF",
                "slug" => "split-pdf",
                "icon" => "Scissors",
                "description" => "Split a PDF into multiple separate files.",
                "category_id" => 4
            ],
            [
                "name" => "YouTube Thumbnail Downloader",
                "slug" => "youtube-thumbnail-downloader",
                "icon" => "Youtube",
                "description" => "Download thumbnails from any YouTube video in high resolution.",
                "category_id" => 4
            ],
            [
                "name" => "Meta Tag Generator",
                "slug" => "meta-tag-generator",
                "icon" => "Globe",
                "description" => "Generate SEO meta tags for websites including title, description and keywords.",
                "category_id" => 4
            ],
            [
                "name" => "Robots.txt Generator",
                "slug" => "robots-txt-generator",
                "icon" => "Bot",
                "description" => "Create robots.txt files to control how search engines crawl your website.",
                "category_id" => 2
            ],
            [
                "name" => "Sitemap Generator",
                "slug" => "sitemap-generator",
                "icon" => "Map",
                "description" => "Generate XML sitemaps to help search engines index your website.",
                "category_id" => 2
            ],
            [
                "name" => "Keyword Density Checker",
                "slug" => "keyword-density-checker",
                "icon" => "Search",
                "description" => "Analyze keyword density in text to improve SEO optimization.",
                "category_id" => 2
            ],
            [
                "name" => "Lorem Ipsum Generator",
                "slug" => "lorem-ipsum-generator",
                "icon" => "FileText",
                "description" => "Generate placeholder Lorem Ipsum text for design and development projects.",
                "category_id" => 1
            ],
            [
                "name" => "QR Code Generator",
                "slug" => "qr-code-generator",
                "icon" => "QrCode",
                "description" => "Generate QR codes from text or URLs instantly.",
                "category_id" => 4
            ],
            [
                "name" => "Random Number Generator",
                "slug" => "random-number-generator",
                "icon" => "Hash",
                "description" => "Generate random numbers between a minimum and maximum value.",
                "category_id" => 1
            ],
            [
                "name" => "Image to PDF",
                "slug" => "image-to-pdf",
                "icon" => "FileImage",
                "description" => "Convert images into a single PDF document online.",
                "category_id" => 4
            ],
            [
                "name" => "PNG to JPG",
                "slug" => "png-to-jpg",
                "icon" => "Image",
                "description" => "Convert PNG images to JPG format quickly and easily.",
                "category_id" => 4
            ],
            [
                "name" => "JPG to PNG",
                "slug" => "jpg-to-png",
                "icon" => "Image",
                "description" => "Convert JPG images to PNG format instantly.",
                "category_id" => 4
            ],
            [
                "name" => "Text to Speech",
                "slug" => "text-to-speech",
                "icon" => "Volume2",
                "description" => "Convert text into natural sounding speech online.",
                "category_id" => 1
            ],
            [
                "name" => "Speech to Text",
                "slug" => "speech-to-text",
                "icon" => "Mic",
                "description" => "Convert spoken audio into written text instantly.",
                "category_id" => 1
            ],
            [
                "name" => "HTML Minifier",
                "slug" => "html-minifier",
                "icon" => "Code",
                "description" => "Minify HTML code to reduce file size and improve loading speed.",
                "category_id" => 1
            ],
            [
                "name" => "CSS Minifier",
                "slug" => "css-minifier",
                "icon" => "Code",
                "description" => "Minify CSS code to optimize performance and reduce file size.",
                "category_id" => 1
            ],
            [
                "name" => "JavaScript Minifier",
                "slug" => "javascript-minifier",
                "icon" => "Code",
                "description" => "Minify JavaScript code to reduce file size and improve website performance.",
                "category_id" => 1
            ],
        ];

        foreach ($tools as $tool) {
            Tool::firstOrCreate(['slug' => $tool['slug']], $tool);
        }
    }
}
