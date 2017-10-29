var toggle = document.querySelector(".main-header__toggle");
var menu = document.querySelector(".main-header");

menu.classList.remove("main-header--nojs");
menu.classList.add("main-header--closed");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("main-header--opened")) {
    menu.classList.remove("main-header--opened");
    menu.classList.add("main-header--closed");
  } else {
    menu.classList.add("main-header--opened");
  }
});
