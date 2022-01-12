<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StatsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('articles', ArticleController::class)->middleware(['auth', 'verified']);
Route::resource('clients', ClientController::class)->middleware(['auth', 'verified']);
Route::resource('sales', SaleController::class)->middleware(['auth', 'verified']);
Route::resource('categories', CategoryController::class)->middleware(['auth', 'verified']);

Route::post('/articles/search', [ArticleController::class, 'search'])->middleware(['auth', 'verified'])->name('articles.search');
Route::post('/clients/search', [ClientController::class, 'search'])->middleware(['auth', 'verified'])->name('clients.search');
Route::post('/categories/search', [CategoryController::class, 'search'])->middleware(['auth', 'verified'])->name('categories.search');
Route::post('/sales/search', [SaleController::class, 'search'])->middleware(['auth', 'verified'])->name('sales.search');

Route::get('/stats', function(Request $request) {
    return Inertia::render('Dashboard/Stats/Index');
})->middleware(['auth', 'verified'])->name('stats');

require __DIR__.'/auth.php';
