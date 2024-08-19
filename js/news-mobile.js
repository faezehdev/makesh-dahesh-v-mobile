document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
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



  const relatedProject = new Swiper('.relatedProject', {

  
  slidesPerView:1.2,
  spaceBetween:15,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable : true,
    },
  });