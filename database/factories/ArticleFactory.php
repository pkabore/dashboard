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
    public function definition()
    {

        $category_id = random_int(1, 12);
        $c = Category::find($category_id);
        
        $c->articles = $c->articles + 1;
        $c->save();

        return [
            'name' => $this->faker->word(),
            'category_id' => $category_id,
            'price' => random_int(2000, 200000),
            'tax' => random_int(1, 10),
            "stock" => random_int(0, 1000),
            'expires_at' => now()->addDays(random_int(1000, 5000))
        ];
    }
}
