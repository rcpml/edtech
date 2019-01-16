const wordsLevel1 = [
  'arbitrary',
  'crunchy',
  'excitement',
  'implicit',
  'weird',
  'brief',
  'caffeine',
  'monarchy',
  'replenish',
  'rhetoric',
  'sandwich',
  'accommodate',
  'maintenance',
  'conscience',
  'silhouette',
  'ambiguous',
  'thorough',
  'occurred',
  'acceptable',
  'scenario',
  'symmetric',
  'acquire',
  'committed',
  'exceed',
  'guarantee',
  'height',
  'hierarchy',
  'jewelry',
  'judgment',
  'maintenance',
  'medieval',
  'misspell',
  'occasionally',
  'perseverance',
  'receipt',
  'rhythm',
  'schedule',
  'access',
  'component',
  'permanent',
  'query',
  'strength',
  'absence',
  'accomplish',
  'business',
  'congratulations',
  'development',
  'especially',
  'government',
  'Arctic',
  'mischief',
  'coincidence',
  'paramount',
  'circumstance',
  'construct',
  'permanent',
  'temporary',
  'reassure',
  'encourage',
  'stimulate',
  'endangered',
  'renewable'
];

//Check to see if there is a session already started
let hasStarted = false;


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
    setTimeout(function () {
      wordHolder.lettering();
      animation();
    }, 1000);
  } else {
    wordHolder.classList.remove("correct");
    wordHolder.classList.remove("bold");    
  }
}



//Automatically move to the next word in 0.5 second once user writes the target word correctly
//Used as callback
function nextWord() {
  setTimeout(function() {
    if(userInput.value == wordHolder.textContent) {
      // userScore += 2;
      // score.textContent = userScore + " pts";
      getMyWord();
    } 
  }, 1000);
}

// Snackbar
function snackBar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}


// Animation starts
// $(document).ready(function() {
//   $("#wordHolder").lettering();
// });
  

// $(document).ready(function() {
//   animation();
// }, 1000);


// function animation() {
//   var title1 = new TimelineMax();
//   title1.staggerFromTo("#wordHolder span", 0.5, 
//   {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
//   {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);  }