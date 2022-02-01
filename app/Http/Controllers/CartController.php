<?php

namespace App\Http\Controllers;

use App\Coupon;
use App\Payment;
use App\Publication;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
//        $this->middleware('customer');
    }
    /**
     * Write code on Method
     *
     * @return response|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {


        $cartItems = \Cart::session(Auth::id())->getContent();

        return view('site.cart.index', compact('cartItems'));
    }

    /**
     * Write code on Method
     *
     * @return \Illuminate\Http\RedirectResponse()
     */
    public function addToCart(Publication $publication)
    {
        \Cart::session(Auth::id())->add(array(
            'id' => $publication->id,
            'name' => $publication->title,
            'price' => $publication->price,
            'size' => $publication->cover,
            'quantity' => 1,
            'attributes' => array(),
            'associatedModel' => $publication
        ));

        $notification = array(
            'message' => 'Product added to cart successfully',
            'alert-type' => 'success'
        );
        return redirect()->back()->with($notification);
    }



    public function applyCoupon(Request $request)
    {

        $coupondcode = request('coupon_code');

        if (empty($coupondcode)){
            $request->session()->flash('warning','Please provide a coupon code');
            return back();
        }

        $couponData = Coupon::where('code', $coupondcode)->first();

        if (!$couponData){
            $notification = array(
                'message' => 'Sorry coupon does not match',
                'alert-type' => 'warning'
            );

            return back()->with($notification);
        }
        //coupon logic
        $condition = new \Darryldecode\Cart\CartCondition(array(
            'name' => $couponData->name,
            'type' => $couponData->type,
            'target' => 'total',
            'value' => $couponData->value,
        ));

        \Cart::session(auth()->id())->condition($condition);  // get a specific user cart
        $notification = array(
            'message' => 'coupon applied successfully',
            'alert-type' => 'success'
        );

        return back()->with($notification);
    }



    /**
     * Write code on Method
     *
     * @return \Illuminate\Http\RedirectResponse|Response
     */
    public function update($itemId)
    {
        \Cart::session(Auth::id())->update($itemId,
            [
                'quantity' => array(
                    'relative' => false,
                    'value' => request('quantity')
                )
            ]);
        $notification = array(
            'message' => 'Item updated successfully',
            'alert-type' => 'success'
        );
        return back()->with($notification);
    }

    /**
     * Write code on Method
     *
     * @return \Illuminate\Http\RedirectResponse|Response
     */

    public function destroy($itemId){

        \Cart::session(Auth::id())->remove($itemId);

        $notification = array(
            'message' => 'Book removed successfully',
            'alert-type' => 'warning'
        );
        return back()->with($notification);
    }



    public function checkout()
    {
        $cartItems = \Cart::session(Auth::id())->getContent();
        return view('cart.checkout', compact('cartItems'));
    }

}
