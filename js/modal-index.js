var open = document.querySelector(".product-hit__button");
var popup = document.querySelector(".modal-order");
var size = popup.querySelector(".modal-order__field");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-order-open");
  size.focus();
});


window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-order-open")) {
    popup.classList.remove("modal-order-open");
    }
  }
});
