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
    
    private $labelsFormat = 'M';

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
        return QuoteBill::orderBy('created_at')
                        ->where('is_quote', true)
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

    private function filter($request)
    {   
        $salesAmountStats = Sale::
                            whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)
                            ->orderBy('created_at')
                            ->get()
                            ->groupBy(fn($sale) => $sale->created_at->format('d M'))
                            ->map(function($group){
                                $total = $group->reduce(function ($carry, $sale) {
                                    return $carry + $sale->total;
                                });
                                return $total;
                            });
        $billsAmountStats = QuoteBill::where('is_bill', true)
                        ->whereMonth('created_at', $request->month)
                        ->whereYear('created_at', $request->year)
                        ->orderBy('created_at')
                        ->select('total', 'created_at')
                        ->get()
                        ->groupBy(fn($bill) => $bill->created_at->format('d M'))
                        ->map(function($group, $date){
                            $total = $group->reduce(function ($carry, $bill) {
                                return $carry + $bill->total;
                            });
                            return $total;
                        });;
        $expensesAmountStats = Expense::
                                whereMonth('created_at', $request->month)
                                ->whereYear('created_at', $request->year)
                                ->orderBy('created_at')
                                ->get()
                                ->groupBy(fn($expense) => $expense->created_at->format('d M'))
                                ->map(function($group){
                                    $total = $group->reduce(function ($carry, $expense) {
                                        return $carry + $expense->fee;
                                    });
                                    return $total;
                                });

        $quotesNumberStats = QuoteBill::where('is_quote', true)
                            ->whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)
                            ->orderBy('created_at')
                            ->get()
                            ->groupBy(fn($quote) => $quote->created_at->format('d M'))
                            ->map(fn($group) => count($group));

        $clientsNumberStats = Client::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)
                            ->orderBy('created_at')
                            ->get()
                            ->groupBy(fn($client) => $client->created_at->format('d M'))
                            ->map(fn($group) => count($group));

        $expensesAmount = Expense::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)->sum('fee');        
        $income = Sale::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)->sum('total');   
        $income += QuoteBill::where('is_bill', true)
                            ->whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)
                            ->sum('total');

        $clientsNumber = Client::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)->count();
        $articlesNumber = Article::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)->count();
        $categoriesNumber = Category::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)->count();
        $billsNumber = QuoteBill::where('is_bill', true)
                                ->whereMonth('created_at', $request->month)
                                ->whereYear('created_at', $request->year)
                                ->count();
        $unpaidBillsNumber = QuoteBill::where('is_bill', true)->where('status', 'Non Payé')
            ->whereMonth('created_at', $request->month)
            ->whereYear('created_at', $request->year)
            ->count();
        $quotesNumber = QuoteBill::where('is_quote', true)
                                ->whereMonth('created_at', $request->month)
                                ->whereYear('created_at', $request->year)
                                ->count();
        $expensesNumber = Expense::whereMonth('created_at', $request->month)
                            ->whereYear('created_at', $request->year)->count();

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
        return $metadata;
    }
    
    public function index(Request $request)
    {   
        if ($request->month || $request->year)
            return Inertia::render('Stats/Index', [ 'metadata' => $this->filter($request), 'year' => intval($request->year), 'month' => intval($request->month) ]);

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

        return Inertia::render('Stats/Index', [ 'metadata' => $metadata]);
    }

}