<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::truncate();
        
        $categories = [
            [
                'name' => 'Developer Tools',
                'slug' => 'developer-tools',
                'icon' => 'Code',
            ],
            [
                'name' => 'Security Tools',
                'slug' => 'security-tools',
                'icon' => 'Shield',
            ],
            [
                'name' => 'Encoding Tools',
                'slug' => 'encoding-tools',
                'icon' => 'Binary',
            ],
            [
                'name' => 'File Tools',
                'slug' => 'file-tools',
                'icon' => 'File',
            ],
        ];

        foreach ($categories as $category) {
            Category::firstOrCreate(['name' => $category['name'], 'slug' => $category['slug'], 'icon' => $category['icon']]);
        }
    }
}
