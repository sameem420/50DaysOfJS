const obj = { key: 1 };

function isEmpty(obj) {
  for (var x in obj) {
    return false;
  }
  return true;
}

// 2nd Solution
// return Object.keys(obj).length === 0;

console.log(`is empty object: ${isEmpty(obj)}`);
