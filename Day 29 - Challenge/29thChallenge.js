function accum(s) {
  s = s.toLowerCase();
  let newStr = [];
  for (let i = 0; i < s.length; i++) {
    let newCh = s[i].repeat(i + 1);
    newCh = newCh.charAt(0).toUpperCase() + newCh.slice(1);
    newStr.push(newCh);
    newStr.push("-");
  }
  newStr.pop();
  return newStr.join("");
}

console.log(accum("ZpglnRxqenU"));
