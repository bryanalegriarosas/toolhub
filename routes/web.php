<?php

use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Tool;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'tools' => Tool::where('active', true)->get()
    ]);
});

// list all tools (used by the "Ver todas las herramientas" link)
Route::get('/tools', function () {
    return Inertia::render('Tools/Index', [
        'tools' => Tool::where('active', true)->get(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/tools/{slug}', function ($slug) {

    $tool = Tool::where('slug', $slug)->firstOrFail();

    return Inertia::render('Tools/ToolLoader', [
        'tool' => $tool
    ]);

});

Route::get('/category/{slug}', function ($slug) {

    $category = Category::where('slug', $slug)
        ->with('tools')
        ->firstOrFail();

    return Inertia::render('Category', [
        'category' => $category
    ]);
});

Route::get('/developer-tools', function () {
    $category = Category::where('slug', 'developer-tools')
        ->with('tools')
        ->firstOrFail();
    
    return Inertia::render('Category', [
        'category' => $category
    ]);
});

Route::get('/security-tools', function () {
    $category = Category::where('slug', 'security-tools')
        ->with('tools')
        ->firstOrFail();
    
    return Inertia::render('Category', [
        'category' => $category
    ]);
});

Route::get('/encoding-tools', function () {
    $category = Category::where('slug', 'encoding-tools')
        ->with('tools')
        ->firstOrFail();
    
    return Inertia::render('Category', [
        'category' => $category
    ]);
});

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});

Route::get('/terms-of-service', function () {
    return Inertia::render('TermsOfService');
});

Route::get('/cookie-policy', function () {
    return Inertia::render('CookiePolicy');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
