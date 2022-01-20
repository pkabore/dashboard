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
    
    private static function get_bills_metadata($status){
        return QuoteBill::where('is_bill', true)
                        ->where('status', $status)
                        ->select('total', 'taxes', 'created_at')
                        ->get()
                        ->groupBy(function($b){ return $b->created_at->format('d'); })
                        ->map(function($g){
                            $totals = $g->reduce(function ($carry, $bill) {
                                return $carry + $bill->total;
                            });
                            $taxes = $g->reduce(function ($carry, $bill) {
                                return $carry + $bill->taxes;
                            });
                            return [ 'totals' => $totals, 'taxes' => $taxes ];
                        });
    }

    private static function get_clients_metadata(){
        return Client::get()
            ->groupBy(function($b){ return $b->created_at->format('d'); })
            ->map(function($g){
                $totals = $g->reduce(function ($carry, $client) {
                    return $carry + 1;
                });
                return [ 'totals' => $totals];
            });
    }


    private static function get_expenses_metadata(){
        return Expense::get()
            ->groupBy(function($b){ return $b->created_at->format('d'); })
            ->map(function($g){
                $totals = $g->reduce(function ($carry, $expense) {
                    return $carry + $expense->fee;
                });
                return [ 'totals' => $totals];
            });
    }

    public function index()
    {
        //$sales = Sale::all()->groupBy(function($s) { return $s->created_at->format('d'); });
        
        $paid_bills_data = $this::get_bills_metadata('Payé');
        $paid_bills_labels = array_keys($paid_bills_data->toArray());
        $paid_bills_taxes = $paid_bills_data->pluck('taxes');
        $paid_bills_totals = $paid_bills_data->pluck('totals');


        $unpaid_bills_data = $this::get_bills_metadata('Non Payé');
        $unpaid_bills_labels = array_keys($unpaid_bills_data->toArray());
        $unpaid_bills_taxes = $unpaid_bills_data->pluck('taxes');
        $unpaid_bills_totals = $unpaid_bills_data->pluck('totals');


        $clients_data = $this::get_clients_metadata();
        $clients_data_labels = array_keys($clients_data->toArray());
        $clients_data_totals = $clients_data->pluck('totals');


        $spendings = Expense::sum('fee');
        $expenses_data = $this::get_expenses_metadata();
        $expenses_data_totals = $expenses_data->pluck('totals');
        
        $income = Sale::sum('total');   
        $income += QuoteBill::whereMonth('created_at', now()->month)
                                    ->where('is_bill', true)
                                    ->where('status', 'Payé')
                                    ->sum('total');


        $clients = Client::count();
        $articles = Article::count();
        $categories = Category::count();
        $sales = Sale::count();
        $bills = QuoteBill::where('is_bill', true)->count();
        $quotes = QuoteBill::where('is_quote', true)->count();
        $expenses = Expense::count();

        $metadata = [
            //'sales' => $sales,
            'paid_bills_labels' => $paid_bills_labels,
            'paid_bills_taxes' => $paid_bills_taxes,
            'paid_bills_totals' => $paid_bills_totals,
            'unpaid_bills_labels' => $unpaid_bills_labels,
            'unpaid_bills_taxes' => $unpaid_bills_taxes,
            'unpaid_bills_totals' => $unpaid_bills_totals,
            'clients_data_labels' => $clients_data_labels,
            'clients_data_totals' => $clients_data_totals,
            'expenses_data_totals' => $expenses_data_totals,
            'clients' => $clients,
            'bills' => $bills,
            'articles' => $articles,
            'categories' => $categories,
            'sales' => $sales,
            'quotes' => $quotes,
            'expenses' => $expenses,
            'spendings' => $spendings,
            'income' => $income,
        ];

        return Inertia::render('Stats/Index', [ 'metadata' => $metadata ]);
    }
}