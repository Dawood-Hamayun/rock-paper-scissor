//Things to do 

//Add a computer function that defines a computer move randomly out of the three
//Add system for rounds
//Best of 3 wins the whole game (Will require a loop)
let playerScore = 0;
let computerScore = 0;

function getComputerMove() {
    let computerMove;
    let randomNum = Math.floor(Math.random() * 3);
  
    switch (randomNum) {
      case 0:
        computerMove = "rock";
        break;
      case 1:
        computerMove = "paper";
        break;
      case 2:
        computerMove = "scissors";
        break;
    }
  
    return computerMove;
  }

function roundResults(){
    const results = [
        { player: "rock", computer: "scissors", outcome: "player" },
        { player: "rock", computer: "paper", outcome: "computer" },
        { player: "paper", computer: "rock", outcome: "player" },
        { player: "paper", computer: "scissors", outcome: "computer" },
        { player: "scissors", computer: "rock", outcome: "computer" },
        { player: "scissors", computer: "paper", outcome: "player" },
      ];
      
      const match = results.find(
        (result) => result.player === playerChoice && result.computer === getComputerMove());
      
      if (match) {
        if (match.outcome === "player") {
          playerScore++;
          console.log("Player won");
        } else if (match.outcome === "computer") {
          computerScore++;
          console.log("Computer won");
        } else {
          console.log("Match ended in a tie");
        }
      }
      return match.outcome;
  }


// while (playerScore < 2 && computerScore < 2) {
//     // Get player choice and computer choice
  
//     // Determine the winner
  
//     if (match.outcome === "player") {
//       playerScore++;
//     } else if (match.outcome === "computer") {
//       computerScore++;
//     }
//   }
  
//   if (playerScore === 2) {
//     // player wins the match
//   } else {
//     // computer wins the match
//   }
  

const rock = document.getElementById('rock')
rock.addEventListener('click', () => {
    playerChoice = "rock";
    roundResults();
})

const paper = document.getElementById('paper')
paper.addEventListener('click', () => {
    playerChoice = "paper";
    roundResults();
})

const scissor = document.getElementById('scissors')
scissor.addEventListener('click', () => {
    playerChoice = "scissors";
    roundResults();
})