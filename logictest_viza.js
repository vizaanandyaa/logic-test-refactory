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