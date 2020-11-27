$(function() {


    function initMenu() {
        const $menuBtn = document.querySelector('.header__menu-btn');
        const $menuWrapper = document.querySelector('.header__content');
        const $bottomMenuWrapper = document.querySelector('.header__bottom-row');
        const $header = document.querySelector('.header');
        
        // Burger
        $($menuBtn).on('click', () => {
            $($menuBtn).toggleClass('active');
            $($menuWrapper).slideToggle('500');
            $($bottomMenuWrapper).slideToggle('500');
            $($header).toggleClass('open');
            $('html').toggleClass('hide-overflow');
        });

        // Accordion
        $($bottomMenuWrapper).on('click', e => {
            const $menuItem = e.target.closest('li');
            const $menuContent = $menuItem.querySelector('ul');
            if ($menuContent) {
                e.preventDefault();
                
                $($menuContent).slideToggle('500');
                $($menuItem).addClass('active');
            }
        });
    }

    function initHeroSlider() {
        var heroSlider = new Swiper('.hero__slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

    function changeHeader() {
        if (window.pageYOffset >= 100) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    }

    function initScrollToTop() {
        $('.scroll-top').fadeOut();
            $(window).on('scroll', (function () {
                if ($(this).scrollTop() > 0) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }));
            $('.scroll-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
            
    }

    function initCalculatorSlider() {
        if (document.querySelector('.calculator__sliders')) {
            var galleryThumbs = new Swiper('.calculator__slider-thumbs', {
                spaceBetween: 0,
                slidesPerView:3,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            var galleryTop = new Swiper('.calculator__slider-big', {
                spaceBetween: 0,
                thumbs: {
                    swiper: galleryThumbs
                }
            });
        }
    }
    
    // Функции работающие только на мобильных устройствах
    if (window.innerWidth <= 1280) {
        initMenu();
    }

    // Функции работающие только на ПК
    if (window.innerWidth > 1280) {
        $(window).on('scroll', changeHeader);
    }


    initHeroSlider();
    initScrollToTop();
    initCalculatorSlider();
});