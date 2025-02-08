let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let allQuestion = [
  {
    question: "2+2",
    correct: 4,
    answer: [2, 4, 6, 8],
  },
  {
    question: "4+4",
    correct: 8,
    answer: [2, 4, 6, 8],
  },
];

let currentQuestion = 0;
let coutSuccess = 0;

start.addEventListener("click", startProgram);

function startProgram() {
  main.classList.remove("close");
  result.classList.add("close");
  start.classList.add("close");
  generateQuestion();
}
function generateQuestion() {
  let question = allQuestion[currentQuestion].question;
  main.innerHTML = `<h1>${question}</h1>`;
  let answer = allQuestion[currentQuestion].answer;
  let btn_block = "";

  for (let i of answer) {
    btn_block += `<button onclick = "checkquestion('${i}')">${i}</button>`;
  }
  main.innerHTML += `<nav>${btn_block}</nav>`;
}

function checkquestion(answer) {
  let correct = allQuestion[currentQuestion].correct;
  if (answer == correct) {
    coutSuccess += 1;
  }
  currentQuestion += 1;
  if (allQuestion.length > currentQuestion) {
    generateQuestion();
  } else {
    stopQuiz();
  }
}

function stopQuiz() {
  main.classList.add("close");
  start.classList.remove("close");
  result.classList.remove("close");
  result.innerHTML = `Решено ${coutSuccess} из ${allQuestion.length}`
  coutSuccess = 0
  currentQuestion = 0
}
