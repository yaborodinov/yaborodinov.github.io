let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add_to_cart");

for (let i = 0; i < addToCartButtons.length;i++){
    addToCartButtons[i].addEventListener("click", function () {
        let prevProductCounts = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductCounts + 1;
    })
}




let wish = document.querySelector("#device-1");
function changeImg() {
    let imgBgd = imgEl.getAttribute("src");
    if (imgSrc === "img/sdfsdfsdf.png") {
        imgEl.setAttribute("src", "img/hg.png")
    } else if (imgSrc === "img/sdfsdfsdf.png" || imgSrc === "img/1.jpg") {
        imgEl.setAttribute("src", "img/sdfsdfsdf.png")
    } else {
        imgEl.setAttribute("src", "img/1.jpg")
    }
    imgEl.addEventListener("click", changeImg);
}


// wish=======
// let wishElement = document.querySelectorAll(".wish");
// for (let i = 0; i < wishElement.length; i++){
//     wishElement[i].addEventListener("click", function () {
//         if (wishElement[i].className == "wish wish-active") {
//             wishElement[i].classList.remove("wish-active")
//         } else {
//             wishElement[i].classList.add("wish-active")
//         }
//     })
// }
let likeButtons = document.querySelectorAll(".wish");
for (let i = 0; i < likeButtons.length; i++){
    likeButtons[i].addEventListener("click", function () {
        this.classList.toggle('liked');
    })
    
}

// modal
let moreDetailsButtons = document.querySelectorAll(".more_details")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn_close");
moreDetailsButtons.forEach(function (btn) {
    btn.addEventListener("click", openModal)
})

function openModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}
function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove('show')
}

function openModalByScroll() {
    if (window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll", openModalByScroll)
    }
}
window.addEventListener('scroll',openModalByScroll)

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal()
    }
})

// slider
$(".slider-block").slick()




// product-quontity
let decrementBtn = document.querySelectorAll(".decrement")[0];
let incrementBtn = document.querySelectorAll(".increment")[0];
let productQuontity = document.querySelectorAll(".product_quantity input")[0];

// incrementBtn.addEventListener("click", function () {
//     let currentCount = +productQuontity.value;
//     let nextCount = currentCount + 1;
//     productQuontity.value = nextCount;
//     toggleButtonState(nextCount);
//     toggleButtonStateMax(nextCount);
// })

// decrementBtn.addEventListener("click", function () {
//     let currentCount = +productQuontity.value;
//     let nextCount = currentCount - 1;
//     productQuontity.value = nextCount;
//     toggleButtonState(nextCount);
//     toggleButtonStateMax(nextCount);
// })


// let currentCount = +productQuontity.value;
// function toggleButtonState(count) {
//     if (count <= 1) {
//         decrementBtn.disabled = true;
//     } else {
//         decrementBtn.disabled = false;
//     }
// }
// function toggleButtonStateMax(count) {
//     if (count >= 5) {
//         incrementBtn.disabled = true;
//     } else {
//         incrementBtn.disabled = false;
//     }
// }
// toggleButtonStateMax(currentCount);
// toggleButtonState(currentCount);















// selectize
$('.select_category').selectize({
    create: true,
    sortField: { field: 'text' }
});
