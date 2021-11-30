// Current Page - I see what it is trying to do, but...
/*
let currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]');
    currentLinks.for(currentLink) {
        link.className += ' .current-link';
    }
*/
/*
// Sticky Navigation Menu & Up Button
//let nav = document.querySelector("nav");
let scrollBtn = document.getElementByClassName("scroll-button");
window.onScroll = function checkScroll() {
    var div = document.getElementById('div');
    var hs = div.scrollWidth > div.clientWidth;
    var vs = div.scrollHeight > div.clientHeight;
    console.log(vs);
  if(vs){
    //nav.classList.add("sticky");
    scrollBtn.style.display="block";
  }else if(!vs){
    //nav.classList.remove("sticky");
    scrollBtn.style.display="none";
  }
}
*/

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
};
