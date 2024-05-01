const quizzes = [
  {quiz: "4 + 2?", answers: [2, 6, 8], answer: "6"},
  {quiz: "1 + 2?", answers: [4, 8, "정답 없음"], answer: "정답 없음"},
  {quiz: "6 + 7?", answers: [12, 13, 14, 15], answer: "13"},
  {quiz: "3 * 2?", answers: [24, 6], answer: "6"},
  {quiz: "10 / 2?", answers: [6, 9, "정답 없음"], answer: "정답 없음"},
  {quiz: "35 + 2?", answers: [28, 37, "정답 없음"], answer: "37"},
];

let quizIdx = -1;

const body = document.querySelector('body');
const quizTitle = document.querySelector('#quizTitle');
const answerList = document.querySelector('.answerList');

const button = document.querySelector('button');

window.onload = function() {
  quizIdx = Math.floor(Math.random() * quizzes.length);
  
  quizTitle.innerText = quizzes[quizIdx].quiz;

  answerList.innerHTML = "";
  quizzes[quizIdx].answers.forEach((item) => {
    const span = document.createElement('span');
    span.innerText = item;

    answerList.appendChild(span);
  })
}