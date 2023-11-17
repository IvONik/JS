const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;

const dot = document.querySelector(".dots");
const dots = Array.from(dot.querySelectorAll("div"));

let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

dot.addEventListener("click", (e) => {
  for (const slideIndex of dots) {
    const slideIndex = dots.indexOf(e.target);
    const activeEl = document.querySelector(".active");

    if (activeEl) {
      activeEl.classList.remove("active");
    }

    if (e.target.tagName === "DIV") {
      e.target.classList.add("active");
    }

    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }
});
