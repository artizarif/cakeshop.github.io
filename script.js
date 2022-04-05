let navbar = document.querySelector('.header .navbar');
let menuBtn = document.getElementById('menu-btn');

menuBtn.onclick = function(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    }
});

let perviewContainer = document.querySelector('.food-preview-container');
let perviewBox = perviewContainer.querySelectorAll('.food-preview');
document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () =>{
    perviewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    perviewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name==target){
        preview.classList.add('active');
      }
    })
  }
})

perviewContainer.querySelector('#close').onclick = () =>{
  perviewContainer.style.display = 'none';
  perviewBox.forEach(close =>{
    close.classList.remove('active');
  })
}

// js for light gallery 

lightGallery(document.querySelector('.gallery .gallery-container'));

//--- js for menu section

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides:true,
  autoHeight:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// -----

var swiper = new Swiper(" .blog-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides:true,
  autoHeight:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  }
});































