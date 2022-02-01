@extends('site.layout.app')
@section('title', 'PUBLICATIONS')
@section('content')
    <!-- Start Featured Slider -->

    @include('site.inc.pages-navbar')
    {{--@include('site.inc.pages-banner')--}}

    <main role="main" style="font-family: 'Poppins-Regular">
        <br>
{{--        <!-- Start Author -->--}}
{{--        <section id="mu-author">--}}
{{--            <div class="container">--}}
{{--                <div class="row">--}}
{{--                    <div class="col-md-12">--}}
{{--                        <div class="mu-author-area">--}}

{{--                            <!-- Start Author Content -->--}}
{{--                            <div class="mu-author-content" style="color: #333">--}}
{{--                                <div class="row">--}}
{{--                                    <div class="col-md-3 col-3 col-lg-3 col-sm-5 col-xs-12 text-center " style="margin-bottom: 5px;">--}}
{{--                                        <div class="mu-author-images">--}}
{{--                                            <img src="{{asset($publication->cover)}}" alt="group Image"--}}
{{--                                                 class="img-thumbnail">--}}
{{--                                        </div>--}}

{{--                                        <div style="margin: 15px 0 15px 0 ">--}}
{{--                                            <p style="color: #46ab09; font-weight: bolder; font-size: 20px;text-align: center;"> ${{ $publication->price }}</p>--}}
{{--                                        </div>--}}
{{--                                        @auth--}}
{{--                                        <a  class="btn btn-lg btn-primary text-center" style="border: 2px #eee double;--}}
{{--                                            font-weight: bolder; background: #02537a" data-toggle="modal" data-target="#payWithTipMe">TipMe</a>--}}
{{--                                        @endauth--}}
{{--                                        <a  class="btn-lg btn-primary text-center" style="border: 2px #eee double;--}}
{{--                                            font-weight: bolder; background: #02537a" href="{{route('add.to.cart', $publication->id) }}">Add to <i class="fa fa-shopping-cart"></i></a>--}}
{{--                                    </div>--}}
{{--                                    <div class="col-md-9 col-9 col-lg-9 col-sm-7 col-xs-12 mt-2">--}}
{{--                                        <div class="mu-author-infos">--}}
{{--                                            <h1 style="color: #02537a; ">{{ $publication->title }}</h1>&nbsp;--}}
{{--                                            <h5 style="color: #71818f; line-height: 2px; font-family: 'Poppins-Regular">Caroline Kepnes</h5>--}}
{{--                                            <hr />--}}
{{--                                            <p style="">{{ Str::limit($publication->summary, 1015) }}</p>--}}

{{--                                        </div>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                            </div>--}}
{{--                            <!-- End Author Content -->--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- End Author -->--}}

        <!-- Start Our books Book -->

        <section id="mu-book-overview">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-book-overview-area">

                            <div class="mu-heading-area">
                                <h2 class="mu-heading-title">Publications</h2>
                                <span class="mu-header-dot"></span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            </div>

                            <!-- Start Book Overview Content -->
                            <div class="mu-book-overview-contents">
                                <div class="row">

                                    <!-- Book Overview Single Content -->
                                    <div class="wrapper">
                                        <div class="container containers">
                                            @foreach($publications as $public)
                                                <div class="col-xs-12 col-sm-6 col-md-3" style="padding: 20px">
                                                    <div class="card">
                                                        <div class="product-image" onclick="location.href='{{route('publication.show', $public->id)}}'" style="cursor: pointer">
                                                            <img src="{{ asset( $public->cover )}}" alt="Book Cover" class="img-rounded">
                                                        </div>
                                                        <div class="product-info" onclick="location.href='{{route('publication.show', $public->id)}}'" style="cursor: pointer">
                                                            <h4>{{ Str::limit($public->title, 20) }}</h4>
                                                            <h4 style="color: #46ab09; font-weight: bolder; font-size:
                                                    16px">${{ $public->price }}</h4>
                                                        </div>
                                                        <div class="btn">
                                                            <button type="button" onclick="location.href='{{ route('add.to.cart', $public->id) }}'">Add to Cart
                                                                <i class="fa fa-shopping-cart"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>


                                    <!-- / Book Overview Single Content -->

                                </div>
                            </div>
                            <!-- End Book Overview Content -->

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    @include('site.inc.footer')

@endsection


