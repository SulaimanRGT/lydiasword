@extends('site.layout.app')
@section('title', 'HOME')
@section('content')

    @include('site.inc.navbar')
    @include('site.inc.banner')
    <!-- Start main content -->

    <main role="main">

        <!-- Start Counter -->
        <section id="mu-counter">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-counter-area">

                            <div class="mu-counter-block">
                                <div class="row">

                                    <!-- Start Single Counter -->
                                    <div class="col-md-4 col-sm-6">
                                        <div class="mu-single-counter">
                                            <i class="fa fa-files-o" aria-hidden="true"></i>
                                            <div class="counter-value" data-count="{{App\Publication::all()->count()}}">{{App\Publication::all()->count()}}</div>
                                            <h5 class="mu-counter-name">Total Books</h5>
                                        </div>
                                    </div>
                                    <!-- / Single Counter -->

                                    <!-- Start Single Counter -->
                                    <div class="col-md-4 col-sm-6">
                                        <div class="mu-single-counter">
                                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                            <div class="counter-value" data-count="{{App\Publication::all()->count()}}">{{App\Publication::all()->count()}}</div>
                                            <h5 class="mu-counter-name">Best Books</h5>
                                        </div>
                                    </div>
                                    <!-- / Single Counter -->

                                    <!-- Start Single Counter -->
                                    <div class="col-md-4 col-sm-6">
                                        <div class="mu-single-counter">
                                            <i class="fa fa-users" aria-hidden="true"></i>
                                            <div class="counter-value" data-count="{{App\User::where('role','customer')->count()}}">{{App\User::where('role','customer')->count()}}</div>
                                            <h5 class="mu-counter-name">Active Readers</h5>
                                        </div>
                                    </div>
                                    <!-- / Single Counter -->

                                    <!-- Start Single Counter -->
{{--                                    <div class="col-md-4 col-sm-6">--}}
{{--                                        <div class="mu-single-counter">--}}
{{--                                            <i class="fa fa-trophy" aria-hidden="true"></i>--}}
{{--                                            <div class="counter-value" data-count="10000000">10000000</div>--}}
{{--                                            <h5 class="mu-counter-name">Got Awards</h5>--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
                                    <!-- / Single Counter -->

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Counter -->

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
                                            <div class="row">
                                                @foreach($publications as $public)
                                                <div class="col-xs-12 col-sm-6 col-md-3">
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
                                                            <button type="button" onclick="location.href='{{ route('add.to.cart', $public->id) }}'">Add to Cart<i class="fa fa-shopping-cart"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                            </div>

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
        <!-- End Book Overview -->

        <!-- Start Testimonials -->
        <section id="mu-testimonials">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-testimonials-area">
                            <div class="mu-heading-area">
                                <h2 class="mu-heading-title">What Our Readers Says</h2>
                                <span class="mu-header-dot"></span>
                            </div>

                            <div class="mu-testimonials-block">
                                <ul class="mu-testimonial-slide">

                                    <li>
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
                                        <img class="mu-rt-img" src="{{asset('assets/images/reader-1.jpg')}}" alt="img">
                                        <h5 class="mu-rt-name"> - Alice Boga</h5>
                                        <span class="mu-rt-title">CEO, Apple Inc.</span>
                                    </li>

                                    <li>
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
                                        <img class="mu-rt-img" src="{{asset('assets/images/reader-2.jpg')}}" alt="img">
                                        <h5 class="mu-rt-name"> - Jhon Doe</h5>
                                        <span class="mu-rt-title">Director, Google Inc.</span>
                                    </li>

                                    <li>
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."</p>
                                        <img class="mu-rt-img" src="{{asset('assets/images/reader-3.jpg')}}" alt="img">
                                        <h5 class="mu-rt-name"> - Jessica Doe</h5>
                                        <span class="mu-rt-title">Web Developer</span>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Testimonials -->

        <!-- Start Contact -->
        <section id="mu-contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-contact-area">

                            <div class="mu-heading-area">
                                <h2 class="mu-heading-title">Drop Us A Message</h2>
                                <span class="mu-header-dot"></span>
                                <p></p>
                            </div>

                            <!-- Start Contact Content -->
                            <div class="mu-contact-content">

                                <div id="form-messages"></div>
                                <form id="contactForms"  method="post"
                                      class="mu-contact-form" autocomplete="off">
                                    {{ csrf_field() }}
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name" id="name" name="name" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Enter Email" id="email" name="email" required>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Message" id="message" name="message" required></textarea>
                                    </div>
                                    <button type="submit" name="submit" class="mu-send-msg-btn"><span>SUBMIT</span></button>
                                </form>
                            </div>
                            <!-- End Contact Content -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Contact -->

        <!-- Start Google Map -->
        <section id="mu-google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589888.4396405783!2d-82.41588603632052!3d32.866951223053896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9f727a4ed30eb%3A0xf2139b0c5c7ae1ec!2sDooley+Branch+Rd%2C+Millen%2C+GA+30442%2C+USA!5e0!3m2!1sen!2sbd!4v1497376364225" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
        <!-- End Google Map -->

    </main>
    {{--@include('site.cart.js')--}}
    <!-- End main content -->
    @include('site.js')
    @include('site.inc.footer')
@endsection
