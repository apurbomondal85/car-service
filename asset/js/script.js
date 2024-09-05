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
    },
  });

  // service

  var serviceSwiper = new Swiper(".serviceSwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
