"use strict"

let xPlay = true;
let arr = ['', '', '', '', '', '', '', '', ''];
let play = true;
let blocks = document.getElementsByClassName("block");
let button = document.querySelector("button");
button.classList.add("butt");

         button.innerHTML = "PLAY AGAIN";
document.addEventListener("click", (ev) => {
   if (ev.target.className === "block" && ev.target.innerHTML === "" && play) {
     
      

      playing(ev.target);
   }
});

function playing(block) {
  


   
   if (xPlay && play) {
     
      block.innerHTML = 'X';
      xPlay = !xPlay;
      block.classList.add("x");
      blocks = document.getElementsByClassName("block");
      for (let i = 0; i < blocks.length; i++) {
         arr[i] = blocks[i].innerHTML;
      }
      checkForWin(arr,'X');
   }
   else  if(!xPlay && play){
      block.innerHTML = 'O';
      xPlay = !xPlay;
      block.classList.add("O");
      blocks = document.getElementsByClassName("block");
      for (let i = 0; i < blocks.length; i++) {
         arr[i] = blocks[i].innerHTML;
      }
      checkForWin(arr,'O');
      }
     
}

  

function checkForWin(board, player) {

   const winPatterns = [
      [0, 1, 2],  // Row 1
      [3, 4, 5],  // Row 2
      [6, 7, 8],  // Row 3
      [0, 3, 6],  // Column 1
      [1, 4, 7],  // Column 2
      [2, 5, 8],  // Column 3
      [0, 4, 8],  // Diagonal 1
      [2, 4, 6]   // Diagonal 2
   ];


   for (let pattern of winPatterns) {
      let [a, b, c] = pattern;
      if (board[a] === player && board[b] === player && board[c] === player) {
     
         document.getElementById("won").innerHTML = `Player ${player}  wins!`;
         document.getElementById("won").style.transform = "translateY(50px)";
         document.getElementById("won").style.opacity = "1";
         document.querySelector(".butt").style.transform = "translateY(-50px)";
         document.querySelector(".butt").style.opacity = "1";
       
         play = false;
         

      }
      else{
         let count = 0;
         for(let i = 0;i<9;i++){
            if(arr[i]!=''){
               count++;
            }
         }
         if(count===9){
            document.getElementById("won").innerHTML = `Tie!`;
         document.getElementById("won").style.transform = "translateY(50px)";
         document.getElementById("won").style.opacity = "1";
         document.querySelector(".butt").style.transform = "translateY(-50px)";
         document.querySelector(".butt").style.opacity = "1";
         }
      }
   }

}
button.addEventListener("click",() =>{

   location.reload();
});