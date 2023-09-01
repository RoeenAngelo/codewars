// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// function testEven(n) {
//   return n % 2 === 0 ? true : false
// }

// console.log(testEven(9))

/*
  1. Convert string to an array
  2. Create a new empty array named final
  3. Iterate over the array using for loop
  4. If A supercedes a number, add one to that number using the addOne function and push it to the newArr
  5. If B supercedes a number, subtract one to that number using the subtraction function ""
  6. else push the element to the new array

*/

const addOne = num => num + 1
const subOne = num => num - 1


function usePotions(str) {
  const finalArr = []
  const strArr = str.split('')

  for( let i = 0; i < strArr.length; i++) {
    if(strArr[i] === 'A') {
      finalArr.push(addOne(+strArr[i-1]) )
    }
    else if (strArr[i] === 'B') {
      finalArr.push(subOne(+strArr[i-1] ))
    }
    else if (strArr[i+1] !== 'A' && strArr[i+1] !== 'B') {
      finalArr.push(+strArr[i])
    }
    // else {
    //   finalArr.push(+strArr[i])
    // }
  }

  return finalArr.join('').toString()

}

console.log(usePotions('3A78B51'))