describe('lowerWord', function() {
  it("will take a take a word and make it all lower case", function() {
    expect(lowerWord("Apple")).to.eql("apple");
  });
});

describe('splitWord', function(){
  it("will take a take a word and split it up into a char array", function() {
    expect(splitWord("apple")).to.eql(["a","p","p","l","e"]);
  });
});

describe('addAY', function(){
  it("will put ay at the end of string array", function() {
    expect(addAY("apple")).to.eql("appleay");
  });
});

describe("startWithVowel", function() {
  it("will return true if array starts with a vowel", function() {
    expect(startWithVowel("opple")).to.equal(true);
  });
});

// describe('wordOneCon', function(){
//   it("will loop until finds a vowel", function() {
//     expect(wordOneCon("banana")).to.eql("ananabay");
//   });
// });
