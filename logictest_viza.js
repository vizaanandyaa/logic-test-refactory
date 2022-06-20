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
function solution(num){
  let sum = 0;
  let getNumber;
  for(getNumber= 1; getNumber < num; getNumber++){
    if(getNumber % 3 === 0 || getNumber % 5 === 0){
      sum += getNumber;
    }
  }
  return sum;
}

solution(10);
solution(20);

// Nearest Fibonacci

// Reverse Words
function reverseWords(text){
  let reverseArr = text.split(" ").map(word => word.split("").reverse().join(""));
  return reverseArr.join(" ");
}

reverseWords("i am a great human");

// Find Middle Alphabet
function getMiddle(c, d) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letter1 = alphabet.indexOf(c);
  let letter2 = alphabet.indexOf(d);
  let middle = (letter1 + letter2) / 2;
  let letterLength;

  if (middle % 2 == 0.5) {
      letterLength = 2;
  } else {
      letterLength = 1;
  }

  return alphabet.substring(middle, middle + letterLength);
}

getMiddle("Q", "U");
getMiddle("R", "U");
getMiddle("T", "Z");