


@section('script')

    <script type="text/javascript">

        @if(Session::has('message'))
            var type = "{{ Session::get('alert-type', 'info') }}";
            switch(type){
                case 'info':
                toastr.info("{{ Session::get('message') }}");
                break;

                case 'warning':
                toastr.warning("{{ Session::get('message') }}");
                break;

                case 'success':
                toastr.success("{{ Session::get('message') }}");
                break;

                case 'error':
                toastr.error("{{ Session::get('message') }}");
                break;
            }
        @endif

            $('#applyCoupon').on('submit', function (e){

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
                    url: "{{route('apply.coupon')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        // If you want to get the response from the controller
                        $total = parseInt($('#total').html());
                        console.log($total);
                        if(response.type === 'Success'){
                            $total = response.discount * $total;
                            console.log($total)
                            $("#total").html($total);
                            toastr.success(response.message, response.type, {timeOut: 5000})
                        }else{

                            $('#couponInput').val('');

                            toastr.warning(response.message, response.type, {timeOut: 5000})

                        }

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
            })
            $('.add_to_cart').click(function (e){
                e.preventDefault();
                const id = $(this).attr('data-id');
                var url = '{{route('add.to.cart', ':id')}}';
                url = url.replace(':id', id);
                $.ajax({
                    url: url,
                    method: "GET",
                    success: function (response) {
                        window.location.reload();
                        toastr.success('Item added successfully', 'Success Alert', {timeOut: 5000})
                    }
                });
            })



    </script>
@endsection
