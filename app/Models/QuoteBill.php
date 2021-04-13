<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuoteBill extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('receipt_id', 'LIKE', '%'.$search.'%')
                            ->orWhere('description', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByDate'] ?? null, function($query, $sortByDate){
            return $query->orderBy('created_at', $sortByDate);
        })
        ->when($filters['sortByClientName'] ?? null, function($query, $sortByClientName){
            return $query->orderBy('client_name', $sortByClientName);
        })
        ->when($filters['sortByClientPhone'] ?? null, function($query, $sortByClientPhone){
            return $query->orderBy('client_phone', $sortByClientPhone);
        })
        ->when($filters['sortByClientEmail'] ?? null, function($query, $sortByClientEmail){
            return $query->orderBy('client_name', $sortByClientEmail);
        })
        ->when($filters['sortByTotal'] ?? null, function($query, $sortByTotal){
            return $query->orderBy('total', $sortByTotal);
        })
        ->when($filters['sortByStatus'] ?? null, function($query, $sortByStatus){
            return $query->orderBy('status', $sortByStatus);
        });
    }
}
