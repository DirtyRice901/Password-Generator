
// Password variables of password characters

  var characterLength = 8;
  var choiceArr = [];
  
  var upperCaseArr = ['A', 'B',  'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialArr = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numericArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];  
  
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } 
}

function  generatePassword() {
  // generatePassword based on the prompts
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length)
      password = password + choiceArr[randomIndex];
  }
  return password;
} 

///////////////* Boolean - stores values with two states: true or false*//////////////
function  getPrompts (){
  choiceArr =[];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters")); //NaN

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) { // If false
        alert("Character length has to be a number, between 8 - 128 digits. Try again.");
        return false;
  }

  if (confirm("would you like to add lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("would you like to add uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("would you like to add special characters in your password?")) {
    choiceArr = choiceArr.concat(specialArr);
  }

  if (confirm("would you like to add numbers in your password?")) {
    choiceArr = choiceArr.concat(numericArr);
  }
  return true;

 
}


