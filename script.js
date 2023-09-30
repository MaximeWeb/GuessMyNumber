'use strict';


/// recuperer une classe (.) , si c'est une id (#)
/*const message = document.querySelector('.message')

message.textContent = "Hello"

// click , mouseover , load , 
 document.querySelector('.check').addEventListener('load', () => {

    console.log('click')
}) 


document.querySelector('.check').addEventListener('click', () => {
console.log(document.querySelector('.guess').value)

})*/
/*document.querySelector('.check').addEventListener('load', () => {

    console.log('click')
}) 
document.querySelector('.check').addEventListener('click', () => {
    console.log(document.querySelector('.guess').value)

})*/


let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20
let hightScore = 0 
let currentPlayer = "Player 1";
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', () => {
 const guess = Number(document.querySelector('.guess').value)

 if(!guess || guess < 0) {
    document.querySelector('.message').textContent = "Please choice a number between 1 and 20 "


 } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber
    if (score > hightScore) {
        hightScore = score 
        document.querySelector('.highscore').textContent = hightScore
    }
    currentPlayer = currentPlayer === "Player 1" ? "Player 1" : "Player 2";
    document.querySelector('.winner').textContent = currentPlayer
    document.querySelector('.message').textContent = `You win ${currentPlayer} , congratulation ! `


 } else if (guess < secretNumber) {
    if (score > 1) {
         document.querySelector('.message').textContent = "To low ! "
      score-- 
       document.querySelector('.score').textContent = score
       currentPlayer = currentPlayer === "Player 2 playing" ? "Player 1 playing" : "Player 2 playing";
       document.querySelector('.player').textContent = currentPlayer
      }
     else {
    document.querySelector('.message').textContent = "You loose, Try again ! "
    document.querySelector('.score').textContent = 0
    document.querySelector('.winner').textContent = "Nobody won"
      }
   

 } else if (guess > secretNumber) {
    if (score > 1) {
         document.querySelector('.message').textContent = "To hight ! "
      score-- 
       document.querySelector('.score').textContent = score
       currentPlayer = currentPlayer === "Player 2 playing" ? "Player 1 playing" : "Player 2 playing";
       document.querySelector('.player').textContent = currentPlayer
      }
     else {
    document.querySelector('.message').textContent = "You loose, Try again ! "
    document.querySelector('.score').textContent = 0
    document.querySelector('.winner').textContent = "Nobody won"
      }
   }
    

 
})


document.querySelector('.again').addEventListener('click', () => {
   score = 20
   secretNumber = Math.trunc(Math.random()*20) +1;
   document.querySelector('.score').textContent = score;
   document.querySelector('.message').textContent = "Start Guessing .. ";
   document.querySelector('.number').textContent = "?";
   document.querySelector('.winner').textContent = "?";
   document.querySelector('.player').textContent = "Player 1 playing"
   document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)];




})

let colors = ['#893D3D','#403D89','#3D894A','#89513D','#897F3D','#7F3D89'];


 

