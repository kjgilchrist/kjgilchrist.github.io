// Random delay for square/color animation.

var delay1 = document.querySelector('color-delay-1');
var delay2 = document.querySelector('color-delay-2');
var delay3 = document.querySelector('color-delay-3');
var delay4 = document.querySelector('color-delay-4');
var delay5 = document.querySelector('color-delay-5');
var delay6 = document.querySelector('color-delay-6');
var delay7 = document.querySelector('color-delay-7');
var delay8 = document.querySelector('color-delay-8');
var delay9 = document.querySelector('color-delay-9');

function setADelay() {
    delay1.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay2.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay3.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay4.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay5.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay6.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay7.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay8.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
    delay9.style.animationDuration = Math.floor(Math.random() * 60 + 1) + 's';
}

//setInterval(setADelay, 60000);