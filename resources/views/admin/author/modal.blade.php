
<!--Add Author Modal -->
<div class="modal fade" id="addAuthorModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Author Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="addAuthor" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Country<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" name="country" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Bio.<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="bio" class="form-control" cols="30" rows="10" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Image<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control"  name="img" required accept=".png, .jpg, .jpeg">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Date of birth<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="date" class="form-control"  name="dob" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Type<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select name="type" class="form-control" id="" required>
                                            <option value="">Select</option>
                                            <option value="option one">Option one</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" id="addBtn" class="btn btn-primary">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<!--Add Author Modal -->
<div class="modal fade" id="editAuthorModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Author Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="updateAuthor" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="hidden" class="form-control" id="editAuthorId" name="id" required>
                                        <input type="text" class="form-control" id="editAuthorName" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Country<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="editAuthorCountry" name="country" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control"  name="img">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Date of birth<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="date" class="form-control" id="editAuthorDob" name="dob" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Type<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select name="type" class="form-control" id="editAuthorType">
                                            <option value="">Select</option>
                                            <option value="option one">Option one</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Bio.<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="bio" class="form-control" id="editAuthorBio" cols="30" rows="10" required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" id="editBtn" class="btn btn-primary">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

{{--delete Author modal--}}
<div class="modal fade" id="deleteAuthorModal" tabindex="-1" role="dialog"
     aria-labelledby="deleteAuthorModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="float-left" id="authorName">

                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h3 class="text-center">Are you sure to continue?</h3>
            <span class="text-center"></span>
            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <form id="deleteAuthor" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="id" id="delAuthorId" class="form-control" value="">
                    <button type="submit" name="submit" id="delBtn" class="btn btn-danger">Yes</button>
                </form>
            </div>
        </div>
    </div>
</div>
