'use strict'


// nav_mobile_menu
let mobileMenu = document.querySelector(".nav_mobile_menu");
let mainMenu = document.querySelector(".navigation");
mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active_menu");
    if (mobileMenu.classList.contains("active_menu")) {
        mainMenu.classList.add("active_menu");
    } else {
        mainMenu.classList.remove("active_menu");
    }
})



// // anchor


$('#nav').onePageNav({
    currentClass: 'current'
});



// modal
let sendMessageButton = document.querySelectorAll("#send_message");
let modalSendMessage = document.querySelector(".modal");
let closeModalButton = document.querySelector(".modal_button_close");
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
    if (e.target === modalSendMessage || e.target ===closeModalButton) {
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
let closeMessageButton = document.querySelector(".message_button_close");
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
    if (e.target === discountMessage || e.target ===closeMessageButton) {
        closeModalMessageByScroll()
    }
})
// slider ============

$(".slider").slick({
    mobileFirst:true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false
});
