
const cardGrid = document.querySelector("#card-grid");
const linkAll = document.querySelectorAll(".hover-link");
const backBtn = document.querySelectorAll(".back-link");

for (const link of linkAll) {
    link.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
      
        // When link pressed, toggle content to show and card grid to hide.
        const linkHref = link.getAttribute("href");
        const content = document.querySelector(linkHref);

        cardGrid.classList.toggle("d-none");
        content.classList.toggle("d-none");

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

        cardGrid.classList.toggle("d-none");
        content.classList.toggle("d-none");

        console.log('Link clicked: ' + linkHref);
      });     
}