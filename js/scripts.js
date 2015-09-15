var lowerWord = function(string) {
  var stringLower = string.toLowerCase();
    return stringLower;
  }

  var splitWord = function(string) {
    var stringArray = string.split("");
    return stringArray;
  }

var startWithVowel = function(lowerWord) {
  if(lowerWord.charAt(0) === "a" || lowerWord.charAt(0) === "e" || lowerWord.charAt(0) === "i" ||lowerWord.charAt(0) === "o" ||lowerWord.charAt(0) === "u" ) {
    return true
  }
}

// var wordOneCon = function(word) {
//
// }


var addAY = function(word) {
  var addAYToEnd = word.concat("a", "y");
    return addAYToEnd;
}
//
//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
