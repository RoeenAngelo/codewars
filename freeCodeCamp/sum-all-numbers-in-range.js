// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


function sumAll(arr) {
  let lowest = Math.min(...arr)
  let highest = Math.max(...arr)

  if (lowest !== highest) {
    return lowest + sumAll([lowest + 1, highest])
  }  else {
    return lowest
  }
}


// function sumAll(arr) {
//   let lowest = Math.min(...arr)
//   let highest = Math.max(...arr)
//   let total = 0

//   for (let i = lowest; i <= highest; i++){
//     total += i
//   }
//   return total
// }


// function sumAll(arr) {
//   let lowest = Math.min(...arr)
//   let highest = Math.max(...arr)
//   let total = lowest

//   while (lowest < highest) {
//     total += lowest + 1
//     lowest++
//   }
//   return total
// }