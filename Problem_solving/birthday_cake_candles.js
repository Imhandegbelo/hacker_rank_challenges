function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0;
  let tallest = Math.max(...candles);

  for (var i = 0; i < candles.length; i++) {
    if (candles[i] == tallest) {
      count++;
    }
  }
  return count;
}

let test = [3,2,1,3]
console.log(birthdayCakeCandles(test))
//DONE