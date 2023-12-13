import htmlToElement from "../../../utils/htmlToElement";
import favorite from "./index.html";

import "./index.scss";

const content = htmlToElement(favorite);

document.addEventListener("DOMContentLoaded", () => {
  const sliderLine = document.querySelector(".slider__line");
  const slides = document.querySelectorAll(".slider__line_card");
  const arrowLeft = document.querySelector(".slider__arrow_left");
  const arrowRight = document.querySelector(".slider__arrow_right");
  const progressBars = document.querySelectorAll(".slider__progress-bar_line");

  let slideIndex = 0;
  let width;
  let progressBarIndex = 0;
  let x1 = null;

  progressBars[slideIndex].classList.add("active");

  function init() {
    width = document.querySelector(".slider__container").offsetWidth;
    sliderLine.style.width = width * slides.length + "px";
    slides.forEach((slide) => {
      slide.style.width = width + "px";
      slide.style.height = "auto";
    });
    rollSlider();
  }
  init();
  window.addEventListener("resize", init);

  const nextSlide = () => {
    slideIndex++;
    progressBarIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
      progressBarIndex = 0;
    }
    rollSlider();
    thisSlide(progressBarIndex);
  };
  const prevSlide = () => {
    slideIndex--;
    progressBarIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
      progressBarIndex = slides.length - 1;
    }
    rollSlider();
    thisSlide(progressBarIndex);
  };
  arrowRight.addEventListener("click", nextSlide);
  arrowLeft.addEventListener("click", prevSlide);
  function rollSlider() {
    sliderLine.style.transform = "translate(-" + slideIndex * width + "px)";
  }
  progressBars.forEach((progressBar, index) => {
    progressBar.addEventListener("click", () => {
      slideIndex = index;
      sliderLine.style.transform = "translate(-" + slideIndex * width + "px)";
      progressBarIndex = index;
      thisSlide(progressBarIndex);
    });
  });
  const thisSlide = (index) => {
    for (let progressBar of progressBars) {
      progressBar.classList.remove("active");
    }
    progressBars[index].classList.add("active");
  };

  progressBars.forEach((progressBar) => {
    progressBar.addEventListener("animationend", () => {
      nextSlide();
    });
  });
  sliderLine.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );

  function toggleAnimation() {
    let progressBar = progressBars[slideIndex];
    progressBar.classList.toggle("paused");
  }

  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("mouseleave", () => {
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("touchstart", () => {
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("touchend", () => {
      toggleAnimation();
    });
  });

  sliderLine.addEventListener("animationend", nextSlide);

  // Touch events
  sliderLine.addEventListener("touchstart", handleTouchStart, false);
  sliderLine.addEventListener("touchmove", handleTouchMove, false);

  function handleTouchStart(event) {
    x1 = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!x1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    if (x2 - x1 > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
    x1 = null;
  }
});

export default content;
