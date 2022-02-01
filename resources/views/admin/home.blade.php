@extends('admin.layouts.layout')

@section('content')

    <!-- page content -->
    <div class="right_col" role="main">
{{--        <!-- top tiles -->--}}
{{--        <div class="row" style="display: inline-block;" >--}}
{{--            <div class="tile_count">--}}
{{--                <div class="col-5 col-md-2 col-sm-4  tile_stats_count">--}}
{{--                    <span class="count_top"><i class="fa fa-user"></i> Total Users</span>--}}
{{--                    <div class="count">{{\App\User::all()->where('role', '!=', 'customer')->count()}}</div>--}}
{{--                    <span class="count_bottom"><i class="green"></i> </span>--}}
{{--                </div>--}}
{{--                <div class="col-5 col-md-2 col-sm-4  tile_stats_count">--}}
{{--                    <span class="count_top"><i class="fa fa-clock-o"></i> Total Customers</span>--}}
{{--                    <div class="count">{{\App\User::all()->where('role', '!=', 'customer')->count()}}</div>--}}
{{--                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>3% </i> From last Week</span>--}}
{{--                </div>--}}
{{--                <div class="col-5 col-md-2 col-sm-4  tile_stats_count">--}}
{{--                    <span class="count_top"><i class="fa fa-user"></i> Total Books</span>--}}
{{--                    <div class="count">{{\App\Publication::all()->count()}}</div>--}}
{{--                    <span class="count_bottom"><i class="red"><i class="fa fa-dollar"></i>{{\App\Publication::all()->sum('price')}} </i></span>--}}
{{--                </div>--}}
{{--                <div class="col-5 col-md-2 col-sm-4  tile_stats_count">--}}
{{--                    <span class="count_top"><i class="fa fa-user"></i> Total Copy Sold</span>--}}
{{--                    <div class="count green">{{\Illuminate\Support\Facades\DB::table('user_publication')->count()}}</div>--}}
{{--                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>$ {{\Illuminate\Support\Facades\DB::table('user_publication')->sum('price')}} </i> in sales</span>--}}
{{--                </div>--}}
{{--                <div class="col-5 col-md-2 col-sm-4  tile_stats_count">--}}
{{--                    <span class="count_top"><i class="fa fa-user"></i> Total sold Amount  </span>--}}
{{--                    <div class="count">$ {{number_format(\Illuminate\Support\Facades\DB::table('user_publication')->sum('price'))}} </div>--}}
{{--                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i></i></span>--}}
{{--                </div>--}}
{{--                <div class="col-md-2 col-sm-4  tile_stats_count">--}}
{{--                    <span class="count_top"><i class="fa fa-user"></i> Total publications sold</span>--}}
{{--                    <div class="count">7,325</div>--}}
{{--                    <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> From last Week</span>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <!-- /top tiles -->--}}
        <div class="row mb-2 pl-4 pr-4 pb-2 pt-2 mt-1">
            <div class="col-md-4">
                <a href="">
                    <div class="card bg-blue-sky text-white">
                        <div class="card-body">
                            <div class="d-inline-block">
                                <h5 class="">Total User</h5>
                                <h2 class="mb-0"> <i class="fa fa-dollar"></i></h2>
                            </div>
                            <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                <h3>{{ number_format(\App\User::all()->where('role', '!=', 'customer')->count()) }}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <a href="">
                    <div class="card bg-blue-sky text-white">
                        <div class="card-body ">
                            <div class="d-inline-block">
                                <h5 class="">Total Customer</h5>
                                <h2 class="mb-0"> <i class="fa fa-dollar"></i></h2>
                            </div>
                            <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                <h3>{{ number_format(\App\User::all()->where('role', '=', 'customer')->count()) }}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <a href="">
                    <div class="card bg-blue-sky text-white">
                        <div class="card-body">
                            <div class="d-inline-block">
                                <h5 class="">Total Publication</h5>
                                <h2 class="mb-0"> <i class="fa fa-dollar"></i></h2>
                            </div>
                            <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                <h3>{{ number_format(\App\Publication::all()->count()) }}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="row mb-2 pl-4 pr-4 pb-2 pt-2 mt-1">
            <div class="col-md-4">
                <a href="">
                    <div class="card bg-blue-sky text-white">
                        <div class="card-body">
                            <div class="d-inline-block">
                                <h5 class="">Total Copy Sold</h5>
                                <h2 class="mb-0"> <i class="fa fa-dollar"></i></h2>
                            </div>
                            <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                <h3>{{ number_format(\Illuminate\Support\Facades\DB::table('user_publication')->count()) }}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <a href="">
                    <div class="card bg-blue-sky text-white">
                        <div class="card-body">
                            <div class="d-inline-block">
                                <h5 class="">Total Sales</h5>
                                <h2 class="mb-0"> <i class="fa fa-dollar"></i></h2>
                            </div>
                            <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                <h3>{{ number_format(\Illuminate\Support\Facades\DB::table('user_publication')->sum('price')) }}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>
    <!-- /page content -->


@endsection
