<?php

namespace App\Http\Controllers;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index(){
        $movies = Movie::all();
        return response()->json($movies);
    }

      public function show($id)
    {
        $movies = Movie::findOrFail($id);
        return response()->json($movies);
    }

    public function store(Request $request){
      /*   $request->validate([
            'title'=>'required|string',
            'year'=>'required|year|digits:4',
            'length_minutes'=>'required|numeric',
            'genre'=>'required|string',
            'director_id'=>'numeric|exists:directors,id',
            'actor_id'=>'numeric|exists:actors,id'
        ]);   */
        
        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    public function update(Request $request, $id)
    {
    /*     $request->validate([
            'title'=>'required|string',
            'year'=>'required|year|digits:4',
            'length_minutes'=>'required|numeric',
            'genre'=>'required|string',
            'director_id'=>'numeric|exists:directors,id',
            'actor_id'=>'numeric|exists:actors,id'
        ]); */ 
    
        $movie = Movie::findOrFail($id);

        $movie->update($request);
        return response()->json($movie, 200);
    }

    public function remove($id){
        $movie = Movie::findOrFail($id);
        if($movie->is_removed){
            return response()->json(['message'=>'the movie is already removed'], 200);
        } else {
            $movie->is_removed  = true;
            $movie->save();
            return response()->json(['message'=>'the movie was removed'], 200);
        }
        
    }
    
}
