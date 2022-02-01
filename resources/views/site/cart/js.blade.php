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
                btn.html(`<i class='fa fa-spinner'></i> Verifying...`);
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
                    url: "{{route('cart.tipme')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        // hide the tipe modal
                        if((response.auth_token != null || response.auth_token != '') && response.status == 1 && (response.cid !== null || response.cid !== '') ){
                            //get the response from the controller

                            $('#payWithTipMe').modal('hide');
                            // swal(
                            //     {
                            //         title: response.message,
                            //         icon: response.icon,
                            //     }
                            // )
                            var cusmodal = $('#verifyPinTipme');
                            $('#tipMePay').trigger('reset');
                            btn.html('Verify Account');
                            cusmodal.modal('show');

                            localStorage.clear();
                            localStorage.setItem('cid', response.cid)
                            localStorage.setItem('username',response.details.user_name)
                            localStorage.setItem('mobile', response.details.mobile)
                            localStorage.setItem('profile', response.details.profile_pic)

                            $('#mobile').html(response.details.mobile)
                            $('#customerName').html(response.details.user_name)
                            $('#customerImg').attr("src",response.details.profile_pic);

                        }else{

                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )
                                .then((result) => {
                                    // $('#payWithTipMe').modal('hide');
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
                var btn = $('.btnverifypin');
                btn.html(`<i class='fa fa-spinner'></i> Verifying...`);
                var pin = $('#yourTipMePin').val();
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
                    url: "{{route('cart.tipme.verify')}}",
                    data: {_token:_token,pin:pin,cid:localStorage.getItem('cid')},
                    success: function (response) {

                        // hide the tipe modal


                        //get the response from the controller
                        console.log(response)
                        if(response.status == 1){

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
                            //     console.log(response);
                            //     localStorage.clear();
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
                            btn.html('Verify PIN');
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
                var btn = $('.btnverifyotp');
                btn.html(`<i class='fa fa-spinner'></i> Verifying...`);
                var otp = $('#OtpCode').val();

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
                    url: "{{route('cart.tipme.verify.otp')}}",
                    data: {_token:_token,otp:otp,cid:localStorage.getItem('cid'),username:localStorage.getItem('username'),},
                    success: function (response) {

                        // hide the tipe modal
                        //get the response from the controller
                        console.log(response)
                        if(response.status == 1){
                            // localStorage.clear();
                            //     console.log(response);
                                localStorage.clear();

                            // $('#verifyPinTipme').modal('hide');
                            $('#verifyOtpTipme').modal('hide');

                            //
                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )
                                .then((result) => {
                                    $('#tipMeVerify').trigger('reset');
                                    location.reload();
                                });
                        }else{
                            //
                            swal(
                                {
                                    title: response.message,
                                    icon: response.icon,
                                }
                            )


                            //         .then((result) => {
                            btn.html('Verify OTP');
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
    </script>
@endsection
