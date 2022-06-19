// Biggest Number
function maxRedigit(num){
    if(num <= 100 || num >= 999){
      console.log(null);
    }else{
      let numChanged = parseInt(num.toString().split("").sort((a, b) => b - a).join(""));
      console.log(numChanged);
    }
  }
  
maxRedigit(123);

// Map Array Data

// Alternate Case

// Multiple 3 and 5

// Nearest Fibonacci

// Reverse Words
function reverseWords(text){
  let reverseArr = text.split(" ").map(word => word.split("").reverse().join(""));
  return reverseArr.join(" ");
}

reverseWords("i am a great human")
// Find Middle Alphabet
