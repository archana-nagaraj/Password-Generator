// Assignment code here

// function to collect/validate the password total length 
function totallen(){
    var totalCharacters = Number(prompt("How many characters would you like your password to be. Choose a number between 8 and 128."));
    while ((totalCharacters < 8 || totalCharacters > 128) || isNaN(totalCharacters)){
      totalCharacters = window.prompt("Please choose between 8 to 128 chars");
    }
    return totalCharacters;
  }

  //function to check to include uppercase characters in the password
function includeUppercase(){
  var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
  return uppercaseCharacters;
}
  //function to check to include lowercase characters in the password
function includeLowercase(){
  var lowercaseCharacters = confirm("Click OK to confirm including lowercaseCharacters characters");
  return lowercaseCharacters;
}
 //function to check to include numeric characters in the password
function includeNumeric(){
  var numericCharacters = confirm("Click OK to confirm including numericCharacters characters");
  return numericCharacters;
}
 //function to check to include special characters in the password
function includeSpecialChars(){
  var specialCharacters = confirm("Click OK to confirm including specialCharacters characters");
  return specialCharacters;
}

//function to generate the password
function generatePassword(){
  var len = totallen();
  var u = includeUppercase();
  var l = includeLowercase();
  var n = includeNumeric();
  var s = includeSpecialChars();
  var charSetValues= [];
  var passwordGen;
//validating the charType inputs for having the user select atleast one type 
  while ((u === false )  && (l === false) && (n ===false) && (s=== false)) 
    {
      alert("At least one character type should be selected to generate the password. Please go through the options again!")
      u = confirm("Click OK to confirm including uppercase characters");
      l = confirm("Click OK to confirm including lowercase characters");
      n = confirm("Click OK to confirm including numeric characters");
      s = confirm("Click OK to confirm including special characters");
    }
    //assigning the charsetvalues for each charType
  if (l){
    charSetValues.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (u){
    charSetValues.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (n){
    charSetValues.push("0123456789");
  }
  if(s) {
    charSetValues.push(" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"); //Resource: The OWASP® Foundation site
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
