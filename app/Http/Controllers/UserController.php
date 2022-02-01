<?php

namespace App\Http\Controllers;

use App\Publication;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
//        $this->middleware('customer');
    }
    public function myreading($id)
    {
        $user_publications = User::find($id)->publications;
        return view('site.pages.mybooks', compact('user_publications'));
    }
    public function read(Publication $publication){

//        dd(asset($publication->file));
        return view('site.pages.read', compact('publication'));

    }
}
