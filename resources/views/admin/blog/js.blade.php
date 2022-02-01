@section('script')

    <script type="text/javascript">

        $(document).ready(function () {

            loadBlogTable();

            function loadBlogTable(){
                $.ajax({
                    type: 'GET',
                    url: "{{route('admin.blog.table')}}",
                    success: function (data) {

                        $('.table-striped').dataTable({

                            "destroy":true,
                            dom: 'Bfrtip',
                            buttons: [
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ],
                            data: data.blogs,

                            columns: [

                                {
                                    data: 'image',
                                    'render': function (data, type, row) {
                                        return '<img src="../'+data+'" alt="image" height="30" width="30" />';
                                    }
                                },
                                { data: 'title'},
                                { data: 'author'},
                                {
                                    data: 'author_image',
                                    'render': function (data, type, row) {
                                        return '<img src="../'+data+'" alt="image" height="30" width="30" />';
                                    }
                                },
                                { data: 'status'},
                                {
                                    data: data,
                                    'render': function (data, type, row) {
                                        return "<a href='"+"blog/"+data.id +"' class='btn btn-success' style='background: #55ff52;' ><i class='fa fa-eye'></i></a>"+
                                            "<a class='btn btn-warning' data-id='"+ data.id +"' data-title='"+ data.title +"' data-image='"+ data.image +"' data-content='"+ data.content +"' data-status='"+ data.status +"' data-author='"+ data.author+"' data-authorimage='"+ data.author_image +"' data-toggle='modal'  data-target='#editBlogModal'><i class='fa fa-edit'></i></a>"+
                                            "<a class='btn btn-danger' data-id='"+ data.id +"' data-title='"+ data.title +"' data-toggle='modal'  data-target='#deleteBlogModal'><i class='fa fa-trash'></i></a>";
                                    }
                                },
                            ]
                        });

                    },
                    error: function (error) {
                        alert('Data not save');
                    }
                });
            }


            //  Add BLOG function
            $('#addBlog').on('submit', function (e) {
                e.preventDefault();

                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,blog Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.blog.store')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#addBlogModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadBlogTable();
                            });
                    },
                    error: function (error) {
                        console.log(error);
                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                    }
                });
            });

            // PASS blog DATA TO MODAL
            $('#editBlogModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var title = button.data('title');
                var content = button.data('content');
                // var image = button.data('image');
                var author = button.data('author');
                var status = button.data('status');
                // var createdbyimg = button.data('createdbyimg');

                var modal = $(this);

                modal.find('.modal-body #editBlogId').val(id);
                modal.find('.modal-body #editBlogTitle').val(title);
                modal.find('.modal-body #editBlogContent').val(content);
                // modal.find('.modal-body #editBlogImage').val(image);
                modal.find('.modal-body #editBlogAuthor').val(author);
                modal.find('.modal-body #editBlogStatus').val(status);
                // modal.find('.modal-body #editBlogCreatedByImage').val(createdbyimg);



            });

            //  update blog function
            $('#updateBlog').on('submit', function (e) {
                e.preventDefault();

                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,blog Entry
                let formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '{{ route("admin.blog.update", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#editBlogModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadBlogTable();
                            });
                    },
                    error: function (error) {
                        console.log(error);
                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                    }
                })
            });





            $('#deleteBlogModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var title = button.data('title');
                var modal = $(this);

                modal.find('.modal-footer #delBlogId').val(id);
                modal.find('.modal-header #blogTitle').html('<h6> You are about to delete '+name+ '</h6>');

            });

            //  delete blog function
            $('#deleteBlog').on('submit', function (e) {
                e.preventDefault();

                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });
                console.log('click');
                //  For ,blog Entry
                let formData = new FormData(this);

                $.ajax({
                    method: 'POST',
                    url: '{{ route("admin.blog.destroy", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#deleteBlogModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadBlogTable();
                            });
                    },
                    error: function (error) {

                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                    }
                })
            });

        })
    </script>



@endsection
