<?php

namespace App\Exports;

use App\Models\QuoteBill;
use Maatwebsite\Excel\Concerns\FromCollection;

class BillExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return QuoteBill::where('is_bill', true)->get();
    }
}
