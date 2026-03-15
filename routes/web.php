<?php

//use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ToolsController;
use Illuminate\Support\Facades\Route;

/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/privacy-policy', [HomeController::class, 'privacyPolicy']);
Route::get('/terms-of-service', [HomeController::class, 'termsOfService']);
Route::get('/cookie-policy', [HomeController::class, 'cookiePolicy']);
Route::get('/about', [HomeController::class, 'about']);

Route::prefix('contact')->group(function () {
    Route::get('', [HomeController::class, 'contact']);
    Route::post('', [ContactController::class, 'store'])->name('contact.store');
});

Route::prefix('/tools')->group(function () {
    Route::get('', [ToolsController::class, 'index']);

    Route::prefix('{slug}')->group(function () {
        Route::get('', [ToolsController::class, 'show']);
    });
});

Route::prefix('/category')->group(function () {
    Route::get('{slug}', [CategoriesController::class, 'show']);
});
