const quizData = [
  { 
    question: "what is the reult of 2+3?"
    options: ["3", "4", "5", "6"],
    answer: "5",
  },
  {
    questions: "which keyboard is not used to declare java script variables?",
    options: ["let", "variable", "var", "const"],
    answer: "variable",
  },
  {
    questions: "what does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Highly Typed Markup Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
];

const questionElement = document.querySelector(".question");
const opyionsElements = document.querySelectorAll("option");
const submitBtn = document.querySelector(".submit-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent=currentQuestion.question;
  options.Elements.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
  });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if(selectedOption === currentQuestion.answer) {
        score++;
    }
}

function handleNextQuestion() {
    const selectedOption = document.querySelector("li.option.selected");
    if(selectedOption) {
        checkAnswer(selectedOption.textContent);
        currentQuestionIndex++;

        if(currentQuestionIndex < quizData.length) {
            showQuestion();
            resetOptions();
        } else {
            showResults(); 
        }
    }
}

function showResults() {
    const questionContainer = document.querySelector(".quiz-container");
    questionContainer.innerHTML = `<h2> Your score is ${score} out of ${quizData.length}`;
}

function restOptions() {
  optionsElements.forEach((option) => {
    option.calssList.remove("selected");
  });
}

optionsElements.forEach((option) => {
  option.addEventListener("click", () => {
    resetOptions();
    option.classList.add("selected");
  });
});

submitBtn.addEvenListener("click", handleNextQuestion);

showQuestion();
