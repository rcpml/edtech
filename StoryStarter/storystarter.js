
//Sentences for the story starter
let sentences = [
    "Harry opened the box. He could not believe his eyes!",
    "Everyone has arrived. Only one person was missing.",
    "It was a calm autumn morning except for one thing.",
    "The pilot shouted \'It\'s raining, but not the way we know!\'",
    "When she woke up, she had four arms instead of two!",
    "David held his breath when he saw the UFO.",
    "Little Joe woke up at 10 in the morning, however, it was still dark! ",
    "The phone rang, it was the police.",
    "He could not believe his eyes because there was a tiger in the garden.",
    "Chris missed the school bus, but it was his lucky day.",
    "The clown statue in the garden strangely disappeared the next day.",
    "Everyone in the meeting room received a text message at the same time.",
    "Everyone could hear the signing of the birds, but there were no birds in the sky at all!",
    "At first, Riley though it was a car. He was about to be surprised.",
    "They reached the peak of the mountain after 4 days. When they got there, they saw something very unexpected.",
    "He was about to open the old wooden box but his dad suddenly shouted \'No!\'",
    "Mark had ordered 4 books. When he opened the box, he saw 5 books instead.",
    "Suddenly, they decided to do something crazy. They bought one-way tickets to somewhere exciting.",
    "It was a very important day for Jason who was a computer scientist.",
    "Lisa thought she was late for the school, however, there was no one at the school!",
    "The prisoners woke up to see that the guardians had left the prison and their doors were left opened.",
    "She found a strange shaped key in her bag.",
    "There was full moon in the air and it was all silent in the forest.",
    "She could not believe that she has lost it!",
    "One of the books fell down the shelf while he was wandering in the library.",
    "The sea was very calm but the ship suddenly started to shake.",
    "All of a sudden, the dogs in the park started to bark!",
    "It has been a tiring day for Richard.",
    "When she opened the window, there was snow everywhere!",
];

//Select the div and place the random story starter sentence 
function storyStarter() {
    let randomStarter = Math.floor(Math.random() * sentences.length);
    storyHolder.textContent = sentences[randomStarter];
}

//assign Spacebar to activate random story starter sentence function above
window.onkeyup = function(event) {
    if (event.keyCode == 32 || event.which == 32) {
        storyStarter();
    }
 }


