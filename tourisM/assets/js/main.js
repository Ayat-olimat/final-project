let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let formBtnSingUp = document.querySelector('#signUp-btn'); 

let loginForm = document.querySelector('.login-form-container');
let SignUPForm = document.querySelector('.signUp-form-container');
let formClose1 = document.querySelector('#form-close1');
let formClose2 = document.querySelector('#form-close2');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    SignUPForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formBtnSingUp.addEventListener('click', () =>{
  SignUPForm.classList.add('active');
});

formClose1.addEventListener('click', () =>{
    loginForm.classList.remove('active');

});
formClose2.addEventListener('click', () =>{
  SignUPForm.classList.remove('active');

});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});



$(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});

$(document).ready(function () {
  $('.box-container :lt(3)').show();
  $('.less').hide();
  var items =  9;
  var shown =  3;
  $('.more').click(function () {
      $('.less').show();
      shown = $('.box-container :visible').length+3;
      if(shown< items) {
        $('.box-container :lt('+shown+')').show(300);
      } else {
        $('.gallery :lt('+items+')').show(300);
        $('.more').hide();
      }
  });
  $('.less').click(function () {
      $('.box-container ').not(':lt(3)').hide(300);
      $('.more').show();
      $('.less').hide();
  });
});
