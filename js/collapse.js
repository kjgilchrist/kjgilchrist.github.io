var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapse-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      //coll.classList.remove(" fa-caret-down");
      //coll.classList.add(" fa-caret-right");
    } else {
      content.style.display = "block";
      //coll.classList.remove(" fa-caret-right");
      //coll.classList.add(" fa-caret-down");
    }
  });
}
