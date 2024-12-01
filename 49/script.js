const paraBtn = document.getElementById("create-para");
const navBtn = document.getElementById("create-nav");
const strongBtn = document.getElementById("create-strong");

paraBtn.addEventListener("click", function (e) {
  let para = document.createElement("p");
  para.innerText = "this is a para";
  document.body.append(para);
});

strongBtn.addEventListener("click", function (e) {
  let para = document.createElement("strong");
  para.innerText = "this is a para";
  document.body.append(para);
});

navBtn.addEventListener("click", function (e) {
  let nav = document.createElement("nav");
  let link1 = document.createElement("a");
  link1.href = "https://www.google.com/";
  link1.innerText = "Google";
  nav.appendChild(link1);

  br = document.createElement("br");
  nav.appendChild(br);

  let link2 = document.createElement("a");
  link2.href = "https://example.com/";
  link2.innerText = "Example";

  nav.appendChild(link2);

  document.body.appendChild(nav);
});
