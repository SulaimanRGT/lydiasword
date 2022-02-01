@extends('admin.layouts.layout')

@section('content')

    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>System Users</h3>
                </div>
            </div>

            <div class="clearfix"></div>

            <div class="row">

                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>User list</h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <li><button class="btn btn-primary" data-toggle="modal" data-target="#addUserModal">Add User</button></li>
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
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                <th>Gender</th>
                                                <th>Status</th>
                                                <th>Created By</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($users as $u)
                                                <tr>
                                                    <td><img src="{{asset($u->image)}}" width="40" height="40" alt="{{$u->name}}"></td>
                                                    <td>{{$u->name}}</td>
                                                    <td>{{$u->email}}</td>
                                                    <td>{{$u->contact}}</td>
                                                    <td>{{$u->gender}}</td>
                                                    <td>
                                                        @if($u->status === 1)
                                                            <form class="updateStatus" method="POST" enctype="multipart/form-data">
                                                                {{ csrf_field() }}
                                                                <input type="hidden" name="status" value="0">
                                                                <input type="hidden" name="id" value="{{$u->id}}">
                                                                <button type="submit" name="submit" id="deactive" class="btn btn-secondary btn-block">De-Activate</button>
                                                            </form>
                                                        @else
                                                            <form class="updateStatus" method="POST" enctype="multipart/form-data">
                                                                {{ csrf_field() }}
                                                                <input type="hidden" name="status" value="1">
                                                                <input type="hidden" name="id" value="{{$u->id}}">
                                                                <button type="submit" name="submit" id="active" class="btn btn-success btn-block">Activate</button>
                                                            </form>
                                                        @endif
                                                    </td>
                                                    @if(!empty($u->createdby))
                                                    <td>{{$u->createdby->name}}</td>
                                                    @else
                                                    <td></td>
                                                    @endif
                                                    <td>
                                                        <a href="{{route('admin.users.show', $u->id)}}" class="btn btn-primary"><i class="fa fa-eye"></i>View</a>
                                                        <a class="btn btn-warning" data-id="{{$u->id}}" data-name="{{$u->name}}" data-email="{{$u->email}}" data-gender="{{$u->gender}}" data-contact="{{$u->contact}}" data-status="{{$u->status}}" data-toggle="modal" data-target="#editUserModal"><i class="fa fa-edit"></i>Edit</a>
                                                        <a class="btn btn-danger" data-id="{{$u->id}}" data-name="{{$u->name}}" data-toggle="modal" data-target="#deleteUserModal"><i class="fa fa-trash"></i>Delete</a>
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
    @include('admin.user.modal')
    @include('admin.user.js')
@endsection
