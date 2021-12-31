/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  let digit = parseInt(digits.join(""), baseA);
  const numAtRequiredBase = digit.toString(baseB);
  let newArray = numAtRequiredBase.split("");

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "a") {
      newArray[i] = 10;
    } else if (newArray[i] === "b") {
      newArray[i] = 11;
    } else if (newArray[i] === "c") {
      newArray[i] = 12;
    } else if (newArray[i] === "d") {
      newArray[i] = 13;
    } else if (newArray[i] === "e") {
      newArray[i] = 14;
    } else if (newArray[i] === "f") {
      newArray[i] = 15;
    } else {
      newArray[i] = parseInt(newArray[i]);
    }
  }
  return newArray;
};

console.log(convertDigitsToAskedBase([5, 8], 10, 16));
