const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon= document.querySelector(".closeIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "inline";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);