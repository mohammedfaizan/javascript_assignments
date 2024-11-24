const img2 = document.getElementById("img2");

img2.addEventListener("mouseenter", displayToggle);
img2.addEventListener("mouseleave", displayToggle);

function displayToggle(event) {
  let img = event.target;
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
