
<!--Add department Modal -->
<div class="modal fade" id="addPublicationModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Publication Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="addPublication" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Title<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Know your root" name="title" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Genre<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" name="genre">
                                            <option value="">Select</option>
                                            <option value="Poetry">Poetry</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Play">Play</option>
                                            <option value="Essay">Essay</option>
                                            <option value="Short Story">Short Story</option>
                                            <option value="Novel">Novel</option>
                                            <option value="Action and Adventure">Action and Adventure</option>
                                            <option value="Alternate History">Alternate History</option>
                                            <option value="Anthology">Anthology</option>
                                            <option value="Chick Lit">Chick Lit</option>
                                            <option value="Children's">Children's</option>
                                            <option value="Art/architecture">Art/architecture</option>
                                            <option value="Autobiography">Autobiography</option>
                                            <option value="Biography">Biography</option>
                                            <option value="Business/economics">Business/economics</option>
                                            <option value="Crafts/hobbies">Crafts/hobbies</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Fairytale">Fairytale</option>
                                            <option value="Journal">Journal</option>
                                            <option value="Poetry">Poetry</option>
                                            <option value="Political thriller">Political thriller</option>
                                            <option value="Romance">Romance</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Type<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" name="type">
                                            <option value="">Select</option>
                                            <option value="Book">Book</option>
                                            <option value="Magazine">Magazine</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">ISBN</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="" name="isbn">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Cover image<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control"  name="cover" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Price<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="number" class="form-control"  name="price" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Published Year<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="date" class="form-control"  name="published_year" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">File<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" id="mypdf"  name="file" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Author<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" name="author_id">
                                            <option value="">Select</option>
                                            @foreach($authors as $author)
                                                <option value="{{$author->id}}">{{$author->name}} <img src="{{$author->img}}" width="50" height="50" alt=""> </option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Publisher<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" name="publisher_id">
                                            <option value="">Select</option>
                                            <option value="1">Draft</option>
                                            <option value="2">Published</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Book Summary</label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="summary" class="form-control" cols="30" rows="10"></textarea>
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

<!--Add department Modal -->
<div class="modal fade" id="editPublicationModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Publication Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="updatePublication" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Title<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="editPublicationId" placeholder="" name="id" required>
                                        <input type="text" class="form-control" id="editPublicationTitle" placeholder="Know your root" name="title" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Genre<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" id="editPublicationGenre" name="genre">
                                            <option value="">Select</option>
                                            <option value="Poetry">Poetry</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Play">Play</option>
                                            <option value="Essay">Essay</option>
                                            <option value="Short Story">Short Story</option>
                                            <option value="Novel">Novel</option>
                                            <option value="Action and Adventure">Action and Adventure</option>
                                            <option value="Alternate History">Alternate History</option>
                                            <option value="Anthology">Anthology</option>
                                            <option value="Chick Lit">Chick Lit</option>
                                            <option value="Children's">Children's</option>
                                            <option value="Art/architecture">Art/architecture</option>
                                            <option value="Autobiography">Autobiography</option>
                                            <option value="Biography">Biography</option>
                                            <option value="Business/economics">Business/economics</option>
                                            <option value="Crafts/hobbies">Crafts/hobbies</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Fairytale">Fairytale</option>
                                            <option value="Journal">Journal</option>
                                            <option value="Poetry">Poetry</option>
                                            <option value="Romance">Romance</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Type<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" id="editPublicationType" name="type">
                                            <option value="">Select</option>
                                            <option value="Book">Book</option>
                                            <option value="Magazine">Magazine</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">ISBN</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="editPublicationIsbn" placeholder="" name="isbn" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Cover image</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control"  name="cover" accept=".png, .jpg, .jpeg" required >
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Price<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="number" step="any" class="form-control" id="editPublicationPrice"  name="price" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Published Year<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="date" class="form-control" id="editPublicationYear"  name="published_year" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">File</label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="file" class="form-control" id=""  name="file" accept=".pdf">
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Author<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" id="editPublicationAuthor" name="author_id">
                                            <option value="">Select</option>
                                            @foreach($authors as $author)
                                                <option value="{{$author->id}}">{{$author->name}} <img src="{{$author->img}}" width="50" height="50" alt=""></option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Publisher<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" id="editPublicationPublisherId" name="publisher_id">
                                            <option value="">Select</option>
                                            <option value="1">Draft</option>
                                            <option value="2">Published</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Status<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select class="form-control" id="editPublicationStatus" name="status">
                                            <option value="">Select</option>
                                            <option value="0">Draft</option>
                                            <option value="1">Published</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Book Summary</label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="summary" class="form-control" cols="30" rows="10" id="editPublicationSummary"></textarea>
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


<div class="modal fade" id="deletePublicationModal" tabindex="-1" role="dialog"
     aria-labelledby="deletePublicationModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="float-left" id="PublicationTitle">

                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h3 class="text-center">Are you sure to continue?</h3>
            <span class="text-center"></span>
            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <form id="deletePublication" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="id" id="delPublicationId" class="form-control" value="">
                    <button type="submit" name="submit" id="delBtn" class="btn btn-danger">Yes</button>
                </form>
            </div>
        </div>
    </div>
</div>
