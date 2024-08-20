// PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:1,
    spaceBetween: 40,
      speed:1000,
      navigation: {
        nextEl: ".products-Container .swiper-button-next",
        prevEl: ".products-Container .swiper-button-prev",
      },
  });  
  // PROJECT SLIDER
  let swiperProject= new Swiper(".swiper-projects", {
    slidesPerView:1.3,
    spaceBetween: 20,
   speed:800,
   pagination: {
    el: ".project .swiper-pagination",
    type: "progressbar",
  },
  }); 
// news SLIDER
let swiperNews= new Swiper(".swiper-blogs", {
    slidesPerView:1,
    spaceBetween: 20,
   speed:800,
   pagination: {
    el: ".blog .swiper-pagination",
    type: "progressbar",
  },
  });  

// GALLERY SLIDER
let swiperGallery= new Swiper(".swiper-gallery", {
    slidesPerView:1,
    spaceBetween: 30,
   speed:800,
   navigation: {
    nextEl: ".gallery-Container .swiper-button-next",
    prevEl: ".gallery-Container .swiper-button-prev",
  },
  });  