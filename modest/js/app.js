'use strict'


let navButtons = document.querySelectorAll(".nav_menu_item");
for (let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click", function () { 
        let current = document.getElementsByClassName("nav_menu_active");
        current[0].className = current[0].className.replace("nav_menu_active", "");
        this.className += "nav_menu_active";
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


// modal
let sendMessageButton = document.querySelectorAll("#send_message");
let modalSendMessage = document.querySelector(".modal");

sendMessageButton.forEach(function (bnt) {
    bnt.addEventListener("click", openModalSendMessage)
})
function openModalSendMessage() {
    modalSendMessage.classList.add("show")
    modalSendMessage.classList.remove("hide")
}
function closeModalSendMessage() {
    modalSendMessage.classList.add("hide")
    modalSendMessage.classList.remove("show")
}
modalSendMessage.addEventListener("click", function (e) {
    if (e.target === modalSendMessage) {
        closeModalSendMessage()
    }
})
function changeBackgroundModal() {
    modalSendMessage.style.backgroundColor = "#eaeef1bb";

}

function backBackgroundModal(){
    modalSendMessage.style.backgroundColor = "#eaeef1de";
}
modalSendMessage.addEventListener("mouseover", function (e) {
    if (e.target === modalSendMessage) {
        changeBackgroundModal()
    } else {
        backBackgroundModal()
    }
})







// message


let discountMessage = document.querySelector(".message");
function openDiscount() {
    discountMessage.classList.add("show")
    discountMessage.classList.remove("hide")
}
function closeModalMessageByScroll() {
    discountMessage.classList.add("hide")
    discountMessage.classList.remove("show")
}


function openDiscountByScroll() {
    if (window.pageYOffset >= document.documentElement.scrollHeight / 2) {
        openDiscount();
        window.removeEventListener("scroll", openDiscountByScroll)
    }
}
window.addEventListener('scroll', openDiscountByScroll)
discountMessage.addEventListener("click", function (e) {
    if (e.target === discountMessage) {
        closeModalMessageByScroll()
    }
})