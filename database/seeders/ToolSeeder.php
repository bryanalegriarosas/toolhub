<?php

namespace Database\Seeders;

use App\Models\Tool;
use Illuminate\Database\Seeder;

class ToolSeeder extends Seeder
{
    public function run(): void
    {
        Tool::truncate();

        $tools = [

            // ================= SEO TOOLS (1) =================
            [
                'name' => 'Meta Tag Generator',
                'slug' => 'meta-tag-generator',
                'icon' => 'Globe',
                'description' => 'Generate SEO meta tags for websites including title, description and keywords.',
                'category_id' => 1
            ],
            [
                'name' => 'Robots.txt Generator',
                'slug' => 'robots-txt-generator',
                'icon' => 'Bot',
                'description' => 'Create robots.txt files to control how search engines crawl your website.',
                'category_id' => 1
            ],
            [
                'name' => 'Sitemap Generator',
                'slug' => 'sitemap-generator',
                'icon' => 'Map',
                'description' => 'Generate XML sitemaps to help search engines index your website.',
                'category_id' => 1
            ],
            [
                'name' => 'Keyword Density Checker',
                'slug' => 'keyword-density-checker',
                'icon' => 'Search',
                'description' => 'Analyze keyword density in text to improve SEO optimization.',
                'category_id' => 1
            ],

            // ================= PDF TOOLS (2) =================
            [
                'name' => 'Merge PDF',
                'slug' => 'merge-pdf',
                'icon' => 'Files',
                'description' => 'Combine multiple PDF files into one document.',
                'category_id' => 2
            ],
            [
                'name' => 'Split PDF',
                'slug' => 'split-pdf',
                'icon' => 'Scissors',
                'description' => 'Split a PDF into multiple separate files.',
                'category_id' => 2
            ],
            [
                'name' => 'JPG to PDF',
                'slug' => 'jpg-to-pdf',
                'icon' => 'FileImage',
                'description' => 'Convert JPG images into a single PDF document easily.',
                'category_id' => 2
            ],
            [
                'name' => 'Image to PDF',
                'slug' => 'image-to-pdf',
                'icon' => 'FileImage',
                'description' => 'Convert images into a single PDF document online.',
                'category_id' => 2
            ],

            // ================= IMAGE TOOLS (3) =================
            [
                'name' => 'Image Compressor',
                'slug' => 'image-compressor',
                'icon' => 'Image',
                'description' => 'Compress images online to reduce file size while maintaining quality.',
                'category_id' => 3
            ],
            [
                'name' => 'Image Resizer',
                'slug' => 'image-resizer',
                'icon' => 'Maximize',
                'description' => 'Resize images to custom dimensions quickly and easily.',
                'category_id' => 3
            ],
            [
                'name' => 'Image Cropper',
                'slug' => 'image-cropper',
                'icon' => 'Crop',
                'description' => 'Crop images online to remove unwanted areas.',
                'category_id' => 3
            ],
            [
                'name' => 'PNG to JPG',
                'slug' => 'png-to-jpg',
                'icon' => 'Image',
                'description' => 'Convert PNG images to JPG format quickly and easily.',
                'category_id' => 3
            ],
            [
                'name' => 'JPG to PNG',
                'slug' => 'jpg-to-png',
                'icon' => 'Image',
                'description' => 'Convert JPG images to PNG format instantly.',
                'category_id' => 3
            ],
            [
                'name' => 'YouTube Thumbnail Downloader',
                'slug' => 'youtube-thumbnail-downloader',
                'icon' => 'Youtube',
                'description' => 'Download thumbnails from any YouTube video in high resolution.',
                'category_id' => 3
            ],
            [
                'name' => 'Image to Base64',
                'slug' => 'image-to-base64',
                'icon' => 'Binary',
                'description' => 'Convert images to Base64 encoded strings.',
                'category_id' => 3
            ],
            [
                'name' => 'Base64 to Image',
                'slug' => 'base64-to-image',
                'icon' => 'Image',
                'description' => 'Convert Base64 strings into images.',
                'category_id' => 3
            ],

            // ================= DEVELOPER TOOLS (4) =================
            [
                'name' => 'JSON Formatter',
                'slug' => 'json-formatter',
                'icon' => 'Code',
                'description' => 'Format and validate JSON',
                'category_id' => 4
            ],
            [
                'name' => 'SQL Formatter',
                'slug' => 'sql-formatter',
                'icon' => 'Database',
                'description' => 'Format SQL queries',
                'category_id' => 4
            ],
            [
                'name' => 'Regex Tester',
                'slug' => 'regex-tester',
                'icon' => 'Search',
                'description' => 'Test regular expressions',
                'category_id' => 4
            ],
            [
                'name' => 'JWT Decoder',
                'slug' => 'jwt-decoder',
                'icon' => 'KeyRound',
                'description' => 'Decode JWT tokens',
                'category_id' => 4
            ],
            [
                'name' => 'HTTP Header Checker',
                'slug' => 'http-header-checker',
                'icon' => 'Server',
                'description' => 'Check HTTP headers',
                'category_id' => 4
            ],
            [
                'name' => 'HTTP Status Code Lookup',
                'slug' => 'http-status-codes',
                'icon' => 'Server',
                'description' => 'Lookup HTTP status codes',
                'category_id' => 4
            ],
            [
                'name' => 'URL Parser',
                'slug' => 'url-parser',
                'icon' => 'Link',
                'description' => 'Analyze URLs',
                'category_id' => 4
            ],
            [
                'name' => 'HTML Minifier',
                'slug' => 'html-minifier',
                'icon' => 'Code',
                'description' => 'Minify HTML',
                'category_id' => 4
            ],
            [
                'name' => 'CSS Minifier',
                'slug' => 'css-minifier',
                'icon' => 'Code',
                'description' => 'Minify CSS',
                'category_id' => 4
            ],
            [
                'name' => 'JavaScript Minifier',
                'slug' => 'javascript-minifier',
                'icon' => 'Code',
                'description' => 'Minify JavaScript',
                'category_id' => 4
            ],

            // ================= TEXT TOOLS (5) =================
            [
                'name' => 'Word Counter',
                'slug' => 'word-counter',
                'icon' => 'FileText',
                'description' => 'Count words and characters',
                'category_id' => 5
            ],
            [
                'name' => 'Text Case Converter',
                'slug' => 'text-case-converter',
                'icon' => 'CaseSensitive',
                'description' => 'Convert text case',
                'category_id' => 5
            ],
            [
                'name' => 'Lorem Ipsum Generator',
                'slug' => 'lorem-ipsum-generator',
                'icon' => 'FileText',
                'description' => 'Generate placeholder text',
                'category_id' => 5
            ],
            [
                'name' => 'Diff Checker',
                'slug' => 'diff-checker',
                'icon' => 'GitCompare',
                'description' => 'Compare text differences',
                'category_id' => 5
            ],

            // ================= CONVERTERS (6) =================
            [
                'name' => 'Base64 Encoder',
                'slug' => 'base64-encoder',
                'icon' => 'Binary',
                'description' => 'Encode Base64',
                'category_id' => 6
            ],
            [
                'name' => 'Base64 Decoder',
                'slug' => 'base64-decoder',
                'icon' => 'Binary',
                'description' => 'Decode Base64',
                'category_id' => 6
            ],
            [
                'name' => 'URL Encoder',
                'slug' => 'url-encoder',
                'icon' => 'Link',
                'description' => 'Encode URLs',
                'category_id' => 6
            ],
            [
                'name' => 'URL Decoder',
                'slug' => 'url-decoder',
                'icon' => 'Link',
                'description' => 'Decode URLs',
                'category_id' => 6
            ],
            [
                'name' => 'HTML Encoder',
                'slug' => 'html-encoder',
                'icon' => 'Code',
                'description' => 'Encode HTML',
                'category_id' => 6
            ],
            [
                'name' => 'HTML Decoder',
                'slug' => 'html-decoder',
                'icon' => 'Code2',
                'description' => 'Decode HTML',
                'category_id' => 6
            ],
            [
                'name' => 'Timestamp Converter',
                'slug' => 'timestamp-converter',
                'icon' => 'Clock',
                'description' => 'Convert timestamps',
                'category_id' => 6
            ],
            [
                'name' => 'Markdown to HTML',
                'slug' => 'markdown-to-html',
                'icon' => 'FileCode',
                'description' => 'Convert Markdown to HTML',
                'category_id' => 6
            ],
            [
                'name' => 'Color Converter',
                'slug' => 'color-converter',
                'icon' => 'Palette',
                'description' => 'Convert colors',
                'category_id' => 6
            ],
            [
                'name' => 'JSON to CSV Converter',
                'slug' => 'json-to-csv',
                'icon' => 'FileSpreadsheet',
                'description' => 'Convert JSON data into CSV format easily.',
                'category_id' => 6
            ],
            [
                'name' => 'Text to Base64',
                'slug' => 'text-to-base64',
                'icon' => 'Binary',
                'description' => 'Encode plain text into Base64 format.',
                'category_id' => 6
            ],

            // ================= SECURITY (7) =================
            [
                'name' => 'Password Generator',
                'slug' => 'password-generator',
                'icon' => 'Hash',
                'description' => 'Generate passwords',
                'category_id' => 7
            ],
            [
                'name' => 'Hash Generator',
                'slug' => 'hash-generator',
                'icon' => 'Hash',
                'description' => 'Generate hashes',
                'category_id' => 7
            ],
            [
                'name' => 'UUID Generator',
                'slug' => 'uuid-generator',
                'icon' => 'Key',
                'description' => 'Generate UUIDs',
                'category_id' => 7
            ],
            [
                'name' => 'Random String Generator',
                'slug' => 'random-string-generator',
                'icon' => 'Shuffle',
                'description' => 'Generate random strings',
                'category_id' => 7
            ],

            // ================= GENERATORS (8) =================
            [
                'name' => 'QR Code Generator',
                'slug' => 'qr-code-generator',
                'icon' => 'QrCode',
                'description' => 'Generate QR codes',
                'category_id' => 8
            ],
            [
                'name' => 'Random Number Generator',
                'slug' => 'random-number-generator',
                'icon' => 'Hash',
                'description' => 'Generate random numbers',
                'category_id' => 8
            ],
            [
                'name' => 'Slug Generator',
                'slug' => 'slug-generator',
                'icon' => 'Tag',
                'description' => 'Generate slugs',
                'category_id' => 8
            ],

            // ================= MEDIA (9) =================
            [
                'name' => 'Text to Speech',
                'slug' => 'text-to-speech',
                'icon' => 'Volume2',
                'description' => 'Convert text to speech',
                'category_id' => 9
            ],
            [
                'name' => 'Speech to Text',
                'slug' => 'speech-to-text',
                'icon' => 'Mic',
                'description' => 'Convert speech to text',
                'category_id' => 9
            ],

        ];

        foreach ($tools as $tool) {
            Tool::firstOrCreate(['slug' => $tool['slug']], $tool);
        }
    }
}
