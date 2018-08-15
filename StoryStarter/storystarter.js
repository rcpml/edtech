//Sentences for the story starter
let sentences = [
  "Harry opened the box. He could not believe his eyes!",
  "Everyone has arrived. Only one person was missing.",
  "It was a calm autumn morning except for one thing.",
  "The pilot shouted: 'It's raining, but not the way we know!'",
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
  "He was about to open the old wooden box but his dad suddenly shouted 'No!'",
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
  "Mary and Suzie found a rose in the forest. It was just black and white!",
  "The moon was shining so brightly that people didn't need lights during their night walk.",
  "Chris though he just bought a nice pen, however, it was much more than a pen.",
  "All the clocks at the office had stopped!",
  "It was snowing, but the snow was in blue color!",
  "It was a usual morning until they saw the sky full of birds!",
  "The Simpsons found a bag full of gold in the ceiling. However, there was also a note in the bag!",
  "All the TV channels in the world were showing that event.",
  "It didn't take very long for the group to realize that they were on an island!",
  "The house looked empty, but a lot of noise was coming from it!",
  "All the horses on the road suddenly started to walk backwards!",
  "Willie woke up to see that his eye color had changed from brown to yellow!",
  "There were 44 missed calls and 72 messages when he checked his phone!",
  "The police were waiting outside Tony's home when he arrived.",
  "Melinda saw her face on the front page of the newspaper!",
  "It was a perfect day for picnic!",
  "There was a giant blue ship at the dock.",
  "Chris and Lina thought they saw a bird.",
  "The young scout couldn't believe her eyes when she looked through the binoculars.",
  "The dream Jonathan had was very strange.",
  "Mina's hair was 2 meters long when she woke up!"
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
};
