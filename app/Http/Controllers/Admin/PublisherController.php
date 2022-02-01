<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Publisher;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
        $this->middleware('admin');
    }

    public function table()
    {
        $publishers = Publisher::all();
//        print($publisher);
        return response()->json(['publishers' => $publishers]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
//        $publisher = Publisher::all();, compact('publisher')
        return view('admin.publisher.index');
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
    //     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $publisher = new Publisher();
        $publisher->name = $request->input('name');
        $publisher->contact = $request->input('contact');
        $publisher->city = $request->input('city');
        $publisher->country = $request->input('country');
        $publisher->save();

        return response()->json(['message' => 'Publisher Added Successful', 'icon' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
    //     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
    //     * @return \Illuminate\Http\Response
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
        $publisher = Publisher::findOrFail($request->id);
        $publisher->name = $request->input('name');
        $publisher->contact = $request->input('contact');
        $publisher->city = $request->input('city');
        $publisher->country = $request->input('country');
        $publisher->save();

        return response()->json(['message' => 'Update successful', 'icon' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
    //     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $publisher = Publisher::findOrFail($request->id);
        $publisher->delete();

        return response()->json(['message' => 'Delete Successful', 'icon' => 'success']);
    }
}
