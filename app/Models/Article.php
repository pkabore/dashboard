<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use DateTimeInterface;

class Article extends Model
{
    use HasFactory;

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('name', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByName'] ?? null, function($query, $sortByName){
            return $query->orderBy('name', $sortByName);
        })
        ->when($filters['sortByStock'] ?? null, function($query, $sortByStock){
            return $query->orderBy('stock', $sortByStock);
        })
        ->when($filters['sortByPrice'] ?? null, function($query, $sortByPrice){
            return $query->orderBy('price', $sortByPrice);
        })
        ->when($filters['sortByTax'] ?? null, function($query, $sortByTax){
            return $query->orderBy('tax', $sortByTax);
        })
        ->when($filters['sortByExpiresAt'] ?? null, function($query, $sortByExpiresAt){
            return $query->orderBy('expires_at', $sortByExpiresAt);
        });
    }
}
