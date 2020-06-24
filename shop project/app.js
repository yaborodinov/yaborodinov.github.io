let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add_to_cart");
console.log(addToCartButtons);

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
let wishElement = document.querySelectorAll(".wish");
for (let i = 0; i < wishElement.length; i++){
    wishElement[i].addEventListener("click", function () {
        if (wishElement[i].className == "wish wish-active") {
            wishElement[i].classList.remove("wish-active")
        } else {
            wishElement[i].classList.add("wish-active")
        }
    })
}
