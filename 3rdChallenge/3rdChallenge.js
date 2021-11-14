const num = 3849;

function reverseGivenInteger(num) {
  let reversedNumber = 0,
    remainder = 0;
  while (num > 0) {
    remainder = num % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reversedNumber;
}

// 2nd Solution
// return num.toString().split("").reverse().join("");

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
