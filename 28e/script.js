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

  if (position === NaN) {
    position = 0;
  }

  h2.innerHTML = `Position where string is to be Entered: ${position}`;

  h3.textContent = `The string after insertion of second string is: ${insertString(
    inputString,
    inputString2,
    position
  )}`;
});

function insertString(string1, string2, pos) {
  resultString = string1.substring(0, pos);

  resultString += ` ${string2}`;

  resultString += ` ${string1.substring(pos, string1.length)}`;

  return resultString;
}
