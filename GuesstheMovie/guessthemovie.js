var emojiMovies = [{
        question: "&#x1F36B; &#x1F3ED; &#x1F466;",
        answer: "Charlie and the Chocolate Factory"
    },
    {
        question: "&#x1F987; &#x1F44A; &#x1F921;",
        answer: "Batman"
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
    },
    {
        question: "&#x1F471;&#x1F3FB; &#x1F471;&#x1F3FC; &#x2694; &#x1F3F9; &#x1F48D; &#x1F30B;",
        answer:"The Lord of the Rings",
    },
    {
        question: "&#x1F47D; &#x1F471;&#x1F3FB; &#x1F6B2; &#x1F315;	",
        answer:"E.T. the Extra-Terrestrial",
    },
    {
        question: "&#x1F356; &#x1F357; &#x1F3B2;",
        answer:"Hunger Games",
    },
    {
        question: "&#x1F313; &#x1F491; &#x1F98A;",
        answer:"Twilight",
    },
    {
        question: "&#x1F466; &#x1F474; &#x1F697; &#x1F320; &#x23F1;",
        answer:"Back to the Future",
    },
    {
        question: "&#x1F63A; &#x1F462; &#x2694;	",
        answer:"Puss in Boots",
    },
    {
        question: "&#x1F935; &#x1F45E; &#x1F378; &#x1F1EC;&#x1F1E7;",
        answer:"James Bond",
    },
    {
        question: "&#x1F981; &#x1F451; &#x1F333;",
        answer:"Lion King",
    },
    {
        question: "&#x1F50E; &#x1F420; &#x1F41F; &#x1F30A; &#x1F422;",
        answer:"Finding Nemo",
    },
    {
        question: "&#x1F466; &#x1F3D4; &#x1F48E; &#x1F409; &#x1F48D;",
        answer:"The Hobbit",
    },
    {
        question: "&#x1F680; &#x1F647; &#x1F316; &#x1F331; &#x1F6F0; &#x1F64C;",
        answer:"The Martian",
    },
    {
        question: "&#x1F63E; &#x1F469; &#x1F94B; &#x1F938;",
        answer:"Catwoman",
    },
    {
        question: "&#x1F1FA;&#x1F1F8; &#x1F6E1; &#x1F44A;",
        answer:"Captain America",
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


// //Delete after the insertion of new emojis
// document.getElementById("new").innerHTML = emojiMovies[(emojiMovies.length-1)].question;