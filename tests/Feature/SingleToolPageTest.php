<?php

namespace Tests\Feature;

use App\Models\Tool;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class SingleToolPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_tool_page_shares_tools_list(): void
    {
        $tool = Tool::create([
            'name' => 'JSON Formatter',
            'slug' => 'json-formatter',
            'active' => true,
        ]);

        $response = $this->get('/tools/' . $tool->slug);
        $response->assertStatus(200);

        // ensure the response contains the individual tool and also the shared tools
        $response->assertInertia(fn (AssertableInertia $page) =>
            $page
                ->component('Tools/ToolLoader')
                ->where('tool.slug', 'json-formatter')
                ->has('tools', 1)
        );
    }
}
