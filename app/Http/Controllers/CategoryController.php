<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Article;
use App\Models\Expense;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Exports\CategoryExport;
use Maatwebsite\Excel\Facades\Excel;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Category/Index', [
            'categories' => Category::orderBy('name')->paginate(12)
        ]);
    }

    public function create(Request $request)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');

        return Inertia::render('Category/Create', [
            'message' => $message
        ]); 
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:2|unique:categories'
        ]);
        //create the default category if it doesn't exist.
        $default_category = Category::find(1);
        if (!$default_category){
            $default_category = new Category();
            $default_category->name = "Non classifié";
            $default_category->save();
            if ($default_category->id != 1){
                $default_category->id = 1;
                $default_category->save();
            }
        }

        $c = new Category();
        $c->name = $request->name;
        $c->save();

        $request->session()->put('message', 'Rayon crée avec succès');
        return redirect(route('categories.create'));
    }

    public function edit(Request $request, Category $category)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
    
        return Inertia::render('Category/Edit', [
            'category' => $category,
            'message' => $message
        ]); 
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|min:2|unique:categories'
        ]);

        $category->name = $request->name;
        $category->save();

        $request->session()->put('message', 'Rayon édité avec succès');
        return redirect(route('categories.edit', $category->id));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByName', 'sortByArticles']);

        $categories = Category::filter($filters)
                        ->paginate(12)
                        ->withQueryString();

        return $categories;
    }

    public function destroy(Category $category)
    {
        if ($category->id != 1){
            Article::where('category_id', $category->id)
                    ->update(['category_id' => 1]);
            Expense::where('category_id', $category->id)
                    ->update(['category_id' => 1]);
            $default_category = Category::find(1);
            $default_category->articles += $category->articles;
            $default_category->save();
            $category->delete();
        }
        return redirect(route('categories.index'));
    }

    public function export(){
        return Excel::download(new CategoryExport, 'rayons.xlsx');
    }
}
