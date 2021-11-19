
function computerplay() {
   let num = Math.floor(Math.random()*4)
   let choice = ''
   if(num === 1){
    choice = "Rock"
   } else if ( num === 2){
       choice = "Paper"
   } else {
       choice = "Scissor"
   }
    return choice
}
for(i=0; i < 10; i++) {
console.log(computerplay())

}