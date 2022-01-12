<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Dashboard/Category/Index', [
            'categories' => Category::orderBy('name')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        return Inertia::render('Dashboard/Category/Create', [
            'message' => ""
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
            'name' => 'required|string|min:2|unique:categories'
        ]);

        $c = new Category();
        $c->name = $request->name;
        $c->save();

        return Inertia::render('Dashboard/Category/Create', [
            'message' => "Rayon crée avec succès"
        ]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Category $category)
    {
        return Inertia::render('Dashboard/Category/Edit', [
            'category' => $category,
            'message' => ''
        ]); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|min:2|unique:categories'
        ]);

        $category->name = $request->name;
        $category->save();

        return Inertia::render('Dashboard/Category/Edit', [
            'category' => $category,
            'message' => "Rayon mis à jour avec succès"
        ]); 
    }


    /**
     * Search the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByName', 'sortByArticles']);

        $categories = Category::filter($filters)
                        ->paginate(15);

        return $categories;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect(route('categories.index'));
    }
}
