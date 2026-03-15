<?php

namespace App\Http\Controllers;

use App\Models\Tool;
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
        
        return Inertia::render('Tools/ToolLoader', [
            'tool' => $tool
        ]);
    }
}
