
<!--Add publisher Modal -->
<div class="modal fade" id="addPublisherModal" role="dialog" aria-labelledby="addPublisherModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addPublisherModalLabel">Add Publisher Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <form id="addPub" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Lydia's word next target" id="name" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Contact<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="number" class="form-control" id="contact" value="+(231)" placeholder="+(231) 770 428 099" name="contact" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">City<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="city" placeholder="Monrovia" name="city" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Country<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="country" placeholder="Liberia" name="country" required>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>



<!--edit publisher Modal -->
<div class="modal fade" id="editPublisherModal" role="dialog" aria-labelledby="addPublisherModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addPublisherModalLabel">Update Publisher Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <form id="updatePub" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="hidden" class="form-control" id="editPubId" name="id" required>
                                        <input type="text" class="form-control" placeholder="Lydia's Word" name="name" id="editPubName" value="" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Contact<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="contact" value="+(231)" placeholder="+(231) 770 428 099" name="contact" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">City<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Monrovia" name="city" id="editPubCity" value="" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Country<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Liberia" name="country" id="editPubCountry" value="" required>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" class="btn btn-primary">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<!-- Delete PUBLISHER MODAL -->
<div class="modal fade" id="deletePublisherModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body text-center">
                <img src="{{ asset('admin/build/images/warning.png') }}" alt="warning.png" style="width: 90px; height: 90px; margin-bottom: 40px">
                <h3>Are you sure?</h3>
                <h6>
                    Once deleted, you will not be able to recover this file!
                </h6>
            </div>
            <div class="modal-footer">
                <form id="deletePub" method="POST" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="hidden" name="id" id="deletePubId" class="form-control" value="">
                    <input type="submit" value="Okay 👍" class="btn btn-danger">&nbsp;
                    <button type="button" class="btn btn-default" data-dismiss="modal">close</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Delete PUBLISHER MODAL -->
