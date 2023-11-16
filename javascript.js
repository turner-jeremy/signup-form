const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passwordInput1 = document.getElementById("password");
const passwordInput2 = document.getElementById("password-confirm")
const submitButton = document.getElementById("submit-button");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const passwordMessage = document.getElementById("message");
const passwordMessage2 = document.getElementById("message2");
const confirmMessage = document.getElementById("confirm-message");
var firstNameValid = false;
var lastNameValid = false;
var emailValid = false;
var phoneValid = false;
var passwordInput1Valid = false;
var passwordInput2Valid = false;
var lCaseValid = false;
var uCaseValid = false;
var numberValid = false;
var lengthValid = false;
var allValid = false;

checkAllValid();

// Validate first name input
firstName.onkeyup = function() {
  if(firstName.validity.valid) {
    firstNameValid = true;
  } else {
    firstNameValid = false;
  }
  checkAllValid();
}


// Validate last name input
lastName.onkeyup = function() {
  if(lastName.validity.valid) {
    lastNameValid = true;
  } else {
    lastNameValid = false;
  }
  checkAllValid();
}

// Validate email input
email.onkeyup = function() {
  if(email.validity.valid) {
    emailValid = true;
  } else {
    emailValid = false;
  }
  checkAllValid();
}

// Change cursor type on hover depending on if submit button is enabled
submitButton.onmouseover = function() {
  allValid ? submitButton.style.cursor = "pointer" : submitButton.style.cursor = "not-allowed";
}
// When the user clicks on the password field, show the message box
passwordInput1.onfocus = function() {
  passwordMessage.style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
passwordInput1.onblur = function() {
  passwordMessage.style.display = "none";
}

// When the user clicks on the password field, show the message box
passwordInput2.onfocus = function() {
  passwordMessage2.style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
passwordInput2.onblur = function() {
  passwordMessage2.style.display = "none";
}

// When the user starts to type something inside the password field
passwordInput1.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(passwordInput1.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid-p");
    letter.classList.add("valid-p");
    lCaseValid = true;
  } else {
    letter.classList.remove("valid-p"); 
    letter.classList.add("invalid-p");
    lCaseValid = false;
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(passwordInput1.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid-p");
    capital.classList.add("valid-p");
    uCaseValid = true;
  } else {
    capital.classList.remove("valid-p");
    capital.classList.add("invalid-p");
    uCaseValid = false;
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(passwordInput1.value.match(numbers)) {
    number.classList.remove("invalid-p");
    number.classList.add("valid-p");
    numberValid = true;
  } else {
    number.classList.remove("valid-p");
    number.classList.add("invalid-p");
    numberValid = false;
  }

  // Validate length
  if(passwordInput1.value.length >= 8) {
    length.classList.remove("invalid-p");
    length.classList.add("valid-p");
    lengthValid = true;
  } else {
    length.classList.remove("valid-p");
    length.classList.add("invalid-p");
    lengthValid = false;
  }

  // Set password input as valid if all requirements are met
  if (lCaseValid && uCaseValid && numberValid && lengthValid) {
    passwordInput1.style.borderColor = "green";
    passwordInput1Valid = true;
  } else {
    passwordInput1.style.borderColor = "red";
    passwordInput1Valid = false;
  }
  checkAllValid();
}

// Check if password confirmation matches first password input
passwordInput2.onkeyup = function() {
  if(passwordInput1.value === passwordInput2.value) {
    confirmMessage.innerHTML = "Passwords match"
    confirmMessage.style.color = "Green"
    passwordInput2.style.borderColor = "green"
    passwordInput2Valid = true;
  } else {
    confirmMessage.value = "Passwords do not match"
    confirmMessage.style.color = "red"
    passwordInput2.style.borderColor = "red"
    passwordInput2Valid = false;
  }
  checkAllValid();
}

// Check if all required inputs are valid and enable submit button if true
function checkAllValid() {
  if (firstNameValid && lastNameValid && emailValid && passwordInput1Valid && passwordInput2Valid) {
    submitButton.style.backgroundColor = "#404dc2"
    allValid = true;
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "lightgrey"
    allValid = false;
    submitButton.disabled = true;
  }
}