const quizzes = [
  {quiz: "4 + 2?", answers: [2, 6, 8], answer: "6"},
  {quiz: "1 + 2?", answers: [4, 8, "정답 없음"], answer: "정답 없음"},
  {quiz: "6 + 7?", answers: [12, 13, 14, 15], answer: "13"},
  {quiz: "3 * 2?", answers: [24, 6], answer: "6"},
  {quiz: "10 / 2?", answers: [6, 9, "정답 없음"], answer: "정답 없음"},
  {quiz: "35 + 2?", answers: [28, 37, "정답 없음"], answer: "37"},
];

let quizIdx = -1;
let clickFlag = 0;

const body = document.querySelector('body');
const quizTitle = document.querySelector('#quizTitle');
const answerList = document.querySelector('.answerList');

const button = document.querySelector('button');

window.onload = createQuiz;

answerList.addEventListener('click', e => {
  if( e.target.tagName === "DIV") return;
  if( clickFlag === 0) return;
  clickFlag = clickFlag - 1;

  e.target.parentNode.childNodes.forEach(span => {
    if( span.innerText === quizzes[quizIdx].answer) span.style.background = "green";
    else span.style.background = "red";
  })

  if( e.target.innerText === quizzes[quizIdx].answer){
    button.innerText = "next";
    body.style.background = "green";
  } else {
    button.innerText = "restart"
    body.style.background = "red";
  }
  button.style.display = 'block';
})

button.addEventListener('click', createQuiz);

function createQuiz() {
  let tmp;
  do {
    tmp = Math.floor(Math.random() * quizzes.length);
  } while(tmp === quizIdx)
  quizIdx = tmp;
  
  clickFlag = clickFlag + 1;

  body.style.backgroundColor = "gray";
  quizTitle.innerText = quizzes[quizIdx].quiz;

  answerList.innerHTML = "";
  quizzes[quizIdx].answers.forEach((item) => {
    const span = document.createElement('span');
    span.innerText = item;

    answerList.appendChild(span);
  })

  button.style.display = "none";
}
