const wordsLevel1 = [
  'arbitrary',
  'ambiguous',
  'crunchy',
  'excitement',
  'investigation',
  'implicit',
  'thorough',
  'weird',
  'accommodate',
  'maintenance',
  'conscience',
  'occurred',
  'acceptable',
  'brief',
  'caffeine',
  'monarchy',
  'replenish',
  'rhetoric',
  'sandwich',
  'scenario',
  'silhouette',
  'symmetric'
];

//The textbox for the word to be typed
const wordHolder = document.getElementById('wordHolder');


//Get the card body to change its color based on whether user input matches the target word or not
const cardBody = document.getElementById('cardBody');


//Get the user input
const userInput = document.getElementById('userInput');


//Audio to play for each correct answer
const audio = document.getElementById('audio');


//Get a random word from the level and display it on the 'wordHolder' component and get user input into focus to being typing
//Clear the input area to begin a smooth typing process
function getMyWord() {
  let randomizer = Math.floor(Math.random() * wordsLevel1.length);
  wordHolder.textContent = wordsLevel1[randomizer];
  document.getElementsByName('input')[0].placeholder="";
  userInput.value ="";
  userInput.focus();
  checkInputWord();
  return randomizer;
}


//Change the class of the input text based on its accuracy & call "nextWord" function back
function checkInputWord() {
  if(userInput.value == wordHolder.textContent) {
    wordHolder.classList.add("correct");
    wordHolder.classList.add("bold");
    audio.play();
    snackBar();
    nextWord();
  } else {
    wordHolder.classList.remove("correct");
    wordHolder.classList.remove("bold");    
  }
}

//Check the accuracy of the input on each keypress and display it in the accuracy bar in percentages
function checkUserInput() {

}

//Display correct notification
function notifyCorrect() {

}

//Automatically move to the next word in 0.5 second once user writes the target word correctly
//Used as callback
function nextWord() {
  setTimeout(function() {
    if(userInput.value == wordHolder.textContent) {
      getMyWord();
    } 
  }, 1000);
}

// Snackbar starts here
function snackBar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}
// Snackbar ends here