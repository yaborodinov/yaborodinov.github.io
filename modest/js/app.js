'use strict'

let navButtons = document.querySelectorAll(".nav_menu_item");
console.log(navButtons)
for (let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click", function () {
        this.classList.toggle("nav_menu_active")
    })
}

// anchor
let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        let blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}