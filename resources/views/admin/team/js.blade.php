@section('script')

    <script type="text/javascript">

        $(document).ready(function () {

            loadTeamTable();

            function loadTeamTable(){
                $.ajax({
                    type: 'GET',
                    url: "{{route('admin.team.table')}}",
                    success: function (data) {

                        $('.table-striped').dataTable({

                            "destroy":true,
                            dom: 'Bfrtip',
                            buttons: [
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ],
                            data: data.teams,

                            columns: [

                                {
                                    data: 'img',
                                    'render': function (data, type, row) {
                                        return '<img src="../'+data+'" alt="image" height="30" width="30" />';
                                    }
                                },
                                { data: 'name'},
                                { data: 'position'},
                                { data: 'facebook'},
                                {
                                    data: data,
                                    'render': function (data, type, row) {
                                        return "<a href='"+"team/"+data.id +"' class='btn btn-success' style='background: #55ff52;' ><i class='fa fa-eye'></i></a>"+
                                            "<a class='btn btn-warning' data-id='"+ data.id +"' data-name='"+ data.name +"' data-position='"+ data.position +"' data-bio='"+ data.bio +"' data-facebook='"+ data.facebook +"' data-twitter='"+ data.twitter+"' data-linkedin='"+ data.linkedin +"' data-instagram='"+ data.instagram +"' data-toggle='modal'  data-target='#editTeamModal'><i class='fa fa-edit'></i></a>"+
                                            "<a class='btn btn-danger' data-id='"+ data.id +"' data-name='"+ data.name +"' data-toggle='modal'  data-target='#deleteTeamModal'><i class='fa fa-trash'></i></a>";
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


            //  Add Team function
            $('#addTeam').on('submit', function (e) {
                e.preventDefault();

                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Team Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.team.store')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#addTeamModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadTeamTable();
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

            // PASS Team DATA TO MODAL
            $('#editTeamModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var position = button.data('position');
                var bio = button.data('bio');
                var facebook = button.data('facebook');
                var twitter = button.data('twitter');
                var linkedin = button.data('linkedin');
                var instagram = button.data('instagram');

                var modal = $(this);

                modal.find('.modal-body #editTeamId').val(id);
                modal.find('.modal-body #editTeamName').val(name);
                modal.find('.modal-body #editTeamPosit').val(position);
                modal.find('.modal-body #editTeamBio').val(bio);
                modal.find('.modal-body #editTeamFb').val(facebook);
                modal.find('.modal-body #editTeamLink').val(linkedin);
                modal.find('.modal-body #editTeamInsta').val(instagram);
                modal.find('.modal-body #editTeamTwt').val(twitter);

            });

            //  update Team function
            $('#updateTeam').on('submit', function (e) {
                e.preventDefault();

                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Team Entry
                let formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '{{ route("admin.team.update", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#editTeamModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadTeamTable();
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





            $('#deleteTeamModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var modal = $(this);

                modal.find('.modal-footer #delTeamId').val(id);
                modal.find('.modal-header #teamName').html('<h6> You are about to delete '+name+ 'information</h6>');

            });

            //  delete Team function
            $('#deleteTeam').on('submit', function (e) {
                e.preventDefault();

                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });
                console.log('click');
                //  For ,Team Entry
                let formData = new FormData(this);

                $.ajax({
                    method: 'POST',
                    url: '{{ route("admin.team.destroy", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#deleteTeamModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadTeamTable();
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
