<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use App\Models\Category;
use App\Models\Article;
use App\Models\Client;
use App\Models\Sale;
use App\Models\Expense;
use App\Models\Order;
use App\Models\QuoteBill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MetadataController extends Controller
{
    public function index()
    {
        $sales = Sale::all()->groupBy(function($s) { return $s->created_at->format('d-m-Y'); });
        $paid_bills = QuoteBill::where('is_bill', true)
                                ->where('status', 'Payé')
                                ->groupBy(function($b) { return $b->created_at->format('d-m-Y'); });
        $unpaid_bills = QuoteBill::where('is_bill', true)
                                ->where('status', 'Non Payé')
                                ->groupBy(function($b) { return $b->created_at->format('d-m-Y'); });
        $month_expenses = Expense::whereMonth('created_at', now()->month)
                                ->sum('fee');
        $month_revenues = Sale::whereMonth('created_at', now()->month)
                            ->sum('total');
        $month_revenues += QuoteBill::whereMonth('created_at', now()->month)
                                    ->where('is_bill', true)
                                    ->where('status', 'Payé')
                                    ->sum('total');

        $clients_numb = Client::count();
        $sales_numb = Sale::count();
        $bills_numb = QuoteBill::count();

        $metadata = [
            'sales' => $sales,
            'paid_bills' => $paid_bills,
            'unpaid_bills' => $unpaid_bills,
            'clients_numb' => $clients_numb,
            'sales_numb' => $sales_numb,
            'bills_numb' => $bills_numb,
            'month_expenses' => $month_expenses,
            'month_revenues' => $month_revenues,
        ];

        return Inertia::render('Stats/Index', [ 'metadata' => $metadata ]);
    }
}