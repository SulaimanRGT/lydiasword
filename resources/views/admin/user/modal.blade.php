
<!--Add user Modal -->
<div class="modal fade" id="addUserModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add User Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="addUser" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="John Terry" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="control-label col-md-3 col-sm-3">Email<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <input type="email" name="email" placeholder="emial@example.com" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="control-label col-md-3 col-sm-3">Contact</label>
                                    <div class="col-md-9 col-sm-9">
                                        <input type="tel" name="contact" placeholder="xxx423343" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="control-label col-md-3 col-sm-3">Gender<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <select name="gender" class="form-control" id="editUserGender">
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Profile Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" accept=".png, .jpg, .jpeg"  name="image">
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

<!--update user Modal -->
<div class="modal fade" id="editUserModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Blog Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="updateUser" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                    @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="hidden" class="form-control" id="editUserId" value="" name="id" required>
                                        <input type="text" class="form-control" id="editUserName" value="" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="control-label col-md-3 col-sm-3">Email<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <input type="email" name="email" id="editUserEmail" value="" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="contact" class="control-label col-md-3 col-sm-3">Contact</label>
                                    <div class="col-md-9 col-sm-9">
                                        <input type="tel" name="contact" id="editUserContact" value="" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="control-label col-md-3 col-sm-3">Gender<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <select name="gender" class="form-control" id="editUserGender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Profile Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" accept=".png, .jpg, .jpeg"  name="image">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" id="editBtn"  name="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<div class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog"
     aria-labelledby="deleteBlogModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="float-left" id="userName">

                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h3 class="text-center">Are you sure to continue?</h3>
            <span class="text-center"></span>
            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <form id="deleteUser" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="id" id="delUserId" class="form-control" value="">
                    <button type="submit" name="submit"  id="delBtn" class="btn btn-danger">Yes</button>
                </form>
            </div>
        </div>
    </div>
</div>

