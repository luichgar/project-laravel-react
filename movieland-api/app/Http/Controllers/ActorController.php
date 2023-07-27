<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function index(){
        $actors = Actor::all();
        return response()->json($actors);
    }

      public function show($id)
    {
        $actor = Actor::findOrFail($id);
        return response()->json($actor);
    }

    public function store(Request $request){
      /*   $request->validate([
            'name'=>'required|string',
            'country'=>'required|string',
            'birht_year'=>'required|integer|digits:4',
        ]);  */ 
        
        $actor = Actor::create($request->all());
        return response()->json($actor, 201);
    }

    public function update(Request $request, $id)
    {
        /* $request->validate([
            'name'=>'required|string',
            'country'=>'required|string',
            'birht_year'=>'required|integer|digits:4',
        ]);  
          */
    
        $actor = Actor::findOrFail($id);

        $actor->update($request);
        return response()->json($actor, 200);
    }

    public function remove($id){
        $actor = Actor::findOrFail($id);
        if($actor->is_removed){
            return response()->json(['message'=>'the actor is already removed'], 200);
        } else {
            $actor->is_removed  = true;
            $actor->save();
            return response()->json(['message'=>'the actor was removed'], 200);
        }
        
    }
}
