// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function celsiusToFahrenheit(arr) {
  
  let fahrenheit = 0
  let result = []
  for (let i = 0; i<arr.length; i++){
    fahrenheit = arr[i] * (9/5) + 32
    result.push(Math.floor(fahrenheit))
  } 
  return result;
}

assignment.sumOfNumbers = sumOfNumbers;
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

