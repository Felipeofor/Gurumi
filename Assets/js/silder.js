var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween:15,
    slidesPerGroup: 3,
    loop: true,
    
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

