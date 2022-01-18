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
        $metadatas = [];
        $sales = Sale::all()->groupBy(function($s) { return $s->created_at->format('d-m-Y'); });
        $paid_bills = QuoteBill::where('is_bill', true)
                                ->where('status', 'Payé')
                                ->groupBy(function($b) { return $b->created_at->format('d-m-Y'); });
        $unpaid_bills = QuoteBill::where('is_bill', true)
                                ->where('status', 'Non Payé')
                                ->groupBy(function($b) { return $b->created_at->format('d-m-Y'); });
        dd($sales);
        
        $clients_numb = Client::count();
        $sales_numb = Sale::count();
        $bills_numb = QuoteBill::count();

        return Inertia::render('Stats/Index', [ 'metadatas' => $metadatas ]);
    }
}