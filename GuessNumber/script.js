 'use strict';
// We create a secret number for guessing and with Math.trunc method we delete the decimals , also with Math.random method we create a new random number all the time.
let randomNumber = Math.trunc(Math.random() * 20) +1;
console.log(randomNumber);
//declare the maximum score and the first highscore which is 20
let score = 20;
let highscore = 0;

const DisplayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// Create an click listener 
document.querySelector('.check').addEventListener('click',function() {
  //Declare the guess number and set it in number so you don't get back a string
  const guessNumber = Number(document.querySelector('.guess').value);
  //Create a if statetment for case the input is empty and click the check button
  if (!guessNumber) {
    DisplayMessage('The field is empty!');
  } 
  // create an if with the users number equal to random number so he won.
  else if(guessNumber === randomNumber) {
    DisplayMessage('Congratulation you won!!');
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '35rem';
    //Declare the highscore so when the score is highter then the highscore the highscore changes
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if(guessNumber !== randomNumber) {
    if (score > 1) {
       DisplayMessage ( guessNumber > randomNumber ? 'Go Lower' : 'Go Higher') ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      DisplayMessage('You have lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
// Create an Again button so we reset after the user won or lose
  document.querySelector('.again').addEventListener('click', function() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    DisplayMessage('start guessing....');
   })
})




