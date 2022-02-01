

<div class="col-md-3 left_col">
    <div class="left_col scroll-view">
        <div class="navbar nav_title" style="border: 0;">
            <a href="" class="site_title"><i class="fa fa-book"></i> <span>Lydia's Word</span></a>
        </div>

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile clearfix">
            <div class="profile_pic">
                <img src="{{asset(Auth::user()->image)}}"  alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info">
                <span>Welcome,</span>
                <h2>{{Auth::user()->name}}</h2>
            </div>
        </div>
        <!-- /menu profile quick info -->

        <br />

        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                    <li><a href="{{route('admin.home')}}"><i class="fa fa-home"></i> Home </a></li>
                    <li><a href="{{route('admin.users.index')}}"><i class="fa fa-user"></i> Users</a></li>
                    <li><a href="{{route('admin.customer.index')}}"><i class="fa fa-user"></i> Customers</a></li>
                    <li><a href="{{route('admin.team.index')}}"><i class="fa fa-users"></i> Team members</a></li>
                    <li><a href="{{route('admin.author.index')}}"><i class="fa fa-user-secret"></i> Authors</a></li>
                    <li><a href="{{route('admin.publisher.index')}}"><i class="fa fa-user"></i>Publishers</a></li>
                    <li><a href="{{route('admin.blog.index')}}"><i class="fa fa-newspaper-o"></i> Blogs</a></li>
                    <li><a href="{{route('admin.publication.index')}}"><i class="fa fa-book"></i> Publications</a></li>
                    <li><a href="{{route('admin.coupon.index')}}"><i class="fa fa-book"></i> Coupon</a></li>
                </ul>
            </div>
        </div>
        <!-- /sidebar menu -->

        <!-- /menu footer buttons -->
        <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
            <a data-toggle="tooltip" data-placement="top" href="{{ route('logout') }}"
               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
        </div>
        <!-- /menu footer buttons -->
    </div>
</div>
