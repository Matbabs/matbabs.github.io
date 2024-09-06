let sessionCart = [];
let cartIsOpen = false;
let counter = document.getElementById("counter");
let cart = document.getElementById("cart");
let checkout = document.getElementById("checkout");
let close = document.getElementById("close");
let list = document.getElementById("list");

function displayCounter() {
  counter.style.display = sessionCart.length > 0 ? "block" : "none";
  let value = 0;
  sessionCart.forEach((i) => {
    value += Number(i.quantity);
  });
  counter.innerText = String(value);
}

function addToCart(itemId, quantityId, sizeId) {
  let quantity = document.getElementById(quantityId).value;
  let size = document.getElementById(sizeId).value;
  sessionCart.push({ itemId, quantity, size });
  displayCounter();
}

function displayCart() {
  cartIsOpen = !cartIsOpen;
  if (cartIsOpen) {
    checkout.style.padding = "calc(var(--spacer) * 2)";
    checkout.style.opacity = "1";
    checkout.style.height = "100dvh";
    document.body.classList.add("stop-scrolling");

    sessionCart.forEach((i) => {
      let item = document.createElement("tr");
      let name = document.createElement("td");
      name.innerText = i.itemId;
      let quantity = document.createElement("td");
      quantity.innerText = i.quantity;
      let size = document.createElement("td");
      size.innerText = i.size;
      item.appendChild(name);
      item.appendChild(quantity);
      item.appendChild(size);
      list.appendChild(item);
    });
  } else {
    checkout.style.padding = "0";
    checkout.style.opacity = "0";
    checkout.style.height = "0px";
    document.body.classList.remove("stop-scrolling");
  }
}

displayCounter();
