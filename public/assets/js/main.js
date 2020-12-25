function Img(index) {
    index.style.height = "40vh";
    index.style.transition = "all .5s";

}

function normalImg(index) {
    index.style.height = "50vh";

}
const burger = document.getElementById("hamburger")
const closeBurger = document.getElementById("close")
const hamburger = document.getElementById("overlay")
console.log(burger);
burger.addEventListener("click", () => {
    hamburger.style.right = "0%"
})
closeBurger.addEventListener("click", () => {
    hamburger.style.right = "-100%"
})