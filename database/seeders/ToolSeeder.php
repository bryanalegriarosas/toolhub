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
        ]);
    }
}
