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
                'description' => 'Format and validate JSON'
            ],
            [
                'name' => 'UUID Generator',
                'slug' => 'uuid-generator',
                'description' => 'Generate UUID v4'
            ],
            [
                'name' => 'Password Generator',
                'slug' => 'password-generator',
                'description' => 'Generate secure passwords'
            ]
        ]);
    }
}
