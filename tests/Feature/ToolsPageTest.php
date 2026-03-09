<?php

namespace Tests\Feature;

use App\Models\Tool;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ToolsPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_tools_listing_page_exists(): void
    {
        Tool::create([
            'name' => 'UUID Generator',
            'slug' => 'uuid-generator',
            'active' => true,
        ]);

        $response = $this->get('/tools');
        $response->assertStatus(200);

        // since Inertia returns JSON by default in tests, check props directly
        $response->assertInertia(fn (AssertableInertia $page) =>
            $page
                ->component('Tools/Index')
                ->has('tools', 1)
                ->where('tools.0.name', 'UUID Generator')
        );
    }
}
