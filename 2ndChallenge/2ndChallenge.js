const str = "JavaScript is awesome";

function reverseAString(str) {
  let reversedString = "";
  for (let char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

// 2nd SOlution
// return str.split('').reverse().join('');

console.log(`Reversed string is: ${reverseAString(str)}`);
