<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

class ExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    private static $counter = 0;

    public function definition()
    {
        $id = random_int(1, 20);
        $desc = Category::find(1)->name;
        $this::counter = 0;
        return [
            'category_id' => $id,
            'description' => 'Achat de ' . random_int(150, 700) . ' qty de ' . $desc,
            'fee' => random_int(12000, 124500),
            'created_at' => now()->addDays($this::counter % 7)
        ];

    }
}
