var open = document.querySelector(".product-hit__button");
var popup = document.querySelector(".modal-order");
var close = popup.querySelector(".modal-order__button");
var size = popup.querySelector(".modal-order__size");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-order-open");
  size.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-order-open");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-order-open")) {
    popup.classList.remove("modal-order-open");
    }
  }
});
