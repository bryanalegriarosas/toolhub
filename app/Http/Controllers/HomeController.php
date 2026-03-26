<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Tool;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'tools' => Tool::where('active', true)->get(),
            'categories' => Category::with('tools')->get(),
        ]);
    }

    public function privacyPolicy()
    {
        return Inertia::render('PrivacyPolicy');
    }

    public function termsOfService()
    {
        return Inertia::render('TermsOfService');
    }

    public function cookiePolicy()
    {
        return Inertia::render('CookiePolicy');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
    
    public function disclaimer()
    {
        return Inertia::render('Disclaimer');
    }
}
