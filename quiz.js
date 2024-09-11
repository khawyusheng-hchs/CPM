const quizData = [
  {
    question: "What is a Distributed Denial-of-Service (DDoS) attack?",
    choices: [
      { text: "An attempt to gain unauthorized access to a system", correct: false },
      { text: "A type of malware that encrypts files", correct: false },
      { text: "An attack that overwhelms a target with traffic", correct: true },
      { text: "A phishing scam", correct: false }
    ]
  },
  {
    question: "How can you protect yourself from brute force attacks?",
    choices: [
      { text: "Use weak passwords", correct: false },
      { text: "Disable two-factor authentication", correct: false },
      { text: "Use strong, unique passwords", correct: true },
      { text: "Click on suspicious links", correct: false }
    ]
  },
  {
    question: "What is SQL injection?",
    choices: [
      { text: "A type of malware that replicates itself", correct: false },
      { text: "A technique used to exploit vulnerabilities in web applications", correct: true },
      { text: "A method of encrypting data", correct: false },
      { text: "A type of phishing scam", correct: false }
    ]
  },
  {
    question: "How can you protect yourself from phishing scams?",
    choices: [
      { text: "Click on links in emails from unknown senders", correct: false },
      { text: "Provide personal information over the phone to strangers", correct: false },
      { text: "Verify the sender's email address", correct: true },
      { text: "Ignore security warnings", correct: false }
    ]
  },
  {
    question: "What is ransomware?",
    choices: [
      { text: "A type of malware that encrypts files", correct: true },
      { text: "A network attack", correct: false },
      { text: "A type of phishing scam", correct: false },
      { text: "A software vulnerability", correct: false }
    ]
  }
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
