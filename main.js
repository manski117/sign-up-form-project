let tele = document.querySelector('#phone-number');

const pw = document.querySelector('#password');
const pwc = document.querySelector('#confirm-password');
const pwError = document.querySelector('#password-error');
const pwcError = document.querySelector('#confirm-password-error');

//function that ensures passwords match
pwc.addEventListener("input", function (event) {
      if (pwc.value !== pw.value) {
        pwcError.textContent = 'Passwords do not match';
      } else {
        pwcError.textContent = '';
      }

    });


//function provides detailed feedback to user as they type their password.
pw.addEventListener("input", function (event){
  //if the pattern of the password is not satisfied, this will be true and the if-statement will be run
  if(pw.validity.patternMismatch){
    let currentValue = pw.value;
    let regExCap = /[A-Z]/g;
    //expect a capital letter
    let regExNum = /[0-9]/g;
    //expect a digit;
    let readout = '';
    // The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
    //So basically this if-statement texts to see if the current value of the text of the input box satisfy the regEx above.
    //Because the listener is triggered by input, it will re-evaluate every time the input is changed by user. 
    if (regExCap.test(currentValue)){
      readout += ''; //If the condition is met, return a blank string so as to not return ANY info to the user.
    } else{
      readout += "Missing a capital letter.";
      readout += "\n";
    }
    
    if (regExNum.test(currentValue)){
      readout += '';
    } else {
      readout += "Missing a number.";
      readout += "\n";
    }
    
    if(currentValue.length > 8){
      readout += '';
    } else{
      readout += "Password must be at least 8 characters."
      readout += "\n";
    }
    pwError.textContent = readout;
    
  } else {
    pwError.textContent = '';
  }
});

//Assists in telephone number format
tele.addEventListener('keyup', function(e){
  if (event.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
  tele.value += '-';
    //inserts hyphens into the 4th and 8th place in the phone number input box to help user match expected format.
  }
});

