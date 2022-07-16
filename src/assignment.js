// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
  let i = 0;
  let sum = 0;

  for (i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}
sumOfNumbers()

function celsiusToFahrenheit(arr) {
  
  let fahrenheit = 0
  let result = 0
  for (let i = 0; i<arr.length; i++){
    fahrenheit = arr[i] * (9/5) + 32
    result = Math.floor(fahrenheit)
  } 
  return result;
}
celsiusToFahrenheit()


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

