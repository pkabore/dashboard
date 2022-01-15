<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Order;
use App\Models\Article;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::where('created_at', '>=', today())
                    ->paginate(12)
                    ->through(function ($sale) {
                        try {
                            $sale->created_at = Carbon::parse($sale->created_at)->diffForHumans();
                        } catch (\Throwable $th) {
                            throw $th;
                        }
                        return $sale;
                    })->all();

        return Inertia::render('Sale/Index', [
            'sales' => $sales
        ]);
    }

    public function create()
    {
        return Inertia::render('Sale/Create', [
            'articles' => Article::select(['id', 'name', 'price', 'tax', 'stock'])->limit(50)->get()
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

        $s = new Sale();

        $s->receipt_id = $request->receipt_id;
        $s->date = $request->date;
        $s->taxes = $request->taxes;
        $s->partial = $request->partial;
        $s->total = $request->total;

        $s->save();

        foreach ($request->items as $order) {
            $o = new Order();
            $o->sale_quote_bill_id = $s->id;
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
                ->through(function ($sale) {
                    try {
                        $sale->created_at = Carbon::parse($sale->created_at)->diffForHumans();
                    } catch (\Throwable $th) {
                        throw $th;
                    }
                    return $sale;
                })->all();

        return $sales;
    }

    public function show(Sale $sale)
    {
        $items = Order::where('sale_quote_bill_id', $sale->id)->get();
        $sale->items = $items;
        try {
            $sale->created_at = Carbon::parse($sale->created_at)->diffForHumans();
        } catch (\Throwable $th) {
            throw $th;
        }
        return Inertia::render('Sale/Show', [ 'sale' => $sale]);
    }
}