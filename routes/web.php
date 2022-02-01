<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/status/{message}', function ($message) {
    return view('welcome',compact('message'));
})->name('status');

Route::get('/', 'HomeController@index')->name('/');

Auth::routes();

Route::name('admin.')->prefix('admin')->group(function(){

    Route::get('/home', 'Admin\HomeController@index')->name('home');
    Route::resource('users', 'Admin\UserController');
    Route::post('updateStatus', 'Admin\UserController@updateStatus')->name('updateStatus');
    Route::put('profileImage', 'Admin\UserController@updateImage')->name('profileImage');
    Route::put('changePwd', 'Admin\UserController@changePwd')->name('changePwd');

    Route::resource('team', 'Admin\TeamController');
    Route::get('teamtable', 'Admin\TeamController@table')->name('team.table');

    Route::resource('author', 'Admin\AuthorController');
    Route::get('authortable', 'Admin\AuthorController@table')->name('author.table');

    Route::resource('blog', 'Admin\BlogController');
    Route::get('blogtable', 'Admin\BlogController@table')->name('blog.table');
    Route::get('deleteimg', 'Admin\BlogController@deleteimg')->name('blog.delete');

    Route::resource('publisher', 'Admin\PublisherController');
    Route::get('publisherstable', 'Admin\PublisherController@table')->name('publisher.table');

    Route::resource('customer', 'Admin\CustomerController');

    Route::resource('publication', 'Admin\PublicationController');
    Route::get('publicationtable', 'Admin\PublicationController@table')->name('publication.table');

    Route::resource('coupon', 'Admin\CouponController');
    Route::get('coupontable', 'Admin\CouponController@table')->name('coupon.table');

});

Auth::routes(['verify' => true]);

//pages routes and controllers
Route::get('/blogs', 'HomeController@blog')->name('blogs');
Route::get('/teams', 'HomeController@team')->name('teams');
Route::get('/publication', 'HomeController@publications')->name('publication');
Route::get('/publication/{id}', 'HomeController@publication')->name('publication.show');
Route::post('/Contact_us', 'HomeController@Contact_us')->name('Contact_us');
//processed to lognin
Route::get('processedtologin/{id}', 'HomeController@goTologin')->name('processedtologin');

//cart routes and controllers
Route::get('addToCart/{publication}', 'CartController@addToCart')->name('add.to.cart')->middleware('auth','verified');
Route::get('cart', 'CartController@index')->name('cart')->middleware('auth','verified');
Route::post('applycoupon', 'CartController@applyCoupon')->name('apply.coupon')->middleware('auth','verified');
Route::get('cart.destroy/{itemId}', 'CartController@destroy')->name('cart.destroy')->middleware('auth','verified');

//checkout routes and controllers
Route::resource('checkout', 'CheckoutController');

//tipme routes and controllers
Route::post('paywithtipme', 'TipMeController@tipMe')->name('tipme')->middleware('auth','verified');
Route::post('verifytipme', 'TipMeController@verifypin')->name('tipme.verify')->middleware('auth','verified');
Route::post('tipmeotp', 'TipMeController@verifyotp')->name('tipme.verify.otp')->middleware('auth','verified');

// tipme routes and controller from cart
Route::post('cartpaywithtipme', 'TipMeCartController@tipMe')->name('cart.tipme')->middleware('auth','verified');
Route::post('cartverifytipme', 'TipMeCartController@verifypin')->name('cart.tipme.verify')->middleware('auth','verified');
Route::post('carttipmeotp', 'TipMeCartController@verifyotp')->name('cart.tipme.verify.otp')->middleware('auth','verified');

//credit card controller
Route::post('paywithcard', 'CheckoutController@creditCard')->name('credit.card')->middleware('auth','verified');

//user books purchased controller
Route::get('mybooks/{id}', 'UserController@myreading')->name('my.reading')->middleware('auth','verified');
Route::get('/read/{publication}', 'UserController@read')->name('read')->middleware('auth','verified');

