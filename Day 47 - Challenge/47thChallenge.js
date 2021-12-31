function isIsogram(str) {
  var hash = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}

// Solution # 2
return new Set(str.toLowerCase()).size === str.length;

// Solution # 3
return str
  .toLowerCase()
  .split("")
  .every((val, idx) => str.indexOf(val) === idx);

console.log(isIsogram("moOse"));
