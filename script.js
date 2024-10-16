var questions = [
    {
        question: "What is 2 + 2?",
        choices: [1, 2, 3, 4],
        answerIndex: 3
    },
    {
        question: "What is 3 + 0?",
        choices: [1, 2, 3, 4],
        answerIndex: 2
    },
    {
        question: "What is 1 + 1?",
        choices: [1, 2, 3, 4],
        answerIndex: 1
    },

    {
        question: "Who is the captain of Pakistan ODI Cricket team?",
        choices: ["Babar", "Rizwan", "Shaheen", "None"],
        answerIndex: 0
    },
    {
        question: "Who is the captain of Pakistan T20 Cricket team?",
        choices: ["Rizwan", "Babar", "Fakhar", "None"],
        answerIndex: 1
    },
    {
        question: "Who is the captain of Pakistan Test Cricket team?",
        choices: ["Rizwan", "Babar", "Shan", "Naseem"],
        answerIndex: 2
    }
];



var currentQuestionIndex = 0;
var score = 0;

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        var question = questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.question;

        document.getElementById("choice1").textContent = question.choices[0];
        document.getElementById("choice2").textContent = question.choices[1];
        document.getElementById("choice3").textContent = question.choices[2];
        document.getElementById("choice4").textContent = question.choices[3];
    } else {
    
        // document.getElementById('question').textContent =
         alert("Quiz over! Your score is " + score)
        document.getElementById("choice1").textContent = "";
        document.getElementById("choice2").textContent = "";
        document.getElementById("choice3").textContent = "";
        document.getElementById("choice4").textContent = "";
        
    }

}

function checkAnswer(selectedOptionIndex) {
    var correctAnswerIndex = questions[currentQuestionIndex].answerIndex;

    if (selectedOptionIndex === correctAnswerIndex) {
        alert("You got it right!");
        score++;
    } else {
        alert("Wrong! Try next time.");
    }

    currentQuestionIndex++;
    showQuestion();
}

// Initialize the quiz
showQuestion();

// Example of setting up choice buttons
document.getElementById("choice1").onclick = function() { checkAnswer(0); };
document.getElementById("choice2").onclick = function() { checkAnswer(1); };
document.getElementById("choice3").onclick = function() { checkAnswer(2); };
document.getElementById("choice4").onclick = function() { checkAnswer(3); };





