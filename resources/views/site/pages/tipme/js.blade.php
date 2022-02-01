


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

        $(document).ready(function (){

            //  Add Publication function
            $('#tipMePay').on('submit', function (e) {
                e.preventDefault();
                var btn = $('.checkcustomer');
                btn.html(`<i class='fa fa-spinner'></i> Verifying...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });


                //  For ,validate using the route Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('tipme')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        // hide the tipe modal

                        //get the response from the controller
                        console.log(response)
                        if(response.auth_token !== null && response.status == 1 && response.cid !== null) {

                            $('#payWithTipMe').modal('hide');

                            var cusmodal = $('#verifyPinTipme');
                            $('#tipMePay').trigger('reset');
                            btn.html('Verify Account');
                            cusmodal.modal('show');

                            localStorage.setItem('cid', response.cid)
                            localStorage.setItem('username', response.details.user_name)
                            localStorage.setItem('mobile', response.details.mobile)
                            localStorage.setItem('profile', response.details.profile_pic)

                            $('#mobile').html(response.details.mobile)
                            $('#customerName').html(response.details.user_name)
                            $('#customerImg').attr("src", response.details.profile_pic);

                        }else{

                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )
                                .then((result) => {
                                    $('#tipMePay').trigger('reset');
                                    btn.html('Verify Account');

                                });
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

            });



//  validate pin function
            $('#tipMeVerify').on('submit', function (e) {
                e.preventDefault();
                var btn = $('.verifypin');
                btn.html(`<i class='fa fa-spinner'></i> Verifying...`)
                 var pin = $('#yourTipMePin').val();
                 var price = $('#itemPrice').val();
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });
                var _token = $('input[name="_token"]').val();



                //  For ,validate using the route Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('tipme.verify')}}",
                    data: {_token:_token,cid:localStorage.getItem('cid'),pin:pin,price:price},
                    success: function (response) {

                        if(response.status != 0){

                            $('#verifyPinTipme').modal('hide');
                            $('#verifyOtpTipme').modal('show');
                            $('#cmobile').html(localStorage.getItem('mobile'))
                            $('#cName').html(localStorage.getItem('username'))
                            $('#cImg').attr("src", localStorage.getItem('profile'));
                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )

                        }else{
                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )
                        //         .then((result) => {
                                    $('#tipMeVerify').trigger('reset');
                                    btn.html('Verify Account');
                        //
                        //         });
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

//  validate Otp function
            $('#tipMeOtpVerify').on('submit', function (e) {
                e.preventDefault();
                var btn = $('.verifyotp');
                btn.html(`<i class='fa fa-spinner'></i> Verifying...`)
                 var otp = $('#OtpCode').val();
                 var price = $('#ItemPrice').val();
                 var id = $('#itemId').val();
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });
                var _token = $('input[name="_token"]').val();



                //  For ,validate using the route Entry
                let formData = new FormData(this);
                $.ajax({
                    type: 'POST',
                    url: "{{route('tipme.verify.otp')}}",
                    data: {_token:_token,id:id,username:localStorage.getItem('username'),otp:otp,cid:localStorage.getItem('cid'),price:price},
                    success: function (response) {


                        //get the response from the controller

                        if(response.status ==1){

                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )
                            console.log(response.pubid, response.pdf)
                            $('#verifyOtpTipme').modal('hide');
                            // localStorage.clear();
                            localStorage.setItem(response.pubid, response.pdf)
                            localStorage.removeItem('username')
                            localStorage.removeItem('cid')
                            localStorage.removeItem('mobile')
                            localStorage.removeItem('profile')
                            $('#tipMeVerify').trigger('reset');
                        //
                        }else{
                        //
                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )
                        //         .then((result) => {
                                    $('#tipMeVerify').trigger('reset');
                                    btn.html('Verify Account');
                        //
                        //         });
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




        })






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

    </script>
@endsection
