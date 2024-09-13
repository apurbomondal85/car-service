document.addEventListener('DOMContentLoaded', function () {

  // Hero Slider
  let heroSlider = new Swiper(".heroSwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop: true,
    effect: "cube"
  });

  // Team slider

  var teamSwiper = new Swiper(".teamSwiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }, breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  });

  // service

  var serviceSwiper = new Swiper(".serviceSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  });


  const navbar = document.getElementById("header");


  const sticky = navbar.offsetTop + 200;


  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("position-sticky");
    } else {
      navbar.classList.remove("position-sticky");
    }
  }

  window.onscroll = function () {
    stickyNavbar();
  };

});
