var passwordLength = null;
var passwordLowerCase = null;
var passwordUpperCase = null;
var passwordNumeric = null;
var passwordSpecialCharacters = null;
var sumParameters = null;
var lowerCaseLettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  '"',
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "\\",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var placeholderArray = []; //Used as an array to add the above parameter arrays as the user is asked if they want to include these types of characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  askPasswordLength();
  askPasswordLowerCase();
  askPasswordUpperCase();
  askPasswordNumeric();
  askPasswordSpecialCharacters();
  validateInput(); //ensures the user selected atleast one parameter
  combineArrays();

  placeholderArray.join();

  password = placeholderArray
    .sort(() => Math.random() - Math.random())
    .slice(0, passwordLength)
    .join(""); //removes commas between string elements

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function askPasswordLength() {
  passwordLength = prompt(
    "How long do you want your password to be? (Pick a value between 8 and 128)"
  );
  while (passwordLength < 8 || passwordLength > 128) {
    askPasswordLength();
  }
}

function askPasswordLowerCase() {
  passwordLowerCase = confirm(
    "Do you want lowercase characters in your password?"
  );
}

function askPasswordUpperCase() {
  passwordUpperCase = confirm(
    "Do you want uppercase characters in your password?"
  );
}

function askPasswordNumeric() {
  passwordNumeric = confirm("Do you want numeric characters in your password?");
}

function askPasswordSpecialCharacters() {
  passwordSpecialCharacters = confirm(
    "Do you want special characters in your password?"
  );
}

function validateInput() {
  alert(
    "You have selected the following parameters for your password:\n Password Length: " +
      passwordLength +
      "\n Contains lowercase characters: " +
      passwordLowerCase +
      "\n Contains uppercase characters: " +
      passwordUpperCase +
      "\n Contains numeric characters: " +
      passwordNumeric +
      "\n Contains special characters: " +
      passwordSpecialCharacters
  );

  if (
    (sumParameters =
      passwordLowerCase +
        passwordUpperCase +
        passwordNumeric +
        passwordSpecialCharacters <
      1)
  ) {
    alert("Please restart and select atleast one parameter.");
    generatePassword();
  } else {
    return;
  }
}

function combineArrays() {
  if (passwordLowerCase) {
    placeholderArray.push(...lowerCaseLettersArray);
  }
  if (passwordUpperCase) {
    placeholderArray.push(...upperCaseLettersArray);
  }
  if (passwordNumeric) {
    placeholderArray.push(...numericArray);
  }
  if (passwordSpecialCharacters) {
    placeholderArray.push(...specialCharactersArray);
  }
}
