
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


// menu tabs
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const burger = document.querySelectorAll(".burger");
const snacks = document.querySelectorAll(".snacks");
const beverage = document.querySelectorAll(".beverage");


tabs.forEach(tab=> {
    tab.addEventListener("click", () => {
        tabs.forEach(tab=>{
            tab.classList.remove("active");
        });
        tab.classList.add("active");

        const tabVar = tab.getAttribute("data-tabs");

        // console.log('tabvar', tabVar);

        all.forEach(item =>{
            item.style.display = "none";
        });
        
        if(tabVar =="burger"){
            burger.forEach(item => {
                item.style.display = "block";
            });
        } else if(tabVar =="snacks"){
            snacks.forEach(item => {
                item.style.display = "block";
            });
        } else if(tabVar =="beverage"){
            beverage.forEach(item => {
                item.style.display = "block";
            });
        } else {
            all.forEach(item => {
                item.style.display = "block";
            });
        }
        

    });
});