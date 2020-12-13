// Assignment code here

// function to collect and validate the password total length 
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
      lowercaseCharacters = confirm("Do you want to include Lowercase characters in the password");
      uppercaseCharacters = confirm("Do you want to include Uppercase characters in the password");
      numericCharacters = confirm("Do you want to include Numeric characters in the password");
      specialCharacters = confirm("Do you want to include Special characters in the password");
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
debugger;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("password written ... inside writepassword()")
}
console.log("Password written");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
