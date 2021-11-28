/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
  // Your code here
  if (inputArray.length === 0) return 0;
  let count = 1,
    max = 1;
  inputArray.sort((a, b) => a - b);
  for (let i = 0; i <= inputArray.length; i++) {
    if (inputArray[i] - inputArray[i - 1] === 1) {
      count = count + 1;
      max = Math.max(max, count);
    } else if (inputArray[i] === inputArray[i - 1]) continue;
    else {
      count = 1;
    }
  }
  return max;
};

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
