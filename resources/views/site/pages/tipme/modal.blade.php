<div class="modal fade" id="payWithTipMe" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Enter your TipMe Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12">

                        <form id="tipMePay" method="POST" autocomplete="false" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">CID/BID:<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="text" class="form-control" placeholder="CID0000001" name="cid" required>
                                        <input type="hidden" class="form-control" value="{{$publication->id}}" placeholder="" name="id" required>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" class="checkcustomer btn btn-primary">Verify Account</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<div class="modal fade" id="verifyPinTipme" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Enter your TipMe Pin</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div style="display: inline-block;padding: 0 25px;height: 50px;font-size: 16px;line-height: 50px;border-radius: 25px;background-color: #f1f1f1;">
                            <img style=" float: left; margin: 0 10px 0 -25px; height: 50px; width: 50px; border-radius: 50%;" src="" id="customerImg" alt="Person" width="96" height="96">
                            <h5 id="customerName"></h5>
                        </div>
                        <h5 id="mobile"></h5>
                        <form id="tipMeVerify" method="POST" autocomplete="false" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">Verify PIN:<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="password" class="form-control" name="pin" id="yourTipMePin" autocomplete="false" required>
                                        <input type="hidden" readonly class="form-control" value="{{$publication->price}}" id="itemPrice" name="price" autocomplete="false" required>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" class="verifypin btn btn-primary">Verify Pin</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="verifyOtpTipme" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Verify OTP Pin</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="x_content">
                <br />
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div style="display: inline-block;padding: 0 25px;height: 50px;font-size: 16px;line-height: 50px;border-radius: 25px;background-color: #f1f1f1;">
                            <img style=" float: left; margin: 0 10px 0 -25px; height: 50px; width: 50px; border-radius: 50%;" src="" id="cImg" alt="Person" width="96" height="96">
                            <h5 id="cName"></h5>
                        </div>
                        <h5 id="cmobile"></h5>
                        <form id="tipMeOtpVerify" method="POST" autocomplete="false" enctype="multipart/form-data" class="form-horizontal form-label-left">
                            <div class="modal-body">
                                @csrf
                                <div class="form-group row ">
                                    <label class="control-label col-md-3 col-sm-3 ">OTP Code:<span class="required">*</span></label>
                                    <div class="col-md-9 col-sm-9 ">
                                        <input type="password" class="form-control" name="pin" id="OtpCode" autocomplete="false" required>
                                        <input type="hidden" class="form-control" value="{{$publication->price}}" id="ItemPrice" name="price" autocomplete="false" required>
                                        <input type="hidden" class="form-control" value="{{$publication->id}}" id="itemId" name="publication_id" autocomplete="false" required>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="submit" class="verifyotp btn btn-primary">Verify Account</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

