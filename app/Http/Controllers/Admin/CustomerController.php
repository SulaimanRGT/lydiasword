<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
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
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
        $customers = User::all()->where('role', '===', 'customer');
        foreach($customers as &$customer){
            $customer->count = DB::table('user_publication')->where('user_id', $customer->id)->count();
        }
        return view('admin.user.customer.index', compact('customers'));
    }


//    public function updateStatus(Request $request)
//    {
//        $customer = User::find($request->id);
//        $customer->status = $request->input('status');
//        //  dd($Customer);
//        $customer->save();
//
//        $customer = User::find($request->id);
//        if ($customer->status == 1){
//            $message = 'You activate '.$customer->name.' account successfully';
//        }else{
//            $message = 'You Deactivated '.$customer->name.' account successfully';
//        }
//        $notification = array(
//            'message' => $message,
//            'alert_type' => 'success'
//        );
//        return redirect()->back()->with($notification);
//    }

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function show($id)
    {
        $user = User::find($id);
        return view('admin.user.customer.show', compact('user'));
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
