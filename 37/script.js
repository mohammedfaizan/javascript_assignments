function parseEmployee(inputStr) {
  let cleanedStr = inputStr.replace(/Employee\s*\{/, "").replace(/\}/, "");

  cleanedStr = cleanedStr.replace(/[“”]/g, '"');

  cleanedStr = cleanedStr.replace(/(\w+)\s*:/g, '"$1":');

  cleanedStr = cleanedStr.replace(/'/g, '"');

  cleanedStr = cleanedStr.trim();

  cleanedStr = cleanedStr.replace(/"empId":\s*0*(\d+)/g, '"empId": $1');

  const employee = JSON.parse(`{${cleanedStr}}`);
  return employee;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const employeeInput = document.getElementById("employeeInput").value.trim();

  const m1 = document.getElementById("m1");
  const m2 = document.getElementById("m2");
  const m3 = document.getElementById("m3");

  m1.innerHTML = "";
  m2.innerHTML = "";
  m3.innerHTML = "";

  let employee;

  employee = parseEmployee(employeeInput);

  let propertiesHTML = "<strong>a) Employee Properties:</strong><br>";
  for (const [key, value] of Object.entries(employee)) {
    propertiesHTML += `${key}: ${value}<br>`;
  }
  m1.innerHTML = propertiesHTML;

  const length = Object.keys(employee).length;
  m2.innerHTML = `<strong>b) Length of the Employee object:</strong> ${length}`;

  if ("deptName" in employee) {
    delete employee.deptName;
    m3.innerHTML = `<strong>c) deptName deleted</strong>`;
  } else {
    m3.innerHTML = `<strong>c) deptName property does not exist.</strong>`;
  }
}

document.getElementById("form").addEventListener("submit", handleFormSubmit);

const ca = (bt) => {
  console.log(2037 - bt);
  console.log(this);
};

ca(17);
