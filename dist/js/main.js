"use strict";

$(function () {
  function initMenu() {
    var $menuBtn = document.querySelector('.header__menu-btn');
    var $menuWrapper = document.querySelector('.header__content');
    var $bottomMenuWrapper = document.querySelector('.header__bottom-row');
    var $header = document.querySelector('.header'); // Burger

    $($menuBtn).on('click', function () {
      $($menuBtn).toggleClass('active');
      $($menuWrapper).slideToggle('500');
      $($bottomMenuWrapper).slideToggle('500');
      $($header).toggleClass('open');
      $('html').toggleClass('hide-overflow');
    }); // Accordion

    $($bottomMenuWrapper).on('click', function (e) {
      var $menuItem = e.target.closest('li');
      var $menuContent = $menuItem.querySelector('ul');

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
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
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
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 0) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
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
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
      var galleryTop = new Swiper('.calculator__slider-big', {
        spaceBetween: 0,
        thumbs: {
          swiper: galleryThumbs
        }
      });
    }
  }

  function initGalleryTabs() {
    if ('.gallery-page') {
      $('.gallery-page__tabs-content.active').show();
      $('.gallery-page__tabs-list').on('click', function (e) {
        var tabsItems = document.querySelectorAll('.gallery-page__tabs-item');

        if (e.target.closest('.gallery-page__tabs-item')) {
          document.querySelectorAll('.gallery-page__tabs-content').forEach(function (item, i) {
            if (item.dataset.tab === e.target.dataset.tab) {
              $(item).show(500);
              $(item).addClass('active');
              $(tabsItems[i]).addClass('active');
            } else {
              $(item).hide(500);
              $(item).removeClass('active');
              $(tabsItems[i]).removeClass('active');
            }
          });
        }
      });
    }
  } // Функции работающие только на мобильных устройствах


  if (window.innerWidth <= 1280) {
    initMenu();
  } // Функции работающие только на ПК


  if (window.innerWidth > 1280) {
    $(window).on('scroll', changeHeader);
  }

  initHeroSlider();
  initScrollToTop();
  initCalculatorSlider();
  initGalleryTabs();
});