// function likes(names) {
//     for (i=0 ; i<names.length; i++) {
//         if (names == null || names.Length == 0) {
//             return true
//             }
//         else if (names.length === 1) {
//             return `${names[0]} likes this`
//            }
//         else if (names.length === 2) {
//          return `${names[0]} and ${names[1]} like this`
//         }
//         else if (names.length === 3) {
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`
//            }
//         else if (names.length >= 4) {
//             return `${names[0]}, ${names[1]} and ${names.splice(0,2).length} others like this`
//            }
//        }
// }

function likes(names) {
    const [first, second, third] = names;
    switch (names.length) {
      case 0: return "no one likes this";
      case 1: return `${first} likes this`;
      case 2: return `${first} and ${second} like this`;
      case 3: return `${first}, ${second} and ${third} like this`;
      default: return `${first}, ${second} and ${names.length - 2} others like this`;
    }
  }

console.log(likes([]));
// console.log(likes(['Alex']));