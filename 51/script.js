document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let genderMale = document.getElementById("male").checked;
    let genderFemale = document.getElementById("female").checked;
    let phone = document.getElementById("phone").value;
    let agree = document.getElementById("agree").checked;

    if (username.length < 8) {
      alert("Username must be at least 8 characters long.");
      return;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      alert(
        "Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!genderMale && !genderFemale) {
      alert("Please select a gender.");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (!agree) {
      alert("You must agree to the terms of service and privacy policy.");
      return;
    }

    alert("Registration Successful!");
  });
