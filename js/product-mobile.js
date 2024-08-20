document.querySelectorAll(".toggle-button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("share__wrapper--active");
    e.target.classList.toggle("toggle-button--active");
  });
});

const proGallery = new Swiper(".proGallery", {
  // Navigation arrows
  navigation: {
    nextEl: ".proGallerynext",
    prevEl: ".proGalleryprev",
  },
});
const popUpGallery = new Swiper(".popUpGallery", {
  // Navigation arrows
  navigation: {
    nextEl: ".Gnext",
    prevEl: ".Gprev",
  },
});

let popup = document.querySelector(".Gallerypopup");

let popBTN = document.querySelectorAll(".OpenPopUP");
popBTN.forEach((pop, index) => {
  pop.addEventListener("click", (e) => {
    popup.classList.add("showPOPUP");
    popUpGallery.slideTo(index, 0);
  });
});

let closePop = document.querySelector(".closePop");
closePop.addEventListener("click", () => {
  let popup = document.querySelector(".Gallerypopup");
  popup.classList.remove("showPOPUP");
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


let productCat = new Swiper(".swiper-cat-proj", {
  speed: 1500,
  slidesPerView: 2.5,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
});


const relatedProject = new Swiper('.relatedProject', {

  
    slidesPerView:1.2,
    spaceBetween:15,
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable : true,
      },
    });


const thumbSlider = new Swiper(".thumbSlider", {
    // Optional parameters
    // loop: true,
    spaceBetween: 5,
    slidesPerView: 2.5,
    // Navigation arrows
    navigation: {
      nextEl: ".nextThum",
      prevEl: ".prevThum",
    },
  });

const mainSlider = new Swiper(".mainSlider", {
  // Optional parameters
  // loop: true,
  spaceBetween: 50,
  slidesPerView: 1,

  thumbs: {
    swiper: thumbSlider
  },
 
});


