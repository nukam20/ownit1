const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.nav')

menuBtn.addEventListener('click', function(e){
  headerNav.style.display = headerNav.style.display === 'block' ? "none" : "block"; 
});