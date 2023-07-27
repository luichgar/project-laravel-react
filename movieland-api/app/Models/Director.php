<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    use HasFactory;
    protected $table = 'directors';
    protected $fillable = [
        'name',
        'country',
        'birth_year',
        'is_removed'
    ];
    

    public function movie()
    {
        return $this->hasMany(Movie::class);
    }

}
