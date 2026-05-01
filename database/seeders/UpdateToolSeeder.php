<?php

namespace Database\Seeders;

use App\Models\Tool;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UpdateToolSeeder extends Seeder
{
    public function run(): void
    {
        $tools = [

            // ================= FILE TOOLS =================
            ['name' => 'Merge PDF', 'icon' => 'Files', 'category' => 'File Tools'],
            ['name' => 'Split PDF', 'icon' => 'Scissors', 'category' => 'File Tools'],
            ['name' => 'JPG to PDF', 'icon' => 'FileImage', 'category' => 'File Tools'],

            // ================= IMAGE TOOLS =================
            ['name' => 'Image Compressor', 'icon' => 'Image', 'category' => 'Image Tools'],
            ['name' => 'Image Resizer', 'icon' => 'Maximize', 'category' => 'Image Tools'],
            ['name' => 'PNG to JPG', 'icon' => 'Image', 'category' => 'Image Tools'],
            ['name' => 'JPG to PNG', 'icon' => 'Image', 'category' => 'Image Tools'],
            ['name' => 'YouTube Thumbnail Downloader', 'icon' => 'Youtube', 'category' => 'Image Tools'],

            // ================= TEXT TOOLS =================
            ['name' => 'Word Counter', 'icon' => 'FileText', 'category' => 'Text Tools'],
            ['name' => 'Text Case Converter', 'icon' => 'CaseSensitive', 'category' => 'Text Tools'],
            ['name' => 'Lorem Ipsum Generator', 'icon' => 'FileText', 'category' => 'Text Tools'],
            ['name' => 'Diff Checker', 'icon' => 'GitCompare', 'category' => 'Text Tools'],

            // ================= GENERATORS =================
            ['name' => 'Password Generator', 'icon' => 'Hash', 'category' => 'Generators'],
            ['name' => 'QR Code Generator', 'icon' => 'QrCode', 'category' => 'Generators'],
            ['name' => 'Random Number Generator', 'icon' => 'Hash', 'category' => 'Generators'],
        ];

        foreach ($tools as $tool) {

            $category = Category::where('slug', Str::slug($tool['category']))->first();

            if (!$category) {
                throw new \Exception("Category not found: " . $tool['category']);
            }

            Tool::updateOrCreate(
                ['slug' => Str::slug($tool['name'])],
                [
                    'name' => $tool['name'],
                    'icon' => $tool['icon'],
                    'description' => $this->getDescription($tool['name']),
                    'category_id' => $category->id,
                    'active' => true,
                ]
            );
        }
    }

    private function getDescription($name): string
    {
        return match ($name) {

            // FILE
            'Merge PDF' => 'Combine multiple PDF files into a single document quickly and easily.',
            'Split PDF' => 'Split PDF files into multiple documents or extract pages.',
            'JPG to PDF' => 'Convert JPG images into a single PDF file easily.',

            // IMAGE
            'Image Compressor' => 'Compress images while maintaining quality.',
            'Image Resizer' => 'Resize images to custom dimensions.',
            'PNG to JPG' => 'Convert PNG images to JPG format.',
            'JPG to PNG' => 'Convert JPG images to PNG format.',
            'YouTube Thumbnail Downloader' => 'Download high-quality thumbnails from any YouTube video.',

            // TEXT
            'Word Counter' => 'Count words and characters in text.',
            'Text Case Converter' => 'Convert text to uppercase, lowercase or title case.',
            'Lorem Ipsum Generator' => 'Generate placeholder text for design and testing.',
            'Diff Checker' => 'Compare two texts and highlight differences.',

            // GENERATORS
            'Password Generator' => 'Generate secure passwords instantly.',
            'QR Code Generator' => 'Generate QR codes for URLs and text.',
            'Random Number Generator' => 'Generate random numbers quickly.',

            default => 'Useful online tool.',
        };
    }
}
