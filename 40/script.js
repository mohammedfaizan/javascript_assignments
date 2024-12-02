class Doctor {
  constructor(docName, docExp) {
    this.docName = docName;
    this.docExp = docExp;
  }
}

class Nurse extends Doctor {
  constructor(nurseName, nurseExp) {
    super();
    this.nurseName = nurseName;
    this.nurseExp = nurseExp;
  }
}

Doctor.prototype.PatientName = "william";

const form = document.getElementById("form");
const h1 = document.getElementById("m1");
const h2 = document.getElementById("m2");
const h3 = document.getElementById("m3");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const docName = document.getElementById("doc-name").value;
  const docExp = parseInt(document.getElementById("doc-exp").value);
  const nurseExp = parseInt(document.getElementById("nurse-exp").value);
  const nurseName = document.getElementById("nurse-name").value;

  h1.innerHTML = `Values Entered: ${docName}, ${docExp}, ${nurseName}, ${nurseExp}`;
  doctor = new Doctor(docName, docExp);
  nurse = new Nurse(nurseName, nurseExp);
  h3.innerHTML = "The objects created has values: <br>";

  h3.innerHTML += `DocName: ${doctor.docName} <br>DocExp: ${doctor.docExp}<br>NurseName:${nurse.nurseName}<br>nurseExp:${nurse.nurseExp}<br> PatientName:${nurse.PatientName}`;
  console.log(doctor.PatientName);
  console.log(nurse.PatientName);
});
