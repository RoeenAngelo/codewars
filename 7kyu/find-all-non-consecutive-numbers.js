function allNonConsecutive (arr) {
    let arr2 = [];
    for (i=1; i < arr.length; i++) {
      if (arr[i] - arr[i-1] != 1) {
        arr2.push({i:i, n: arr[i]})
      }
    }
    return arr2
  }

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));