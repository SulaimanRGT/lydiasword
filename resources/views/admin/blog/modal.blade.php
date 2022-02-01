
<!--Add department Modal -->
<div class="modal fade" id="addBlogModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                        <form id="addBlog" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Title<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Lydia's word next target" name="title" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Content</label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="content" class="form-control" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">News Image<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control"  name="image" accept=".png, .jpg, .jpeg" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Author<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="John Brown" name="author" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Author Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" name="author_image" accept=".png, .jpg, .jpeg" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Status<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" name="status">
                                            <option value="">Select</option>
                                            <option value="Draft">Draft</option>
                                            <option value="Published">Published</option>
                                        </select>
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

<!--Add department Modal -->
<div class="modal fade" id="editBlogModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                        <form id="updateBlog" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Title<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="hidden" class="form-control" id="editBlogId" name="id" required>
                                        <input type="text" class="form-control" id="editBlogTitle" name="title" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Content<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="content" id="editBlogContent" class="form-control" cols="30" rows="10" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">News Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control"  id="editBlogImage" name="image">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Author<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="editBlogAuthor" placeholder="John Brown" name="author" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Author Image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" id="editBlogAuthorImage" name="author_image">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Status<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" name="status" id="editBlogStatus" >
                                            <option value="">Select</option>
                                            <option value="Draft">Draft</option>
                                            <option value="Published">Published</option>
                                        </select>
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


<div class="modal fade" id="deleteBlogModal" tabindex="-1" role="dialog"
     aria-labelledby="deleteBlogModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="float-left" id="blogName">

                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h3 class="text-center">Are you sure to continue?</h3>
            <span class="text-center"></span>
            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <form id="deleteBlog" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="id" id="delBlogId" class="form-control" value="">
                    <button type="submit" name="submit" class="btn btn-danger">Yes</button>
                </form>
            </div>
        </div>
    </div>
</div>
