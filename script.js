// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number🎉';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // when player didnt input number
    // document.querySelector('.message').textContent = '⛔ no number!';
    displaymessage('⛔ no number!');
  } else if (guess === secretnumber) {
    // when player win
    displaymessage('correct number🎉!');
    // document.querySelector('.message').textContent = 'correct number🎉!';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    //
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? 'Too high 📈!' : 'Too low 📉!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('💥u loss the game!');
      // document.querySelector('.message').textContent = '💥u loss the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretnumber) {
  //   // when guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high 📈!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥u loss the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretnumber) {
  //   // when guess is too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 📉!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥u loss the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  secretnumber = Math.trunc(Math.random() * 20) + 1;
});
