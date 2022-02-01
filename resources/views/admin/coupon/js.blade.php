@section('script')

    <script type="text/javascript">

        $(document).ready(function () {

            loadCouponTable();

            function loadCouponTable(){
                $.ajax({
                    type: 'GET',
                    url: "{{route('admin.coupon.table')}}",
                    success: function (data) {

                        $('.table-striped').dataTable({

                            "destroy":true,
                            dom: 'Bfrtip',
                            buttons: [
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ],
                            data: data.coupons,

                            columns: [

                                { data: 'name'},
                                { data: 'code'},
                                { data: 'value'},
                                { data: 'type'},
                                { data: 'description'},
                                {
                                    data: data,
                                    'render': function (data, type, row) {
                                        return "<a href='"+"coupon/"+data.id +"' class='btn btn-success' style='background: #55ff52;' ><i class='fa fa-eye'></i></a>"+
                                            "<a class='btn btn-warning' data-id='"+ data.id +"' data-name='"+ data.name +"' data-code='"+ data.code +"' data-type='"+ data.type +"' data-value='"+ data.value +"' data-desc='"+ data.description+"'  data-toggle='modal'  data-target='#editCouponModal'><i class='fa fa-edit'></i></a>"+
                                            "<a class='btn btn-danger' data-id='"+ data.id +"' data-name='"+ data.name +"' data-toggle='modal'  data-target='#deleteCouponModal'><i class='fa fa-trash'></i></a>";
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


            //  Add Coupon function
            $('#addCoupon').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#addBtn');
                btn.html(`<i class='fa fa-spinner'></i> Saving...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Coupon Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.coupon.store')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#addCouponModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                $('#addCoupon').trigger('reset')
                                loadCouponTable();
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
                        btn.html(`Save`)
                    }
                });
            });

            // PASS Coupon DATA TO MODAL
            $('#editCouponModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var code = button.data('code');
                var desc = button.data('desc');
                var type = button.data('type');
                var value = button.data('value');

                var modal = $(this);

                modal.find('.modal-body #editCouponId').val(id);
                modal.find('.modal-body #editCouponName').val(name);
                modal.find('.modal-body #editCouponCode').val(code);
                modal.find('.modal-body #editCouponDesc').val(desc);
                modal.find('.modal-body #editCouponType').val(type);
                modal.find('.modal-body #editCouponValue').val(value);

            });

            //  update Coupon function
            $('#updateCoupon').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#editBtn');
                btn.html(`<i class='fa fa-spinner'></i> Updating...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Coupon Entry
                let formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '{{ route("admin.coupon.update", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#editCouponModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadCouponTable();
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
                        btn.html(`Save`)
                    }
                })
            });





            $('#deleteCouponModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var name = button.data('name');
                var modal = $(this);

                modal.find('.modal-footer #delCouponId').val(id);
                modal.find('.modal-header #couponName').html('<h6> You are about to delete '+name+' information</h6>');

            });

            //  delete Coupon function
            $('#deleteCoupon').on('submit', function (e) {
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
                //  For ,Coupon Entry
                let formData = new FormData(this);

                $.ajax({
                    method: 'POST',
                    url: '{{ route("admin.coupon.destroy", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#deleteCouponModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                loadCouponTable();
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
