// JavaScript for toggling navigation menu 

let menuToggler = document.querySelector("#menu-toggler");
let navMenu = document.querySelector("#nav-menu");

menuToggler.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("hidden");
}


// JavaScript for changing mode 

let modeToggler = document.querySelector("#mode-toggler");
let page = document.querySelector("#mode");

modeToggler.addEventListener("click", toggleMode);

function toggleMode() {
    page.classList.toggle("dark");
}