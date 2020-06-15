main()

function main() {
    var pageContentEl = document.getElementById("wrapper");
    pageContentEl.innerHTML = `<header><a href="./Assets/ViewHighScore.html">View High Score</a>
    <div class=headtimer>
    Timer:
        </div>
    </header>
    <h1>Paramedic Quiz</h1>
    <h2>Try the following questions to review your paramedic knowledge...</h2>
    <h3>Answering the question right adds time-- Get it wrong and time is subtracted...</h3>
    <h4>Try not to kill the patient<h/4>
    <button onclick="startGame();" id="startButton">Start</button>
    `;
}

var timeLeft = 20

var pageElement = document.querySelector("#wrapper")

function renderQuestion(index) {


    pageElement.innerHTML = "<header><a href=\"./assests/ViewHighScore.html\">View High Scores</a></header>\
    <h1 id=\"questionText\">" + questions[index].question + "</h1>\
    <button id=\"AnswerA\">" + questions[index].choiceA + "</button><br> \
    <button id=\"AnswerB\">" + questions[index].choiceB + "</button><br> \
    <button id=\"AnswerC\">" + questions[index].choiceC + "</button><br> \
    <button id=\"AnswerD\">" + questions[index].choiceD + "</button>";



    var chooseAEl = document.querySelector("#AnswerA");
    chooseAEl.addEventListener("click", function() {
        selectedAnswer = "A"
        console.log(selectedAnswer)
        if (questions[index].correct == "A") {
            timeLeft++
            window.alert("Correct!")
            renderQuestion(index + 1)
        } else {
            timeLeft--
            window.alert("WRONG! You just killed your patient!")
            renderQuestion(index + 1)


        }
    })
    var chooseBEl = document.querySelector("#AnswerB");
    chooseBEl.addEventListener("click", function() {
        selectedAnswer = "B"
        console.log(selectedAnswer)
        if (questions[index].correct == "B") {
            timeLeft++
            window.alert("Correct!")
            renderQuestion(index + 1)
        } else {
            timeLeft--
            window.alert("WRONG! You just killed your patient!")
            renderQuestion(index + 1)

        }
    })
    var chooseCEl = document.querySelector("#AnswerC");
    chooseCEl.addEventListener("click", function() {
        selectedAnswer = "C"
        console.log(selectedAnswer)
        if (questions[index].correct == "C") {
            timeLeft++
            window.alert("Correct!")
            renderQuestion(index + 1)
        } else {
            timeLeft--
            window.alert("WRONG! You just killed your patient!")
            renderQuestion(index + 1)

        }
    })
    var chooseDEl = document.querySelector("#AnswerD");
    chooseDEl.addEventListener("click", function() {
        selectedAnswer = "D"
        console.log(selectedAnswer)
        if (questions[index].correct == "D") {
            timeLeft++
            window.alert("Correct!")
            renderQuestion(index + 1)
        } else {
            timeLeft--
            window.alert("WRONG! You just killed your patient!")
            renderQuestion(index + 1)

        }
    })

}

function startGame() {
    var currentindex = 0
        // var selectedAnswer = ""
        // if there are no more questions- display you got ___ out of questions.length right... 

    var timerEl = document.querySelector("#timertext");

    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            pageElement.innerHTML = "<header><a href=\"./assests/ViewHighScore.html\">View High Scores</a></header>"
            return

        }
    }, 1000);
    renderQuestion(currentindex)

}

var questions = [{
        question: "Which of the following would be the best indication that a patient is suffering from hypoxia?",
        //imgSrc
        choiceA: "They are breathing shallow and fast",
        choiceB: "Their oxygen saturation is 87% while you have them on O2 at 15 LPM",
        choiceC: "They are cool and moist",
        choiceD: "Their pulse is rapid and their skin is pale",
        correct: "B"
    },

    {
        question: "An evisceration can be described as __________________. ",
        //imgSrc
        choiceA: "a laceration with a flap of tissue",
        choiceB: "an avulsion with long bone exposure",
        choiceC: "the top layer of skin being scraped away",
        choiceD: "a protrusion of an internal organ from a wound",
        correct: "A"
    },

    {
        question: "Which antiobody is triggered in an allergic reaction? ",
        //imgSrc
        choiceA: "Immunoglobulin B (IgB)",
        choiceB: "Immunoglobulin C (IgC)",
        choiceC: "Immunoglobulin D (IgD)",
        choiceD: "Immunoglobulin E (IgE)",
        correct: "D"
    },

    {
        question: "You arrive on scene with your partner Dovid to a motorcycle accident involving one bike and a tree. The patient has lacerations about the face - a broken tibia - apparent head trauma and a possible spinal cord injury. Which of these injuries is most life threatening?",
        //imgSrc
        choiceA: "Spinal cord",
        choiceB: "Head injury",
        choiceC: "Facial lacerations",
        choiceD: "Broken tibia",
        correct: "A"
    },

    {
        question: "A triage tag _______________.",
        //imgSrc
        choiceA: "Tells if a person will live",
        choiceB: "Follows a color coded system",
        choiceC: "Is always attached to the toe",
        choiceD: "All of the above",
        correct: "B"
    }
]