const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-button");
const exitBtn2 = document.querySelector(".exit-button2");
const exitBtn3 = document.querySelector(".exit-button3");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const btns = document.querySelector(".btns");
const btns2 = document.querySelector(".btns2");
const btns3 = document.querySelector(".btns3");
const continueBtn2 = document.querySelector(".continue-btn2");
const continueBtn3 = document.querySelector(".continue-btn3");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
registerLink.onclick = () => {
  wrapper.classList.add("active");
};
loginLink.onclick = () => {
  wrapper.classList.remove("active");
};
btnPopup.onclick = () => {
  wrapper.classList.add("active-popup");
};
iconClose.onclick = () => {
  wrapper.classList.remove("active-popup");
  wrapper.classList.remove("active");
};

startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};
exitBtn2.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};
exitBtn3.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  nextBtn2.style.display = "none";
  nextBtn3.style.display = "none";
  quizSection.classList.add("active");
  nextBtn.classList.remove("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");
  showQuestions(0);
  questionCounter2(1);
  headerScore();
};
continueBtn2.onclick = () => {
  nextBtn.style.display = "none";
  nextBtn3.style.display = "none";
  quizSection.classList.add("active");
  nextBtn2.classList.remove("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");
  showQuestions2(0);
  questionCounter2(1);
  headerScore2();
};
continueBtn3.onclick = () => {
  nextBtn.style.display = "none";
  nextBtn2.style.display = "none";
  quizSection.classList.add("active");
  nextBtn3.classList.remove("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");
  showQuestions3(0);
  questionCounter3(1);
  headerScore3();
};

tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  headerScore();
  questionCounter(questionNumb);
  showQuestions(questionCount);
};

goHomeBtn.onclick = () => {
  nextBtn.style.display = "block";
  nextBtn2.style.display = "block";
  nextBtn3.style.display = "block";
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  nextBtn2.classList.remove("active");
  resultBox.classList.remove("active");
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  headerScore();
  headerScore2();
  questionCounter(questionNumb);
  questionCounter2(questionNumb);
  showQuestions(questionCount);
  showQuestions2(questionCount);
};
// the variable were here
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");
const nextBtn2 = document.querySelector(".next-btn2");
const nextBtn3 = document.querySelector(".next-btn3");
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove("active");
    questionCount++;
    showQuestions(questionCount);
    nex;
  } else {
    showResultBox();
  }
};

nextBtn2.onclick = () => {
  if (questionCount < cssQuestions.length - 1) {
    questionNumb++;
    questionCounter2(questionNumb);
    nextBtn2.classList.remove("active");
    questionCount++;
    showQuestions2(questionCount);
  } else {
    showResultBox2();
  }
};
// TODO: REMEMBER TO EDIT THIS
nextBtn3.onclick = () => {
  if (questionCount < javascriptQuestions.length - 1) {
    questionNumb++;
    questionCounter3(questionNumb);
    nextBtn3.classList.remove("active");
    questionCount++;
    showQuestions3(questionCount);
  } else {
    showResultBox3();
  }
};

const optionList = document.querySelector(".option-list");

// getting question and options from array
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.innerHTML = `${questions[index].numb}. ${questions[index].question}`;
  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i <= option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
function showQuestions2(index) {
  const questionText = document.querySelector(".question-text");
  questionText.innerHTML = `${cssQuestions[index].numb}. ${cssQuestions[index].question}`;
  let optionTag = `<div class="option"><span>${cssQuestions[index].options[0]}</span></div>
  <div class="option"><span>${cssQuestions[index].options[1]}</span></div>
  <div class="option"><span>${cssQuestions[index].options[2]}</span></div>
  <div class="option"><span>${cssQuestions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i <= option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected2(this)");
  }
}
function showQuestions3(index) {
  const questionText = document.querySelector(".question-text");
  questionText.innerHTML = `${javascriptQuestions[index].numb}. ${javascriptQuestions[index].question}`;
  let optionTag = `<div class="option"><span>${javascriptQuestions[index].options[0]}</span></div>
  <div class="option"><span>${javascriptQuestions[index].options[1]}</span></div>
  <div class="option"><span>${javascriptQuestions[index].options[2]}</span></div>
  <div class="option"><span>${javascriptQuestions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i <= option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected3(this)");
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    // if answer is incorrect, auto select correct
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // if user has selected, disable all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}
function optionSelected2(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = cssQuestions[questionCount].answer;
  let allOptions = optionList.children.length;
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    // if answer is incorrect, auto select correct
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // if user has selected, disable all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn2.classList.add("active");
}
function optionSelected3(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = javascriptQuestions[questionCount].answer;
  let allOptions = optionList.children.length;
  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    // if answer is incorrect, auto select correct
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // if user has selected, disable all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn3.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}
function questionCounter2(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${cssQuestions.length} Questions`;
}
function questionCounter3(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${javascriptQuestions.length} Questions`;
}
function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `score: ${userScore} / ${questions.length}`;
}
function headerScore2() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `score: ${userScore} / ${cssQuestions.length}`;
}
function headerScore3() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `score: ${userScore} / ${javascriptQuestions.length}`;
}

function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndvalue = (userScore / questions.length) * 100;
  let speed = 20;
  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;
    if (progressStartValue == progressEndvalue) {
      clearInterval(progress);
    }
  }, speed);
}
function showResultBox2() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${cssQuestions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndvalue = (userScore / cssQuestions.length) * 100;
  let speed = 20;
  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;
    if (progressStartValue == progressEndvalue) {
      clearInterval(progress);
    }
  }, speed);
}
function showResultBox3() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${javascriptQuestions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndvalue = (userScore / javascriptQuestions.length) * 100;
  let speed = 20;
  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;
    if (progressStartValue == progressEndvalue) {
      clearInterval(progress);
    }
  }, speed);
}
