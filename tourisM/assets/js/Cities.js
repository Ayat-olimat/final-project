
let linkAmmanCity =document.getElementById('link-AmmanPage');
let KaramPage=document.getElementById('KaramFamilyBtn-page');

linkAmmanCity.addEventListener('click', ()=>{
    window.location.href = "http://localhost:3001/Governorate";
  
  });
  KaramPage.addEventListener('click', ()=>{
    window.location.href ="http://localhost:3001/KaramFamily";
  });