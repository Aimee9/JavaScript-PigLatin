var lowerWord = function(string) {
  var stringLower = string.toLowerCase();
  return stringLower;
};

var splitWord = function(string) {
  var stringArray = string.split("");
  return stringArray;
};

var startWithVowel = function(splitWord) {
  var vowels = ["a", "e", "i", "o", "u"]
  return vowels.indexOf(splitWord[0]) !== -1;
};

var startWithConsonant = function(splitWord) {
    var consonant = splitWord.shift();
    splitWord.push(consonant);

  return splitWord;
};

var startWithTwoOrMoreCons = function(splitWord) {
  while(!startWithVowel(splitWord)) {
    startWithConsonant(splitWord);
  } return splitWord;
};



// var wordOneCon = function(word) {
//
// }


var addAY = function(word) {
  var addAYToEnd = word.concat("a", "y");
    return addAYToEnd;
}


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number= parseInt($("input#number").val());
    var result = factorial(number);

      $(".number").text(number)
      $(".final").text(result)
       $("#result").show()


    event.preventDefault();
  });
});
