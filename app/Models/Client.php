<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function setFnameAttribute($value)
    {
        $this->attributes['fname'] = strtoupper($value);
    }

    public function setLnameAttribute($value)
    {
        $this->attributes['lname'] = strtoupper($value);
    }

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function($query, $search){
            $query->where(function ($query) use ($search) {
                return $query->where('lname', 'LIKE', '%'.$search.'%')
                      ->orWhere('email', 'LIKE', '%'.$search.'%')
                      ->orWhere('phone', 'LIKE', '%'.$search.'%')
                      ->orWhere('address', 'LIKE', '%'.$search.'%');
            });
        })
        ->when($filters['sortByFname'] ?? null, function($query, $sortByFname){
            return $query->orderBy('fname', $sortByFname);
        })
        ->when($filters['sortByLname'] ?? null, function($query, $sortByLname){
            return $query->orderBy('lname', $sortByLname);
        })
        ->when($filters['sortByEmail'] ?? null, function($query, $sortByEmail){
            return $query->orderBy('email', $sortByEmail);
        })
        ->when($filters['sortByPhone'] ?? null, function($query, $sortByPhone){
            return $query->orderBy('phone', $sortByPhone);
        })
        ->when($filters['sortByAddress'] ?? null, function($query, $sortByAddress){
            return $query->orderBy('address', $sortByAddress);
        });
    }
}
