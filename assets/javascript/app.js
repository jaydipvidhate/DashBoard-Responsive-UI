let mobile_nav = document.getElementById("mobile_nav");
let nav = document.getElementById("nav");

mobile_nav.addEventListener("mouseover", openNav, false);
mobile_nav.addEventListener("mouseout", closeNav, false);

function openNav() {
  nav.classList.add("nav_wrapper");
  mobile_nav.setAttribute("style", "width:200px");
}
function closeNav() {
  nav.classList.remove("nav_wrapper");
  mobile_nav.setAttribute("style", "width:30px");
}
