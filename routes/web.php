<?php

//use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ToolsController;
use Illuminate\Support\Facades\Route;

require __DIR__.'/auth.php';

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/privacy-policy', [HomeController::class, 'privacyPolicy']);
Route::get('/terms-of-service', [HomeController::class, 'termsOfService']);
Route::get('/cookie-policy', [HomeController::class, 'cookiePolicy']);
Route::get('/about', [HomeController::class, 'about']);
Route::get('/disclaimer', [HomeController::class, 'disclaimer']);

Route::prefix('contact')->group(function () {
    Route::get('', [HomeController::class, 'contact']);
    Route::post('', [ContactController::class, 'store'])->name('contact.store');
});

Route::prefix('/tools')->group(function () {
    Route::get('', [ToolsController::class, 'index']);

    Route::prefix('{slug}')->group(function () {
        Route::get('', [ToolsController::class, 'show'])->middleware('track.tool.visit');
    });
});

Route::prefix('/category')->group(function () {
    Route::get('{slug}', [CategoriesController::class, 'show']);
});

Route::prefix('/admin')->middleware('admin')->group(function () {
    Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
});
