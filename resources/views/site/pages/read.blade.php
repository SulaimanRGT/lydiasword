@extends('site.layout.app')
@section('content')
    <style>
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    </style>
    <div class="container-fluid">

        <div class="row">

                <div class="navigation-controls" style="background-color: #eee; padding: 10px; position: fixed; width: 100%">
                    <button type="button" style="background: #37c6f5; color: white;" class="btn" onclick="location.href='{{route('my.reading', Auth::user()->id)}}'">Back</button>
                    <button type="button" class="btn" id="prev"><i class="fa fa-arrow-circle-left"></i></button>
                    <button type="button" class="btn" id="next"><i class="fa fa-arrow-circle-right"></i></button>
                    <button type="button" class="btn" id="zoomIn"><i class="fa fa-plus"></i></button>
                    <button type="button" class="btn" id="zoomOut"><i class="fa fa-minus"></i></button>
                    <span style="float: right">Page: <!--<span id="page_num"></span>--> <input type="number" id="page_num" style="width: 15%; display: inline-block; padding-right: 10px; padding-left: 13px;" value=""> / <span id="page_count"></span></span>
                </div>

                <div class="canvas_container" style="margin-right: auto; margin-top:4%; margin-left: auto;width: 100%; height: 100%; overflow: auto; background: #333; text-align: center; border: 3px solid black;">
                    <canvas id="pdf_canvas"></canvas>
                </div>

                </div>
            </div>


    </div>
@endsection
@section('script')
    <script>

        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        var pdfDoc = null,
            pageNum = 1,
            pageRendering = false,
            pageNumPending = null,
            scale = 2,
            canvas = document.getElementById('pdf_canvas')
            ctx = canvas.getContext('2d')

            function renderPage(num){
                pageRendering = true
                pdfDoc.getPage(num).then((page) =>{
                    var viewport = page.getViewport({scale:scale});
                    canvas.height = viewport.height
                    canvas.width = viewport.width

                    var renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    }

                    var renderTask = page.render(renderContext)
                    renderTask.promise.then(()=>{
                        pageRendering = false;
                        if(pageNumPending !== null){
                            renderPage(pageNumPending)
                            pageNumPending = null
                        }
                    })
                })
                document.getElementById('page_num').value = num;
            }

            function queueRenderPage(num){
                if(pageRendering){
                    pageNumPending = num
                }else{
                    renderPage(num)
                    topFunction()
                }
            }

            function onPrevPage(){

                if(pageNum <= 1){
                    return
                }

                pageNum--;

                queueRenderPage(pageNum)
            }
            document.getElementById('prev').addEventListener('click', onPrevPage);

            function onNextPage(){
                if(pageNum >= pdfDoc.numPages){

                    return
                }
                pageNum++;
                queueRenderPage(pageNum)
            }
            document.getElementById('next').addEventListener('click', onNextPage);

            function zoomOut(){
                scale -= 0.1
                renderPage(pageNum)
            }
            document.getElementById('zoomOut').addEventListener('click', zoomOut);

            function zoomIn(){
                scale += 0.1
                renderPage(pageNum)
            }
            document.getElementById('zoomIn').addEventListener('click', zoomIn);

            function setpage(e){
                if(e.keyCode === 13){
                    pageNum = document.getElementById("page_num").valueAsNumber;
                    if( pageNum >= 1 && pageNum <= pdfDoc.numPages ){
                        queueRenderPage(pageNum)
                        document.getElementById("page_num").value = pageNum;
                    }
                }
            }
            document.getElementById('page_num').addEventListener('keyup', setpage);

        pdfjsLib.getDocument('{{asset($publication->file)}}').promise.then((doc) => {
                pdfDoc = doc
                document.getElementById('page_count').textContent = pdfDoc.numPages;
                renderPage(pageNum)
                // console.log(doc);
            })
    </script>
@endsection
