var icon = document.getElementById("icon");

icon.onclick = function () {
 document.body.classList.toggle("dark-theme");
 if(document.body.classList.contains("dark-theme")){
  icon.src = "images/sun.png";
 } else{
  icon.src = "images/moon.png";
 }
}

document.getElementById("menu-icon").addEventListener("click", function() {
 document.getElementById("nav-links").classList.toggle("active");
});