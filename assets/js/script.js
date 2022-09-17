"use strict";

const elemToggleLeFunc = function (elem) {
  elem.classList.toggle("active");
};

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleLeFunc(navbar);
    elemToggleLeFunc(overlay);
  });
}

// header sticky
const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > lastScrollPosition) {
    header.classList.remove("active");
  } else {
    header.classList.add("acticve");
  }

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
});
