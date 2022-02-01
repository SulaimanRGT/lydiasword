@extends('admin.layouts.layout')

@section('content')

    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>Publications List</h3>
                </div>
            </div>

            <div class="clearfix"></div>

            <div class="row">

                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>Publication list</h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <button class="btn btn-primary" data-toggle="modal" data-target="#addPublicationModal">Add Publication</button>
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
                                                    <th>Cover</th>
                                                    <th>Title</th>
                                                    <th>Genre</th>
                                                    <th>Type</th>
                                                    <th>Year published</th>
                                                    <th>Price</th>
                                                    <th>Amount Purchased</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            <tbody>
                                                @foreach($publications as $publication)
                                                    <tr>
                                                        <td><img height="30" width="30" src="{{asset($publication->cover)}}" alt="{{$publication->title}}"></td>
                                                        <td>{{$publication->title}}</td>
                                                        <td>{{$publication->genre}}</td>
                                                        <td>{{$publication->type}}</td>
                                                        <td>{{$publication->published_year}}</td>
                                                        <td>{{$publication->price}}</td>
{{--                                                        @foreach($publications->count as $count)--}}
                                                        <td>{{$publication->count}}</td>
{{--                                                        @endforeach--}}
                                                        <td>{{$publication->status}}</td>
                                                        <td>
                                                            <a href="{{route('admin.publication.show', $publication->id)}}" class="btn btn-success"><i class="fa fa-eye"></i>View</a>
                                                            <a class="btn btn-warning" data-id="{{$publication->id}}" data-title="{{$publication->title}}" data-cover="{{$publication->cover}}" data-genre="{{$publication->genre}}" data-status="{{$publication->status}}" data-summary="{{$publication->summary}}" data-author="{{$publication->author}}" data-isbn="{{$publication->isbn}}" data-published_year="{{$publication->published_year}}" data-price="{{$publication->price}}" data-type="{{$publication->type}}" data-authorid="{{$publication->author_id}}" data-publisherid="{{$publication->publisher_id}}" data-toggle="modal" data-target="#editPublicationModal"><i class="fa fa-edit"></i>Edit</a>
                                                            <a class="btn btn-danger" data-id="{{$publication->id}}" data-title="{{$publication->title}}" data-toggle="modal" data-target="#deletePublicationModal"><i class="fa fa-edit"></i>Edit</a>
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
    @include('admin.publication.js')
    @include('admin.publication.modal')


@endsection
