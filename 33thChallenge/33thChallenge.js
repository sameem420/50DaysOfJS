function set(arrOfNum) {
  return [...new Set([...arrOfNum])];
}

// Solution # 2
return arrOfNum.filter((val, idx) => idx === arrOfNum.indexOf(val));

// Solution # 3
if (arrOfNum.length > 0) {
  var result = [];

  arrOfNum.forEach((elem) => {
    if (result.indexOf(elem) === -1) {
      result.push(elem);
    }
  });

  return result;
}
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));
