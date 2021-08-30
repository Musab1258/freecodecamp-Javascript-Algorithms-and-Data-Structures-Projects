const realNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function toRomanNumeral(num) {
  // body...
  let romanized = '';
  for (let i = 0; i < realNums.length; i++) {
    while (realNums[i] <= num) {
      /* code */
      if (num >= realNums[i]) {
        romanized += romanNums[i];
        num -= realNums[i];
      }
    }
  }
  return romanized;
}

let you = toRomanNumeral(27);
console.log(you);