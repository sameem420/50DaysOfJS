function findOutlier(integers) {
  let evens = [],
    odds = [];
  for (let num of integers) {
    if (num % 2 != 0) {
      odds.push(num);
    } else {
      evens.push(num);
    }
  }
  return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([2, 6, 8, 10, 3]));
