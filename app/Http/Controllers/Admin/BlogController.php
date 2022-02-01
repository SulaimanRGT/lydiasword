<?php

namespace App\Http\Controllers\Admin;

use App\Blog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class BlogController extends Controller
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

    public function table()
    {
        $blogs = Blog::all();
        return response()->json(['blogs' => $blogs]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
        return view('admin.blog.index');
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
            //if yes store the image in the following folder
            $image = $request->file('image')->move('photos\blog', uniqid().$request->file('image')->getClientOriginalName());

        }else{
            //if no image pass a default image
            $image = 'photos/default.png';
        }
        if ($request->has('author_image')){
            //if yes store the image in the following folder
            $author_image = $request->file('author_image')->move('photos\blog', uniqid().$request->file('author_image')->getClientOriginalName());

        }else{
            //if no pass a default image
            $author_image = 'photos/defaulduser.png';
        }


        $blog = new Blog();

        $blog->title = $request->title;
        $blog->content = $request->input('content');
        $blog->author = $request->author;
        $blog->created_by = Auth::user()->id;
        $blog->author_image = $author_image;
        $blog->image = $image;
        $blog->status = $request->status;
        $blog->save();

        return response()->json(['message' => 'Blog created successfully', 'icon' => 'success']);
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
        $blog = Blog::find($request->id);
        if ($request->has('image')){
            //if yes store the image in the following folder
            $image = $request->file('image')->move('photos\blog', uniqid().$request->file('image')->getClientOriginalName());

        }else{
            //if no pass a default image
            $image = $blog->image;
        }
        if ($request->has('author_image')){
            //if yes store the image in the following folder
            $author_image = $request->file('author_image')->move('photos\blog', uniqid().$request->file('author_image')->getClientOriginalName());

        }else{
            //if no pass a default image
            $author_image = $blog->author_image;
        }


        $blog->title = $request->title;
        $blog->content = $request->input('content');
        $blog->author = $request->author;
        $blog->created_by = Auth::user()->id;
        $blog->author_image = $author_image;
        $blog->image = $image;
        $blog->status = $request->status;

        $blog->save();

        return response()->json(['message' => 'Blog updated successfully', 'icon' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, Request $request)
    {
        $blog = Blog::find($request->id);
        File::delete($blog->author_image);
        File::delete($blog->image);
        $blog->delete();

        return response()->json(['message' => 'Blog updated successfully', 'icon' => 'success']);
    }

    public function deleteimg()
    {
       $img =  File::delete('photos/blog/61365ab55b94686.png');

       dd($img);
    }
}
