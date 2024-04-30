const POSSIBLE = 1;
const LAST_ROUND = 0;
const IMPOSSIBLE = -1;

const imgLists = ["images/rock.png", "images/scissors.png", "images/paper.png"]

const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const restCount = document.getElementById('restCount');
const result = document.getElementById('result');
const playerImg = document.getElementById('playerImg');
const computerImg = document.getElementById('computerImg');

let playerScoreVal = 0;
let computerScoreVal = 0;
let restCountVal = 10;

const buttonList = document.getElementById('buttonList');

buttonList.addEventListener('click', (e) => {
  const status = checkRestCount();
  if(status === IMPOSSIBLE) return;

  const playerInput = e.target.innerText === '바위' ? 0 : 
                      e.target.innerText === '가위' ? 1 :
                      e.target.innerText === '보' ? 2 : -1;
  
  if(playerInput === -1) return;
  
  restCountVal = restCountVal - 1;
  restCount.innerText = restCountVal;

  const computerInput = Math.floor(Math.random() * 3);

  playerImg.src = imgLists[playerInput];
  computerImg.src = imgLists[computerInput];

  const resultVal = playerInput - computerInput;

  if (resultVal == -1 || resultVal == 2){
    playerScoreVal = playerScoreVal + 1;
    playerScore.innerText = playerScoreVal;
  } else if (resultVal == 1 || resultVal == -2) {
    computerScoreVal = computerScoreVal + 1;
    computerScore.innerText = computerScoreVal;
  }

  if(status === LAST_ROUND) {
    disableButton();
    showResult();
  }
})

function checkRestCount () {
  if(restCountVal > 1) 
    return POSSIBLE;
  else if (restCountVal === 1) 
    return LAST_ROUND;
  else
    return IMPOSSIBLE;
}

function disableButton () {
  document.getElementById('rock').setAttribute('disabled',true);
  document.getElementById('scissors').setAttribute('disabled',true);
  document.getElementById('paper').setAttribute('disabled',true);
}

function showResult () {
  if(playerScoreVal > computerScoreVal)
    result.innerText = '승리';
  else if(playerScoreVal === computerScoreVal)
    result.innerText = '무승부';
  else if(playerScoreVal < computerScoreVal)
    result.innerText = '패배';
}
