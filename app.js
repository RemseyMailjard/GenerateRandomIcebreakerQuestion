const quizData = [
  {
    question: "What keyword is used to declare a function in JavaScript?",
    a: "var",
    b: "function",
    c: "const",
    d: "let",
    correct: "b",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    a: "call myFunction()",
    b: "call function myFunction()",
    c: "myFunction()",
    d: "function myFunction()",
    correct: "c",
  },
  {
    question: "What is an anonymous function in JavaScript?",
    a: "A function declared with a specific name",
    b: "A function stored as a variable",
    c: "A function that does not have any parameters",
    d: "A function without a name",
    correct: "d",
  },
  {
    question:
      "Which syntax is correct for an arrow function that takes no arguments and returns 10?",
    a: "() => 10",
    b: "function() => 10",
    c: "() = 10",
    d: "function => 10",
    correct: "a",
  },
  {
    question: "What is a 'callback function'?",
    a: "A function that runs after the completion of another function",
    b: "A function that calls itself",
    c: "A function that is used to call other functions",
    d: "A function that can be used as an argument to other functions",
    correct: "d",
  },
  {
    question:
      "How do you define a function that calculates the square of its input number 'x'?",
    a: "function square(x) { return x * x; }",
    b: "function(x) square { return x + x; }",
    c: "square(x) => { return x * x; }",
    d: "function square(x) => x * x;",
    correct: "a",
  },
  {
    question: "Which is an example of a higher-order function?",
    a: "A function that performs a loop",
    b: "A function that takes another function as an argument or returns a function",
    c: "A function that declares other functions",
    d: "A function that cannot be modified",
    correct: "b",
  },
  {
    question: "What is a pure function in JavaScript?",
    a: "A function that uses global variables",
    b: "A function that changes the state of the system",
    c: "A function where the return value is determined only by its input values, without observable side effects",
    d: "A function that can only be called once",
    correct: "c",
  },
  {
    question:
      "How do you create a function in JavaScript that can only be called once?",
    a: "Using the 'once' keyword before the function declaration",
    b: "By setting a flag variable inside the function",
    c: "Using an IIFE (Immediately Invoked Function Expression)",
    d: "By calling the function immediately after defining it",
    correct: "c",
  },
  {
    question:
      "What feature introduced in ES6 allows for gathering remaining parameters into an array?",
    a: "The spread operator",
    b: "The rest parameters",
    c: "The array method",
    d: "The gather operator",
    correct: "b",
  },
];

let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
});

const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};
loadQuestion(index);
