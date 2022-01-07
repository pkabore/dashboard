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
        $articles = DB::table('articles')
                        ->paginate(15)
                        ->through(function($article){
                            $article->expires_at = Carbon::parse($article->expires_at)->diffForHumans();
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
        $messages = session('messages');
        $request->session()->put('messages.articles.success', '');
        if(!$messages)
            $messages = session('messages');

        return Inertia::render('Dashboard/Article/Create', [
            'categories' => Category::select('id', 'name')->get(),
            'messages' => $messages
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
        $request->name = strtoupper($request->name);
        $request->validate([
            'category_id.id' => 'required|integer|min:1',
            'name' => 'required|unique:articles|string|max:256',
            'description' => 'required|string|max:512',
            'price' => 'required|numeric|min:0',
            'tax' => 'required|numeric|min:0',
            'stock' => 'required|numeric|min:0',
            'expires_at' => 'required|date',
        ]);

        $a = new Article();

        $a->category_id = $request->category_id['id'];
        $a->name = $request->name;
        $a->description = $request->description;
        $a->price = $request->price;
        $a->tax = $request->tax;
        $a->stock = $request->stock;
        $a->expires_at = $request->expires_at;

        $a->save();
        $request->session()->put('messages.articles.success', 'Article ajouté avec succès');
        return redirect(route('articles.create'));
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
        $messages = session('messages');
        $request->session()->put('messages.articles.editSuccess', '');
        $request->session()->put('messages.articles.editFailure', '');
        if(!$messages)
            $messages = session('messages');

        $article->expires_at = Carbon::parse($article->expires_at)->format('Y-m-d');

        return Inertia::render('Dashboard/Article/Edit', [
            'categories' => Category::select('id', 'name')->get(),
            'article' => $article,
            'messages' => $messages
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
            'description' => 'required|string|max:512',
            'price' => 'required|numeric|min:0',
            'tax' => 'required|numeric|min:0',
            'stock' => 'required|numeric|min:0',
            'expires_at' => 'required|date',
        ]);

        $request->name = strtoupper($request->name);
        $collisionArticle = Article::where('name', $request->name)->first();
        if ($collisionArticle && $collisionArticle->id !== $article->id){
            $request->session()->put('messages.articles.editFailure', 'The name has already been taken');
            return redirect(route('articles.edit', $article->id));
        }

        $article->category_id = $request->category_id['id'];
        $article->name = $request->name;
        $article->description = $request->description;
        $article->price = $request->price;
        $article->tax = $request->tax;
        $article->stock = $request->stock;
        $article->expires_at = $request->expires_at;

        $article->save();
        $request->session()->put('messages.articles.editSuccess', 'Article édité avec succès');
        return redirect(route('articles.edit', $article->id));
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
        return $article;
    }
}
