<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->address(),
            'category_id' => random_int(1, 100),
            'price' => random_int(500, 100000),
            'tax' => random_int(100, 500),
            "stock" => random_int(0, 1000),
            'expires_at' => now()->addHours(random_int(1000, 5000))
        ];
    }
}
