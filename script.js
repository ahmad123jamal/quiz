var question = [
    {
        question:"who is the Caiptan of Pakistan odi Cricket team",
        choices:["babar", "rizwan", "shaheen", "none"],
        answerIndexof: 1
    },
    {
        question:"who is the caiptan of Pakistan  T20 Cricket team",
        choices:["rizwan", "babar", "fakhar", "none"],
        answerIndexof: 2
    },
    {
        question:"who is the caiptan of Pakistan Test Cricket team ",
        choices:["riawan","babar","shan","naseem"],
        answerIndexof: 3
    }
]

var currentQuesInsdex = 0
var score = 0

function showQuestion() {
    var question1 = document.getElementById('question')
    question1.textContent = questions[currentQuesInsdex].question
    
}