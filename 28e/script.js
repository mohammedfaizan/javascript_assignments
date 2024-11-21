const form = document.getElementById("form");
const h1 = document.getElementById("m1");
const h2 = document.getElementById("m2");
const h3 = document.getElementById("m3");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputS = document.getElementById("input-string");
  const inputS2 = document.getElementById("input-string2");
  const inputP = document.getElementById("input-pos");

  let inputString = inputS.value;

  let inputString2 = inputS2.value;

  let position = parseInt(inputP.value);
  h1.innerHTML = `String Entered: ${inputString}`;

  h2.innerHTML = `Char to be removed Entered: ${trimChar}`;

  h3.textContent = `The string after trim: ${myTrim(inputString, trimChar)}`;
});
