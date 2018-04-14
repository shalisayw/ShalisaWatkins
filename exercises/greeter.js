var name = prompt('What is your name?');
var checkName = function(){
  if (name === ""){
    name = prompt('What is your name for real?')
    checkName();
  }
}
checkName();
alert('Hello ' + name);
