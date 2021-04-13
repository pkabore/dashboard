<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SaleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'receipt_id' => "2022111045",
            'date' => '2022/02/14',
            'taxes' => random_int(1245, 12400),
            'partial' => random_int(1200, 144000),
            'total' => random_int(3000, 300000),
            'created_at' => now()->addMonths(random_int(0, 11))
        ];
    }
}
