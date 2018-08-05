//Time display, +5 & -5 button 
const timerMinutes = document.getElementById("timerminutes");
const timerSeconds = document.getElementById("timerseconds");
const minusOne = document.getElementById("minusone");
const plusOne = document.getElementById("plusone");
const minusFive = document.getElementById("minusfive");
const plusFive = document.getElementById("plusfive");



//Set default count value to 5 seconds
let timerCoreStarter = 300;
var timerCoreValue = new Date(timerCoreStarter * 1000);
var minutes = Math.floor((timerCoreValue % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timerCoreValue % (1000 * 60)) / 1000);
//Output the minutes and seconds. Hide the minute part if it is less than 1 minute
if (minutes < 10) {
  timerMinutes.textContent = "0" + minutes;
} else {
  timerMinutes.textContent = minutes;
}
if (seconds < 10) {
  timerSeconds.textContent = "0" + seconds;
} else {
  timerSeconds.textContent = seconds;
}
//Converting to minutes and seconds
function timeCalcPost() {
  let timerCoreValue = new Date(timerCoreStarter * 1000);
  let minutes = Math.floor((timerCoreValue % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timerCoreValue % (1000 * 60)) / 1000);
  //Output the minutes and seconds. Hide the minute part if it is less than 1 minute
  if (minutes < 10) {
    timerMinutes.textContent = "0" + minutes;
  } else {
    timerMinutes.textContent = minutes;
  }
  if (seconds < 10) {
    timerSeconds.textContent = "0" + seconds;
  } else {
    timerSeconds.textContent = seconds;
  }
}


//-1 minute with each click
minusOne.addEventListener('click', function () {
  if (timerCoreStarter > 120) {
    timerCoreStarter -= 60;
    timeCalcPost();
  } else {
    timerCoreStarter = 60;
    timeCalcPost();
  }
});

//+1 minute with each click
plusOne.addEventListener('click', function () {
  timerCoreStarter += 60;
  timeCalcPost();
});


//-5 minutes with each click
minusFive.addEventListener('click', function () {
  if (timerCoreStarter > 300) {
    timerCoreStarter -= 300;
    timeCalcPost();
  } else {
    timerCoreStarter = 300;
    timeCalcPost();
  }
});

//+5 minutes with each click
plusFive.addEventListener('click', function () {
  timerCoreStarter += 300;
  timeCalcPost();
});


//Counter function and stop when it reaches zero.
function counter() {
  timerCoreStarter -= 1;
  timeCalcPost();
  if (timerCoreStarter == 0) {
    clearInterval(counterX);
    document.getElementById('notificationaudio').play();
  }
}

// Start the timer and update the result.
var counterX;

function initiateTimer() {
  if (timerCoreStarter > 0) {
    clearInterval(counterX);
    counterX = setInterval(counter, 1000);
  }
}
document.getElementById('initiatetimer').addEventListener("click", initiateTimer);

//Pause
function pauseTimer() {
  clearInterval(counterX);
}
document.getElementById('pausetimer').addEventListener("click", pauseTimer);

//Reset
function resetTimer() {
  clearInterval(counterX);
  timerCoreStarter = 300;
  timeCalcPost();
}
document.getElementById('resettimer').addEventListener("click", resetTimer);
