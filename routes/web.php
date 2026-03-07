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
