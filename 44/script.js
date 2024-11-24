const changeFont = document.getElementById("font");
const changeColor = document.getElementById("color");
const changeFontSize = document.getElementById("size");
const para = document.getElementById("para");

changeFont.addEventListener("click", function (e) {
  para.style.fontFamily = "Arial, sans-serif";
});

changeColor.addEventListener("click", function () {
  para.style.color = "red";
});

changeFontSize.addEventListener("click", function () {
  para.style.fontSize = "x-large";
});
