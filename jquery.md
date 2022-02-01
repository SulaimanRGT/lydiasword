/*
Delex by TEMPLATE STOCK
templatestock.co @templatestock
Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/



/* ------------------------------------------------------------------------------
This is jquery module for main app
------------------------------------------------------------------------------ */
//var $ = jQuery.noConflict(); //Relinquish jQuery's control of the $ variable.

/* Global constants */

/*global jQuery */
jQuery(function ($) {
'use strict';

    /**
     * Contact Form Application
     */
    var ContactFormApp = {
        $contactForm: $("#ajax-form"),
        $contactFormBtn: $("#send"),
        $contactFormName: $("#name2"),
        $contactFormEmail: $("#email2"),
        $contactFormMessage: $("#message2"),
        $confirmMessage: $("#ajaxsuccess"),
        $errorMessages: $(".error"),
        $errorName: $("#err-name"),
        $errorEmail: $("#err-emailvld"),
        $errorMessage: $("#err-message"),
        $errorForm: $("#err-form"),
        $errorTimeout: $("#err-timedout"),
        $errorState: $("#err-state"),

        //Validate Contact Us Data
        validate: function () {
            var error = false; // we will set this true if the form isn't valid

            var name = this.$contactFormName.val(); // get the value of the input field
            if(name == "" || name == " " || name == "Name") {
                this.$errorName.show(500);
                this.$errorName.delay(4000);
                this.$errorName.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                }); 
                error = true; // change the error state to true
            }

            var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
            var email = this.$contactFormEmail.val().toLowerCase(); // get the value of the input field

            if (email == "" || email == " " || email == "E-mail") { // check if the field is empty
                this.$contactFormEmail.fadeIn('slow'); // error - empty
                error = true;
            }
            else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
                this.$errorEmail.show(500);
                this.$errorEmail.delay(4000);
                this.$errorEmail.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                });         
                error = true;
            }

            var message = this.$contactFormMessage.val(); // get the value of the input field
            
            if(message == "" || message == " " || message == "Message") {              
                this.$errorMessage.show(500);
                this.$errorMessage.delay(4000);
                this.$errorMessage.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                });            
                error = true; // change the error state to true
            }

            if(error == true) {
                this.$errorForm.show(500);
                this.$errorForm.delay(4000);
                this.$errorForm.animate({
                    height: 'toggle'  
                }, 500, function() {
                    // Animation complete.
                }); 
            }

            return error;
        },
        //contact form submit handler
        contactFormSubmit: function (obj) {
            this.$errorMessages.fadeOut('slow'); // reset the error messages (hides them)

            if(this.validate() == false) {

                var data_string = $('#ajax-form').serialize(); // Collect data from form

                var $this = this;
                $.ajax({
                    type: "POST",
                    // url: "{{ route('contactMessages.store') }}",
                    url: $this.$contactForm.attr('action'),
                    data: data_string,
                    timeout: 6000,
                    error: function(request,error) {
                        if (error == "timeout") {
                            $this.$errorTimeout.slideDown('slow');
                        }
                        else {
                            $this.$errorState.slideDown('slow');
                            $this.$errorState.html('An error occurred: ' + error + '');
                        }
                    },
                    success: function() {
                        $this.$confirmMessage.show(500);
                        $this.$confirmMessage.delay(4000);
                        $this.$confirmMessage.animate({
                            height: 'toggle'  
                            }, 500, function() {
                        });    
                        
                        $this.$contactFormName.val('');
                        $this.$contactFormEmail.val('');
                        $this.$contactFormMessage.val('');
                    }
                });
            }
            return false;
        },
        bindEvents: function () {
            //binding submit event
            this.$contactFormBtn.on('click', this.contactFormSubmit.bind(this));
        },
        init: function () {
            //initializing the contact form
            console.log('Contact form is initialized');
            this.bindEvents();
            return this;
        }
    };

    /**
        Main application module
    */
    var App = {
        $options: {},
        $backToTop: $(".back-to-top"),
        $nav: $("nav"),
        $counterProject: $("#counter-pro"),
        $counterClient: $('#counter-client'),
        $counterWork: $('#counter-works'),
        $counterAward: $('#counter-award'),
        $loader: $(".loader"),
        $animationload: $(".animationload"),
        $navbarLink: $('.navbar-nav a'),
        $testiSlider: $("#testi-carousel"),
        $homeSlider: $("#main-home-carousel"),

        bindEvents: function () {
            //binding events
            $(window).on('scroll', this.scroll.bind(this));
            $(document).on('ready', this.docReady.bind(this));
        },
        //window scroll event
        scroll: function (event) {
            if ($(window).scrollTop() > 100) {
                this.$backToTop.fadeIn();
            } else {
                this.$backToTop.fadeOut();
            }

            if ($(window).scrollTop() > 80) {
                this.$nav.addClass('small');
            } else {
                this.$nav.removeClass('small'); 
            }
        },
        //document ready event
        docReady: function () {
            //contat form
            ContactFormApp.init();

            this.$counterProject.counterUp({
                delay: 50,
                time: 10000
            });

            this.$counterClient.counterUp({
                delay: 50,
                time: 5000
            });

            this.$counterWork.counterUp({
                delay: 50,
                time: 7000
            });

            this.$counterAward.counterUp({
                delay: 50,
                time: 12000
            });


            this.$loader.delay(300).fadeOut();
            this.$animationload.delay(600).fadeOut("slow");

            this.$backToTop.click(function(){
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            }); 

            this.$navbarLink.click(function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 50
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });

            $(window).stellar({
                horizontalScrolling: false,
                responsive: true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

            if(this.$testiSlider.length > 0) {
                this.$testiSlider.owlCarousel({
                    // Most important owl features
                    items: 1,
                    itemsCustom: false,
                    itemsDesktop: [1199, 1],
                    itemsDesktopSmall: [980, 1],
                    itemsTablet: [768, 1],
                    itemsTabletSmall: false,
                    itemsMobile: [479, 1],
                    singleItem: false,
                    startDragging: true,
                    autoPlay: true
                });
            }

            if(this.$homeSlider.length > 0) {
                this.$homeSlider.owlCarousel({
                    // Most important owl features
                    paginationSpeed: 1000,
                    pagination: false,
                    navigation: false,
                    singleItem: true,
                    slideSpeed: 600,
                    autoPlay: 5000
                });
            }

        },
        init: function (_options) {
            $.extend(this.$options, _options);
            this.bindEvents();
        }
    };

    //Initializing the app
    App.init({});

});





<form role="form" name="ajax-form" id="ajax-form" action="{{ route('contactMessages.store') }}" method="post" class="form-main">
                    {{ csrf_field() }}
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="form-group col-xs-6">
                                <label for="name2">Name</label>
                                <input class="form-control" id="name2" name="name" onblur="if(this.value == '') this.value='Name'" onfocus="if(this.value == 'Name') this.value=''" type="text" value="Name">
                                <div class="error" id="err-name" style="display: none;">Please enter name</div>
                            </div>
                            <div class="form-group col-xs-6">
                                <label for="email2">Email</label>
                                <input class="form-control" id="email2" name="mail" type="text" onfocus="if(this.value == 'E-mail') this.value='';" onblur="if(this.value == '') this.value='E-mail';" value="E-mail">
                                <div class="error" id="err-emailvld" style="display: none;">E-mail is not a valid format</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <label for="message2">Message</label>
                                <textarea class="form-control" id="message2" name="message" onblur="if(this.value == '') this.value='Message'" onfocus="if(this.value == 'Message') this.value=''">Message</textarea>
                                <div class="error" id="err-message" style="display: none;">Please enter message</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <!--<p class="text-center con_sub_text">Stet clita ea et gubergren.</p>-->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 text-center">
                                <div id="ajaxsuccess">E-mail was successfully sent.</div>
                                <div class="error" id="err-form" style="display: none;">There was a problem validating the form please check!</div>
                                <div class="error" id="err-timedout">The connection to the server timed out!</div>
                                <div class="error" id="err-state"></div>
                                <button type="submit" class="btn btn-custom" name="submit" id="send">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>





