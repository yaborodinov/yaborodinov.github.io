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

// tabs

let tab = function () {
    let tabNav = document.querySelectorAll(".tabs-nav__item"),
        tabContent = document.querySelectorAll(".tab"),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener("click", selectTabNav)
    })
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove("is-active")
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name");
        selectTabContent (tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active");
        })
    }

    
}

tab();