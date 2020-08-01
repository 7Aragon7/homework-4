var startBtn = document.getElementById("begin");
var quiz = document.querySelector("#quiz");

var questions = [{

    // i want an new background image for every questin-img src="",
    question: "Who is the greatest lightsaber dualist of all time?",
    choices: ['Yoda', 'Anakin Skywalker', 'Mace Windu', 'Darth Sidius'],
    answer: 'Mace Windu'
},
{
    // img src goes here
    question: "What is Darth Sidus home planet?",
    achoices: ['Coruscant', 'Naboo', 'Muuniinst', 'Tatoonie'],
    answer: 'Naboo'
},
{
    // img src goes here
    question: "Who's lightasber does Luke use in episode 4-5?",
    choices: ["Darth Vader's", "Obi Won Kenobi's", "Anakin Skywalker's","Yoda's"],
    answer: "Anakin Skywalker's"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
},
{
    // img src goes here
    question: "who kills Emperor Palpatine?",
    choices: ["Luke Skywalker", "Darth Vader", "Rey", "Kilo Ren"],
    answer: "Darth Vader",
    image: "./images/image4.png"
}]

var currentQuestions = 0;
var score = 0;
var timer = 60;

document.querySelector

function startquiz() {
    document.querySelector("#begin").style.display = "none";
    askquestions();
    console.log(begin)
    
    // var startScreenEl = document.querySelector("#start-screen");
    // startScreenEl.setAttribute("class", "hide")
    //get question element and remove the class
    //start timer google setinterval and timers with js
    // run the questions rederer function
}

function askquestions() {
    quiz.innerHTML =""
    var h2 = document.createElement("h2");
    h2.textContent = questions[currentQuestions].question;
    quiz.appendChild(h2)

    for (var i = 0;  i < questions[currentQuestions].choices.length; i++)
    {
        var buttons = document.createElement("button")
        buttons.textContent = questions[currentQuestions].choices[i];
        buttons.addEventListener("click", checkanswer);
        quiz.appendChild(buttons)
    }
    function checkanswer() {
        if (this.textContent === questions[currentQuestions].answer) {
            alert('...')
        }
        else {
            alert(hahaha)
        }
        currentQuestions++
        askquestions()
    }
    startBtn.onclick = startquiz;
} 