let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".learning-slider", {
   grabCursor:true,
   loop:true,
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
   },
});

let previewContainer = document.querySelector('.learning-preview-container');
let previewBox = previewContainer.querySelectorAll('.learning-preview');
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video3');
var video3 = document.getElementById('video2');

document.querySelectorAll('.learning .slide').forEach(learning =>{
   learning.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = learning.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.display = 'none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
      video1.pause();
      video2.pause();
      video3.pause();
      video1.currentTime = 0;
      video2.currentTime = 0;
      video3.currentTime = 0;
   });
};

var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
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
   },
});