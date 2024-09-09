const pricing = [
  {
    itemId: "t-shirt",
    value: 15,
  },
  {
    itemId: "polo",
    value: 25,
  },
  {
    itemId: "sweat-zipp",
    value: 40,
  },
  {
    itemId: "sweat-zipp-capuche",
    value: 40,
  },
  {
    itemId: "softshell",
    value: 40,
  },
  {
    itemId: "casquette",
    value: 20,
  },
];

let sessionCart = [];
let sessionPrice = 0;
let cartIsOpen = false;
let counter = document.getElementById("counter");
let cart = document.getElementById("cart");
let checkout = document.getElementById("checkout");
let close = document.getElementById("close");
let list = document.getElementById("list");
let displayPrice = document.getElementById("ch-price");

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
    sessionPrice = 0;
    checkout.style.padding = "var(--mobile)";
    checkout.style.paddingTop = "calc(var(--spacer) * 2)";
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
      let uprice = document.createElement("td");
      uprice.innerText = pricing.filter((e) => e.itemId === i.itemId)[0].value;
      let tprice = document.createElement("td");
      tprice.innerText = Number(quantity.innerText) * Number(uprice.innerText);
      sessionPrice += Number(tprice.innerText);
      item.appendChild(name);
      item.appendChild(quantity);
      item.appendChild(size);
      item.appendChild(uprice);
      item.appendChild(tprice);
      list.appendChild(item);
      displayPrice.innerText = `Total à payer: ${sessionPrice} €`;
    });
  } else {
    checkout.style.padding = "0";
    checkout.style.paddingTop = "0";
    checkout.style.opacity = "0";
    checkout.style.height = "0px";
    document.body.classList.remove("stop-scrolling");
    while (list.lastChild && list.lastChild.nodeName === "TR") {
      list.removeChild(list.lastChild);
    }
  }
}

paypal
  .Buttons({
    style: {
      shape: "rect",
      color: "blue",
      label: "paypal",
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: 10,
            },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert("ok");
      });
    },
  })
  .render("#paypal-button-container");

displayCounter();
