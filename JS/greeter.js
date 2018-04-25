var firstname = prompt('Hi there! What is your name?');
var lastname = prompt('What is your last name?');
var checkName = function(){
  if (firstname && lastname === ""){
    name = prompt('Please enter your name.')
    checkName();
  }
}
checkName();
var output = document.querySelector('#greeting');
if (name){
output.innerHTML = "<p>Thanks for visiting, "+ firstname +" " +lastname" !</p>";
} else {
  output.innerHTML = "<p>Please tell us your name!</p>";
}
