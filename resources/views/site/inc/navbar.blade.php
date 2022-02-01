<!-- Start Header -->
<header id="mu-header" style="padding:0;background:#333;" role="banner">

{{--    <div class="myheader text-light">--}}
{{--        <ul class="container myul">--}}
{{--            @auth--}}
{{--            <li class="username">--}}
{{--                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">--}}
{{--                    <i class="fa fa-user"></i> {{Auth::user()->name}} <i class="fa fa-sign-out" ></i>--}}
{{--                </a>--}}
{{--                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">--}}
{{--                    @csrf--}}
{{--                </form>--}}
{{--            </li>--}}
{{--            @endauth--}}
{{--            @guest--}}
{{--                <li class="username">--}}
{{--                    <a href="{{ route('login') }}">--}}
{{--                        <i class="fa fa-lock"></i> Login--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--            @endguest--}}
{{--            <li class="cart">--}}
{{--                <a href="{{route('cart')}}"><i class="fa fa-shopping-cart"></i><sup class="fa fa-id-badge">@auth{{Cart::session(Auth::id())->getContent()->count()}}@endauth</sup></a>--}}
{{--            </li>--}}
{{--            @auth--}}
{{--            <li class="mypub"><a href="{{route('my.reading', Auth::id())}}">My Reading <i class="fa fa-book"></i></a></li>--}}
{{--            @endauth--}}
{{--        </ul>--}}
{{--    </div>--}}

<!-- Topbar -->
    <div class="top-bar">
        <div class="content-topbar flex-sb-m h-full container">
            <div class="left-top-bar">
                <marquee>Free delivery for standard order over $100</marquee>
            </div>

            <div class="right-top-bar flex-w h-full">
                <a href="#" class="flex-c-m trans-04 p-lr-25">
                    <i class="fa fa-user"></i>&nbsp &nbsp @auth{{Auth::user()->name}}@endauth
                </a>
                @auth
                    <a href="{{route('my.reading', Auth::id())}}" class="flex-c-m trans-04 p-lr-25">
                        My Reading
                    </a>
                @endauth
                @guest()
                <a href="{{ route('login') }}" class="flex-c-m trans-04 p-lr-25">
                    Login
                </a>
                @endguest
                @auth
                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="flex-c-m trans-04 p-lr-25">
                    Logout
                </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                @endauth
                <a href="{{route('cart')}}" class="flex-c-m trans-04 p-lr-25">
                    <i class="fa fa-shopping-bag fa-2x" style="font-size:18px;color: #37c6f5;font-weight:
                    bolder"></i><sup class="fa
                    fa-id-badge" style="font-weight:
                    bolder;font-size:14px;color: #37c6f5">@auth{{Cart::session
                    (Auth::id())
                    ->getContent()->count()}}@endauth</sup>
                </a>

                <a href="#" class="flex-c-m trans-04 p-lr-25">
                    USD
                </a>
            </div>
        </div>
    </div>

    <div class="container" style="">
        <nav class="navbar navbar-default mu-navbar" style="margin-top: 15px;height: 60px">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Text Logo -->
                    <a class="navbar-brand" href="{{route('/')}}">
                        <img src="{{asset('images/LydiasWordLogoTransparent.png')}}" width="150" height="50px" alt="">
                    </a>

                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav mu-menu navbar-right">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#mu-book-overview">PUBLICATIONS</a></li>
                        {{--                        <li><a href="#mu-author">WHAT WE DO</a></li>--}}
                        <li><a href="#mu-testimonials">TESTIMONIALS</a></li>
                        <li><a href="#mu-contact">CONTACT</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</header>
<!-- End Header -->

























{{--<!-- Start Header -->--}}
{{--<header id="mu-header" style="padding: 0" class="" role="banner">--}}
{{--    <div class="myheader text-light">--}}
{{--        <ul class="container myul">--}}
{{--            @auth--}}
{{--            <li class="username">--}}
{{--                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">--}}
{{--                    <i class="fa fa-user"></i> {{Auth::user()->name}} <i class="fa fa-sign-out" ></i>--}}
{{--                </a>--}}
{{--                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">--}}
{{--                    @csrf--}}
{{--                </form>--}}
{{--            </li>--}}
{{--            @endauth--}}
{{--            @guest--}}
{{--                <li class="username">--}}
{{--                    <a href="{{ route('login') }}">--}}
{{--                        <i class="fa fa-lock"></i> Login--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--            @endguest--}}
{{--            <li class="cart">--}}
{{--                <a href="{{route('cart')}}"><i class="fa fa-shopping-cart"></i><sup class="fa fa-id-badge">@auth{{Cart::session(Auth::id())->getContent()->count()}}@endauth</sup></a>--}}
{{--            </li>--}}
{{--            @auth--}}
{{--            <li class="mypub"><a href="{{route('my.reading', Auth::id())}}">My Reading <i class="fa fa-book"></i></a></li>--}}
{{--            @endauth--}}
{{--        </ul>--}}

{{--    </div>--}}
{{--    <div class="container">--}}
{{--        <nav class="navbar navbar-default mu-navbar">--}}
{{--            <div class="container-fluid">--}}
{{--                <!-- Brand and toggle get grouped for better mobile display -->--}}
{{--                <div class="navbar-header">--}}
{{--                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">--}}
{{--                        <span class="sr-only">Toggle navigation</span>--}}
{{--                        <span class="icon-bar"></span>--}}
{{--                        <span class="icon-bar"></span>--}}
{{--                        <span class="icon-bar"></span>--}}
{{--                    </button>--}}

{{--                    <!-- Text Logo -->--}}
{{--                    <a class="navbar-brand" href="{{route('/')}}"><img src="{{asset('images/LydiasWordLogoTransparent.png')}}" width="350%" height="350%" alt=""></a>--}}

{{--                    <!-- Image Logo -->--}}
{{--                    <!-- <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png"></a> -->--}}

{{--                </div>--}}

{{--                <!-- Collect the nav links, forms, and other content for toggling -->--}}
{{--                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">--}}
{{--                    <ul class="nav navbar-nav mu-menu navbar-right">--}}
{{--                        <li><a href="#">HOME</a></li>--}}
{{--                        <li><a href="#mu-book-overview">OUR PUBLICATIONS</a></li>--}}
{{--                        <li><a href="#mu-author">WHAT WE DO</a></li>--}}
{{--                        <li><a href="#mu-testimonials">TESTIMONIALS</a></li>--}}
{{--                        <li><a href="#mu-contact">CONTACT</a></li>--}}
{{--                        --}}{{--                        <li><a href="#mu-team">OUR TEAM</a></li>--}}
{{--                        <li class="nav-item dropdown">--}}
{{--                            <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  PAGES </a>--}}
{{--                            <ul class="dropdown-menu" style="background-color: #37c6f5; border-radius: 10px; list-style-type: none">--}}
{{--                                <li class="dropdown-item" style="list-style-type: none"><a href="{{route('publication')}}"> OUR PUBLICATION</a></li>--}}
{{--                                <li class="dropdown-item" style="list-style-type: none"><a href="{{route('blogs')}}"> OUR BLOG </a></li>--}}
{{--                                <li class="dropdown-item" style="list-style-type: none"><a href="{{route('teams')}}"> OUR TEAM </a></li>--}}
{{--                            </ul>--}}
{{--                        </li>--}}
{{--                        <li><a href="{{route('cart')}}"><i class="fa fa-shopping-cart"></i><sup class="fa fa-id-badge">@auth{{Cart::session(Auth::id())->getContent()->count()}}@endauth</sup></a></li>--}}
{{--                        @auth--}}
{{--                        <li>--}}
{{--                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">--}}
{{--                                <i class="fa fa-sign-out pull-right"></i>  {{ __('Logout') }}--}}
{{--                            </a>--}}
{{--                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">--}}
{{--                                @csrf--}}
{{--                            </form>--}}
{{--                        </li>--}}
{{--                        @endauth--}}
{{--                        @guest--}}
{{--                            <li>--}}
{{--                                <a class="dropdown-item" href="{{ route('login') }}">--}}
{{--                                    <i class="fa fa-sign-in pull-right"></i>  {{ __('Login') }}--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                        @endguest--}}
{{--                    </ul>--}}
{{--                </div><!-- /.navbar-collapse -->--}}
{{--            </div><!-- /.container-fluid -->--}}
{{--        </nav>--}}
{{--    </div>--}}
{{--</header>--}}
{{--<!-- End Header -->--}}


