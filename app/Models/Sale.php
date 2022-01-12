<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('receipt_id', 'LIKE', '%'.$search.'%')
                      ->orWhere('date', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByReceiptId'] ?? null, function($query, $sortByReceiptId){
            return $query->orderBy('receipt_id', $sortByReceiptId);
        })
        ->when($filters['sortByDate'] ?? null, function($query, $sortByDate){
            return $query->orderBy('date', $sortByDate);
        })
        ->when($filters['sortByTaxes'] ?? null, function($query, $sortByTaxes){
            return $query->orderBy('taxes', $sortByTaxes);
        })
        ->when($filters['sortByTotal'] ?? null, function($query, $sortByTotal){
            return $query->orderBy('total', $sortByTotal);
        });
    }
}
