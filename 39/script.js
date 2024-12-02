function Person(name, age, phNo) {
  this.name = name;
  this.age = age;
  this.phNo = phNo;
}

const form = document.getElementById("form");
const h1 = document.getElementById("m1");
const h2 = document.getElementById("m2");
const h3 = document.getElementById("m3");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputName = document.getElementById("input-name").value;
  const inputAge = parseInt(document.getElementById("input-age").value);
  const inputPhoneNo = parseInt(document.getElementById("input-ph-no").value);
  const inputLastName = document.getElementById("input-last-name").value;

  h1.innerHTML = `Values Entered: ${inputName}, ${inputAge}, ${inputPhoneNo}`;
  person = new Person(inputName, inputAge, inputPhoneNo);

  Person.prototype.lastName = inputLastName;
  h3.innerHTML = "The object created has values: <br>";

  h3.innerHTML += `FirstName: ${person.name} <br>LastName: ${person.lastName}<br>Age:${person.age}<br>PhoneNo:${person.phNo}`;
  console.log(person);
});
