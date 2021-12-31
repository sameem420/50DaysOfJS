function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter((value) => value === arr[i]).length;
    if (count % 2 == 1) {
      return arr[i];
    }
  }
  return -1;
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
