@extends('site.layout.app')

@section('content')

    <!-- Start main content -->
    @include('site.inc.pages-navbar')

    <main role="main">
        <!-- Start Our books Book -->
        <section id="mu-book-overview">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-book-overview-area">

                            <div class="mu-heading-area" style="margin-top: 50px;">
                                <h2 class="mu-heading-title"></h2>
                                <div class="clearfix" style="margin-bottom: 20px"></div>
                            </div>

                            <h2 style="color: #000">SHOPPING CART</h2>

                            <!-- Start Book Overview Content -->
                            <div class="mu-book-overview-content">
                                <div class="row">
                                    <table class="table table-responsive table-hover table-shopping-cart"
                                           style="margin-top: -50px;">
                                        <thead class="table_head">
                                        <tr class="">
                                            <th class="column-1">Book</th>
                                            <th></th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th class="column-1">Total</th>
                                            <th class="column-1">Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody class="table_row">
                                        @foreach($cartItems as $item)
                                            <tr>
                                                <td class="column-1">
                                                    <div class="how-itemcart">
                                                        <img src="{{ asset($item->associatedModel->cover) }}"
                                                             alt="IMG" class="img-thumbnail">
                                                    </div>
                                                </td>
                                                <td data-th="Product">
                                                    <div class="row">
                                                        <div>
                                                            <p class="column-1">{{ $item->name }}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-th="Price">${{ $item->price}}</td>
                                                <td data-th="Quantity">
                                                    <input type="number" value="{{ $item->quantity }}" readonly style="width: 50px" class="form-control quantity update-cart" />                                                </td>
                                                <td data-th="Subtotal" class="text-center">${{Cart::session(Auth::id
                                                ())->get($item->id)->getPriceSum()}}</td>
                                                <td class="column-1">
                                                    <button class="btn-sm btn-info" onclick="location
                                                        .href='{{route('cart.destroy', $item->id)}}'" type="button">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        @endforeach

                                        </tbody>

                                        <tfoot>
                                        <tr>
                                            <form action="{{route('apply.coupon')}}" method="POST">
                                                @csrf
                                                <td colspan="2">
                                                    <input id="coupon_code" class="input-text form-control"
                                                           style="border-radius:30px;"
                                                           name="coupon_code" value="" placeholder="Coupon code"
                                                           type="text">
                                                </td>
                                                <td>
                                                    <input class="btn btn-primary" name="apply_coupon"
                                                           value="Apply coupon" type="submit">
                                                </td>
                                            </form>
                                        </tr>
                                        </tfoot>
                                    </table>


                                    <div class="text-right float-right">
                                        <td colspan="5" class="text-right">
                                            <h5 style="color: #000">Subtotal:
                                                &nbsp;&nbsp;<span id="total" class="mtext-110 cl2">${{\Cart::session
                                                (auth()->id
                                                ())->getSubTotal()
                                                }}</span>
                                            </h5>
                                        </td>
                                        <div style="margin-bottom: 20px"></div>
                                        <td colspan="5" class="text-right">
                                            <h5 style="color: #000">Total:
                                                &nbsp;&nbsp;<span id="total" class="mtext-110 cl2">${{Cart::session
                                                (Auth::id())->getTotal()}}</span>
                                            </h5>
                                        </td>
                                        <div style="margin-bottom: 20px"></div>
                                        <a href="{{ url('/') }}" class="btn btn-warning">
                                            <i class="fa fa-arrow-circle-left"></i>
                                            Back to shopping
                                        </a>
                                        <a class="btn btn-success" data-toggle="modal" data-target="#payWithTipMe">TipMe</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Book Overview Content -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Book Overview -->
    </main>
    <!-- End main content -->
    @include('site.cart.js')
    @include('site.cart.modal')
    @include('site.inc.footer')
@endsection































{{--@extends('site.layout.app')--}}

{{--@section('content')--}}

{{--    <!-- Start main content -->--}}
{{--    @include('site.inc.pages-navbar')--}}
{{--    @include('site.inc.pages-banner')--}}

{{--    <!-- end Featured Slider -->--}}

{{--    <main role="main">--}}

{{--        <!-- Start Our books Book -->--}}
{{--        <section id="mu-book-overview">--}}
{{--            <div class="container">--}}

{{--                <div class="row">--}}
{{--                    <div class="col-md-12">--}}
{{--                        <div class="mu-book-overview-area">--}}

{{--                            <div class="mu-heading-area" style="margin-top: -80px;">--}}
{{--                                <h2 class="mu-heading-title">Your Cart</h2>--}}
{{--                                <span class="mu-header-dot"></span>--}}
{{--                            </div>--}}
{{--                            <!-- Start Book Overview Content -->--}}
{{--                            <div class="mu-book-overview-content">--}}
{{--                                <div class="row" style="margin-top: -40px">--}}
{{--                                    <table class="table table-responsive" style="margin-top: -60px;">--}}
{{--                                        <thead class="table-head">--}}
{{--                                            <tr>--}}
{{--                                                <th>Book Details</th>--}}
{{--                                                <th>Unite Prie</th>--}}
{{--                                                <th>Quantity</th>--}}
{{--                                                <th>Total</th>--}}
{{--                                                <th>Remove</th>--}}
{{--                                            </tr>--}}
{{--                                        </thead>--}}
{{--                                        <tbody class="table-body">--}}
{{--                                            @foreach($cartItems as $item)--}}
{{--                                                <tr>--}}
{{--                                                    <td data-th="Product">--}}
{{--                                                        <div class="row">--}}
{{--                                                            <div class="col-sm-3 hidden-xs"><img src="{{ $i }}" width="100" height="100" class="img-responsive"/></div>--}}
{{--                                                            <div class="col-sm-9">--}}
{{--                                                                <h6 class="nomargin">{{ $item->name }}</h6>--}}
{{--                                                            </div>--}}
{{--                                                        </div>--}}
{{--                                                    </td>--}}
{{--                                                    <td data-th="Price">${{ $item->price}}</td>--}}
{{--                                                    <td data-th="Quantity">--}}
{{--                                                        <input type="number" value="{{ $item->quantity }}" readonly style="width: 50px" class="form-control quantity update-cart" />--}}
{{--                                                    </td>--}}
{{--                                                    <td data-th="Subtotal" class="text-center">${{Cart::session(Auth::id())->get($item->id)->getPriceSum()}}</td>--}}
{{--                                                    <td class="actions" data-th="">--}}
{{--                                                        <button class="btn btn-danger btn-sm"><a href="{{route('cart.destroy', $item->id)}}"><i class="fa fa-trash-o"></i></button>--}}
{{--                                                    </td>--}}
{{--                                                </tr>--}}
{{--                                            @endforeach--}}

{{--                                        </tbody>--}}
{{--                                        <tfoot>--}}
{{--                                        <tr>--}}
{{--                                            <form action="{{route('apply.coupon')}}" method="POST">--}}
{{--                                                @csrf--}}
{{--                                                <td>--}}
{{--                                                    <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text">--}}
{{--                                                    <input class="btn btn-primary primaryBackground" name="apply_coupon" value="Apply coupon" type="submit">--}}


{{--                                                </td>--}}
{{--                                            </form>--}}
{{--                                        </tr>--}}
{{--                                        </tfoot>--}}
{{--                                    </table>--}}


{{--                                    <div class="text-right float-right">--}}
{{--                                        <td colspan="5" class="text-right"><h3><strong>Subtotal $<span id="total">{{\Cart::session(auth()->id())->getSubTotal()}}</span></strong></h3></td>--}}
{{--                                        <td colspan="5" class="text-right"><h3><strong>Total $<span id="total">{{Cart::session(Auth::id())->getTotal()}}</span></strong></h3></td>--}}
{{--                                        <a href="{{ url('/') }}" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a>--}}
{{--                                            <a href="{{route('checkout.index')}}" class="btn btn-success primaryBackground">Checkout</a>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                            </div>--}}
{{--                            <!-- End Book Overview Content -->--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- End Book Overview -->--}}



{{--    </main>--}}
{{--    <!-- End main content -->--}}
{{--@include('site.js')--}}
{{--@endsection--}}
