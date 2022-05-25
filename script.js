"use strict";

// Slider
const slider = function (e) {
  const slides = document.querySelectorAll(".slide");
  // const slider = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  goToSlide(0);

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  //Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};

slider();

// Tabbed component

const tabs = document.querySelectorAll(".clients_tab");
const tabsContainer = document.querySelector(".clients_tab-container");
const tabsContent = document.querySelectorAll(".clients_content");

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); umjesto toga ide Event delegation
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".clients_tab");
  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("clients_tab--active"));
  tabsContent.forEach((c) => c.classList.remove("clients_content--active"));
  // Activate tab
  clicked.classList.add("clients_tab--active");

  // Activate content area
  document
    .querySelector(`.clients_content--${clicked.dataset.tab}`)
    .classList.add("clients_content--active");
});
