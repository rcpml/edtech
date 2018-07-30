var emojiMovies = [{
        question: "&#x1F36B; &#x1F3ED; &#x1F466;",
        answer: "Charlie and the Chocolate Factory"
    },
    {
        question: "&#x1F987; &#x1F44A; &#x1F921;",
        answer: "Batman"
    },
    {
        question: "	&#x1F471;&#x1F3FB; &#x1F471;&#x1F3FC; &#x1F3C3;&#x1F3FB; &#x1F48D; &#x2197; &#x1F30B;",
        answer:"The Lord of the Rings",
    },
    {
        question: "&#x1F466; &#x1F453; &#x26A1; &#x1F387; &#x1F989;",
        answer:"Harry Potter",
    },
    {
        question: "&#x1F460; &#x1F470;&#x1F3FB; &#x1F55B; &#x1F632;",
        answer:"Cinderella",
    },
    {
        question: "&#x1F466; &#x1F467; &#x1F4D4; &#x1F491;",
        answer:"The Notebook",
    },
    {
        question: "&#x1F43C; &#x1F44A;&#x1F3FC;",
        answer:"Kung Fu Panda",
    },
    {
        question: "&#x1F6A2; &#x2744; &#x1F3D4; &#x1F30A; &#x1F631;",
        answer:"Titanic",
    },
    {
        question: "&#x1F466;&#x1F3FB; &#x2702; &#x1F64C;&#x1F3FB;",
        answer:"Edward Scissorhands",
    },
    {
        question: "&#x1F474;&#x1F3FB; &#x1F466;	&#x1F415; &#x1F3E1; &#x1F388; &#x2601;",
        answer:"Up",
    },
    {
        question: "&#x1F466;&#x1F3FB; &#x1F407; &#x0030;&#xFE0F;&#x20E3; &#x0031&#xFE0F;&#x20E3; &#x0030;&#xFE0F;&#x20E3; &#x0031&#xFE0F;&#x20E3; &#x1F576; &#x1F4DE; &#x1F5A5;",
        answer:"Matrix",
    }
    ];

//Choose a random movie emoji series
var currentAnswer;
function movieRandomizer() {
    var randomizer = Math.floor(Math.random() * emojiMovies.length);
    document.getElementById('questions').innerHTML = emojiMovies[randomizer].question;
    document.getElementById('snackbar').innerHTML = "";
    twemoji.parse(document.body);
    currentAnswer = emojiMovies[randomizer].answer;
}
document.getElementById('getquestion').addEventListener('click', movieRandomizer);

/*
//Display the name of the movie
function showAnswer() {
    if (currentAnswer == undefined) {
        document.getElementById('answers').innerHTML = "Please get your question";
    } else {
        document.getElementById('answers').innerHTML = currentAnswer;
    }
}
document.getElementById('showanswer').addEventListener('click', showAnswer);
*/


//Display the answer in the snackbar
function showSnack() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    if (currentAnswer == undefined || "") {
        document.getElementById("snackbar").innerHTML = 'Please get your question first!';
    } else {
        document.getElementById("snackbar").innerHTML = currentAnswer;
    }
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
document.getElementById('showsnack').addEventListener('click', showSnack);

