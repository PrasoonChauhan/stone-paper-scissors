let userScore = 0;
let comScore = 0;
let userChoice;
let comChoice;

const choiceElement = document.querySelectorAll(".choice");
let resultElement = document.querySelector("#result");
let userScoreElement = document.querySelector("#userScore");
let comScoreElement = document.querySelector("#comScore");
let playAgainElement = document.querySelector("#playAgain");

// function computerChoice ()
// {
//     const array = ["stone","paper","scissors"];
//    let randomIndex =  Math.floor(Math.random()*3);
//    comChoice = array[randomIndex];
// //    console.log(comChoice)

// }

choiceElement.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");

    const array = ["stone", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    comChoice = array[randomIndex];
    // alert`Computer Choice is ${comChoice}`;
    playgame(userChoice, comChoice);
  });
});

playAgainElement.addEventListener("click", () => {
  userScore = 0;
  comScore = 0;
  comScoreElement.innerHTML = `${comScore}`;
  userScoreElement.innerHTML = `${userScore}`;
  playAgainElement.style.display = "none";
  resultElement.style.backgroundColor = "teal";
  resultElement.innerHTML = `Choose Your Choice!`;
});

function playgame(userChoice, comChoice) {
  if (userChoice === comChoice) {
    draw();
  } else {
    let user;
    if (userChoice === "stone") {
      user = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      user = comChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      user = comChoice === "stone" ? false : true;
    }
    result(user);
  }
}

function result(user) {
  if (user == false) {
    comScore++;
    comScoreElement.innerHTML = `${comScore}`;
    resultElement.style.backgroundColor = "red";
    resultElement.innerText = "COMPUTER WIN";
    playAgain();
  } else {
    userScore++;
    userScoreElement.innerHTML = `${userScore}`;
    console.log("user win");
    resultElement.style.backgroundColor = "green";
    resultElement.innerText = "USER WIN";
    playAgain();
  }
}

function draw() {
  resultElement.innerText = "It's Draw";
  resultElement.style.backgroundColor = "black";
  playAgain();
}
function playAgain() {
  playAgainElement.style.display = "inherit";
}
