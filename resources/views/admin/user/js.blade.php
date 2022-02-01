@section('script')

    <script type="text/javascript">

        $(document).ready(function () {

            //  update status function
            $('.updateStatus').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#active');
                let btn1 = $('#deactive');
                btn.html(`<i class='fa fa-spinner'></i> Activating...`)
                btn1.html(`<i class='fa fa-spinner'></i> De-Activating...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Publication Entry
                console.log('working')
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.updateStatus')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                location.reload();
                            });
                        btn.html('Activate');
                        btn1.html('De-Activate');
                    },
                    error: function (error) {
                        // console.log(error);
                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                        btn.html('Activate');
                        btn1.html('De-Activate');
                    }
                });
            });



            //  Add User function
            $('#addUser').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#addBtn');
                btn.html(`<i class='fa fa-spinner'></i> Saving...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,User Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.users.store')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#addUserModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                location.reload();
                            });
                        btn.html('Save')
                    },
                    error: function (error) {
                        console.log(error);
                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                        btn.html('Save')
                    }
                });
            });

            // PASS User DATA TO MODAL
            $('#editUserModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var role = button.data('role');
                var email = button.data('email');
                var contact = button.data('contact');
                var gender = button.data('gender');
                var image = button.data('image');

                var modal = $(this);

                modal.find('.modal-body #editUserId').val(id);
                modal.find('.modal-body #editUserName').val(name);
                modal.find('.modal-body #editUserEmail').val(email);
                // modal.find('.modal-body #editUserImage').val(image);
                modal.find('.modal-body #editUserGender').val(gender);
                modal.find('.modal-body #editUserRole').val(role);
                modal.find('.modal-body #editUserContact').val(contact);

            });

            //  update User function
            $('#updateUser').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#editBtn');
                btn.html(`<i class='fa fa-spinner'></i> Updating...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,User Entry
                let formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '{{ route("admin.users.update", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#editUserModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                            )
                            .then((result) => {
                                location.reload();
                            });
                        btn.html('Save')
                    },
                    error: function (error) {
                        console.log(error);
                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                        btn.html('Save')
                    }
                })
            });



            $('#profileImage').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var modal = $(this);

                modal.find('.modal-body #proFileUid').val(id);

            });

            $('#deleteUserModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var modal = $(this);

                modal.find('.modal-footer #delUserId').val(id);
                modal.find('.modal-header #userName').html('<h6> You are about to delete '+name+ '</h6>');

            });

            //  delete User function
            $('#deleteUser').on('submit', function (e) {
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
                //  For ,User Entry
                let formData = new FormData(this);

                $.ajax({
                    method: 'POST',
                    url: '{{ route("admin.users.destroy", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#deleteUserModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                location.reload();
                            });
                        btn.html('Yes')
                    },
                    error: function (error) {

                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                        btn.html('Yes')
                    }
                })
            });

        })
    </script>



@endsection
