<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_user_events(): void
    {
        $email = 'sara@mail.com';
        $response = $this->post("/api/user/$email/events");

        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'name',
                'date',
                'place',
            ],
        ]);
    }

    public function test_event_assistants(): void
    {
        $event = 1;
        $response = $this->post("/api/event/$event/users");

        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'name',
                'email',
            ],
        ]);
    }

    public function test_total_assistants(): void
    {
        $event = 2;
        $response = $this->post("/api/event/$event/count");

        $response->assertStatus(200);
        self::assertEquals('3', $response->json());
    }
}
