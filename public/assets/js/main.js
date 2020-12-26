function Img(index) {
    index.style.height = "40vh";
    index.style.transition = "all .5s";

}

function normalImg(index) {
    index.style.height = "50vh";

}


function Front(team) {
    console.log("object");
    team.style.zIndex = 5;
    team.style.position = "absolute";

    

}

function normalZindex(team) {
    team.style.zIndex = "3";
    team.style.position = "absolute";

}
function Front2(team) {
    console.log("object");
    team.style.zIndex = 5;
    team.style.position = "absolute";

    

}

function normalZindex2(team) {
    team.style.zIndex = "2";
    team.style.position = "absolute";

}
function Front3(team) {
    console.log("object");
    team.style.zIndex = 5;
    team.style.position = "absolute";

    

}

function normalZindex3(team) {
    team.style.zIndex = "1";
    team.style.position = "absolute";

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