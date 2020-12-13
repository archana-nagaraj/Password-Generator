// Assignment code here

//function to generate the password
function generatePassword(){
  var len = totallen();
  var lowercaseCharacters = includeLowercase();
  var uppercaseCharacters = includeUppercase();
  var numericCharacters = includeNumeric();
  var specialCharacters = includeSpecialChars();
  var charSetValues = [];
  var passwordGen;
  // ensure the user has selected atleast one char type
    while ((lowercaseCharacters === false )  && (uppercaseCharacters === false) && (numericCharacters ===false) && (specialCharacters === false)) 
      {
        alert("At least one character type should be selected to generate the password. Please go through the options again!")
        lowercaseCharacters = confirm("Click 'OK' if you need to include 'Lowercase' characters in your password.");
        uppercaseCharacters = confirm("Click 'OK' if you need to include 'Uppercase' characters in your password.");
        numericCharacters = confirm("Click 'OK' if you need to include 'Numeric' characters in your password.");
        specialCharacters = confirm("Click 'OK' if you need to include 'Special' characters in your password.");
      }
      //assigning the charsetvalues for each charType
    if (lowercaseCharacters){
      charSetValues.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (uppercaseCharacters){
      charSetValues.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (numericCharacters){
      charSetValues.push("0123456789");
    }
    if (specialCharacters) {
      charSetValues.push(" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"); 
    }
  // concatenating all the elements in the array
  charSetValues = charSetValues.join('');
  var passwordgenTemp = [];
  //generating the random output based on the user input values
  for (var i=0; i < len; i++){
    passwordgenTemp.push(charSetValues[Math.floor(Math.random() * charSetValues.length)]);
    // concatenating all the elements in the array
    passwordGen = passwordgenTemp.join('');
  }
  return passwordGen;
}

// function to collect and validate the password total length 
function totallen(){
  var totalCharacters = Number(prompt("Choose the password length to be at least 8 characters and no more than 128 characters"));
  while ((totalCharacters < 8 || totalCharacters > 128) || isNaN(totalCharacters)){
    totalCharacters = window.prompt("Choose a length between 8 to 128 chars ");
  }
  return totalCharacters;
}
//function to check to include uppercase characters in the password
function includeUppercase(){
var uppercaseCharacters = confirm("Click 'OK' if you need to include 'Uppercase' characters in your password.");
return uppercaseCharacters;
}
//function to check to include lowercase characters in the password
function includeLowercase(){
var lowercaseCharacters = confirm("Click 'OK' if you need to include 'Lowercase' characters in your password.");
return lowercaseCharacters;
}
//function to check to include numeric characters in the password
function includeNumeric(){
var numericCharacters = confirm("Click 'OK' if you need to include 'Numeric' characters in your password.");
return numericCharacters;
}
//function to check to include special characters in the password
function includeSpecialChars(){
var specialCharacters = confirm("Click 'OK' if you need to include 'Special' characters in your password.");
return specialCharacters;
}

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
