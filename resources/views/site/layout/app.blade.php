<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>{{ config('app.name') }} | @yield('title')</title>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/icon" href="{{asset('assets/images/favicon.ico')}}"/>
    <!-- Font Awesome -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="{{asset('')}}assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Slick slider -->
    <link href="{{asset('')}}assets/css/slick.css" rel="stylesheet">
    <!-- Theme color -->
    <link id="switcher" href="{{asset('assets/css/theme-color/lite-blue-theme.css')}}" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('images\LydiasWordLogoTransparent.png')}}" >

    <!-- Main Style -->
    <link href="{{asset('style.css')}}" rel="stylesheet">

    <!-- Fonts -->

    <!-- Open Sans for body font -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800" rel="stylesheet">
    <!-- Lato for Title -->
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="{{asset('assets/css/checkout.css')}}">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Datatables -->
    <link href="{{asset('admin/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('admin/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('admin/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('admin/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('admin/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css')}}" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{ asset('front/css/main.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('front/css/util.css') }}">
    <link rel="stylesheet" href="{{asset('assets/css/checkout.css')}}">

    <style>
        .myheader{
            height: 15%;
            display: block;
            background-color: #37c6f5;
        }
        .myul{
            align-items: center;
        }
        .myul li{
            display: inline-block;
        }
        .username{
            margin: 0px 10px;
            position: relative;
        }
        .cart, .mypub{
            float: right;
            margin: 0px 20px;
        }
        .myul li a{
            color: whitesmoke;
        }

        canvas_container{
            width: 80%;
            height: 100%;
            overflow: auto;
            background: #37c6f5;
            text-align: center;
            border: 3px solid black;

        }

         * {
             font-family: 'Poppins-Regular';
         }
        .wrapper {
            width: 100%;
            /*height: 100vh;*/
            /*display: flex;*/
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
        .containers {
            /*width: 50%;*/
            /*height: 100%;*/
            /*padding-top: 15px;*/
            /*display: flex;*/
            /*flex-wrap: wrap;*/
            align-items: center;
            justify-content:space-evenly;
        }
        .containers .card {
            /*width: 270px;*/
            overflow: hidden;
            margin-bottom: 15px;
            text-align: center;
            /*border: 2px solid #02537a;*/
            /*border-radius: 15px;*/
            /*box-shadow: 0 0 7px #71818f;*/
        }
        .containers .card .product-image {
            /*width: 230px;*/
            margin: 20px auto;
        }
        .containers .card .product-image img {
            width: 90%;
            transition: 0.4s;
        }
        .containers .card .product-image img:hover {
            transform: scale(1.1);
        }
        .containers .card .product-info h4 {
            font-size: 18px;
            padding: 0 25px;
            color: #37c6f5;
            margin-bottom: 10px;
        }
        .containers .card .btn {
            width: 100%;
        }
        .containers .card .btn button {
            width: 100%;
            padding: 10px;
            background: #37c6f5;
            border: 1px solid grey;
            outline: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            border-radius: 15px;
        }
        .containers .card .btn button:hover {
            transform: scale(1.1);
            transition: 0.4s;
        }

    </style>
</head>

<body>

    @yield('content')


<!-- End footer -->
<!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.7.570/build/pdf.min.js"></script>
{{--    <script src="{{asset('js/pdf.js')}}"></script>--}}

    @yield('script')
    <script>


        $(function() {
            $("#contactForms").submit(function(e) {
                e.preventDefault();
                // alert("jQuery works");

                $.ajax({
                    url: '{{route('Contact_us')}}',
                    method: 'POST',
                    data: new FormData(this),
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    //timeout: 3000, // sets timeout to 3 seconds
                    success: function(resp){

                        $('#contactForms').trigger('reset');
                        swal(
                            {
                                title: resp.title,
                                text: resp.message,
                                icon: resp.icon,
                            }
                        )
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
        });
    </script>
    {{--sweetalert--}}
    <script src="{{ asset('admin/sweetalert/sweetalert.min.js') }}"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
{{--    <script src="{{asset('admin/vendors/datatables.net-responsive/js/dataTables.responsive.min.js')}}"></script>--}}
{{--    <script src="{{asset('admin/vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js')}}"></script>--}}
    <!-- Bootstrap -->
<script src="{{asset('')}}assets/js/bootstrap.min.js"></script>
<!-- Slick slider -->
<script type="text/javascript" src="{{asset('assets/js/slick.min.js')}}"></script>
<!-- Counter js -->
<script type="text/javascript" src="{{asset('assets/js/counter.js')}}"></script>
<!-- Ajax contact form  -->
<script type="text/javascript" src="{{asset('assets/js/app.js')}}"></script>

    <!-- Datatables -->
    <script src="{{asset('admin/vendors/datatables.net/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-bs/js/dataTables.bootstrap.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-buttons/js/dataTables.buttons.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-buttons/js/buttons.flash.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-buttons/js/buttons.html5.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-buttons/js/buttons.print.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-keytable/js/dataTables.keyTable.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-responsive/js/dataTables.responsive.min.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js')}}"></script>
    <script src="{{asset('admin/vendors/datatables.net-scroller/js/dataTables.scroller.min.js')}}"></script>
    <script src="{{asset('admin/vendors/jszip/dist/jszip.min.js')}}"></script>
    <script src="{{asset('admin/vendors/pdfmake/build/pdfmake.min.js')}}"></script>
    <script src="{{asset('admin/vendors/pdfmake/build/vfs_fonts.js')}}"></script>

<!-- Custom js -->
<script type="text/javascript" src="{{asset('assets/js/custom.js')}}"></script>
<script type="text/javascript" src="{{asset('script.js')}}"></script>

</body>
</html>
