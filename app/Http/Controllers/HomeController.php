<?php

namespace App\Http\Controllers;

use App\ContactMessage;
use App\Payment;
use App\Publication;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Console\Input\Input;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
    * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $publications = Publication::all();
        return view('site.index', compact('publications'));
    }

    public function publications()
    {
        $publications = Publication::all();
        return view('site.pages.publications', compact('publications'));
    }

    public function goTologin($id)
    {
        return redirect(route('publication', $id));
    }

    public function publication($id)
    {
        $publications = Publication::all();
        $publication = Publication::find($id);
        return view('site.pages.publication_details', compact('publications','publication'));

    }

    public function blog()
    {
        $page = 'Blog';
        $message = 'Get inspire by our blog post ';
        return view('site.pages.blog', compact('page','message'));
    }

    public function team()
    {
        $page = 'Team';
        $message = 'Meet our team. Full of expertise';
        return view('site.pages.team', compact('page','message'));
    }

    public function Contact_us(Request $request)
    {
        $contact = new ContactMessage();
        $contact->name = $request->input('name');
        $contact->email = $request->input('email');
        $contact->message = $request->input('message');
        $contact->save();
//        $email = $request->email;
        Mail::to('s.barry0199@gmail.com')->send(new \App\Mail\ContactMessage($contact));

//        $data = [
//            'email'   => $request->input('email'),
//            'name' => $request->input('name'),
//            'body'    => $request->input('message')
//        ];
//        Mail::send($request->message, $data, function ($message) use ($data) {
//            $message->to('s.barry0199@gmail.com','Sulaiman A. Barry');
//            $message->from($data['email']);
//            $message->subject('Message from Contact form');
//            });
        return response()->json(['title' => 'Good job!','message' => 'Message was send Successfully', 'icon' => 'success']);
    }

}
