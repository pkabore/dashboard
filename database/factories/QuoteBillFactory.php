<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class QuoteBillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'receipt_id' => "2022111149",
            'taxes' => random_int(1245, 12400),
            'partial' => random_int(1200, 144000),
            'total' => random_int(12000, 1440000),
            'description' => 'Devis',
            'is_quote' => true,
            'shipment' => 0,
            'created_at' => now()->addMonths(random_int(0, 11))
        ];
    }
}
