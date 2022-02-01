<?php

namespace App\Http\Controllers;

use App\Payment;
use App\Publication;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TipMeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
    }

    public function tipMe(Request $request)
    {

        $checkpurchased = DB::table('user_publication')->where('user_id', Auth::user()->id)->where('publication_id', $request->id)->first();
        if ($checkpurchased)
        {
            $publication = Publication::find($checkpurchased->publication_id);
            return response()->json(['message' => 'You already purchase ('.$publication->title.')!', 'icon'=> 'warning', 'status' => 0, 'cid' => null, 'auth_token'=> null ]);
        }
            $authToken = self::getToken();

            if (empty($authToken)){

                return response()->json(['message' => 'Please check your internet and try again', 'icon'=> 'warning', 'status' => 0, 'cid' => $request->cid, 'auth_token'=> $authToken ]);

            }else{

                if ($authToken['data']['status'] != 1){

                    return response()->json(['message' => 'Unauthorized user', 'icon'=> 'warning', 'status' => 0, 'cid' => null, 'auth_token'=> $authToken ]);

                }else{

                    $curl = curl_init();

                    curl_setopt_array($curl, array(
                        CURLOPT_URL => env('CUSTOMER_CHECK_ENDPOINT'),
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => '',
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 0,
                        CURLOPT_FOLLOWLOCATION => true,
                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                        CURLOPT_CUSTOMREQUEST => 'POST',
                        CURLOPT_POSTFIELDS => [
                            'merchant_id' => env('MERCHANT_ID'),
                            'auth_token' => $authToken['data']['auth_token'],
                            'customer_id' => $request->cid,
                        ],
                        CURLOPT_HTTPHEADER => array(
                            "authorizekey: ".env('AUTHORIZATION_KEY'),
                        ),
                    ));

                    $response = curl_exec($curl);
                    curl_close($curl);
                    $checkCustomerResult = json_decode( $response, true );



                    if (empty($checkCustomerResult)){

                        return response()->json(['message' => 'we did not found customer result', 'icon'=> 'warning', 'status' => 0, 'cid' => null, 'auth_token'=> null ]);

                    }else if ($checkCustomerResult['data']['status'] != "1"){

                        return response()->json(['message' => 'Error finding your account', 'icon'=> 'warning', 'status' => 0, 'cid' => $checkCustomerResult, 'auth_token'=> $authToken ]);

                    }else{

                        return response()->json(['message' => $authToken['data']['msg'], 'icon'=> 'success', 'cid' => $request->cid, 'status' => $checkCustomerResult['data']['status'], 'details' => $checkCustomerResult['data']['detail'], 'auth_token'=> $authToken]);

                    }

                }
            }
    }

    public static function getToken(){
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => env('AUTH_ENDPOINT'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => [
                'merchant_id' => env('MERCHANT_ID')
            ],
            CURLOPT_HTTPHEADER => array(
                "authorizekey: ".env('AUTHORIZATION_KEY'),
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return  json_decode( $response, true );
    }

    public function verifypin(Request $request)
    {

//        return response()->json(['cid' => $request->cid, 'price' => $request->price, 'pin' => $request->pin]);

        $tokenResult = self::getToken();

        if (empty($tokenResult)) {

            return response()->json(['message' => 'Sorry, slow network detected, kindly wait a few seconds and try again. Sorry for the inconvenience', 'icon' => 'warning', 'status' => 0, 'cid' => $request->cid, 'auth_token' => $tokenResult]);
        }

            if (empty($request->pin) || empty($request->price) || empty($request->cid)){

                return response()->json(['message' => 'Please provide the needed information', 'icon' => 'warning', 'status' => 0, 'cid' => null, 'auth_token' => null]);

            }
        if ($tokenResult['data']['status'] != "1") {
            return response()->json(['message' => 'Unauthorized user', 'icon'=> 'warning', 'status' => 0, 'cid' => null, 'auth_token'=> null ]);
        }else {


            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => env('ACCESS_PIN_VERIFICATION_ENDPOINT'),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => [
                    'merchant_id' => env('MERCHANT_ID'),
                    'auth_token' => $tokenResult['data']['auth_token'],
                    'customer_id' => $request->cid,
                    'amount' => $request->price,
                    'currency_code' => 'USD',
                    'access_pin' => $request->pin,
                    'transation_type' => 'Receive'
                ],
                CURLOPT_HTTPHEADER => array(
                    "authorizekey: " . env('AUTHORIZATION_KEY'),
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            $customerCheckResult = json_decode($response, true);



            if (empty($customerCheckResult)){

                return response()->json(['message' => $customerCheckResult['data']['msg'], 'icon'=> 'warning', 'status' => 0, 'cid' => 'CID', 'auth_token'=> $customerCheckResult  , 'data' => $request->pin.' '.$request->cid.' '.$request->price]);

            }else if ($customerCheckResult['data']['status'] != "1"){

                return response()->json(['message' => $customerCheckResult['data']['msg'], 'icon'=> 'warning', 'status' => 0, 'cid' => null, 'auth_token'=> null  , 'data' => $request->pin.' '.$request->cid.' '.$request->price]);

            }else{
//                        return response($response);
                return response()->json(['status' => $customerCheckResult['data']['status'], 'message' => $customerCheckResult['data']['msg'] , 'icon' =>'success', 'data' => $request->pin.' '.$request->cid.' '.$request->price]);

            }
        }
    }

    public function verifyOtp(Request $request)
    {
        $checkpurchased = DB::table('user_publication')->where('user_id', Auth::user()->id)->where('publication_id', $request->id)->first();
        if ($checkpurchased){

            return response()->json(['message' => 'you have already purchased this book', 'icon'=> 'warning', 'status' => 0, 'cid' => $request->id, 'auth_token'=> null ]);

        }else {
//        return response()->json(['cid' => $request->cid, 'price' => $request->price, 'pin' => $request->pin]);

            $tokenResult = self::getToken();

            if (empty($tokenResult)) {

                return response()->json(['message' => 'Sorry, slow network detected, kindly wait a few seconds and try again. Sorry for the inconvenience', 'icon' => 'warning', 'status' => 0, 'cid' => $request->cid, 'auth_token' => $tokenResult]);
            }

            if (empty($request->otp) || empty($request->price) || empty($request->id)) {

                return response()->json(['message' => 'Please provide the needed information', 'icon' => 'warning', 'status' => 0, 'cid' => null, 'auth_token' => null]);

            }
            if ($tokenResult['data']['status'] != "1") {
                return response()->json(['message' => 'Unauthorized user', 'icon' => 'warning', 'status' => 0, 'cid' => null, 'auth_token' => null]);
            } else {


                $curl = curl_init();

                curl_setopt_array($curl, array(
                    CURLOPT_URL => env('CONFIRM_TRANSACTION'),
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => [
                        'merchant_id' => env('MERCHANT_ID'),
                        'auth_token' => $tokenResult['data']['auth_token'],
                        'customer_id' => $request->cid,
                        'otp' => $request->otp,
                        'amount' => $request->price,
                        'currency_code' => 'USD',
                        'charges_by' => 'Receiver',
                        'transation_type' => 'Receive',
                        'description' => $request->cid . ' bought a publication for $' . $request->price . 'USD'
                    ],
                    CURLOPT_HTTPHEADER => array(
                        "authorizekey: " . env('AUTHORIZATION_KEY'),
                    ),
                ));

                $response = curl_exec($curl);

                curl_close($curl);
                $customerCheckResult = json_decode($response, true);

                if (empty($customerCheckResult)) {
                    return response()->json(['message' => $customerCheckResult['data']['msg'], 'icon' => 'warning', 'status' => $customerCheckResult['data']['status'], 'cid' => $request->cid . 'a', 'auth_token' => $tokenResult]);

                } else if ($customerCheckResult['data']['status'] != "1") {
                    return response()->json(['message' => $customerCheckResult['data']['msg'], 'icon' => 'warning', 'status' => $customerCheckResult['data']['status'], 'cid' => $request->cid . 'b', 'auth_token' => $tokenResult]);

                } else {
                    $payment = new payment();
                    $payment->customer_id = Auth::user()->id;
                    $payment->name = $request->username;
                    $payment->amount_paid = $request->price;
                    $payment->discount = 0;
                    $payment->total = $request->price;
                    $payment->created_at = Carbon::now();
                    $payment->save();
                    if ($payment){
                        $addToLibraryResult =
                            DB::table('user_publication')->insert(array(
                                'user_id' => Auth::user()->id,
                                'publication_id' => $request->id,
                                'payment_id' => $payment->id,
                                'is_paid' => 1,
                                'price' => $request->price,
                                'payment_type' => 'TipMe',
                                'created_at' => Carbon::now(),
                            ));
                        if ($addToLibraryResult) {
                            $pub = Publication::find($request->id);
                            $pdf = asset($pub->file);
                            return response()->json(['message' => 'Publication save successfully', 'icon' => 'success', 'status' => $customerCheckResult['data']['status'], 'pdf' => $pdf, 'pubid' => $pub->id]);

                        } else {
                            return response()->json(['message' => 'publication not save, please contact our support team', 'icon' => 'warning', 'status' => $customerCheckResult['data']['status'], 'cid' => null, 'auth_token' => $tokenResult]);

                        }
                    }else{
                        return response()->json(['message' => 'publication not save, please contact our support team', 'icon' => 'warning', 'status' => $customerCheckResult['data']['status']]);
                    }

                }


            }
        }
    }

}
