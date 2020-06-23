let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add_to_cart");
console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length;i++){
    addToCartButtons[i].addEventListener("click", function () {
        let prevProductCounts = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductCounts + 1;
    })
}