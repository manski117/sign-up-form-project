let tele = document.querySelector('#phone-number');

const pw = document.querySelector('#password');
const pwc = document.querySelector('#confirm-password');
const pwError = document.querySelector('#password-error');
const pwcError = document.querySelector('#confirm-password-error');

pwc.addEventListener("input", function (event) {
      if (pwc.value !== pw.value) {
        pwcError.textContent = 'Passwords do not match';
      } else {
        pwcError.textContent = '';
      }
  //ensures passwords match
    });

tele.addEventListener('keyup', function(e){
  if (event.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
  tele.value += '-';
    //inserts hyphens into the 4th and 8th place in the phone number input box to help user match expected format.
  }
});


function test1(text){
    text += " and googy";
    return text;
}

function test2(num){
    let myNum = num;
    myNum ++;
    return myNum;

}

//no code beyond this line
module.exports = {test1, test2};