function expandedForm(num) {
  num = num.toString();
  const equation = [];
  let multiplier = 1;
  for (let i = 1; i <= num.length; i++) {
    const digit = num[num.length - i];
    digit > 0 && equation.unshift(digit * multiplier);
    multiplier *= 10;
  }
  return equation.join("+");
}

// 2nd Solution
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join("+");

// 3rd Solution
function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 1) {
    var remainder = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}

// 4th Solution
const expandedForm = (num) => {
  const numStr = String(num);
  let res = "";
  for (let i = 0; i < numStr.length; i++) {
    const placeValue = +numStr[i] * Math.pow(10, numStr.length - 1 - i);
    if (numStr.length - i > 1) {
      res += `${placeValue}+`;
    } else {
      res += placeValue;
    }
  }
  return res;
};

console.log(expandedForm(734));
