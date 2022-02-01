@extends('site.layout.app')
@section('content')

@include('site.inc.pages-navbar')
@include('site.inc.pages-banner')

    <main role="main">

        <!-- Start Author -->
        <section id="mu-author">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-author-area">

                            <div class="mu-heading-area">
                                <h2 class="mu-heading-title">IMAGE IS ...</h2>
                                <span class="mu-header-dot"></span>
                            </div>

                            <!-- Start Author Content -->
                            <div class="mu-author-content">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mu-author-image">
                                            <img src="{{asset('')}}images/book1.jpg" alt="group Image">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mu-author-info">
                                            <h3>LIBERIA WATCH</h3>
                                            <p class="lead">Culture is… the arts and other manifestations of human intellectual achievement regarded collectively.Culture is … the way of life for an entire societyCulture is… a system if values and norms shared among a group of people that when taken together, constitute a design for living.Culture is the combination of a people’s: Language, Communication styles, courtesies, Rituals, Roles, Customs, Relationships, Practices, Expected behaviors, Values, Thoughts, Manners of Interacting…Culture is... … The Collective Lifestyle of a People.</p>
                                            <div class="">
                                                <a class="btn btn-success" href="#"><i class="fa fa-download"></i>Read the book</a>
                                                <!--                                            <a href="#"><i class="fa fa-twitter"></i></a>-->
                                                <!--                                            <a href="#"><i class="fa fa-linkedin"></i></a>-->
                                                <!--                                            <a href="#"><i class="fa fa-google-plus"></i></a>-->
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Author Content -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Author -->

        <!-- Start Video Review -->
{{--        <section id="mu-video-review">--}}
{{--            <div class="container">--}}
{{--                <div class="row">--}}
{{--                    <div class="col-md-12">--}}
{{--                        <div class="mu-video-review-area">--}}

{{--                            <div class="mu-heading-area">--}}
{{--                                <h2 class="mu-heading-title">Watch a video about IMAGE IS ...</h2>--}}
{{--                                <span class="mu-header-dot"></span>--}}
{{--                            </div>--}}

{{--                            <!-- Start Video Review Content -->--}}
{{--                            <div class="mu-video-review-content">--}}
{{--                                <iframe class="mu-video-iframe" width="100%" height="480" src="https://www.youtube.com/embed/T4ySAlBt2Ug" frameborder="0" allowfullscreen></iframe>--}}
{{--                            </div>--}}
{{--                            <!-- End Video Review Content -->--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
        <!-- End Video Review -->

        <!-- Start Our books Book -->
        <section id="mu-book-overview">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mu-book-overview-area">

                            <div class="mu-heading-area">
                                <h2 class="mu-heading-title">Related Publication</h2>
                                <span class="mu-header-dot"></span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            </div>

                            <!-- Start Book Overview Content -->
                            <div class="mu-book-overview-content">
                                <div class="row">

                                    <!-- Book Overview Single Content -->
                                    <div class="col-md-3 col-sm-6">
                                        <a href="">
                                            <div class="mu-book-overview-single">
											<span class="mu-book-overview-icon-box">
												<img src="images/book1.jpg" alt="first book">
											</span>
                                                <h4>IMAGE IS...</h4>
                                                <p>A little summery about the book</p>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- / Book Overview Single Content -->

                                    <!-- Book Overview Single Content -->
                                    <div class="col-md-3 col-sm-6">
                                        <a href="">
                                            <div class="mu-book-overview-single">
												<span class="mu-book-overview-icon-box">
													<img src="images/book2.jpg" alt="first book">
												</span>
                                                <h4>BREAK KOLA</h4>
                                                <p>A little summery about the book</p>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- / Book Overview Single Content -->

                                    <!-- Book Overview Single Content -->
                                    <div class="col-md-3 col-sm-6">
                                        <a href="">
                                            <div class="mu-book-overview-single">
												<span class="mu-book-overview-icon-box">
													<img src="images/book3.jpg" alt="first book">
												</span>
                                                <h4> LIVING THE LIBERIAN LIFE</h4>
                                                <p>A little summery about the book</p>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- / Book Overview Single Content -->

                                    <!-- Book Overview Single Content -->
                                    <div class="col-md-3 col-sm-6">
                                        <a href="">
                                            <div class="mu-book-overview-single">
												<span class="mu-book-overview-icon-box">
													<img src="images/book4.jpeg" alt="first book" height="226" width="216">
												</span>
                                                <h4>WHAT'S YOUR LIBERIAN NAME?</h4>
                                                <p>A little summery about the book</p>
                                            </div>
                                        </a>
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



    </main>

@include('site.js')
@include('site.inc.footer')
@endsection
