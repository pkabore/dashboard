<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('description', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByDate'] ?? null, function($query, $sortByDate){
            return $query->orderBy('created_at', $sortByDate);
        })
        ->when($filters['sortByFee'] ?? null, function($query, $sortByFee){
            return $query->orderBy('fee', $sortByFee);
        });
    }
}
