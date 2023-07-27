<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $table = 'movies';
    protected $fillable = [
        'title',
        'year',
        'length_minutes',
        'genre',
        'director_id',
        'actor_id',
        'is_removed'
    ];

    public function director(){
        return $this->belongsTo(Director::class);
    }

    public function actor(){
        return $this->belongsTo(Actor::class);
    }
}
