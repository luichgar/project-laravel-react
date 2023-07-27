<?php

namespace App\Http\Controllers;

use App\Models\Director;
use Illuminate\Http\Request;

class DirectorController extends Controller
{
    public function index(){
        $directors = Director::all();
        return response()->json($directors);
    }

      public function show($id)
    {
        $director = Director::findOrFail($id);
        return response()->json($director);
    }

    public function store(Request $request){
       /*  $validated = $request->validate([
            'name'=>'required|string',
            'country'=>'required|string',
            'birht_year'=>'required|numeric|digits:4',
        ]);  
 */
        
        $director = Director::create($request->all());
        return response()->json($director, 201);
    }

    public function update(Request $request, $id)
    {
       /*  $request->validate([
            'name'=>'required|string',
            'country'=>'required|string',
            'birht_year'=>'required|integer|digits:4',
        ]);   */
         
    
        $director = Director::findOrFail($id);

        $director->update($request);
        return response()->json($director, 200);
    }

    public function remove($id){
        $director = Director::findOrFail($id);
        if($director->is_removed){
            return response()->json(['message'=>'the director is already removed'], 200);
        } else {
            $director->is_removed  = true;
            $director->save();
            return response()->json(['message'=>'the director was removed'], 200);
        }
        
    }
}
