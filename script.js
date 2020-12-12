// Assignment code here

//Collect user inputs and store them in seperate variables
var totalCharacters = Number(prompt("How many characters would you like your password to be. Choose a number between 8 and 128."));
while ((totalCharacters < 8 || totalCharacters > 128) || isNaN(totalCharacters))
{
  totalCharacters = window.prompt("Please choose between 8 to 128 chars");
}
var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
var numericCharacters = confirm("Click OK to confirm including numeric characters");
var specialCharacters = confirm("Click OK to confirm including special characters");

while ((uppercaseCharacters === false )  && (lowercaseCharacters === false) && (numericCharacters ===false) && (specialCharacters=== false)) 
{
  alert("At least one character type should be selected to generate the password. Please go through the options again!")
  uppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
  lowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
  numericCharacters = confirm("Click OK to confirm including numeric characters");
  specialCharacters = confirm("Click OK to confirm including special characters");
}

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
  var passwordgenTemp = [];
  for (var i=0; i < totalCharacters; i++){
    passwordgenTemp.push(charSetValues[Math.floor(Math.random() * charSetValues.length)]);
    // concatenating all the elements in the array
    passwordGen = passwordgenTemp.join('');
  }
  return passwordGen;
}

//generatePassword();

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