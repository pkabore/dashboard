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

    public function definition()
    {
        $id = random_int(1, 12);
        $desc = Category::find($id)->name;
        return [
            'category_id' => $id,
            'description' => 'Achat de ' . random_int(150, 700) . ' qty de ' . $desc,
            'fee' => random_int(3000, 300000),
            'created_at' => now()->addMonths(random_int(1,30) % 12)
        ];

    }
}
