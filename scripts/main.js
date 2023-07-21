let navBar = document.getElementById("navBar");

window.addEventListener("scroll", (event) => {
  navBar.style.opacity = this.scrollY > 50 ? "100" : "0";
  navBar.style.pointerEvents = this.scrollY > 50 ? "all" : "none";
});

function returnHome() {
  window.scrollTo({ top: 0 });
}
