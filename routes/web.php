<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\QuoteController;
//use App\Http\Controllers\MetadataController;

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
    return Inertia::render('Stats/Index');
})->middleware(['auth', 'verified'])->name('home');


Route::resource('articles', ArticleController::class)->middleware(['auth', 'verified']);
Route::resource('clients', ClientController::class)->middleware(['auth', 'verified']);
Route::resource('sales', SaleController::class)->middleware(['auth', 'verified']);
Route::resource('categories', CategoryController::class)->middleware(['auth', 'verified']);
Route::resource('expenses', ExpenseController::class)->middleware(['auth', 'verified']);
Route::resource('bills', BillController::class)->middleware(['auth', 'verified']);
Route::resource('quotes', QuoteController::class)->middleware(['auth', 'verified']);


Route::post('/articles/search', [ArticleController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('articles.search');

Route::post('/clients/search', [ClientController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('clients.search');

Route::post('/categories/search', [CategoryController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('categories.search');

Route::post('/sales/search', [SaleController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('sales.search');

Route::post('/expenses/search', [ExpenseController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('expenses.search');

Route::post('/bills/search', [BillController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('bills.search');

Route::post('/invoices/search', [QuoteController::class, 'search'])
        ->middleware(['auth', 'verified'])
        ->name('invoices.search');

require __DIR__.'/auth.php';