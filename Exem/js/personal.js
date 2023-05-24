"use strict";
let personal = document.querySelector(".personal");
let header__personal_text = document.querySelector(".header__personal-text");
let personal__title_exit = document.querySelector(".personal__title-exit");
let personal__conteiner_forgot = document.querySelector(
  ".personal__conteiner-forgot"
);
let registration = document.querySelector(".registration");
let registration__title_exit = document.querySelector(
  ".registration__title-exit"
);

header__personal_text.addEventListener("click", function () {
  personal.style.display = "block";
});
personal__title_exit.addEventListener("click", function () {
  personal.style.display = "none";
});
personal__conteiner_forgot.addEventListener("click", function () {
  personal.style.display = "none";
  registration.style.display = "block";
});
registration__title_exit.addEventListener("click", function () {
  registration.style.display = "none";
});
