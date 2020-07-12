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
