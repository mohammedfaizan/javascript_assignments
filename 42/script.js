let para = document.createElement("p");
para.innerText =
  "Whatever you want in life, you can have! That's not an advertisement pitch or gimmick. That's the truth. What you want, you have the ability to make it happen. If it's money, you can make a ton of it. If it's fame, you can make that happen as well. Whatever it is, you name it, and it is yours for the taking. However, life has a natural checkpoint that guards the path to your desires, and it’s called testing. ";
para.id = "para";
document.body.appendChild(para);

let changeFont = document.createElement("button");
changeFont.innerText = "change font";
changeFont.id = "change-font";
changeFont.onclick = changeParaText;
document.body.appendChild(changeFont);

let borderImage = document.createElement("button");
borderImage.innerText = "border image";
borderImage.id = "border-image";
borderImage.onclick = addBorder;
document.body.appendChild(borderImage);

function changeParaText() {
  para = document.getElementById("para");
  para.style.color = "red";
  para.style.fontSize = "large";
  para.style.fontFamily = "san-serif";
}

function addBorder() {
  para = document.getElementById("para");
  para.style.border = "1px dotted blue";
}
