const menu = document.querySelector(".fas");
const navbar = document.querySelector(".nav-list");
const navH = document.querySelector(".head-nav");

window.addEventListener("scroll", () => {
    let top = window.scrollY;
    if (top >=10) {
        navH.style.position = "fixed"
    }
    if (top <= 50) {
        navH.style.position = "sticky"
    }
})

navbar.style.maxHeight = "0px"
menu.addEventListener("click", () => {
    if (navbar.style.maxHeight == "0px") {
        navbar.style.maxHeight = "300px"
    } else {
        navbar.style.maxHeight = "0px"
    }
    menu.classList.toggle("fa-bars")
    menu.classList.toggle("fa-x")
});
const next = document.querySelector(".left");
const prev = document.querySelector(".prev")
const Slider = document.querySelector(".about8-cards");
Slider.addEventListener("wheel", (even) => {
    even.preventDefault();
    Slider.scrollLeft += even.deltaY
})
// next.addEventListener("click", () => {
//     Slider.scrollLeft += 100
// })
// prev.addEventListener("click", () => {
//     Slider.scrollLeft -= 900
// })

const Scrol = document.querySelector(".about9-cards2");

Scrol.addEventListener("wheel", (even) => {
    even.preventDefault();
    Scrol.scrollLeft += even.deltaY
})

const about10 = document.querySelector(".about10-cards2");

about10.addEventListener("wheel", (hello) => {
    hello.preventDefault();
    about10.scrollLeft += hello.deltaY
})