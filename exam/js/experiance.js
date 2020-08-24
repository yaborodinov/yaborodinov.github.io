"use strict"
AOS.init();


// slider
$(document).ready(function () {
    $('.portfolio_slider').slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dots:true
    });
});


// mobile menu
let mobileMenu = document.querySelector(".nav__mobile__menu");
let mainMenu = document.querySelector(".navigation");
mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})


    // scrollbar
    (function ($) {
        $(window).on("load", function () {
            $(".portfolio__text").mCustomScrollbar({
                axis: "yx",
                theme: "dark-thin",
                scrollButtons: {
                    enable: true
                }
            });
        });
    })(jQuery);