function palindromeChecker(str) {
  // body...
  let regex = /[^A-Za-z0-9]/g;
  let arr = str.replace(regex, "").toLowerCase().split('');
  let reverse = [];
  for (var i = 0; i < arr.length; i++) {
    reverse[i] = arr[arr.length-(i+1)];
  }
  if (arr.join('') == reverse.join('')) {
    return "A palindrome";
  }else {
    return "Not a palindrome";
  }
}

let me = palindromeChecker("ada");
console.log(me);