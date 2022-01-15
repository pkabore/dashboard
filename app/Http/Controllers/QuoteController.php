<?php

namespace App\Http\Controllers;

use App\Models\QuoteBill;
use App\Models\Order;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuoteController extends Controller
{
    public function index()
    {
        $quotes = QuoteBill::where('created_at', '>=', today())
                    ->where('is_quote', true)
                    ->paginate(12)
                    ->through(function ($quote) {
                        $quote->date = $quote->created_at->format('d/m/Y');
                        return $quote;
                    });

        return Inertia::render('Quote/Index', [
            'quotes' => $quotes
        ]);
    }

    public function create(Request $request)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
        return Inertia::render('Quote/Create', [
            'message' => $message,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
                    'client.id' => 'nullable|integer',
                    'client.name' => 'nullable|string',
                    'client.phone' => 'nullable|string',
                    'client.email' => 'nullable|string|email',
                    'receipt_id' => 'required|string|min:8',
                    'items' => 'required|array|min:1',
                    'taxes' => 'required|numeric|min:0',
                    'partial' => 'required|numeric|min:0',
                    'total' => 'required|numeric|min:0',
                    'shipment' => 'nullable|numeric|min:0',
                    'description' => 'required|string|max:256'
                ]);

                $quote = new QuoteBill();

                $quote->client_id = $request->client['id'];
                $quote->client_name = $request->client['name'];
                $quote->client_phone = $request->client['phone'];
                $quote->client_email = $request->client['email'];
                $quote->receipt_id = $request->receipt_id;
                $quote->deadline = $request->deadline;
                $quote->description = $request->description;
                $quote->taxes = $request->taxes;
                $quote->shipment = $request->shipment;
                if (!$request->shipment)
                    $quote->shipment = 0;

                $quote->partial = $request->partial;
                $quote->total = $request->total;
                $quote->is_quote = true;

                $quote->save();

                foreach ($request->items as $order) {
                    $o = new Order();
                    $o->sale_quote_bill_id = $quote->id;
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

                return redirect(route('quotes.create'));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByClientName', 'sortByTotal', 'sortByDate', 'sortByClientEmail', 'sortByClientPhone']);

        $quotes = QuoteBill::filter($filters)
                        ->where('is_quote', true)
                        ->paginate(12)
                        ->through(function ($quote) {
                            $quote->date = $quote->created_at->format('d/m/Y');
                            return $quote;
                        });

        return $quotes;
    }

    public function show(QuoteBill $quote)
    {
        $items = Order::where('sale_quote_bill_id', $quote->id)->get();
        $quote->items = $items;
        $quote->date = $quote->created_at->format('d/m/Y');
        return Inertia::render('Quote/Show', [ 'quote' => $quote]);
    }

    public function destroy(QuoteBill $quote)
    {
        $quote->delete();
        return redirect(route('quotes.index'));
    }
}