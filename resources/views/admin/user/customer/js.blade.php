@section('script')

    <script type="text/javascript">

        $(document).ready(function () {



            //  update status function
            $('.updateStatus').on('submit', function (e) {
                e.preventDefault();

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
                    },
                    error: function (error) {
                        // console.log(error);
                        swal({
                                title: "Entry Fail",
                                text: "Please check the data input properly",
                                icon: "error",
                            }
                        );
                    }
                });
            });



        })
    </script>



@endsection
