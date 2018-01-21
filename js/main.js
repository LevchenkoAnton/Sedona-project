var burgerButton = document.querySelector(".page-header__open-nav");
var closeButton = document.querySelector(".main-nav__close");
var mainNav = document.querySelector(".main-nav");
var seachButton = document.querySelector(".seach__btn");
var seachForm =document.querySelector(".form__wrapper")

burgerButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (mainNav.classList.contains("main-nav--closed")) {
        mainNav.classList.remove("main-nav--closed");
    } else {
        mainNav.classList.add("main-nav--closed");
    }

closeButton.addEventListener("click", function (event) {
    event.preventDefault()
    mainNav.classList.add("main-nav--closed")

})
});

seachButton.addEventListener('click', function (event) {
    event.preventDefault();
    seachForm.classList.toggle("form--close")
})