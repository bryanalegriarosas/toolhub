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
        Tool::insert([
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
                "icon" => "hash",
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
                "name" => "IP Lookup",
                "slug" => "ip-lookup",
                "icon" => "Globe",
                "description" => "Lookup information about an IP address including location and ISP.",
                "category_id" => 2
            ],
            [
                "name" => "HTTP Header Checker",
                "slug" => "http-header-checker",
                "icon" => "Server",
                "description" => "Check the HTTP headers returned by any website or URL.",
                "category_id" => 1
            ]
        ]);
    }
}
