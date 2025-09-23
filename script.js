const img = document.querySelector('.quiz-logo');
const quizBtn = document.querySelector('.button-bg');
const quizHeading = document.querySelector('.start-quiz');

quizBtn.addEventListener('click', () => {
  img.style.display = "none";
  quizBtn.style.display = "none";
});


quizBtn.addEventListener('click', () => {
  quizHeading.classList.add('show');
  document.body.style.backgroundColor = ("#CCE2C2");
});