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
        $sitemap = Sitemap::create(config('app.url'));

        // Homepage
        $sitemap->add(
            Url::create('/')
                ->setUrl(config('app.url'))
        );

        // Tools
        Tool::all()->each(function ($tool) use ($sitemap) {
            $sitemap->add(
                Url::create("/tools/{$tool->slug}")
                    ->setUrl(config('app.url') . "/tools/{$tool->slug}")
            );
        });

        // Categories
        Category::all()->each(function ($category) use ($sitemap) {
            $sitemap->add(
                Url::create("/category/{$category->slug}")
                    ->setUrl(config('app.url') . "/category/{$category->slug}")
            );
        });

        // Additional pages (About, Contact, Privacy, Terms, Cookie)
        $additionalPages = [
            '/about',
            '/contact', 
            '/privacy-policy',
            '/terms-of-service',
            '/cookie-policy',
            '/developer-tools',
            '/security-tools',
            '/encoding-tools',
            '/tools'
        ];

        foreach ($additionalPages as $page) {
            $sitemap->add(
                Url::create($page)
                    ->setUrl(config('app.url') . $page)
            );
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully with URL: ' . config('app.url'));
    }
}
