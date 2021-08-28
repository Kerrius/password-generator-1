// set up variables
var enter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;

// password variables
// special characters
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[",  "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercase characters
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase characters
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// choices to select content values of password
var choices;

// create event listener so prompts can generate
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password") = ps;
});

// Start function to generate password
function generatePassword() {
 
  // Ask for user input with prompts
  enter = parseInt(prompt("How many characters would you like in your password? choose between 8 and 128"));
  
  // first if statement for user selection
  if (!enter) {
    alert("this needs a value!");
    } else if(enter <8 || enter > 128) {
     
      // processes users input
      //start user input prompt
      enter = parseInt(prompt("Please choose between 8 and 128!"));
    
    } else {
      
      // continues password sensitivity questions
      confirmNumber = confirm("Would you like numbers in your password?");
      confirmCharacter = confirm("Would you like special characters in your password?");
      confirmUppercase = confirm("Would you like uppercase letters in your passowrd?");
      confirmLowercase = confirm("Would you like lowercase letters in your password?");
    };

    // Else if, if user selects 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      
      choices = alert("You must choose a option!");
    } 
    
    // Else if for 4 positive selections
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase){
      
      choices = special.concat(number, upper, lower);
    }

    // Else if for 3 positve selections
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      
      choices = special.concat(upper, number);
    }
    
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      
      choices = special.concat(lower, number);
    }
    
    else if (confirmLowercase && confirmNumber && confirmUppercase) {
      
      choices = number.concat(lower, upper);
    }

    // Else if for 2 positive selections
    else if (confirmCharacter && confirmNumber) {

      choices = special.concat(number);
    }
    
    else if (confirmCharacter && confirmUppercase) {

      choices = special.concat(upper);
    }
    
    else if (confirmCharacter && confirmlowercase) {

      choices = special.concat(lower);
    }
    
    else if (confirmLowercase && confirmNumber) {

      choices = lower.concat(number);
    }
    
    else if (confirmLowercase && confirmUppercase) {

      choices = lower.concat(upper);
    }
    
    else if (confirmUppercase && confirmNumber) {

      choices = number.concat(upper);
    }

    // else if, if user only selects 1 option
    else if (confirmCharacter) {
      choices = special;
    }
    
    else if (confirmNumber) {
      choices = number;
    }
    
    else if (confirmUppercase) {
      choices = upper;
    }
    
    else if (confirmLowercase) {
      choices = lower;
    }

    // create password varibable
    var password = [];

    // Make the variable selections random
    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
    }
    
    // joins the password array and converts it into a string
    var ps = password.join("");
    UserInput(ps);
    return ps;

    // this displays password in textbox
    function UserInput(ps) {
      document.getElementById("password").textContent = ps;
    }
  
}