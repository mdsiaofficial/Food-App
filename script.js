
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


// scroll up

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY>=250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
        
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener("scroll", scrollUp);




// header border bottom
const scrollHeader = () => {
    const header = document.getElementById("header");

    if(window.scrollY>=50){
        
        // header.classList.remove("borber-b-2", "border-primary");
        header.classList.add("borber-b-2", "border-primary");
        
    }else{
        header.classList.remove("borber-b-2", "border-primary");
    }
};
window.addEventListener("scroll", scrollHeader);



// dark light theme
const html = document.querySelector("html");
const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){

    themeToggle.addEventListener("click", (e) => {
        html.classList.add("dark");
        themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
        localStorage.setItem("mode", "dark");
    })
}


