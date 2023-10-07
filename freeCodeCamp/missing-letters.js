// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// fearNotLetter("abce") should return the string d.
// fearNotLetter("abcdefghjklmno") should retgiturn the string i.
// fearNotLetter("stvwx") should return the string u.
// fearNotLetter("bcdf") should return the string e.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}
fearNotLetter("abce");
