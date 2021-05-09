const rangeSlider = document.querySelector(".slider-toggles__bar");
const sliderImage = document.querySelector(".slider__item--before");
const buttonBefore = document.querySelector(".slider-toggles__button--before");
const buttonAfter = document.querySelector(".slider-toggles__button--after");

sliderImage.style.width = rangeSlider.value + "%";

rangeSlider.oninput = function () {
  sliderImage.style.width = 100 - this.value + "%";
};

buttonBefore.addEventListener("click", () => {
  rangeSlider.value = 0;
  sliderImage.style.width = 100 + "%";
});

buttonAfter.addEventListener("click", () => {
  rangeSlider.value = 100;
  sliderImage.style.width = 0;
});
