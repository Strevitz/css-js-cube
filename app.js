/*document.getElementByClass("front").onclick = function () {
  this.classList.toggle("show-top");
}; */

function classToggle() {
  this.classList.toggle("front");
  this.classList.toggle("show-front");
}
document.querySelector(".front").addEventListener("click", classToggle);
