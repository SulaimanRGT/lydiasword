@section('script')

<script>
    $(document).ready(function() {
        loadPublisherTable();

        //  Autoload Data Table
        function loadPublisherTable() {

            //AJAX Header for token
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                }
            });

            $.ajax({
                type: "GET",
                url: "{{ route('admin.publisher.table') }}",
                success: function (data) {

                    $('.table').dataTable({
                        responsive: true,
                        select: true,
                        "destroy":true,
                        dom: "Bfrtip",
                        buttons: [
                            'copy', 'csv', 'excel', 'pdf', 'print'
                        ],

                        data: data.publishers,

                        columns: [
                            { data: 'name'},
                            { data: 'contact'},
                            { data: 'country'},
                            { data: 'city'},
                            {
                                data: data,
                                'render': function (data, type, row) {
                                    return "<a href='"+ "admin/publisher/"+data.id +"' class='btn btn-success' style='' ><i class='fa fa-eye'></i> View</a> " +
                                        "<a class='btn btn-warning text-white' data-id='"+ data.id +"' data-name='"+ data.name +"' data-contact='"+ data.contact +"' data-city='"+ data.city +"' data-country='"+ data.country +"' data-toggle='modal'  data-target='#editPublisherModal'><i class='fa fa-edit'></i> Edit</a> " +
                                        "<a class='btn btn-danger text-white' data-id='"+ data.id +"' data-name='"+ data.name +"' data-contact='"+ data.contact +"' data-toggle='modal' data-target='#deletePublisherModal'><i class='fa fa-trash'></i> Delete</a>";
                                }
                            },
                        ]
                    })
                },
                error: function (error) {
                    console.log(error)
                    console.log('No data found');
                }
            });
        }
        //  Autoload Data Table

        //  Autoload Add Publisher
        $('#addPub').submit(function (e) {
            e.preventDefault();

            //AJAX Header for token
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                }
            });

            let formData = new FormData(this);
            // console.log(formData);

            $.ajax({
                type: "POST",
                url: "{{ route('admin.publisher.store') }}",
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                    console.log(response);
                    $('#addPublisherModal').modal('hide');
                    swal({
                            title: response.message,
                            icon: response.icon,
                        }
                    ).then((result) => {
                        $('#addPub').trigger('reset');
                        loadPublisherTable();
                    });
                }
                , error: function(error) {
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
        //  Autoload Add Publisher

        // PASS Publisher DATA TO MODAL
        $('#editPublisherModal').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget);

            let id = button.data('id');
            let name = button.data('name');
            let contact = button.data('contact');
            let city = button.data('city');
            let country = button.data('country');

            let modal = $(this);

            modal.find('.modal-body #editPubId').val(id);
            modal.find('.modal-body #editPubName').val(name);
            modal.find('.modal-body #editPubContact').val(contact);
            modal.find('.modal-body #editPubCountry').val(country);
            modal.find('.modal-body #editPubCity').val(city);
        });
        // PASS Publisher DATA TO MODAL

        //  Autoload Update Publisher
        $('#updatePub').submit(function (e) {
            e.preventDefault();
            // alert('hey there');

            //AJAX Header for token
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                }
            })

            let formData = new FormData(this);
            // console.log(formData);

            $.ajax({
                type: "POST",
                url: "{{ route('admin.publisher.update', 'id') }}",
                // data: $('#editPub').serialize(),
                data: formData,
                contentType: false,
                processData: false,
                success: function (response) {
                    console.log(response);
                    $('#editPublisherModal').modal('hide');

                    swal({
                            title: response.message,
                            icon: response.icon,
                        }
                    ).then((result) => {
                        loadPublisherTable();
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
        //  Autoload Update Publisher

        // PASS Publisher DATA TO MODAL
        $('#deletePublisherModal').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget);
            let id = button.data('id');
            let name = button.data('name');
            let contact = button.data('contact');
            let modal = $(this);

            modal.find('.modal-footer #deletePubId').val(id);
        });
        // PASS Publisher DATA TO MODAL

        //  Autoload delete Publisher
        $('#deletePub').submit(function (e) {
            e.preventDefault();

            //AJAX Header for token
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                }
            });

            let formData = new FormData(this);
            console.log(formData);

            $.ajax({
                    method: 'POST',
                url: "{{ route('admin.publisher.destroy', 'id') }}",
                // data: $('#deletePub').serialize(),
                data: formData,
                contentType: false,
                processData: false,
                success: function (response) {

                    $('#deletePublisherModal').modal('hide');

                    swal({
                            title: response.message,
                            icon: response.icon,
                        }
                    ).then((result) => {
                        loadPublisherTable();
                    });

                },
                error: function (error) {
                    console.log(error);
                    console.log('Data not remove');
                }

            })
        })
        //  Autoload delete Publisher
    });

</script>;

@endsection
