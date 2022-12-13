$(document).ready(function () {
    "use strict";
  
    if( $('.partners-swiper').length != 0 ) {
        const swiper = new Swiper('.partners-swiper', {
            direction: 'horizontal',
            loop: true,
  
            breakpoints: {
                0: {
  
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
            },
  
            navigation: {
                nextEl: '.partners-next ',
                prevEl: '.partners-prev',
            },
        });
        
  
        
    }


    if( $('.services-swiper').length != 0 ) {
        const swiper = new Swiper('.services-swiper', {
            direction: 'horizontal',
            loop: true,
  
            breakpoints: {
                0: {
  
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
            },
  
            navigation: {
                nextEl: '.services-next ',
                prevEl: '.services-prev',
            },
        });        
    }


    if( $('.products-swiper').length != 0 ) {
        const swiper = new Swiper('.products-swiper', {
            direction: 'horizontal',
            loop: true,

            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
                0: {
  
                },

                480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: '.products-next ',
                prevEl: '.products-prev',
            },
        });        
    }

    
    if( $('.testimonials-swiper').length != 0 ) {
        const swiper = new Swiper('.testimonials-swiper', {
            direction: 'horizontal',
            loop: true,

            centeredSlides: true,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
                0: {
  
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
            },
        });        
    }

});




const header=document.querySelector("nav");


window.addEventListener("scroll",function() {
    header.classList.toggle("sticky" , window.scrollY >38);
});







