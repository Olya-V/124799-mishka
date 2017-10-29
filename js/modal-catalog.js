var open = document.querySelectorAll(".product__button");
var popup = document.querySelector(".modal-order");
var size = popup.querySelector(".modal-order__field");
var i;

for (i= 0; i < open.length; i++) {
  open[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-order-open");
    size.focus();
  });
};

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-order-open")) {
    popup.classList.remove("modal-order-open");
    }
  }
});
