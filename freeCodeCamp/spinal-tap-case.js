// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// spinalCase("AllThe-small Things") should return the string all-the-small-things.

/* 
  input: str
  output: str

  convert string to an array
  replace spaces,underscores and separate two capitalized words
  convert str to an array and to lower case 
*/

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("AllThe-small Things");
