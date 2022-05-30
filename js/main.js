(function ($, window, document,) {
    "use strict";
    var $win = $(window),
        $doc = $(document),
        $body = $('body');



    /*
    *
    * ==========================================
    *   Mobile menu
    * ==========================================
    *
    */
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    /*
    *
    * ==========================================
    *   Menu Sticky
    * ==========================================
    *
    */

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('#header').addClass('navbar-fixed');
        }
        else {
            $('#header').removeClass('navbar-fixed');
        }
    });


    $body.on('click', '.navbar-toggler', function (e) {
        e.preventDefault();
        var dd = $(this).attr('aria-expanded');
        if (dd != 'false') {
            $(this).find('.fa').addClass('fa-bars');
            $(this).find('.fa').removeClass('fas fa-times');
            $(this).attr('aria-expanded', 'false', 'true');
            $('.navbar-collapse').removeClass('show').slideUp();
        } else {
            $(this).find('.fa').removeClass('fa-bars');
            $(this).find('.fa').addClass('fas fa-times');
            $(this).attr('aria-expanded', 'true', 'true');
            $('.navbar-collapse').addClass('show').slideDown();
        }
    });


    /*
    *
    * ==========================================
    *  testimonial-slider
    * ==========================================
    *
    */
    var testimonial_slider = $('.testimonial-slider');
    if (testimonial_slider.length > 0) {
        testimonial_slider.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='buttons' class='slick-prev'><img src='img/shape/left-arrow.png' alt='arrow'> <img src='img/shape/left-arrow-hover.png' alt='arrow'></button>",
            nextArrow: "<button type='buttons' class='slick-next '> <img src='img/shape/right-arrow.png' alt='arrow'> <img src='img/shape/right-arrow-hover.png' alt='arrow'></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0',
                    }
                }

            ]
        });
    }

    var testimonial_panel_slider = $('.testimonial-panel-slider');
    if (testimonial_panel_slider.length > 0) {
        testimonial_panel_slider.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: "<button type='buttons' class='slick-prev'><img src='img/shape/left-arrow.png' alt='arrow'> <img src='img/shape/left-arrow-hover.png' alt='arrow'></button>",
            nextArrow: "<button type='buttons' class='slick-next '> <img src='img/shape/right-arrow.png' alt='arrow'> <img src='img/shape/right-arrow-hover.png' alt='arrow'></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0',
                    }
                }

            ]
        });
    }

    /*
    *
    * ==========================================
    *  Related Blog Slider
    * ==========================================
    *
    */
    var related_blog_slider = $('.related-blog__slider');
    if (related_blog_slider.length > 0) {
        related_blog_slider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='buttons' class='slick-prev'><img src='img/shape/blog-left-arrow.png' alt='arrow'> <img src='img/shape/blog-left-arrow-hover.png' alt='arrow'></button>",
            nextArrow: "<button type='buttons' class='slick-next '> <img src='img/shape/blog-right-arrow.png' alt='arrow'> <img src='img/shape/blog-right-arrow-hover.png' alt='arrow'></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0',
                    }
                }

            ]
        });
    }

    /*
    *
    * ==========================================
    *  extent-content extent
    * ==========================================
    *
    */

    var story_item =  $('.story_item');

    if (story_item.length > 0){
        $('.extent-content').hide();
        $body.on('click', '.read-more-btn', function (e) {
            e.preventDefault();
            $(this).parents('.story_item').find('.extent-content').addClass('d-inline');
            $(this).parents('.story_item').find('.extension').remove();
            $(this).addClass('d-none');
        });
    }

    /*
    *
    * ==========================================
    *  Smmoth Scroll
    * ==========================================
    *
    */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });

    $win.load(function(){
        set_btn_height();
    }).resize(function(){
        set_btn_height();
    });

    function set_btn_height() {
        $('.sketch--btn, .sketch--btn--black').each(function(){
            var $this = $(this);
            $this.css('height', 'auto');
            setTimeout(function () {
                $this.height($this.height());
            }, 500);
        })
    }


})(jQuery, window, document);