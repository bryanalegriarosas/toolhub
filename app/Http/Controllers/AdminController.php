<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use App\Models\Category;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $totalTools = Tool::count();
        $totalVisits = Tool::sum('visit_counter');
        $activeTools = Tool::where('active', true)->count();
        
        $toolsWithStats = Tool::with('category')
            ->orderBy('visit_counter', 'desc')
            ->get()
            ->map(function ($tool) {
                return [
                    'id' => $tool->id,
                    'name' => $tool->name,
                    'slug' => $tool->slug,
                    'category' => $tool->category->name ?? 'Uncategorized',
                    'visit_counter' => $tool->visit_counter,
                    'active' => $tool->active,
                ];
            });

        $categoryStats = Category::withCount(['tools'])
            ->withSum('tools', 'visit_counter')
            ->orderBy('tools_sum_visit_counter', 'desc')
            ->get()
            ->map(function ($category) {
                return [
                    'name' => $category->name,
                    'slug' => $category->slug,
                    'tools_count' => $category->tools_count,
                    'total_visits' => $category->tools_sum_visit_counter ?? 0,
                ];
            });

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_tools' => $totalTools,
                'total_visits' => $totalVisits,
                'active_tools' => $activeTools,
                'inactive_tools' => $totalTools - $activeTools,
            ],
            'tools' => $toolsWithStats,
            'categories' => $categoryStats,
        ]);
    }
}
