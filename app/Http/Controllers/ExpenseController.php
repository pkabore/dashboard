<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Exports\ExpenseExport;
use Maatwebsite\Excel\Facades\Excel;

class ExpenseController extends Controller
{
    public function index()
    {
        $expenses = Expense::paginate(12)
                    ->through(function($expense) {
                        $expense->date = $expense->created_at->format('d M, Y');
                        $category = Category::find($expense->category_id);
                        $expense->category = $category->name;
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
                        ->withQueryString()
                        ->through(function($expense) {
                            $expense->date = $expense->created_at->format('d M, Y');
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


    public function export(){
        return Excel::download(new ExpenseExport, 'depenses.xlsx');
    }
}