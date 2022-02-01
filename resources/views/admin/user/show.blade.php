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
                                <img src="{{asset($user->image)}}" alt="User Avatar" style="height:80%; width: 80%;" class="rounded-circle user-avatar-sm">
                            </div>
                            <div class="text-center">
                                <h2 class="font-10 mb-0">{{$user->name}}</h2>
                                <p></p>
                                <br>
                                @if(Auth::user()->id === $user->id)
                                <button type="button" data-id="{{$user->id}}" class="btn btn-primary btn-block" data-toggle="modal" data-target="#profileImage">
                                    Changed Profile Image
                                </button>
                                @endif
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <h3 class="font-16">Contact Information</h3>
                            <div class="">
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-2"><i class="fa fa-fw fa-envelope mr-2"></i><a href="mailto:">{{$user->email}}</a></li>
                                    <li class="mb-0"><i class="fa fa-fw fa-phone mr-2"></i><a href="tel:">{{$user->contact}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <h5 class="font-10">Options</h5>
                            <div>
                                @if(Auth::user()->id === $user->id)
                                <button data-id="{{$user->id}}" id="user" class="btn btn-info btn-block" data-toggle="modal" data-target="#changePwd">
                                    Change Password
                                </button>
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
                                                <form id="updateUser" enctype="multipart/form-data">
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Name</label>
                                                        <input id="" type="text" value="{{$user->name}}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Email</label>
                                                        <input id="" type="text" value="{{$user->email}}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Address</label>
                                                        <input id="" type="text" value="{{$user->address}}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Mobile</label>
                                                        <input id="" type="text" value="{{$user->contact}}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Status</label>
                                                        <input id="" type="text" value="{{$user->status ? 'Active' : 'Inactive' }}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Gender</label>
                                                        <input id="" type="text" value="{{$user->gender}}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="" class="col-form-label">Role</label>
                                                        <input id="" type="text" value="{{ $user->role }}" class="form-control form-control-lg" disabled>
                                                    </div>
                                                </form>
                                                <button type="button" data-id="{{$user->id}}" data-name="{{ $user->name }}" data-email="{{ $user->email }}" data-contact="{{ $user->contact }}" id="user"  class="btn btn-primary btn-block" data-toggle="modal" data-target="#editUserModal">
                                                    Update Profile
                                                </button>
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


    <!-- CHANGE USER PASSWORD MODAL -->
    <div class="modal fade" id="changePwd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Change password</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="x_content">
                    <br />
                    <div class="row">
                        <div class="col-md-12">

                            <form action="{{route('admin.changePwd')}}" method="POST" class="form-horizontal form-label-left">
                                <div class="modal-body">
                                    @csrf
                                    @method('PUT')
                                    <div class="form-group row ">
                                        <label class="control-label col-md-3 col-sm-3 ">Current Password<span class="required">*</span></label>
                                        <div class="col-md-9 col-sm-9 ">
                                            <input type="password" class="form-control" id="" name="currentPwd" placeholder="" required>
                                            <input type="hidden" class="form-control" name="id" value="{{$user->id}}" placeholder="" required>
                                        </div>
                                    </div>
                                    <div class="form-group row ">
                                        <label class="control-label col-md-3 col-sm-3 ">New Password<span class="required">*</span></label>
                                        <div class="col-md-9 col-sm-9 ">
                                            <input type="password" class="form-control" name="newPwd" placeholder="" required>
                                        </div>
                                    </div>
                                    <div class="form-group row ">
                                        <label class="control-label col-md-3 col-sm-3 ">Confirm Password<span class="required">*</span></label>
                                        <div class="col-md-9 col-sm-9 ">
                                            <input type="password" class="form-control" name="conNewpwd" placeholder="" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" name="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
{{--    CHANGE PROFILE PICTURE MODAL--}}
    <!-- Modal -->
    <div class="modal fade" id="profileImage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Change Profile Picture</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="x_content">
                    <br />
                    <div class="row">
                        <div class="col-md-12">

                            <form action="{{route('admin.profileImage')}}" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                                <div class="modal-body">
                                    @csrf
                                    {{ method_field('PUT') }}
                                    <div class="form-group row ">
                                        <label class="control-label col-md-3 col-sm-3 ">New Picture<span class="required">*</span></label>
                                        <div class="col-md-9 col-sm-9 ">
                                            <input type="hidden" class="form-control" id="proFileUid" value="{{$user->id}}" name="id" placeholder="" required>
                                            <input type="file" class="form-control" name="img" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" name="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection
