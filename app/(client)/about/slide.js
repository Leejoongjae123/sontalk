

var swiper = new Swiper(".partner_slide", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  autoplay: {
delay:5000,
},
  spaceBetween: 20,
  breakpoints: {
      0: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView:5,
      },
  },
});