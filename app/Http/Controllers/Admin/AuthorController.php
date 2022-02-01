<?php

namespace App\Http\Controllers\Admin;

use App\Author;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use File;

class AuthorController extends Controller
{
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
        $authors = Author::all();
        return response()->json(['authors' => $authors]);
    }

    public function index()
    {
        return view('admin.author.index');
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
        if ($request->has('img')){
            $img = $request->file('img')->move('photos/author', uniqid().$request->file('img')->getClientOriginalName());
        }
        $author = new author();
        $author->name = $request->name;
        $author->country = $request->country;
        $author->bio = $request->bio;
        $author->type = $request->type;
        $author->dob = $request->dob;
        $author->img = $img;
        $author->created_by = Auth::user()->id;

        $author->save();

        return response()->json(['message' => 'Author added successfully👍', 'icon' => 'success']);

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
        $author = Author::find($request->id);

        if ($request->has('img')){
            File::delete($author->img);
            $img = $request->file('img')->move('photos/author', uniqid().$request->file('img')->getClientOriginalName());
        }else{
            $img = $author->img;
        }

        $author->name = $request->name;
        $author->country = $request->country;
        $author->bio = $request->bio;
        $author->type = $request->type;
        $author->dob = $request->dob;
        $author->img = $img;

        $author->save();

        return response()->json(['message' => 'Author updated successfully👍', 'icon' => 'success']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, Request $request)
    {
        $author = Author::find($request->id);
        File::delete($author->img);
        $author->delete();

        return response()->json(['message' => 'Author deleted successfully 👍', 'icon'=>'success']);
    }
}
