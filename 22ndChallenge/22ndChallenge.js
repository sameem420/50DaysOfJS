let uniqueInOrder = (iterable) => {
  let arr = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) arr.push(iterable[i]);
  }
  return arr;
};

// Solution # 2
let uniqueInOrder = (iterable) => {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
