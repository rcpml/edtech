//Time display, +5 & -5 button
const timerMinutes = document.getElementById("timerminutes");
const timerSeconds = document.getElementById("timerseconds");
const timerHours = document.getElementById("timerhours");
const minusOne = document.getElementById("minusone");
const plusOne = document.getElementById("plusone");
const minusFive = document.getElementById("minusfive");
const plusFive = document.getElementById("plusfive");

//Set default count value to 5 minutes
let timerCoreStarter = 300;
var timerCoreValue = new Date(timerCoreStarter * 1000);
var hours = Math.floor((timerCoreValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timerCoreValue % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timerCoreValue % (1000 * 60)) / 1000);
//Output the minutes and seconds. Hide the minute part if it is less than 1 minute
if (hours < 10) {
  timerHours.textContent = "0" + hours;
} else {
  timerHours.textContent = hours;
}
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
  let hours = Math.floor((timerCoreValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timerCoreValue % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timerCoreValue % (1000 * 60)) / 1000);
  //Output the minutes and seconds. Hide the minute part if it is less than 1 minute
  if (hours < 10) {
    timerHours.textContent = "0" + hours;
  } else {
    timerHours.textContent = hours;
  }
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
minusOne.addEventListener("click", function () {
  if (timerCoreStarter > 120) {
    timerCoreStarter -= 60;
    timeCalcPost();
  } else {
    timerCoreStarter = 60;
    timeCalcPost();
  }
});

//+1 minute with each click
plusOne.addEventListener("click", function () {
  timerCoreStarter += 60;
  timeCalcPost();
});

//-5 minutes with each click
minusFive.addEventListener("click", function () {
  if (timerCoreStarter > 300) {
    timerCoreStarter -= 300;
    timeCalcPost();
  } else {
    timerCoreStarter = 300;
    timeCalcPost();
  }
});

//+5 minutes with each click
plusFive.addEventListener("click", function () {
  timerCoreStarter += 300;
  timeCalcPost();
});

//Counter function and stop when it reaches zero.
function counter() {
  timerCoreStarter -= 1;
  timeCalcPost();
  if (timerCoreStarter == 0) {
    clearInterval(counterX);
    document.getElementById("notificationaudio").play();
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

//Pause - not used currently
function pauseTimer() {
  clearInterval(counterX);
}

//Reset
function resetTimer() {
  clearInterval(counterX);
  timerCoreStarter = 300;
  timeCalcPost();
}
document.getElementById("resettimer").addEventListener("click", resetTimer);

//Start & pause the timer
function start() {
  if (timerCoreStarter > 0) {
    clearInterval(counterX);
    counterX = setInterval(counter, 1000);
  }
}
document.getElementById("start").addEventListener("click", start);

function pause() {
  clearInterval(counterX);
}
document.getElementById("pause").addEventListener("click", pause);



//Hide all except the timer when the counter starts
function hideOthers() {
  $(".clear").fadeOut(500);
  $("#timerheading").addClass("timerheading");
  event.stopPropagation();
}

$("#start").click(hideOthers);

//Show the hidden content
function showOthers() {
  $(".clear").fadeIn(500);
  $("#timerheading").removeClass("timerheading");
}
$(document).click(showOthers);

// Fullscreen
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

document.getElementById("fullscreen").addEventListener("click", toggleFullScreen);
