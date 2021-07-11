const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDafault;
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    constactive = nav.classList.contains("active")
    event.currentTarget.setAttribute("aria-expanded", "true");
    if(active) {
        event.currentTarget.setAttribute("aria-label", "Fecha Menu");
    }else{
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

///

         
const menuLinks = document. querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
const id = element. getAttribute("href");
return document. querySelector(id). offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
event. preventDefault();
const distanceFromTheTop = getDistanceFromTheTop(event. target) - 90;
smoothScrollTo(0, distanceFromTheTop);
}

menuLinks. forEach((link) => {
link. addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
const startX = window. scrollX || window. pageXOffset;
const startY = window. scrollY || window. pageYOffset;
const distanceX = endX - startX;
const distanceY = endY - startY;
const startTime = new Date(). getTime();

duration = typeof duration !== "undefined" ? duration : 1000;

const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
    return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
};

const timer = setInterval(() => {
    const time = new Date(). getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
    clearInterval(timer);
    }
    window. scroll(newX, newY);
}, 1000 / 60);
}

//barra fixa

const nav = document.getElementsByTagName("nav")[0];
const topNav = nav.offsetTop;

window.onscroll = function(){
    fixaMenuNoTopo();
}

function fixaMenuNoTopo (){
    if(window.pageYOffset >= topNav){
        nav.classList.add("fixoNoTopo");
    }else{
        nav.classList.remove("fixoNoTopo");
    }
}
