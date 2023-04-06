// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// Solution

// function XO(str) {
//     let newStr = str.split('')
//     const exes = newStr.filter(word => word.toString().toLowerCase().includes('x'))
//     const ohs = newStr.filter(word => word.toString().toLowerCase().includes('o'))
//     return exes.length == ohs.length ? true : false
// }

// Solution 2

function XO(str) {
    let newStr = str.toLowerCase().split('')
    return newStr.filter(word => word === 'x').length === newStr.filter(word => word === 'o').length
}

console.log(XO('Ooxx'));

