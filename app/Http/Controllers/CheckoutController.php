<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
//        $this->middleware('customer');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {

        $cartItems = \Cart::session(Auth::id())->getContent();
        $page = 'Checkout';
        $message = 'Complete your purchased below';
        return view('site.checkout.index', compact('cartItems', 'page','message'));

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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cart = \Cart::session(Auth::user()->id)->getContent('items');
        foreach ($cart as $c){
            DB::table('user_publication')->insert(array(
                'user_id' => Auth::user()->id,
                'publication_id' => $c->id,
                'is_paid' => 1,
                'price' => $c->price,
                'payment_type' => 'Credit Card',
                'created_at' => Carbon::now(),
            ));

            echo($c->id.'<br>');
        }
//
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Routing\Redirector
     */
    public function tipMe(Request $request)
    {
        $checkpurchased = DB::table('user_publication')->where('user_id', Auth::user()->id)->where('publication_id', $request->id)->first();
        if ($checkpurchased){
            $notification = array(
                'message' => 'You have already purchased this book',
                'alert-type' => 'success'
            );

            return redirect(route('publication'))->with($notification);
        }else {


            DB::table('user_publication')->insert(array(
                'user_id' => Auth::user()->id,
                'publication_id' => $request->id,
                'is_paid' => 1,
                'price' => $request->price,
                'payment_type' => 'TipMe',
                'created_at' => Carbon::now(),
            ));

            $notification = array(
                'message' => 'Purchase completed successfully. please visit my reading at the top of the navigation bar to read your book',
                'alert-type' => 'success'
            );

            return redirect(route('publication'))->with($notification);
         }
    }







    public function creditCard(Request $request)
    {
        $checkpurchased = DB::table('user_publication')->where('user_id', Auth::user()->id)->where('publication_id', $request->id)->first();
        if ($checkpurchased){
            $notification = array(
                'message' => 'You have already purchased this book',
                'alert-type' => 'success'
            );

            return redirect(route('publication'))->with($notification);
        }else {
            DB::table('user_publication')->insert(array(
                'user_id' => Auth::user()->id,
                'publication_id' => $request->id,
                'isPaid' => 1,
                'price' => $request->price,
                'paymentType' => 'CreditCard',
                'created_at' => Carbon::now(),
            ));

            $notification = array(
                'message' => 'Purchase completed successfully. please visit my reading at the top of the navigation bar to read your book',
                'alert-type' => 'success'
            );

            return redirect(route('publication'))->with($notification);
        }
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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
