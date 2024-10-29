
const about = document.querySelector("#about");
const cardGrid = document.querySelector("#work");
const aboutLink = document.querySelector("#link-about");
const workLink = document.querySelector("#link-work");
const contentLink = document.querySelector("#link-content");
const linkAll = document.querySelectorAll(".hover-link");
const backBtn = document.querySelectorAll(".back-link");

for (const link of linkAll) {
    link.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
      
        // When link pressed, toggle content to show and card grid to hide.
        const linkHref = link.getAttribute("href");
        const content = document.querySelector(linkHref);

        about.classList.toggle("d-none");
        cardGrid.classList.toggle("d-none");
        content.classList.toggle("d-none");
        aboutLink.classList.toggle("d-none");
        workLink.classList.toggle("d-none");
        contentLink.classList.toggle("d-none");

        console.log('Link clicked: ' + linkHref);
      });     
}

for (const btn of backBtn) {
    btn.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
      
        // When link pressed, toggle content to show and card grid to hide.
        const linkHref = btn.getAttribute("href");
        const content = document.querySelector(linkHref);

        about.classList.toggle("d-none");
        cardGrid.classList.toggle("d-none");
        content.classList.toggle("d-none");
        aboutLink.classList.toggle("d-none");
        workLink.classList.toggle("d-none");
        contentLink.classList.toggle("d-none");

        console.log('Link clicked: ' + linkHref);
      });     
}