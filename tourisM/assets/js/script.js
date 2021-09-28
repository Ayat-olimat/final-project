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

$(document).ready(function() {
  var counties = [
    {name:'County 1',value:1},
    {name:'County 2',value:2},
    {name:'County 3',value:3}
  ]; // sample array of counties
  
  var cities = [
    {countyId:1, value:1, name:'City 1'},
    {countyId:1, value:2, name:'City 2'},
    {countyId:2, value:3, name:'City 3'},
    {countyId:2, value:4, name:'City 4'},
    {countyId:3, value:5, name:'City 5'},
    {countyId:3, value:6, name:'City 6'}
  ]; // sample array of cities
  
  // gets a reference to the county selection list
  var countyDropdown = $("#county"); 
  
  // gets a reference to the city selection list
  var cityDropdown = $("#city");
  
  // gets a reference to the go button
  var goButton = $("#gobutton");
  
  // attaches and event to the go button to handle a click event
  goButton.click(function(e) {
    e.preventDefault();
    alert(cityDropdown.val());
  });
  
  // adds the counties dynamically to the count select lsit
  $(counties).each(function() {
      var county = this; // county will now be the item in the for-each loop
      $("<option/>") // create a dynamic option element
            .attr("value",county.value) // set the value of the element
            .text(county.name) // set the test of the element
            .appendTo(countyDropdown); // add the element to the county select list
  });
  
  // adds and event listener for changes to the county selection list
  countyDropdown.change(function(e) {
    // filter out cities that are not attached to the county
    var cityList = cities.filter(function(city) {
      if(city.countyId==countyDropdown.val()){
        return city;
      }
    });
    
    // reset the city selection list
    cityDropdown.html("<option value=''>Select city</option></select>");
    
    // iterate over the cities to add them as options to the city selection list
    $(cityList).each(function(){
      var city = this; // the current city in the list
      $("<option/>") // create a dynamic option element 
        .attr("value",city.text) // set the value of the element
        .text(city.name) // set the text of the element
        .appendTo(cityDropdown); // attach the element to the city selection list
    });
  });
});







