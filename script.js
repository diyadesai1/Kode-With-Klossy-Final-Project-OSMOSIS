


function buildQuiz(){

  
  const output = [];
  
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} 
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output

      if (questionNumber <= 4) {
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div><br><br>`
        
        );
      } else {
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div><br>`
        
        );
      }
      
    }
  );

  // combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults(){
  // gather answer containers from our quiz

  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;
  let numWrong = 0;

  const actualAns = [];

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'green';
    }
    // if answer is wrong or blank
    else{
      numWrong++;
      // color the answers red
      console.log(questionNumber);
      var realQuestionNumber = questionNumber+1;
      actualAns.push(`
        <div class="review">
          ${realQuestionNumber}.${currentQuestion.actualAnswer}
        </div>
      `)
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

  const resultsOut = [];

  resultsOut.push(`
    <div>
      <p class="review-text">You answered ${numCorrect} out of ${myQuestions.length} questions correctly.
    </div>`
  );


  console.log(numWrong);
  
  if (numWrong > 0) {
    resultsOut.push(
      `<div class="review-text-below">
        <b> Review your wrong answers below: </b>
      </div>`
    );

    var actualString = actualAns.join('');
    resultsOut.push(`
      <div>
        ${actualString}
      </div>
      <br>`

    )
  } else {

  }

  resultsContainer.innerHTML = resultsOut.join('');


}


function startOver() {
  resultsContainer.innerHTML = "";
  quizContainer.innerHTML = "";
  buildQuiz();
  
}


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset-btn');

const myQuestions = [
  {
    question: "What happens to plastic waste?",
    answers: {
      "It is a biodegradable material so it eventually disintegrates": "",
      "There is no such thing as plastic waste, all plastic is recycled": "",
      "It never fully goes away, it just breaks into little pieces": "",
      "It is dumped in the ocean for fish to eat": "",
    },
    correctAnswer: "It never fully goes away, it just breaks into little pieces",
    actualAnswer: "Plastic waste never fully goes away, it just breaks into little pieces"
  },
  {
    question: "Why is plastic dangerous for marine life?",
    answers: {
      "They mistake it for food and cannot digest it": "",
      "Both A and C": "",
      "They can get tangled in it which hinders their ability to swim": "",
      "It's not dangerous because they use plastic waste for habitats": "",
    },
    correctAnswer: "Both A and C",
    actualAnswer: "Marine life can mistake plastic for food and get tangled in them"
  },
  {
    question: " How many marine species are harmed by plastic pollution?",
    answers: {
      "52": "",
      "1,326": "",
      "693": "",
      "5,489": "",
    },
    correctAnswer: "693",
    actualAnswer: "693 marine species are harmed by plastic pollution"
  },
  {
    question: "What percent of its plastic does the US recycle?",
    answers: {
      "9%": "",
      "50%": "",
      "35%": "",
      "75%": "",
    },
    correctAnswer: "9%",
    actualAnswer: "The U.S. recycles 9% of its plastic"
  },
  {
    question: " Approximately, Americans use about how many plastic drinking straws per day?",
    answers: {
      "25,000": "",
      "250,000,000": "",
      "100,000": "",
      "500,000,000": "",
    },
    correctAnswer: "500,000,000",
    actualAnswer: "~500,000,000 Americans use plastic straws per day"
  }
];



// display quiz right away
buildQuiz();


// on submit, show results
submitButton.addEventListener('click', showResults);
resetButton.addEventListener('click', startOver);






// SIGN UP
var submit = $('.signUpButton');

var container = $(`.signUpContainer`);

submit.on("click", greysList);

function greysList() {
  
  var greys = $('.emailInput').val();
  alert("Thank you for signing up!"); 

  container.append(`
  <div>
  <p> You have signed up using ${greys}!</p>
  </div>`)
  event.preventDefault(); 
}







