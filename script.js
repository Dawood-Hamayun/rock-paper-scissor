//Things to do 

//Add a computer function that defines a computer move randomly out of the three
//Add system for rounds
//Best of 3 wins the whole game (Will require a loop)

function computerMove(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // if(randomNumber == 1){
    //     console.log("Computer choose Rock")
    // }
    // else if(randomNumber == 2){
    //     console.log("Computer choose Paper")
    // }
    // else if(randomNumber == 3){
    //     console.log("Computer choose Scissor")
    // }
    return randomNumber;
}


const rock = document.getElementById('rock')
rock.addEventListener('click', () => {
    console.log("You choose rock")
    console.log("Computer choose", computerMove());
})

const paper = document.getElementById('paper')
paper.addEventListener('click', () => {
    console.log("You choose paper")
    console.log("Computer choose", computerMove());
})

const scissor = document.getElementById('scissor')
scissor.addEventListener('click', () => {
    console.log("You choose scissor")
    console.log("Computer choose", computerMove());

})