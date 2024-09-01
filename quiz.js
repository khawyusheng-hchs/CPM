const questions = [
  {
    question: "What is web safety?",
    answers: [
      { text: "Answer 1", correct: false },
      { text: "Answer 2", correct: false },
      { text: "Answer 3", correct: true },
      { text: "Answer 4", correct: false },
    ]
  },
  // Add other questions here...
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const modeToggle = document.getElementById('mode-toggle');

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('choice');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert('You have completed the quiz!');
  }
  nextButton.classList.add('hide');
});

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

startQuiz();
