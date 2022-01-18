<?php

namespace App\Exports;

use App\Models\QuoteBill;
use Maatwebsite\Excel\Concerns\FromCollection;

class QuoteExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return QuoteBill::where('is_quote', true)->get();
    }
}
