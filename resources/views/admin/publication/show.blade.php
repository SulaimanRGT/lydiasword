@extends('admin.layouts.layout')
@section('content')

    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>User Profile</h3>
                </div>
            </div>

            <br>
            <br>

            <div class="clearfix"></div>
            <div class="row">
                <!-- ============================================================== -->
                <!-- profile -->
                <!-- ============================================================== -->
                <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                    <!-- ============================================================== -->
                    <!-- card profile -->
                    <!-- ============================================================== -->
                    <div class="card">
                        <div class="card-body">
                            <div class="user-avatar text-center d-block">
                                <img src="{{asset($publication->cover)}}" alt="User Avatar" style="height:80%; width: 80%;" class="user-avatar-sm">
                            </div>
                            <div class="text-center">
                                <h2 class="font-10 mb-0">{{$publication->title}}</h2>
                                <p>
                                    {{$publication->summary}}
                                </p>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <h3 class="font-16">Author Info</h3>
                            <div class="">
                                @if(!empty($publication->author))
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-2"><i class="fa fa-fw fa-envelope mr-2"></i><a href="mailto:">{{$publication->author->name}}</a></li>
                                    <li class="mb-0"><i class="fa fa-fw fa-phone mr-2"></i><a href="tel:">{{$publication->author->dob}}</a></li>
                                    <li class="mb-0"><i class="fa fa-fw fa-phone mr-2"></i><a href="tel:">{{$publication->author->country}}</a></li>
                                </ul>
                                @endif
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <h5 class="font-10">Publisher Info</h5>
                            <div>
                                @if(!empty($publication->publisher))
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-2"><i class="fa fa-fw fa-envelope mr-2"></i><a href="mailto:">{{$publication->publisher->name}}</a></li>
                                    <li class="mb-0"><i class="fa fa-fw fa-phone mr-2"></i><a href="tel:">{{$publication->publisher->contact}}</a></li>
                                    <li class="mb-0"><i class="fa fa-fw fa-phone mr-2"></i><a href="tel:">{{$publication->publisher->country}}</a></li>
                                </ul>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-7 col-sm-12 col-12">

                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header bg-secondary"></h5>
                                <div class="card-body">
                                    <iframe src="{{asset($publication->file)}}" height="1000" width="100%"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ============================================================== -->
                    <!-- end basic form  -->
                    <!-- ============================================================== -->

                    <!-- ============================================================== -->
                    <!-- end campaign tab one -->
                    <!-- ============================================================== -->
                </div>
                <!-- ============================================================== -->
                <!-- end campaign data -->
                <!-- ============================================================== -->
            </div>
        </div>
    </div>
    <!-- /page content -->


@endsection
