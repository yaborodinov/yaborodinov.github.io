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