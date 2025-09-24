const img = document.querySelector('.quiz-logo');
const quizBtn = document.querySelector('.button-bg');
const quizHeading = document.querySelector('.start-quiz');
const timerElement = document.querySelector('.timer');

let timeLeft = 30; // seconds

quizBtn.addEventListener('click', () => {
  img.style.display = "none";
  quizBtn.style.display = "none";
});


quizBtn.addEventListener('click', () => {
  quizHeading.classList.add('show');
  document.body.style.backgroundColor = ("#CCE2C2");

  // start timer
  // startTimer();
});

// function startTimer() {
//   timerElement.textContent = `00:30`; // starting point

//   const countdown = setInterval(() => {
//     timeLeft--;
//     timerElement.textContent = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;

//     if (timeLeft <= 0) {
//       clearInterval(countdown);
//       timerElement.textContent = "00:00";
//       alert("⏰ Time's up!");
//     }
//   }, 1000);
// }

setInterval(() => {
  if (timeLeft >= 0) {
    timerElement.textContent = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;
    timeLeft--;
  }
}, 1000);