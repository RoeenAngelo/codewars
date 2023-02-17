// Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] should return 9. 

function squareSum(numbers){
    return numbers.reduce((a,c) => c**2 + a, 0)
 }