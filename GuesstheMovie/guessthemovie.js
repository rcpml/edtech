var allEmojis = [
    '&#x1F600;',
    '&#x1F601;',
    '&#x1F602;',
    '&#x1F923;',
    '&#x1F603;',
    '&#x1F604;',
    '&#x1F605;',
    '&#x1F606;',
    '&#x1F609;',
    '&#x1F60A;',
    '&#x1F60B;',
    '&#x1F60E;',
    '&#x1F60D;',
    '&#x1F618;',
    '&#x1F617;',
    '&#x1F619;',
    '&#x1F61A;',
    '&#x263A;',
    '&#x1F642;',
    '&#x1F917;',
    '&#x1F914;',
    '&#x1F610;',
    '&#x1F611;',
    '&#x1F636;',
    '&#x1F644;',
    '&#x1F60F;',
    '&#x1F623;',
    '&#x1F625;',
    '&#x1F62E;',
    '&#x1F910;',
    '&#x1F62F;',
    '&#x1F62A;',
    '&#x1F62B;',
    '&#x1F634;',
    '&#x1F60C;',
    '&#x1F913;',
    '&#x1F61B;',
    '&#x1F61C;',
    '&#x1F61D;',
    '&#x1F924;',
    '&#x1F612;',
    '&#x1F613;',
    '&#x1F614;',
    '&#x1F615;',
    '&#x1F643;',
    '&#x1F911;',
    '&#x1F632;',
    '&#x2639;',
    '&#x1F641;',
    '&#x1F616;',
    '&#x1F61E;',
    '&#x1F61F;',
    '&#x1F624;',
    '&#x1F622;',
    '&#x1F62D;',
    '&#x1F626;',
    '&#x1F627;',
    '&#x1F628;',
    '&#x1F629;',
    '&#x1F62C;',
    '&#x1F630;',
    '&#x1F631;',
    '&#x1F633;',
    '&#x1F635;',
    '&#x1F621;',
    '&#x1F620;',
    '&#x1F607;',
    '&#x1F920;',
    '&#x1F921;',
    '&#x1F925;',
    '&#x1F637;',
    '&#x1F912;',
    '&#x1F915;',
    '&#x1F922;',
    '&#x1F927;',
    '&#x1F608;',
    '&#x1F47F;',
    '&#x1F479;',
    '&#x1F47A;',
    '&#x1F480;',
    '&#x2620;',
    '&#x1F47B;',
    '&#x1F47D;',
    '&#x1F47E;',
    '&#x1F916;',
    '&#x1F4A9;',
    '&#x1F63A;',
    '&#x1F638;',
    '&#x1F639;',
    '&#x1F63B;',
    '&#x1F63C;',
    '&#x1F63D;',
    '&#x1F640;',
    '&#x1F63F;',
    '&#x1F63E;',
    '&#x1F648;',
    '&#x1F649;',
    '&#x1F64A;',
    '&#x1F466;',
    '&#x1F466;&#x1F3FB;',
    '&#x1F466;&#x1F3FC;',
    '&#x1F466;&#x1F3FD;',
    '&#x1F466;&#x1F3FE;',
    '&#x1F466;&#x1F3FF;',
    '&#x1F467;',
    '&#x1F467;&#x1F3FB;',
    '&#x1F467;&#x1F3FC;',
    '&#x1F467;&#x1F3FD;',
    '&#x1F467;&#x1F3FE;',
    '&#x1F467;&#x1F3FF;',
    '&#x1F468;',
    '&#x1F468;&#x1F3FB;',
    '&#x1F468;&#x1F3FC;',
    '&#x1F468;&#x1F3FD;',
    '&#x1F468;&#x1F3FE;',
    '&#x1F468;&#x1F3FF;',
    '&#x1F469;',
    '&#x1F469;&#x1F3FB;',
    '&#x1F469;&#x1F3FC;',
    '&#x1F469;&#x1F3FD;',
    '&#x1F469;&#x1F3FE;',
    '&#x1F469;&#x1F3FF;',
    '&#x1F474;',
    '&#x1F474;&#x1F3FB;',
    '&#x1F474;&#x1F3FC;',
    '&#x1F474;&#x1F3FD;',
    '&#x1F474;&#x1F3FE;',
    '&#x1F474;&#x1F3FF;',
    '&#x1F475;',
    '&#x1F475;&#x1F3FB;',
    '&#x1F475;&#x1F3FC;',
    '&#x1F475;&#x1F3FD;',
    '&#x1F475;&#x1F3FE;',
    '&#x1F475;&#x1F3FF;',
    '&#x1F476;',
    '&#x1F476;&#x1F3FB;',
    '&#x1F476;&#x1F3FC;',
    '&#x1F476;&#x1F3FD;',
    '&#x1F476;&#x1F3FE;',
    '&#x1F476;&#x1F3FF;',
    '&#x1F47C;',
    '&#x1F47C;&#x1F3FB;',
    '&#x1F47C;&#x1F3FC;',
    '&#x1F47C;&#x1F3FD;',
    '&#x1F47C;&#x1F3FE;',
    '&#x1F47C;&#x1F3FF;',
    '&#x1F46E;',
];

var emojiMovies = [{
        question: "&#x1F36B; &#x1F3ED; &#x1F466;",
        answer: "Charlie and the Chocolate Factory"
    },
    {
        question: "&#x1F987; &#x1F44A; &#x1F921;",
        answer: "Batman and the Joker"
    },
];

//Choose a random movie em
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

