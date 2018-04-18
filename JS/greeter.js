var name = prompt('Hi there! What is your name?');
var checkName = function(){
  if (name === ""){
    name = prompt('Please enter your name.')
    checkName();
  }
}
checkName();
var output = document.querySelector('#greeting');
output.innerHTML = "<p>Thanks for visiting, "+ name + "!</p>";
