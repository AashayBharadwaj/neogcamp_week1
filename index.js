
var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name?")

console.log("welcome " + userName + " to the GK quizz?")

var score = 0;

//function play


function play(question,answer)

{
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer)
  {
    console.log("right")
    score = score +1;
    console.log(userName +" your score now is :" + score)
  }

  else 
  { 
    score = score -1
    console.log("wrong")
    console.log(userName +" your score now is " + score)


  }


}

// Array of objects


var questions =[  {
    question :"What is the capital of Maharashtra?",
    answer : "mumbai"
  }, 
  {
    question :"who is the prime minister of India?",
    answer : "modi"
  },
  {
    question :"What is the currency of India",
    answer : "rupees"
  }
  
  
  
  ]



for ( var i =0; i<questions.length ; i++)
{

  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)

}

// console.log(questions.question[0])


