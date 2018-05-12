var gameRound = function(){
  var userChoice = prompt("Choose Rock, Paper, or Scissors by typing in caps 'R', 'P', or 'S'");
  var rng = Math.random();
  var computerChoice = "R";

  if(rng > 0.66) {
      computerChoice = "P";
  } else if (rng > 0.33) {
      computerChoice = "S";
  }
  var userWins = "You win!";
  var computerWins = "The computer wins!";


  if(computerChoice !== userChoice){
      if(computerChoice === "R"){
          if (userChoice === "S") {
              alert(computerWins);
          } else {
              alert(userWins);
          }
      } else if (computerChoice === "P") {
          if( userChoice === "R") {
              alert(computerWins);
          } else {
              alert(userWins);
          }
      } else {
          if( userChoice === "P") {
              alert(computerWins);
          } else {
              alert(userWins);
          }
      }
  } else {
      alert('Tie!');
  }
};
var roundCounter = 0;
while (roundCounter < 5){
  gameRound();
  roundCounter++;
}
