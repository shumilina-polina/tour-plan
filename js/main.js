var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  // effect: "coverflow",
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },
});

let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
