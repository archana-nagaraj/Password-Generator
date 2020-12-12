// Assignment code here

//Collect user inputs and store them in seperate variables
var totalCharacters = Number(prompt("How many characters would you like your password to contain"));
var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
var numericCharacters = confirm("Click OK to confirm including numeric characters");
var specialCharacters = confirm("Click OK to confirm including special characters.");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
