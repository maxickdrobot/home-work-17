const buttonMenu = document.getElementById("headerNavbarBtn");
const menu = document.getElementById("headerNavbarList");

buttonMenu.addEventListener("click", () => {
    buttonMenu.classList.toggle("active");
    menu.classList.toggle("active");
});