var currentAnswer;

function movieRandomizer() {
    var randomizer = Math.floor(Math.random() * emojiMovies.length);
    document.getElementById('questions').innerHTML = emojiMovies[randomizer].question;
    document.getElementById('snackbar').innerHTML = "";
    twemoji.parse(document.body);
    currentAnswer = emojiMovies[randomizer].answer;

    if (emojiMovies.length !== 0) {
        return emojiMovies.splice([randomizer], 1);
    } else {
        window.alert("End of the movies!");
    }


    //remove the shown emoji movie and return the remaining emoji movies if the array length is not 0
    return emojiMovies.splice([randomizer], 1);
}
document.getElementById('getquestion').addEventListener('click', movieRandomizer);