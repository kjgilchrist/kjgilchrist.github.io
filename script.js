// Current Page - I see what it is trying to do, but...
/*
let currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]');
    currentLinks.for(currentLink) {
        link.className += ' .current-link';
    }
*/

// Sticky Navigation Menu & Up Button
//let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
//console.log(scrollBtn);
//let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    //nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    //nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu
let navBar = document.querySelector(".navbar .menu");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("portSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides [slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
