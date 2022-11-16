const speed = 4;
const cat = document.getElementById("cat");
cat.style = "position: absolute; top: 0; left: 0;";
cat.style.transition = "opacity 250ms";
cat.childNodes[1].style = "width: 140px";
const mousePosition = { x: 0, y: 0 };
const cursor = document.getElementById("cursor");
cursor.style = "position: absolute; top: 0; left: 0; width: 25px;";

window.addEventListener(
  "mousemove",
  (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
  },
  false
);

function update() {
  requestAnimationFrame(update);
  const time = new Date().getTime() / 200;
  const catPosition = cat.getBoundingClientRect();
  const actualX = catPosition.left;
  const actualY = catPosition.top;
  const targetX = mousePosition.x - cat.clientWidth / 2;
  const targetY = mousePosition.y - cat.clientWidth / 2;
  const dist = Math.sqrt(
    Math.pow(targetY - actualY, 2) + Math.pow(targetX - actualX, 2)
  );
  const angle = Math.round(
    (Math.atan2(targetY - actualY, targetX - actualX) * 180) / Math.PI
  );
  cursor.style.left = mousePosition.x - cursor.clientWidth / 2 + "px";
  cursor.style.top = mousePosition.y - cursor.clientHeight / 2 + "px";
  if (dist > cat.clientWidth / 5) {
    cat.style.opacity = "1";
    cat.style.top = `${
      catPosition.top + ((targetY - actualY) / dist) * speed
    }px`;
    cat.style.left = `${
      catPosition.left + ((targetX - actualX) / dist) * speed
    }px`;
    const isLeftSide = cat.offsetLeft < mousePosition.x - cat.clientWidth / 2;
    cat.childNodes[1].style.transform = `scaleX(${
      isLeftSide ? -1 : 1
    }) rotate(${angle * (isLeftSide ? -1 : 1) + (isLeftSide ? 0 : 180)}deg)`;
    cursor.style.transform = `scale(${2 + Math.sin(time) / 4}) rotate(${
      angle + 180
    }deg)`;
  } else {
    cat.style.opacity = "0";
  }
}

update();
