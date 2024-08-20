gsap.registerPlugin(ScrollTrigger) 

// RELATED PROJECT SLIDER
let swiperProject= new Swiper(".swiper-projects", {
    slidesPerView:1.3,
    spaceBetween: 20,
   speed:800,
   pagination: {
    el: ".Section-3 .swiper-pagination",
    type: "progressbar",
  },
  });  

// RELATED PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:1,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".products-Related .swiper-button-next",
        prevEl: ".products-Related .swiper-button-prev",
      },
      speed:1000
  });  

// ANIMATIONS
let textF = document.querySelectorAll('.fade-in')
textF.forEach(p=>{
    gsap.to(p,{
        y:0,
        opacity:1,
    })
})