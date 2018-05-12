function stringPrinter(starterString){
  document.querySelector('#output').innerHTML += starterString;

}

function funnySentence(noun, adjective, verb, adverb){
  var sentence = "The "+ adjective +" " + noun +" " + verb + " " + adverb + ".";
  stringPrinter(sentence);
}
