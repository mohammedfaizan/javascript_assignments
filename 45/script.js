const link = document.getElementById("myLink");

let p = document.createElement("p");
p.innerText = `the value of the link is: ${link.getAttribute("href")}`;
document.body.appendChild(p);

let p2 = document.createElement("p");
p2.innerText += `the value of the link is: ${link.getAttribute("hreflang")}`;
document.body.appendChild(p2);

let p3 = document.createElement("p");
p3.innerText += `the value of the link is: ${link.getAttribute("rel")}`;
document.body.appendChild(p3);

let p4 = document.createElement("p");
p4.innerText += `the value of the link is: ${link.getAttribute("target")}`;
document.body.appendChild(p4);

let p5 = document.createElement("p");
p5.innerText += `the value of the link is: ${link.getAttribute("type")}`;
document.body.appendChild(p5);
