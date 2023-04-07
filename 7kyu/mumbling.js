// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// Solution


// function accum(str) {
// 	let newStr = str.toLowerCase().split('')
//     let arr = []
//     for (i = 0; i < newStr.length; i++) {
//         arr.push(newStr[i].repeat(i+1))
//     }
//     return arr.map(word => 
// 		word[0].toUpperCase() + word.slice(1).toLowerCase()
// 	).join('-')
// }

function accum(str) {
	let newStr = str.toLowerCase().split('')
    let arr = newStr.map((letter,index) => letter.repeat(index +1))
    return arr.map(word => 
		word[0].toUpperCase() + word.slice(1).toLowerCase()
	).join('-')
}

// Solution 2

function accum(str) {
	return str.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('-');
}

console.log(accum("ZpglnRxqenU"));