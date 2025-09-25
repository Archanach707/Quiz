const img = document.querySelector('.quiz-logo');
const quizBtn = document.querySelector('.button-bg');
const quizHeading = document.querySelector('.start-quiz');
const timerBackground = document.querySelector('.timer-wrapper');
const timerElement = document.querySelector('.timer');
const questions = document.querySelectorAll('.question');
const answerBlocks = document.querySelectorAll('.answer-block');
const nextBtn = document.getElementById('nextBtn');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

let timeLeft = 30; 

// Quiz start
quizBtn.addEventListener('click', () => {
  img.style.display = "none";
  quizBtn.style.display = "none";
  quizHeading.classList.add('show');
  document.body.style.backgroundColor = "#CCE2C2";
  startTimer();
});

// Timer function
function startTimer() {
  timerElement.textContent = `00:30`; 

  const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;
    if (timeLeft === 15) {
      document.body.style.backgroundColor = "#E4E5C7";
      timerElement.style.backgroundColor = "#C5B1006E";
      timerBackground.style.backgroundColor = "#C5B1006E";
      nextBtn.style.color = "#C58800";
    }

    if (timeLeft === 5) {
      document.body.style.backgroundColor = "#DBADAD";
      timerElement.style.backgroundColor = "#C50C006E";
      timerBackground.style.backgroundColor = "#C50C006E";
      nextBtn.style.color = "#C50000";
      clearInterval(countdown);
      timerElement.textContent = "00:00";
    }
  }, 1000);
}

let crtIndex = 0;
// Show first question
questions[crtIndex].classList.add('active');
answerBlocks[crtIndex].classList.add('active');

// Handle answer clicks
answerBlocks.forEach((block) => {
  const options = block.querySelectorAll('.options');
  options.forEach(option => {
    option.addEventListener('click', () => {
      if(option.dataset.correct === "true") {
        correctSound.currentTime = 0;
        correctSound.play();
        option.style.borderColor = "#35BD3A";
        option.style.borderWidth = "2px";

        setTimeout(() => {
          questions[crtIndex].classList.remove('active');
          answerBlocks[crtIndex].classList.remove('active');

          crtIndex++;
          if(crtIndex < questions.length) {
            questions[crtIndex].classList.add('active');
            answerBlocks[crtIndex].classList.add('active');
          } else {
            alert("🎉 Quiz completed!");
          }
        }, 500);

      } else {
        wrongSound.currentTime = 0;
        wrongSound.play();
        option.style.borderColor = "#FF7A7A";
        option.style.borderWidth = "2px";
      }
    });
  });
});
