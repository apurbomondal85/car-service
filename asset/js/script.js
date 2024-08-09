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

});
