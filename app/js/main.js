$(function() {


    function initMenu() {
        const menuBtn = document.querySelector('.header__btn');
        const menuWrapper = document.querySelector('.profile-menu');
    }

    
    // Функции работающие только на мобильных устройствах
    if (window.innerWidth <= 768) {
    }

    // initMenu();

    function changeHeader() {
        if (window.pageYOffset >= 100) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    }
    
    $(window).on('scroll', changeHeader);
});