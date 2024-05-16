const TIME_LIMIT = 20;

const errorStat = document.querySelector('#errorStat');
const timeStat = document.querySelector('#timeStat');
const accuracyStat = document.querySelector('#accuracyStat');

const textDisplay = document.querySelector('.textDisplay');
const typingBoard = document.querySelector('.typingBoard');

const resetBtn = document.querySelector('button');

const textArray = [
  "Life is full of ups and downs.",
  "Age is no guarantee of maturity.",
  "The only cure for grief is action.",
  "Life is not all beer and skittles.",
  "Being happy never goes out of style.",
  "Live as if you were to die tomorrow.",
  "Where there is a will there is a way.",
  "Youth isn't always all it's touted to be.",
  "Tough times never last, but tough people do.",
  "When you have faults, do not fear to abandon them.",
  "he realized what was happening and told the others.",
  "Only I can change me life, no one can do it for me.",
  "Life is for one generation; a good name is forever.",
  "Life is either a daring adventure or nothing at all.",
  "His own character is the arbiter of every one's fortune.",
  "They must often change who would be constant in happiness or wisdom.",
  "You will face many defeats in life, but never let yourself be defeated."
];

let timeLeft = TIME_LIMIT;

let timer = null;
let currIdx = -1;
let currText = "";
let currInput = "";
let currInputArray = [];
let charSpanArray = [];
const textArraySize = textArray.length;

window.onload = updateText();

resetBtn.addEventListener('click', (e) => {
  updateText();
  
  resetValues();
})

typingBoard.addEventListener('input', (e) => {
  currInput = e.target.value;
  currInputArray = currInput.split('');

  const currInputSize = currInput.length;

  let errors = 0;

  charSpanArray = textDisplay.querySelectorAll('span');
  charSpanArray.forEach((char, idx) => {
    let typedChar = currInputArray[idx];

    if (typedChar === undefined) {
      char.classList.remove('correctChar');
      char.classList.remove('incorrectChar');
    } else if (typedChar === char.innerText) {
      char.classList.add('correctChar');
      char.classList.remove('incorrectChar');
    } else {
      char.classList.remove('correctChar');
      char.classList.add('incorrectChar');

      errors++;
    }
  })

  errorStat.innerText = errors;

  if(currInputSize === 0) accuracyStat.innerText = "100";
  else accuracyStat.innerText = Math.round(((currInputSize - errors) / currInputSize) * 100);

  if(charSpanArray.length === currInputSize){
    finishGame();
  }
});

typingBoard.addEventListener('focus', () => {
  // resetValues();

  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
})

function setCurrentText() {
  let idx;
  do {
    idx = Math.floor(Math.random() * textArraySize);
  } while( idx === currIdx);
  currIdx = idx;
  currText = textArray[currIdx];
}

function updateText() {
  setCurrentText();

  textDisplay.textContent = null;
  currText.split('').forEach(char => {
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    textDisplay.appendChild(charSpan);
  });
  console.log(textDisplay);
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeStat.innerText = timeLeft + "s";
  } else {
    finishGame();
  }
}

function finishGame() {
  clearInterval(timer);

  typingBoard.disabled = true;
  resetBtn.style.display = 'block';
}

function resetValues() {
  timeLeft = TIME_LIMIT;

  typingBoard.disabled = false;
  typingBoard.value = "";
  accuracyStat.innerText = 100;
  timeStat.innerText = timeLeft + "s";
  errorStat.innerText = 0;

  resetBtn.style.display = 'none';
}
