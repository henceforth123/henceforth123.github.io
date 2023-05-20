//Alert
function showAlert() 
{
  $('#alert-container').fadeIn();
}

function continueWebsite() 
{
  $('#alert-container').fadeOut();
}



var scorepoints = 0;
var lives = 5;

let score = document.getElementById('score');
let life  = document.getElementById('life');

function addscore() {
  scorepoints += 10;
}
function minusLife() {
  lives -= 1;
}

function resetLives() {
  lives = 5;
  life.textContent = lives;
}
function resetScore() {
  scorepoints = 0;
  score.textContent = scorepoints;
}

//START-MAIN_BOX_CHANGE
var percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var box = document.getElementById('box');

let globalVarMainBClr = [0, 0, 0];
const callGVMBclr = 0;

function getRandomPercentage() 
{
  var randomIndex = Math.floor(Math.random() * percentages.length);
  return percentages[randomIndex];
}

function changeGlobalVariable(callGVMBclr, newValue) 
{
    globalVarMainBClr[callGVMBclr] = newValue;
}

function changeBoxColor() {

  var redPercentage = getRandomPercentage();
    changeGlobalVariable(0, redPercentage);
    clues(0, redPercentage);
  var greenPercentage = getRandomPercentage();
    clues(1, greenPercentage);
    changeGlobalVariable(1, greenPercentage);
  var bluePercentage = getRandomPercentage();
    clues(2, bluePercentage);
    changeGlobalVariable(2, bluePercentage);

  var newColor = 'rgb(' + redPercentage + '%, ' + greenPercentage + '%, ' + bluePercentage + '%)';
  box.style.backgroundColor = newColor;
  entered();
}

var tryAgainButton = document.getElementById('try-again');
tryAgainButton.addEventListener('click', changeBoxColor);
//lives-reset
tryAgainButton.addEventListener('click', resetLives);
tryAgainButton.addEventListener('click', reset3ScrollBar);


var ContinueButton = document.getElementById('Continue');
ContinueButton.addEventListener('click', changeBoxColor);
//lives-reset
ContinueButton.addEventListener('click', resetLives);
ContinueButton.addEventListener('click', resetScore);


//END-MAIN_BOX_CHANGE

//CLUES

function clues(colorNum, container) {
  var cluer = '';
  if(colorNum == 0) {
     cluer = 'clueOne';
  }
  if(colorNum == 1) {
    cluer = 'clueTwo';
  }
  if(colorNum == 2) {
    cluer = 'clueThree';
  }
  var text = document.getElementById(cluer);
  function getRandomPercentage(){
  var randomIndex = Math.floor(Math.random() * 3) + 1;
  return randomIndex;
  }

console.log(getRandomPercentage());

  if(container == 0) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The Value can be both Positive and Negative.";
          break;
          case 2:
          text.textContent = "LOWER";
          break;
          case 3:
          text.textContent = "100 - 100";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }

  } else if (container == 10) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first digit is less than one of the smallest Prime number."
          break;
          case 2:
          text.textContent = "LOWER";
          break;
          case 3:
          text.textContent = "(100/10) + [10 - (5*2)]";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 20) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first digit is used as denominator to get the half of a number."
          break;
          case 2:
          text.textContent = "LOWER";
          break;
          case 3:
          text.textContent = "2 * (2 * 5)";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 30) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first digit is equals to the Square Root of 9."
          break;
          case 2:
          text.textContent = "LOWER";
          break;
          case 3:
          text.textContent = "(13-3) * (300/100)";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 40) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first digit is the next to the smallest even number multiplied by itself."
          break;
          case 2:
          text.textContent = "LOWER";
          break;
          case 3:
          text.textContent = "(100/25) * 10";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 50) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "Half of a Hundred."
          break;
          case 2:
          text.textContent = "NEUTRAL";
          break;
          case 3:
          text.textContent = "[(5/5) + 4] * 10";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 60) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first digit is the sum of the first three digit of counting numbers."
          break;
          case 2:
          text.textContent = "HIGHER";
          break;
          case 3:
          text.textContent = "(60/4) + 15 + 30";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 70) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "Equals to (12 * 5) + 10."
          break;
          case 2:
          text.textContent = "HIGHER";
          break;
          case 3:
          text.textContent = "(47-27) + 50";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 80) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first digit is the Closest even number of 10."
          break;
          case 2:
          text.textContent = "HIGHER";
          break;
          case 3:
          text.textContent = "[(13+15) - 20] * 10";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else if (container == 90) {
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "3 * 3 = The first digit"
          break;
          case 2:
          text.textContent = "HIGHER";
          break;
          case 3:
          text.textContent = "0, 30, 60, ?";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
  else {
      
      switch (getRandomPercentage()){
          case 1:
          text.textContent = "The first two number is divisible by 5."
          break;
          case 2:
          text.textContent = "HIGHER";
          break;
          case 3:
          text.textContent = "The last percentage of the scroll bar";
          break;
          default:
          text.textContent = "NO CLUE";
          break;
      }
  }
}
//END-CLUES


//3SCROLL_BAR
var red   = 0;
var green = 0;
var blue  = 0;

function adder(somenumber) {
  somenumber = somenumber + 10;
  return somenumber;
}

let globalVar_ThreeBClr = [0, 0, 0];

const rangeR = document.getElementById ('colorRange-RED');
const valueR = document.getElementById ('colorValue-RED');
const colorBoxR = document.getElementById('colorBox-RED');

const rangeG = document.getElementById ('colorRange-GREEN');
const valueG = document.getElementById ('colorValue-GREEN');
const colorBoxG = document.getElementById('colorBox-GREEN');

const rangeB = document.getElementById ('colorRange-BLUE');
const valueB = document.getElementById ('colorValue-BLUE');
const colorBoxB = document.getElementById('colorBox-BLUE');

function changeGlobal_Variable(callGV_ThreeBclr, newValue) {
  //console.log(callGV_ThreeBclr, newValue, globalVar_ThreeBClr)
  globalVar_ThreeBClr[callGV_ThreeBclr] = newValue;
}

//RED
rangeR.addEventListener('input', function() {
  var percent = this.value + '%';
  valueR.innerText = percent;

  changeGlobal_Variable(0, this.value);
  red = 255 * (this.value / 100);

  const color = `rgb(${red}, ${0}, ${0})`;
  colorBoxR.style.backgroundColor = color;

});
//GREEN
rangeG.addEventListener('input', function() {
  var percent = this.value + '%';
  valueG.innerText = percent;
  
  changeGlobal_Variable(1, this.value);
  green = 255 * (this.value / 100);

  const color = `rgb(${0}, ${green}, ${0})`;
  colorBoxG.style.backgroundColor = color;

});
//BLUE
rangeB.addEventListener('input', function() {
  var percent = this.value + '%';
   valueB.innerText = percent;
  
  changeGlobal_Variable(2, this.value);
  blue = 255 * (this.value / 100);

  const color = `rgb(${0}, ${0}, ${blue})`;
  colorBoxB.style.backgroundColor = color;
});

//RESETTING ALL SCROLL
function reset3ScrollBar() {
  rangeR.value = 0;
  valueR.innerText = "0%";
  changeGlobal_Variable(0, 0);
  red = 0;
  colorBoxR.style.backgroundColor = "rgb(0, 0, 0)";

  rangeG.value = 0;
  valueG.innerText = "0%";
  changeGlobal_Variable(1, 0);
  green = 0;
  colorBoxG.style.backgroundColor = "rgb(0, 0, 0)";

  rangeB.value = 0;
  valueB.innerText = "0%";
  changeGlobal_Variable(2, 0);
  blue = 0;
  colorBoxB.style.backgroundColor = "rgb(0, 0, 0)";
}
//END - RESETTING ALL SCROLL



//END-3SCROLL_BAR

//START-AUDIO
var audio = document.getElementById("audioPlayer");
var volumeControl = document.getElementById("volumeControl");
var isMuted = false;

function toggleMute() 
{
    isMuted = !isMuted;
    audio.muted = isMuted;
    volumeControl.value = isMuted ? 0 : audio.volume * 100;
}

function changeVolume(volume) 
{
  audio.volume = volume / 100;
  if (volume === 0) {
    isMuted = true;
  } else {
    isMuted = false;
  }
    audio.muted = isMuted;
}
audio.addEventListener('canplaythrough', function() 

{
  audio.play().catch(function(error) {
    // Autoplay was prevented, handle the error here
    console.error("Failed to play audio: ", error);
  });
});
//END-AUDIO

function checkThreeC() 
{
    var textR = document.getElementById('for-checkR');
    var textG = document.getElementById('for-checkG');
    var textB = document.getElementById('for-checkB');

    //RED
    function autoCallR() {
      if (globalVarMainBClr[0] == globalVar_ThreeBClr[0]) {
        textR.textContent = "CORRECT";
        addscore()
      } else {
        textR.textContent = "WRONG";
      }
    }
    autoCallR();

    //GREEN
    function autoCallG() {
      if (globalVarMainBClr[1] == globalVar_ThreeBClr[1]) {
        textG.textContent = "CORRECT";
        addscore()
      } else {
        textG.textContent = "WRONG";
      }
    }
    autoCallG();

    //BLUE
    function autoCallB() {
      if (globalVarMainBClr[2] == globalVar_ThreeBClr[2]) {
        textB.textContent = "CORRECT";
        addscore()
      } else {
        textB.textContent = "WRONG";
      }
    }
    autoCallB();
    score.textContent = scorepoints;

    if (globalVarMainBClr[0] == globalVar_ThreeBClr[0] && globalVarMainBClr[1] == globalVar_ThreeBClr[1]
      && globalVarMainBClr[2] == globalVar_ThreeBClr[2]) {
        changeBoxColor();
        reset3ScrollBar();
        soundCorrect();
    } else {
        minusLife();
        life.textContent = lives;
    }

    if(lives <= 0) {
      reset3ScrollBar();
      var con = document.getElementById('Continue');
      var endScore = document.getElementById('end-score');
      var yourScore = document.getElementById('your-score');
      yourScore.textContent = "YOUR SCORE";
      endScore.textContent = `${scorepoints}`;
      endScore.style.color = "rgb(200, 20, 50)";
      endScore.style.fontSize = "100px";
      con.textContent = "TRY AGAIN";
      showAlert();
      resetScore();
      finished();
    }
}

function soundCorrect() {
  // Create an audio element
  var audio = new Audio('soundeffect.wav');
  // Play the audio
  audio.play();
}
function finished() {
  // Create an audio element
  var audio = new Audio('mixkit-game-level-completed-2059.wav');
  // Play the audio
  audio.play();
}
function entered() {
  // Create an audio element
  var audio = new Audio('mixkit-ominous-drums-227.wav');
  // Play the audio
  audio.play();
}


function exitWebsite() 
{
  // You can customize the behavior here
  window.close();
}