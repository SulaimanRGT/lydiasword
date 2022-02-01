
<!--Add team Modal -->
<div class="modal fade" id="addTeamModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Team Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="addTeam" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Lydia's word" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">position<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Executive officer" name="position" required>
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
                                        <input type="file" class="form-control"  name="image" accept=".png, .jpg, .jpeg" required>
                                    </div>
                                </div>
                                <hr>
                                <h5>Links:</h5>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Facebook</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" placeholder="https://www.facbook.com/username" name="facebook">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Instagram</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" name="instagram" >
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Linkedin</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" name="linkedin" >
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Twitter</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" name="twitter" >
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

<!--Add team Modal -->
<div class="modal fade" id="editTeamModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Team Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="updateTeam" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="hidden" class="form-control" id="editTeamId" placeholder="Lydia's word" name="id" required>
                                        <input type="text" class="form-control" id="editTeamName" placeholder="Lydia's word" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">position<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="editTeamPosit" placeholder="Executive officer" name="position" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Bio.<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="bio" class="form-control" id="editTeamBio" cols="30" rows="10" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" accept=".png, .jpg, .jpeg" name="image">
                                    </div>
                                </div>
                                <hr>
                                <h5>Links:</h5>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Facebook</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" id="editTeamFb" placeholder="https://www.facbook.com/username" name="facebook">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Instagram</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" id="editTeamInsta" name="instagram" >
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Linkedin</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" id="editTeamLink" name="linkedin" >
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Twitter</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="url" class="form-control" id="editTeamTwt" name="twitter" >
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

{{--delete team modal--}}
<div class="modal fade" id="deleteTeamModal" tabindex="-1" role="dialog"
     aria-labelledby="deleteTeamModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="float-left" id="teamName">

                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h3 class="text-center">Are you sure to continue?</h3>
            <span class="text-center"></span>
            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <form id="deleteTeam" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="id" id="delTeamId" class="form-control" value="">
                    <button type="submit" name="submit" class="btn btn-danger">Yes</button>
                </form>
            </div>
        </div>
    </div>
</div>
