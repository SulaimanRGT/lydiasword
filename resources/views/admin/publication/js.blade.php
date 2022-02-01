@section('script')

    <script type="text/javascript">

        $(document).ready(function () {




            {{--loadPublicationTable();--}}

            {{--function loadPublicationTable(){--}}
            {{--    $.ajax({--}}
            {{--        type: 'GET',--}}
            {{--        url: "{{route('admin.publication.table')}}",--}}
            {{--        success: function (data) {--}}

            {{--            $('.table-striped').dataTable({--}}

            {{--                "destroy":true,--}}
            {{--                dom: 'Bfrtip',--}}
            {{--                buttons: [--}}
            {{--                    'copy', 'csv', 'excel', 'pdf', 'print'--}}
            {{--                ],--}}
            {{--                data: data.publications,--}}

            {{--                columns: [--}}

            {{--                    {--}}
            {{--                        data: 'cover',--}}
            {{--                        'render': function (data, type, row) {--}}
            {{--                            return '<img src="../'+data+'" alt="cover" height="30" width="30" />';--}}
            {{--                        }--}}
            {{--                    },--}}
            {{--                    { data: 'title'},--}}
            {{--                    { data: 'genre'},--}}
            {{--                    { data: 'type'},--}}
            {{--                    { data: 'published_year'},--}}
            {{--                    { data: 'price'},--}}
            {{--                    { data: 'status'},--}}
            {{--                    {--}}
            {{--                        data: data,--}}
            {{--                        'render': function (data, type, row) {--}}
            {{--                            return "<a href='"+"publication/"+data.id +"' class='btn btn-success' style='background: #55ff52;' ><i class='fa fa-eye'></i></a>"+--}}
            {{--                                "<a class='btn btn-warning' data-id='"+ data.id +"' data-title='"+ data.title +"' data-cover='"+ data.cover +"'" +--}}
            {{--                                " data-genre='"+ data.genre +"' data-status='"+ data.status +"' data-summary='"+ data.summary +"' data-author='"+ data.author_id+"' data-isbn='"+ data.isbn +"'" +--}}
            {{--                                " data-published_year='"+ data.published_year +"' data-price='"+ data.price +"' data-type='"+ data.type +"' data-authorid='"+ data.author_id +"' data-publisherid='"+ data.publisher_id +"' data-toggle='modal' " +--}}
            {{--                                " data-target='#editPublicationModal'><i class='fa fa-edit'></i></a>"+--}}
            {{--                                "<a class='btn btn-danger' data-id='"+ data.id +"' data-title='"+ data.title +"' data-toggle='modal'  data-target='#deletePublicationModal'><i class='fa fa-trash'></i></a>";--}}
            {{--                        }--}}
            {{--                    },--}}
            {{--                ]--}}
            {{--            });--}}

            {{--        },--}}
            {{--        error: function (error) {--}}
            {{--            alert('Data not save');--}}
            {{--        }--}}
            {{--    });--}}
            {{--}--}}

            //     $file =  document.querySelector('#mypdf').addEventListener('change', function () {
            //     const reader = new FileReader();
            //     reader.addEventListener('load', ()=>{
            //         console.log(reader.result)
            //         sessionStorage.setItem('pdffile', reader.result);
            //     });
            //     reader.readAsDataURL(this.files[0]);
            // });
            //  Add Publication function
            $('#addPublication').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#addBtn');
                btn.html(`<i class='fa fa-spinner'></i> Saving...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });
                // var pdfile = sessionStorage.getItem('pdffile')

                //  For ,Publication Entry
                let formData = new FormData(this);
                // formData.append('mypdf', pdfile)

                // console.log(...formData);
                $.ajax({
                    type: 'POST',
                    url: "{{route('admin.publication.store')}}",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        // console.log(response.mypdf)
                        $('#addPublicationModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                $('#addPublication').trigger('reset');
                                location.reload();
                            });
                        btn.html('Save')
                    localStorage.clear();
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

            // PASS Publication DATA TO MODAL
            $('#editPublicationModal').on('show.bs.modal', function (event) {

                var button = $(event.relatedTarget);
                var id = button.data('id');
                var title = button.data('title');
                var genre = button.data('genre');
                var type = button.data('type');
                var author = button.data('authorid');
                var isbn = button.data('isbn');
                var summary = button.data('summary');
                var published_year = button.data('published_year');
                var price = button.data('price');
                var status = button.data('status');
                var publisherid = button.data('publisherid');

                var modal = $(this);

                modal.find('.modal-body #editPublicationId').val(id);
                modal.find('.modal-body #editPublicationTitle').val(title);
                modal.find('.modal-body #editPublicationSummary').val(summary);
                modal.find('.modal-body #editPublicationGenre').val(genre);
                modal.find('.modal-body #editPublicationAuthor').val(author);
                modal.find('.modal-body #editPublicationStatus').val(status);
                modal.find('.modal-body #editPublicationType').val(type);
                modal.find('.modal-body #editPublicationIsbn').val(isbn);
                modal.find('.modal-body #editPublicationYear').val(published_year);
                modal.find('.modal-body #editPublicationPrice').val(price);
                modal.find('.modal-body #editPublicationPublisherId').val(publisherid);

            });

            //  update Publication function
            $('#updatePublication').on('submit', function (e) {
                e.preventDefault();
                let btn = $('#editBtn');
                btn.html(`<i class='fa fa-spinner'></i> Updating...`)
                //AJAX Header for token
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                    }
                });

                //  For ,Publication Entry
                let formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '{{ route("admin.publication.update", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#editPublicationModal').modal('hide');
                        // If you want to get the response from the controller
                        swal(
                            {
                                title: response.message,
                                icon: response.icon,
                            }
                        )
                            .then((result) => {
                                $('#updatePublication').find("input[type=file]").val('');
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





            $('#deletePublicationModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                var id = button.data('id');
                var title = button.data('title');
                var modal = $(this);

                modal.find('.modal-footer #delPublicationId').val(id);
                modal.find('.modal-header #PublicationTitle').html('<h6> You are about to delete the publication '+title+ '</h6>');

            });

            //  delete Publication function
            $('#deletePublication').on('submit', function (e) {
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
                //  For ,Publication Entry
                let formData = new FormData(this);

                $.ajax({
                    method: 'POST',
                    url: '{{ route("admin.publication.destroy", "id") }}',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {

                        $('#deletePublicationModal').modal('hide');
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
