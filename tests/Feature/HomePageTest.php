<?php

namespace Tests\Feature;

use App\Models\Tool;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    use RefreshDatabase;

    public function test_homepage_contains_cta_and_stats(): void
    {
        // create a sample tool so count is > 0
        Tool::create([
            'name' => 'JSON Formatter',
            'slug' => 'json-formatter',
            'active' => true,
        ]);

        $response = $this->get('/');
        $response->assertStatus(200);

        // can't assert DOM text in Inertia JSON, rely on props instead
        $response->assertInertia(fn (AssertableInertia $page) =>
            $page
                ->component('Home')
                ->has('tools', 1)
        );
    }
}
