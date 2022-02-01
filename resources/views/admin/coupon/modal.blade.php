
<!--Add Coupon Modal -->
<div class="modal fade" id="addCouponModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Coupon Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">
                        <form id="addCoupon" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Coupon name Ex: New year coupon"  name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Code<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="Coupon name Ex: Ny2021" name="code" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Value<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" step="any" class="form-control" placeholder="Coupon value Ex: -15% " name="value" required>
                                        <span>Plese enter a negative value Ex: -10%</span>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Type<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select name="type" class="form-control">
                                            <option value="">Select</option>
                                            <option value="Discount">Discount</option>
                                            <option value="Promotion">Promotion</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Description<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="description" class="form-control" cols="30" rows="10" required></textarea>
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

<!--Add Coupon Modal -->
<div class="modal fade" id="editCouponModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Coupon Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="updateCoupon" method="POST" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                @method('PATCH')
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Name<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="hidden" class="form-control" id="editCouponId" name="id" required>
                                        <input type="text" class="form-control" id="editCouponName" name="name" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Code<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" id="editCouponCode" name="code" required>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Value<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" step="any" class="form-control" id="editCouponValue" name="value" required>
                                        <span>Plese enter a negative value in percentage. Ex: -10%</span>
                                    </div>
                                </div>
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Type<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <select name="type" class="form-control" id="editCouponType">
                                            <option value="">Select</option>
                                            <option value="Discount">Discount</option>
                                            <option value="Promotion">Promotion</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="content" class="control-label col-md-3 col-sm-3">Description<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9">
                                        <textarea name="description" class="form-control" id="editCouponDesc" cols="30" rows="10" required></textarea>
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

{{--delete Coupon modal--}}
<div class="modal fade" id="deleteCouponModal" tabindex="-1" role="dialog"
     aria-labelledby="deleteCouponModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="float-left" id="couponName">

                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <h3 class="text-center">Are you sure to continue?</h3>
            <span class="text-center"></span>
            <div class="modal-footer bg-whitesmoke br">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <form id="deleteCoupon" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="id" id="delCouponId" class="form-control" value="">
                    <button type="submit" name="submit" id="delBtn" class="btn btn-danger">Yes</button>
                </form>
            </div>
        </div>
    </div>
</div>
