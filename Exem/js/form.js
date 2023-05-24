"use strict";
let details__form = document.querySelector(".details__form");
let details__form_next = document.querySelector(".details__form-next");
let details__button_next = document.querySelector(".details__button-next");

details__button_next.addEventListener("click", function () {
  details__form.style.display = "none";
  details__form_next.style.display = "block";
});

// map
let map = document.querySelector(".map");
let map__footer = document.querySelector("#map__footer");
let map__title_exit = document.querySelector(".map__title-exit");

map__footer.addEventListener("click", function () {
  map.style.display = "block";
});
map__title_exit.addEventListener("click", function () {
  map.style.display = "none";
});

//ошибка

let error = document.querySelector(".error");
let footer__error1 = document.querySelector("#footer__error1");
let footer__error2 = document.querySelector("#footer__error2");
let footer__error3 = document.querySelector("#footer__error3");
let footer__error4 = document.querySelector("#footer__error4");
let footer__error5 = document.querySelector("#footer__error5");
let footer__error6 = document.querySelector("#footer__error6");
let footer__error7 = document.querySelector("#footer__error7");
let footer__error8 = document.querySelector("#footer__error8");
let footer__error9 = document.querySelector("#footer__error9");
let footer__error10 = document.querySelector("#footer__error10");
let footer__error11 = document.querySelector("#footer__error9");
let footer__error12 = document.querySelector("#footer__error10");

let error__title_exit = document.querySelector(".error__title-exit");

error__title_exit.addEventListener("click", function () {
  error.style.display = "none";
});

footer__error1.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error2.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error3.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error4.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error5.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error6.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error7.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error8.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error9.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error10.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error11.addEventListener("click", function () {
  error.style.display = "block";
});
footer__error12.addEventListener("click", function () {
  error.style.display = "block";
});
