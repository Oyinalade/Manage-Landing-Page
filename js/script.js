const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const sliderBtn = document.querySelectorAll(".slider_btn");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

const firstTrial = function (slide) {
  document
    .querySelector(`.slide[data-slide="${slide}"]`)
    .classList.toggle("hidden");
};
sliderBtn.forEach((_, i) => {
  document
    .querySelector(`.slider_btn[data-slide="${i}"]`)
    .addEventListener("click", function () {
      document
        .querySelector(`.slider_btn[data-slide="${i}"]`)
        .classList.remove("remove_active");
      firstTrial(i);

      document
        .querySelector(`.slider_btn[data-slide="${i}"]`)
        .classList.toggle("dots_active");
    });
});

// const slider = function () {
//   const sliderBtn = document.querySelectorAll(".slider_btn");
//   const slides = document.querySelectorAll(".slide");

//   let curSlide = 0;
//   const maxSlide = slides.length;
//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(".slider_btn")
//       .forEach((dot) => dot.classList.remove("dots_active"));

//     document
//       .querySelector(`.slider_btn[data-slide="${slide}"]`)
//       .classList.add("dots_active");
//   };
//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   //Next slider
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const previousSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };
//   const init = function () {
//     activateDot(0);
//     goToSlide(0);
//   };
//   init();
//   const dotContainer = document.getElementById("#slider-btn");
//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots")) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider();
