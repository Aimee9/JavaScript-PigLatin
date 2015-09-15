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
    expect(startWithVowel("apple")).to.equal(true);
  });
});


describe('startWithConsonant', function(){
  it("will loop until finds a vowel and put consonants at the end", function() {
    expect(startWithConsonant(["b", "a", "n", "a", "n", "a"])).to.eql(["a", "n", "a", "n", "a", "b"]);
  });
});
