const questions = [
 {
  question: "Which is largest desert in the world?",
  answers: [
   { text : "Kalahari", correct: false},
   { text : "Gobi", correct: false},
   { text : "Sahara", correct: false},
   { text : "Antarctica", correct: true},
  ]
 },
 {
  question: "Which is the smallest country in the world?",
  answers: [
   { text : "Vatican City", correct: true},
   { text : "Bhutan", correct: false},
   { text : "Nepal", correct: false},
   { text : "Srilanka", correct: false},
  ]
 },
 {
  question: "Which is largest animal in the world?",
  answers: [
   { text : "Shark", correct: false},
   { text : "Blue Whale", correct: true},
   { text : "ELephant", correct: false},
   { text : "Giraffe", correct: false},
  ]
 },
 {
  question: "Which is smallest continent in the world?",
  answers: [
   { text : "Asia", corquestionrect: false},
   { text : "Australia", correct: true},
   { text : "Arctic", correct: false},
   { text : "Africa", correct: false},
  ]
 },
];

const quesitonElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
 currentQuestionIndex = 0;
 score = 0;
 nextButton.innerHTML = 'Next';
 showQuestion();
}

const showQuestion = () => {
 resetState();
 let currentQuestion = questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 quesitonElement.innerHTML = questionNo + ". " + currentQuestion.question;

 currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);

  if(answer.correct){
   button.dataset.correct = answer.correct
  }
  button.addEventListener("click", selectAnswer);
 })
}

const resetState = () => {
 nextButton.style.display ="none";
while(answerButtons.firstChild){
 answerButtons.removeChild(answerButtons.firstChild);
}
}

const selectAnswer = (e) => {
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
  selectedBtn.classList.add("correct");
 }else{
  selectedBtn.classList.add("incorrect");
 }
}
startQuiz();