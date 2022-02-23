<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();
        \App\Models\Sale::factory(110)->create();
        \App\Models\QuoteBill::factory(120)->create();
        \App\Models\Category::factory(1)->create();
        \App\Models\Article::factory(45)->create();
        \App\Models\Client::factory(37)->create();
        \App\Models\Expense::factory(120)->create();
    }
}
