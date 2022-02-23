function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
$( document ).ready(function(){
  $(".hamburger").on('click', function(){
    $(".menu").toggleClass("menu--open");
  });
});
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 5000);
function tabGallery(imgs){
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

ScrollReveal().reveal('.reveal', { distance: '50px' ,  duration: 750, easing: 'cubic-bezier(.215,.61,.355,1)',  interval: 500 });
ScrollReveal().reveal('.zoom', { duration: 850, easing: 'cubic-bezier(.215,.61,.355,1)',  interval: 200, mobile: false});
