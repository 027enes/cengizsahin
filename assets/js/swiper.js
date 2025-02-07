document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".homeSlider", {
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
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

    var swiper = new Swiper(".about-swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      on: {
        slideChangeTransitionStart: function () {
          let activeSlide = this.slides[this.activeIndex];
          let content = activeSlide.querySelector('.slide-content');
          let image = activeSlide.querySelector('.slide-image');
          
          gsap.fromTo(content, {
            x: 100,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          });
          
          gsap.fromTo(image, {
            opacity: 0
          }, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          });
        }
      }
    });

});
