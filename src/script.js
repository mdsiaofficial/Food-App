
// variables catch
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

menuBtn.addEventListener("click", ()=>{
    navMenu.classList.remove("hidden");
});

navClose.addEventListener("click", ()=>{
    navMenu.classList.add("hidden");
});

navLink.forEach(link => link.addEventListener("click", ()=>{
    navMenu.classList.add("hidden");
}))