const productsList = new Swiper('.productsList', {
    slidesPerView : 1,
    spaceBetween : 55,
    navigation: {
      nextEl: '.nextCat',
      prevEl: '.prevCat',
    },
  
  });

  let schTitle = document.querySelectorAll(".schTitle")
  schTitle.forEach(element => {
    element.addEventListener("click" , function (params) {
      
      element.nextElementSibling.classList.toggle("activeSchema")
      console.log(element.nextElementSibling);
        
    })
  });