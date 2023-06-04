//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn1 = document.getElementById("next-button1");
let nextBtn2 = document.getElementById("next-button2");
let nextBtn3 = document.getElementById("next-button3");
let nextBtn4 = document.getElementById("next-button4");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let scoreBoard = document.getElementById("scoreboard");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton1 = document.getElementById("start-button1");
let startButton2 = document.getElementById("start-button2");
let startButton3 = document.getElementById("start-button3");
let startButton4 = document.getElementById("start-button4");
let restart1 = document.getElementById("restart1");
let restart2 = document.getElementById("restart2");
let restart3 = document.getElementById("restart3");
let restart4 = document.getElementById("restart4");
let Home = document.getElementById("home");
let fininteractions = document.querySelector("final-interactions");
let questionCount;
let scoreCount = 0;
let attempt = 0;
let count = 101;
let countdown;
let score = document.getElementById("score");
let percent = document.getElementById("percent");
let right = document.getElementById("right");
let attempted = document.getElementById("Attempted");
let wrong = document.getElementById("wrong");

//Questions and Options array
const quizArray1 = [
  {
    id: "0",
    question: "The present age of Aradhana and Aadrika is in the ratio 3:4. 5 years back, the ratio of their ages was 2:3. What is the present age of Aradhana?",
    options: ["12 years", "15 years", "20 years", "22 years"],
    correct: "15 years",
  },
  {
    id: "1",
    question: "If the total ages of Iqbal and Shikhar is 12 years more than the total age of Shikhar and Charu. Charu is how many years younger than Iqbal?",
    options: ["11 years", "13 years", "15 years", "none of the above"],
    correct: "none of the above",
  },
  {
    id: "2",
    question: "A father is twice as old as his daughter. If 20 years ago, the age of the father was 10 times the age of the daughter, what is the present age of the father?",
    options: ["40 years", "32 years", "33 years", "45 years"],
    correct: "45 years",
  },
  {
    id: "3",
    question: "Arun is 2 years older than Bharat who is twice as old as Charat. If the total of the ages of Arun, Bharat and Charat be 27, then how old is Bharat?",
    options: ["10 years", "12 years", "13 years", "15 years"],
    correct: "10 years",
  },
  {
    id: "4",
    question: "The sum of the ages of a daughter and mother is 56 years; after four years the age of the mother will be three times that of the daughter. What is the age of the daughter and the mother, respectively?",
    options: ["12 years, 41 years","12 years, 30 years","11 years, 34 years","12 years, 44 years"],
    correct: "12 years, 44 years",
  },
  {
    id: "5",
    question: "Sita's mother was 4 times of Sita's age ten years ago. After ten years, she will be twice as old as Sita. How old is Sita today? ",
    options: ["10 years","15 years","20 years","22 years"],
    correct: "20 years",
  },
  {
    id: "6",
    question: "15 years hence a man will be 4 times as old as he was 15 years ago, His present age is?",
    options: ["15","20","25","30"],
    correct: "25",
  },
  {
    id: "7",
    question: "Hitesh is 40 years old, Jitesh is 60 years old. How many years ago their ratio was 3:5?",
    options: ["8","9","10","12"],
    correct: "10",
  },
  {
    id: "8",
    question: "The ages of Ram and Mohan differ by 16 years. Six years ago, Mohan's age was thrice the age of Ram's, find their present ages.",
    options: ["14 years, 30 years","12 years, 28 years","16 years, 34 years","18 years, 38 years"],
    correct: "14 years, 30 years",
  },
  {
    id: "9",
    question: "A man is 3 years older than his wife and four times as old as his son. If the son becomes 15 years old after 3 years, what is the present age of the wife?",
    options: ["60 years","51 years","48 years","45 years"],
    correct: "45 years",
  },
];

const quizArray2 = [
  {
    id: "0",
    question: "A tank is filled in 5 hours by three pipes A, B, C. The pie C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    options: ["22 hours", "27 hours", "35 hours", "cannot be determined"],
    correct: "35 hours",
  },
  {
    id: "1",
    question: "Pipe A can fill a tank in 30 hours and pipe B in 45 hours. If both the pipes are opened in an empty tank, how much time will they take to fill it? ",
    options: ["25 hours", "18 hours", "27 hours", "10 hours"],
    correct: "18 hours",
  },
  {
    id: "2",
    question: "Three pipes A, B and C can fill a tank in 12 hrs, 4 hrs and 24 hrs respectively. Pipe A is opened at 6 a.m., B at 8 a.m. and C at 9 a.m. At what time will the tank be full? ",
    options: ["09:30 a.m.", "10:00 a.m.", "10:20 a.m.", "10:40 a.m."],
    correct: "10:20 a.m.",
  },
  {
    id: "3",
    question: "A tap can fill a cistern in 12 hours. After half the tank is filled, 2 more similar taps are opened. What is the total time taken to fill the tank completely? ",
    options: ["9 hours", "6 hours", "8 hours", "4 hours"],
    correct: "8 hours",
  },
  {
    id: "4",
    question: "A tapcan fill the tank in 6 hours. After half the tank is filled, 3 more similar taps are opened. What is totaltime taken to completely fill the tank?",
    options: ["4hrs", "3 hrs 15 min", "3 hrs 45 min", "4hrs 15 min"],
    correct: "3 hrs 45 min",
  },
  {
    id: "5",
    question: "Two pipes P and Q can fill a cistern in 10 minutes and 15 minutes respectively. But an empty pipe R can empty it in 5 minutes. The pipes P and Q are opened for 4 minutes and then the empty pipe R is also opened. In what time will the cistern be emptied?",
    options: ["10 min", "20 min", "15 min", "12 min"],
    correct: "20 min",
  },
  {
    id: "6",
    question: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2hrs 20min. to fill the tank. the leak can drain all the water in the tank in?",
    options: ["43 hours", "9 hours", "10 hours", "14 hours"],
    correct: "14 hours",
  },
  {
    id: "7",
    question: "12 buckets can fill a tank when the capacity of each bucket is 13.5 liters. How many buckets will be needed to fill the same tank if the capacity is 9 liters",
    options: ["9", "112", "24", "18"],
    correct: "18",
  },
  {
    id: "8",
    question: "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after",
    options: ["5 min", "9 min", "10 min", "15 min"],
    correct: "9 min",
  },
  {
    id: "9",
    question: "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
    options: ["6 hours", "10 hours", "15 hours", "30 hours"],
    correct: "15 hours",
  },
];

const quizArray3 = [
  {
    id: "0",
    question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is",
    options: ["15", "16", "18", "25"],
    correct: "16",
  },
  {
    id: "1",
    question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    options: ["30%", "70%", "100%", "250%"],
    correct: "",
  },
  {
    id: "2",
    question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    options: ["3", "4", "5", "6"],
    correct: "5",
  },
  {
    id: "3",
    question: "Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is",
    options: ["4.57%", "5.45%", "10%", "12%"],
    correct: "5.45%",
  },
  {
    id: "4",
    question: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
    options: ["Rs. 2000", "Rs. 2200", "Rs. 2400", "Data inadequate"],
    correct: "Rs. 2000",
  },
  {
    id: "5",
    question: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
    options: ["Rs. 18.20", "Rs. 70", "Rs. 72", "Rs. 88.25"],
    correct: "Rs. 72",
  },
  {
    id: "6",
    question: "If selling price is doubled, the profit triples. Find the profit percent.",
    options: ["66.66", "100", "105.33", "120"],
    correct: "100",
  },
  {
    id: "7",
    question: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
    options: ["Rs. 1090", "Rs. 1160", "Rs. 1190", "Rs. 1202"],
    correct: "Rs. 1190",
  },
  {
    id: "8",
    question: "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
    options: ["3.5", "4.5", "5.6", "6.5"],
    correct: "5.6",
  },
  {
    id: "9",
    question: "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is",
    options: ["30%", "33.33%", "35%", "44%"],
    correct: "44%",
  },
];

const quizArray4 = [
  {
    id: "0",
    question: "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
    options: ["1/2", "2/5", "8/15", "9/20"],
    correct: "9/20",
  },
  {
    id: "1",
    question: "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
    options: ["10/21", "11/21", "2/7", "5/7"],
    correct: "10/21",
  },
  {
    id: "2",
    question: "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
    options: ["1/3", "3/4", "7/19", "8/21"],
    correct: "1/3",
  },
  {
    id: "3",
    question: "What is the probability of getting a sum 9 from two throws of a dice?",
    options: ["1/6", "1/8", "1/9", "1/12"],
    correct: "1/9",
  },
  {
    id: "4",
    question: "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
    options: ["1/4", "3/4", "7/8", "3/8"],
    correct: "7/8",
  },
  {
    id: "5",
    question: "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
    options: ["1/2", "3/4", "3/8", "5/16"],
    correct: "3/4",
  },
  {
    id: "6",
    question: "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
    options: ["21/46", "25/117", "1/50", "3/25"],
    correct: "21/46",
  },
  {
    id: "7",
    question: "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",
    options: ["1/10", "2/5", "2/7", "5/7"],
    correct: "2/7",
  },
  {
    id: "8",
    question: "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
    options: ["1/15", "25/57", "35/256", "1/221"],
    correct: "1/221",
  },
  {
    id: "9",
    question: "Two dice are tossed. The probability that the total score is a prime number is:",
    options: ["1/6", "5/12", "1/2", "7/9"],
    correct: "5/12",
  },
];

//sve name



//Next Button
nextBtn1.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray1.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      restart1.classList.remove("hide");
      nextBtn1.classList.add("hide");
      caluculateResults();
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + "/" + quizArray1.length ;
      //display score
      scoreBoard.innerHTML = "current score =" + scoreCount
      //display quiz
      quizDisplay(questionCount);
    }
  })
);

nextBtn2.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray2.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      restart2.classList.remove("hide");
      nextBtn2.classList.add("hide");
      caluculateResults();
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + "/" + quizArray2.length ;
      //display score
      scoreBoard.innerHTML = "current score =" + scoreCount
      //display quiz
      quizDisplay(questionCount);
    }
  })
);

nextBtn3.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray3.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      restart3.classList.remove("hide");
      nextBtn3.classList.add("hide");
      caluculateResults();
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + "/" + quizArray3.length ;
      //display score
      scoreBoard.innerHTML = "current score =" + scoreCount
      //display quiz
      quizDisplay(questionCount);
    }
  })
);

nextBtn4.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray4.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      restart4.classList.remove("hide");
      nextBtn4.classList.add("hide");
      caluculateResults();
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + "/" + quizArray4.length ;
      //display score
      scoreBoard.innerHTML = "current score =" + scoreCount
      //display quiz
      quizDisplay(questionCount);
    }
  })
);


//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}`;
    if (count == 0) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      caluculateResults();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator1() {
  //randomly sort questions
  quizArray1.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray1) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + "/" + quizArray1.length;
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function quizCreator2() {
  //randomly sort questions
  quizArray2.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray2) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + "/" + quizArray2.length;
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function quizCreator3() {
  //randomly sort questions
  quizArray3.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray3) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + "/" + quizArray3.length;
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function quizCreator4() {
  //randomly sort questions
  quizArray4.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray4) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + "/" + quizArray4.length;
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}


//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray1[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;

  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray1[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  if (userSolution === quizArray2[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray2[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  if (userSolution === quizArray3[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray3[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  if (userSolution === quizArray4[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray4[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial1() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  attempt = 0;
  count = 101;
  clearInterval(countdown);
  timerDisplay();
  quizCreator1();
  quizDisplay(questionCount);
}

function initial2() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  attempt = 0;
  count = 101;
  clearInterval(countdown);
  timerDisplay();
  quizCreator2();
  quizDisplay(questionCount);
}

function initial3() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  attempt = 0;
  count = 101;
  clearInterval(countdown);
  timerDisplay();
  quizCreator3();
  quizDisplay(questionCount);
}

function initial4() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  attempt = 0;
  count = 101;
  clearInterval(countdown);
  timerDisplay();
  quizCreator4();
  quizDisplay(questionCount);
}

//when user click on start button
startButton1.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn1.classList.remove("hide");
  initial1();
});

startButton2.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn2.classList.remove("hide");
  initial2();
});

startButton3.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn3.classList.remove("hide");
  initial3();
});

startButton4.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn4.classList.remove("hide");
  initial4();
});

//when user clicks on restart button
restart1.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn1.classList.remove("hide");
  restart1.classList.add("hide");
  initial1();
});

restart2.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn2.classList.remove("hide");
  restart2.classList.add("hide");
  initial2();
});

restart3.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  displayContainer.classList.remove("hide");
  nextBtn3.classList.remove("hide");
  restart3.classList.add("hide");
  initial3();
});

restart4.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  displayContainer.classList.remove("hide");
  restart4.classList.add("hide");
  nextBtn4.classList.remove("hide");
  initial4();
});

//when user clicks on home button
Home.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  startScreen.classList.remove("hide");
  restart1.classList.add("hide");
  restart2.classList.add("hide");
  restart3.classList.add("hide");
  restart4.classList.add("hide");
  
});

//caluculate results
function caluculateResults() {
  right.innerHTML = scoreCount;
  percent.innerHTML = scoreCount*10+"%";
  attempted.innerHTML = attempt;
  wrong.innerHTML = attempt - scoreCount
  
}

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};