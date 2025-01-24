const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
document.querySelector(".next").addEventListener("click", plusSlide(1));
document.querySelector(".prev").addEventListener("click", plusSlide(-1));
slides[0].style.display = "block";
dots[0].classList.add("active");

function plusSlide(counter) {
  let page = 0;
  function changeSlide() {
    slides[page].style.display = "none";
    dots[page].classList.remove("active");
    page = page + counter;
    if (page > 2) {
      page = 0;
    } else if (page < 0) {
      page = 2;
    }
    slides[page].style.display = "block";
    dots[page].classList.add("active");
  }
  return changeSlide;
}
