<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Laravel\Passport\Client;

class DefaultOAuthClientSeeder extends Seeder
{
    public function run()
    {
        Client::create([
            'user_id' => null,
            'name' => 'default',
            'secret' => '649V8hvqpJBZVAIesJ7oO0CyRUtB52rQVnaT2myQ',
            'redirect' => 'http://localhost',
            'personal_access_client' => true,
            'password_client' => false,
            'revoked' => false,
        ]);
    }
}

