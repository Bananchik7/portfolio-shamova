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
