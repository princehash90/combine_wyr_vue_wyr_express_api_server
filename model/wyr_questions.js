const router = require("../routes");
const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breath underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
    {
        'question': 'Gon on a skiing vacation or a beach vacation?',
        'answer1': 'Skiing vacation',
        'answer2': 'Beach vacation'
    },

]

function randomWyrQuestion (){
    const randomIndex = Math.floor(Math.random() * questions.length);// picking a random btn 0 and 1 multiply
    //by the number of question which will get us a random number
    const randomQuestion = questions[randomIndex];
    return randomQuestion;
}

module.exports = randomWyrQuestion; // this enables the randomWyrQuestion to be accessed by index.js
//randomWyrQuestion is exported to index