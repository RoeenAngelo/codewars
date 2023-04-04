// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.


// Solution

function sumEvenNumbers(input) {
    let filtered = input.filter(a => a % 2 === 0)
    return filtered.reduce((p,c) => p + c, 0)
  }

//   Solution 2

sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)