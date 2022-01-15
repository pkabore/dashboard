<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $id = random_int(1, 100);
        $desc = Category::find($id)->name;
        return [
            'category_id' => $id,
            'description' => 'Achat de ' . random_int(150, 700) . ' qty de ' . $desc,
            'fee' => random_int(175000, 1245000)
        ];
    }
}
