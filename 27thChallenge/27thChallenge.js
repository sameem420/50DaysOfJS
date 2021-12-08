function getCount(str) {
  str = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let letter of str) {
    if (vowels.includes(letter)) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

// 2nd Solution
function getCount(str) {
  const vowelsCount = str.match(/[aeiou]/gi).length;
  return vowelsCount;
}
console.log(getCount("abracadabra"));
