var response = prompt("You snap awake and look around groggily. Do you return to sleep or get up?");

if(response === "sleep"){
    response = prompt("You easily fall back asleep. You feel a nice breeze. You hear your name. Look or Ignore?");
} else if (response === "get up") {
    response = prompt("You get up and walk to the window. In the light, you see a figure. Close the curtain or keep watching.");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

if(response === "Close the curtain"){
   response = prompt("You close the curtain and walk to your kitchen. As you grab a glass, you hear a tapping noise from your living room. Check it out or Ignore?");
} else if (response === "keep watching") {
  response = prompt("The figure looks up. Your hair stands on end as you realize something is not right.");
}
 else {
   prompt("Are you giving up? Y/N?")
 }

if (response === "Y"){
  alert("Thanks for playing!");
}
else{
  alert("Let's see what happens next.");
}
