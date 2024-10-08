const questions = [
  {
    question: "What is a Distributed Denial-of-Service (DDoS) attack?",
    answers: [
      { text: "An attempt to gain unauthorized access to a system", correct: false },
      { text: "A type of malware that encrypts files", correct: false },
      { text: "an attempt to make an online service unavailable by overwhelming it with traffic from multiple sources", correct: true },
      { text: "A phishing scam", correct: false },
    ]
  },
  {
    question: "How can you protect yourself from brute force attacks?",
    answers: [
      { text: "Use weak passwords", correct: false },
      { text: "Disable two-factor authentication", correct: false },
      { text: "Click on suspicious links", correct: false },
      { text: "Use strong, unique passwords", correct: true },
    ]
  },
    {
    question: "What is SQL injection?",
    answers: [
      { text: "A type of malware that replicates itself", correct: false },
      { text: "A technique used to exploit vulnerabilities in web applications", correct: true },
      { text: "A type of phishing scam", correct: false },
      { text: "A method of encrypting data", correct: false },
    ]
  },
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const modeToggle = document.getElementById('mode-toggle');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0; // Initialize score
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
    score++;
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
    // Show final score
    alert(`Quiz completed! Your score is: ${score}/${questions.length}`);
    scoreElement.textContent = `Your score: ${score}/${questions.length}`; // Display score in the HTML
  }
  nextButton.classList.add('hide');
});

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

startQuiz();
