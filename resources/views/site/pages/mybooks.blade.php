@extends('site.layout.app')
@section('content')

    @include('site.inc.pages-navbar')

    <style>
        span img:hover {
            transform: scale(1.1);
        }
    </style>

    <!-- Start Our books Book -->
    <section id="mu-book-overview">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="mu-book-overview-area">

                        <!-- Start Book Overview Content -->
                        <div class="mu-book-overview-content">
                            <div class="row">
                                <!-- Book Overview Single Content -->
                                @foreach($user_publications as $book)
                                    <div class="col-sm-6 col-md-3 " style="padding: 20px">
                                        <div class="mu-book-overview-singles" style="text-align: center">

                                            <span style="width: 230px; margin: 20px auto;">
                                                {{--mu-book-overview-icon-box--}}
                                                <img src="{{asset($book->cover)}}" alt="{{asset($book->title)}}"
                                                     class="img-thumbnail" style="width: 90%; transition: 0.4s;">
                                            </span>
                                                <div style="text-align: center; margin-top: 13px;">
                                                    <h6 class="text-wrap" style="color: #02537a">{{$book->title}}</h6>
                                                    <p class="text-wrap" style="color: #71818f;line-height: 40px">{{$book->author->name}}</p>
                                                    <button type="button" class="btn btn-info" style="/*border: 2px #eee double;*/ font-weight: bolder; background: #37c6f5; text-align: center; width: 100%; padding: 10px; /*background: #02537a;*/ border: 1px solid grey; outline: none; color: white; cursor: pointer; font-size: 16px;
                                                border-radius: 15px;" onclick="location
                                                        .href='{{ route ('read', $book->id) }}'">View
                                                        <i class="fa fa-eye"></i>
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                            @endforeach
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
    @include('site.inc.footer')
@endsection
