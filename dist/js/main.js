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
  } // Функции работающие только на мобильных устройствах


  if (window.innerWidth <= 1280) {
    initMenu();
  } // Функции работающие только на ПК


  if (window.innerWidth > 1280) {
    $(window).on('scroll', changeHeader);
  }

  initHeroSlider();
});