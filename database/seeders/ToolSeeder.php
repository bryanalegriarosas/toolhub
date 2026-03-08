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
                'description' => 'Format and validate JSON'
            ],
            [
                'name' => 'UUID Generator',
                'slug' => 'uuid-generator',
                'icon' => 'Key',
                'description' => 'Generate UUID v4'
            ],
            [
                'name' => 'Password Generator',
                'slug' => 'password-generator',
                'icon' => 'Hash',
                'description' => 'Generate secure passwords'
            ],
            [
                'name' => 'Base64 Encoder',
                'slug' => 'base64-encoder',
                'icon' => 'Binary',
                'description' => 'Encode text to Base64'
            ],
            [
                'name' => 'Base64 Decoder',
                'slug' => 'base64-decoder',
                'icon' => 'Binary',
                'description' => 'Decode Base64 text'
            ],
            [
                'name' => 'URL Encoder',
                'slug' => 'url-encoder',
                'icon' => 'Link',
                'description' => 'Encode text for use in URLs'
            ],
            [
                'name' => 'URL Decoder',
                'slug' => 'url-decoder',
                'icon' => 'Link',
                'description' => 'Decode URL-encoded text'
            ],
        ]);
    }
}
