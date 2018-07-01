
//Sentences for the story starter
let sentences = [
    "Harry opened the box.",
    "Everyone has arrived. Only one person was missing.",
    "It was a calm autumn morning except for one thing.",
    "The pilot shouted \'It\'s raining, but not the way we know!\'",
    "When she woke up, she had four arms instead of two!",
    "David held his breath when the door of the UFO opened.",

];

//Select the div and place the random story starter sentence 
function storyStarter() {
    let randomStarter = Math.floor(Math.random() * sentences.length);
    storyHolder.textContent = sentences[randomStarter];
}

//assign Spacebar to activate random story starter sentence function above
window.onkeypress = function(event) {
    if (event.keyCode == 32 || event.which == 32) {
        storyStarter();
    }
 }


