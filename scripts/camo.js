const COLORED_CUBE_SIZE = 8;
const RED_YELLOW_TRESHOLD = 0.7;
const MASK_COVER_FACTOR = 10;
const MASK_COVER_ROTATION = 35;
const BLACK_CUBE_SIZE = 16;
const BLACK_TRESHOLD = 0.6;

let camo = document.getElementById("camo");
camo.style.position = "absolute";
camo.style.display = "flex";
camo.style.justifyContent = "center";
camo.style.alignItems = "center";
camo.style.bottom = "0";
camo.style.width = "100%";
camo.style.height = "10rem";
camo.style.overflow = "hidden";
camo.style.maskImage = "linear-gradient(transparent, black)";
camo.style.maskMode = "alpha";
let fragment = document.createDocumentFragment();
for (let x = 0; x < camo.clientWidth / COLORED_CUBE_SIZE; x++) {
  for (let y = 0; y < camo.clientHeight / COLORED_CUBE_SIZE; y++) {
    let cube = document.createElement("div");
    cube.style.width = cube.style.height = `${COLORED_CUBE_SIZE}px`;
    cube.style.background =
      Math.random() < RED_YELLOW_TRESHOLD ? "var(--red)" : "var(--yellow)";
    cube.style.position = "absolute";
    cube.style.left = `${x * COLORED_CUBE_SIZE}px`;
    cube.style.top = `${y * COLORED_CUBE_SIZE}px`;
    fragment.appendChild(cube);
  }
}
camo.appendChild(fragment);
let mask = document.createElement("div");
mask.style.width = `${camo.clientWidth * MASK_COVER_FACTOR}px`;
mask.style.height = `${camo.clientHeight * MASK_COVER_FACTOR}px`;
mask.style.position = "absolute";
mask.style.transform = `rotate(${MASK_COVER_ROTATION}deg)`;
camo.append(mask);
fragment = document.createDocumentFragment();
for (let x = 0; x < mask.clientWidth / BLACK_CUBE_SIZE; x++) {
  for (let y = 0; y < mask.clientHeight / BLACK_CUBE_SIZE; y++) {
    if (Math.random() < BLACK_TRESHOLD) {
      let cube = document.createElement("div");
      cube.style.width = cube.style.height = `${BLACK_CUBE_SIZE + 1}px`;
      cube.style.background = "var(--black)";
      cube.style.position = "absolute";
      cube.style.left = `${x * BLACK_CUBE_SIZE}px`;
      cube.style.top = `${y * BLACK_CUBE_SIZE}px`;
      fragment.appendChild(cube);
    }
  }
}
mask.appendChild(fragment);
