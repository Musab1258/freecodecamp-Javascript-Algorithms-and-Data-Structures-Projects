const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function rot13(str) {
  // body...
  let regex_cc = /[A-Z]/ ;
  let arr = str.toUpperCase().split('');
  let result = '';
  for (i = 0; i < str.length; i++) {
    if (regex_cc.test(arr[i])) {
      for (j = 0; j < abc.length; j++) {
        if (arr[i] == abc[j] && j < 13) {
          result += abc[j+13];
        }else if (arr[i] == abc[j] && j > 12) {
          result += abc[j-13];
        } 
      }
    }
    else {
        result += arr[i];
    }
  }
  return result;
}

let we = rot13("SERR PBQR PNZC");
console.log(we);
