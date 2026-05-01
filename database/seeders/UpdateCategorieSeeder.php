<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class UpdateCategorieSeeder extends Seeder
{
   public function run(): void
    {
        Category::truncate();

        $categories = [
            [
                'name' => 'File Tools',
                'icon' => 'FileText',
            ],
            [
                'name' => 'Image Tools',
                'icon' => 'Image',
            ],
            [
                'name' => 'Text Tools',
                'icon' => 'Type',
            ],
            [
                'name' => 'Generators',
                'icon' => 'Wand2',
            ],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['slug' => Str::slug($category['name'])],
                [
                    'name' => $category['name'],
                    'icon' => $category['icon'],
                ]
            );
        }
    }
}
