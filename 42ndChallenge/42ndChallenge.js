function sumTwoSmallestNumbers(numbers) {
  let min = numbers[0];
  let secondMin = numbers[1];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      secondMin = min;
      min = numbers[i];
    } else if (numbers[i] < secondMin) {
      secondMin = numbers[i];
    }
  }
  return min + secondMin;
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
