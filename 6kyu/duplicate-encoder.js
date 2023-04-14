// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// Solution

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map((a, i, w) => {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    let newArr =  arr.map((elem, index, array) => {
        // console.log(array.indexOf(elem));
        // console.log(array.lastIndexOf(elem));
        return array.indexOf(elem) == array.lastIndexOf(elem) ? '(' : ')'
      })
    let finalArr = newArr.join('');

    console.log(newArr);
    console.log(finalArr);

}

console.log(duplicateEncode('recede'));