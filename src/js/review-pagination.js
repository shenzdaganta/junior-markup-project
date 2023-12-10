var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    fade:true,
    centerSlider: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
         slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
  }
  });