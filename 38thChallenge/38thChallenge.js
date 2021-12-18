const valid = (string) => {
  if (string.length <= 1) return false;
  string = string.split(" ").join("");
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      let temp = +string[i] + +string[i];
      if (temp > 9) temp - 9;
      sum += temp;
    }
  }
  return sum % 10 === 0 ? true : false;
};

console.log(valid("4539 3195 0343 6467"));
