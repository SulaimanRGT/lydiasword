@extends('admin.layouts.layout')

@section('content')
    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>Publisher List</h3>
                </div>

            </div>

            <div class="clearfix"></div>

            <div class="row">

                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>Publisher list</h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <button class="btn btn-primary" data-toggle="modal" data-target="#addPublisherModal"><i class="fa fa-plus mr-2"></i> Add Publisher</button>
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
                                                <th>Name</th>
                                                <th>Contact</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                <th>Setting</th>
                                            </tr>
                                            </thead>
                                            <tbody>

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
    @include('admin.publisher.modal')
    @include('admin.publisher.js')
@endsection
