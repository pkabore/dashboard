<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Order;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Exports\SaleExport;
use Maatwebsite\Excel\Facades\Excel;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::where('created_at', '>=', today())
                    ->paginate(12)
                    ->through(function ($sale) {
                        $sale->date = $sale->created_at->format('d M, Y');
                        return $sale;
                    });

        return Inertia::render('Sale/Index', [
            'sales' => $sales
        ]);
    }

    public function create(Request $request)
    {
        $failureMessage = session('failureMessage');
        $request->session()->put('failureMessage', '');
        if (!$failureMessage)
            $failureMessage = session('failureMessage');
        return Inertia::render('Sale/Create', [
            'failureMessage' => $failureMessage
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'receipt_id' => 'required|string|min:8',
            'date' => 'required|string|min:8',
            'items' => 'required|array|min:1',
            'taxes' => 'required|numeric|min:0',
            'partial' => 'required|numeric|min:0',
            'total' => 'required|numeric|min:0',
        ]);

        $sale = Sale::where('receipt_id', $request->receipt_id)
                            ->first();
        if ($sale){
            $request->session()->put('failureMessage', 'Vente déjà enregistrée');
            return redirect(route('sales.create'));
        }
        $s = new Sale();

        $s->receipt_id = $request->receipt_id;
        $s->date = $request->date;
        $s->taxes = $request->taxes;
        $s->partial = $request->partial;
        $s->total = $request->total;

        $s->save();

        foreach ($request->items as $order) {
            $o = new Order();
            $o->sale_quote_bill_id = $s->receipt_id;
            $o->article_id = $order['id'];
            $a = Article::find($order['id']);
            $a->stock -= $order['qty'];
            $a->save();
            $o->qty = $order['qty'];
            $o->article = $order['name'];
            $o->price = $order['price'];
            $o->tax = $order['tax'];
            $o->save();
        }

        return redirect(route('sales.create'));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByReceiptId', 'sortByTaxes', 'sortByTotal', 'sortByDate']);

        $sales = Sale::filter($filters)
                ->paginate(12)
                ->withQueryString()
                ->through(function ($sale) {
                    $sale->date = $sale->created_at->format('d M, Y');
                    return $sale;
                });

        return $sales;
    }

    public function show(Sale $sale)
    {
        $items = Order::where('sale_quote_bill_id', $sale->receipt_id)->get();
        $sale->items = $items;
        try {
            $sale->date = $sale->created_at->format('d M, Y');
        } catch (\Throwable $th) {
            throw $th;
        }
        return Inertia::render('Sale/Show', [ 'sale' => $sale]);
    }


    public function export(){
        return Excel::download(new SaleExport, 'ventes.xlsx');
    }


    public function destroy(Sale $sale)
    {
        Order::where('sale_quote_bill_id', $sale->receipt_id)->delete();
        $sale->delete();
        return redirect(route('sales.index'));
    }
}