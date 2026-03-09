<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Tool;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // share lazily so the query runs after migrations (important for tests)
        Inertia::share([
            'tools' => function () {
                return \Illuminate\Support\Facades\Schema::hasTable('tools')
                    ? Tool::where('active', true)->get()
                    : [];
            },
            'categories' => function () {
                return \Illuminate\Support\Facades\Schema::hasTable('categories')
                    ? Category::with('tools')->get()
                    : [];
            },
        ]);
    }
}
