;(function ($) {
    "use strict";
    /*---------------------------------------------------
      * Initialize all widget js in elementor init hook
      ---------------------------------------------------*/
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-header-area-one-widget.default', function ($scope) {
            activeHeaderSliderOne($scope.find('.header-slider-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-header-area-two-widget.default', function ($scope) {
            activeHeaderSliderOne($scope.find('.header-slider-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-header-area-three-widget.default', function ($scope) {
            activeHeaderSliderOne($scope.find('.header-slider-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-header-area-four-widget.default', function ($scope) {
            activeHeaderSliderOne($scope.find('.header-slider-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-testimonial-one-widget.default', function ($scope) {
            activeTestimonialSliderOne($scope.find('.testimonial-carousel-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-study-slider-one-widget.default', function ($scope) {
            activeCaseStudySlider($scope.find('.case-study-grid-carousel-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-case-study-slider-two-widget.default', function ($scope) {
            activeCaseStudySlider($scope.find('.case-study-grid-carousel-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-case-study-slider-three-widget.default', function ($scope) {
            activeCaseStudySliderThree($scope.find('.case-study-grid-carousel-two'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-attorney-one-widget.default', function ($scope) {
            activeAttorneySliderOne($scope.find('.our-attorney-carousel-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-blog-one-widget.default', function ($scope) {
            activeBlogGridSliderOne($scope.find('.blog-carousel-one'));
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-case-study-one-widget.default', function ($scope) {
            activeIsotopeFilter($scope);
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/attorg-case-study-two-widget.default', function ($scope) {
            activeIsotopeFilter($scope);
        });
    });

    /*----------------------------
       * case study slider three
       * --------------------------*/
    function activeCaseStudySliderThree(el) {
        if (el.children('div').length < 2) {
            return;
        }
        el.addClass('owl-carousel');

        let $selector = $('#' + el.attr('id'));
        let loop = el.data('loop');
        let items = el.data('items');
        let autoplay = el.data('autoplay');
        let margin = el.data('margin');
        let dots = false;
        let nav = el.data('nav');
        let navLeftArrow = el.data('navleft');
        let navRightArrow = el.data('navright');
        let autoplaytimeout = el.data('autoplaytimeout');
        let responsive = {
            0: {
                items: 1
            },
            460: {
                items: 1
            },
            599: {
                items: 2
            },
            768: {
                items: 2
            },
            960: {
                items: items
            },
            1200: {
                items: items
            },
            1920: {
                items: items
            }
        }

        var sliderSettings = {
            "items": items,
            "loop": loop,
            "dots": dots,
            "margin": margin,
            "autoplay": autoplay,
            "autoPlayTimeout": autoplaytimeout,
            "nav": nav,
            "navtext": ['<i class="' + navLeftArrow + '"></i>', '<i class="' + navRightArrow + '"></i>'],

        };

        wowCarouselInit($selector, sliderSettings, responsive,);

    }

    /*-------------------------------------------
          Case Study Slider
  --------------------------------------------*/
    function activeCaseStudySlider(el) {
        if (el.children('div').length < 2) {
            return;
        }
        el.addClass('owl-carousel');

        let $selector = $('#' + el.attr('id'));
        let loop = el.data('loop');
        let items = el.data('items');
        let autoplay = el.data('autoplay');
        let margin = el.data('margin');
        let dots = false;
        let nav = el.data('nav');
        let navLeftArrow = el.data('navleft');
        let center = el.data('center');
        let navRightArrow = el.data('navright');
        let autoplaytimeout = el.data('autoplaytimeout');
        let responsive = {
            0: {
                items: 1,
                center: false,
                stagePadding: 0
            },
            460: {
                items: 1,
                center: false,
                stagePadding: 0
            },
            599: {
                items: 2,
                center: false,
                stagePadding: 0
            },
            768: {
                items: 2,
                center: false,
                stagePadding: 0
            },
            960: {
                items: items
            },
            1200: {
                items: items
            },
            1920: {
                items: items
            }
        };

        var sliderSettings = {
            "items": items,
            "loop": loop,
            "dots": dots,
            "margin": margin,
            "autoplay": autoplay,
            "center": center,
            "autoPlayTimeout": autoplaytimeout,
            "nav": nav,
            "navtext": ['<i class="' + navLeftArrow + '"></i>', '<i class="' + navRightArrow + '"></i>'],

        };

        wowCarouselInitWidthStagePadding($selector, sliderSettings, responsive);

    }
    /*-------------------------------------------
                   Portfolio Filter
       --------------------------------------------*/
    function activeIsotopeFilter($scope) {
        var el = $scope.find('.attorg-isotope-init')
        var $selector = '#' + el.attr('id');
        var HrFilterizer = $($selector).filterizr({
            setupControls: false,
            gridItemsSelector: '.filtr-item',
            animationDuration: 0.2, // in seconds
            easing: 'ease-out',
            filter: 'all', // Initial filter
            filterOutCss: { // Filtering out animation
                opacity: 0,
                transform: 'scale(0.5)'
            },
            filterInCss: { // Filtering in animation
                opacity: 1,
                transform: 'scale(1)'
            },
            layout: 'sameSize',
            spinner: { // Configuration for built-in spinner
                enabled: true,
                fillColor: '#f2f2f2',
                styles: {
                    height: '75px',
                    margin: '0 auto',
                    width: '75px',
                    'z-index': 2,
                },
            },
        });
        $(document).on('click', '.gallery_filter_nav_item', function () {
            var filterValue = $(this).attr('data-filter');
            HrFilterizer.filterizr('filter', filterValue)
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }

    /*-------------------------------------------
            Post Filter
    --------------------------------------------*/
    // function activeIsotopeFilter() {
    //
    //     var postFilter = $('.attorg-isotope-init');
    //     if (postFilter.length < 1) {
    //         return;
    //     }
    //
    //     $.each(postFilter, function (index, value) {
    //         var el = $(this);
    //         var parentClass = $(this).parent().attr('class');
    //         var $selector = $('#' + el.attr('id'));
    //
    //         $($selector).imagesLoaded(function () {
    //             var festivarMasonry = $($selector).isotope({
    //                 itemSelector: '.attorg-masonry-item',
    //                 percentPosition: true,
    //                 masonry: {
    //                     columnWidth: 0,
    //                     gutter: 0
    //                 }
    //             });
    //             $(document).on('click', '.' + parentClass + ' .attorg-isotope-nav ul li', function () {
    //                 var filterValue = $(this).attr('data-filter');
    //                 festivarMasonry.isotope({
    //                     filter: filterValue
    //                 });
    //             });
    //         });
    //     });
    //
    // }
    //
    // /*----------------------------
    //     recent work menu active
    // ----------------------------*/
    // $(document).on('click', '.attorg-isotope-nav ul li', function () {
    //     $(this).siblings().removeClass('active');
    //     $(this).addClass('active');
    // });

    /*----------------------------
    * Blog Post Grid Slider
    * --------------------------*/
    function activeBlogGridSliderOne(el) {
        if (el.children('div').length < 2) {
            return;
        }
        el.addClass('owl-carousel');
        let $selector = $('#' + el.attr('id'));
        let loop = el.data('loop');
        let items = el.data('items');
        let autoplay = el.data('autoplay');
        let margin = el.data('margin');
        let dots = false;
        let nav = el.data('nav');
        let navLeftArrow = el.data('navleft');
        let navRightArrow = el.data('navright');
        let autoplaytimeout = el.data('autoplaytimeout');
        let responsive = {
            0: {
                items: 1
            },
            460: {
                items: 1
            },
            599: {
                items: 2
            },
            768: {
                items: 2
            },
            960: {
                items: items
            },
            1200: {
                items: items
            },
            1920: {
                items: items
            }
        }

        var sliderSettings = {
            "items": items,
            "loop": loop,
            "dots": dots,
            "margin": margin,
            "autoplay": autoplay,
            "autoPlayTimeout": autoplaytimeout,
            "nav": nav,
            "navtext": ['<i class="' + navLeftArrow + '"></i>', '<i class="' + navRightArrow + '"></i>'],

        };

        wowCarouselInit($selector, sliderSettings, responsive,);

    }

    /*----------------------------
    * Attorney Slider
    * --------------------------*/
    function activeAttorneySliderOne(el) {
        if (el.children('div').length < 2) {
            return;
        }
        el.addClass('owl-carousel');

        let $selector = $('#' + el.attr('id'));
        let loop = el.data('loop');
        let items = el.data('items');
        let autoplay = el.data('autoplay');
        let margin = el.data('margin');
        let dots = false;
        let nav = el.data('nav');
        let navLeftArrow = el.data('navleft');
        let navRightArrow = el.data('navright');
        let autoplaytimeout = el.data('autoplaytimeout');
        let responsive = {
            0: {
                items: 1
            },
            460: {
                items: 1
            },
            599: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: items
            },
            1200: {
                items: items
            },
            1920: {
                items: items
            }
        }

        var sliderSettings = {
            "items": items,
            "loop": loop,
            "dots": dots,
            "margin": margin,
            "autoplay": autoplay,
            "autoPlayTimeout": autoplaytimeout,
            "nav": nav,
            "navtext": ['<i class="' + navLeftArrow + '"></i>', '<i class="' + navRightArrow + '"></i>'],

        };

        wowCarouselInit($selector, sliderSettings, responsive,);
    }

    /*----------------------------
    * Testimonial Slider
    * --------------------------*/
    function activeTestimonialSliderOne(el) {
        if (el.children('div').length < 2) {
            return;
        }
        el.addClass('owl-carousel');
        let $selector = $('#' + el.attr('id'));
        let loop = el.data('loop');
        let items = el.data('items');
        let autoplay = el.data('autoplay');
        let margin = el.data('margin');
        let dots = false;
        let nav = false;
        let autoplaytimeout = el.data('autoplaytimeout');
        let responsive = {
            0: {
                items: 1
            },
            460: {
                items: 1
            },
            599: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: items
            },
            1200: {
                items: items
            },
            1920: {
                items: items
            }
        }

        var sliderSettings = {
            "items": items,
            "loop": loop,
            "dots": dots,
            "margin": margin,
            "autoplay": autoplay,
            "autoPlayTimeout": autoplaytimeout,
            "nav": nav,
            "navtext": ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        };

        wowCarouselInit($selector, sliderSettings, responsive, 'fadeIn', 'fadeOut');

    }

    /*-----------------------------
    *   Header Slider
    * ----------------------------*/
    function activeHeaderSliderOne(el) {
        if (el.children('div').length < 2) {
            return;
        }
        el.addClass('owl-carousel');
        let $selector = $('#' + el.attr('id'));
        let loop = el.data('loop');
        let items = el.data('items');
        let autoplay = el.data('autoplay');
        let margin = el.data('margin');
        let dots = false;
        let nav = el.data('nav');
        let autoplaytimeout = el.data('autoplaytimeout');
        let animateIn = el.data('animatein');
        let animateOut = el.data('animateout');
        let responsive = {
            0: {
                items: 1,
                nav: false
            },
            460: {
                items: 1,
                nav: false
            },
            599: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: items
            },
            1200: {
                items: items
            },
            1920: {
                items: items
            }
        }

        var sliderSettings = {
            "items": items,
            "loop": loop,
            "dots": dots,
            "margin": margin,
            "autoplay": autoplay,
            "autoPlayTimeout": autoplaytimeout,
            "nav": nav,
            "navtext": ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        };

        wowCarouselInit($selector, sliderSettings, responsive, animateIn, animateOut);
    }

    //owl init function
    function wowCarouselInit($selector, sliderSettings, responsive, animateIn = false, animateOut = false) {
        $($selector).owlCarousel({
            loop: sliderSettings.loop,
            autoplay: sliderSettings.autoplay, //true if you want enable autoplay
            autoPlayTimeout: sliderSettings.autoPlayTimeout,
            margin: sliderSettings.margin,
            dots: sliderSettings.dots,
            nav: sliderSettings.nav,
            navText: sliderSettings.navtext,
            animateIn: animateIn,
            animateOut: animateOut,
            responsive: responsive,
            smartSpeed: 2000
        });
    }

    function wowCarouselInitWidthStagePadding($selector, sliderSettings, responsive, animateIn = false, animateOut = false) {
        $($selector).owlCarousel({
            loop: sliderSettings.loop,
            autoplay: sliderSettings.autoplay, //true if you want enable autoplay
            autoPlayTimeout: sliderSettings.autoPlayTimeout,
            margin: sliderSettings.margin,
            dots: sliderSettings.dots,
            nav: sliderSettings.nav,
            navText: sliderSettings.navtext,
            animateIn: animateIn,
            animateOut: animateOut,
            responsive: responsive,
            center: sliderSettings.center,
            stagePadding: 100,
            smartSpeed: 2000
        });
    }

    $(document).ready(function () {

        /*------------------------------
          counter section activation
        -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        /*---------------------------------
        * Magnific Popup
        * --------------------------------*/
        $('.video-play-btn,.play-video-btn').magnificPopup({
            type: 'video'
        });

    });

})(jQuery);