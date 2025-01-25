document.querySelector(".sqare-switch").addEventListener("click", changeState);
document.querySelector(".circle-switch").addEventListener("click", changeState);
function changeState() {
  this.classList.toggle("active");
  this.children[0].classList.toggle("active-slider");
  this.children[0].children[0].checked = !this.children[0].children[0].checked;
  console.dir("Succes");
}
