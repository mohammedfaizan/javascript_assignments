paras = document.querySelectorAll(".para");
btn = document.querySelector("#btn");
colors = ["red", "green", "blue", "cream", "maroon", "grey"];

let i = 0;
btn.addEventListener("click", function () {
  for (const para of paras) {
    para.style.textAlign = "center";
    para.style.backgroundColor = `${colors[i]}`;
    para.style.color = `${colors[i + 1]}`;
  }
  if (i === 5) {
    i = 0;
  } else {
    i++;
  }
});
