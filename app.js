
function computerplay() {
   let num = Math.floor(Math.random()*4)
   let choice = ''
   if(num === 1){
    choice = "Rock"
   } else if ( num === 2){
       choice = "Paper"
   } else {
       choice = "Scissors"
   }
    return choice.toLowerCase();
}
for(i=0; i < 10; i++) {
}

//Event listeners for the 3 options RPS
    let userchoice = ''

    const btnRock = document.querySelector('.rock__btn')
    btnRock.addEventListener('click', () => {
        userchoice = "rock"
    })

    const btnPaper = document.querySelector('.paper__btn')
    btnPaper.addEventListener('click', () => {
        userchoice = "paper"
    })

    const btnScissors = document.querySelector('.scissors__btn')
    btnScissors.addEventListener('click', () => {
        userchoice = "scissors"
    })

//Play Button that calls play() and returns text fed into DIV with the result
const resultDiv = document.querySelector('.results')
const playDiv = document.createElement('div');

const playBtn = document.querySelector('.playBtn');
playBtn.addEventListener('click', () => {
    playDiv.textContent = play(userchoice)
    resultDiv.appendChild(playDiv)
})
    
    

//Plays one round of the game
function play(userchoice) {
    
    

    let choice = computerplay();
    
    let message = ""
    if(choice === "rock" && userchoice === 'paper') {
        return  message = `You Win! You chose ${userchoice} and the machine picked ${choice}`
    } else if (choice === "paper" && userchoice === "scissors" ){
        return  message = `You Win! You chose ${userchoice} and the machine picked ${choice}`
    }else if ( choice === "scissors" && userchoice === "rock") {
        return message =`You Win! You chose ${userchoice} and the machine picked ${choice}`
    }else if ( choice === userchoice){
         return message =`Tie you both threw ${choice}`
    }else {
        return message =`The Machine Overlord WINS. He picked ${choice} and you picked ${userchoice} `
    }
    }

//Plays and tracks 5 rounds
function game(){
    let humanScore = 0
    let compScore = 0

    for(i=1; i<6; i++){
        let game = play()
        if(game.charAt(1)==="o"){
            console.log(game)
            humanScore++
            console.log("Round Number: " + i) 
            console.log("You: " + humanScore + " " + "The Machine: "
            + compScore)
        }
        else if (game.charAt(1)==="i"){
            console.log(game);
            if(i>0){
                i--
            }
            console.log("Round Number: " + i) 
            console.log("You: " + humanScore + " " + "The Machine: "
            + compScore)
        }
        else {
            console.log(game)
            compScore++
            console.log("Round Number: " + i) 
            console.log("You: " + humanScore + " " + "The Machine: "
            + compScore)
        }
    }
    if( humanScore>compScore){
        console.log("You have vanquished the Machines!")
    }else{
        console.log("The Machine beat you!")

    }
    //Asks the user if they wish to play another round, or exit
    let again = prompt("Would you like to play again? Y / N?")
    if (again.toLowerCase() === "y"){
        console.clear();
        game()
    }else{
        console.clear();
        console.log('GOODBYE THEN')
    }
}


