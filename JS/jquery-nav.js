$(document).ready(function(){
    $('.burgermenu').on('click', function(){
        console.log("clicked");
        $('.mobile-nav').toggle();
    })
});

const links = document.querySelectorAll(".mobile-nav a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}