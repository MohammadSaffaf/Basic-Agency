function Img(index) {
    index.style.height = "40vh";
    index.style.transition = "all .5s";
}
function normalImg(index) {
    index.style.height = "50vh";
}
function Front(team) {
    team.style.zIndex = "5";
    team.style.position = "absolute";
}
function normalZindex(team) {
    team.style.zIndex = "3";
    team.style.position = "absolute";
}
function Front1(team) {
    team.style.zIndex = "5";
    team.style.position = "absolute";
}
function normalZindex1(team) {
    team.style.zIndex = "3";
    team.style.position = "absolute";
}
function Front2(team) {
    team.style.zIndex = "6";
    team.style.position = "absolute";
}
function normalZindex2(team) {
    team.style.zIndex = "2";
    team.style.position = "absolute";
}
function Front3(team) {
    team.style.zIndex = 5;
    team.style.position = "absolute";
}
function normalZindex3(team) {
    team.style.zIndex = 1;
    team.style.position = "absolute";
}
const burger = document.getElementById("hamburger")
const closeBurger = document.getElementById("close")
const hamburger = document.getElementById("overlay")

burger.addEventListener("click", () => {
    hamburger.style.right = "0%"
})
closeBurger.addEventListener("click", () => {
    hamburger.style.right = "-100%"
})

// about Gallery
let head1 = document.getElementById("head1")
let img1 = document.getElementById("img1")
let head2 = document.getElementById("head2")
let img2 = document.getElementById("img2")
let head3 = document.getElementById("head3")
let img3 = document.getElementById("img3")
let head4 = document.getElementById("head4")
let img4 = document.getElementById("img4")
let head5 = document.getElementById("head5")
let img5 = document.getElementById("img5")
let head6 = document.getElementById("head6")
let img6 = document.getElementById("img6")
if (head1){
head1.addEventListener("mouseover", show1)
head1.addEventListener("mouseout", hide1)
}
if (head2){
head2.addEventListener("mouseover", show2)
head2.addEventListener("mouseout", hide2)
}
if (head3){
    head3.addEventListener("mouseover", show3)
    head3.addEventListener("mouseout", hide3)
    }
    if (head4){
        head4.addEventListener("mouseover", show4)
        head4.addEventListener("mouseout", hide4)
        }
        if (head5){
            head5.addEventListener("mouseover", show5)
            head5.addEventListener("mouseout", hide5)
            }
            if (head6){
                head6.addEventListener("mouseover", show6)
                head6.addEventListener("mouseout", hide6)
                }

function show1() {
    
    img1.style.display = "block"
}
function hide1() {
   
    img1.style.display = "none"
}
function show2() {
    
    img2.style.display = "block"
}
function hide2() {
   
    img2.style.display = "none"
}
function show3() {
    
    img3.style.display = "block"
}
function hide3() {
   
    img3.style.display = "none"
}
function show4() {
    
    img4.style.display = "block"
}
function hide4() {
   
    img4.style.display = "none"
}
function show5() {
    
    img5.style.display = "block"
}
function hide5() {
   
    img5.style.display = "none"
}

function show6() {
    
    img6.style.display = "block"
}
function hide6() {
   
    img6.style.display = "none"
}
