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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales = Sale::paginate(15)
                    ->through(function ($sale) {
                        $sale->date = Carbon::parse($sale->date)->diffForHumans();
                        return $sale;
                    })->all();

        return Inertia::render('Dashboard/Sale/Index', [
            'sales' => $sales
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Dashboard/Sale/Create', [
            'articles' => Article::select(['id', 'name', 'price', 'tax', 'stock'])->limit(15)->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
        $s->date = now();
        $s->taxes = $request->taxes;
        $s->partial = $request->partial;
        $s->total = $request->total;

        $s->save();

        foreach ($request->items as $order) {
            $o = new Order();
            $o->sale_invoice_id = $s->id;
            $o->article_id = $order['id'];
            $o->qty = $order['qty'];
            $o->article = $order['name'];
            $o->price = $order['price'];
            $o->tax = $order['tax'];
            $o->save();
        }

        /*return Inertia::render('Dashboard/Sale/Create', [
            'message' => 'Vente enregistrée avec succès'
        ]);*/

        /*return ['message' => 'Vente enregistrée avec succès'];
*/
    }


    /**
     * Search the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByReceiptId', 'sortByTaxes', 'sortByTotal', 'sortByDate']);

        $sales = Sale::filter($filters)
                        ->paginate(15)
                        ->through(function ($sale) {
                            $sale->date = Carbon::parse($sale->date)->diffForHumans();
                            return $sale;
                        })->all();

        return $sales;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        $items = Order::where('sale_invoice_id', $sale->id)->get();
        $sale->items = $items;
        $sale->date = Carbon::parse($sale->date)->diffForHumans();
        return Inertia::render('Dashboard/Sale/Show', [ 'sale' => $sale]);
    }
}