const form = document.getElementById("form");
const h1 = document.getElementById("m1");
const h2 = document.getElementById("m2");
const h3 = document.getElementById("m3");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputS = document.getElementById("input-string");
  const inputT = document.getElementById("input-trim");

  let inputString = inputS.value;

  let trimChar = inputT.value;

  h1.innerHTML = `String Entered: ${inputString}`;

  h2.innerHTML = `Char to be removed Entered: ${trimChar}`;

  h3.textContent = `The string after trim: ${myTrim(inputString, trimChar)}`;
});

function myTrim(str, char) {
  const escapedChars = char.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

  const regex = new RegExp(`[${escapedChars}]`, "g");

  return str.replace(regex, "");
}
