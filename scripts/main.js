let navBar = document.getElementById("navBar");
let menu = document.getElementById("hamburger");
let menuIsOpen = false;

window.addEventListener("scroll", () => {
  navBar.style.opacity = this.scrollY > 50 ? "100" : "0";
  navBar.style.pointerEvents = this.scrollY > 50 ? "all" : "none";
});

menu.addEventListener("click", () => {
  menuIsOpen = !menuIsOpen;
  if (menuIsOpen) {
    menu.classList.add("fa-xmark");
    menu.classList.remove("fa-bars");
    navBar.classList.add("mobile");
  } else {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-xmark");
    navBar.classList.remove("mobile");
  }
});

navBar.addEventListener("click", (event) => {
  if (
    event.target.id != "hamburger" &&
    ["SPAN", "I", "A"].indexOf(String(event.target.nodeName)) != -1
  ) {
    menu.click();
  }
});

function returnHome() {
  window.scrollTo({ top: 0 });
}
