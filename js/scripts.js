var lowerWord = function(string) {
  var stringLower = string.toLowerCase();
  return stringLower;
};

var splitWord = function(lowerWord) {
  var stringArray = lowerWord.split("");
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

if(splitWord[0] === ("y")) {
  var yStart = splitWord.shift();
  splitWord.push(yStart);
  return splitWord;
} else {
  while(!startWithVowel(splitWord)) {
    if(splitWord[0] === ("q")) {
      var qStart = splitWord.shift();
      splitWord.push(qStart);
      var uStart = splitWord.shift();
      splitWord.push(uStart);
      return splitWord;
    }
    else if(splitWord[0] === ("y")) {
      return splitWord;
    }
    else {
      startWithConsonant(splitWord);
    }
  } return splitWord;
}
};

var backToWordAndAddAy = function(splitWord) {
  return splitWord.toString().replace(/[^\w]/g, "") + "ay";
}

var pigLatin = function(word) {
  var word = lowerWord(word);
  var splitting = splitWord(word);
  if (startWithVowel(splitting) === true) {
    return backToWordAndAddAy(splitting);
    } else {
      startWithTwoOrMoreCons(splitting);
      return backToWordAndAddAy(splitting);
    }
};


$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    $(".result").remove();
    var word= ($("input#word").val());
    var result = pigLatin(word);

      $(".pigWord").text(result);
       $("#result").show();


    event.preventDefault();
  });
});
