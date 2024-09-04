let navBar = document.getElementById("navBar");
let menu = document.getElementById("hamburger");
let menuIsOpen = false;
let isShop = String(window.location.href).includes("shop");

function displayNavBar(condition) {
  navBar.style.opacity = condition ? "100" : "0";
  navBar.style.pointerEvents = condition ? "all" : "none";
}

function returnHome() {
  window.scrollTo({ top: 0 });
}

function waitForInstagramIframe() {
  let interval = setInterval(() => {
    let iframe = document.getElementById("instagram-embed-0");
    if (iframe) {
      iframe.title = "instagram feed iframe";
      clearInterval(interval);
    }
  }, 1);
}

displayNavBar(isShop);

window.addEventListener("scroll", () => {
  displayNavBar(this.scrollY > 50 || isShop);
});

navBar.addEventListener("click", (event) => {
  if (
    navBar.classList.contains("mobile") &&
    event.target.id != "hamburger" &&
    ["SPAN", "I", "A"].indexOf(String(event.target.nodeName)) != -1
  ) {
    menu.click();
  }
});

menu.addEventListener("click", (event) => {
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

waitForInstagramIframe();
