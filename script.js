document.querySelector("button").addEventListener("click");
var main = document.querySelector("#main");
var quiz = document.querySelector("#quiz");
var questions = [{

    // i want an new background image for every questin-img src="",
    question: "Who is the greatest lightsaber dualist of all time?",
    answers: ['Yoda', 'Anakin Skywalker', 'Mace Windu', 'Darth Sidius'],
    correct: 'Mace Windu'
},
{
    // img src goes here
    question: "What is Darth Sidus home planet?",
    answers: ['Coruscant', 'Naboo', 'Muuniinst', 'Tatoomie'],
    correct: 'Naboo'
},
{
    // img src goes here
    question: "Who's lightasber does Luke usse in episode 4-5?",
    answers: ["Darth Vader's", "Obi Won Kenobi's", "Anakin Skywalker's","Yoda's"],
    correct: "Anakin Skywalker's"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    answers: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    correct: "Darth Vader"
}
]

var currentQuestions = 0;

function startquiz() {
    main.style = "display:none";
}