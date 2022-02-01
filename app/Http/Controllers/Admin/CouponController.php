<?php

namespace App\Http\Controllers\Admin;

use App\Coupon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
        $this->middleware('admin');
    }

    public function table()
    {
        $coupons = Coupon::all();
//        print($publisher);
        return response()->json(['coupons' => $coupons]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
        return view('admin.coupon.index');
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

        $coupon = new Coupon();

        $coupon->name = $request->name;
        $coupon->code = $request->code;
        $coupon->type = $request->type;
        $coupon->value =$request->value;
        $coupon->description = $request->description;
        $coupon->save();

        return response()->json(['message' => 'Coupond code created successfully', 'icon' => 'success']);

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
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $checkIfCouponNameExist = Coupon::where('name', $request->name)->where('id', '!=', $request->id)->first();
        $checkIfCouponCodeExist = Coupon::where('code', $request->code)->where('id', '!=', $request->id)->first();

        if (!empty($checkIfCouponCodeExist) || !empty($checkIfCouponNameExist)){

            return response()->json(['message' => 'Coupon already exist!!!', 'icon' => 'warning']);

        }
        $coupon = Coupon::find($request->id);
        $coupon->name = $request->name;
        $coupon->code = $request->code;
        $coupon->type = $request->type;
        $coupon->value = $request->value;
        $coupon->description = $request->description;
        $coupon->save();

        return response()->json(['message' => 'Coupon code updated successfully', 'icon' => 'success']);

    }

    /**
     * Remove the specified resource from storage.
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $coupon = Coupon::find($request->id);
        $coupon->delete();

        return response()->json(['message' => 'Coupon deleted successfully']);
    }
}
