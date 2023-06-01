// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// Solution

// function isPangram(string){
//     return new Set(string
//         .toLowerCase()
//         .replace(/[^a-z]/g, '')
//         ).size === 26 ? true : false
//   }


  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog."))