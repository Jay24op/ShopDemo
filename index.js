let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides:true, //centering slide to screen
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".blogs-row", {
    loop: true,
    centeredSlides:true, //centering slide to screen
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    observer: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
    },
  });