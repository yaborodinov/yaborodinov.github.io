"use strict"
AOS.init();


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




// collapse

$('[data-collapse]').on('click', '.accordion__header', function (e) {
    $('.accordion__item').find('.accordion__content').stop().slideUp();
    $(this).closest('.accordion__item').find('.accordion__content').stop().slideToggle();
});

// scrollbar
(function ($) {
    $(window).on("load", function () {
        $(".accordion__content").mCustomScrollbar({
            axis: "yx",
            theme: "dark-thin",
            scrollButtons: {
                enable: true
            }
        });
    });
})(jQuery);