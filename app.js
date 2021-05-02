
var navbar = document.getElementsByClassName("navbar");
window.addEventListener("scroll", function (){
    if (window.pageYOffset >= 280) {
        navbar[0].classList.add("sticky")
    } else {
        navbar[0].classList.remove("sticky");
    }
})