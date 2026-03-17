<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ToolsController extends Controller
{
    public function index()
    {
        return Inertia::render('Tools/Index', [
            'tools' => Tool::where('active', true)->get(),
        ]);
    }

    public function show($slug)
    {
        $tool = Tool::where('slug', $slug)->firstOrFail();

        $name = Str::of($slug)->replace('-', ' ')->title();

        $seo = [
            'title' => "Free {$name} Online",
            'description' => "Use this free {$name} tool to process your data instantly. Fast, secure and easy to use.",
            'keywords' => strtolower($name) . ", online tool, free tool, web tool",
            'url' => url()->current(),
        ];
        
        return Inertia::render('Tools/ToolLoader', [
            'tool' => $tool,
            'seo' => $seo,
        ]);
    }
}
