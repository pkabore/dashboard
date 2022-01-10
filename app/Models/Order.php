<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('article', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByArticle'] ?? null, function($query, $sortByArticle){
            return $query->orderBy('article', $sortByArticle);
        })
        ->when($filters['sortByQty'] ?? null, function($query, $sortByQty){
            return $query->orderBy('qty', $sortByQty);
        })
        ->when($filters['sortByTotalPrice'] ?? null, function($query, $sortByTotalPrice){
            return $query->orderBy('total_price', $sortByTotalPrice);
        })
        ->when($filters['sortByCreatedAt'] ?? null, function($query, $sortByCreatedAt){
            return $query->orderBy('created_at', $sortByCreatedAt);
        });
    }
}
