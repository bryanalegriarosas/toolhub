<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run(): void
    {
        Category::truncate();

        $categories = [
            [
                'name' => 'SEO Tools',
                'slug' => 'seo-tools',
                'icon' => 'Search',
            ],
            [
                'name' => 'PDF Tools',
                'slug' => 'pdf-tools',
                'icon' => 'FileText',
            ],
            [
                'name' => 'Image Tools',
                'slug' => 'image-tools',
                'icon' => 'Image',
            ],
            [
                'name' => 'Developer Tools',
                'slug' => 'developer-tools',
                'icon' => 'Code',
            ],
            [
                'name' => 'Text Tools',
                'slug' => 'text-tools',
                'icon' => 'FileText',
            ],
            [
                'name' => 'Converters & Encoding',
                'slug' => 'converters-encoding',
                'icon' => 'Binary',
            ],
            [
                'name' => 'Security & Crypto',
                'slug' => 'security-crypto',
                'icon' => 'Shield',
            ],
            [
                'name' => 'Generators',
                'slug' => 'generators',
                'icon' => 'Shuffle',
            ],
            [
                'name' => 'Media Tools',
                'slug' => 'media-tools',
                'icon' => 'Volume2',
            ],
        ];

        foreach ($categories as $category) {
            Category::firstOrCreate($category);
        }
    }
}