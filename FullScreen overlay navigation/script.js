const button = document.querySelector("button");
button.addEventListener("click", showOverlay);
console.log(button);
const menu = document.querySelector(".overlay-container");
console.log(menu);
const exit = document.querySelector(".exit");
exit.addEventListener("click", hideMenu);

function showOverlay() {
  menu.style.width = "100%";
}
function hideMenu() {
  menu.style.width = "0%";
}
