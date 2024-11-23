const a = parseInt(prompt("Enter the value of side a:"));
const b = parseInt(prompt("Enter the value of side b:"));
const c = parseInt(prompt("Enter the value of side c:"));

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

let para = document.createElement("h3");
para.innerHTML = `The area of the triangle is: ${area}`;

document.body.appendChild(para);
