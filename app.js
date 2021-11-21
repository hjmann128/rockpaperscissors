//global varaible declartions
 let humanscore = 0;
 let computerscore = 0;
 let round = 0;

 //selecting all the nodes
 const roundmain = document.querySelector('.round')
 const roundDiv = document.createElement('div')

 const humanMain = document.querySelector('.human')
 const humanDiv = document.createElement('div')

 const compMain = document.querySelector('.machine');
 const compDiv = document.createElement('div')

 const playGame = document.querySelector('.play')

 const resultDiv = document.querySelector('.results')
 const playDiv = document.createElement('div');

const playBtn = document.querySelector('.playBtn');
 



for(i=0; i < 10; i++) {
}

//Event listeners for the 3 options RPS
    let userchoice = ''

    const btnRock = document.querySelector('.rock__btn')
    btnRock.addEventListener('click', () => {
        btnRock.classList.toggle('border')
        btnScissors.classList.remove('border')
        btnPaper.classList.remove('border')
        userchoice = "rock"
    })

    const btnPaper = document.querySelector('.paper__btn')
    btnPaper.addEventListener('click', () => {
        btnPaper.classList.toggle('border')
        btnRock.classList.remove('border')
        btnScissors.classList.remove('border')
        userchoice = "paper"
    })

    const btnScissors = document.querySelector('.scissors__btn')
    btnScissors.addEventListener('click', () => {
        btnScissors.classList.toggle('border')
        btnPaper.classList.remove('border')
        btnRock.classList.remove('border')
        userchoice = "scissors"
    })

//Play Button that calls play() and returns text fed into DIV with the result

playBtn.addEventListener('click', () => {
    playDiv.textContent = play(userchoice)
    resultDiv.appendChild(playDiv)

    //updating the round count after every press
    
    roundDiv.textContent = round
    roundmain.appendChild(roundDiv)

    
    humanDiv.textContent = humanscore;
    humanMain.appendChild(humanDiv)

    
    compDiv.textContent = computerscore;
    compMain.appendChild(compDiv)

    //logic to determine when someone has won 
    const body = document.querySelector(".body")
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('message')
    if(humanscore === 5){
        playDiv.textContent = `After ${round} rounds you have vanquished the machine!`
        humanDiv.textContent = ''
        compDiv.textContent = ''
    
    }else if (computerscore===5){
        playDiv.textContent = `The Machine Overlord has won the game in ${round} rounds :( `
        humanDiv.textContent = ''
        compDiv.textContent = ''
        
    }
})
   
//Computer choice function
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

//Plays one round of the game
function play(userchoice) {
    
    
    round++;
    let choice = computerplay();

    let message = ""
    if(choice === "rock" && userchoice === 'paper') {
        humanscore++
        return  message = `You Win this round! You chose ${userchoice} and the machine picked ${choice}`
    } else if (choice === "paper" && userchoice === "scissors" ){
        humanscore++
        return  message = `You Win this round! You chose ${userchoice} and the machine picked ${choice}`
    }else if ( choice === "scissors" && userchoice === "rock") {
        humanscore++
        return message =`You Win this round! You chose ${userchoice} and the machine picked ${choice}`
    }else if ( choice === userchoice){
         return message =`Tie you both threw ${choice}`
    }else {
        computerscore++
        return message =`The Machine Overlord wins this round. He picked ${choice} and you picked ${userchoice} `
    }
    }


