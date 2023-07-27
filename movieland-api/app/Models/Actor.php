<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    use HasFactory;
    protected $table = 'actors';
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
