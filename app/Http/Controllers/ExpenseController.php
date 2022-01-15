<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class ExpenseController extends Controller
{
    public function index()
    {
        $expenses = Expense::paginate(12)
                    ->through(function($expense) {
                        try {
                                $expense->date = Carbon::parse($expense->created_at)->diffForHumans();
                            } catch (\Throwable $th) {
                                throw $th;
                            }
                        $expense->category = Category::find($expense->category_id)->name;
                        return $expense;
                    });
        return Inertia::render('Expense/Index', [ 'expenses' => $expenses ]);
    }

    public function create(Request $request)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
        return Inertia::render('Expense/Create', [
            'message' => $message,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_id.id' => 'required|numeric|min:1',
            'description' => 'required|string|max:512',
            'fee' => 'required|numeric|min:0',
        ]);

        $exp = new Expense();
        $exp->category_id = $request->category_id['id'];
        $exp->description = $request->description;
        $exp->fee = $request->fee;

        $exp->save();
        $request->session()->put('message', 'Dépense enregistrée avec succès');
        return redirect(route('expenses.create'));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByFee', 'sortByDate']);
        $expenses = Expense::filter($filters)
                        ->paginate(12)
                        ->through(function($expense) {
                            try {
                                $expense->date = Carbon::parse($expense->created_at)->diffForHumans();
                            } catch (\Throwable $th) {
                                throw $th;
                            }
                            $expense->category = Category::find($expense->category_id)->name;
                            return $expense;
                        });
        return $expenses;
    }

    public function destroy(Expense $expense)
    {
        $expense->delete();
        return redirect(route('expenses.index'));
    }
}