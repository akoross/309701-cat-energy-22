const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const navList = document.querySelector(".main-nav__list");

navMain.classList.remove("main-nav--nojs");
navToggle.classList.add("main-nav__toggle--burger");
navList.classList.remove("main-nav__list--visible");
navToggle.addEventListener("click", () => {
  if (navToggle.classList.contains("main-nav__toggle--burger")) {
    navToggle.classList.remove("main-nav__toggle--burger");
    navToggle.classList.add("main-nav__toggle--clossed");
    navList.classList.add("main-nav__list--visible");
  } else {
    navToggle.classList.add("main-nav__toggle--burger");
    navToggle.classList.remove("main-nav__toggle--clossed");
    navList.classList.remove("main-nav__list--visible");
  }
});
