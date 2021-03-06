<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('name', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByName'] ?? null, function($query, $sortByName){
            return $query->orderBy('name', $sortByName);
        })
        ->when($filters['sortByArticles'] ?? null, function($query, $sortByArticles){
            return $query->orderBy('articles', $sortByArticles);
        });
    }
}
