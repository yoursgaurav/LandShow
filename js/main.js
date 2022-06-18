let togglebutton = document.querySelector("#toggleButton");
let navMenu = document.querySelector("#nav-menu");

togglebutton.addEventListener("click", toggleMenu);

function toggleMenu() {

    console.log("Hello World!");

    navMenu.classList.toggle("hidden");
}