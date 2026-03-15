<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function show($slug)
    {
        $category = Category::where('slug', $slug)
            ->with('tools')
            ->firstOrFail();

        return Inertia::render('Category', [
            'category' => $category
        ]);
    }
}
