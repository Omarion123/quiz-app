const javascriptQuestions = [
  {
    numb: 1,
    question: "What is JavaScript?",
    answer: "C. A programming language",
    options: [
      "A. A type of coffee",
      "B. A style of web design",
      "C. A programming language",
      "D. A brand of computer",
    ],
  },
  {
    numb: 2,
    question: "Which programming paradigm does JavaScript primarily follow?",
    answer: "B. Object-Oriented Programming (OOP)",
    options: [
      "A. Functional Programming (FP)",
      "B. Object-Oriented Programming (OOP)",
      "C. Procedural Programming (PP)",
      "D. Declarative Programming (DP)",
    ],
  },
  {
    numb: 3,
    question: "How do you declare a variable in JavaScript?",
    answer: "A. Using the 'var', 'let', or 'const' keyword",
    options: [
      "A. Using the 'var', 'let', or 'const' keyword",
      "B. By typing 'variable' followed by the variable name",
      "C. By using curly braces",
      "D. JavaScript automatically declares variables",
    ],
  },
  {
    numb: 4,
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    answer: "C. Attaching event handlers to elements",
    options: [
      "A. Creating new HTML elements",
      "B. Adding comments to the code",
      "C. Attaching event handlers to elements",
      "D. Performing mathematical calculations",
    ],
  },
  {
    numb: 5,
    question:
      "Which JavaScript framework is often used for building user interfaces?",
    answer: "D. React",
    options: ["A. Angular", "B. Vue.js", "C. Ember", "D. React"],
  },
];

// To get a random JavaScript question, you can use the following code:
const randomJavascriptQuestion =
  javascriptQuestions[Math.floor(Math.random() * javascriptQuestions.length)];

console.log(randomJavascriptQuestion);
