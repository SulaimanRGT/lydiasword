@extends('admin.layouts.layout')

@section('content')

    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>Customers</h3>
                </div>

            </div>

            <div class="clearfix"></div>

            <div class="row">

                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>Customer list</h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card-box table-responsive">
                                        <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                                            <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Contact</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Books </th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($customers as $customer)
                                                    <tr>
                                                        <td><img src="{{asset($customer->image)}}" alt="{{$customer->name}}" width="30" height="30"></td>
                                                        <td>{{$customer->name}}</td>
                                                        <td>{{$customer->contact}}</td>
                                                        <td>{{$customer->email}}</td>
                                                        <td>{{$customer->gender}}</td>
                                                        <td>{{$customer->count}}</td>
                                                        <td>
                                                            @if($customer->status === 1)

                                                                <form class="updateStatus" method="POST" enctype="multipart/form-data">
                                                                    {{ csrf_field() }}
                                                                    <input type="hidden" name="status" value="0">
                                                                    <input type="hidden" name="id" id="customerId" value="{{$customer->id}}">
                                                                    <button type="submit" name="submit" class="btn btn-secondary btn-block">De-Activate</button>
                                                                </form>
                                                            @else
                                                                <form class="updateStatus"  method="POST" enctype="multipart/form-data">
                                                                    {{ csrf_field() }}
                                                                    <input type="hidden" name="status" value="1">
                                                                    <input type="hidden" name="id" id="customerId"  value="{{$customer->id}}">
                                                                    <button type="submit" name="submit" class="btn btn-success btn-block">Activate</button>
                                                                </form>
                                                            @endif
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /page content -->
    @include('admin.customer.js')

@endsection
