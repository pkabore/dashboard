<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Redirect;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::paginate(15)
                        ->through(function($article){
                            if ($article->expires_at)
                                $article->expires_at = Carbon::parse($article->expires_at)->diffForHumans();
                            else
                                $article->expires_at = '-';
                            return $article;
                        });

        return Inertia::render('Dashboard/Article/Index', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('Dashboard/Article/Create', [
            'categories' => Category::select('id', 'name')->get(),
            'message' => ''
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
            'category_id.id' => 'required|integer|min:1',
            'name' => 'required|string|max:256',
            'description' => 'nullable|string|max:512',
            'price' => 'required|numeric|min:0',
            'tax' => 'nullable|numeric|min:0',
            'stock' => 'required|numeric|min:0',
            'expires_at' => 'nullable|date',
        ]);

        $a = new Article();

        $a->category_id = $request->category_id['id'];

        $c = Category::find($a->category_id);
        $c->articles = $c->articles + 1;

        $a->name = $request->name;
        $a->description = $request->description;
        $a->price = $request->price;
        $a->tax = $request->tax;
        $a->stock = $request->stock;
        
        if (!$request->tax)
            $a->tax = 0;
        $a->expires_at = $request->expires_at;
        if (!$request->expires_at)
            $a->expires_at = 0;

        $a->save();
        $c->save();
        return Inertia::render('Dashboard/Article/Create', ['message' => 'Article ajouté avec succès']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Article $article)
    {

        $article->expires_at = Carbon::parse($article->expires_at)->format('Y-m-d');

        return Inertia::render('Dashboard/Article/Edit', [
            'categories' => Category::select('id', 'name')->orderBy('name')->get(),
            'article' => $article,
            'message' => ''
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'category_id.id' => 'required|integer|min:1',
            'name' => 'required|string|max:256',
            'description' => 'nullable|string|max:512',
            'price' => 'required|numeric|min:0',
            'tax' => 'nullable|numeric|min:0',
            'stock' => 'required|numeric|min:0',
            'expires_at' => 'nullable|date',
        ]);

        $old_category = Category::find($article->category_id);
        $article->category_id = $request->category_id['id'];
        $new_category = Category::find($article->category_id);

        if ($old_category->id != $new_category->id){
            $new_category->articles = $new_category->articles + 1;
            $old_category->articles = $old_category->articles - 1;
            $new_category->save();
            $old_category->save();
        }

        $article->name = $request->name;
        $article->description = $request->description;
        $article->price = $request->price;
        $article->stock = $request->stock;

        $article->tax = $request->tax;
        if (!$request->tax)
            $article->tax = 0;
        $article->expires_at = $request->expires_at;
        if (!$request->expires_at)
            $article->expires_at = 0;

        $article->save();
        
        return Inertia::render('Dashboard/Article/Edit', [
            'categories' => Category::select('id', 'name')->orderBy('name')->get(),
            'article' => $article,
            'message' => 'Article édité avec succès'
        ]);
    }

    /**
     * Search the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByTax', 'sortByName', 'sortByPrice', 'sortByExpiresAt', 'sortByStock']);

        $articles = Article::filter($filters)
                        ->paginate(15)
                        ->through(function($article){
                            if ($article->expires_at)
                                $article->expires_at = Carbon::parse($article->expires_at)->diffForHumans();
                            else
                                $article->expires_at = '-';
                            return $article;
                        });

        return $articles;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $article->delete();
        $c = Category::find($article->category_id);
        $c->articles = $c->articles - 1;
        $c->save();
        return redirect(route('articles.index'));
    }
}
