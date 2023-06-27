let isMenuOpen = false;

const menu = document.querySelector(".links");
const toggleIcon = document.querySelector("#toggle-icon");

function toggleMenu() {
  if (!isMenuOpen) {
    menu.classList.add("open");
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-close");
  } else {
    menu.classList.remove("open");
    toggleIcon.classList.add("fa-bars");
    toggleIcon.classList.remove("fa-close");
  }
  isMenuOpen = !isMenuOpen;
}
