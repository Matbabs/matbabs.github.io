let menuIsOpened = false;

const toggle = document.querySelector(".menu-toggle");
const toggleOpen = toggle.querySelector(".open");
const toggleClose = toggle.querySelector(".close");
const menuItem = document.querySelector(".menu-item");

toggleMenu();

toggle.addEventListener("click", () => {
  menuIsOpened = !menuIsOpened;
  toggleMenu();
});

function toggleMenu() {
  if (!menuIsOpened) {
    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
    menuItem.classList.remove("open");
  } else {
    toggleOpen.style.display = "none";
    toggleClose.style.display = "block";
    menuItem.classList.add("open");
  }
}

const allLinks = document.querySelectorAll("a");

allLinks.forEach((e) =>
  e.addEventListener("click", () => {
    menuIsOpened = false;
    toggleMenu();
  })
);

function scrollToTop() {
  window.scrollTo(0, 0);
}

const folderPopUp = document.querySelector(".folder-popup");
const folderEmbed = document.querySelector("embed");
const folderLoad = document.querySelector(".load");

function openFolder() {
  folderLoad.style.opacity = "1";
  folderPopUp.style.bottom = "0";
  setTimeout(() => {
    folderLoad.style.opacity = "0";
    folderEmbed.style.opacity = "1";
  }, 1000);
}

function closeFolder() {
  folderPopUp.style.bottom = "100vh";
  folderEmbed.style.opacity = "0";
}
