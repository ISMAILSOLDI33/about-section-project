new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 20,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Respensive Breakpointes
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },  

        1024: {
            slidesPerView: 3
        },        
    }

});

let slideIndex = 0;
let memberSlideIndex = 0;

function showSlides(index, className) {
    const slides = document.querySelectorAll(className);
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextMemberSlide() {
    const slides = document.querySelectorAll('#members .slide');
    memberSlideIndex = (memberSlideIndex + 1) % slides.length;
    showSlides(memberSlideIndex, '#members .slide');
}

function prevMemberSlide() {
    const slides = document.querySelectorAll('#members .slide');
    memberSlideIndex = (memberSlideIndex - 1 + slides.length) % slides.length;
    showSlides(memberSlideIndex, '#members .slide');
}

document.addEventListener("DOMContentLoaded", () => {

    showSlides(memberSlideIndex, '#members .slide');
});