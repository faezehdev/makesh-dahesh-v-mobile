let listSlider = document.querySelectorAll(".listSlider");

var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  watchSlidesProgress: true,
});



const projectsSlider = new Swiper(".projectsSlider", {
  // Optional parameters
  // loop: true,
  spaceBetween: 7,
  slidesPerView: 1,

  // Navigation arrows
  scrollbar: {
    el: ".relatedProjectsScrollBar",
    draggable: true,
  },
});
const relatedPro = new Swiper(".relatedPro", {
  // Optional parameters
  // loop: true,
  spaceBetween: 52,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".prevProBtn",
    prevEl: ".nextProBtn ",
  },
});


const rSlider = new Swiper(".rSlider", {
  slidesPerView: 1,
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".serPrebtn",
    prevEl: ".serNextBtn",
  },
  on: {
    slideChange: function () {
      $(".listSlider").removeClass("activeList");
      listSlider[this.activeIndex].classList.add("activeList");
    },
  },

});
const newsSlider = new Swiper(".newsSlider", {
  spaceBetween: 40,
  slidesPerView: 1,

  speed: 1000,
  // Navigation arrows
  scrollbar: {
    el: ".relatedNewsScrollBar",
    draggable: true,
  },
});

listSlider[0].classList.add("activeList");
listSlider.forEach((element, index) => {
  element.addEventListener("click", function (params) {
    rSlider.slideTo(index, 1000);
    $(".listSlider").removeClass("activeList");
    element.classList.add("activeList");
  });
});

const aboutSlider = new Swiper(".aboutSlider", {
  // If we need pagination

  autoplay: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
});

const proCatSlider = new Swiper(".proCatSlider", {
  slidesPerView: 1,
  spaceBetween: 7,
  // And if we need scrollbar
  scrollbar: {
    el: ".relatedProCatScrollBar",
    draggable: true,
  },
});

const brandSlider = new Swiper(".brandSlider", {
  slidesPerView: 1,
  spaceBetween: 7,
  // And if we need scrollbar
  
  pagination: {
    el: '.brandpagination',
    type: 'bullets',
    clickable:true,
  },
});
