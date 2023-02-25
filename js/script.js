console.log("Witaj deweloperze!");

let themeButton = document.querySelector(".js-header__themeButton");
let themeName = document.querySelector(".js-header__themeName");
let body = document.querySelector(".js-body");

themeButton.addEventListener("click", () => {
    body.classList.toggle("body--changedTheme");
    themeButton.classList.toggle("header__themeButton--changedTheme");
    themeName.innerText = body.classList.contains("body--changedTheme") ? "Jasny" : "Ciemny";
})