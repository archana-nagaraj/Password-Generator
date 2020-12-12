// Assignment code here

//Collect user inputs and store them in seperate variables
var totalCharacters = Number(prompt("How many characters would you like your password to contain"));
var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
var numericCharacters = confirm("Click OK to confirm including numeric characters");
var specialCharacters = confirm("Click OK to confirm including special characters.");

// function to generate password based on user inputs
function generatePassword() {
  var charSetValues= [];
  var passwordGen;
  if (lowercaseCharacters){
    charSetValues.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (uppercaseCharacters){
    charSetValues.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (numericCharacters){
    charSetValues.push("0123456789");
  }
  if(specialCharacters) {
    charSetValues.push(" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"); //Resource: The OWASP® Foundation site
  }
  // concatenating all the elements in the array
  charSetValues = charSetValues.join('');
  var passwordgenarr = [];
  for (var i=0; i < totalCharacters; i++){
    passwordgenarr.push(charSetValues[Math.floor(Math.random() * charSetValues.length)]);
    // concatenating all the elements in the array
    var passwordGen = passwordgenarr.join('');
  }
  return passwordGen;
}

generatePassword();

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