import htmlToElement from "../../../utils/htmlToElement";
import favorite from "./index.html";

import "./index.scss";

const content = htmlToElement(favorite);

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider__card");
  const sliderLine = document.querySelector(".slider-line");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const controls = document.querySelectorAll(".control");

  let count = 0;
  let width;
  let controlIndex = 0;
  let x1 = null;

  function init() {
    width = document.querySelector(".slider__container").offsetWidth;
    sliderLine.style.width = width * images.length + "px";
    images.forEach((item) => {
      item.style.width = width + "px";
      item.style.height = "auto";
    });
    rollSlider();
  }
  init();
  window.addEventListener("resize", init);

  const nextSlide = () => {
    count++;
    controlIndex++;
    if (count >= images.length) {
      count = 0;
      controlIndex = 0;
    }
    rollSlider();
    thisSlide(controlIndex);
  };
  const prevSlide = () => {
    count--;
    controlIndex--;
    if (count < 0) {
      count = images.length - 1;
      controlIndex = images.length - 1;
    }
    rollSlider();
    thisSlide(controlIndex);
  };
  arrowRight.addEventListener("click", nextSlide);
  arrowLeft.addEventListener("click", prevSlide);

  function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }

  controls.forEach((control, index) => {
    control.addEventListener("click", () => {
      count = index;
      sliderLine.style.transform = "translate(-" + count * width + "px)";
      controlIndex = index;
      thisSlide(controlIndex);
    });
  });

  const thisSlide = (index) => {
    for (let control of controls) {
      control.classList.remove("active");
    }
    controls[index].classList.add("active");
  };

  // Touch events
  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

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

  setInterval(() => {
    nextSlide();
  }, 5000);
});

export default content;
