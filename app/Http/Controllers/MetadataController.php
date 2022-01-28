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
    
    private $labelsFormat = 'M Y';

    private function get_bills_metadata($status, $format){
        return QuoteBill::where('is_bill', true)
                        //->where('status', $status)
                        ->orderBy('created_at')
                        ->select('total', 'created_at')
                        ->get()
                        ->groupBy(fn($bill) => $bill->created_at->format($format))
                        ->map(function($group, $date){
                            $total = $group->reduce(function ($carry, $bill) {
                                return $carry + $bill->total;
                            });
                            return $total;
                        });
    }

    private function get_clients_metadata($format){
        return Client::orderBy('created_at')
            ->get()
            ->groupBy(fn($client) => $client->created_at->format($format))
            ->map(fn($group) => count($group));
            
    }


    private function get_quotes_metadata($format){
        return QuoteBill::where('is_quote', true)
                        ->orderBy('created_at')
                        ->get()
                        ->groupBy(fn($quote) => $quote->created_at->format($format))
                        ->map(fn($group) => count($group));
    }


    private function get_expenses_metadata($format){
        return Expense::orderBy('created_at')
            ->get()
            ->groupBy(fn($expense) => $expense->created_at->format($format))
            ->map(function($group){
                $total = $group->reduce(function ($carry, $expense) {
                    return $carry + $expense->fee;
                });
                return $total;
            });
    }


    private function get_sales_metadata($format){
        return Sale::orderBy('created_at')
            ->get()
            ->groupBy(fn($sale) => $sale->created_at->format($format))
            ->map(function($group){
                $total = $group->reduce(function ($carry, $sale) {
                    return $carry + $sale->total;
                });
                return $total;
            });
    }

    public function index()
    {        
        $salesAmountStats = $this->get_sales_metadata($this->labelsFormat);
        $billsAmountStats = $this->get_bills_metadata('Payé', $this->labelsFormat);
        $expensesAmountStats = $this->get_expenses_metadata($this->labelsFormat);

        $quotesNumberStats = $this->get_quotes_metadata($this->labelsFormat);
        $clientsNumberStats = $this->get_clients_metadata($this->labelsFormat);

        $expensesAmount = Expense::sum('fee');        
        $income = Sale::sum('total');   
        $income += QuoteBill::where('is_bill', true)
                            //->where('status', 'Payé')
                            ->sum('total');

        $clientsNumber = Client::count();
        $articlesNumber = Article::count();
        $categoriesNumber = Category::count();
        $billsNumber = QuoteBill::where('is_bill', true)->count();
        $unpaidBillsNumber = QuoteBill::where('is_bill', true)->where('status', 'Non Payé')->count();
        $quotesNumber = QuoteBill::where('is_quote', true)->count();
        $expensesNumber = Expense::count();

        $metadata = [
            'expensesNumber' => $expensesNumber,
            'expensesAmount' => $expensesAmount,
            'expensesAmountStats' => $expensesAmountStats,
            'salesAmountStats' => $salesAmountStats,
            'billsNumber' => $billsNumber,
            'unpaidBillsNumber' => $unpaidBillsNumber,
            'billsAmountStats' => $billsAmountStats,
            'quotesNumber' => $quotesNumber,
            'quotesNumberStats' => $quotesNumberStats,
            'clientsNumber' => $clientsNumber,
            'clientsNumberStats' => $clientsNumberStats,
            'billsNumber' => $billsNumber,
            'articlesNumber' => $articlesNumber,
            'categoriesNumber' => $categoriesNumber,
            'income' => $income,
        ];
        return Inertia::render('Stats/Index', [ 'metadata' => $metadata ]);
    }
}