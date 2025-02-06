document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".homeSlider", {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2,
        },
      });

      var swiper = new Swiper(".projectsSlider", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
});
