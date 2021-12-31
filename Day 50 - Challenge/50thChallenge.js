function getMiddle(s) {
  let mid = 0;
  if (s.length % 2 !== 0) {
    mid = ~~(s.length / 2);
    return s[mid];
  } else {
    mid = s.length / 2;
    return s[mid - 1] + s[mid];
  }
}

console.log(getMiddle("middle"));
