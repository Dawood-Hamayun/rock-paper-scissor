//Things to do 

//Add a computer function that defines a computer move randomly out of the three
//Add system for rounds
//Best of 3 wins the whole game (Will require a loop)
let playerScore = 0;
let computerScore = 0;
let round = 0;

//Function that determines the move of the computer
function getComputerMove() {
    let computerMove;
    let randomNum = Math.ceil(Math.random() * 3);
  
    switch (randomNum) {
      case 1:
        computerMove = "rock";
        break;
      case 2:
        computerMove = "paper";
        break;
      case 3:
        computerMove = "scissors";
        break;
    }
  
    return computerMove;
  }


//Function that defines the winner of every roundc
function roundResults(){
  const results = [
    { player: "rock", computer: "scissors", outcome: "player" },
    { player: "rock", computer: "paper", outcome: "computer" },
    { player: "paper", computer: "rock", outcome: "player" },
    { player: "paper", computer: "scissors", outcome: "computer" },
    { player: "scissors", computer: "rock", outcome: "computer" },
    { player: "scissors", computer: "paper", outcome: "player" },
    { player: "paper", computer: "paper", outcome: "tie" },
    { player: "scissors", computer: "scissors", outcome: "tie" },
    { player: "rock", computer: "rock", outcome: "tie" },
  ];

  const match = results.find(
    (result) => result.player === playerChoice && result.computer === computerChoice
  );
  
  if (match) {
    if (match.outcome === "player") {
      playerScore++;
      console.log("Player Won");
    } else if (match.outcome === "computer") {
      computerScore++;
      console.log("Computer Won");
    } else {
      console.log("It's a tie");
    }
  }
}


//Defining Function for updating the score Live
function updateScore() {
  document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore} `;
  document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
}

  
//Defining the Player Moves
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissors')



rock.addEventListener('click', () => {
    playerChoice = "rock";
    computerChoice = getComputerMove();
    roundResults();
    updateScore();
})

paper.addEventListener('click', () => {
    playerChoice = "paper";
    computerChoice = getComputerMove();
    roundResults();
    updateScore();
})

scissor.addEventListener('click', () => {
    playerChoice = "scissors"
    computerChoice = getComputerMove();
    roundResults();
    updateScore();
})




  


