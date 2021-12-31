const unionOfArrays = (arr1, arr2) => {
  const union = [...new Set([...arr1, ...arr2])];
  return union;
};

// Solution # 2
const unionOfArrays = (arr1, arr2) => {
  const arr = arr1.concat(arr2);
  return arr.filter((elem, index) => {
    return arr.indexOf(elem) === index;
  });
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
