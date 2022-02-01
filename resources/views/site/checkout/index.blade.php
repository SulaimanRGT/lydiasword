@extends('site.layout.app')

@section('content')

    <!-- Start main content -->
    @include('site.inc.pages-navbar')
    @include('site.inc.pages-banner')
    <!-- end Featured Slider -->

    <main role="main">

        <!-- Start Our books Book -->
        <section id="mu-book-overview">
            <div class="container">

                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="mu-book-overview-area">

                            <div class="mu-heading-area" style="margin-top: -80px;">
                                <h2 class="mu-heading-title">Select your payment type below</h2>
                                <span class="mu-header-dot"></span>
                                <div class="row" style="height: 40%">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a data-toggle="tab" href="#tipme">TipMe</a></li>
                                        <li><a data-toggle="tab" href="#credit_card">Credit Card</a></li>
                                    </ul>
                                    <div class="my-row">
                                        <div class="my-col-35">
                                            <div class="tab-content">
                                                <div id="tipme" class="tab-pane fade in active">
                                                    <div class="my-container">
                                                        <form action="{{route('checkout.store')}}" id="tipMe" method="POST">
                                                            @csrf
                                                            <div class="my-row">
                                                                <div class="my-col-50">
                                                                    <h3>TipMe Payment</h3>
                                                                    <label for="cid">Customer ID/CID</label>
                                                                    <input type="text" id="cid" name="cid" placeholder="CID000001">
                                                                    <label for="pin">Credit card number</label>
                                                                    <input type="password" id="pin" name="pin" placeholder="">
                                                                </div>

                                                            </div>
                                                            <input type="submit" value="Continue to checkout" class="my-btn primaryBackground">
                                                        </form>
                                                    </div>
                                                </div>
                                                <div id="credit_card" class="tab-pane fade">
                                                    <div class="my-container">
                                                        <form action="{{route('checkout.store')}}" id="credit_card" method="POST">
                                                            @csrf
                                                            <div class="my-row">
                                                                <div class="my-col-50">
                                                                    <h3>Payment</h3>
                                                                    <label for="fname">Accepted Cards</label>
                                                                    <div class="my-icon-container">
                                                                        <i class="fa fa-cc-visa" style="color:navy;"></i>
                                                                        <i class="fa fa-cc-mastercard" style="color:red;"></i>
                                                                    </div>
                                                                    <label for="cname">Name on Card</label>
                                                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe">
                                                                    <label for="ccnum">Credit card number</label>
                                                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                                                                    <label for="expmonth">Exp Month</label>
                                                                    <input type="text" id="expmonth" name="expmonth" placeholder="September">

                                                                    <div class="my-row">
                                                                        <div class="my-col-50">
                                                                            <label for="expyear">Exp Year</label>
                                                                            <input type="text" id="expyear" name="expyear" placeholder="2018">
                                                                        </div>
                                                                        <div class="my-col-50">
                                                                            <label for="cvv">CVV</label>
                                                                            <input type="text" id="cvv" name="cvv" placeholder="352">
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <input type="submit" value="Continue to checkout" class="my-btn primaryBackground">
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="my-col-35">
                                            <div class="my-container">
                                                <h4 style="text-align: left">Cart
                                                    <span class="my-price" style="color:black">
                                                      <i class="fa fa-shopping-cart"></i>
                                                      <b>{{ Cart::session(Auth::id())->getContent()->count() }}</b>
                                                    </span>
                                                </h4>
                                                @foreach($cartItems as $item)
                                                <p style="text-align: left">{{ Str::limit($item->name, 15) }} <span class="my-price">${{Cart::session(Auth::id())->get($item->id)->getPriceSum()}}</span></p>
                                                @endforeach
                                                <hr>
                                                <p>Total <span class="price" style="color:black"><b>${{\Cart::session(Auth::id())->getTotal()}}</b></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3"></div>

                </div>
            </div>
        </section>
        <!-- End Book Overview -->

    </main>
    <!-- End main content -->
    @include('site.js')
@endsection
