{
    const changeTheme = () => {

        const themeName = document.querySelector(".js-header__themeName");
        const body = document.querySelector(".js-body");

        body.classList.toggle("body--changedTheme");
        themeName.innerText = body.classList.contains("body--changedTheme") ? "Jasny" : "Ciemny";

    }
    const init = () => {

        const themeButton = document.querySelector(".js-header__themeButton");

        themeButton.addEventListener("click", changeTheme);

    }
    init();
}