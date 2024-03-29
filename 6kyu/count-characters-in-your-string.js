// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution


// function count(string) {
//     return string.split('').reduce((acc, curr) => {
//         return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//       }, {});
      
//   }

 

function count (string) {  
    return string.split("").reduce((obj, elem) => {
      if (elem in obj)
        obj[elem]++;
      else
        obj[elem] = 1;
      return obj;
    }, {});
  }

  
  console.log(count('aba'))