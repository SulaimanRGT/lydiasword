<?php

namespace App\Http\Controllers\Admin;

use App\Author;
use App\Http\Controllers\Controller;
use App\Publication;
use Illuminate\Http\Request;
use File;
use Illuminate\Support\Facades\DB;

class PublicationController extends Controller
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
        $publications = Publication::all();

        return response()->json(['publications' => $publications]);
    }


    public function index()
    {
        $authors = Author::all();
        $publications = Publication::all();
        foreach($publications as &$publication){
            $publication->count = DB::table('user_publication')->where('publication_id', $publication->id)->count();
        }
        return view('admin.publication.index', compact('authors', 'publications'));
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

        $checkpublication = Publication::where('title', $request->title)->first();

        if ($checkpublication){
            return response()->json(['message' => 'This publication is already uploaded!', 'icon' => 'warning']);
        }


        if ($request->has('cover')){
            $cover = $request->file('cover')->move('publications/'.$request->type.'/', uniqid().$request->file('cover')->getClientOriginalName());
        }
        if ($request->has('file')){
            $file = $request->file('file')->move('publications/'.$request->type.'/', uniqid().$request->file('file')->getClientOriginalName());
        }

        $publication = new Publication();
        $publication->title = $request->title;
        $publication->genre = $request->genre;
        $publication->type = $request->type;
        $publication->isbn = $request->isbn;
        $publication->published_year = $request->published_year;
        $publication->price = $request->price;
        $publication->cover = $cover;
        $publication->file = $file;
        $publication->status = 0;
        $publication->summary = $request->summary;
        $publication->publisher_id = $request->publisher_id;
        $publication->author_id = $request->author_id;
        if($publication->save()){

            return response()->json(['message' => 'Publications added successfully👍', 'icon' => 'success']);

        };

        return response()->json(['message' => 'we enounter an error, please try a !', 'icon' => 'warning']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function show($id)
    {
        $publication = Publication::find($id);

        return view('admin.publication.show', compact('publication'));
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
        $checkpublication = Publication::where('title', $request->title)->where('id', '!=', $request->id)->first();


        if ($checkpublication !== null){
            return response()->json(['message' => 'This publication is already uploaded!', 'icon' => 'warning']);
        }

        $publication = Publication::find($request->id);

        if ($request->has('cover')){
            File::delete($publication->cover);
            $cover = $request->file('cover')->move('publications/'.$request->type, uniqid().$request->file('cover')->getClientOriginalName());
        }else{

            $cover = $publication->cover;
        }

        if ($request->has('file')){
            File::delete($publication->file);
            $file = $request->file('file')->move('publications/'.$request->type.'/', uniqid().$request->file('file')->getClientOriginalName());
        }else{
            $file = $publication->file;
        }

        $publication->title = $request->title;
        $publication->genre = $request->genre;
        $publication->type = $request->type;
        $publication->isbn = $request->isbn;
        $publication->published_year = $request->published_year;
        $publication->price = $request->price;
        $publication->cover = $cover;
        $publication->file = $file;
        $publication->status = 0;
        $publication->summary = $request->summary;
        $publication->publisher_id = $request->publisher_id;
        $publication->author_id = $request->author_id;
        if($publication->save()){

            return response()->json(['message' => 'Publications updated successfully👍', 'icon' => 'success']);

        };

        return response()->json(['message' => 'we enounter an error, please try a !', 'icon' => 'warning']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, Request $request)
    {
        $publication = Publication::find($request->id);
        File::delete($publication->cover);
        File::delete($publication->file);
        $publication->delete();
        return response()->json(['message' => 'Publication deleted successfully 👍', 'icon' => 'success']);
    }
}
