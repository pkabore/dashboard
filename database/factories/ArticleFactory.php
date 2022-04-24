<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

private $foods = 
[
    "Microcontroller",
    "Transformer",
    "Battery",
    "Fuse",
    "Relays",
    "Switches",
    "Motors",
    "Circuit Breakers",
];
    public function definition()
    {
        return [
            'name' => $this->foods[random_int(0,756)],
            'category_id' => 1,
            'price' => random_int(200,200000),
            'tax' => random_int(1,10),
            "stock" => random_int(110,1000),
            'expires_at' => now()->addDays(random_int(100,5000))
        ];
    }
}
