<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Team;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class TeamController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
        $this->middleware('admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function table()
    {
        $teams = Team::all();
        return response()->json(['teams' => $teams]);
    }

    public function index()
    {
        return view('admin.team.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if ($request->has('image')){
            $img = $request->file('image')->move('photos/team', uniqid().$request->file('image')->getClientOriginalName());
        }
        $team = new team();
        $team->name = $request->name;
        $team->position = $request->position;
        $team->bio = $request->bio;
        $team->facebook = $request->facebook;
        $team->linkedin = $request->linkedin;
        $team->twitter = $request->twitter;
        $team->img = $img;
        $team->instagram = $request->instagram;
        $team->created_by = Auth::user()->id;

        $team->save();

        return response()->json(['message' => 'Team member added successfully👍', 'icon' => 'success']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $team = Team::find($request->id);

        if ($request->has('image')){
            $img = $request->file('image')->move('photos/team', uniqid().$request->file('image')->getClientOriginalName());
            File::delete($team->img);
        }else{
            $img = $team->img;
        }

        $team->name = $request->name;
        $team->position = $request->position;
        $team->bio = $request->bio;
        $team->facebook = $request->facebook;
        $team->linkedin = $request->linkedin;
        $team->twitter = $request->twitter;
        $team->instagram = $request->instagram;
        $team->img = $img;

        $team->save();

        return response()->json(['message' => 'Team member added successfully👍', 'icon' => 'success']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, Request $request)
    {
        $team = Team::find($request->id);
        File::delete($team->img);
        $team->delete();

        return response()->json(['message' => 'Team member deleted successfully 👍', 'icon'=>'success']);
    }
}
