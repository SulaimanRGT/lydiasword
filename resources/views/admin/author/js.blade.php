@section('script')

    <script type="text/javascript">

        $(document).ready(function () {

            loadAuthorTable();

            function loadAuthorTable(){
                $.ajax({
                    type: 'GET',
                    url: "{{route('admin.author.table')}}",
                    success: function (data) {

                        $('.table-striped').dataTable({

                            "destroy":true,
                            dom: 'Bfrtip',
                            buttons: [
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ],
                            data: data.authors,

                            columns: [

                                {
                                    data: 'img',
                                    'render': function (data, type, row) {
                                        return '<img src="../'+data+'" alt="image" height="30" width="30" />';
                                    }
                                },
                                { data: 'name'},
                                { data: 'dob'},
                                { data: 'country'},
                                { data: 'type'},
                                {
                                    data: data,
                                    'render': function (data, type, row) {
                                        return "<a href='"+"author/"+data.id +"' class='btn btn-success' style='background: #55ff52;' ><i class='fa fa-eye'></i></a>"+
                                            "<a class='btn btn-warning' data-id='"+ data.id +"' data-name='"+ data.name +"' data-country='"+ data.country +"' data-bio='"+ data.bio +"' data-type='"+ data.type +"' data-img='"+ data.img+"' data-dob='"+ data.dob +"' data-toggle='modal'  data-target='#editAuthorModal'><i class='fa fa-edit'></i></a>"+
                                            "<a class='btn btn-danger' data-id='"+ data.id +"' data-name='"+ data.name +"' data-toggle='modal'  data-target='#deleteAuthorModal'><i class='fa fa-trash'></i></a>";
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


            //  Add Author function
            $('#addAuthor').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#addBtn');
                btn.html(`<i class='fa fa-spinner'></i> Saving...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Author Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.author.store')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#addAuthorModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                $('#addAuthor').trigger('reset')
                                loadAuthorTable();
                            });
                        btn.html(`Save`)
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

            // PASS Author DATA TO MODAL
            $('#editAuthorModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var country = button.data('country');
                var bio = button.data('bio');
                var type = button.data('type');
                var dob = button.data('dob');

                var modal = $(this);

                modal.find('.modal-body #editAuthorId').val(id);
                modal.find('.modal-body #editAuthorName').val(name);
                modal.find('.modal-body #editAuthorCountry').val(country);
                modal.find('.modal-body #editAuthorBio').val(bio);
                modal.find('.modal-body #editAuthorType').val(type);
                modal.find('.modal-body #editAuthorDob').val(dob);

            });

            //  update Author function
            $('#updateAuthor').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#editBtn');
                btn.html(`<i class='fa fa-spinner'></i> Updating...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Author Entry
                let formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '{{ route("admin.author.update", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#editAuthorModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadAuthorTable();
                            });
                        btn.html(`Save`)
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





            $('#deleteAuthorModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var modal = $(this);

                modal.find('.modal-footer #delAuthorId').val(id);
                modal.find('.modal-header #authorName').html('<h6> You are about to delete '+name+' information</h6>');

            });

            //  delete Author function
            $('#deleteAuthor').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#delBtn');
                btn.html(`<i class='fa fa-spinner'></i> Deleting...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });
                console.log('click');
                //  For ,Author Entry
                let formData = new FormData(this);

                $.ajax({
                    method: 'POST',
                    url: '{{ route("admin.author.destroy", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#deleteAuthorModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadAuthorTable();
                            });
                        btn.html(`Yes`)
                    },
                    error: function (error) {

                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                        btn.html(`Yes`)
                    }
                })
            });

        })




    </script>



@endsection
