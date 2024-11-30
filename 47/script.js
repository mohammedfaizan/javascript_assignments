const leftButton = document.getElementById("left");
const centerButton = document.getElementById("center");
const rightButton = document.getElementById("right");

let paragraphs = document.getElementsByTagName("p");

function textLeftAlign() {
  for (const para of paragraphs) {
    para.style.textAlign = "left";
  }
}

function textCenterAlign() {
  for (const para of paragraphs) {
    para.style.textAlign = "center";
  }
}

function textRightAlign() {
  for (const para of paragraphs) {
    para.style.textAlign = "right";
  }
}
