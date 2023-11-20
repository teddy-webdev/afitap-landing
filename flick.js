document.addEventListener("DOMContentLoaded", function () {
  // This event is triggered when the HTML document has been completely loaded and parsed.

  // Your preloader element
  var preloader = document.getElementById("preloader");

  var content = document.getElementById("content_sme_wrapper");

  preloader.style.display = "none";

  content.style.display = "block";
});



const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startSlider() {
  showSlide(currentIndex);
  setInterval(nextSlide, 5000);
}

startSlider();
