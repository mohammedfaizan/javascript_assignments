const form = document.getElementById("form");
const h1 = document.getElementById("m1");
const h2 = document.getElementById("m2");
const h3 = document.getElementById("m3");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputS = document.getElementById("input-string");

  let inputString = inputS.value;

  h1.innerHTML = `String Entered: ${inputString}`;

  h3.textContent = `The string contains: ${myRegex(inputString)}`;
});

function myRegex(str) {
  const hasAlphaNumeric = /[a-z0-9]/i;

  const hasDash = /-/;

  const hasUnderscore = /_/;

  const alphaNumericExists = hasAlphaNumeric.test(str);
  const dashExists = hasDash.test(str);
  const underscoreExists = hasUnderscore.test(str);

  let message = [];

  if (alphaNumericExists) {
    message.push("alpha");
  }
  if (dashExists) {
    message.push("dash");
  }
  if (underscoreExists) {
    message.push("underscore");
  }

  if (message.length > 0) {
    return "string contains " + message.join(", ");
  } else {
    return "String doesn't contain alpha, numeric, dash, or underscore.";
  }
}
