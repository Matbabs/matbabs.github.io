const navBar = document.getElementById("navBar");
const menu = document.getElementById("hamburger");
const menuIsOpen = false;

window.addEventListener("scroll", () => {
  navBar.style.opacity = this.scrollY > 50 ? "100" : "0";
  navBar.style.pointerEvents = this.scrollY > 50 ? "all" : "none";
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

function returnHome() {
  window.scrollTo({ top: 0 });
}

function waitForInstagramIframe() {
  const interval = setInterval(() => {
    const iframe = document.getElementById("instagram-embed-0");
    if (iframe) {
      iframe.title = "instagram feed iframe";
      clearInterval(interval);
    }
  }, 1);
}
waitForInstagramIframe();
