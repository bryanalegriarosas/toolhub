<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Tool;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate sitemap for ToolHub';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sitemap = Sitemap::create();

        // Homepage
        $sitemap->add(
            Url::create('/')
        );

        // Tools
        Tool::all()->each(function ($tool) use ($sitemap) {
            $sitemap->add(
                Url::create("/tools/{$tool->slug}")
            );
        });

        // Categories
        Category::all()->each(function ($category) use ($sitemap) {
            $sitemap->add(
                Url::create("/category/{$category->slug}")
            );
        });

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully.');
    }
}
