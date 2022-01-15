<?php

namespace App\Http\Controllers;

use App\Models\QuoteBill;
use App\Models\Order;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BillController extends Controller
{
    public function index()
    {
        $bills = QuoteBill::where('is_bill', true)
                    ->paginate(12)
                    ->through(function ($bill) {
                        $bill->date = $bill->created_at->format('d/m/Y');
                        return $bill;
                    });
        return Inertia::render('Bill/Index', [ 'bills' => $bills ]);
    }

    public function create(Request $request)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
        return Inertia::render('Bill/Create', [
            'message' => $message,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'client.id' => 'required|integer',
            'client.name' => 'required|string',
            'client.phone' => 'required|string',
            'client.email' => 'nullable|string|email',
            'receipt_id' => 'required|string|min:8',
            'items' => 'required|array|min:1',
            'taxes' => 'required|numeric|min:0',
            'partial' => 'required|numeric|min:0',
            'total' => 'required|numeric|min:0',
            'shipment' => 'nullable|numeric|min:0',
            'deadline' => 'required|date',
            'description' => 'required|string|max:256'
        ]);

        $bill = new QuoteBill();

        $bill->client_id = $request->client['id'];
        $bill->client_name = $request->client['name'];
        $bill->client_phone = $request->client['phone'];
        $bill->client_email = $request->client['email'];
        $bill->receipt_id = $request->receipt_id;
        $bill->deadline = $request->deadline;
        $bill->description = $request->description;
        $bill->taxes = $request->taxes;
        $bill->shipment = $request->shipment;
        if (!$request->shipment)
            $bill->shipment = 0;

        $bill->partial = $request->partial;
        $bill->total = $request->total;
        $bill->is_bill = true;

        $bill->save();

        foreach ($request->items as $order) {
            $o = new Order();
            $o->sale_quote_bill_id = $bill->id;
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

        return redirect(route('bills.create'));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByClientName', 'sortByTotal', 'sortByDate', 'sortByClientEmail', 'sortByClientPhone']);

        $bills = QuoteBill::filter($filters)
                        ->where('is_bill', true)
                        ->paginate(12)
                        ->through(function ($bill) {
                            $bill->date = $bill->created_at->format('d/m/Y');
                            return $bill;
                        })->all();

        return $bills;
    }

    public function show(QuoteBill $bill)
    {
        $items = Order::where('sale_quote_bill_id', $bill->id)->get();
        $bill->items = $items;
        $bill->date = $bill->created_at->format('d/m/Y');
        return Inertia::render('Bill/Show', [ 'bill' => $bill]);
    }

    public function update(Request $request, QuoteBill $bill)
    {
        if ($bill->status == 'Non Payé'){
            $bill->status = 'Payé';
            $bill->save();
        }

        return redirect(route('bills.show', $bill->id));
    }

    // public function destroy(QuoteBill $bill)
    // {
    //     $bill->delete();
    //     return redirect(route('bills.index'));
    // }
}