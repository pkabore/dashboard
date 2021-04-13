<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Redirect;
use Inertia\Inertia;
use App\Exports\ArticleExport;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;

class ArticleController extends Controller
{

    public function index(Request $request)
    {
        $filters = $request->only(['search', 'sortByTax', 'sortByName', 'sortByPrice', 'sortByExpiresAt', 'sortByStock']);


        $articles = Article::paginate(12)
                    ->through(function($article){
                        if ($article->expires_at)
                            $article->expires_at = Carbon::parse($article->expires_at)->diffForHumans();
                        else
                            $article->expires_at = '-';
                        return $article;
                    });
        return Inertia::render('Article/Index', [
            'articles' => $articles
        ]);
    }

    public function create(Request $request)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
        return Inertia::render('Article/Create', [
            'message' => $message
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_id.id' => 'required|integer|min:1',
            'name' => 'required|string|max:256',
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
        $a->price = $request->price;
        $a->tax = $request->tax;
        $a->stock = $request->stock;
        
        if (!$request->tax)
            $a->tax = 0;
        $a->expires_at = Carbon::parse($request->expires_at);
        if (!$request->expires_at)
            $a->expires_at = null;

        $a->save();
        $c->save();
        $request->session()->put('message', 'Article ajouté avec succès');
        return redirect(route('articles.create'));
    }

    public function edit(Request $request, Article $article)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
        if ($article->expires_at)
            $article->expires_at = Carbon::parse($article->expires_at)->format('Y-m-d');
        return Inertia::render('Article/Edit', [
            'category' => Category::where('id', $article->category_id)->select('id', 'name')->first(),
            'article' => $article,
            'message' => $message
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'category_id.id' => 'required|integer|min:1',
            'name' => 'required|string|max:256',
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
        $article->price = $request->price;
        $article->stock = $request->stock;

        $article->tax = $request->tax;
        if (!$request->tax)
            $article->tax = 0;
        $article->expires_at = Carbon::parse($request->expires_at);
        if (!$request->expires_at)
            $article->expires_at = null;

        $article->save();
        
        $request->session()->put('message', 'Article édité avec succès');
        return redirect(route('articles.edit', $article->id));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByTax', 'sortByName', 'sortByPrice', 'sortByExpiresAt', 'sortByStock']);
        $articles = Article::filter($filters)
                        ->paginate(12)
                        ->withQueryString()
                        ->through(function($article){
                            if ($article->expires_at)
                                $article->expires_at = Carbon::parse($article->expires_at)->diffForHumans();
                            else
                                $article->expires_at = '-';
                            return $article;
                        });
        return $articles;
    }

    public function destroy(Article $article)
    {
        $article->delete();
        $c = Category::find($article->category_id);
        $c->articles = $c->articles - 1;
        $c->save();
        return redirect(route('articles.index'));
    }

    public function export(){
        return Excel::download(new ArticleExport, 'articles.xlsx');
    }
}
